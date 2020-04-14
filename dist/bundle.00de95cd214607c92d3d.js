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

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Illegal nesting: Only properties may be nested beneath properties.\n        on line 481 of /home/alexandr/Projects/odin_on_rails/new_beg/src/SCSS/style.scss\n>>       &:focus {\n\n   ------^\n");

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
/* harmony import */ var _style_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/details.js */ "./src/JS/style/details.js");
/* harmony import */ var _style_resize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/resize.js */ "./src/JS/style/resize.js");
/* harmony import */ var _tasks_factory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/factory.js */ "./src/JS/tasks/factory.js");
/* harmony import */ var _tasks_add_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/add.js */ "./src/JS/tasks/add.js");
/* harmony import */ var _tasks_render_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/render.js */ "./src/JS/tasks/render.js");
/* harmony import */ var _tasks_defaults_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/defaults.js */ "./src/JS/tasks/defaults.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








 // Style

_style_menu_js__WEBPACK_IMPORTED_MODULE_1__["showProjects"]();
_style_resize_js__WEBPACK_IMPORTED_MODULE_3__["responsive"]();
Object(_style_details_js__WEBPACK_IMPORTED_MODULE_2__["tasksShowDetails"])(); // App Logic
// define tasks array which is todolist

var tasks = _toConsumableArray(_tasks_defaults_js__WEBPACK_IMPORTED_MODULE_7__["get"]()); // Button to add task to a defined array


_tasks_add_js__WEBPACK_IMPORTED_MODULE_5__["addTaskTo"](tasks);

/***/ }),

/***/ "./src/JS/style/details.js":
/*!*********************************!*\
  !*** ./src/JS/style/details.js ***!
  \*********************************/
/*! exports provided: tasksShowDetails, getComputedDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tasksShowDetails", function() { return tasksShowDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedDisplay", function() { return getComputedDisplay; });
/* harmony import */ var _resize_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resize.js */ "./src/JS/style/resize.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function tasksShowDetails() {
  // Make todo tasks show details on click (from right side)
  todoListShowDetails(); // Make button in details interact: hide details

  ArrowHideDetails();
}

