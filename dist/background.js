/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/

chrome.runtime.onInstalled.addListener(function (data) {
    if (data.reason == 'install') {
        onInstall();
        // setupContextMenu();
    }
});
const onInstall = () => {
    console.log('Installed');
    chrome.tabs.create({
        url: 'chrome-extension://' + chrome.runtime.id + '/invoice.html',
    });
};

/******/ })()
;
//# sourceMappingURL=background.js.map