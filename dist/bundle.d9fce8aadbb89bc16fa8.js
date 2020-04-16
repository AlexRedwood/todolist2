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

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: property \"color\" must be followed by a ':'\n        on line 609 of /home/alexandr/Projects/odin_on_rails/new_beg/src/SCSS/style.scss\n>>         color\n\n   --------^\n");

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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







 // Style

_style_menu_js__WEBPACK_IMPORTED_MODULE_1__["showProjects"]();
_style_resize_js__WEBPACK_IMPORTED_MODULE_2__["responsive"]();
_style_priority_js__WEBPACK_IMPORTED_MODULE_3__["activeSecondStar"](); // App Logic
// define tasks array which is todolist

var allTasks = _toConsumableArray(_tasks_defaults_js__WEBPACK_IMPORTED_MODULE_6__["get"]()); // Initial render of the default tasks form tasks array


Object(_tasks_render_js__WEBPACK_IMPORTED_MODULE_5__["renderAllTasksFrom"])(allTasks); // Button to add task to a defined array
// Also rerender the array after adding a task

_tasks_add_js__WEBPACK_IMPORTED_MODULE_4__["addTaskTo"](allTasks);

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
/*! exports provided: activeSecondStar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activeSecondStar", function() { return activeSecondStar; });
function activeSecondStar() {
  var star = document.getElementById("star-2");
  star.addEventListener("click", function (e) {
    var icon = e.currentTarget.children[0];
    toggleSecondStar(icon);
  });
}

function toggleSecondStar(star) {
  starIsOutlined(star) ? fillStar(star) : outlineStar(star);
}

function fillStar(star, color) {
  star.setAttribute("name", "star");
}

function outlineStar(star) {
  star.setAttribute("name", "star-outline");
}

function starIsOutlined(star) {
  console.log(star.getAttribute("name") === "star-outline");
  return star.getAttribute("name") === "star-outline";
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
    date: "15.03.2020",
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
/*! exports provided: putTaskInfoToInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putTaskInfoToInput", function() { return putTaskInfoToInput; });
/* harmony import */ var _detailsToggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailsToggle.js */ "./src/JS/tasks/detailsToggle.js");


function putTaskInfoToInput(task) {
  // Function to put info from tasks in inputs when details are shown
  setNameInput(task.title);
  setDateInput(task.date);
  setNoteInput(task.note);
} // Get input


function getNameInput() {
  var nameInput = document.getElementById("todo-name-changer").value;
  console.log(nameInput);
  return nameInput;
}

function getDateInput() {
  var dateInput = document.getElementById("date").value;
  console.log(dateInput);
  return dateInput;
}

function getNoteInput() {
  var noteInput = document.getElementById("note-changer").value;
  console.log(noteInput);
  return noteInput;
} // ---------------------------------------------------
// Set input


function setNameInput(name) {
  document.getElementById("todo-name-changer").value = name;
  console.log("New name for input is set: ".concat(name));
}

function setDateInput(date) {
  document.getElementById("date").value = formatDate(date);
  console.log("New date for input is set: ".concat(date));
  formatDate(date);
}

function setPiority(level) {
  console.log(level);
}