function todoListShowDetails() {
  // Make todo lists show details onclick
  var todoTasks = document.getElementsByClassName("todo");

  var _iterator = _createForOfIteratorHelper(todoTasks),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var task = _step.value;
      task.addEventListener("click", function () {
        return showDetails();
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
  arrowBtn.addEventListener("click", function () {
    return showDetails();
  });
}

function showDetails() {
  var details = document.getElementById("todo-misc-container");
  var main = document.getElementById("main"); // If details are shown then hide them and make main take all the space
  // Else Show details and narrow mains to fit the middle column

  if (getComputedDisplay(details) === "flex") {
    hide(details);
    main.style.gridColumn = "2/4";
  } else {
    showAsFlex(details); // If screen is less then 1024 leave middle column wide and right column overlap

    if (!Object(_resize_js__WEBPACK_IMPORTED_MODULE_0__["screenLessThen1024"])()) main.style.gridColumn = "2/3";
  }
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
/* harmony import */ var _details_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./details.js */ "./src/JS/style/details.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/JS/style/menu.js");



function responsive() {
  var main = document.getElementById("main");
  var details = document.getElementById("todo-misc-container"); // Resizing window makes middle column fit

  window.matchMedia("(max-width: 1024px)").addListener(function () {
    // If screen is narrower than 1024px and details are open (right side of the page)
    // than minimize left side and make "main" fit the whole second column
    if (screenLessThen1024() && Object(_details_js__WEBPACK_IMPORTED_MODULE_0__["getComputedDisplay"])(details) === "flex") {
      main.style.gridColumn = "2/4";
      Object(_menu_js__WEBPACK_IMPORTED_MODULE_1__["minimizeProjectContainer"])(); // Doesn't matter the size of the screen,
      // if details are closed 'main' fit the whole second column
    } else if (Object(_details_js__WEBPACK_IMPORTED_MODULE_0__["getComputedDisplay"])(details) === "none") {
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
    console.table(arr); // Render each array to the page

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
    date: "15.03.2020",
    priority: "medium",
    note: true
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Learn english",
    date: "10.01.2020"
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Learn stuff",
    from: "Project 2",
    priority: "high",
    note: true,
    done: true
  })];
  return allTasks;
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
      note = _ref$note === void 0 ? false : _ref$note,
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function renderAllTasksFrom(arr) {
  var _iterator = _createForOfIteratorHelper(arr.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          index = _step$value[0],
          item = _step$value[1];

      renderTask(index, item);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function renderTask(i, task) {
  document.getElementById("todos").append(createTask(i, task));
}

function createTask(i, task) {
  console.log(task); // create list element with a class 'todo'

  var li = document.createElement("li");
  li.setAttribute("class", "todo"); // Append label, input, div and button to it

  li.append(createLabel(i));
  li.append(createInput(i));
  li.append(createContent(task.title, task.from, task.date, task.priority, task.note));
  li.append(createDeleteBtn(i));
  return li;
} // LABEL


function createLabel(i) {
  // returns label for "todocheckbox" + i
  var label = document.createElement("label");
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
  checkbox.setAttribute("id", "todocheckbox".concat(i));
  return checkbox;
} // CONTENT = task title and details


function createContent(title, from, date, priority, note) {
  var content = document.createElement("div");
  content.setAttribute("class", "todo-text"); // Append title and details to content

  content.appendChild(createTitle(title));
  content.appendChild(createDetails(from, date, priority, note));
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
  if (from) details.appendChild(createFrom(from));
  if (date) details.appendChild(createDue(date));
  if (priority !== "low") details.appendChild(createPriority(priority));
  if (note) details.appendChild(createNote());
  return details;
}

function createFrom(from) {
  var span = document.createElement("span");
  span.setAttribute("class", "from-project");
  span.textContent = "From ".concat(from);
  return span;
}

function createDue(date) {
  var due = document.createElement("span");
  due.setAttribute("class", "due-date");
  due.appendChild(createCalendarImage());
  due.appendChild(createSpanForDate(date));
  return due;
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
  span.textContent = "".concat(capitalizeFirstLetter(level), " priority");
  return span;
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createNote() {
  var span = document.createElement("span");
  span.setAttribute("class", "note-presence"); // create and Append Note Icon

  var noteIcon = document.createElement("img");
  noteIcon.setAttribute("src", _ICONS_edit_svg__WEBPACK_IMPORTED_MODULE_1___default.a);
  noteIcon.setAttribute("alt", "Pen");
  noteIcon.setAttribute("width", "12px"); // create and append text

  var text = document.createElement("span");
  text.textContent = "Note";
  span.appendChild(noteIcon);
  span.appendChild(text);
  return span;
} // DELETE BUTTON


function createDeleteBtn(i) {
  var btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("class", "delete-todo-btn");
  btn.setAttribute("id", "delete-btn".concat(i)); // create an icon and append it to button

  var icon = document.createElement("ion-icon");
  icon.setAttribute("name", "close-circle");
  btn.appendChild(icon);
  return btn;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9JQ09OUy9jYWxlbmRhci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL0lDT05TL2VkaXQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9KUy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvc3R5bGUvZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvc3R5bGUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvc3R5bGUvcmVzaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9hZGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2NzcyJdLCJuYW1lcyI6WyJNZW51QnRuIiwiUmVzaXplIiwidGFza3NTaG93RGV0YWlscyIsInRhc2tzIiwiRGVmYXVsdHMiLCJBZGRUYXNrQnRuIiwidG9kb0xpc3RTaG93RGV0YWlscyIsIkFycm93SGlkZURldGFpbHMiLCJ0b2RvVGFza3MiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0YXNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dEZXRhaWxzIiwiYXJyb3dCdG4iLCJnZXRFbGVtZW50QnlJZCIsImRldGFpbHMiLCJtYWluIiwiZ2V0Q29tcHV0ZWREaXNwbGF5IiwiaGlkZSIsInN0eWxlIiwiZ3JpZENvbHVtbiIsInNob3dBc0ZsZXgiLCJzY3JlZW5MZXNzVGhlbjEwMjQiLCJlbGVtZW50IiwiY29tcHV0ZWREaXNwbGF5Iiwid2luZG93IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJkaXNwbGF5Iiwic2hvd1Byb2plY3RzIiwiYnJvYWRlblByb2plY3RDb250YWluZXIiLCJnZXRFbGVtZW50c1RvQnJvYWQiLCJ0b2dnbGVCcm9hZCIsIm1pbmltaXplUHJvamVjdENvbnRhaW5lciIsImFkZEJyb2FkIiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlIiwiY29udGVudCIsInByb2plY3RMaXN0IiwicHJvamVjdCIsInByb2plY3RJY29uIiwicHJvamVjdFRpdGxlQ291bnRDb250YWluZXIiLCJkZWxldGVQcm9qZWN0QnRuIiwibmV3UHJvamVjdEZvcm0iLCJuZXdQcm9qZWN0Iiwic3VibWl0UHJvamVjdCIsImVsZW1lbnRzIiwicmVzcG9uc2l2ZSIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsIm1hdGNoZXMiLCJhZGRUYXNrVG8iLCJhcnIiLCJzdWJtaXRUb2RvQnRuIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2hUYXNrVG8iLCJjb25zb2xlIiwidGFibGUiLCJyZW5kZXJBbGxUYXNrc0Zyb20iLCJwdXNoIiwiZ2V0VGFzayIsInRhc2tGYWN0b3J5IiwidGl0bGUiLCJnZXRJbnB1dFZhbHVlIiwiY2xlYXJUYXNrSW5wdXQiLCJ2YWx1ZSIsImdldCIsImFsbFRhc2tzIiwiZnJvbSIsImRhdGUiLCJwcmlvcml0eSIsIm5vdGUiLCJkb25lIiwiZW50cmllcyIsImluZGV4IiwiaXRlbSIsInJlbmRlclRhc2siLCJpIiwiYXBwZW5kIiwiY3JlYXRlVGFzayIsImxvZyIsImxpIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUxhYmVsIiwiY3JlYXRlSW5wdXQiLCJjcmVhdGVDb250ZW50IiwiY3JlYXRlRGVsZXRlQnRuIiwibGFiZWwiLCJodG1sRm9yIiwiY3JlYXRlRG9uZUljb24iLCJjb250YWluZXIiLCJpY29uIiwiYXBwZW5kQ2hpbGQiLCJjaGVja2JveCIsImNyZWF0ZVRpdGxlIiwiY3JlYXRlRGV0YWlscyIsInN0ciIsInRleHRDb250ZW50IiwiY3JlYXRlRnJvbSIsImNyZWF0ZUR1ZSIsImNyZWF0ZVByaW9yaXR5IiwiY3JlYXRlTm90ZSIsInNwYW4iLCJkdWUiLCJjcmVhdGVDYWxlbmRhckltYWdlIiwiY3JlYXRlU3BhbkZvckRhdGUiLCJpbWciLCJDYWxlbmRhciIsImxldmVsIiwiY3JlYXRlU3BhbkZvclByaW9yaXR5IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm5vdGVJY29uIiwiTm90ZSIsInRleHQiLCJidG4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FB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QUksR0FBR3RGLFFBQVEsQ0FBQzRFLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBWDtBQUNBVSxNQUFJLENBQUNULFlBQUwsQ0FBa0IsTUFBbEIsRUFBMEIsY0FBMUI7QUFFQW1DLEtBQUcsQ0FBQ3pCLFdBQUosQ0FBZ0JELElBQWhCO0FBRUEsU0FBTzBCLEdBQVA7QUFDRDs7Ozs7Ozs7Ozs7OztBQzVLRCxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDhNQUFxRzs7QUFFdkk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiYnVuZGxlLjAwZGU5NWNkMjE0NjA3YzkyZDNkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvSlMvaW5kZXguanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvY2FsZW5kYXIuNzUwNGM4ODlmYzJkOWQ0ZjU0MDBiYTY5OGIyNTQzNzcuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2VkaXQuMjkyN2Y4ZGU0MjY4YmFlOGYxMWM0ZGZlM2FkYzcyYjUuc3ZnXCI7IiwiaW1wb3J0IFwiLi4vU0NTUy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgKiBhcyBNZW51QnRuIGZyb20gXCIuL3N0eWxlL21lbnUuanNcIjtcbmltcG9ydCB7IHRhc2tzU2hvd0RldGFpbHMgfSBmcm9tIFwiLi9zdHlsZS9kZXRhaWxzLmpzXCI7XG5pbXBvcnQgKiBhcyBSZXNpemUgZnJvbSBcIi4vc3R5bGUvcmVzaXplLmpzXCI7XG5pbXBvcnQgeyB0YXNrRmFjdG9yeSB9IGZyb20gXCIuL3Rhc2tzL2ZhY3RvcnkuanNcIjtcbmltcG9ydCAqIGFzIEFkZFRhc2tCdG4gZnJvbSBcIi4vdGFza3MvYWRkLmpzXCI7XG5pbXBvcnQgeyByZW5kZXJUYXNrIH0gZnJvbSBcIi4vdGFza3MvcmVuZGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBEZWZhdWx0cyBmcm9tIFwiLi90YXNrcy9kZWZhdWx0cy5qc1wiO1xuXG4vLyBTdHlsZVxuTWVudUJ0bi5zaG93UHJvamVjdHMoKTtcblJlc2l6ZS5yZXNwb25zaXZlKCk7XG50YXNrc1Nob3dEZXRhaWxzKCk7XG5cbi8vIEFwcCBMb2dpY1xuXG4vLyBkZWZpbmUgdGFza3MgYXJyYXkgd2hpY2ggaXMgdG9kb2xpc3RcbmxldCB0YXNrcyA9IFsuLi5EZWZhdWx0cy5nZXQoKV07XG5cbi8vIEJ1dHRvbiB0byBhZGQgdGFzayB0byBhIGRlZmluZWQgYXJyYXlcbkFkZFRhc2tCdG4uYWRkVGFza1RvKHRhc2tzKTtcbiIsImltcG9ydCB7IHNjcmVlbkxlc3NUaGVuMTAyNCB9IGZyb20gXCIuL3Jlc2l6ZS5qc1wiO1xuXG5mdW5jdGlvbiB0YXNrc1Nob3dEZXRhaWxzKCkge1xuICAvLyBNYWtlIHRvZG8gdGFza3Mgc2hvdyBkZXRhaWxzIG9uIGNsaWNrIChmcm9tIHJpZ2h0IHNpZGUpXG4gIHRvZG9MaXN0U2hvd0RldGFpbHMoKTtcbiAgLy8gTWFrZSBidXR0b24gaW4gZGV0YWlscyBpbnRlcmFjdDogaGlkZSBkZXRhaWxzXG4gIEFycm93SGlkZURldGFpbHMoKTtcbn1cblxuZnVuY3Rpb24gdG9kb0xpc3RTaG93RGV0YWlscygpIHtcbiAgLy8gTWFrZSB0b2RvIGxpc3RzIHNob3cgZGV0YWlscyBvbmNsaWNrXG4gIGxldCB0b2RvVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb1wiKTtcbiAgZm9yIChsZXQgdGFzayBvZiB0b2RvVGFza3MpIHtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93RGV0YWlscygpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBBcnJvd0hpZGVEZXRhaWxzKCkge1xuICAvLyBNYWtlIEFycm93IGhpZGUgRGV0YWlscyBvbmNsaWNrXG4gIGxldCBhcnJvd0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZGV0YWlscy1idG5cIik7XG5cbiAgYXJyb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNob3dEZXRhaWxzKCkpO1xufVxuXG5mdW5jdGlvbiBzaG93RGV0YWlscygpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIC8vIElmIGRldGFpbHMgYXJlIHNob3duIHRoZW4gaGlkZSB0aGVtIGFuZCBtYWtlIG1haW4gdGFrZSBhbGwgdGhlIHNwYWNlXG4gIC8vIEVsc2UgU2hvdyBkZXRhaWxzIGFuZCBuYXJyb3cgbWFpbnMgdG8gZml0IHRoZSBtaWRkbGUgY29sdW1uXG4gIGlmIChnZXRDb21wdXRlZERpc3BsYXkoZGV0YWlscykgPT09IFwiZmxleFwiKSB7XG4gICAgaGlkZShkZXRhaWxzKTtcbiAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvNFwiO1xuICB9IGVsc2Uge1xuICAgIHNob3dBc0ZsZXgoZGV0YWlscyk7XG4gICAgLy8gSWYgc2NyZWVuIGlzIGxlc3MgdGhlbiAxMDI0IGxlYXZlIG1pZGRsZSBjb2x1bW4gd2lkZSBhbmQgcmlnaHQgY29sdW1uIG92ZXJsYXBcbiAgICBpZiAoIXNjcmVlbkxlc3NUaGVuMTAyNCgpKSBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvM1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkRGlzcGxheShlbGVtZW50KSB7XG4gIGxldCBjb21wdXRlZERpc3BsYXkgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKTtcbiAgcmV0dXJuIGNvbXB1dGVkRGlzcGxheTtcbn1cblxuZnVuY3Rpb24gc2hvd0FzRmxleChlbGVtZW50KSB7XG4gIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufVxuXG5mdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCB7IHRhc2tzU2hvd0RldGFpbHMsIGdldENvbXB1dGVkRGlzcGxheSB9O1xuIiwiZnVuY3Rpb24gc2hvd1Byb2plY3RzKCkge1xuICAvLyBNYWtlIG1lbnUgYnV0dG9uIGluIHRoZSB0b3AgbGVmdCBjb3JuZXIgZG8gd29yayAoY2hhbmdlIHByb2plY3RzIHRvIHdpZGUgb3IgbmFycm93KVxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYnJvYWRlblByb2plY3RDb250YWluZXIoKSk7XG59XG5cbmZ1bmN0aW9uIGJyb2FkZW5Qcm9qZWN0Q29udGFpbmVyKCkge1xuICAvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2UgYW5kIHRvZ2dsZSBhIGNsYXNzICdicm9hZCcgb24gZWFjaFxuICBmb3IgKGxldCBlbGVtZW50IG9mIGdldEVsZW1lbnRzVG9Ccm9hZCgpKSB7XG4gICAgdG9nZ2xlQnJvYWQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWluaW1pemVQcm9qZWN0Q29udGFpbmVyKCkge1xuICAvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2UgYW5kIHRvZ2dsZSBhIGNsYXNzICdicm9hZCcgb24gZWFjaFxuICBmb3IgKGxldCBlbGVtZW50IG9mIGdldEVsZW1lbnRzVG9Ccm9hZCgpKSB7XG4gICAgYWRkQnJvYWQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQnJvYWQoZWxlbWVudCkge1xuICAvLyBSZW1vdmUgY2xhc3MgJ2Jyb2FkJyBmcm9tIGFuIGVsZW1lbnRcbiAgLy8gdGhpcyBjbGFzcyBjaGFuZ2VzIGxlZnQtc2lkZSBwYWdlIG1lbnUgbWFraW5nIGl0IHNtYWxsZXJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnJvYWRcIik7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJyb2FkKGVsZW1lbnQpIHtcbiAgLy8gQWRkL3JlbW92ZSBjbGFzcyAnYnJvYWQnIHRvIGFuIGVsZW1lbnRcbiAgLy8gdGhpcyBjbGFzcyBjaGFuZ2VzIGxlZnQtc2lkZSBwYWdlIG1lbnUgbWFraW5nIGl0IHNtYWxsZXJcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYnJvYWRcIik7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRzVG9Ccm9hZCgpIHtcbiAgLy8gVGFrZSBzb21lIERPTSBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcbiAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdFwiKTtcbiAgbGV0IHByb2plY3RJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtaWNvblwiKTtcbiAgbGV0IHByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICBcInByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyIFwiXG4gICk7XG4gIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKTtcbiAgbGV0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1mb3JtXCIpO1xuICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3RcIik7XG4gIGxldCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtcHJvamVjdFwiKTtcblxuICAvLyBQdXQgdGhlbSBpbiB0aGUgYXJyYXkgYW5kIHJldHVybiBpdFxuICBsZXQgZWxlbWVudHMgPSBbXG4gICAgY29udGVudCxcbiAgICBwcm9qZWN0TGlzdCxcbiAgICAuLi5wcm9qZWN0LFxuICAgIC4uLnByb2plY3RJY29uLFxuICAgIC4uLnByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyLFxuICAgIC4uLmRlbGV0ZVByb2plY3RCdG4sXG4gICAgbmV3UHJvamVjdEZvcm0sXG4gICAgbmV3UHJvamVjdCxcbiAgICBzdWJtaXRQcm9qZWN0XG4gIF07XG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IHsgc2hvd1Byb2plY3RzLCBtaW5pbWl6ZVByb2plY3RDb250YWluZXIgfTtcbiIsImltcG9ydCB7IGdldENvbXB1dGVkRGlzcGxheSB9IGZyb20gXCIuL2RldGFpbHMuanNcIjtcbmltcG9ydCB7IG1pbmltaXplUHJvamVjdENvbnRhaW5lciB9IGZyb20gXCIuL21lbnUuanNcIjtcblxuZnVuY3Rpb24gcmVzcG9uc2l2ZSgpIHtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICAvLyBSZXNpemluZyB3aW5kb3cgbWFrZXMgbWlkZGxlIGNvbHVtbiBmaXRcbiAgd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDI0cHgpXCIpLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAvLyBJZiBzY3JlZW4gaXMgbmFycm93ZXIgdGhhbiAxMDI0cHggYW5kIGRldGFpbHMgYXJlIG9wZW4gKHJpZ2h0IHNpZGUgb2YgdGhlIHBhZ2UpXG4gICAgLy8gdGhhbiBtaW5pbWl6ZSBsZWZ0IHNpZGUgYW5kIG1ha2UgXCJtYWluXCIgZml0IHRoZSB3aG9sZSBzZWNvbmQgY29sdW1uXG4gICAgaWYgKHNjcmVlbkxlc3NUaGVuMTAyNCgpICYmIGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gICAgICBtaW5pbWl6ZVByb2plY3RDb250YWluZXIoKTtcbiAgICAgIC8vIERvZXNuJ3QgbWF0dGVyIHRoZSBzaXplIG9mIHRoZSBzY3JlZW4sXG4gICAgICAvLyBpZiBkZXRhaWxzIGFyZSBjbG9zZWQgJ21haW4nIGZpdCB0aGUgd2hvbGUgc2Vjb25kIGNvbHVtblxuICAgIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWREaXNwbGF5KGRldGFpbHMpID09PSBcIm5vbmVcIikge1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzRcIjtcbiAgICAgIC8vIEVsc2UgZm9yIGUuZy4gd2hlbiBzY3JlZW4gYXJlIHdpZGVyIHRoZW4gMTAyNHB4IGFuZFxuICAgICAgLy8gZGV0YWlscyBhcmUgb3BlbiwgdGhlbiBtYWluIGlzIHRoZSBjb2x1bW4gaW4gdGhlIG1pZGRsZVxuICAgIH0gZWxzZSB7XG4gICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvM1wiO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNjcmVlbkxlc3NUaGVuMTAyNCgpIHtcbiAgLy8gQ2hlY2sgaWYgc2NyZWVuIGlzIGxlc3MgdGhlbiAxMDI0cHggd2lkZVxuICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDI0cHgpXCIpLm1hdGNoZXM7XG59XG5cbi8vIFdoZW4gcmVzaXppbmcgd2luZG93IG1pZGRsZSBjb2x1bW4gcmVzaXplIGl0c2VsZiB0byBiZSByZXNwb25zaXZlXG5leHBvcnQgeyByZXNwb25zaXZlLCBzY3JlZW5MZXNzVGhlbjEwMjQgfTtcbiIsImltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5cbmZ1bmN0aW9uIGFkZFRhc2tUbyhhcnIpIHtcbiAgY29uc3Qgc3VibWl0VG9kb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0LXRvZG9cIik7XG5cbiAgc3VibWl0VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gUHJldmVudCBkZWZhdWx0IHN1Ym1pdCBiZWhhdmlvclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gR2V0IHRhc2sgbmFtZSBmcm9tIFVzZXIgYW5kIGFkZCBpdCB0byB0YXNrcyBhcnJheVxuICAgIHB1c2hUYXNrVG8oYXJyKTtcbiAgICBjb25zb2xlLnRhYmxlKGFycik7XG4gICAgLy8gUmVuZGVyIGVhY2ggYXJyYXkgdG8gdGhlIHBhZ2VcbiAgICByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKTtcblxuICAgIHJldHVybiBhcnI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwdXNoVGFza1RvKGFycikge1xuICAvLyBQdXNoIHRhc2sgdG8gYXJyYXlcbiAgYXJyLnB1c2goZ2V0VGFzaygpKTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gZ2V0VGFzaygpIHtcbiAgLy8gR2V0IHVzZXIgaW5wdXQgdmFsdWUsIHNhdmUgaXRcbiAgbGV0IHRhc2sgPSB0YXNrRmFjdG9yeSh7IHRpdGxlOiBnZXRJbnB1dFZhbHVlKCkgfSk7XG4gIC8vIGFuZCBjbGVhciBpbnB1dFxuICBjbGVhclRhc2tJbnB1dCgpO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgLy8gR2V0IHVzZXIgaW5wdXQgdmFsdWUgYXMgTmV3IFRhc2sgOiBTVFJJTkdcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG9cIikudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0lucHV0KCkge1xuICAvLyBDbGVhciB1c2VyIGlucHV0XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG9cIikudmFsdWUgPSBcIlwiO1xufVxuXG5leHBvcnQgeyBnZXRUYXNrLCBhZGRUYXNrVG8gfTtcbiIsImltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuXG5mdW5jdGlvbiBnZXQoKSB7XG4gIC8vIFRoaXMgZnVuY3RpbiBzaW1wbHkgY3JlYXRlIGFuIGFycmF5IHdpdGggZGVmYXVsdCB0YXNrcyBpbiBpdFxuICBsZXQgYWxsVGFza3MgPSBbXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTGVhcm4gc3R1ZmZcIixcbiAgICAgIGZyb206IFwiUHJvamVjdCAyXCIsXG4gICAgICBkYXRlOiBcIjE1LjAzLjIwMjBcIixcbiAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgbm90ZTogdHJ1ZSxcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJMZWFybiBlbmdsaXNoXCIsXG4gICAgICBkYXRlOiBcIjEwLjAxLjIwMjBcIixcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJMZWFybiBzdHVmZlwiLFxuICAgICAgZnJvbTogXCJQcm9qZWN0IDJcIixcbiAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgIG5vdGU6IHRydWUsXG4gICAgICBkb25lOiB0cnVlLFxuICAgIH0pLFxuICBdO1xuXG4gIHJldHVybiBhbGxUYXNrcztcbn1cblxuZXhwb3J0IHsgZ2V0IH07XG4iLCJjb25zdCB0YXNrRmFjdG9yeSA9IGZ1bmN0aW9uICh7XG4gIHRpdGxlID0gXCJcIixcbiAgZnJvbSA9IFwiXCIsXG4gIGRhdGUgPSBcIlwiLFxuICBwcmlvcml0eSA9IFwibG93XCIsXG4gIG5vdGUgPSBmYWxzZSxcbiAgZG9uZSA9IGZhbHNlLFxufSkge1xuICByZXR1cm4geyB0aXRsZSwgZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUsIGRvbmUgfTtcbn07XG5cbmV4cG9ydCB7IHRhc2tGYWN0b3J5IH07XG4iLCJpbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4uLy4uL0lDT05TL2NhbGVuZGFyLnN2Z1wiO1xuaW1wb3J0IE5vdGUgZnJvbSBcIi4uLy4uL0lDT05TL2VkaXQuc3ZnXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckFsbFRhc2tzRnJvbShhcnIpIHtcbiAgZm9yIChsZXQgW2luZGV4LCBpdGVtXSBvZiBhcnIuZW50cmllcygpKSB7XG4gICAgcmVuZGVyVGFzayhpbmRleCwgaXRlbSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFzayhpLCB0YXNrKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3NcIikuYXBwZW5kKGNyZWF0ZVRhc2soaSwgdGFzaykpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGksIHRhc2spIHtcbiAgY29uc29sZS5sb2codGFzayk7XG4gIC8vIGNyZWF0ZSBsaXN0IGVsZW1lbnQgd2l0aCBhIGNsYXNzICd0b2RvJ1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kb1wiKTtcbiAgLy8gQXBwZW5kIGxhYmVsLCBpbnB1dCwgZGl2IGFuZCBidXR0b24gdG8gaXRcbiAgbGkuYXBwZW5kKGNyZWF0ZUxhYmVsKGkpKTtcbiAgbGkuYXBwZW5kKGNyZWF0ZUlucHV0KGkpKTtcbiAgbGkuYXBwZW5kKFxuICAgIGNyZWF0ZUNvbnRlbnQodGFzay50aXRsZSwgdGFzay5mcm9tLCB0YXNrLmRhdGUsIHRhc2sucHJpb3JpdHksIHRhc2subm90ZSlcbiAgKTtcbiAgbGkuYXBwZW5kKGNyZWF0ZURlbGV0ZUJ0bihpKSk7XG5cbiAgcmV0dXJuIGxpO1xufVxuXG4vLyBMQUJFTFxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChpKSB7XG4gIC8vIHJldHVybnMgbGFiZWwgZm9yIFwidG9kb2NoZWNrYm94XCIgKyBpXG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuaHRtbEZvciA9IGB0b2RvY2hlY2tib3gke2l9YDtcbiAgbGFiZWwuYXBwZW5kKGNyZWF0ZURvbmVJY29uKCkpO1xuICByZXR1cm4gbGFiZWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURvbmVJY29uKCkge1xuICAvLyBjcmVhdGUgaWNvbiBjb250YWluZXJcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taWNvbi1jb250YWluZXJcIik7XG4gIC8vIGNyZWF0ZSBpY29uXG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlvbi1pY29uXCIpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjaGVja21hcmstb3V0bGluZVwiKTtcbiAgLy8gYXBwZW5kIGljb24gdG8gY29udGFpbmVyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy8gSU5QVVRcblxuZnVuY3Rpb24gY3JlYXRlSW5wdXQoaSkge1xuICAvLyBDcmVhdGUgaW5wdXQgY2hlY2tib3ggZWxlbWVudCBhZnRlciB0aGUgbGFiZWxcbiAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAvLyBBZGQgYXR0cmlidXRlc1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1jaGVja2JveFwiKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRvZG9jaGVja2JveCR7aX1gKTtcbiAgcmV0dXJuIGNoZWNrYm94O1xufVxuXG4vLyBDT05URU5UID0gdGFzayB0aXRsZSBhbmQgZGV0YWlsc1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KHRpdGxlLCBmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLXRleHRcIik7XG4gIC8vIEFwcGVuZCB0aXRsZSBhbmQgZGV0YWlscyB0byBjb250ZW50XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUodGl0bGUpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVEZXRhaWxzKGZyb20sIGRhdGUsIHByaW9yaXR5LCBub3RlKSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHN0cikge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gc3RyO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURldGFpbHMoZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGV0YWlsc1wiKTtcbiAgaWYgKGZyb20pIGRldGFpbHMuYXBwZW5kQ2hpbGQoY3JlYXRlRnJvbShmcm9tKSk7XG4gIGlmIChkYXRlKSBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZUR1ZShkYXRlKSk7XG4gIGlmIChwcmlvcml0eSAhPT0gXCJsb3dcIikgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVQcmlvcml0eShwcmlvcml0eSkpO1xuICBpZiAobm90ZSkgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVOb3RlKCkpO1xuICByZXR1cm4gZGV0YWlscztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJvbShmcm9tKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmcm9tLXByb2plY3RcIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBgRnJvbSAke2Zyb219YDtcbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUR1ZShkYXRlKSB7XG4gIGxldCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZHVlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHVlLWRhdGVcIik7XG4gIGR1ZS5hcHBlbmRDaGlsZChjcmVhdGVDYWxlbmRhckltYWdlKCkpO1xuICBkdWUuYXBwZW5kQ2hpbGQoY3JlYXRlU3BhbkZvckRhdGUoZGF0ZSkpO1xuICByZXR1cm4gZHVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYWxlbmRhckltYWdlKCkge1xuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBDYWxlbmRhcik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJDYWxlbmRhclwiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTJweFwiKTtcblxuICByZXR1cm4gaW1nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuRm9yRGF0ZShkYXRlKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBgRHVlICR7ZGF0ZX1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHkobGV2ZWwpIHtcbiAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGAke2xldmVsfS1wcmlvcml0eWApO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChjcmVhdGVTcGFuRm9yUHJpb3JpdHkobGV2ZWwpKTtcbiAgcmV0dXJuIHByaW9yaXR5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuRm9yUHJpb3JpdHkobGV2ZWwpIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IGAke2NhcGl0YWxpemVGaXJzdExldHRlcihsZXZlbCl9IHByaW9yaXR5YDtcbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm90ZSgpIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5vdGUtcHJlc2VuY2VcIik7XG5cbiAgLy8gY3JlYXRlIGFuZCBBcHBlbmQgTm90ZSBJY29uXG4gIGxldCBub3RlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIG5vdGVJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBOb3RlKTtcbiAgbm90ZUljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGVuXCIpO1xuICBub3RlSWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEycHhcIik7XG5cbiAgLy8gY3JlYXRlIGFuZCBhcHBlbmQgdGV4dFxuICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gXCJOb3RlXCI7XG5cbiAgc3Bhbi5hcHBlbmRDaGlsZChub3RlSWNvbik7XG4gIHNwYW4uYXBwZW5kQ2hpbGQodGV4dCk7XG4gIHJldHVybiBzcGFuO1xufVxuXG4vLyBERUxFVEUgQlVUVE9OXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVCdG4oaSkge1xuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGV0ZS10b2RvLWJ0blwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGBkZWxldGUtYnRuJHtpfWApO1xuXG4gIC8vIGNyZWF0ZSBhbiBpY29uIGFuZCBhcHBlbmQgaXQgdG8gYnV0dG9uXG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlvbi1pY29uXCIpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjbG9zZS1jaXJjbGVcIik7XG5cbiAgYnRuLmFwcGVuZENoaWxkKGljb24pO1xuXG4gIHJldHVybiBidG47XG59XG5cbmV4cG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9O1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=