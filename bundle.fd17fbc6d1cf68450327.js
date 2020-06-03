/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/JS/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/SCSS/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/SCSS/style.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Undefined variable: \"$to\".\n        on line 375 of /home/alexandr/Projects/odin_on_rails/new_beg/src/SCSS/style.scss\n>>             border: 2px solid $to do-checkbox-hover-color;\n\n   ------------------------------^\n");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/ICONS/calendar.svg":
/*!********************************!*\
  !*** ./src/ICONS/calendar.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/calendar.7504c889fc2d9d4f5400ba698b254377.svg";

/***/ }),

/***/ "./src/ICONS/edit.svg":
/*!****************************!*\
  !*** ./src/ICONS/edit.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/edit.2927f8de4268bae8f11c4dfe3adc72b5.svg";

/***/ }),

/***/ "./src/JS/index.js":
/*!*************************!*\
  !*** ./src/JS/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SCSS_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SCSS/style.scss */ "./src/SCSS/style.scss");
/* harmony import */ var _SCSS_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SCSS_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/menu.js */ "./src/JS/style/menu.js");
/* harmony import */ var _style_resize_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/resize.js */ "./src/JS/style/resize.js");
/* harmony import */ var _style_priority_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/priority.js */ "./src/JS/style/priority.js");
/* harmony import */ var _tasks_add_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/add.js */ "./src/JS/tasks/add.js");
/* harmony import */ var _tasks_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/render.js */ "./src/JS/tasks/render.js");
/* harmony import */ var _tasks_defaults_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/defaults.js */ "./src/JS/tasks/defaults.js");
/* harmony import */ var _tasks_detailsInput_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/detailsInput.js */ "./src/JS/tasks/detailsInput.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








 // Style

_style_menu_js__WEBPACK_IMPORTED_MODULE_1__["showProjects"]();
_style_resize_js__WEBPACK_IMPORTED_MODULE_2__["responsive"]();
_style_priority_js__WEBPACK_IMPORTED_MODULE_3__["starsChangeColors"](); // App Logic
// define tasks array which is todolist

var allTasks = _toConsumableArray(_tasks_defaults_js__WEBPACK_IMPORTED_MODULE_6__["get"]()); // Initial render of the default tasks form tasks array


Object(_tasks_render_js__WEBPACK_IMPORTED_MODULE_5__["renderAllTasksFrom"])(allTasks); // Button to add task to a defined array
// Also rerender the array after adding a task

_tasks_add_js__WEBPACK_IMPORTED_MODULE_4__["addTaskTo"](allTasks); // Change tasks when user type something to details window

_tasks_detailsInput_js__WEBPACK_IMPORTED_MODULE_7__["changeTaskOnInput"](allTasks);

/***/ }),

/***/ "./src/JS/style/menu.js":
/*!******************************!*\
  !*** ./src/JS/style/menu.js ***!
  \******************************/
/*! exports provided: showProjects, minimizeProjectContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showProjects", function() { return showProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minimizeProjectContainer", function() { return minimizeProjectContainer; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function showProjects() {
  // Make menu button in the top left corner do work (change projects to wide or narrow)
  document.getElementById("menu-icon").addEventListener("click", function () {
    return broadenProjectContainer();
  });
}

function broadenProjectContainer() {
  // Take an array of elements from the page and toggle a class 'broad' on each
  var _iterator = _createForOfIteratorHelper(getElementsToBroad()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;
      toggleBroad(element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function minimizeProjectContainer() {
  // Take an array of elements from the page and toggle a class 'broad' on each
  var _iterator2 = _createForOfIteratorHelper(getElementsToBroad()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var element = _step2.value;
      addBroad(element);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function addBroad(element) {
  // Remove class 'broad' from an element
  // this class changes left-side page menu making it smaller
  element.classList.add("broad");
}

function toggleBroad(element) {
  // Add/remove class 'broad' to an element
  // this class changes left-side page menu making it smaller
  element.classList.toggle("broad");
}

function getElementsToBroad() {
  // Take some DOM elements from the page
  var content = document.getElementById("content");
  var projectList = document.getElementById("project-list");
  var project = document.getElementsByClassName("project");
  var projectIcon = document.getElementsByClassName("project-icon");
  var projectTitleCountContainer = document.getElementsByClassName("project-title-count-container ");
  var deleteProjectBtn = document.getElementsByClassName("delete-project-btn");
  var newProjectForm = document.getElementById("new-project-form");
  var newProject = document.getElementById("new-project");
  var submitProject = document.getElementById("submit-project"); // Put them in the array and return it

  var elements = [content, projectList].concat(_toConsumableArray(project), _toConsumableArray(projectIcon), _toConsumableArray(projectTitleCountContainer), _toConsumableArray(deleteProjectBtn), [newProjectForm, newProject, submitProject]);
  return elements;
}



/***/ }),

/***/ "./src/JS/style/priority.js":
/*!**********************************!*\
  !*** ./src/JS/style/priority.js ***!
  \**********************************/
/*! exports provided: starsChangeColors, activateStar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "starsChangeColors", function() { return starsChangeColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateStar", function() { return activateStar; });
function starsChangeColors() {
  activateFirstStar();
  activateSecondStar();
  activateThirdStar();
}

function activateFirstStar() {
  getStar1().addEventListener("click", function () {
    return activateStar(1);
  });
}

function activateSecondStar() {
  getStar2().addEventListener("click", function () {
    return activateStar(2);
  });
}

function activateThirdStar() {
  getStar3().addEventListener("click", function () {
    return activateStar(3);
  });
}

function activateStar(number) {
  // Make a star with a certain number change its style
  // Number can be 1, 2 or 3 because there are a total of 3 star
  if (number < 1 || number > 3) console.log("Can't activate star ".concat(number, " in activateStar(). Possible values: 1, 2, 3"));

  switch (number) {
    case 1:
      outlineSecondStar();
      outlineThirdStar();
      removeColorFromAllStars();
      addMediumOnmouseover();
      break;

    case 2:
      fillSecondStar();
      addColorTwoStars();
      outlineThirdStar();
      decolorThirdStar();
      addMediumOnmouseover();
      break;

    case 3:
      fillSecondStar();
      fillThirdStar();
      addColorThreeStars();
      removeMediumOnmouseover();
      break;
  }
} // ------------------------------------SECOND STAR


function fillSecondStar() {
  // Get the child of the priority and make it filled star
  getStar2().children[0].setAttribute("name", "star");
}

function outlineSecondStar() {
  // Get the child of the priority and make it outlined star
  getStar2().children[0].setAttribute("name", "star-outline");
} // ---------------------------------- THIRD STAR


function fillThirdStar() {
  // Get the child of the priority and make it filled star
  getStar3().children[0].setAttribute("name", "star");
}

function outlineThirdStar() {
  // Get the child of the priority and make it outlined star
  getStar3().children[0].setAttribute("name", "star-outline");
} //---------------------------------- Helpers


function removeMediumOnmouseover() {
  // Second star has a class "onmouseover" with a hover effect
  // When the 3rd star is chosen remove this hover effect from the 2nd star
  getStar2().classList.remove("onmouseover");
}

function addMediumOnmouseover() {
  // Second star has a class "onmouseover" with a hover effect
  // When the 1st OR 2nd star is chosen add this hover effect to the 2nd star
  getStar2().classList.add("onmouseover");
}

function starIsOutlined(star) {
  return star.children[0].getAttribute("name") === "star-outline";
}

function addColorTwoStars() {
  removeColorFromAllStars();
  getStar1().classList.add("selected-1");
  getStar2().classList.add("selected-1");
}

function addColorThreeStars() {
  removeColorFromAllStars();
  getStar1().classList.add("selected-2");
  getStar2().classList.add("selected-2");
  getStar3().classList.add("selected-2");
}

function removeColorFromAllStars() {
  decolorFirstStar();
  decolorSecondStar();
  decolorThirdStar();
}

function decolorFirstStar() {
  getStar1().classList.remove("selected-1");
  getStar1().classList.remove("selected-2");
}

function decolorSecondStar() {
  getStar2().classList.remove("selected-1");
  getStar2().classList.remove("selected-2");
}

function decolorThirdStar() {
  getStar3().classList.remove("selected-1");
  getStar3().classList.remove("selected-2");
}

function getStar1() {
  return document.getElementById("star-1");
}

function getStar2() {
  return document.getElementById("star-2");
}

function getStar3() {
  return document.getElementById("star-3");
}



/***/ }),

/***/ "./src/JS/style/resize.js":
/*!********************************!*\
  !*** ./src/JS/style/resize.js ***!
  \********************************/
/*! exports provided: responsive, screenLessThen1024 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsive", function() { return responsive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "screenLessThen1024", function() { return screenLessThen1024; });
/* harmony import */ var _tasks_detailsToggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tasks/detailsToggle.js */ "./src/JS/tasks/detailsToggle.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/JS/style/menu.js");



function responsive() {
  var main = document.getElementById("main");
  var details = document.getElementById("todo-misc-container"); // Resizing window makes middle column fit

  window.matchMedia("(max-width: 1024px)").addListener(function () {
    // If screen is narrower than 1024px and details are open (right side of the page)
    // than minimize left side and make "main" fit the whole second column
    if (screenLessThen1024() && Object(_tasks_detailsToggle_js__WEBPACK_IMPORTED_MODULE_0__["getComputedDisplay"])(details) === "flex") {
      main.style.gridColumn = "2/4";
      Object(_menu_js__WEBPACK_IMPORTED_MODULE_1__["minimizeProjectContainer"])(); // Doesn't matter the size of the screen,
      // if details are closed 'main' fit the whole second column
    } else if (Object(_tasks_detailsToggle_js__WEBPACK_IMPORTED_MODULE_0__["getComputedDisplay"])(details) === "none") {
      main.style.gridColumn = "2/4"; // Else for e.g. when screen are wider then 1024px and
      // details are open, then main is the column in the middle
    } else {
      main.style.gridColumn = "2/3";
    }
  });
}

function screenLessThen1024() {
  // Check if screen is less then 1024px wide
  return window.matchMedia("(max-width: 1024px)").matches;
} // When resizing window middle column resize itself to be responsive




/***/ }),

/***/ "./src/JS/tasks/add.js":
/*!*****************************!*\
  !*** ./src/JS/tasks/add.js ***!
  \*****************************/
/*! exports provided: getTask, addTaskTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTask", function() { return getTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTaskTo", function() { return addTaskTo; });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "./src/JS/tasks/factory.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/JS/tasks/render.js");



function addTaskTo(arr) {
  var submitTodoBtn = document.getElementById("submit-todo");
  submitTodoBtn.addEventListener("click", function (event) {
    // Prevent default submit behavior
    event.preventDefault(); // Get task name from User and add it to tasks array

    pushTaskTo(arr);
    console.table(arr); // Rerender array

    Object(_render_js__WEBPACK_IMPORTED_MODULE_1__["renderAllTasksFrom"])(arr);
    return arr;
  });
}

function pushTaskTo(arr) {
  // Push task to array
  arr.push(getTask());
  return arr;
}

function getTask() {
  // Get user input value, save it
  var task = Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: getInputValue()
  }); // and clear input

  clearTaskInput();
  return task;
}

function getInputValue() {
  // Get user input value as New Task : STRING
  return document.getElementById("new-todo").value;
}

function clearTaskInput() {
  // Clear user input
  document.getElementById("new-todo").value = "";
}



/***/ }),

/***/ "./src/JS/tasks/defaults.js":
/*!**********************************!*\
  !*** ./src/JS/tasks/defaults.js ***!
  \**********************************/
/*! exports provided: get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "./src/JS/tasks/factory.js");


function get() {
  // This functin simply create an array with default tasks in it
  var allTasks = [Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Learn stuff",
    from: "Project 2",
    date: "15.03.2025",
    priority: "medium",
    note: "something"
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Learn english",
    date: "10.01.2020"
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Learn stuff",
    from: "Project 2",
    priority: "high",
    note: "something",
    done: true
  })];
  return allTasks;
}



/***/ }),

/***/ "./src/JS/tasks/delete.js":
/*!********************************!*\
  !*** ./src/JS/tasks/delete.js ***!
  \********************************/
