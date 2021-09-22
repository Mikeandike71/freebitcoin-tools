// ==UserScript==
// @name         Freebitco.in Auto Faucet Test
// @github       https://github.com/lolimune
// @version      0.1
// @description  Freebitco.in Auto Faucet Test
// @author       Loli Mune
// @match        https://freebitco.in/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function() {
'use strict';
if ($('#play_without_captchas_button').is(':visible'))
    setTimeout(function(){ $('#play_without_captchas_button').click();},100000);
if ($('#free_play_form_button').is(':visible'))
    setTimeout(function(){ $('#free_play_form_button').click();},100000);
if ($('.close-reveal-modal').is(':visible'))
    setTimeout(function(){ $('.close-reveal-modal').click(); },100000);

//setTimeout(reward.select,10000);
//setInterval(reward.select,10000);
})();