function setNoteInput(note) {
  document.getElementById("note-changer").value = note;
  console.log("New Note for input is set: ".concat(note));
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

  _detailsToggle_js__WEBPACK_IMPORTED_MODULE_3__["tasksToggleDetails"](arr);
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
  checkbox.setAttribute("id", "todocheckbox-".concat(i));
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
    due.appendChild(createCalendarImage());
    due.appendChild(createSpanForDate(date));
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9JQ09OUy9jYWxlbmRhci5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL0lDT05TL2VkaXQuc3ZnIiwid2VicGFjazovLy8uL3NyYy9KUy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvc3R5bGUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvc3R5bGUvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZGVsZXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZXRhaWxzSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2RldGFpbHNUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU0NTUy9zdHlsZS5zY3NzIl0sIm5hbWVzIjpbIk1lbnVCdG4iLCJSZXNpemUiLCJQcmlvcml0eSIsImFsbFRhc2tzIiwiRGVmYXVsdHMiLCJyZW5kZXJBbGxUYXNrc0Zyb20iLCJBZGRUYXNrQnRuIiwic2hvd1Byb2plY3RzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJicm9hZGVuUHJvamVjdENvbnRhaW5lciIsImdldEVsZW1lbnRzVG9Ccm9hZCIsImVsZW1lbnQiLCJ0b2dnbGVCcm9hZCIsIm1pbmltaXplUHJvamVjdENvbnRhaW5lciIsImFkZEJyb2FkIiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlIiwiY29udGVudCIsInByb2plY3RMaXN0IiwicHJvamVjdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwcm9qZWN0SWNvbiIsInByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyIiwiZGVsZXRlUHJvamVjdEJ0biIsIm5ld1Byb2plY3RGb3JtIiwibmV3UHJvamVjdCIsInN1Ym1pdFByb2plY3QiLCJlbGVtZW50cyIsImFjdGl2ZVNlY29uZFN0YXIiLCJzdGFyIiwiZSIsImljb24iLCJjdXJyZW50VGFyZ2V0IiwiY2hpbGRyZW4iLCJ0b2dnbGVTZWNvbmRTdGFyIiwic3RhcklzT3V0bGluZWQiLCJmaWxsU3RhciIsIm91dGxpbmVTdGFyIiwiY29sb3IiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXR0cmlidXRlIiwicmVzcG9uc2l2ZSIsIm1haW4iLCJkZXRhaWxzIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwic2NyZWVuTGVzc1RoZW4xMDI0IiwiZ2V0Q29tcHV0ZWREaXNwbGF5Iiwic3R5bGUiLCJncmlkQ29sdW1uIiwibWF0Y2hlcyIsImFkZFRhc2tUbyIsImFyciIsInN1Ym1pdFRvZG9CdG4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHVzaFRhc2tUbyIsInRhYmxlIiwicHVzaCIsImdldFRhc2siLCJ0YXNrIiwidGFza0ZhY3RvcnkiLCJ0aXRsZSIsImdldElucHV0VmFsdWUiLCJjbGVhclRhc2tJbnB1dCIsInZhbHVlIiwiZ2V0IiwiZnJvbSIsImRhdGUiLCJwcmlvcml0eSIsIm5vdGUiLCJkb25lIiwiZGVsZXRlVGFza3NGcm9tIiwiYnV0dG9ucyIsImJ1dHRvbiIsImRlbGV0ZUJ0blJlbW92ZVRhc2siLCJidG5JZCIsImlkIiwibnVtYmVyIiwic3BsaXQiLCJjbG9zZURldGFpbHNPZkRlbGV0ZWRUYXNrIiwic3BsaWNlIiwic3RvcFByb3BhZ2F0aW9uIiwiRGV0YWlsc1RvZ2dsZSIsInB1dFRhc2tJbmZvVG9JbnB1dCIsInNldE5hbWVJbnB1dCIsInNldERhdGVJbnB1dCIsInNldE5vdGVJbnB1dCIsImdldE5hbWVJbnB1dCIsIm5hbWVJbnB1dCIsImdldERhdGVJbnB1dCIsImRhdGVJbnB1dCIsImdldE5vdGVJbnB1dCIsIm5vdGVJbnB1dCIsIm5hbWUiLCJmb3JtYXREYXRlIiwic2V0UGlvcml0eSIsImxldmVsIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0dGVkIiwidGFza3NUb2dnbGVEZXRhaWxzIiwidG9kb0xpc3RTaG93RGV0YWlscyIsIkFycm93SGlkZURldGFpbHMiLCJ0YXNrcyIsInRhc2tJZCIsInRvZ2dsZURldGFpbHMiLCJEZXRhaWxzSW5wdXQiLCJhcnJvd0J0biIsImhpZGVEZXRhaWxzIiwiaWROdW1iZXIiLCJnZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIiLCJkZXRhaWxzQXJlU2hvd24iLCJzaG93RGV0YWlscyIsImRldGFpbHNDb250YWluZXJJZCIsInNldERldGFpbHNJZFRvIiwibWFrZURldGFpbHNEZWZhdWx0IiwiaGlkZSIsInNob3dBc0ZsZXgiLCJjb21wdXRlZERpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImRpc3BsYXkiLCJjbGVhckNvbnRlbnRPZiIsImVudHJpZXMiLCJpbmRleCIsIml0ZW0iLCJyZW5kZXJUYXNrIiwiRGVsZXRlVGFza0J0bnMiLCJjb250ZW50Q29udGFpbmVyIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiaSIsImFwcGVuZCIsImNyZWF0ZVRhc2siLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVMYWJlbCIsImNyZWF0ZUlucHV0IiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZURlbGV0ZUJ0biIsImxhYmVsIiwiaHRtbEZvciIsImNyZWF0ZURvbmVJY29uIiwiY29udGFpbmVyIiwiYXBwZW5kQ2hpbGQiLCJjaGVja2JveCIsImNyZWF0ZVRpdGxlIiwiY3JlYXRlRGV0YWlscyIsInN0ciIsInRleHRDb250ZW50IiwiY3JlYXRlRnJvbSIsImNyZWF0ZUR1ZSIsImNyZWF0ZVByaW9yaXR5IiwiY3JlYXRlTm90ZSIsInNwYW4iLCJkdWUiLCJjcmVhdGVDYWxlbmRhckltYWdlIiwiY3JlYXRlU3BhbkZvckRhdGUiLCJpbWciLCJDYWxlbmRhciIsImNyZWF0ZVNwYW5Gb3JQcmlvcml0eSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJub3RlSWNvbiIsIk5vdGUiLCJ0ZXh0IiwiYnRuIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FB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bnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvSlMvaW5kZXguanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvY2FsZW5kYXIuNzUwNGM4ODlmYzJkOWQ0ZjU0MDBiYTY5OGIyNTQzNzcuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2VkaXQuMjkyN2Y4ZGU0MjY4YmFlOGYxMWM0ZGZlM2FkYzcyYjUuc3ZnXCI7IiwiaW1wb3J0IFwiLi4vU0NTUy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgKiBhcyBNZW51QnRuIGZyb20gXCIuL3N0eWxlL21lbnUuanNcIjtcbmltcG9ydCAqIGFzIFJlc2l6ZSBmcm9tIFwiLi9zdHlsZS9yZXNpemUuanNcIjtcbmltcG9ydCAqIGFzIFByaW9yaXR5IGZyb20gXCIuL3N0eWxlL3ByaW9yaXR5LmpzXCI7XG5pbXBvcnQgKiBhcyBBZGRUYXNrQnRuIGZyb20gXCIuL3Rhc2tzL2FkZC5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tIH0gZnJvbSBcIi4vdGFza3MvcmVuZGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBEZWZhdWx0cyBmcm9tIFwiLi90YXNrcy9kZWZhdWx0cy5qc1wiO1xuXG4vLyBTdHlsZVxuTWVudUJ0bi5zaG93UHJvamVjdHMoKTtcblJlc2l6ZS5yZXNwb25zaXZlKCk7XG5Qcmlvcml0eS5hY3RpdmVTZWNvbmRTdGFyKCk7XG4vLyBBcHAgTG9naWNcblxuLy8gZGVmaW5lIHRhc2tzIGFycmF5IHdoaWNoIGlzIHRvZG9saXN0XG5sZXQgYWxsVGFza3MgPSBbLi4uRGVmYXVsdHMuZ2V0KCldO1xuXG4vLyBJbml0aWFsIHJlbmRlciBvZiB0aGUgZGVmYXVsdCB0YXNrcyBmb3JtIHRhc2tzIGFycmF5XG5yZW5kZXJBbGxUYXNrc0Zyb20oYWxsVGFza3MpO1xuXG4vLyBCdXR0b24gdG8gYWRkIHRhc2sgdG8gYSBkZWZpbmVkIGFycmF5XG4vLyBBbHNvIHJlcmVuZGVyIHRoZSBhcnJheSBhZnRlciBhZGRpbmcgYSB0YXNrXG5BZGRUYXNrQnRuLmFkZFRhc2tUbyhhbGxUYXNrcyk7XG4iLCJmdW5jdGlvbiBzaG93UHJvamVjdHMoKSB7XG4gIC8vIE1ha2UgbWVudSBidXR0b24gaW4gdGhlIHRvcCBsZWZ0IGNvcm5lciBkbyB3b3JrIChjaGFuZ2UgcHJvamVjdHMgdG8gd2lkZSBvciBuYXJyb3cpXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwibWVudS1pY29uXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBicm9hZGVuUHJvamVjdENvbnRhaW5lcigpKTtcbn1cblxuZnVuY3Rpb24gYnJvYWRlblByb2plY3RDb250YWluZXIoKSB7XG4gIC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgZnJvbSB0aGUgcGFnZSBhbmQgdG9nZ2xlIGEgY2xhc3MgJ2Jyb2FkJyBvbiBlYWNoXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgZ2V0RWxlbWVudHNUb0Jyb2FkKCkpIHtcbiAgICB0b2dnbGVCcm9hZChlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtaW5pbWl6ZVByb2plY3RDb250YWluZXIoKSB7XG4gIC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgZnJvbSB0aGUgcGFnZSBhbmQgdG9nZ2xlIGEgY2xhc3MgJ2Jyb2FkJyBvbiBlYWNoXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgZ2V0RWxlbWVudHNUb0Jyb2FkKCkpIHtcbiAgICBhZGRCcm9hZChlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRCcm9hZChlbGVtZW50KSB7XG4gIC8vIFJlbW92ZSBjbGFzcyAnYnJvYWQnIGZyb20gYW4gZWxlbWVudFxuICAvLyB0aGlzIGNsYXNzIGNoYW5nZXMgbGVmdC1zaWRlIHBhZ2UgbWVudSBtYWtpbmcgaXQgc21hbGxlclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJicm9hZFwiKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQnJvYWQoZWxlbWVudCkge1xuICAvLyBBZGQvcmVtb3ZlIGNsYXNzICdicm9hZCcgdG8gYW4gZWxlbWVudFxuICAvLyB0aGlzIGNsYXNzIGNoYW5nZXMgbGVmdC1zaWRlIHBhZ2UgbWVudSBtYWtpbmcgaXQgc21hbGxlclxuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJicm9hZFwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudHNUb0Jyb2FkKCkge1xuICAvLyBUYWtlIHNvbWUgRE9NIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2VcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0XCIpO1xuICBsZXQgcHJvamVjdEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1pY29uXCIpO1xuICBsZXQgcHJvamVjdFRpdGxlQ291bnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgIFwicHJvamVjdC10aXRsZS1jb3VudC1jb250YWluZXIgXCJcbiAgKTtcbiAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xuICBsZXQgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWZvcm1cIik7XG4gIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdFwiKTtcbiAgbGV0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1wcm9qZWN0XCIpO1xuXG4gIC8vIFB1dCB0aGVtIGluIHRoZSBhcnJheSBhbmQgcmV0dXJuIGl0XG4gIGxldCBlbGVtZW50cyA9IFtcbiAgICBjb250ZW50LFxuICAgIHByb2plY3RMaXN0LFxuICAgIC4uLnByb2plY3QsXG4gICAgLi4ucHJvamVjdEljb24sXG4gICAgLi4ucHJvamVjdFRpdGxlQ291bnRDb250YWluZXIsXG4gICAgLi4uZGVsZXRlUHJvamVjdEJ0bixcbiAgICBuZXdQcm9qZWN0Rm9ybSxcbiAgICBuZXdQcm9qZWN0LFxuICAgIHN1Ym1pdFByb2plY3QsXG4gIF07XG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IHsgc2hvd1Byb2plY3RzLCBtaW5pbWl6ZVByb2plY3RDb250YWluZXIgfTtcbiIsImZ1bmN0aW9uIGFjdGl2ZVNlY29uZFN0YXIoKSB7XG4gIGxldCBzdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTJcIik7XG4gIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgbGV0IGljb24gPSBlLmN1cnJlbnRUYXJnZXQuY2hpbGRyZW5bMF07XG4gICAgdG9nZ2xlU2Vjb25kU3RhcihpY29uKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVNlY29uZFN0YXIoc3Rhcikge1xuICBzdGFySXNPdXRsaW5lZChzdGFyKSA/IGZpbGxTdGFyKHN0YXIpIDogb3V0bGluZVN0YXIoc3Rhcik7XG59XG5cbmZ1bmN0aW9uIGZpbGxTdGFyKHN0YXIsIGNvbG9yKSB7XG4gIHN0YXIuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN0YXJcIik7XG59XG5cbmZ1bmN0aW9uIG91dGxpbmVTdGFyKHN0YXIpIHtcbiAgc3Rhci5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic3Rhci1vdXRsaW5lXCIpO1xufVxuXG5mdW5jdGlvbiBzdGFySXNPdXRsaW5lZChzdGFyKSB7XG4gIGNvbnNvbGUubG9nKHN0YXIuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSA9PT0gXCJzdGFyLW91dGxpbmVcIik7XG4gIHJldHVybiBzdGFyLmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT09IFwic3Rhci1vdXRsaW5lXCI7XG59XG5cbmV4cG9ydCB7IGFjdGl2ZVNlY29uZFN0YXIgfTtcbiIsImltcG9ydCB7IGdldENvbXB1dGVkRGlzcGxheSB9IGZyb20gXCIuLi90YXNrcy9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5pbXBvcnQgeyBtaW5pbWl6ZVByb2plY3RDb250YWluZXIgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbmZ1bmN0aW9uIHJlc3BvbnNpdmUoKSB7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgLy8gUmVzaXppbmcgd2luZG93IG1ha2VzIG1pZGRsZSBjb2x1bW4gZml0XG4gIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTAyNHB4KVwiKS5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgLy8gSWYgc2NyZWVuIGlzIG5hcnJvd2VyIHRoYW4gMTAyNHB4IGFuZCBkZXRhaWxzIGFyZSBvcGVuIChyaWdodCBzaWRlIG9mIHRoZSBwYWdlKVxuICAgIC8vIHRoYW4gbWluaW1pemUgbGVmdCBzaWRlIGFuZCBtYWtlIFwibWFpblwiIGZpdCB0aGUgd2hvbGUgc2Vjb25kIGNvbHVtblxuICAgIGlmIChzY3JlZW5MZXNzVGhlbjEwMjQoKSAmJiBnZXRDb21wdXRlZERpc3BsYXkoZGV0YWlscykgPT09IFwiZmxleFwiKSB7XG4gICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvNFwiO1xuICAgICAgbWluaW1pemVQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgICAvLyBEb2Vzbid0IG1hdHRlciB0aGUgc2l6ZSBvZiB0aGUgc2NyZWVuLFxuICAgICAgLy8gaWYgZGV0YWlscyBhcmUgY2xvc2VkICdtYWluJyBmaXQgdGhlIHdob2xlIHNlY29uZCBjb2x1bW5cbiAgICB9IGVsc2UgaWYgKGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSA9PT0gXCJub25lXCIpIHtcbiAgICAgIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gICAgICAvLyBFbHNlIGZvciBlLmcuIHdoZW4gc2NyZWVuIGFyZSB3aWRlciB0aGVuIDEwMjRweCBhbmRcbiAgICAgIC8vIGRldGFpbHMgYXJlIG9wZW4sIHRoZW4gbWFpbiBpcyB0aGUgY29sdW1uIGluIHRoZSBtaWRkbGVcbiAgICB9IGVsc2Uge1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzNcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzY3JlZW5MZXNzVGhlbjEwMjQoKSB7XG4gIC8vIENoZWNrIGlmIHNjcmVlbiBpcyBsZXNzIHRoZW4gMTAyNHB4IHdpZGVcbiAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTAyNHB4KVwiKS5tYXRjaGVzO1xufVxuXG4vLyBXaGVuIHJlc2l6aW5nIHdpbmRvdyBtaWRkbGUgY29sdW1uIHJlc2l6ZSBpdHNlbGYgdG8gYmUgcmVzcG9uc2l2ZVxuZXhwb3J0IHsgcmVzcG9uc2l2ZSwgc2NyZWVuTGVzc1RoZW4xMDI0IH07XG4iLCJpbXBvcnQgeyB0YXNrRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcbmltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuXG5mdW5jdGlvbiBhZGRUYXNrVG8oYXJyKSB7XG4gIGNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC10b2RvXCIpO1xuXG4gIHN1Ym1pdFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIFByZXZlbnQgZGVmYXVsdCBzdWJtaXQgYmVoYXZpb3JcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIEdldCB0YXNrIG5hbWUgZnJvbSBVc2VyIGFuZCBhZGQgaXQgdG8gdGFza3MgYXJyYXlcbiAgICBwdXNoVGFza1RvKGFycik7XG4gICAgY29uc29sZS50YWJsZShhcnIpO1xuICAgIC8vIFJlcmVuZGVyIGFycmF5XG4gICAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG5cbiAgICByZXR1cm4gYXJyO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHVzaFRhc2tUbyhhcnIpIHtcbiAgLy8gUHVzaCB0YXNrIHRvIGFycmF5XG4gIGFyci5wdXNoKGdldFRhc2soKSk7XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2soKSB7XG4gIC8vIEdldCB1c2VyIGlucHV0IHZhbHVlLCBzYXZlIGl0XG4gIGxldCB0YXNrID0gdGFza0ZhY3RvcnkoeyB0aXRsZTogZ2V0SW5wdXRWYWx1ZSgpIH0pO1xuICAvLyBhbmQgY2xlYXIgaW5wdXRcbiAgY2xlYXJUYXNrSW5wdXQoKTtcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoKSB7XG4gIC8vIEdldCB1c2VyIGlucHV0IHZhbHVlIGFzIE5ldyBUYXNrIDogU1RSSU5HXG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvXCIpLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tJbnB1dCgpIHtcbiAgLy8gQ2xlYXIgdXNlciBpbnB1dFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvXCIpLnZhbHVlID0gXCJcIjtcbn1cblxuZXhwb3J0IHsgZ2V0VGFzaywgYWRkVGFza1RvIH07XG4iLCJpbXBvcnQgeyB0YXNrRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcblxuZnVuY3Rpb24gZ2V0KCkge1xuICAvLyBUaGlzIGZ1bmN0aW4gc2ltcGx5IGNyZWF0ZSBhbiBhcnJheSB3aXRoIGRlZmF1bHQgdGFza3MgaW4gaXRcbiAgbGV0IGFsbFRhc2tzID0gW1xuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIHN0dWZmXCIsXG4gICAgICBmcm9tOiBcIlByb2plY3QgMlwiLFxuICAgICAgZGF0ZTogXCIxNS4wMy4yMDIwXCIsXG4gICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgIG5vdGU6IFwic29tZXRoaW5nXCIsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTGVhcm4gZW5nbGlzaFwiLFxuICAgICAgZGF0ZTogXCIxMC4wMS4yMDIwXCIsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTGVhcm4gc3R1ZmZcIixcbiAgICAgIGZyb206IFwiUHJvamVjdCAyXCIsXG4gICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICBub3RlOiBcInNvbWV0aGluZ1wiLFxuICAgICAgZG9uZTogdHJ1ZSxcbiAgICB9KSxcbiAgXTtcblxuICByZXR1cm4gYWxsVGFza3M7XG59XG5cbmV4cG9ydCB7IGdldCB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcblxuZnVuY3Rpb24gZGVsZXRlVGFza3NGcm9tKGFycikge1xuICAvLyBUYWtlIHRoZSBjb2xsY2V0aW9uIG9mIGFsbCBkZWxldGUgY3Jvc3MgYnV0dG9ucyBmcm9tIHRhc2tzIGJ5IGNsYXNzIG5hbWVcbiAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXRvZG8tYnRuXCIpO1xuICAvLyBMb29wIHRocm91Z2ggY29sbGVjdGlvbiBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggYnV0dG9uXG4gIGZvciAobGV0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG4gICAgZGVsZXRlQnRuUmVtb3ZlVGFzayhidXR0b24sIGFycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQnRuUmVtb3ZlVGFzayhidXR0b24sIGFycikge1xuICAvLyBGdW5jdGlvbiB0byBhc3NpZ24gRXZlbnQgbGlzdGVuZXIgdG8gYnV0dG9uc1xuICAvLyB0byByZW1vdmUgcGFydGljdWxhciB0YXNrcyBmcm9tIHBhZ2VcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIGdldCBJZCBvZiBhIGJ1dHRvbiB0byB3aGljaCBsaXN0ZW5lciBpcyBhc3NpZ25lZFxuICAgIGxldCBidG5JZCA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAvLyBnZXQgb25seSBudW1iZXIgYWZ0ZXIgdGhlIGh5cGhlbiBmcm9tIElkXG4gICAgbGV0IG51bWJlciA9IGJ0bklkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAvLyBCZWZvcmUgcmVtb3ZpbmcgYW4gaXRlbSBtYWtlIHN1cmUgdG8gY2xvc2UgaXRzIGRldGFpbHNcbiAgICBjbG9zZURldGFpbHNPZkRlbGV0ZWRUYXNrKG51bWJlcik7XG4gICAgLy8gUmVtb3ZlIGl0ZW0gZnJvbSB0aGUgYXJyYXkgYnkgdGhhdCBudW1iZXJcbiAgICBhcnIuc3BsaWNlKG51bWJlciwgMSk7XG4gICAgLy8gUmVyZW5kZXIgYXJyYXlcbiAgICByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKTtcbiAgICAvLyBBdm9pZCBmaXJpbmcgcGFyZW50IGVsZW1lbnQgbGlzdGVuZXIgYWZ0ZXIgY2xpY2tpbmcgb24gdGhlIGJ1dHRvblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZURldGFpbHNPZkRlbGV0ZWRUYXNrKG51bWJlcikge1xuICAvLyBCZWZvcmUgcmVtb3ZpbmcgYW4gaXRlbSBtYWtlIHN1cmUgaGlzIGRldGFpbHMgYXJlIG5vdCBzaG93blxuICAvLyBJZiB0aGV5IGFyZSB0aGVuIGhpZGUgdGhlbVxuICBpZiAoRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKSA9PT0gbnVtYmVyKVxuICAgIERldGFpbHNUb2dnbGUuaGlkZURldGFpbHMoKTtcbn1cblxuZXhwb3J0IHsgZGVsZXRlVGFza3NGcm9tIH07XG4iLCJpbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcblxuZnVuY3Rpb24gcHV0VGFza0luZm9Ub0lucHV0KHRhc2spIHtcbiAgLy8gRnVuY3Rpb24gdG8gcHV0IGluZm8gZnJvbSB0YXNrcyBpbiBpbnB1dHMgd2hlbiBkZXRhaWxzIGFyZSBzaG93blxuICBzZXROYW1lSW5wdXQodGFzay50aXRsZSk7XG4gIHNldERhdGVJbnB1dCh0YXNrLmRhdGUpO1xuICBzZXROb3RlSW5wdXQodGFzay5ub3RlKTtcbn1cblxuLy8gR2V0IGlucHV0XG5mdW5jdGlvbiBnZXROYW1lSW5wdXQoKSB7XG4gIGxldCBuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbmFtZS1jaGFuZ2VyXCIpLnZhbHVlO1xuICBjb25zb2xlLmxvZyhuYW1lSW5wdXQpO1xuICByZXR1cm4gbmFtZUlucHV0O1xufVxuXG5mdW5jdGlvbiBnZXREYXRlSW5wdXQoKSB7XG4gIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XG4gIGNvbnNvbGUubG9nKGRhdGVJbnB1dCk7XG4gIHJldHVybiBkYXRlSW5wdXQ7XG59XG5cbmZ1bmN0aW9uIGdldE5vdGVJbnB1dCgpIHtcbiAgbGV0IG5vdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1jaGFuZ2VyXCIpLnZhbHVlO1xuICBjb25zb2xlLmxvZyhub3RlSW5wdXQpO1xuICByZXR1cm4gbm90ZUlucHV0O1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU2V0IGlucHV0XG5mdW5jdGlvbiBzZXROYW1lSW5wdXQobmFtZSkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbmFtZS1jaGFuZ2VyXCIpLnZhbHVlID0gbmFtZTtcbiAgY29uc29sZS5sb2coYE5ldyBuYW1lIGZvciBpbnB1dCBpcyBzZXQ6ICR7bmFtZX1gKTtcbn1cblxuZnVuY3Rpb24gc2V0RGF0ZUlucHV0KGRhdGUpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlID0gZm9ybWF0RGF0ZShkYXRlKTtcbiAgY29uc29sZS5sb2coYE5ldyBkYXRlIGZvciBpbnB1dCBpcyBzZXQ6ICR7ZGF0ZX1gKTtcbiAgZm9ybWF0RGF0ZShkYXRlKTtcbn1cblxuZnVuY3Rpb24gc2V0UGlvcml0eShsZXZlbCkge1xuICBjb25zb2xlLmxvZyhsZXZlbCk7XG59XG5cbmZ1bmN0aW9uIHNldE5vdGVJbnB1dChub3RlKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1jaGFuZ2VyXCIpLnZhbHVlID0gbm90ZTtcbiAgY29uc29sZS5sb2coYE5ldyBOb3RlIGZvciBpbnB1dCBpcyBzZXQ6ICR7bm90ZX1gKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIC8vIElmIGRhdGUgaXMgdW5kZWZpbmVkIHlldCwgdGhlbiByZXR1cm4gbm90aGluZyBcIlwiXG4gIGlmICghZGF0ZSkgcmV0dXJuIFwiXCI7XG4gIC8vIERhdGUgZm9ybWF0dGluZzogZnJvbSBcImRkLm1tLnl5eXlcIiB0byBcInl5eXktTU0tZGRcIlxuICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi5cIilbMF07XG4gIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCIuXCIpWzFdO1xuICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCIuXCIpWzJdO1xuXG4gIGxldCBmb3JtYXR0ZWQgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICByZXR1cm4gZm9ybWF0dGVkO1xufVxuXG5leHBvcnQgeyBwdXRUYXNrSW5mb1RvSW5wdXQgfTtcbiIsImltcG9ydCB7IHNjcmVlbkxlc3NUaGVuMTAyNCB9IGZyb20gXCIuLi9zdHlsZS9yZXNpemUuanNcIjtcbmltcG9ydCAqIGFzIERldGFpbHNJbnB1dCBmcm9tIFwiLi9kZXRhaWxzSW5wdXQuanNcIjtcblxuZnVuY3Rpb24gdGFza3NUb2dnbGVEZXRhaWxzKGFycikge1xuICAvLyBNYWtlIHRvZG8gdGFza3Mgc2hvdyBkZXRhaWxzIG9uIGNsaWNrIChmcm9tIHJpZ2h0IHNpZGUpXG4gIHRvZG9MaXN0U2hvd0RldGFpbHMoYXJyKTtcbiAgLy8gTWFrZSBidXR0b24gaW4gZGV0YWlscyBpbnRlcmFjdDogaGlkZSBkZXRhaWxzXG4gIEFycm93SGlkZURldGFpbHMoKTtcbn1cblxuZnVuY3Rpb24gdG9kb0xpc3RTaG93RGV0YWlscyhhcnIpIHtcbiAgLy8gTWFrZSB0b2RvIGxpc3RzIHNob3cgZGV0YWlscyBvbmNsaWNrXG4gIGxldCB0YXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvXCIpO1xuXG4gIGZvciAobGV0IHRhc2sgb2YgdGFza3MpIHtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8gZ2V0IElkIG9mIGEgdGFzayB0byB3aGljaCBsaXN0ZW5lciBpcyBhc3NpZ25lZFxuICAgICAgbGV0IHRhc2tJZCA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAgIC8vIGdldCBvbmx5IG51bWJlciBmcm9tIElkIGFmdGVyIHRoZSBoeXBoZW5cbiAgICAgIGxldCBudW1iZXIgPSB0YXNrSWQuc3BsaXQoXCItXCIpWzFdO1xuICAgICAgLy8gUGFzcyBhIG51bWJlciBvZiB0aGUgY2xpY2tlZCB0YXNrIHRvIGRldGFpbHNcbiAgICAgIHRvZ2dsZURldGFpbHMobnVtYmVyKTtcbiAgICAgIC8vIFB1dCBpbmZvIGZyb20gdGFza3MgaW4gaW5wdXRzIHdoZW4gZGV0YWlscyBhcmUgc2hvd25cbiAgICAgIERldGFpbHNJbnB1dC5wdXRUYXNrSW5mb1RvSW5wdXQoYXJyW251bWJlcl0pO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIEFycm93SGlkZURldGFpbHMoKSB7XG4gIC8vIE1ha2UgQXJyb3cgaGlkZSBEZXRhaWxzIG9uY2xpY2tcbiAgbGV0IGFycm93QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1kZXRhaWxzLWJ0blwiKTtcbiAgYXJyb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVEZXRhaWxzKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGV0YWlscyhudW1iZXIpIHtcbiAgbGV0IGlkTnVtYmVyID0gZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCk7XG5cbiAgLy8gaWYgZGV0YWlscyBhcmUgdmlzaWJsZSBvbiB0aGUgcGFnZSBBTkRcbiAgLy8gaWYgdXNlciBjbGlja3Mgb24gdGhlIHNhbWUgdGFzayAyeCB0aGFuIGhpZGUgZGV0YWlsc1xuICBpZiAoZGV0YWlsc0FyZVNob3duKCkgJiYgaWROdW1iZXIgPT09IG51bWJlcikge1xuICAgIGhpZGVEZXRhaWxzKCk7XG4gIH0gZWxzZSB7XG4gICAgc2hvd0RldGFpbHMobnVtYmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZXRhaWxzQXJlU2hvd24oKSB7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICAvLyBBcmUgZGV0YWlscyBzaG93biBvbiB0aGUgcGFnZT8gUmV0dXJuIGJvb2xlYW46XG4gIHJldHVybiBnZXRDb21wdXRlZERpc3BsYXkoZGV0YWlscykgIT09IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBnZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKSB7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICAvLyBUYWtlIGlkIG9mIHRoZSBkZXRhaWxzIGNoaWxkXG4gIGxldCBkZXRhaWxzQ29udGFpbmVySWQgPSBkZXRhaWxzLmNoaWxkcmVuWzBdLmlkO1xuICAvLyBUYWtlIGEgbnVtYmVyIGZyb20gdGhhdCBpZCBhbmQgcmV0dXJuIGl0XG4gIGxldCBpZE51bWJlciA9IGRldGFpbHNDb250YWluZXJJZC5zcGxpdChcIi1cIilbMl07XG4gIHJldHVybiBpZE51bWJlcjtcbn1cblxuZnVuY3Rpb24gc2V0RGV0YWlsc0lkVG8obnVtYmVyKSB7XG4gIC8vIEZpcnN0IG1ha2UgZGV0YWlscyBJRCB0aGUgc2FtZSBhcyBpbml0aWFsIElEICh3aXRoIG5vIG51bWJlcnMpXG4gIC8vIEFub3RoZXIgd29yZHMgcmVtb3ZlIGFsbCBleGlzdGluZyBudW1iZXJzIGZyb20gaXRcbiAgbWFrZURldGFpbHNEZWZhdWx0KCk7XG4gIC8vIFRoZW4gcGFzcyBhIG51bWJlciB0byBpdFxuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgZGV0YWlscy5jaGlsZHJlblswXS5pZCArPSBgLSR7bnVtYmVyfWA7XG59XG5cbmZ1bmN0aW9uIGhpZGVEZXRhaWxzKCkge1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cbiAgaGlkZShkZXRhaWxzKTtcbiAgLy8gV2hlbiBkZXRhaWxzIGFyZSBoaWRkZW4gdGhlIG1haW4gY29sdW1uIHdpbGwgYmUgYnJvYWRlclxuICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvNFwiO1xuICAvLyBXaGVuIGRldGFpbHMgYXJlIGhpZGRlbiB0aGVpciBkZXRhaWxzLWNvbnRhaW5lci1JRCB3aWxsIGJlIGRlZmF1bHQgd2l0aCBubyBudW1iZXJcbiAgbWFrZURldGFpbHNEZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIHNob3dEZXRhaWxzKG51bWJlcikge1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cbiAgc2hvd0FzRmxleChkZXRhaWxzKTtcbiAgLy8gQWxzbyBzZXQgbmV3IElEIG51bWJlciB0byBkZXRhaWxzIGNvbnRhaW5lciAob25seSBpZiBpdCBkb2Vzbid0IGhhdmUgSUQgYWxyZWFkeSlcbiAgc2V0RGV0YWlsc0lkVG8obnVtYmVyKTtcbiAgLy8gSWYgc2NyZWVuIGlzIGJpZ2dlciB0aGFuIDEwMjQgdGhlbiBtYWtlIFwibWFpblwiIHRoZSBtaWRkbGUgY29sdW1uIG9mIDMgY29sdW1uc1xuICBpZiAoIXNjcmVlbkxlc3NUaGVuMTAyNCgpKSBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvM1wiO1xufVxuXG5mdW5jdGlvbiBtYWtlRGV0YWlsc0RlZmF1bHQoKSB7XG4gIC8vIENoYW5nZSBJRCBvZiBjaGlsZCBvZiB0aGUgZGV0YWlscyB0byBkZWZhdWx0IFwiZGV0YWlscy1jb250YWluZXJcIlxuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgZGV0YWlscy5jaGlsZHJlblswXS5pZCA9IFwiZGV0YWlscy1jb250YWluZXJcIjtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcHV0ZWREaXNwbGF5KGVsZW1lbnQpIHtcbiAgbGV0IGNvbXB1dGVkRGlzcGxheSA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpO1xuICByZXR1cm4gY29tcHV0ZWREaXNwbGF5O1xufVxuXG5mdW5jdGlvbiBzaG93QXNGbGV4KGVsZW1lbnQpIHtcbiAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59XG5cbmZ1bmN0aW9uIGhpZGUoZWxlbWVudCkge1xuICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IHtcbiAgdGFza3NUb2dnbGVEZXRhaWxzLFxuICBnZXRDb21wdXRlZERpc3BsYXksXG4gIGdldERldGFpbHNDb250YWluZXJJZE51bWJlcixcbiAgaGlkZURldGFpbHMsXG4gIGRldGFpbHNBcmVTaG93bixcbn07XG4iLCJjb25zdCB0YXNrRmFjdG9yeSA9IGZ1bmN0aW9uICh7XG4gIHRpdGxlID0gXCJcIixcbiAgZnJvbSA9IFwiXCIsXG4gIGRhdGUgPSBcIlwiLFxuICBwcmlvcml0eSA9IFwibG93XCIsXG4gIG5vdGUgPSBcIlwiLFxuICBkb25lID0gZmFsc2UsXG59KSB7XG4gIHJldHVybiB7IHRpdGxlLCBmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSwgZG9uZSB9O1xufTtcblxuZXhwb3J0IHsgdGFza0ZhY3RvcnkgfTtcbiIsImltcG9ydCBDYWxlbmRhciBmcm9tIFwiLi4vLi4vSUNPTlMvY2FsZW5kYXIuc3ZnXCI7XG5pbXBvcnQgTm90ZSBmcm9tIFwiLi4vLi4vSUNPTlMvZWRpdC5zdmdcIjtcbmltcG9ydCAqIGFzIERlbGV0ZVRhc2tCdG5zIGZyb20gXCIuL2RlbGV0ZS5qc1wiO1xuaW1wb3J0ICogYXMgRGV0YWlsc1RvZ2dsZSBmcm9tIFwiLi9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckFsbFRhc2tzRnJvbShhcnIpIHtcbiAgLy8gQ2xlYXIgYWxsIHByZXZpb3VzbHkgcmVuZGVyZWQgZWxlbWVudHMgZnJvbSB0aGUgcGFnZVxuICBjbGVhckNvbnRlbnRPZihcInRvZG9zXCIpO1xuICAvL1JlbmRlciBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IHRvIHRoZSBwYWdlXG4gIGZvciAobGV0IFtpbmRleCwgaXRlbV0gb2YgYXJyLmVudHJpZXMoKSkge1xuICAgIHJlbmRlclRhc2soaW5kZXgsIGl0ZW0pO1xuICB9XG4gIC8vIE1ha2UgZGVsZXRlIGJ1dHRvbnMgb24gY2xpY2sgcmVtb3ZlIHRhc2sgdG8gd2hpY2ggdGhleSBhcmUgYXNzaWduZWRcbiAgRGVsZXRlVGFza0J0bnMuZGVsZXRlVGFza3NGcm9tKGFycik7XG4gIC8vIE1ha2UgZWFjaCB0YXNrIHNob3cgaXRzIGRldGFpbHMgb24gY2xpY2tcbiAgRGV0YWlsc1RvZ2dsZS50YXNrc1RvZ2dsZURldGFpbHMoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50T2YoaWQpIHtcbiAgLy8gUmVtb3ZlIGFueSBjaGlsZCBvZiB0aGUgZWxlbWVudCB3aXRoIGlkXG4gIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFzayhpLCB0YXNrKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3NcIikuYXBwZW5kKGNyZWF0ZVRhc2soaSwgdGFzaykpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGksIHRhc2spIHtcbiAgLy8gY3JlYXRlIGxpc3QgZWxlbWVudCB3aXRoIGEgY2xhc3MgJ3RvZG8nXG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvXCIpO1xuICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdGFzay0ke2l9YCk7XG4gIC8vIEFwcGVuZCBsYWJlbCwgaW5wdXQsIGRpdiBhbmQgYnV0dG9uIHRvIGl0XG4gIGxpLmFwcGVuZChjcmVhdGVMYWJlbChpKSk7XG4gIGxpLmFwcGVuZChjcmVhdGVJbnB1dChpKSk7XG4gIGxpLmFwcGVuZChcbiAgICBjcmVhdGVDb250ZW50KHRhc2sudGl0bGUsIHRhc2suZnJvbSwgdGFzay5kYXRlLCB0YXNrLnByaW9yaXR5LCB0YXNrLm5vdGUpXG4gICk7XG4gIGxpLmFwcGVuZChjcmVhdGVEZWxldGVCdG4oaSkpO1xuXG4gIHJldHVybiBsaTtcbn1cblxuLy8gTEFCRUxcblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoaSkge1xuICAvLyByZXR1cm5zIGxhYmVsIGZvciBcInRvZG9jaGVja2JveFwiICsgaVxuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLmh0bWxGb3IgPSBgdG9kb2NoZWNrYm94JHtpfWA7XG4gIGxhYmVsLmFwcGVuZChjcmVhdGVEb25lSWNvbigpKTtcbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEb25lSWNvbigpIHtcbiAgLy8gY3JlYXRlIGljb24gY29udGFpbmVyXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWljb24tY29udGFpbmVyXCIpO1xuICAvLyBjcmVhdGUgaWNvblxuICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpb24taWNvblwiKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY2hlY2ttYXJrLW91dGxpbmVcIik7XG4gIC8vIGFwcGVuZCBpY29uIHRvIGNvbnRhaW5lclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbi8vIElOUFVUXG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KGkpIHtcbiAgLy8gQ3JlYXRlIGlucHV0IGNoZWNrYm94IGVsZW1lbnQgYWZ0ZXIgdGhlIGxhYmVsXG4gIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgLy8gQWRkIGF0dHJpYnV0ZXNcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tY2hlY2tib3hcIik7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGB0b2RvY2hlY2tib3gtJHtpfWApO1xuICByZXR1cm4gY2hlY2tib3g7XG59XG5cbi8vIENPTlRFTlQgPSB0YXNrIHRpdGxlIGFuZCBkZXRhaWxzXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQodGl0bGUsIGZyb20sIGRhdGUsIHByaW9yaXR5LCBub3RlKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tdGV4dFwiKTtcbiAgLy8gQXBwZW5kIHRpdGxlIGFuZCBkZXRhaWxzIHRvIGNvbnRlbnRcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZSh0aXRsZSkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZURldGFpbHMoZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUpKTtcblxuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoc3RyKSB7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby10aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBzdHI7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGV0YWlscyhmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSkge1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRldGFpbHMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXRhaWxzXCIpO1xuICBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZUZyb20oZnJvbSkpO1xuICBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZUR1ZShkYXRlKSk7XG4gIGRldGFpbHMuYXBwZW5kQ2hpbGQoY3JlYXRlUHJpb3JpdHkocHJpb3JpdHkpKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVOb3RlKG5vdGUpKTtcbiAgcmV0dXJuIGRldGFpbHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyb20oZnJvbSkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZnJvbS1wcm9qZWN0XCIpO1xuICBpZiAoZnJvbSkgc3Bhbi50ZXh0Q29udGVudCA9IGBGcm9tICR7ZnJvbX1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHVlKGRhdGUpIHtcbiAgbGV0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkdWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkdWUtZGF0ZVwiKTtcbiAgaWYgKGRhdGUpIHtcbiAgICBkdWUuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FsZW5kYXJJbWFnZSgpKTtcbiAgICBkdWUuYXBwZW5kQ2hpbGQoY3JlYXRlU3BhbkZvckRhdGUoZGF0ZSkpO1xuICB9XG4gIHJldHVybiBkdWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFySW1hZ2UoKSB7XG4gIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIENhbGVuZGFyKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkNhbGVuZGFyXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMnB4XCIpO1xuXG4gIHJldHVybiBpbWc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYW5Gb3JEYXRlKGRhdGUpIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IGBEdWUgJHtkYXRlfWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcmlvcml0eShsZXZlbCkge1xuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYCR7bGV2ZWx9LXByaW9yaXR5YCk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGNyZWF0ZVNwYW5Gb3JQcmlvcml0eShsZXZlbCkpO1xuICByZXR1cm4gcHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYW5Gb3JQcmlvcml0eShsZXZlbCkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpZiAobGV2ZWwgIT09IFwibG93XCIpXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IGAke2NhcGl0YWxpemVGaXJzdExldHRlcihsZXZlbCl9IHByaW9yaXR5YDtcbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm90ZShub3RlKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJub3RlLXByZXNlbmNlXCIpO1xuXG4gIGlmIChub3RlKSB7XG4gICAgLy8gY3JlYXRlIGFuZCBBcHBlbmQgTm90ZSBJY29uXG4gICAgbGV0IG5vdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBub3RlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgTm90ZSk7XG4gICAgbm90ZUljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGVuXCIpO1xuICAgIG5vdGVJY29uLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTJweFwiKTtcblxuICAgIC8vIGNyZWF0ZSBhbmQgYXBwZW5kIHRleHRcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIk5vdGVcIjtcblxuICAgIHNwYW4uYXBwZW5kQ2hpbGQobm90ZUljb24pO1xuICAgIHNwYW4uYXBwZW5kQ2hpbGQodGV4dCk7XG4gIH1cbiAgcmV0dXJuIHNwYW47XG59XG5cbi8vIERFTEVURSBCVVRUT05cbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUJ0bihpKSB7XG4gIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsZXRlLXRvZG8tYnRuXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbGV0ZWJ0bi0ke2l9YCk7XG5cbiAgLy8gY3JlYXRlIGFuIGljb24gYW5kIGFwcGVuZCBpdCB0byBidXR0b25cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW9uLWljb25cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNsb3NlLWNpcmNsZVwiKTtcblxuICBidG4uYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgcmV0dXJuIGJ0bjtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tIH07XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==