/*! exports provided: deleteTasksFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTasksFrom", function() { return deleteTasksFrom; });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/JS/tasks/render.js");
/* harmony import */ var _detailsToggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailsToggle.js */ "./src/JS/tasks/detailsToggle.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function deleteTasksFrom(arr) {
  // Take the collcetion of all delete cross buttons from tasks by class name
  var buttons = document.getElementsByClassName("delete-todo-btn"); // Loop through collection and add event listener to each button

  var _iterator = _createForOfIteratorHelper(buttons),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var button = _step.value;
      deleteBtnRemoveTask(button, arr);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function deleteBtnRemoveTask(button, arr) {
  // Function to assign Event listener to buttons
  // to remove particular tasks from page
  button.addEventListener("click", function (e) {
    // get Id of a button to which listener is assigned
    var btnId = e.currentTarget.id; // get only number after the hyphen from Id

    var number = btnId.split("-")[1]; // Before removing an item make sure to close its details

    closeDetailsOfDeletedTask(number); // Remove item from the array by that number

    arr.splice(number, 1); // Rerender array

    Object(_render_js__WEBPACK_IMPORTED_MODULE_0__["renderAllTasksFrom"])(arr); // Avoid firing parent element listener after clicking on the button

    e.stopPropagation();
  });
}

function closeDetailsOfDeletedTask(number) {
  // Before removing an item make sure his details are not shown
  // If they are then hide them
  if (_detailsToggle_js__WEBPACK_IMPORTED_MODULE_1__["getDetailsContainerIdNumber"]() === number) _detailsToggle_js__WEBPACK_IMPORTED_MODULE_1__["hideDetails"]();
}



/***/ }),

/***/ "./src/JS/tasks/detailsInput.js":
/*!**************************************!*\
  !*** ./src/JS/tasks/detailsInput.js ***!
  \**************************************/
/*! exports provided: putTaskInfoToInput, changeTaskOnInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putTaskInfoToInput", function() { return putTaskInfoToInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTaskOnInput", function() { return changeTaskOnInput; });
/* harmony import */ var _detailsToggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailsToggle.js */ "./src/JS/tasks/detailsToggle.js");
/* harmony import */ var _style_priority_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/priority.js */ "./src/JS/style/priority.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render.js */ "./src/JS/tasks/render.js");




function putTaskInfoToInput(task) {
  // Function to put info from tasks in inputs when details are shown
  setName(task.title);
  setDate(task.date);
  setPiority(task.priority);
  setNote(task.note);
}

function changeTaskOnInput(arr) {
  // Change a task with input from Details Window
  changeTitleOnInput(arr);
  changeDateOnInput(arr);
  changePriorityOnInput(arr);
  changeNoteOnInput(arr);
}

function changeTitleOnInput(arr) {
  var input = document.getElementById("todo-name-changer");

  input.oninput = function () {
    return changeTitle(arr);
  };
}

function changeTitle(arr) {
  // get number of task from details
  var taskNumber = _detailsToggle_js__WEBPACK_IMPORTED_MODULE_0__["getDetailsContainerIdNumber"](); // Use this number to get to task.title in array

  var task = arr[taskNumber];
  var input = document.getElementById("todo-name-changer"); // Task title is now user input value

  task.title = input.value; // rerender to see the changes

  Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["renderAllTasksFrom"])(arr);
}

function changeDateOnInput(arr) {
  var input = document.getElementById("date");

  input.oninput = function () {
    return changeDate(arr);
  };
}

function changeDate(arr) {
  // get number of task from details
  var taskNumber = _detailsToggle_js__WEBPACK_IMPORTED_MODULE_0__["getDetailsContainerIdNumber"](); // Use this number to get to task.date in array

  var task = arr[taskNumber];
  var input = document.getElementById("date"); // Task date is now formatted date input value

  task.date = formatDate2(input.value); // rerender to see the changes

  Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["renderAllTasksFrom"])(arr);
}

function changePriorityOnInput(arr) {
  var stars = [document.getElementById("star-1"), document.getElementById("star-2"), document.getElementById("star-3")];

  for (var _i = 0, _stars = stars; _i < _stars.length; _i++) {
    var star = _stars[_i];
    star.addEventListener("click", function () {
      return changePriority(arr);
    });
  }
}

function changePriority(arr) {
  // get number of task from details
  var taskNumber = _detailsToggle_js__WEBPACK_IMPORTED_MODULE_0__["getDetailsContainerIdNumber"](); // Use this number to get to task.date in array

  var task = arr[taskNumber];
  var input = getPriorityInput(); // Task date is now formatted date input value

  task.priority = input; // rerender to see the changes

  Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["renderAllTasksFrom"])(arr);
}

function getPriorityInput() {
  var star1 = document.getElementById("star-1");

  if (star1.classList.contains("selected-1")) {
    return "medium";
  } else if (star1.classList.contains("selected-2")) {
    return "high";
  } else {
    return "low";
  }
}

function changeNoteOnInput(arr) {
  var input = document.getElementById("note-changer");

  input.oninput = function () {
    return changeNote(arr);
  };
}

function changeNote(arr) {
  // get number of task from details
  var taskNumber = _detailsToggle_js__WEBPACK_IMPORTED_MODULE_0__["getDetailsContainerIdNumber"](); // Use this number to get to task.note in array

  var task = arr[taskNumber];
  var input = document.getElementById("note-changer"); // Task Note is now formatted Note input value

  task.note = input.value; // rerender to see the changes

  Object(_render_js__WEBPACK_IMPORTED_MODULE_2__["renderAllTasksFrom"])(arr);
} // ---------------------------------------------------
// Set input


function setName(name) {
  document.getElementById("todo-name-changer").value = name;
}

function setDate(date) {
  document.getElementById("date").value = formatDate(date);
  formatDate(date);
}

function setPiority(level) {
  if (level === "high") {
    Object(_style_priority_js__WEBPACK_IMPORTED_MODULE_1__["activateStar"])(3);
  } else if (level === "medium") {
    Object(_style_priority_js__WEBPACK_IMPORTED_MODULE_1__["activateStar"])(2);
  } else if (level === "low") {
    Object(_style_priority_js__WEBPACK_IMPORTED_MODULE_1__["activateStar"])(1);
  }
}

function setNote(note) {
  document.getElementById("note-changer").value = note;
}

function formatDate(date) {
  // If date is undefined yet, then return nothing ""
  if (!date) return ""; // Date formatting: from "dd.mm.yyyy" to "yyyy-MM-dd"

  var day = date.split(".")[0];
  var month = date.split(".")[1];
  var year = date.split(".")[2];
  var formatted = "".concat(year, "-").concat(month, "-").concat(day);
  return formatted;
}

function formatDate2(date) {
  // If date is undefined yet, then return nothing ""
  if (!date) return ""; // Date formatting: from  "yyyy-MM-dd" to "dd.mm.yyyy"

  var day = date.split("-")[2];
  var month = date.split("-")[1];
  var year = date.split("-")[0];
  var formatted = "".concat(day, ".").concat(month, ".").concat(year);
  return formatted;
}



/***/ }),

/***/ "./src/JS/tasks/detailsToggle.js":
/*!***************************************!*\
  !*** ./src/JS/tasks/detailsToggle.js ***!
  \***************************************/
/*! exports provided: tasksToggleDetails, getComputedDisplay, getDetailsContainerIdNumber, hideDetails, detailsAreShown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tasksToggleDetails", function() { return tasksToggleDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedDisplay", function() { return getComputedDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailsContainerIdNumber", function() { return getDetailsContainerIdNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideDetails", function() { return hideDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailsAreShown", function() { return detailsAreShown; });
/* harmony import */ var _style_resize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/resize.js */ "./src/JS/style/resize.js");
/* harmony import */ var _detailsInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailsInput.js */ "./src/JS/tasks/detailsInput.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function tasksToggleDetails(arr) {
  // Make todo tasks show details on click (from right side)
  todoListShowDetails(arr); // Make button in details interact: hide details

  ArrowHideDetails();
}

function todoListShowDetails(arr) {
  // Make todo lists show details onclick
  var tasks = document.getElementsByClassName("todo");

  var _iterator = _createForOfIteratorHelper(tasks),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var task = _step.value;
      task.addEventListener("click", function (e) {
        // get Id of a task to which listener is assigned
        var taskId = e.currentTarget.id; // get only number from Id after the hyphen

        var number = taskId.split("-")[1]; // Pass a number of the clicked task to details

        toggleDetails(number); // Put info from tasks in inputs when details are shown

        _detailsInput_js__WEBPACK_IMPORTED_MODULE_1__["putTaskInfoToInput"](arr[number]);
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function ArrowHideDetails() {
  // Make Arrow hide Details onclick
  var arrowBtn = document.getElementById("close-details-btn");
  arrowBtn.addEventListener("click", hideDetails);
}

function toggleDetails(number) {
  var idNumber = getDetailsContainerIdNumber(); // if details are visible on the page AND
  // if user clicks on the same task 2x than hide details

  if (detailsAreShown() && idNumber === number) {
    hideDetails();
  } else {
    showDetails(number);
  }
}

function detailsAreShown() {
  var details = document.getElementById("todo-misc-container"); // Are details shown on the page? Return boolean:

  return getComputedDisplay(details) !== "none";
}

function getDetailsContainerIdNumber() {
  var details = document.getElementById("todo-misc-container"); // Take id of the details child

  var detailsContainerId = details.children[0].id; // Take a number from that id and return it

  var idNumber = detailsContainerId.split("-")[2];
  return idNumber;
}

function setDetailsIdTo(number) {
  // First make details ID the same as initial ID (with no numbers)
  // Another words remove all existing numbers from it
  makeDetailsDefault(); // Then pass a number to it

  var details = document.getElementById("todo-misc-container");
  details.children[0].id += "-".concat(number);
}

function hideDetails() {
  var details = document.getElementById("todo-misc-container");
  var main = document.getElementById("main");
  hide(details); // When details are hidden the main column will be broader

  main.style.gridColumn = "2/4"; // When details are hidden their details-container-ID will be default with no number

  makeDetailsDefault();
}

function showDetails(number) {
  var details = document.getElementById("todo-misc-container");
  var main = document.getElementById("main");
  showAsFlex(details); // Also set new ID number to details container (only if it doesn't have ID already)

  setDetailsIdTo(number); // If screen is bigger than 1024 then make "main" the middle column of 3 columns

  if (!Object(_style_resize_js__WEBPACK_IMPORTED_MODULE_0__["screenLessThen1024"])()) main.style.gridColumn = "2/3";
}

function makeDetailsDefault() {
  // Change ID of child of the details to default "details-container"
  var details = document.getElementById("todo-misc-container");
  details.children[0].id = "details-container";
}

function getComputedDisplay(element) {
  var computedDisplay = window.getComputedStyle(element).getPropertyValue("display");
  return computedDisplay;
}

function showAsFlex(element) {
  element.style.display = "flex";
}

function hide(element) {
  element.style.display = "none";
}



/***/ }),

/***/ "./src/JS/tasks/done.js":
/*!******************************!*\
  !*** ./src/JS/tasks/done.js ***!
  \******************************/
/*! exports provided: doneBtns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doneBtns", function() { return doneBtns; });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/JS/tasks/render.js");
/* harmony import */ var _detailsToggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailsToggle.js */ "./src/JS/tasks/detailsToggle.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function doneBtns(arr) {
  // Take the collection of all checkboxes from tasks by class name
  var checkboxes = document.getElementsByClassName("todo-icon-container"); // Loop through collection and add event listener to each button

  var _iterator = _createForOfIteratorHelper(checkboxes),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var checkbox = _step.value;
      doneBtnCompleteTask(checkbox, arr);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function doneBtnCompleteTask(checkbox, arr) {
  // Function to assign Event listener to checkboxes
  // to complete particular tasks from page
  checkbox.addEventListener("click", function (e) {
    // get Id of a checkbox to which listener is assigned
    var cboxId = e.currentTarget.parentNode.parentNode.id; // get only number after the hyphen from Id

    var number = cboxId.split("-")[1]; // Before completing an item make sure to close its details

    closeDetailsOfCompletedTask(number); // If task is done then undone it, else complete it

    arr[number].done = !arr[number].done; // Rerender array

    Object(_render_js__WEBPACK_IMPORTED_MODULE_0__["renderAllTasksFrom"])(arr); // Avoid firing parent element listener after clicking on the checkbox

    e.stopPropagation();
  });
}

function closeDetailsOfCompletedTask(number) {
  // Before removing an item make sure his details are not shown
  // If they are then hide them
  if (_detailsToggle_js__WEBPACK_IMPORTED_MODULE_1__["getDetailsContainerIdNumber"]() === number) _detailsToggle_js__WEBPACK_IMPORTED_MODULE_1__["hideDetails"]();
}



/***/ }),

