/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/backgroundHelpers.ts":
/*!****************************************!*\
  !*** ./src/utils/backgroundHelpers.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewInvoicePage: () => (/* binding */ createNewInvoicePage)
/* harmony export */ });
const createNewInvoicePage = () => {
    chrome.tabs.create({
        url: 'chrome-extension://' + chrome.runtime.id + '/invoice.html',
    });
};


/***/ }),

/***/ "./src/utils/contextMenu.ts":
/*!**********************************!*\
  !*** ./src/utils/contextMenu.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   attachContextMenuListeners: () => (/* binding */ attachContextMenuListeners),
/* harmony export */   setupContextMenu: () => (/* binding */ setupContextMenu)
/* harmony export */ });
/* harmony import */ var _backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backgroundHelpers */ "./src/utils/backgroundHelpers.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const setupContextMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        chrome.contextMenus.create({
            contexts: ['page'],
            title: 'Create invoice',
            id: 'createInvoice',
        }, () => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError.message);
            }
            else {
                console.log('Context menu created successfully');
                attachContextMenuListeners();
            }
        });
    }
    catch (e) {
        console.error(e);
        return;
    }
});
const attachContextMenuListeners = () => {
    var _a, _b;
    (_b = (_a = chrome === null || chrome === void 0 ? void 0 : chrome.contextMenus) === null || _a === void 0 ? void 0 : _a.onClicked) === null || _b === void 0 ? void 0 : _b.addListener((info, tab) => __awaiter(void 0, void 0, void 0, function* () {
        console.log('Context menu clicked', info, tab);
        (0,_backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__.createNewInvoicePage)();
    }));
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./src/extension/background/background.ts ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/backgroundHelpers */ "./src/utils/backgroundHelpers.ts");
/* harmony import */ var _utils_contextMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/contextMenu */ "./src/utils/contextMenu.ts");


chrome.runtime.onInstalled.addListener(function (data) {
    if (data.reason == 'install') {
        (0,_utils_backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__.createNewInvoicePage)();
        (0,_utils_contextMenu__WEBPACK_IMPORTED_MODULE_1__.setupContextMenu)();
    }
});
chrome.action.onClicked.addListener(function () {
    (0,_utils_backgroundHelpers__WEBPACK_IMPORTED_MODULE_0__.createNewInvoicePage)();
});

})();

/******/ })()
;
//# sourceMappingURL=background.js.map