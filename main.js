/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactTab.js":
/*!***************************!*\
  !*** ./src/contactTab.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContactTab);

function renderContactTab() {
  const body = document.querySelector('body');

  const contentDiv = document.createElement('div');
  const contactHeading = document.createElement('h1');
  const tagLine = document.createElement('h2');
  const hoursHeading = document.createElement('h3');
  const hoursInfo = document.createElement('p');
  const phoneHeading = document.createElement('h3');
  const phoneInfo = document.createElement('p');
  const emailHeading = document.createElement('h3');
  const emailInfo = document.createElement('p');

  contentDiv.id = 'content';
  contactHeading.textContent = 'Contact us!';
  tagLine.textContent = "Seriously, who doesn't like donuts??";
  hoursHeading.textContent = 'Store Hours';
  hoursInfo.textContent = 'Monday through Sunday 7am - 3pm'
  phoneHeading.textContent = 'Phone Information'
  phoneInfo.textContent = 'Telephone: (805)555-1234'
  emailHeading.textContent = 'Email Information'
  emailInfo.textContent = 'Email us at gonuts@do.nut'

  contentDiv.appendChild(contactHeading);
  contentDiv.appendChild(tagLine);
  contentDiv.appendChild(hoursHeading);
  contentDiv.appendChild(hoursInfo);
  contentDiv.appendChild(phoneHeading);
  contentDiv.appendChild(phoneInfo);
  contentDiv.appendChild(emailHeading);
  contentDiv.appendChild(emailInfo);

  body.appendChild(contentDiv);
}


/***/ }),

/***/ "./src/homeTab.js":
/*!************************!*\
  !*** ./src/homeTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _donuts_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./donuts.jpeg */ "./src/donuts.jpeg");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHomeTab);


function renderHomeTab() {
  const body = document.querySelector('body');

  const contentDiv = document.createElement('div');
  const restaurantImage = document.createElement('img');
  const restaurantName = document.createElement('h1');
  const tagLine = document.createElement('h2');
  const restaurantCopy = document.createElement('p');

  contentDiv.id = 'content';
  restaurantImage.src = _donuts_jpeg__WEBPACK_IMPORTED_MODULE_0__;
  restaurantName.textContent = 'Go Nuts for Do Nuts';
  tagLine.textContent = "Seriously, who doesn't like donuts??";
  restaurantCopy.textContent = "Go Nuts for Do Nuts has been a family owned and operated donut shop since 1971. Known for both our classics (for when you just want an ol' fashioned glazed donut) and our wacky specials (blueberry walnut BACON anyone??), we put care and love into all our creations and always treat our customers as if they were part of the family. But don't take our word for it, come on in and try a donut for yourself!";

  contentDiv.appendChild(restaurantImage);
  contentDiv.appendChild(restaurantName);
  contentDiv.appendChild(tagLine);
  contentDiv.appendChild(restaurantCopy);

  body.appendChild(contentDiv);
}


/***/ }),

/***/ "./src/menuTab.js":
/*!************************!*\
  !*** ./src/menuTab.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenuTab);

function renderMenuTab() {
  const body = document.querySelector('body');

  const contentDiv = document.createElement('div');
  const menuHeading = document.createElement('h1');
  const tagLine = document.createElement('h2');
  const menuList = document.createElement('ul');
  const menuItem1 = document.createElement('li');
  const menuItem2 = document.createElement('li');
  const menuItem3 = document.createElement('li');
  const menuItem4 = document.createElement('li');
  const menuItem5 = document.createElement('li');

  let menuItems = [];
  menuItems.push(menuItem1, menuItem2, menuItem3, menuItem4, menuItem5);

  contentDiv.id = 'content';
  menuHeading.textContent = 'Our Menu';
  tagLine.textContent = "Seriously, who doesn't like donuts??";
  menuItem1.textContent = 'Old Fashioned Glazed $1.00';
  menuItem2.textContent = 'New Age Glazed $1.20';
  menuItem3.textContent = 'Blueberry Walnut Bacon $1.50';
  menuItem4.textContent = 'Chocolate Glazed $1.20';
  menuItem5.textContent = 'Bavarian Cream $1.50';

  menuItems.forEach((item) => menuList.appendChild(item));

  contentDiv.appendChild(menuHeading);
  contentDiv.appendChild(tagLine);
  contentDiv.appendChild(menuList);

  body.appendChild(contentDiv);
}


/***/ }),

