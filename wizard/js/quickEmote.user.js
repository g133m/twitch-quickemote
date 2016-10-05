// ==UserScript==
// @name         Twitch Quick Emote Buttons
// @version      0.1.5
// @match        https://www.twitch.tv/*
// @match        https://g133m.github.io/twitch-quickemote/wizard/
// @copyright    2016+, g133m
// @author       g133m
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require      https://g133m.github.io/twitch-quickemote/wizard/js/main-0.1.5.js
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
})();