/***/ "./src/JS/tasks/factory.js":
/*!*********************************!*\
  !*** ./src/JS/tasks/factory.js ***!
  \*********************************/
/*! exports provided: taskFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskFactory", function() { return taskFactory; });
var taskFactory = function taskFactory(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$from = _ref.from,
      from = _ref$from === void 0 ? "" : _ref$from,
      _ref$date = _ref.date,
      date = _ref$date === void 0 ? "" : _ref$date,
      _ref$priority = _ref.priority,
      priority = _ref$priority === void 0 ? "low" : _ref$priority,
      _ref$note = _ref.note,
      note = _ref$note === void 0 ? "" : _ref$note,
      _ref$done = _ref.done,
      done = _ref$done === void 0 ? false : _ref$done;
  return {
    title: title,
    from: from,
    date: date,
    priority: priority,
    note: note,
    done: done
  };
};



/***/ }),

/***/ "./src/JS/tasks/render.js":
/*!********************************!*\
  !*** ./src/JS/tasks/render.js ***!
  \********************************/
/*! exports provided: renderAllTasksFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAllTasksFrom", function() { return renderAllTasksFrom; });
/* harmony import */ var _ICONS_calendar_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ICONS/calendar.svg */ "./src/ICONS/calendar.svg");
/* harmony import */ var _ICONS_calendar_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ICONS_calendar_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ICONS_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ICONS/edit.svg */ "./src/ICONS/edit.svg");
/* harmony import */ var _ICONS_edit_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ICONS_edit_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete.js */ "./src/JS/tasks/delete.js");
/* harmony import */ var _detailsToggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detailsToggle.js */ "./src/JS/tasks/detailsToggle.js");
/* harmony import */ var _done_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./done.js */ "./src/JS/tasks/done.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







function renderAllTasksFrom(arr) {
  // Clear all previously rendered elements from the page
  clearContentOf("todos"); //Render each element of the array to the page

  var _iterator = _createForOfIteratorHelper(arr.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          index = _step$value[0],
          item = _step$value[1];

      renderTask(index, item);
    } // Make delete buttons on click remove task to which they are assigned

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  _delete_js__WEBPACK_IMPORTED_MODULE_2__["deleteTasksFrom"](arr); // Make each task show its details on click

  _detailsToggle_js__WEBPACK_IMPORTED_MODULE_3__["tasksToggleDetails"](arr); // Make each task checkbox complete task by changing its class

  _done_js__WEBPACK_IMPORTED_MODULE_4__["doneBtns"](arr); // Reach labels and make them change themselves when the task is done

  toggleDoneIcons();
}

function clearContentOf(id) {
  // Remove any child of the element with id
  var contentContainer = document.getElementById(id);

  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }
}

function renderTask(i, task) {
  document.getElementById("todos").append(createTask(i, task));
}

function createTask(i, task) {
  // create list element with a class 'todo'
  var li = document.createElement("li");
  li.setAttribute("class", "todo");
  li.setAttribute("id", "task-".concat(i)); // Append label, input, div and button to it

  li.append(createLabel(i));
  li.append(createInput(i));
  li.append(createContent(task.title, task.from, task.date, task.priority, task.note, task.done));
  li.append(createDeleteBtn(i));
  return li;
} // LABEL


function createLabel(i) {
  // returns label for "todocheckbox" + i
  var label = document.createElement("label");
  label.setAttribute("id", "label-".concat(i));
  label.htmlFor = "todocheckbox".concat(i);
  label.append(createDoneIcon());
  return label;
}

function createDoneIcon() {
  // create icon container
  var container = document.createElement("div");
  container.setAttribute("class", "todo-icon-container"); // create icon

  var icon = document.createElement("ion-icon");
  icon.setAttribute("name", "checkmark-outline"); // append icon to container

  container.appendChild(icon);
  return container;
} // INPUT


function createInput(i) {
  // Create input checkbox element after the label
  var checkbox = document.createElement("input"); // Add attributes

  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "todo-checkbox");
  checkbox.setAttribute("id", "todocheckbox-".concat(i));
  return checkbox;
} // CONTENT = task title and details


function createContent(title, from, date, priority, note, done) {
  var content = document.createElement("div");
  content.setAttribute("class", "todo-text"); // Append title and details to content

  content.appendChild(createTitle(title));
  content.appendChild(createDetails(from, date, priority, note));
  if (done) content.classList.add("done");
  return content;
}

function createTitle(str) {
  var title = document.createElement("div");
  title.setAttribute("class", "todo-title");
  title.textContent = str;
  return title;
}

function createDetails(from, date, priority, note) {
  var details = document.createElement("div");
  details.setAttribute("class", "details");
  details.appendChild(createFrom(from));
  details.appendChild(createDue(date));
  details.appendChild(createPriority(priority));
  details.appendChild(createNote(note));
  return details;
}

function createFrom(from) {
  var span = document.createElement("span");
  span.setAttribute("class", "from-project");
  if (from) span.textContent = "From ".concat(from);
  return span;
}

function createDue(date) {
  var due = document.createElement("span");
  due.setAttribute("class", "due-date");

  if (date) {
    if (dateOverdue(date)) due.className = "overdue-date";
    due.appendChild(createCalendarImage());
    due.appendChild(createSpanForDate(date));
  }

  return due;
}

function dateOverdue(date) {
  var today = new Date();
  var day = date.split(".")[0];
  var month = date.split(".")[1];
  var year = date.split(".")[2];
  var taskDate = new Date("".concat(year, "-").concat(month, "-").concat(day, " 0:00:00"));
  return taskDate > today ? true : false;
}

function createCalendarImage() {
  var img = document.createElement("img");
  img.setAttribute("src", _ICONS_calendar_svg__WEBPACK_IMPORTED_MODULE_0___default.a);
  img.setAttribute("alt", "Calendar");
  img.setAttribute("width", "12px");
  return img;
}

function createSpanForDate(date) {
  var span = document.createElement("span");
  span.textContent = "Due ".concat(date);
  return span;
}

function createPriority(level) {
  var priority = document.createElement("span");
  priority.setAttribute("class", "".concat(level, "-priority"));
  priority.appendChild(createSpanForPriority(level));
  return priority;
}

function createSpanForPriority(level) {
  var span = document.createElement("span");
  if (level !== "low") span.textContent = "".concat(capitalizeFirstLetter(level), " priority");
  return span;
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createNote(note) {
  var span = document.createElement("span");
  span.setAttribute("class", "note-presence");

  if (note) {
    // create and Append Note Icon
    var noteIcon = document.createElement("img");
    noteIcon.setAttribute("src", _ICONS_edit_svg__WEBPACK_IMPORTED_MODULE_1___default.a);
    noteIcon.setAttribute("alt", "Pen");
    noteIcon.setAttribute("width", "12px"); // create and append text

    var text = document.createElement("span");
    text.textContent = "Note";
    span.appendChild(noteIcon);
    span.appendChild(text);
  }

  return span;
} // DELETE BUTTON


function createDeleteBtn(i) {
  var btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("class", "delete-todo-btn");
  btn.setAttribute("id", "deletebtn-".concat(i)); // create an icon and append it to button

  var icon = document.createElement("ion-icon");
  icon.setAttribute("name", "close-circle");
  btn.appendChild(icon);
  return btn;
}

function toggleDoneIcons() {
  // Get collection of all tasks wich are completed
  var dones = document.getElementsByClassName("done"); // For each completed task take label and toggle a class "completed" on it

  var _iterator2 = _createForOfIteratorHelper(dones),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var task = _step2.value;
      var number = task.parentElement.id.split("-")[1];
      var label = document.getElementById("label-".concat(number));
      var iconContainer = label.firstChild;
      iconContainer.classList.add("completed");
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}



/***/ }),

