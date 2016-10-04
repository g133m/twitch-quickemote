/*
  Twitch Quick Emote buttons initializer script
  Author: g133m
*/
this.$ = this.jQuery = jQuery.noConflict(true);

var initializeEmoteButtons = function(buttons) {
    $(document).ready(function() {
        var menu = $('<div class="emoticon-selector hidden"><div class="emoticon-selector-box dropmenu"><div class="emotes channel-emotes"><h5 style="text-align:center"><a href="https://g133m.github.io/twitch-quickemote/wizard" target="_blank">QuickEMOTE</a></h5><div class="emoticon-grid"></div></div></div>').appendTo('.chat-interface');
        menu.find('.emoticon-selector-box')[0].style.border = '1px solid #aaaaaa';
        var emoteContainer = $('.emoticon-grid', menu);
        var btnFormat = '<span class="emoticon tooltip " style="background-image: url(&quot;{url}&quot;);" original-title="{title}"></span>';
        buttons.forEach(function(b) {
            var btn = $(btnFormat.replace('{url}', b.icon).replace('{title}', b.size)).appendTo(emoteContainer);
            btn.click(function() { 
                $('.chat_text_input').val(b.text);
                $('.js-chat-buttons__submit').click();
                if(!b.noClose)
                    menu.toggleClass('hidden', true);
            });
        });

        var icon = $('<a class="button button--icon-only float-right" style="margin-right: 8px"><img src="https://g133m.github.io/twitch-quickemote/wizard/img/button.svg" style="height: 20px; margin-top: 6px" /></a>');
        icon.click(function() {
            menu.toggleClass('hidden');
        });

        icon.insertAfter('.chat-buttons-container .js-chat-buttons__submit');
    });
};