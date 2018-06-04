// ==UserScript==
// @name         Twitch Quick Emote Buttons
// @version      0.1.6
// @match        https://www.twitch.tv/*
// @match        https://g133m.github.io/twitch-quickemote/wizard/
// @copyright    2018+, g133m
// @author       g133m
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @downloadURL  https://g133m.github.io/twitch-quickemote/wizard/js/quickEmote.user.js
// @updateURL    https://g133m.github.io/twitch-quickemote/wizard/js/quickEmote.meta.js
// @namespace    https://g133m.github.io/twitch-quickemote
// @description  Add buttons to quickly send emote-heavy messages to chat
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @run-at       document-idle
// ==/UserScript==
(function() {
    'use strict';
    var btnSaved = GM_getValue('g133mbuttons', '');
    var buttons = [];

    if(btnSaved) {
        buttons = JSON.parse(btnSaved);
    } else {
        GM_setValue("g133mbuttons", '[]');
        localStorage.g133mbuttons_data = '[]';
    }
    unsafeWindow.__g133mbuttonsVERSION = '0.1.5';
    unsafeWindow.__g133mbuttonsSAVED = false;
    if(localStorage.g133mbuttons_savestatus == 'saving') {
        buttons = JSON.parse(localStorage.g133mbuttons_data);
        GM_setValue('g133mbuttons', localStorage.g133mbuttons_data);
        localStorage.g133mbuttons_savestatus = 'saved';
        unsafeWindow.__g133mbuttonsSAVED = true;
    }

    initializeEmoteButtons(
        buttons
    );
    
    
    //Begin MAIN

    this.$ = this.jQuery = jQuery.noConflict(true);
    (function($) {
      if ($.fn.style) {
        return;
      }

      // Escape regex chars with \
      var escape = function(text) {
        return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      };

      // For those who need them (< IE 9), add support for CSS functions
      var isStyleFuncSupported = !!CSSStyleDeclaration.prototype.getPropertyValue;
      if (!isStyleFuncSupported) {
        CSSStyleDeclaration.prototype.getPropertyValue = function(a) {
          return this.getAttribute(a);
        };
        CSSStyleDeclaration.prototype.setProperty = function(styleName, value, priority) {
          this.setAttribute(styleName, value);
          var priority = typeof priority != 'undefined' ? priority : '';
          if (priority != '') {
            // Add priority manually
            var rule = new RegExp(escape(styleName) + '\\s*:\\s*' + escape(value) +
                '(\\s*;)?', 'gmi');
            this.cssText =
                this.cssText.replace(rule, styleName + ': ' + value + ' !' + priority + ';');
          }
        };
        CSSStyleDeclaration.prototype.removeProperty = function(a) {
          return this.removeAttribute(a);
        };
        CSSStyleDeclaration.prototype.getPropertyPriority = function(styleName) {
          var rule = new RegExp(escape(styleName) + '\\s*:\\s*[^\\s]*\\s*!important(\\s*;)?',
              'gmi');
          return rule.test(this.cssText) ? 'important' : '';
        };
      }

      // The style function
      $.fn.style = function(styleName, value, priority) {
        // DOM node
        var node = this.get(0);
        // Ensure we have a DOM node
        if (typeof node == 'undefined') {
          return this;
        }
        // CSSStyleDeclaration
        var style = this.get(0).style;
        // Getter/Setter
        if (typeof styleName != 'undefined') {
          if (typeof value != 'undefined') {
            // Set style property
            priority = typeof priority != 'undefined' ? priority : '';
            style.setProperty(styleName, value, priority);
            return this;
          } else {
            // Get style property
            return style.getPropertyValue(styleName);
          }
        } else {
          // Get CSSStyleDeclaration
          return style;
        }
      };
    })(jQuery);

    var initializeEmoteButtons = function(buttons) {
        $(document).ready(function() {
            $('.chat-interface').style('height','160px','important');
            $('.scroll.chat-messages').style('bottom','160px','important');
            buttons.forEach(function(item) {
                var img = '<img style="height: 22px; margin-top: 2px" src="'+item.icon+'" />';
                var el = $('<a class="button button--icon-only float-left" style="margin-top: 8px;">'+img+'</a>');
                if(buttons.indexOf(item) === 0) { el.css({'clear': 'left'}); }
                el.appendTo('.chat-buttons-container');
                el.dblclick(function() {
                  $('.chat_text_input').val(item.text);
                  $('.js-chat-buttons__submit').click();
                });
            });
        });
    };
})();