/***/ "./src/SCSS/style.scss":
/*!*****************************!*\
  !*** ./src/SCSS/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/SCSS/style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9JQ09OUy9jYWxlbmRhci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL0lDT05TL2VkaXQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9KUy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvc3R5bGUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvc3R5bGUvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZGVsZXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZXRhaWxzSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2RldGFpbHNUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2RvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU0NTUy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbIk1lbnVCdG4iLCJSZXNpemUiLCJQcmlvcml0eSIsImFsbFRhc2tzIiwiRGVmYXVsdHMiLCJyZW5kZXJBbGxUYXNrc0Zyb20iLCJBZGRUYXNrQnRuIiwiSW5wdXQiLCJzaG93UHJvamVjdHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJyb2FkZW5Qcm9qZWN0Q29udGFpbmVyIiwiZ2V0RWxlbWVudHNUb0Jyb2FkIiwiZWxlbWVudCIsInRvZ2dsZUJyb2FkIiwibWluaW1pemVQcm9qZWN0Q29udGFpbmVyIiwiYWRkQnJvYWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b2dnbGUiLCJjb250ZW50IiwicHJvamVjdExpc3QiLCJwcm9qZWN0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByb2plY3RJY29uIiwicHJvamVjdFRpdGxlQ291bnRDb250YWluZXIiLCJkZWxldGVQcm9qZWN0QnRuIiwibmV3UHJvamVjdEZvcm0iLCJuZXdQcm9qZWN0Iiwic3VibWl0UHJvamVjdCIsImVsZW1lbnRzIiwic3RhcnNDaGFuZ2VDb2xvcnMiLCJhY3RpdmF0ZUZpcnN0U3RhciIsImFjdGl2YXRlU2Vjb25kU3RhciIsImFjdGl2YXRlVGhpcmRTdGFyIiwiZ2V0U3RhcjEiLCJhY3RpdmF0ZVN0YXIiLCJnZXRTdGFyMiIsImdldFN0YXIzIiwibnVtYmVyIiwiY29uc29sZSIsImxvZyIsIm91dGxpbmVTZWNvbmRTdGFyIiwib3V0bGluZVRoaXJkU3RhciIsInJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzIiwiYWRkTWVkaXVtT25tb3VzZW92ZXIiLCJmaWxsU2Vjb25kU3RhciIsImFkZENvbG9yVHdvU3RhcnMiLCJkZWNvbG9yVGhpcmRTdGFyIiwiZmlsbFRoaXJkU3RhciIsImFkZENvbG9yVGhyZWVTdGFycyIsInJlbW92ZU1lZGl1bU9ubW91c2VvdmVyIiwiY2hpbGRyZW4iLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJzdGFySXNPdXRsaW5lZCIsInN0YXIiLCJnZXRBdHRyaWJ1dGUiLCJkZWNvbG9yRmlyc3RTdGFyIiwiZGVjb2xvclNlY29uZFN0YXIiLCJyZXNwb25zaXZlIiwibWFpbiIsImRldGFpbHMiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJzY3JlZW5MZXNzVGhlbjEwMjQiLCJnZXRDb21wdXRlZERpc3BsYXkiLCJzdHlsZSIsImdyaWRDb2x1bW4iLCJtYXRjaGVzIiwiYWRkVGFza1RvIiwiYXJyIiwic3VibWl0VG9kb0J0biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoVGFza1RvIiwidGFibGUiLCJwdXNoIiwiZ2V0VGFzayIsInRhc2siLCJ0YXNrRmFjdG9yeSIsInRpdGxlIiwiZ2V0SW5wdXRWYWx1ZSIsImNsZWFyVGFza0lucHV0IiwidmFsdWUiLCJnZXQiLCJmcm9tIiwiZGF0ZSIsInByaW9yaXR5Iiwibm90ZSIsImRvbmUiLCJkZWxldGVUYXNrc0Zyb20iLCJidXR0b25zIiwiYnV0dG9uIiwiZGVsZXRlQnRuUmVtb3ZlVGFzayIsImUiLCJidG5JZCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInNwbGl0IiwiY2xvc2VEZXRhaWxzT2ZEZWxldGVkVGFzayIsInNwbGljZSIsInN0b3BQcm9wYWdhdGlvbiIsIkRldGFpbHNUb2dnbGUiLCJwdXRUYXNrSW5mb1RvSW5wdXQiLCJzZXROYW1lIiwic2V0RGF0ZSIsInNldFBpb3JpdHkiLCJzZXROb3RlIiwiY2hhbmdlVGFza09uSW5wdXQiLCJjaGFuZ2VUaXRsZU9uSW5wdXQiLCJjaGFuZ2VEYXRlT25JbnB1dCIsImNoYW5nZVByaW9yaXR5T25JbnB1dCIsImNoYW5nZU5vdGVPbklucHV0IiwiaW5wdXQiLCJvbmlucHV0IiwiY2hhbmdlVGl0bGUiLCJ0YXNrTnVtYmVyIiwiY2hhbmdlRGF0ZSIsImZvcm1hdERhdGUyIiwic3RhcnMiLCJjaGFuZ2VQcmlvcml0eSIsImdldFByaW9yaXR5SW5wdXQiLCJzdGFyMSIsImNvbnRhaW5zIiwiY2hhbmdlTm90ZSIsIm5hbWUiLCJmb3JtYXREYXRlIiwibGV2ZWwiLCJkYXkiLCJtb250aCIsInllYXIiLCJmb3JtYXR0ZWQiLCJ0YXNrc1RvZ2dsZURldGFpbHMiLCJ0b2RvTGlzdFNob3dEZXRhaWxzIiwiQXJyb3dIaWRlRGV0YWlscyIsInRhc2tzIiwidGFza0lkIiwidG9nZ2xlRGV0YWlscyIsIkRldGFpbHNJbnB1dCIsImFycm93QnRuIiwiaGlkZURldGFpbHMiLCJpZE51bWJlciIsImdldERldGFpbHNDb250YWluZXJJZE51bWJlciIsImRldGFpbHNBcmVTaG93biIsInNob3dEZXRhaWxzIiwiZGV0YWlsc0NvbnRhaW5lcklkIiwic2V0RGV0YWlsc0lkVG8iLCJtYWtlRGV0YWlsc0RlZmF1bHQiLCJoaWRlIiwic2hvd0FzRmxleCIsImNvbXB1dGVkRGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZGlzcGxheSIsImRvbmVCdG5zIiwiY2hlY2tib3hlcyIsImNoZWNrYm94IiwiZG9uZUJ0bkNvbXBsZXRlVGFzayIsImNib3hJZCIsInBhcmVudE5vZGUiLCJjbG9zZURldGFpbHNPZkNvbXBsZXRlZFRhc2siLCJjbGVhckNvbnRlbnRPZiIsImVudHJpZXMiLCJpbmRleCIsIml0ZW0iLCJyZW5kZXJUYXNrIiwiRGVsZXRlVGFza0J0bnMiLCJUYXNrRG9uZSIsInRvZ2dsZURvbmVJY29ucyIsImNvbnRlbnRDb250YWluZXIiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJpIiwiYXBwZW5kIiwiY3JlYXRlVGFzayIsImxpIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZUxhYmVsIiwiY3JlYXRlSW5wdXQiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlRGVsZXRlQnRuIiwibGFiZWwiLCJodG1sRm9yIiwiY3JlYXRlRG9uZUljb24iLCJjb250YWluZXIiLCJpY29uIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUaXRsZSIsImNyZWF0ZURldGFpbHMiLCJzdHIiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZUZyb20iLCJjcmVhdGVEdWUiLCJjcmVhdGVQcmlvcml0eSIsImNyZWF0ZU5vdGUiLCJzcGFuIiwiZHVlIiwiZGF0ZU92ZXJkdWUiLCJjbGFzc05hbWUiLCJjcmVhdGVDYWxlbmRhckltYWdlIiwiY3JlYXRlU3BhbkZvckRhdGUiLCJ0b2RheSIsIkRhdGUiLCJ0YXNrRGF0ZSIsImltZyIsIkNhbGVuZGFyIiwiY3JlYXRlU3BhbkZvclByaW9yaXR5IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm5vdGVJY29uIiwiTm90ZSIsInRleHQiLCJidG4iLCJkb25lcyIsInBhcmVudEVsZW1lbnQiLCJpY29uQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtB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QUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJidW5kbGUuZmQxN2ZiYzZkMWNmNjg0NTAzMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9KUy9pbmRleC5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9jYWxlbmRhci43NTA0Yzg4OWZjMmQ5ZDRmNTQwMGJhNjk4YjI1NDM3Ny5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvZWRpdC4yOTI3ZjhkZTQyNjhiYWU4ZjExYzRkZmUzYWRjNzJiNS5zdmdcIjsiLCJpbXBvcnQgXCIuLi9TQ1NTL3N0eWxlLnNjc3NcIjtcbmltcG9ydCAqIGFzIE1lbnVCdG4gZnJvbSBcIi4vc3R5bGUvbWVudS5qc1wiO1xuaW1wb3J0ICogYXMgUmVzaXplIGZyb20gXCIuL3N0eWxlL3Jlc2l6ZS5qc1wiO1xuaW1wb3J0ICogYXMgUHJpb3JpdHkgZnJvbSBcIi4vc3R5bGUvcHJpb3JpdHkuanNcIjtcbmltcG9ydCAqIGFzIEFkZFRhc2tCdG4gZnJvbSBcIi4vdGFza3MvYWRkLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJBbGxUYXNrc0Zyb20gfSBmcm9tIFwiLi90YXNrcy9yZW5kZXIuanNcIjtcbmltcG9ydCAqIGFzIERlZmF1bHRzIGZyb20gXCIuL3Rhc2tzL2RlZmF1bHRzLmpzXCI7XG5pbXBvcnQgKiBhcyBJbnB1dCBmcm9tIFwiLi90YXNrcy9kZXRhaWxzSW5wdXQuanNcIjtcblxuLy8gU3R5bGVcbk1lbnVCdG4uc2hvd1Byb2plY3RzKCk7XG5SZXNpemUucmVzcG9uc2l2ZSgpO1xuUHJpb3JpdHkuc3RhcnNDaGFuZ2VDb2xvcnMoKTtcbi8vIEFwcCBMb2dpY1xuXG4vLyBkZWZpbmUgdGFza3MgYXJyYXkgd2hpY2ggaXMgdG9kb2xpc3RcbmxldCBhbGxUYXNrcyA9IFsuLi5EZWZhdWx0cy5nZXQoKV07XG5cbi8vIEluaXRpYWwgcmVuZGVyIG9mIHRoZSBkZWZhdWx0IHRhc2tzIGZvcm0gdGFza3MgYXJyYXlcbnJlbmRlckFsbFRhc2tzRnJvbShhbGxUYXNrcyk7XG5cbi8vIEJ1dHRvbiB0byBhZGQgdGFzayB0byBhIGRlZmluZWQgYXJyYXlcbi8vIEFsc28gcmVyZW5kZXIgdGhlIGFycmF5IGFmdGVyIGFkZGluZyBhIHRhc2tcbkFkZFRhc2tCdG4uYWRkVGFza1RvKGFsbFRhc2tzKTtcblxuLy8gQ2hhbmdlIHRhc2tzIHdoZW4gdXNlciB0eXBlIHNvbWV0aGluZyB0byBkZXRhaWxzIHdpbmRvd1xuSW5wdXQuY2hhbmdlVGFza09uSW5wdXQoYWxsVGFza3MpO1xuIiwiZnVuY3Rpb24gc2hvd1Byb2plY3RzKCkge1xuICAvLyBNYWtlIG1lbnUgYnV0dG9uIGluIHRoZSB0b3AgbGVmdCBjb3JuZXIgZG8gd29yayAoY2hhbmdlIHByb2plY3RzIHRvIHdpZGUgb3IgbmFycm93KVxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYnJvYWRlblByb2plY3RDb250YWluZXIoKSk7XG59XG5cbmZ1bmN0aW9uIGJyb2FkZW5Qcm9qZWN0Q29udGFpbmVyKCkge1xuICAvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2UgYW5kIHRvZ2dsZSBhIGNsYXNzICdicm9hZCcgb24gZWFjaFxuICBmb3IgKGxldCBlbGVtZW50IG9mIGdldEVsZW1lbnRzVG9Ccm9hZCgpKSB7XG4gICAgdG9nZ2xlQnJvYWQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWluaW1pemVQcm9qZWN0Q29udGFpbmVyKCkge1xuICAvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2UgYW5kIHRvZ2dsZSBhIGNsYXNzICdicm9hZCcgb24gZWFjaFxuICBmb3IgKGxldCBlbGVtZW50IG9mIGdldEVsZW1lbnRzVG9Ccm9hZCgpKSB7XG4gICAgYWRkQnJvYWQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQnJvYWQoZWxlbWVudCkge1xuICAvLyBSZW1vdmUgY2xhc3MgJ2Jyb2FkJyBmcm9tIGFuIGVsZW1lbnRcbiAgLy8gdGhpcyBjbGFzcyBjaGFuZ2VzIGxlZnQtc2lkZSBwYWdlIG1lbnUgbWFraW5nIGl0IHNtYWxsZXJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnJvYWRcIik7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJyb2FkKGVsZW1lbnQpIHtcbiAgLy8gQWRkL3JlbW92ZSBjbGFzcyAnYnJvYWQnIHRvIGFuIGVsZW1lbnRcbiAgLy8gdGhpcyBjbGFzcyBjaGFuZ2VzIGxlZnQtc2lkZSBwYWdlIG1lbnUgbWFraW5nIGl0IHNtYWxsZXJcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYnJvYWRcIik7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRzVG9Ccm9hZCgpIHtcbiAgLy8gVGFrZSBzb21lIERPTSBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcbiAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdFwiKTtcbiAgbGV0IHByb2plY3RJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtaWNvblwiKTtcbiAgbGV0IHByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICBcInByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyIFwiXG4gICk7XG4gIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKTtcbiAgbGV0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1mb3JtXCIpO1xuICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3RcIik7XG4gIGxldCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtcHJvamVjdFwiKTtcblxuICAvLyBQdXQgdGhlbSBpbiB0aGUgYXJyYXkgYW5kIHJldHVybiBpdFxuICBsZXQgZWxlbWVudHMgPSBbXG4gICAgY29udGVudCxcbiAgICBwcm9qZWN0TGlzdCxcbiAgICAuLi5wcm9qZWN0LFxuICAgIC4uLnByb2plY3RJY29uLFxuICAgIC4uLnByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyLFxuICAgIC4uLmRlbGV0ZVByb2plY3RCdG4sXG4gICAgbmV3UHJvamVjdEZvcm0sXG4gICAgbmV3UHJvamVjdCxcbiAgICBzdWJtaXRQcm9qZWN0LFxuICBdO1xuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCB7IHNob3dQcm9qZWN0cywgbWluaW1pemVQcm9qZWN0Q29udGFpbmVyIH07XG4iLCJmdW5jdGlvbiBzdGFyc0NoYW5nZUNvbG9ycygpIHtcbiAgYWN0aXZhdGVGaXJzdFN0YXIoKTtcbiAgYWN0aXZhdGVTZWNvbmRTdGFyKCk7XG4gIGFjdGl2YXRlVGhpcmRTdGFyKCk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlRmlyc3RTdGFyKCkge1xuICBnZXRTdGFyMSgpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhY3RpdmF0ZVN0YXIoMSkpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVNlY29uZFN0YXIoKSB7XG4gIGdldFN0YXIyKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFjdGl2YXRlU3RhcigyKSk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGhpcmRTdGFyKCkge1xuICBnZXRTdGFyMygpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhY3RpdmF0ZVN0YXIoMykpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVN0YXIobnVtYmVyKSB7XG4gIC8vIE1ha2UgYSBzdGFyIHdpdGggYSBjZXJ0YWluIG51bWJlciBjaGFuZ2UgaXRzIHN0eWxlXG4gIC8vIE51bWJlciBjYW4gYmUgMSwgMiBvciAzIGJlY2F1c2UgdGhlcmUgYXJlIGEgdG90YWwgb2YgMyBzdGFyXG4gIGlmIChudW1iZXIgPCAxIHx8IG51bWJlciA+IDMpXG4gICAgY29uc29sZS5sb2coXG4gICAgICBgQ2FuJ3QgYWN0aXZhdGUgc3RhciAke251bWJlcn0gaW4gYWN0aXZhdGVTdGFyKCkuIFBvc3NpYmxlIHZhbHVlczogMSwgMiwgM2BcbiAgICApO1xuICBzd2l0Y2ggKG51bWJlcikge1xuICAgIGNhc2UgMTpcbiAgICAgIG91dGxpbmVTZWNvbmRTdGFyKCk7XG4gICAgICBvdXRsaW5lVGhpcmRTdGFyKCk7XG4gICAgICByZW1vdmVDb2xvckZyb21BbGxTdGFycygpO1xuICAgICAgYWRkTWVkaXVtT25tb3VzZW92ZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIGZpbGxTZWNvbmRTdGFyKCk7XG4gICAgICBhZGRDb2xvclR3b1N0YXJzKCk7XG4gICAgICBvdXRsaW5lVGhpcmRTdGFyKCk7XG4gICAgICBkZWNvbG9yVGhpcmRTdGFyKCk7XG4gICAgICBhZGRNZWRpdW1Pbm1vdXNlb3ZlcigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgZmlsbFNlY29uZFN0YXIoKTtcbiAgICAgIGZpbGxUaGlyZFN0YXIoKTtcbiAgICAgIGFkZENvbG9yVGhyZWVTdGFycygpO1xuICAgICAgcmVtb3ZlTWVkaXVtT25tb3VzZW92ZXIoKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNFQ09ORCBTVEFSXG5mdW5jdGlvbiBmaWxsU2Vjb25kU3RhcigpIHtcbiAgLy8gR2V0IHRoZSBjaGlsZCBvZiB0aGUgcHJpb3JpdHkgYW5kIG1ha2UgaXQgZmlsbGVkIHN0YXJcbiAgZ2V0U3RhcjIoKS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic3RhclwiKTtcbn1cblxuZnVuY3Rpb24gb3V0bGluZVNlY29uZFN0YXIoKSB7XG4gIC8vIEdldCB0aGUgY2hpbGQgb2YgdGhlIHByaW9yaXR5IGFuZCBtYWtlIGl0IG91dGxpbmVkIHN0YXJcbiAgZ2V0U3RhcjIoKS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic3Rhci1vdXRsaW5lXCIpO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUSElSRCBTVEFSXG5cbmZ1bmN0aW9uIGZpbGxUaGlyZFN0YXIoKSB7XG4gIC8vIEdldCB0aGUgY2hpbGQgb2YgdGhlIHByaW9yaXR5IGFuZCBtYWtlIGl0IGZpbGxlZCBzdGFyXG4gIGdldFN0YXIzKCkuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN0YXJcIik7XG59XG5cbmZ1bmN0aW9uIG91dGxpbmVUaGlyZFN0YXIoKSB7XG4gIC8vIEdldCB0aGUgY2hpbGQgb2YgdGhlIHByaW9yaXR5IGFuZCBtYWtlIGl0IG91dGxpbmVkIHN0YXJcbiAgZ2V0U3RhcjMoKS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic3Rhci1vdXRsaW5lXCIpO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSGVscGVyc1xuXG5mdW5jdGlvbiByZW1vdmVNZWRpdW1Pbm1vdXNlb3ZlcigpIHtcbiAgLy8gU2Vjb25kIHN0YXIgaGFzIGEgY2xhc3MgXCJvbm1vdXNlb3ZlclwiIHdpdGggYSBob3ZlciBlZmZlY3RcbiAgLy8gV2hlbiB0aGUgM3JkIHN0YXIgaXMgY2hvc2VuIHJlbW92ZSB0aGlzIGhvdmVyIGVmZmVjdCBmcm9tIHRoZSAybmQgc3RhclxuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5yZW1vdmUoXCJvbm1vdXNlb3ZlclwiKTtcbn1cblxuZnVuY3Rpb24gYWRkTWVkaXVtT25tb3VzZW92ZXIoKSB7XG4gIC8vIFNlY29uZCBzdGFyIGhhcyBhIGNsYXNzIFwib25tb3VzZW92ZXJcIiB3aXRoIGEgaG92ZXIgZWZmZWN0XG4gIC8vIFdoZW4gdGhlIDFzdCBPUiAybmQgc3RhciBpcyBjaG9zZW4gYWRkIHRoaXMgaG92ZXIgZWZmZWN0IHRvIHRoZSAybmQgc3RhclxuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5hZGQoXCJvbm1vdXNlb3ZlclwiKTtcbn1cblxuZnVuY3Rpb24gc3RhcklzT3V0bGluZWQoc3Rhcikge1xuICByZXR1cm4gc3Rhci5jaGlsZHJlblswXS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09PSBcInN0YXItb3V0bGluZVwiO1xufVxuXG5mdW5jdGlvbiBhZGRDb2xvclR3b1N0YXJzKCkge1xuICByZW1vdmVDb2xvckZyb21BbGxTdGFycygpO1xuICBnZXRTdGFyMSgpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0xXCIpO1xuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0xXCIpO1xufVxuZnVuY3Rpb24gYWRkQ29sb3JUaHJlZVN0YXJzKCkge1xuICByZW1vdmVDb2xvckZyb21BbGxTdGFycygpO1xuICBnZXRTdGFyMSgpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0yXCIpO1xuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0yXCIpO1xuICBnZXRTdGFyMygpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0yXCIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDb2xvckZyb21BbGxTdGFycygpIHtcbiAgZGVjb2xvckZpcnN0U3RhcigpO1xuICBkZWNvbG9yU2Vjb25kU3RhcigpO1xuICBkZWNvbG9yVGhpcmRTdGFyKCk7XG59XG5cbmZ1bmN0aW9uIGRlY29sb3JGaXJzdFN0YXIoKSB7XG4gIGdldFN0YXIxKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTFcIik7XG4gIGdldFN0YXIxKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTJcIik7XG59XG5mdW5jdGlvbiBkZWNvbG9yU2Vjb25kU3RhcigpIHtcbiAgZ2V0U3RhcjIoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMVwiKTtcbiAgZ2V0U3RhcjIoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMlwiKTtcbn1cbmZ1bmN0aW9uIGRlY29sb3JUaGlyZFN0YXIoKSB7XG4gIGdldFN0YXIzKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTFcIik7XG4gIGdldFN0YXIzKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTJcIik7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXIxKCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTFcIik7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXIyKCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTJcIik7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXIzKCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTNcIik7XG59XG5cbmV4cG9ydCB7IHN0YXJzQ2hhbmdlQ29sb3JzLCBhY3RpdmF0ZVN0YXIgfTtcbiIsImltcG9ydCB7IGdldENvbXB1dGVkRGlzcGxheSB9IGZyb20gXCIuLi90YXNrcy9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5pbXBvcnQgeyBtaW5pbWl6ZVByb2plY3RDb250YWluZXIgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbmZ1bmN0aW9uIHJlc3BvbnNpdmUoKSB7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgLy8gUmVzaXppbmcgd2luZG93IG1ha2VzIG1pZGRsZSBjb2x1bW4gZml0XG4gIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTAyNHB4KVwiKS5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgLy8gSWYgc2NyZWVuIGlzIG5hcnJvd2VyIHRoYW4gMTAyNHB4IGFuZCBkZXRhaWxzIGFyZSBvcGVuIChyaWdodCBzaWRlIG9mIHRoZSBwYWdlKVxuICAgIC8vIHRoYW4gbWluaW1pemUgbGVmdCBzaWRlIGFuZCBtYWtlIFwibWFpblwiIGZpdCB0aGUgd2hvbGUgc2Vjb25kIGNvbHVtblxuICAgIGlmIChzY3JlZW5MZXNzVGhlbjEwMjQoKSAmJiBnZXRDb21wdXRlZERpc3BsYXkoZGV0YWlscykgPT09IFwiZmxleFwiKSB7XG4gICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvNFwiO1xuICAgICAgbWluaW1pemVQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgICAvLyBEb2Vzbid0IG1hdHRlciB0aGUgc2l6ZSBvZiB0aGUgc2NyZWVuLFxuICAgICAgLy8gaWYgZGV0YWlscyBhcmUgY2xvc2VkICdtYWluJyBmaXQgdGhlIHdob2xlIHNlY29uZCBjb2x1bW5cbiAgICB9IGVsc2UgaWYgKGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSA9PT0gXCJub25lXCIpIHtcbiAgICAgIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gICAgICAvLyBFbHNlIGZvciBlLmcuIHdoZW4gc2NyZWVuIGFyZSB3aWRlciB0aGVuIDEwMjRweCBhbmRcbiAgICAgIC8vIGRldGFpbHMgYXJlIG9wZW4sIHRoZW4gbWFpbiBpcyB0aGUgY29sdW1uIGluIHRoZSBtaWRkbGVcbiAgICB9IGVsc2Uge1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzNcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzY3JlZW5MZXNzVGhlbjEwMjQoKSB7XG4gIC8vIENoZWNrIGlmIHNjcmVlbiBpcyBsZXNzIHRoZW4gMTAyNHB4IHdpZGVcbiAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTAyNHB4KVwiKS5tYXRjaGVzO1xufVxuXG4vLyBXaGVuIHJlc2l6aW5nIHdpbmRvdyBtaWRkbGUgY29sdW1uIHJlc2l6ZSBpdHNlbGYgdG8gYmUgcmVzcG9uc2l2ZVxuZXhwb3J0IHsgcmVzcG9uc2l2ZSwgc2NyZWVuTGVzc1RoZW4xMDI0IH07XG4iLCJpbXBvcnQgeyB0YXNrRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcbmltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuXG5mdW5jdGlvbiBhZGRUYXNrVG8oYXJyKSB7XG4gIGNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC10b2RvXCIpO1xuXG4gIHN1Ym1pdFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIFByZXZlbnQgZGVmYXVsdCBzdWJtaXQgYmVoYXZpb3JcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIEdldCB0YXNrIG5hbWUgZnJvbSBVc2VyIGFuZCBhZGQgaXQgdG8gdGFza3MgYXJyYXlcbiAgICBwdXNoVGFza1RvKGFycik7XG4gICAgY29uc29sZS50YWJsZShhcnIpO1xuICAgIC8vIFJlcmVuZGVyIGFycmF5XG4gICAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG5cbiAgICByZXR1cm4gYXJyO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHVzaFRhc2tUbyhhcnIpIHtcbiAgLy8gUHVzaCB0YXNrIHRvIGFycmF5XG4gIGFyci5wdXNoKGdldFRhc2soKSk7XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2soKSB7XG4gIC8vIEdldCB1c2VyIGlucHV0IHZhbHVlLCBzYXZlIGl0XG4gIGxldCB0YXNrID0gdGFza0ZhY3RvcnkoeyB0aXRsZTogZ2V0SW5wdXRWYWx1ZSgpIH0pO1xuICAvLyBhbmQgY2xlYXIgaW5wdXRcbiAgY2xlYXJUYXNrSW5wdXQoKTtcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoKSB7XG4gIC8vIEdldCB1c2VyIGlucHV0IHZhbHVlIGFzIE5ldyBUYXNrIDogU1RSSU5HXG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvXCIpLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tJbnB1dCgpIHtcbiAgLy8gQ2xlYXIgdXNlciBpbnB1dFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvXCIpLnZhbHVlID0gXCJcIjtcbn1cblxuZXhwb3J0IHsgZ2V0VGFzaywgYWRkVGFza1RvIH07XG4iLCJpbXBvcnQgeyB0YXNrRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcblxuZnVuY3Rpb24gZ2V0KCkge1xuICAvLyBUaGlzIGZ1bmN0aW4gc2ltcGx5IGNyZWF0ZSBhbiBhcnJheSB3aXRoIGRlZmF1bHQgdGFza3MgaW4gaXRcbiAgbGV0IGFsbFRhc2tzID0gW1xuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIHN0dWZmXCIsXG4gICAgICBmcm9tOiBcIlByb2plY3QgMlwiLFxuICAgICAgZGF0ZTogXCIxNS4wMy4yMDI1XCIsXG4gICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgIG5vdGU6IFwic29tZXRoaW5nXCIsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTGVhcm4gZW5nbGlzaFwiLFxuICAgICAgZGF0ZTogXCIxMC4wMS4yMDIwXCIsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTGVhcm4gc3R1ZmZcIixcbiAgICAgIGZyb206IFwiUHJvamVjdCAyXCIsXG4gICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICBub3RlOiBcInNvbWV0aGluZ1wiLFxuICAgICAgZG9uZTogdHJ1ZSxcbiAgICB9KSxcbiAgXTtcblxuICByZXR1cm4gYWxsVGFza3M7XG59XG5cbmV4cG9ydCB7IGdldCB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcblxuZnVuY3Rpb24gZGVsZXRlVGFza3NGcm9tKGFycikge1xuICAvLyBUYWtlIHRoZSBjb2xsY2V0aW9uIG9mIGFsbCBkZWxldGUgY3Jvc3MgYnV0dG9ucyBmcm9tIHRhc2tzIGJ5IGNsYXNzIG5hbWVcbiAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXRvZG8tYnRuXCIpO1xuICAvLyBMb29wIHRocm91Z2ggY29sbGVjdGlvbiBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggYnV0dG9uXG4gIGZvciAobGV0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG4gICAgZGVsZXRlQnRuUmVtb3ZlVGFzayhidXR0b24sIGFycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQnRuUmVtb3ZlVGFzayhidXR0b24sIGFycikge1xuICAvLyBGdW5jdGlvbiB0byBhc3NpZ24gRXZlbnQgbGlzdGVuZXIgdG8gYnV0dG9uc1xuICAvLyB0byByZW1vdmUgcGFydGljdWxhciB0YXNrcyBmcm9tIHBhZ2VcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIGdldCBJZCBvZiBhIGJ1dHRvbiB0byB3aGljaCBsaXN0ZW5lciBpcyBhc3NpZ25lZFxuICAgIGxldCBidG5JZCA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAvLyBnZXQgb25seSBudW1iZXIgYWZ0ZXIgdGhlIGh5cGhlbiBmcm9tIElkXG4gICAgbGV0IG51bWJlciA9IGJ0bklkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAvLyBCZWZvcmUgcmVtb3ZpbmcgYW4gaXRlbSBtYWtlIHN1cmUgdG8gY2xvc2UgaXRzIGRldGFpbHNcbiAgICBjbG9zZURldGFpbHNPZkRlbGV0ZWRUYXNrKG51bWJlcik7XG4gICAgLy8gUmVtb3ZlIGl0ZW0gZnJvbSB0aGUgYXJyYXkgYnkgdGhhdCBudW1iZXJcbiAgICBhcnIuc3BsaWNlKG51bWJlciwgMSk7XG4gICAgLy8gUmVyZW5kZXIgYXJyYXlcbiAgICByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKTtcbiAgICAvLyBBdm9pZCBmaXJpbmcgcGFyZW50IGVsZW1lbnQgbGlzdGVuZXIgYWZ0ZXIgY2xpY2tpbmcgb24gdGhlIGJ1dHRvblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZURldGFpbHNPZkRlbGV0ZWRUYXNrKG51bWJlcikge1xuICAvLyBCZWZvcmUgcmVtb3ZpbmcgYW4gaXRlbSBtYWtlIHN1cmUgaGlzIGRldGFpbHMgYXJlIG5vdCBzaG93blxuICAvLyBJZiB0aGV5IGFyZSB0aGVuIGhpZGUgdGhlbVxuICBpZiAoRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKSA9PT0gbnVtYmVyKVxuICAgIERldGFpbHNUb2dnbGUuaGlkZURldGFpbHMoKTtcbn1cblxuZXhwb3J0IHsgZGVsZXRlVGFza3NGcm9tIH07XG4iLCJpbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcbmltcG9ydCB7IGFjdGl2YXRlU3RhciB9IGZyb20gXCIuLi9zdHlsZS9wcmlvcml0eS5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHB1dFRhc2tJbmZvVG9JbnB1dCh0YXNrKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIHB1dCBpbmZvIGZyb20gdGFza3MgaW4gaW5wdXRzIHdoZW4gZGV0YWlscyBhcmUgc2hvd25cbiAgc2V0TmFtZSh0YXNrLnRpdGxlKTtcbiAgc2V0RGF0ZSh0YXNrLmRhdGUpO1xuICBzZXRQaW9yaXR5KHRhc2sucHJpb3JpdHkpO1xuICBzZXROb3RlKHRhc2subm90ZSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhc2tPbklucHV0KGFycikge1xuICAvLyBDaGFuZ2UgYSB0YXNrIHdpdGggaW5wdXQgZnJvbSBEZXRhaWxzIFdpbmRvd1xuICBjaGFuZ2VUaXRsZU9uSW5wdXQoYXJyKTtcbiAgY2hhbmdlRGF0ZU9uSW5wdXQoYXJyKTtcbiAgY2hhbmdlUHJpb3JpdHlPbklucHV0KGFycik7XG4gIGNoYW5nZU5vdGVPbklucHV0KGFycik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRpdGxlT25JbnB1dChhcnIpIHtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW5hbWUtY2hhbmdlclwiKTtcblxuICBpbnB1dC5vbmlucHV0ID0gKCkgPT4gY2hhbmdlVGl0bGUoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGl0bGUoYXJyKSB7XG4gIC8vIGdldCBudW1iZXIgb2YgdGFzayBmcm9tIGRldGFpbHNcbiAgbGV0IHRhc2tOdW1iZXIgPSBEZXRhaWxzVG9nZ2xlLmdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpO1xuICAvLyBVc2UgdGhpcyBudW1iZXIgdG8gZ2V0IHRvIHRhc2sudGl0bGUgaW4gYXJyYXlcbiAgbGV0IHRhc2sgPSBhcnJbdGFza051bWJlcl07XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1uYW1lLWNoYW5nZXJcIik7XG4gIC8vIFRhc2sgdGl0bGUgaXMgbm93IHVzZXIgaW5wdXQgdmFsdWVcbiAgdGFzay50aXRsZSA9IGlucHV0LnZhbHVlO1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZURhdGVPbklucHV0KGFycikge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG5cbiAgaW5wdXQub25pbnB1dCA9ICgpID0+IGNoYW5nZURhdGUoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRGF0ZShhcnIpIHtcbiAgLy8gZ2V0IG51bWJlciBvZiB0YXNrIGZyb20gZGV0YWlsc1xuICBsZXQgdGFza051bWJlciA9IERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCk7XG4gIC8vIFVzZSB0aGlzIG51bWJlciB0byBnZXQgdG8gdGFzay5kYXRlIGluIGFycmF5XG4gIGxldCB0YXNrID0gYXJyW3Rhc2tOdW1iZXJdO1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG4gIC8vIFRhc2sgZGF0ZSBpcyBub3cgZm9ybWF0dGVkIGRhdGUgaW5wdXQgdmFsdWVcbiAgdGFzay5kYXRlID0gZm9ybWF0RGF0ZTIoaW5wdXQudmFsdWUpO1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5T25JbnB1dChhcnIpIHtcbiAgbGV0IHN0YXJzID0gW1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0xXCIpLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0yXCIpLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0zXCIpLFxuICBdO1xuXG4gIGZvciAobGV0IHN0YXIgb2Ygc3RhcnMpIHtcbiAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjaGFuZ2VQcmlvcml0eShhcnIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VQcmlvcml0eShhcnIpIHtcbiAgLy8gZ2V0IG51bWJlciBvZiB0YXNrIGZyb20gZGV0YWlsc1xuICBsZXQgdGFza051bWJlciA9IERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCk7XG4gIC8vIFVzZSB0aGlzIG51bWJlciB0byBnZXQgdG8gdGFzay5kYXRlIGluIGFycmF5XG4gIGxldCB0YXNrID0gYXJyW3Rhc2tOdW1iZXJdO1xuICBsZXQgaW5wdXQgPSBnZXRQcmlvcml0eUlucHV0KCk7XG4gIC8vIFRhc2sgZGF0ZSBpcyBub3cgZm9ybWF0dGVkIGRhdGUgaW5wdXQgdmFsdWVcbiAgdGFzay5wcmlvcml0eSA9IGlucHV0O1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG59XG5cbmZ1bmN0aW9uIGdldFByaW9yaXR5SW5wdXQoKSB7XG4gIGxldCBzdGFyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0xXCIpO1xuXG4gIGlmIChzdGFyMS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZC0xXCIpKSB7XG4gICAgcmV0dXJuIFwibWVkaXVtXCI7XG4gIH0gZWxzZSBpZiAoc3RhcjEuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWQtMlwiKSkge1xuICAgIHJldHVybiBcImhpZ2hcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJsb3dcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VOb3RlT25JbnB1dChhcnIpIHtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlLWNoYW5nZXJcIik7XG5cbiAgaW5wdXQub25pbnB1dCA9ICgpID0+IGNoYW5nZU5vdGUoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlTm90ZShhcnIpIHtcbiAgLy8gZ2V0IG51bWJlciBvZiB0YXNrIGZyb20gZGV0YWlsc1xuICBsZXQgdGFza051bWJlciA9IERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCk7XG4gIC8vIFVzZSB0aGlzIG51bWJlciB0byBnZXQgdG8gdGFzay5ub3RlIGluIGFycmF5XG4gIGxldCB0YXNrID0gYXJyW3Rhc2tOdW1iZXJdO1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGUtY2hhbmdlclwiKTtcbiAgLy8gVGFzayBOb3RlIGlzIG5vdyBmb3JtYXR0ZWQgTm90ZSBpbnB1dCB2YWx1ZVxuICB0YXNrLm5vdGUgPSBpbnB1dC52YWx1ZTtcbiAgLy8gcmVyZW5kZXIgdG8gc2VlIHRoZSBjaGFuZ2VzXG4gIHJlbmRlckFsbFRhc2tzRnJvbShhcnIpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU2V0IGlucHV0XG5mdW5jdGlvbiBzZXROYW1lKG5hbWUpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW5hbWUtY2hhbmdlclwiKS52YWx1ZSA9IG5hbWU7XG59XG5cbmZ1bmN0aW9uIHNldERhdGUoZGF0ZSkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUgPSBmb3JtYXREYXRlKGRhdGUpO1xuICBmb3JtYXREYXRlKGRhdGUpO1xufVxuXG5mdW5jdGlvbiBzZXRQaW9yaXR5KGxldmVsKSB7XG4gIGlmIChsZXZlbCA9PT0gXCJoaWdoXCIpIHtcbiAgICBhY3RpdmF0ZVN0YXIoMyk7XG4gIH0gZWxzZSBpZiAobGV2ZWwgPT09IFwibWVkaXVtXCIpIHtcbiAgICBhY3RpdmF0ZVN0YXIoMik7XG4gIH0gZWxzZSBpZiAobGV2ZWwgPT09IFwibG93XCIpIHtcbiAgICBhY3RpdmF0ZVN0YXIoMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Tm90ZShub3RlKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1jaGFuZ2VyXCIpLnZhbHVlID0gbm90ZTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIC8vIElmIGRhdGUgaXMgdW5kZWZpbmVkIHlldCwgdGhlbiByZXR1cm4gbm90aGluZyBcIlwiXG4gIGlmICghZGF0ZSkgcmV0dXJuIFwiXCI7XG4gIC8vIERhdGUgZm9ybWF0dGluZzogZnJvbSBcImRkLm1tLnl5eXlcIiB0byBcInl5eXktTU0tZGRcIlxuICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi5cIilbMF07XG4gIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCIuXCIpWzFdO1xuICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCIuXCIpWzJdO1xuXG4gIGxldCBmb3JtYXR0ZWQgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICByZXR1cm4gZm9ybWF0dGVkO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlMihkYXRlKSB7XG4gIC8vIElmIGRhdGUgaXMgdW5kZWZpbmVkIHlldCwgdGhlbiByZXR1cm4gbm90aGluZyBcIlwiXG4gIGlmICghZGF0ZSkgcmV0dXJuIFwiXCI7XG4gIC8vIERhdGUgZm9ybWF0dGluZzogZnJvbSAgXCJ5eXl5LU1NLWRkXCIgdG8gXCJkZC5tbS55eXl5XCJcbiAgbGV0IGRheSA9IGRhdGUuc3BsaXQoXCItXCIpWzJdO1xuICBsZXQgbW9udGggPSBkYXRlLnNwbGl0KFwiLVwiKVsxXTtcbiAgbGV0IHllYXIgPSBkYXRlLnNwbGl0KFwiLVwiKVswXTtcblxuICBsZXQgZm9ybWF0dGVkID0gYCR7ZGF5fS4ke21vbnRofS4ke3llYXJ9YDtcbiAgcmV0dXJuIGZvcm1hdHRlZDtcbn1cblxuZXhwb3J0IHsgcHV0VGFza0luZm9Ub0lucHV0LCBjaGFuZ2VUYXNrT25JbnB1dCB9O1xuIiwiaW1wb3J0IHsgc2NyZWVuTGVzc1RoZW4xMDI0IH0gZnJvbSBcIi4uL3N0eWxlL3Jlc2l6ZS5qc1wiO1xuaW1wb3J0ICogYXMgRGV0YWlsc0lucHV0IGZyb20gXCIuL2RldGFpbHNJbnB1dC5qc1wiO1xuXG5mdW5jdGlvbiB0YXNrc1RvZ2dsZURldGFpbHMoYXJyKSB7XG4gIC8vIE1ha2UgdG9kbyB0YXNrcyBzaG93IGRldGFpbHMgb24gY2xpY2sgKGZyb20gcmlnaHQgc2lkZSlcbiAgdG9kb0xpc3RTaG93RGV0YWlscyhhcnIpO1xuICAvLyBNYWtlIGJ1dHRvbiBpbiBkZXRhaWxzIGludGVyYWN0OiBoaWRlIGRldGFpbHNcbiAgQXJyb3dIaWRlRGV0YWlscygpO1xufVxuXG5mdW5jdGlvbiB0b2RvTGlzdFNob3dEZXRhaWxzKGFycikge1xuICAvLyBNYWtlIHRvZG8gbGlzdHMgc2hvdyBkZXRhaWxzIG9uY2xpY2tcbiAgbGV0IHRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9cIik7XG5cbiAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBnZXQgSWQgb2YgYSB0YXNrIHRvIHdoaWNoIGxpc3RlbmVyIGlzIGFzc2lnbmVkXG4gICAgICBsZXQgdGFza0lkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgLy8gZ2V0IG9ubHkgbnVtYmVyIGZyb20gSWQgYWZ0ZXIgdGhlIGh5cGhlblxuICAgICAgbGV0IG51bWJlciA9IHRhc2tJZC5zcGxpdChcIi1cIilbMV07XG4gICAgICAvLyBQYXNzIGEgbnVtYmVyIG9mIHRoZSBjbGlja2VkIHRhc2sgdG8gZGV0YWlsc1xuICAgICAgdG9nZ2xlRGV0YWlscyhudW1iZXIpO1xuICAgICAgLy8gUHV0IGluZm8gZnJvbSB0YXNrcyBpbiBpbnB1dHMgd2hlbiBkZXRhaWxzIGFyZSBzaG93blxuICAgICAgRGV0YWlsc0lucHV0LnB1dFRhc2tJbmZvVG9JbnB1dChhcnJbbnVtYmVyXSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gQXJyb3dIaWRlRGV0YWlscygpIHtcbiAgLy8gTWFrZSBBcnJvdyBoaWRlIERldGFpbHMgb25jbGlja1xuICBsZXQgYXJyb3dCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWRldGFpbHMtYnRuXCIpO1xuICBhcnJvd0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZURldGFpbHMpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVEZXRhaWxzKG51bWJlcikge1xuICBsZXQgaWROdW1iZXIgPSBnZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKTtcblxuICAvLyBpZiBkZXRhaWxzIGFyZSB2aXNpYmxlIG9uIHRoZSBwYWdlIEFORFxuICAvLyBpZiB1c2VyIGNsaWNrcyBvbiB0aGUgc2FtZSB0YXNrIDJ4IHRoYW4gaGlkZSBkZXRhaWxzXG4gIGlmIChkZXRhaWxzQXJlU2hvd24oKSAmJiBpZE51bWJlciA9PT0gbnVtYmVyKSB7XG4gICAgaGlkZURldGFpbHMoKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93RGV0YWlscyhudW1iZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRldGFpbHNBcmVTaG93bigpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIC8vIEFyZSBkZXRhaWxzIHNob3duIG9uIHRoZSBwYWdlPyBSZXR1cm4gYm9vbGVhbjpcbiAgcmV0dXJuIGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSAhPT0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIC8vIFRha2UgaWQgb2YgdGhlIGRldGFpbHMgY2hpbGRcbiAgbGV0IGRldGFpbHNDb250YWluZXJJZCA9IGRldGFpbHMuY2hpbGRyZW5bMF0uaWQ7XG4gIC8vIFRha2UgYSBudW1iZXIgZnJvbSB0aGF0IGlkIGFuZCByZXR1cm4gaXRcbiAgbGV0IGlkTnVtYmVyID0gZGV0YWlsc0NvbnRhaW5lcklkLnNwbGl0KFwiLVwiKVsyXTtcbiAgcmV0dXJuIGlkTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBzZXREZXRhaWxzSWRUbyhudW1iZXIpIHtcbiAgLy8gRmlyc3QgbWFrZSBkZXRhaWxzIElEIHRoZSBzYW1lIGFzIGluaXRpYWwgSUQgKHdpdGggbm8gbnVtYmVycylcbiAgLy8gQW5vdGhlciB3b3JkcyByZW1vdmUgYWxsIGV4aXN0aW5nIG51bWJlcnMgZnJvbSBpdFxuICBtYWtlRGV0YWlsc0RlZmF1bHQoKTtcbiAgLy8gVGhlbiBwYXNzIGEgbnVtYmVyIHRvIGl0XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBkZXRhaWxzLmNoaWxkcmVuWzBdLmlkICs9IGAtJHtudW1iZXJ9YDtcbn1cblxuZnVuY3Rpb24gaGlkZURldGFpbHMoKSB7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuICBoaWRlKGRldGFpbHMpO1xuICAvLyBXaGVuIGRldGFpbHMgYXJlIGhpZGRlbiB0aGUgbWFpbiBjb2x1bW4gd2lsbCBiZSBicm9hZGVyXG4gIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gIC8vIFdoZW4gZGV0YWlscyBhcmUgaGlkZGVuIHRoZWlyIGRldGFpbHMtY29udGFpbmVyLUlEIHdpbGwgYmUgZGVmYXVsdCB3aXRoIG5vIG51bWJlclxuICBtYWtlRGV0YWlsc0RlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gc2hvd0RldGFpbHMobnVtYmVyKSB7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuICBzaG93QXNGbGV4KGRldGFpbHMpO1xuICAvLyBBbHNvIHNldCBuZXcgSUQgbnVtYmVyIHRvIGRldGFpbHMgY29udGFpbmVyIChvbmx5IGlmIGl0IGRvZXNuJ3QgaGF2ZSBJRCBhbHJlYWR5KVxuICBzZXREZXRhaWxzSWRUbyhudW1iZXIpO1xuICAvLyBJZiBzY3JlZW4gaXMgYmlnZ2VyIHRoYW4gMTAyNCB0aGVuIG1ha2UgXCJtYWluXCIgdGhlIG1pZGRsZSBjb2x1bW4gb2YgMyBjb2x1bW5zXG4gIGlmICghc2NyZWVuTGVzc1RoZW4xMDI0KCkpIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi8zXCI7XG59XG5cbmZ1bmN0aW9uIG1ha2VEZXRhaWxzRGVmYXVsdCgpIHtcbiAgLy8gQ2hhbmdlIElEIG9mIGNoaWxkIG9mIHRoZSBkZXRhaWxzIHRvIGRlZmF1bHQgXCJkZXRhaWxzLWNvbnRhaW5lclwiXG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBkZXRhaWxzLmNoaWxkcmVuWzBdLmlkID0gXCJkZXRhaWxzLWNvbnRhaW5lclwiO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZERpc3BsYXkoZWxlbWVudCkge1xuICBsZXQgY29tcHV0ZWREaXNwbGF5ID0gd2luZG93XG4gICAgLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIik7XG4gIHJldHVybiBjb21wdXRlZERpc3BsYXk7XG59XG5cbmZ1bmN0aW9uIHNob3dBc0ZsZXgoZWxlbWVudCkge1xuICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn1cblxuZnVuY3Rpb24gaGlkZShlbGVtZW50KSB7XG4gIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5leHBvcnQge1xuICB0YXNrc1RvZ2dsZURldGFpbHMsXG4gIGdldENvbXB1dGVkRGlzcGxheSxcbiAgZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyLFxuICBoaWRlRGV0YWlscyxcbiAgZGV0YWlsc0FyZVNob3duLFxufTtcbiIsImltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuaW1wb3J0ICogYXMgRGV0YWlsc1RvZ2dsZSBmcm9tIFwiLi9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5cbmZ1bmN0aW9uIGRvbmVCdG5zKGFycikge1xuICAvLyBUYWtlIHRoZSBjb2xsZWN0aW9uIG9mIGFsbCBjaGVja2JveGVzIGZyb20gdGFza3MgYnkgY2xhc3MgbmFtZVxuICBsZXQgY2hlY2tib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvLWljb24tY29udGFpbmVyXCIpO1xuICAvLyBMb29wIHRocm91Z2ggY29sbGVjdGlvbiBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggYnV0dG9uXG4gIGZvciAobGV0IGNoZWNrYm94IG9mIGNoZWNrYm94ZXMpIHtcbiAgICBkb25lQnRuQ29tcGxldGVUYXNrKGNoZWNrYm94LCBhcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRvbmVCdG5Db21wbGV0ZVRhc2soY2hlY2tib3gsIGFycikge1xuICAvLyBGdW5jdGlvbiB0byBhc3NpZ24gRXZlbnQgbGlzdGVuZXIgdG8gY2hlY2tib3hlc1xuICAvLyB0byBjb21wbGV0ZSBwYXJ0aWN1bGFyIHRhc2tzIGZyb20gcGFnZVxuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAvLyBnZXQgSWQgb2YgYSBjaGVja2JveCB0byB3aGljaCBsaXN0ZW5lciBpcyBhc3NpZ25lZFxuICAgIGxldCBjYm94SWQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuICAgIC8vIGdldCBvbmx5IG51bWJlciBhZnRlciB0aGUgaHlwaGVuIGZyb20gSWRcbiAgICBsZXQgbnVtYmVyID0gY2JveElkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAvLyBCZWZvcmUgY29tcGxldGluZyBhbiBpdGVtIG1ha2Ugc3VyZSB0byBjbG9zZSBpdHMgZGV0YWlsc1xuICAgIGNsb3NlRGV0YWlsc09mQ29tcGxldGVkVGFzayhudW1iZXIpO1xuICAgIC8vIElmIHRhc2sgaXMgZG9uZSB0aGVuIHVuZG9uZSBpdCwgZWxzZSBjb21wbGV0ZSBpdFxuICAgIGFycltudW1iZXJdLmRvbmUgPSAhYXJyW251bWJlcl0uZG9uZTtcbiAgICAvLyBSZXJlbmRlciBhcnJheVxuICAgIHJlbmRlckFsbFRhc2tzRnJvbShhcnIpO1xuICAgIC8vIEF2b2lkIGZpcmluZyBwYXJlbnQgZWxlbWVudCBsaXN0ZW5lciBhZnRlciBjbGlja2luZyBvbiB0aGUgY2hlY2tib3hcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VEZXRhaWxzT2ZDb21wbGV0ZWRUYXNrKG51bWJlcikge1xuICAvLyBCZWZvcmUgcmVtb3ZpbmcgYW4gaXRlbSBtYWtlIHN1cmUgaGlzIGRldGFpbHMgYXJlIG5vdCBzaG93blxuICAvLyBJZiB0aGV5IGFyZSB0aGVuIGhpZGUgdGhlbVxuICBpZiAoRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKSA9PT0gbnVtYmVyKVxuICAgIERldGFpbHNUb2dnbGUuaGlkZURldGFpbHMoKTtcbn1cblxuZXhwb3J0IHsgZG9uZUJ0bnMgfTtcbiIsImNvbnN0IHRhc2tGYWN0b3J5ID0gZnVuY3Rpb24gKHtcbiAgdGl0bGUgPSBcIlwiLFxuICBmcm9tID0gXCJcIixcbiAgZGF0ZSA9IFwiXCIsXG4gIHByaW9yaXR5ID0gXCJsb3dcIixcbiAgbm90ZSA9IFwiXCIsXG4gIGRvbmUgPSBmYWxzZSxcbn0pIHtcbiAgcmV0dXJuIHsgdGl0bGUsIGZyb20sIGRhdGUsIHByaW9yaXR5LCBub3RlLCBkb25lIH07XG59O1xuXG5leHBvcnQgeyB0YXNrRmFjdG9yeSB9O1xuIiwiaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuLi8uLi9JQ09OUy9jYWxlbmRhci5zdmdcIjtcbmltcG9ydCBOb3RlIGZyb20gXCIuLi8uLi9JQ09OUy9lZGl0LnN2Z1wiO1xuaW1wb3J0ICogYXMgRGVsZXRlVGFza0J0bnMgZnJvbSBcIi4vZGVsZXRlLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcbmltcG9ydCAqIGFzIFRhc2tEb25lIGZyb20gXCIuL2RvbmUuanNcIjtcblxuZnVuY3Rpb24gcmVuZGVyQWxsVGFza3NGcm9tKGFycikge1xuICAvLyBDbGVhciBhbGwgcHJldmlvdXNseSByZW5kZXJlZCBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG4gIGNsZWFyQ29udGVudE9mKFwidG9kb3NcIik7XG4gIC8vUmVuZGVyIGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXkgdG8gdGhlIHBhZ2VcbiAgZm9yIChsZXQgW2luZGV4LCBpdGVtXSBvZiBhcnIuZW50cmllcygpKSB7XG4gICAgcmVuZGVyVGFzayhpbmRleCwgaXRlbSk7XG4gIH1cbiAgLy8gTWFrZSBkZWxldGUgYnV0dG9ucyBvbiBjbGljayByZW1vdmUgdGFzayB0byB3aGljaCB0aGV5IGFyZSBhc3NpZ25lZFxuICBEZWxldGVUYXNrQnRucy5kZWxldGVUYXNrc0Zyb20oYXJyKTtcbiAgLy8gTWFrZSBlYWNoIHRhc2sgc2hvdyBpdHMgZGV0YWlscyBvbiBjbGlja1xuICBEZXRhaWxzVG9nZ2xlLnRhc2tzVG9nZ2xlRGV0YWlscyhhcnIpO1xuICAvLyBNYWtlIGVhY2ggdGFzayBjaGVja2JveCBjb21wbGV0ZSB0YXNrIGJ5IGNoYW5naW5nIGl0cyBjbGFzc1xuICBUYXNrRG9uZS5kb25lQnRucyhhcnIpO1xuICAvLyBSZWFjaCBsYWJlbHMgYW5kIG1ha2UgdGhlbSBjaGFuZ2UgdGhlbXNlbHZlcyB3aGVuIHRoZSB0YXNrIGlzIGRvbmVcbiAgdG9nZ2xlRG9uZUljb25zKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudE9mKGlkKSB7XG4gIC8vIFJlbW92ZSBhbnkgY2hpbGQgb2YgdGhlIGVsZW1lbnQgd2l0aCBpZFxuICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2soaSwgdGFzaykge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zXCIpLmFwcGVuZChjcmVhdGVUYXNrKGksIHRhc2spKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhpLCB0YXNrKSB7XG4gIC8vIGNyZWF0ZSBsaXN0IGVsZW1lbnQgd2l0aCBhIGNsYXNzICd0b2RvJ1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kb1wiKTtcbiAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRhc2stJHtpfWApO1xuICAvLyBBcHBlbmQgbGFiZWwsIGlucHV0LCBkaXYgYW5kIGJ1dHRvbiB0byBpdFxuICBsaS5hcHBlbmQoY3JlYXRlTGFiZWwoaSkpO1xuICBsaS5hcHBlbmQoY3JlYXRlSW5wdXQoaSkpO1xuICBsaS5hcHBlbmQoXG4gICAgY3JlYXRlQ29udGVudChcbiAgICAgIHRhc2sudGl0bGUsXG4gICAgICB0YXNrLmZyb20sXG4gICAgICB0YXNrLmRhdGUsXG4gICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgdGFzay5ub3RlLFxuICAgICAgdGFzay5kb25lXG4gICAgKVxuICApO1xuICBsaS5hcHBlbmQoY3JlYXRlRGVsZXRlQnRuKGkpKTtcblxuICByZXR1cm4gbGk7XG59XG5cbi8vIExBQkVMXG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGkpIHtcbiAgLy8gcmV0dXJucyBsYWJlbCBmb3IgXCJ0b2RvY2hlY2tib3hcIiArIGlcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgbGFiZWwtJHtpfWApO1xuICBsYWJlbC5odG1sRm9yID0gYHRvZG9jaGVja2JveCR7aX1gO1xuICBsYWJlbC5hcHBlbmQoY3JlYXRlRG9uZUljb24oKSk7XG4gIHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRG9uZUljb24oKSB7XG4gIC8vIGNyZWF0ZSBpY29uIGNvbnRhaW5lclxuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pY29uLWNvbnRhaW5lclwiKTtcbiAgLy8gY3JlYXRlIGljb25cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW9uLWljb25cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNoZWNrbWFyay1vdXRsaW5lXCIpO1xuICAvLyBhcHBlbmQgaWNvbiB0byBjb250YWluZXJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBJTlBVVFxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dChpKSB7XG4gIC8vIENyZWF0ZSBpbnB1dCBjaGVja2JveCBlbGVtZW50IGFmdGVyIHRoZSBsYWJlbFxuICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIC8vIEFkZCBhdHRyaWJ1dGVzXG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYHRvZG8tY2hlY2tib3hgKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRvZG9jaGVja2JveC0ke2l9YCk7XG4gIHJldHVybiBjaGVja2JveDtcbn1cblxuLy8gQ09OVEVOVCA9IHRhc2sgdGl0bGUgYW5kIGRldGFpbHNcblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCh0aXRsZSwgZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUsIGRvbmUpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby10ZXh0XCIpO1xuICAvLyBBcHBlbmQgdGl0bGUgYW5kIGRldGFpbHMgdG8gY29udGVudFxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKHRpdGxlKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRGV0YWlscyhmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSkpO1xuICBpZiAoZG9uZSkgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHN0cikge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gc3RyO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURldGFpbHMoZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGV0YWlsc1wiKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVGcm9tKGZyb20pKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVEdWUoZGF0ZSkpO1xuICBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZVByaW9yaXR5KHByaW9yaXR5KSk7XG4gIGRldGFpbHMuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZShub3RlKSk7XG5cbiAgcmV0dXJuIGRldGFpbHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyb20oZnJvbSkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZnJvbS1wcm9qZWN0XCIpO1xuICBpZiAoZnJvbSkgc3Bhbi50ZXh0Q29udGVudCA9IGBGcm9tICR7ZnJvbX1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHVlKGRhdGUpIHtcbiAgbGV0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGR1ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImR1ZS1kYXRlXCIpO1xuICBpZiAoZGF0ZSkge1xuICAgIGlmIChkYXRlT3ZlcmR1ZShkYXRlKSkgZHVlLmNsYXNzTmFtZSA9IFwib3ZlcmR1ZS1kYXRlXCI7XG5cbiAgICBkdWUuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FsZW5kYXJJbWFnZSgpKTtcbiAgICBkdWUuYXBwZW5kQ2hpbGQoY3JlYXRlU3BhbkZvckRhdGUoZGF0ZSkpO1xuICB9XG4gIHJldHVybiBkdWU7XG59XG5cbmZ1bmN0aW9uIGRhdGVPdmVyZHVlKGRhdGUpIHtcbiAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi5cIilbMF07XG4gIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCIuXCIpWzFdO1xuICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCIuXCIpWzJdO1xuXG4gIGxldCB0YXNrRGF0ZSA9IG5ldyBEYXRlKGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fSAwOjAwOjAwYCk7XG5cbiAgcmV0dXJuIHRhc2tEYXRlID4gdG9kYXkgPyB0cnVlIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFySW1hZ2UoKSB7XG4gIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIENhbGVuZGFyKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkNhbGVuZGFyXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMnB4XCIpO1xuXG4gIHJldHVybiBpbWc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYW5Gb3JEYXRlKGRhdGUpIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IGBEdWUgJHtkYXRlfWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcmlvcml0eShsZXZlbCkge1xuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYCR7bGV2ZWx9LXByaW9yaXR5YCk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGNyZWF0ZVNwYW5Gb3JQcmlvcml0eShsZXZlbCkpO1xuICByZXR1cm4gcHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYW5Gb3JQcmlvcml0eShsZXZlbCkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpZiAobGV2ZWwgIT09IFwibG93XCIpXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IGAke2NhcGl0YWxpemVGaXJzdExldHRlcihsZXZlbCl9IHByaW9yaXR5YDtcbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm90ZShub3RlKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJub3RlLXByZXNlbmNlXCIpO1xuXG4gIGlmIChub3RlKSB7XG4gICAgLy8gY3JlYXRlIGFuZCBBcHBlbmQgTm90ZSBJY29uXG4gICAgbGV0IG5vdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBub3RlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgTm90ZSk7XG4gICAgbm90ZUljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGVuXCIpO1xuICAgIG5vdGVJY29uLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTJweFwiKTtcblxuICAgIC8vIGNyZWF0ZSBhbmQgYXBwZW5kIHRleHRcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIk5vdGVcIjtcblxuICAgIHNwYW4uYXBwZW5kQ2hpbGQobm90ZUljb24pO1xuICAgIHNwYW4uYXBwZW5kQ2hpbGQodGV4dCk7XG4gIH1cbiAgcmV0dXJuIHNwYW47XG59XG5cbi8vIERFTEVURSBCVVRUT05cbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUJ0bihpKSB7XG4gIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsZXRlLXRvZG8tYnRuXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbGV0ZWJ0bi0ke2l9YCk7XG5cbiAgLy8gY3JlYXRlIGFuIGljb24gYW5kIGFwcGVuZCBpdCB0byBidXR0b25cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW9uLWljb25cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNsb3NlLWNpcmNsZVwiKTtcblxuICBidG4uYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgcmV0dXJuIGJ0bjtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRG9uZUljb25zKCkge1xuICAvLyBHZXQgY29sbGVjdGlvbiBvZiBhbGwgdGFza3Mgd2ljaCBhcmUgY29tcGxldGVkXG4gIGxldCBkb25lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkb25lXCIpO1xuICAvLyBGb3IgZWFjaCBjb21wbGV0ZWQgdGFzayB0YWtlIGxhYmVsIGFuZCB0b2dnbGUgYSBjbGFzcyBcImNvbXBsZXRlZFwiIG9uIGl0XG4gIGZvciAobGV0IHRhc2sgb2YgZG9uZXMpIHtcbiAgICBsZXQgbnVtYmVyID0gdGFzay5wYXJlbnRFbGVtZW50LmlkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGFiZWwtJHtudW1iZXJ9YCk7XG4gICAgbGV0IGljb25Db250YWluZXIgPSBsYWJlbC5maXJzdENoaWxkO1xuXG4gICAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICB9XG59XG5cbmV4cG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9O1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=