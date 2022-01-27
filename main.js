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
  const contactTabNavItem = document.querySelector('#contact')

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

  contactTabNavItem.style.background = '#ffffff';
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
  const homeTabNavItem = document.querySelector('#home')

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

  homeTabNavItem.style.background = '#ffffff';
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
  const menuTabNavItem = document.querySelector('#menu')

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

  menuTabNavItem.style.background = '#ffffff';
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




// write main code as IIFE to not polute global scope
(function () {
  (0,_homeTab__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLGdCQUFnQixFQUFDOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsaUVBQWUsYUFBYSxFQUFDO0FBQ1U7O0FBRXZDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLHlDQUFVO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkEsaUVBQWUsYUFBYSxFQUFDOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZnNDO0FBQ0E7QUFDSzs7QUFFM0M7QUFDQTtBQUNBLEVBQUUsb0RBQWE7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdFRhYi5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lVGFiLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVUYWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHJlbmRlckNvbnRhY3RUYWI7XG5cbmZ1bmN0aW9uIHJlbmRlckNvbnRhY3RUYWIoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGNvbnRhY3RUYWJOYXZJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKVxuXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29uc3QgY29udGFjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCB0YWdMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgaG91cnNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgY29uc3QgaG91cnNJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBjb25zdCBwaG9uZUhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBjb25zdCBwaG9uZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGNvbnN0IGVtYWlsSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbnN0IGVtYWlsSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICBjb250ZW50RGl2LmlkID0gJ2NvbnRlbnQnO1xuICBjb250YWN0SGVhZGluZy50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzISc7XG4gIHRhZ0xpbmUudGV4dENvbnRlbnQgPSBcIlNlcmlvdXNseSwgd2hvIGRvZXNuJ3QgbGlrZSBkb251dHM/P1wiO1xuICBob3Vyc0hlYWRpbmcudGV4dENvbnRlbnQgPSAnU3RvcmUgSG91cnMnO1xuICBob3Vyc0luZm8udGV4dENvbnRlbnQgPSAnTW9uZGF5IHRocm91Z2ggU3VuZGF5IDdhbSAtIDNwbSdcbiAgcGhvbmVIZWFkaW5nLnRleHRDb250ZW50ID0gJ1Bob25lIEluZm9ybWF0aW9uJ1xuICBwaG9uZUluZm8udGV4dENvbnRlbnQgPSAnVGVsZXBob25lOiAoODA1KTU1NS0xMjM0J1xuICBlbWFpbEhlYWRpbmcudGV4dENvbnRlbnQgPSAnRW1haWwgSW5mb3JtYXRpb24nXG4gIGVtYWlsSW5mby50ZXh0Q29udGVudCA9ICdFbWFpbCB1cyBhdCBnb251dHNAZG8ubnV0J1xuXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRpbmcpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhZ0xpbmUpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoaG91cnNJbmZvKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChwaG9uZUhlYWRpbmcpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHBob25lSW5mbyk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZW1haWxIZWFkaW5nKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChlbWFpbEluZm8pO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XG5cbiAgY29udGFjdFRhYk5hdkl0ZW0uc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmZmZmJztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHJlbmRlckhvbWVUYWI7XG5pbXBvcnQgZG9udXRJbWFnZSBmcm9tICcuL2RvbnV0cy5qcGVnJztcblxuZnVuY3Rpb24gcmVuZGVySG9tZVRhYigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgaG9tZVRhYk5hdkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpXG5cbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCByZXN0YXVyYW50SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBjb25zdCB0YWdMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgY29uc3QgcmVzdGF1cmFudENvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgY29udGVudERpdi5pZCA9ICdjb250ZW50JztcbiAgcmVzdGF1cmFudEltYWdlLnNyYyA9IGRvbnV0SW1hZ2U7XG4gIHJlc3RhdXJhbnROYW1lLnRleHRDb250ZW50ID0gJ0dvIE51dHMgZm9yIERvIE51dHMnO1xuICB0YWdMaW5lLnRleHRDb250ZW50ID0gXCJTZXJpb3VzbHksIHdobyBkb2Vzbid0IGxpa2UgZG9udXRzPz9cIjtcbiAgcmVzdGF1cmFudENvcHkudGV4dENvbnRlbnQgPSBcIkdvIE51dHMgZm9yIERvIE51dHMgaGFzIGJlZW4gYSBmYW1pbHkgb3duZWQgYW5kIG9wZXJhdGVkIGRvbnV0IHNob3Agc2luY2UgMTk3MS4gS25vd24gZm9yIGJvdGggb3VyIGNsYXNzaWNzIChmb3Igd2hlbiB5b3UganVzdCB3YW50IGFuIG9sJyBmYXNoaW9uZWQgZ2xhemVkIGRvbnV0KSBhbmQgb3VyIHdhY2t5IHNwZWNpYWxzIChibHVlYmVycnkgd2FsbnV0IEJBQ09OIGFueW9uZT8/KSwgd2UgcHV0IGNhcmUgYW5kIGxvdmUgaW50byBhbGwgb3VyIGNyZWF0aW9ucyBhbmQgYWx3YXlzIHRyZWF0IG91ciBjdXN0b21lcnMgYXMgaWYgdGhleSB3ZXJlIHBhcnQgb2YgdGhlIGZhbWlseS4gQnV0IGRvbid0IHRha2Ugb3VyIHdvcmQgZm9yIGl0LCBjb21lIG9uIGluIGFuZCB0cnkgYSBkb251dCBmb3IgeW91cnNlbGYhXCI7XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1hZ2UpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YWdMaW5lKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50Q29weSk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcblxuICBob21lVGFiTmF2SXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmZmZmYnO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgcmVuZGVyTWVudVRhYjtcblxuZnVuY3Rpb24gcmVuZGVyTWVudVRhYigpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgbWVudVRhYk5hdkl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpXG5cbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBtZW51SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IHRhZ0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbnN0IG1lbnVJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG1lbnVJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG1lbnVJdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG1lbnVJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbnN0IG1lbnVJdGVtNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgbGV0IG1lbnVJdGVtcyA9IFtdO1xuICBtZW51SXRlbXMucHVzaChtZW51SXRlbTEsIG1lbnVJdGVtMiwgbWVudUl0ZW0zLCBtZW51SXRlbTQsIG1lbnVJdGVtNSk7XG5cbiAgY29udGVudERpdi5pZCA9ICdjb250ZW50JztcbiAgbWVudUhlYWRpbmcudGV4dENvbnRlbnQgPSAnT3VyIE1lbnUnO1xuICB0YWdMaW5lLnRleHRDb250ZW50ID0gXCJTZXJpb3VzbHksIHdobyBkb2Vzbid0IGxpa2UgZG9udXRzPz9cIjtcbiAgbWVudUl0ZW0xLnRleHRDb250ZW50ID0gJ09sZCBGYXNoaW9uZWQgR2xhemVkICQxLjAwJztcbiAgbWVudUl0ZW0yLnRleHRDb250ZW50ID0gJ05ldyBBZ2UgR2xhemVkICQxLjIwJztcbiAgbWVudUl0ZW0zLnRleHRDb250ZW50ID0gJ0JsdWViZXJyeSBXYWxudXQgQmFjb24gJDEuNTAnO1xuICBtZW51SXRlbTQudGV4dENvbnRlbnQgPSAnQ2hvY29sYXRlIEdsYXplZCAkMS4yMCc7XG4gIG1lbnVJdGVtNS50ZXh0Q29udGVudCA9ICdCYXZhcmlhbiBDcmVhbSAkMS41MCc7XG5cbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IG1lbnVMaXN0LmFwcGVuZENoaWxkKGl0ZW0pKTtcblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVIZWFkaW5nKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YWdMaW5lKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51TGlzdCk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcblxuICBtZW51VGFiTmF2SXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmZmZmYnO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHJlbmRlckhvbWVUYWIgZnJvbSAnLi9ob21lVGFiJztcbmltcG9ydCByZW5kZXJNZW51VGFiIGZyb20gJy4vbWVudVRhYic7XG5pbXBvcnQgcmVuZGVyQ29udGFjdFRhYiBmcm9tICcuL2NvbnRhY3RUYWInXG5cbi8vIHdyaXRlIG1haW4gY29kZSBhcyBJSUZFIHRvIG5vdCBwb2x1dGUgZ2xvYmFsIHNjb3BlXG4oZnVuY3Rpb24gKCkge1xuICByZW5kZXJIb21lVGFiKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9