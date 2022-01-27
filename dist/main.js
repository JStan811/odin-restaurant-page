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

  const homeTabMenuItem = document.querySelector('#home');
  const menuTabMenuItem = document.querySelector('#menu');
  const contactTabMenuItem = document.querySelector('#contact');

  const switchTabs = function(tabRender) {
    const contentDiv = document.querySelector('#content');
    contentDiv.remove();

    homeTabMenuItem.style.background = 'mistyrose';
    menuTabMenuItem.style.background = 'mistyrose';
    contactTabMenuItem.style.background = 'mistyrose';
    tabRender();
  }

  homeTabMenuItem.addEventListener('click', () => {
    switchTabs(_homeTab__WEBPACK_IMPORTED_MODULE_0__["default"])
  });
  menuTabMenuItem.addEventListener('click', () => {
    switchTabs(_menuTab__WEBPACK_IMPORTED_MODULE_1__["default"])
  });
  contactTabMenuItem.addEventListener('click', () => {
    switchTabs(_contactTab__WEBPACK_IMPORTED_MODULE_2__["default"])
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLGdCQUFnQixFQUFDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsaUVBQWUsYUFBYSxFQUFDO0FBQ1U7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlDQUFVO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzQkEsaUVBQWUsYUFBYSxFQUFDO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmc0M7QUFDQTtBQUNLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0RBQWE7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsZ0RBQWE7QUFDNUIsR0FBRztBQUNIO0FBQ0EsZUFBZSxnREFBYTtBQUM1QixHQUFHO0FBQ0g7QUFDQSxlQUFlLG1EQUFnQjtBQUMvQixHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RUYWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZVRhYi5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51VGFiLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCByZW5kZXJDb250YWN0VGFiO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29udGFjdFRhYigpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gIGNvbnN0IGNvbnRhY3RUYWJOYXZJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKVxyXG5cclxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgY29udGFjdEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGNvbnN0IHRhZ0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGNvbnN0IGhvdXJzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgY29uc3QgaG91cnNJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IHBob25lSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgY29uc3QgcGhvbmVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGNvbnN0IGVtYWlsSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgY29uc3QgZW1haWxJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICBjb250ZW50RGl2LmlkID0gJ2NvbnRlbnQnO1xyXG4gIGNvbnRhY3RIZWFkaW5nLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMhJztcclxuICB0YWdMaW5lLnRleHRDb250ZW50ID0gXCJTZXJpb3VzbHksIHdobyBkb2Vzbid0IGxpa2UgZG9udXRzPz9cIjtcclxuICBob3Vyc0hlYWRpbmcudGV4dENvbnRlbnQgPSAnU3RvcmUgSG91cnMnO1xyXG4gIGhvdXJzSW5mby50ZXh0Q29udGVudCA9ICdNb25kYXkgdGhyb3VnaCBTdW5kYXkgN2FtIC0gM3BtJ1xyXG4gIHBob25lSGVhZGluZy50ZXh0Q29udGVudCA9ICdQaG9uZSBJbmZvcm1hdGlvbidcclxuICBwaG9uZUluZm8udGV4dENvbnRlbnQgPSAnVGVsZXBob25lOiAoODA1KTU1NS0xMjM0J1xyXG4gIGVtYWlsSGVhZGluZy50ZXh0Q29udGVudCA9ICdFbWFpbCBJbmZvcm1hdGlvbidcclxuICBlbWFpbEluZm8udGV4dENvbnRlbnQgPSAnRW1haWwgdXMgYXQgZ29udXRzQGRvLm51dCdcclxuXHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChjb250YWN0SGVhZGluZyk7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZCh0YWdMaW5lKTtcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChob3Vyc0luZm8pO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocGhvbmVIZWFkaW5nKTtcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHBob25lSW5mbyk7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChlbWFpbEhlYWRpbmcpO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZW1haWxJbmZvKTtcclxuXHJcbiAgYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcclxuXHJcbiAgY29udGFjdFRhYk5hdkl0ZW0uc3R5bGUuYmFja2dyb3VuZCA9ICcjZmZmZmZmJztcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCByZW5kZXJIb21lVGFiO1xyXG5pbXBvcnQgZG9udXRJbWFnZSBmcm9tICcuL2RvbnV0cy5qcGVnJztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhvbWVUYWIoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICBjb25zdCBob21lVGFiTmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJylcclxuXHJcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IHJlc3RhdXJhbnRJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBjb25zdCB0YWdMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBjb25zdCByZXN0YXVyYW50Q29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgY29udGVudERpdi5pZCA9ICdjb250ZW50JztcclxuICByZXN0YXVyYW50SW1hZ2Uuc3JjID0gZG9udXRJbWFnZTtcclxuICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9ICdHbyBOdXRzIGZvciBEbyBOdXRzJztcclxuICB0YWdMaW5lLnRleHRDb250ZW50ID0gXCJTZXJpb3VzbHksIHdobyBkb2Vzbid0IGxpa2UgZG9udXRzPz9cIjtcclxuICByZXN0YXVyYW50Q29weS50ZXh0Q29udGVudCA9IFwiR28gTnV0cyBmb3IgRG8gTnV0cyBoYXMgYmVlbiBhIGZhbWlseSBvd25lZCBhbmQgb3BlcmF0ZWQgZG9udXQgc2hvcCBzaW5jZSAxOTcxLiBLbm93biBmb3IgYm90aCBvdXIgY2xhc3NpY3MgKGZvciB3aGVuIHlvdSBqdXN0IHdhbnQgYW4gb2wnIGZhc2hpb25lZCBnbGF6ZWQgZG9udXQpIGFuZCBvdXIgd2Fja3kgc3BlY2lhbHMgKGJsdWViZXJyeSB3YWxudXQgQkFDT04gYW55b25lPz8pLCB3ZSBwdXQgY2FyZSBhbmQgbG92ZSBpbnRvIGFsbCBvdXIgY3JlYXRpb25zIGFuZCBhbHdheXMgdHJlYXQgb3VyIGN1c3RvbWVycyBhcyBpZiB0aGV5IHdlcmUgcGFydCBvZiB0aGUgZmFtaWx5LiBCdXQgZG9uJ3QgdGFrZSBvdXIgd29yZCBmb3IgaXQsIGNvbWUgb24gaW4gYW5kIHRyeSBhIGRvbnV0IGZvciB5b3Vyc2VsZiFcIjtcclxuXHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1hZ2UpO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE5hbWUpO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGFnTGluZSk7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50Q29weSk7XHJcblxyXG4gIGJvZHkuYXBwZW5kQ2hpbGQoY29udGVudERpdik7XHJcblxyXG4gIGhvbWVUYWJOYXZJdGVtLnN0eWxlLmJhY2tncm91bmQgPSAnI2ZmZmZmZic7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgcmVuZGVyTWVudVRhYjtcclxuXHJcbmZ1bmN0aW9uIHJlbmRlck1lbnVUYWIoKSB7XHJcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICBjb25zdCBtZW51VGFiTmF2SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51JylcclxuXHJcbiAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IG1lbnVIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBjb25zdCB0YWdMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgY29uc3QgbWVudUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbnN0IG1lbnVJdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3QgbWVudUl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBjb25zdCBtZW51SXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuICBsZXQgbWVudUl0ZW1zID0gW107XHJcbiAgbWVudUl0ZW1zLnB1c2gobWVudUl0ZW0xLCBtZW51SXRlbTIsIG1lbnVJdGVtMywgbWVudUl0ZW00LCBtZW51SXRlbTUpO1xyXG5cclxuICBjb250ZW50RGl2LmlkID0gJ2NvbnRlbnQnO1xyXG4gIG1lbnVIZWFkaW5nLnRleHRDb250ZW50ID0gJ091ciBNZW51JztcclxuICB0YWdMaW5lLnRleHRDb250ZW50ID0gXCJTZXJpb3VzbHksIHdobyBkb2Vzbid0IGxpa2UgZG9udXRzPz9cIjtcclxuICBtZW51SXRlbTEudGV4dENvbnRlbnQgPSAnT2xkIEZhc2hpb25lZCBHbGF6ZWQgJDEuMDAnO1xyXG4gIG1lbnVJdGVtMi50ZXh0Q29udGVudCA9ICdOZXcgQWdlIEdsYXplZCAkMS4yMCc7XHJcbiAgbWVudUl0ZW0zLnRleHRDb250ZW50ID0gJ0JsdWViZXJyeSBXYWxudXQgQmFjb24gJDEuNTAnO1xyXG4gIG1lbnVJdGVtNC50ZXh0Q29udGVudCA9ICdDaG9jb2xhdGUgR2xhemVkICQxLjIwJztcclxuICBtZW51SXRlbTUudGV4dENvbnRlbnQgPSAnQmF2YXJpYW4gQ3JlYW0gJDEuNTAnO1xyXG5cclxuICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gbWVudUxpc3QuYXBwZW5kQ2hpbGQoaXRlbSkpO1xyXG5cclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVIZWFkaW5nKTtcclxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRhZ0xpbmUpO1xyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xyXG5cclxuICBib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xyXG5cclxuICBtZW51VGFiTmF2SXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJyNmZmZmZmYnO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCByZW5kZXJIb21lVGFiIGZyb20gJy4vaG9tZVRhYic7XHJcbmltcG9ydCByZW5kZXJNZW51VGFiIGZyb20gJy4vbWVudVRhYic7XHJcbmltcG9ydCByZW5kZXJDb250YWN0VGFiIGZyb20gJy4vY29udGFjdFRhYidcclxuXHJcbi8vIHdyaXRlIG1haW4gY29kZSBhcyBJSUZFIHRvIG5vdCBwb2x1dGUgZ2xvYmFsIHNjb3BlXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgcmVuZGVySG9tZVRhYigpO1xyXG5cclxuICBjb25zdCBob21lVGFiTWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xyXG4gIGNvbnN0IG1lbnVUYWJNZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XHJcbiAgY29uc3QgY29udGFjdFRhYk1lbnVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcclxuXHJcbiAgY29uc3Qgc3dpdGNoVGFicyA9IGZ1bmN0aW9uKHRhYlJlbmRlcikge1xyXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICBjb250ZW50RGl2LnJlbW92ZSgpO1xyXG5cclxuICAgIGhvbWVUYWJNZW51SXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ21pc3R5cm9zZSc7XHJcbiAgICBtZW51VGFiTWVudUl0ZW0uc3R5bGUuYmFja2dyb3VuZCA9ICdtaXN0eXJvc2UnO1xyXG4gICAgY29udGFjdFRhYk1lbnVJdGVtLnN0eWxlLmJhY2tncm91bmQgPSAnbWlzdHlyb3NlJztcclxuICAgIHRhYlJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgaG9tZVRhYk1lbnVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgc3dpdGNoVGFicyhyZW5kZXJIb21lVGFiKVxyXG4gIH0pO1xyXG4gIG1lbnVUYWJNZW51SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHN3aXRjaFRhYnMocmVuZGVyTWVudVRhYilcclxuICB9KTtcclxuICBjb250YWN0VGFiTWVudUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBzd2l0Y2hUYWJzKHJlbmRlckNvbnRhY3RUYWIpXHJcbiAgfSk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==