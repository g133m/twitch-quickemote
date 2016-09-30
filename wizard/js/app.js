angular.module('wizardApp', ['ui.bootstrap', 'ui.select', 'qImproved'])

.controller('mainController', ['$scope', 'emoteTemplates', '$uibModal', '$timeout', '$interval', 'emoteGetter', function($scope, emoteTemplates, $uibModal, $timeout, $interval, emoteGetter) {
    $scope.loading = true;

   emoteGetter.getEmotes().then(function() {
        $timeout(function() {
            $scope.buttons = window.__g133mbuttons || [];
            $scope.loading = false;
        });
    });

    $scope.addButton = function() {
        $scope.buttons.push({
            text: '',
            type: 'single',
            //timing: 800,
            icon: 'https://static-cdn.jtvnw.net/emoticons/v1/88/1.0',
            size: 1
        });
    };
    $scope.urlToFile = null;

    $scope.download = function() {
        window.open($scope.urlToFile);
    };

    $scope.makeBlob = function(text) {
        var data = new Blob([text], {type: 'text/javascript'});
        var reader = new FileReader();
        reader.onload = function(e) {
            $timeout(function(){
                $scope.urlToFile = e.target.result;
                $scope.generating = false;
            });
        };

        reader.readAsDataURL(data);
    };

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
        $scope.lookupIcon(function(emote) {
            button.text += emote.code + ' ';
        });
    };

    $scope.createNew = function() {
        $scope.addNew = true;
        $scope.importing = false;
        $scope.buttons = [];
        $scope.addButton();
    };

    $scope.importButtons = function() {
        if(!$scope.importText)
            return;
        try {
            var matches = $scope.importText.match(/(\{"text.+)/g).map(function(m) {
                if(m[m.length-1] == ',')
                    m = m.substr(0, m.length-1);
                return JSON.parse(m);
            });
            $scope.buttons = $scope.buttons.concat(matches);
            $scope.importing = false;
        } catch(e) {
            $scope.error = 'Unable to import';
        }

    };

    $scope.lookupIcon = function(callback) {
        return $uibModal.open({
            templateUrl: '/emoteSearch',
            controller: 'emoteSearchController',
            scope: $scope,
            resolve: {
                callback: function() {
                    return callback;
                }
            }
        }).result;
    };


    $interval(function() {
        if($scope.generating) {
            $scope.result = '[\n  '+
                $scope.buttons.map(function(b) {
                    return JSON.stringify(b);
                }).join(',\n  ')
            + '\n]';

            var res = document.getElementById('/scriptfile.js').innerHTML.replace('{script}', $scope.result);
            $scope.makeBlob(res);
        }
    }, 2000);
    var buttonsUpdated = _.debounce(function(b) {
        
        
        $scope.result = '[\n  '+
            $scope.buttons.map(function(b) {
                return JSON.stringify(b);
            }).join(',\n  ')
        + '\n]';

        var res = document.getElementById('/scriptfile.js').innerHTML.replace('{script}', $scope.result);
        $scope.makeBlob(res);
    }, 2000);

    $scope.$watch('buttons', function(b){ 
        if(!b || !b.length)
            return;
        $scope.generating = true;
    }, true);
}])

.controller('emoteSearchController', ['$scope', 'emoteGetter', 'emoteTemplates', '$timeout', 'callback', function($scope, emoteGetter, emoteTemplates, $timeout, callback) {
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
        if(callback)
            return callback(emote);
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
        getSubscribers: function() {
            var d = $q.defer();
            if(getter.subscribers)
                d.resolve(getter.subscribers);
            else
                $http.get('https://twitchemotes.com/api_cache/v2/subscriber.json').then(function(r) {
                    if(r && r.data)
                        getter.subscribers = r.data;
                    d.resolve(getter.subscribers);
                }, function() {
                    d.reject();
                })
            return d.promise;
        },
        subscribers: null,
        getEmotes: function(channel) {
            channel = (channel || '').toLowerCase();
            var d = $q.defer();
            var promise = null;
            if(channel) {
                $q.allSettled([
                    getter.getSubscribers(),
                    $http.get('https://api.betterttv.net/2/channels/'+channel)
                ]).then(function(resp) {
                    var t = resp[0].value, b = resp[1].value;
                    if(!t)
                        t = [];
                    else
                        t = (t.channels[channel] || {}).emotes || [];

                    if(!b || b.status != 200)
                        b = [];
                    else
                        b = b.data.emotes;

                    d.resolve({
                        twitch: t,
                        bttv: b
                    });
                });
            } else if(getter.twitchEmotes.length && getter.bttvEmotes.length) {
                    d.resolve({twitch: getter.twitchEmotes, bttv: getter.bttvEmotes});
            } else {
                $q.allSettled([
                    $http.get('https://twitchemotes.com/api_cache/v2/global.json'),
                    $http.get('https://api.betterttv.net/2/emotes')
                ]).then(function(resp) {
                    var t = resp[0].value, b = resp[1].value;
                    if(!t || t.status != 200)
                        t = {};
                    else 
                        t = t.data.emotes;

                    if(!b || b.status != 200)
                        b = [];
                    else 
                        b = b.data.emotes;
                    var twitchEmotes = [];
                    for(var code in t) {
                        t[code].code = code;
                        t[code].source = 'twitch';
                        twitchEmotes.push(t[code]);
                    }

                    d.resolve({
                        twitch: twitchEmotes,
                        bttv:b
                    });
                });
            }

            return d.promise;
        }
    };

    return getter;
}]);

angular.module("qImproved", [])
.config(function ($provide) {
  $provide.decorator("$q", function ($delegate) {

    /**
     * $q.allSettled returns a promise that is fulfilled with an array of promise state snapshots, 
     * but only after all the original promises have settled, i.e. become either fulfilled or rejected.
     * 
     * This method is often used in order to execute a number of operations concurrently and be 
     * notified when they all finish, regardless of success or failure.
     *
     * @param promises array or object of promises
     * @returns {Promise} when resolved will contain an an array or object of resolved or rejected promises.
     * A resolved promise have the form { status: "fulfilled", value: value }.  A rejected promise will have
     * the form { status: "rejected", reason: reason }.
     */
    function allSettled(promises) {
      var deferred = $delegate.defer(),
          counter = 0,
          results = angular.isArray(promises) ? [] : {};

      angular.forEach(promises, function(promise, key) {
        counter++;
        $delegate.when(promise).then(function(value) {
          if (results.hasOwnProperty(key)) return;
          results[key] = { status: "fulfilled", value: value };
          if (!(--counter)) deferred.resolve(results);
        }, function(reason) {
          if (results.hasOwnProperty(key)) return;
          results[key] = { status: "rejected", reason: reason };
          if (!(--counter)) deferred.resolve(results);
        });
      });

      if (counter === 0) {
        deferred.resolve(results);
      }

      return deferred.promise;
    }
    $delegate.allSettled = allSettled;
    return $delegate;
  });
});