/***/ "./src/donuts.jpeg":
/*!*************************!*\
  !*** ./src/donuts.jpeg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1a35f1178842ee42253.jpeg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homeTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeTab */ "./src/homeTab.js");
/* harmony import */ var _menuTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuTab */ "./src/menuTab.js");
/* harmony import */ var _contactTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactTab */ "./src/contactTab.js");




(0,_homeTab__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLGdCQUFnQixFQUFDOztBQUVoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBLGlFQUFlLGFBQWEsRUFBQztBQUNVOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IseUNBQVU7QUFDbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQSxpRUFBZSxhQUFhLEVBQUM7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZnNDO0FBQ0E7QUFDSzs7QUFFM0Msb0RBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0VGFiLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVUYWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudVRhYi5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ29udGFjdFRhYjtcblxuZnVuY3Rpb24gcmVuZGVyQ29udGFjdFRhYigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGNvbnRhY3RIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgdGFnTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IGhvdXJzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IGhvdXJzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgY29uc3QgcGhvbmVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgcGhvbmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBlbWFpbEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCBlbWFpbEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgY29udGVudERpdi5pZCA9ICdjb250ZW50JztcbiAgY29udGFjdEhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ29udGFjdCB1cyEnO1xuICB0YWdMaW5lLnRleHRDb250ZW50ID0gXCJTZXJpb3VzbHksIHdobyBkb2Vzbid0IGxpa2UgZG9udXRzPz9cIjtcbiAgaG91cnNIZWFkaW5nLnRleHRDb250ZW50ID0gJ1N0b3JlIEhvdXJzJztcbiAgaG91cnNJbmZvLnRleHRDb250ZW50ID0gJ01vbmRheSB0aHJvdWdoIFN1bmRheSA3YW0gLSAzcG0nXG4gIHBob25lSGVhZGluZy50ZXh0Q29udGVudCA9ICdQaG9uZSBJbmZvcm1hdGlvbidcbiAgcGhvbmVJbmZvLnRleHRDb250ZW50ID0gJ1RlbGVwaG9uZTogKDgwNSk1NTUtMTIzNCdcbiAgZW1haWxIZWFkaW5nLnRleHRDb250ZW50ID0gJ0VtYWlsIEluZm9ybWF0aW9uJ1xuICBlbWFpbEluZm8udGV4dENvbnRlbnQgPSAnRW1haWwgdXMgYXQgZ29udXRzQGRvLm51dCdcblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkaW5nKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YWdMaW5lKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChob3Vyc0hlYWRpbmcpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvdXJzSW5mbyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGhvbmVIZWFkaW5nKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChwaG9uZUluZm8pO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGVtYWlsSGVhZGluZyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZW1haWxJbmZvKTtcblxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZVRhYjtcbmltcG9ydCBkb251dEltYWdlIGZyb20gJy4vZG9udXRzLmpwZWcnO1xuXG5mdW5jdGlvbiByZW5kZXJIb21lVGFiKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgcmVzdGF1cmFudEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgY29uc3QgdGFnTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNvbnN0IHJlc3RhdXJhbnRDb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gIGNvbnRlbnREaXYuaWQgPSAnY29udGVudCc7XG4gIHJlc3RhdXJhbnRJbWFnZS5zcmMgPSBkb251dEltYWdlO1xuICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9ICdHbyBOdXRzIGZvciBEbyBOdXRzJztcbiAgdGFnTGluZS50ZXh0Q29udGVudCA9IFwiU2VyaW91c2x5LCB3aG8gZG9lc24ndCBsaWtlIGRvbnV0cz8/XCI7XG4gIHJlc3RhdXJhbnRDb3B5LnRleHRDb250ZW50ID0gXCJHbyBOdXRzIGZvciBEbyBOdXRzIGhhcyBiZWVuIGEgZmFtaWx5IG93bmVkIGFuZCBvcGVyYXRlZCBkb251dCBzaG9wIHNpbmNlIDE5NzEuIEtub3duIGZvciBib3RoIG91ciBjbGFzc2ljcyAoZm9yIHdoZW4geW91IGp1c3Qgd2FudCBhbiBvbCcgZmFzaGlvbmVkIGdsYXplZCBkb251dCkgYW5kIG91ciB3YWNreSBzcGVjaWFscyAoYmx1ZWJlcnJ5IHdhbG51dCBCQUNPTiBhbnlvbmU/PyksIHdlIHB1dCBjYXJlIGFuZCBsb3ZlIGludG8gYWxsIG91ciBjcmVhdGlvbnMgYW5kIGFsd2F5cyB0cmVhdCBvdXIgY3VzdG9tZXJzIGFzIGlmIHRoZXkgd2VyZSBwYXJ0IG9mIHRoZSBmYW1pbHkuIEJ1dCBkb24ndCB0YWtlIG91ciB3b3JkIGZvciBpdCwgY29tZSBvbiBpbiBhbmQgdHJ5IGEgZG9udXQgZm9yIHlvdXJzZWxmIVwiO1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEltYWdlKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFnTGluZSk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudENvcHkpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCByZW5kZXJNZW51VGFiO1xuXG5mdW5jdGlvbiByZW5kZXJNZW51VGFiKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgbWVudUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCB0YWdMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBtZW51SXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBtZW51SXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb25zdCBtZW51SXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGxldCBtZW51SXRlbXMgPSBbXTtcbiAgbWVudUl0ZW1zLnB1c2gobWVudUl0ZW0xLCBtZW51SXRlbTIsIG1lbnVJdGVtMywgbWVudUl0ZW00LCBtZW51SXRlbTUpO1xuXG4gIGNvbnRlbnREaXYuaWQgPSAnY29udGVudCc7XG4gIG1lbnVIZWFkaW5nLnRleHRDb250ZW50ID0gJ091ciBNZW51JztcbiAgdGFnTGluZS50ZXh0Q29udGVudCA9IFwiU2VyaW91c2x5LCB3aG8gZG9lc24ndCBsaWtlIGRvbnV0cz8/XCI7XG4gIG1lbnVJdGVtMS50ZXh0Q29udGVudCA9ICdPbGQgRmFzaGlvbmVkIEdsYXplZCAkMS4wMCc7XG4gIG1lbnVJdGVtMi50ZXh0Q29udGVudCA9ICdOZXcgQWdlIEdsYXplZCAkMS4yMCc7XG4gIG1lbnVJdGVtMy50ZXh0Q29udGVudCA9ICdCbHVlYmVycnkgV2FsbnV0IEJhY29uICQxLjUwJztcbiAgbWVudUl0ZW00LnRleHRDb250ZW50ID0gJ0Nob2NvbGF0ZSBHbGF6ZWQgJDEuMjAnO1xuICBtZW51SXRlbTUudGV4dENvbnRlbnQgPSAnQmF2YXJpYW4gQ3JlYW0gJDEuNTAnO1xuXG4gIG1lbnVJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBtZW51TGlzdC5hcHBlbmRDaGlsZChpdGVtKSk7XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51SGVhZGluZyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFnTGluZSk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgcmVuZGVySG9tZVRhYiBmcm9tICcuL2hvbWVUYWInO1xuaW1wb3J0IHJlbmRlck1lbnVUYWIgZnJvbSAnLi9tZW51VGFiJztcbmltcG9ydCByZW5kZXJDb250YWN0VGFiIGZyb20gJy4vY29udGFjdFRhYidcblxucmVuZGVySG9tZVRhYigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9