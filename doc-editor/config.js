/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function(config) {
    // Define changes to default configuration here. For example:
    // config.language = 'fr';
    // config.uiColor = '#AADC6E';
    var lite = config.lite = config.lite || {};
    config.extraPlugins = 'lite';

    lite.includes_debug = ["js/rangy/rangy-core.js", "js/ice.js", "js/dom.js", "js/selection.js", "js/bookmark.js", "lite-interface.js"];
    lite.includes = ["lite-includes.min.js"];
    lite.includes_full = ["lite-includes.js"];
    // set to false if you want change tracking to be off initially
    lite.isTracking = true;
    lite.userStyles = {
        "21": 3,
        "15": 1,
        "18": 2
    };

    // these are the default tooltip values. If you want to use this default configuration, just set lite.tooltips = true;
    lite.tooltips = {
        show: true,
        path: "js/opentip-adapter.min.js",
        classPath: "OpentipAdapter",
        cssPath: "css/opentip.css",
        delay: 500
    };
    lite.tooltipTemplate = "%a by %u, first edit %t, last edit %T";
    //	lite.commands = [/*LITE.Commands.TOGGLE_TRACKING, */LITE.Commands.TOGGLE_SHOW/*, LITE.Commands.ACCEPT_ALL, LITE.Commands.REJECT_ALL, LITE.Commands.ACCEPT_ONE, LITE.Commands.REJECT_ONE */];
    config.enterMode = CKEDITOR.ENTER_BR;
    config.autoParagraph = false;
    config.title = false;


};
