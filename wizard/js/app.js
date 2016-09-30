angular.module('wizardApp', ['ui.bootstrap', 'ui.select'])

.controller('mainController', ['$scope', 'emoteTemplates', '$uibModal', function($scope, emoteTemplates, $uibModal) {

    $scope.buttons = [];

    $scope.addButton = function() {
        $scope.buttons.push({
            text: '',
            type: 'single',
            //timing: 800,
            icon: 'https://static-cdn.jtvnw.net/emoticons/v1/88/1.0',
            size: 1
        });
    };
    var textFile = null
    , makeBlob = function(text) {
        var data = new Blob([text], {type: 'octet/stream'});

        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (textFile !== null) {
          window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);

        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = textFile;
        a.download = 'twitchQuickEmote_buttons.js';
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        return textFile;
    }

    $scope.removeButton = function(button) {
        $scope.buttons.splice($scope.buttons.indexOf(button), 1);
    };

    $scope.setIcon = function(button, emote) {
        button.icon = emoteTemplates.compile(emote)
    };

    $scope.changeIcon = function(button) {
        $scope.lookupIcon().then(function(emote) {
            $scope.setIcon(button, emote);
        });
    };

    $scope.getIconText = function(button) {
        $scope.lookupIcon().then(function(emote) {
            button.text += emote.code + ' ';
        });
    };

    $scope.lookupIcon = function() {
        return $uibModal.open({
            templateUrl: '/emoteSearch',
            controller: 'emoteSearchController',
            scope: $scope
        }).result;
    };

    var template = 

    $scope.generate = function() {
        $scope.result = '[\n  '+
            $scope.buttons.map(function(b) {
                return JSON.stringify(b);
            }).join(',\n  ')
        + '\n]';

        var res = document.getElementById('/scriptfile.js').innerHTML.replace('{script}', $scope.result);
        console.log(res);

        $scope.fileurl = makeBlob(res);
    };
}])

.controller('emoteSearchController', ['$scope', 'emoteGetter', 'emoteTemplates', '$timeout', function($scope, emoteGetter, emoteTemplates, $timeout) {
    $scope.channelText = '';

    $scope.twitchOptions = [];
    $scope.bttvOptions = [];
    $scope.fetchingEmotes = false;
    $scope.error = null;
    $scope.search = _.debounce(function() {
        $scope.fetchingEmotes = true;
        emoteGetter.getEmotes($scope.channelText).then(function(emotes) {
            $timeout(function(){
                $scope.fetchingEmotes = false;
                $scope.twitchOptions = emotes.twitch;
                $scope.bttvOptions = emotes.bttv;
            });
        }, function(e) {
            $timeout(function(){
                $scope.fetchingEmotes = false;
                $scope.error = e;
            });
        });
       
    });

    $scope.search();

    $scope.getImgSrc = function(emote, source) {
        if(emote.img)
            return emote.img;
        emote.source = source;
        emote.img = emoteTemplates.compile(emote);
        return emote.img;
    };

    $scope.setEmote = function(emote) {
        $scope.$close(emote);
    };
}])
.factory('emoteTemplates', function() {
    var emoteTemplates = {
        compile: function(emote, size) {
            var meta = emoteTemplates[emote.source];
            var template = meta.template;
            for(var i=0; i<meta.replacements.length; ++i) {
                template = template.replace(new RegExp('\\{'+i+'\\}', 'g'), emote[meta.replacements[i]]);
            }
            return template.replace(new RegExp('\\{size\\}', 'g'), size || 1);
        },
        bttv: {
            template: 'https://cdn.betterttv.net/emote/{0}/{size}x',
            replacements: ['id']
        },
        twitch: {
            template: 'https://static-cdn.jtvnw.net/emoticons/v1/{0}/{size}.0',
            replacements: ['image_id']
        }
    };
    return emoteTemplates;
    
})

.factory('emoteGetter', ['$http', '$q', function($http, $q) {
    var getter = {
        twitchEmotes: [],
        bttvEmotes: [],
        getEmotes: function(channel) {
            channel = (channel || '').toLowerCase();
            var d = $q.defer();
            var promise = null;
            if(channel) {
                $q.all([
                    $http.get('https://twitchemotes.com/api_cache/v2/subscriber.json'),
                    $http.get('https://api.betterttv.net/2/channels/'+channel)
                ]).then(function(resp) {
                    var t = resp[0], b = resp[1];
                    if(t.status != 200 || b.status != 200)
                        return d.reject("Could not retrieve emotes. Check the twitch channel for typos");

                    d.resolve({
                        twitch: t.data.channels[channel].emotes,
                        bttv: b.data.emotes
                    });
                });
            } else if(getter.twitchEmotes.length && getter.bttvEmotes.length) {
                    d.resolve({twitch: getter.twitchEmotes, bttv: getter.bttvEmotes});
            } else {
                $q.all([
                    $http.get('https://twitchemotes.com/api_cache/v2/global.json'),
                    $http.get('https://api.betterttv.net/2/emotes')
                ]).then(function(resp) {
                    var t = resp[0], b = resp[1];
                    if(t.status != 200 || b.status != 200)
                        return d.reject("Could not retrieve emotes");
                    var twitchEmotes = [];
                    for(var code in t.data.emotes) {
                        t.data.emotes[code].code = code;
                        t.data.emotes[code].source = 'twitch';
                        twitchEmotes.push(t.data.emotes[code]);
                    }

                    d.resolve({
                        twitch: twitchEmotes,
                        bttv: b.data.emotes
                    });
                });
            }

            return d.promise;
        }
    };

    return getter;
}]);