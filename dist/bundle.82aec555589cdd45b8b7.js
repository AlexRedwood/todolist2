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
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n@keyframes rotation {\n  0% {\n    transform: rotate(0); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes appearFromRightProject {\n  0% {\n    left: 30px;\n    opacity: 0; }\n  100% {\n    left: 0px;\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  user-select: none; }\n\nbody,\nhtml {\n  height: 100%;\n  margin: 0; }\n\nbody {\n  font-family: \"Sen\", sans-serif;\n  line-height: 1.25;\n  background: #e9e9e9; }\n\n#content {\n  display: grid;\n  height: 100%;\n  grid-template-rows: 60px auto;\n  grid-template-columns: 300px auto 330px;\n  grid-template-areas: \"header header header\" \"projects main todo-misc\"; }\n  #content.broad {\n    grid-template-columns: 68px auto 330px; }\n\n/* --- TOP of the PAGE : HEADER --- */\nheader {\n  grid-area: header;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  justify-content: center;\n  background: #106877;\n  color: #f4f4f4;\n  font-size: 1.9em;\n  font-weight: 900;\n  padding: 0;\n  width: 100%;\n  font-family: \"Permanent Marker\", cursive;\n  letter-spacing: 5px; }\n  header #menu-icon {\n    margin-right: auto;\n    margin-left: 0;\n    font-size: 48px;\n    cursor: pointer;\n    padding: 10px; }\n    header #menu-icon:hover {\n      background: #0b505c; }\n  header #header-title {\n    margin-right: auto; }\n  header #socials {\n    margin-right: 10px;\n    font-size: 48px;\n    cursor: pointer; }\n\n/* LEFT SIDE OF THE PAGE: PROJECTS */\n#project-container {\n  grid-area: projects;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  -webkit-box-shadow: 8px 0px 5px -4px #cacaca;\n  -moz-box-shadow: 8px 0px 5px -4px #cacaca;\n  box-shadow: 8px 0px 5px -4px #cacaca;\n  /* LEFT-SIDE OF THE PAGE: User Input*/ }\n  #project-container #project-list {\n    width: 280px;\n    max-width: 280px; }\n    #project-container #project-list.broad {\n      width: 68px; }\n    #project-container #project-list .project {\n      margin: 10px 0;\n      padding: 10px;\n      border-radius: 5px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      word-wrap: break-word;\n      white-space: normal;\n      overflow: hidden; }\n      #project-container #project-list .project.broad {\n        margin: 10px 0;\n        padding: 10px 10px 10px 22px;\n        border-radius: 0; }\n      #project-container #project-list .project.active {\n        color: #11998e;\n        font-weight: 900; }\n      #project-container #project-list .project:hover .delete-project-btn {\n        background: #f0f0f0;\n        visibility: visible;\n        animation: appearFromRightProject 0.3s ease-out forwards; }\n      #project-container #project-list .project:not(.active):hover {\n        background: #f0f0f0;\n        cursor: pointer; }\n      #project-container #project-list .project .project-icon {\n        font-size: 24px;\n        margin-right: 20px; }\n        #project-container #project-list .project .project-icon.broad {\n          margin-right: 0; }\n      #project-container #project-list .project .project-title-count-container {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start; }\n        #project-container #project-list .project .project-title-count-container.broad {\n          display: none; }\n      #project-container #project-list .project .project-name {\n        width: 155px;\n        max-width: 155px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n      #project-container #project-list .project .count-todos {\n        font-size: 0.8em;\n        font-weight: 900;\n        margin-left: auto;\n        width: 29px;\n        padding-right: 5px; }\n      #project-container #project-list .project .delete-project-btn {\n        visibility: hidden;\n        position: relative;\n        font-size: 24px;\n        margin-left: auto;\n        outline: none;\n        border: none;\n        background: #fff;\n        color: #c5c5c5;\n        cursor: pointer;\n        transition: color 0.2s; }\n        #project-container #project-list .project .delete-project-btn.broad {\n          display: none; }\n        #project-container #project-list .project .delete-project-btn:hover {\n          color: #999999; }\n        #project-container #project-list .project .delete-project-btn:focus {\n          color: #6e6e6e; }\n  #project-container #new-project-form {\n    width: 250px;\n    max-width: 280px;\n    position: relative;\n    margin-left: 15px;\n    margin-right: 0;\n    display: flex;\n    /* Input */\n    /* Submit button */ }\n    #project-container #new-project-form.broad {\n      width: 68px;\n      margin: 0; }\n    #project-container #new-project-form #new-project {\n      border: 0;\n      border-bottom: 2px solid #6b6b6b;\n      margin-left: 2px;\n      margin-right: auto;\n      padding: 9px 0;\n      outline: 0;\n      font-size: 1em;\n      color: #6b6b6b;\n      background: transparent;\n      font-family: \"Sen\", sans-serif; }\n      #project-container #new-project-form #new-project.broad {\n        display: none; }\n      #project-container #new-project-form #new-project:focus {\n        transition: 0.7s;\n        color: #11998e;\n        border-bottom: 2px solid #38ef7d; }\n        #project-container #new-project-form #new-project:focus::placeholder {\n          transition: 0.7s;\n          color: #11998e; }\n    #project-container #new-project-form #submit-project {\n      background: #fff;\n      display: inline-block;\n      border: none;\n      position: relative;\n      top: 0px;\n      left: 10px;\n      text-decoration: none;\n      font-size: 24px;\n      cursor: pointer;\n      text-align: center;\n      padding: 6px; }\n      #project-container #new-project-form #submit-project.broad {\n        padding: 0;\n        left: 4px;\n        padding: 7px 18px; }\n      #project-container #new-project-form #submit-project ion-icon {\n        --ionicon-stroke-width: 48px;\n        color: #6b6b6b; }\n      #project-container #new-project-form #submit-project:focus {\n        outline: none; }\n      #project-container #new-project-form #submit-project::after {\n        content: \"\";\n        position: absolute;\n        z-index: 0;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: 2px solid #fff;\n        border-radius: 5px;\n        transition: 0.5s; }\n      #project-container #new-project-form #submit-project:hover {\n        color: #11998e; }\n        #project-container #new-project-form #submit-project:hover::after {\n          border: 2px solid #38ef7d;\n          border-radius: 5px; }\n        #project-container #new-project-form #submit-project:hover ion-icon {\n          color: #11998e; }\n\n/* Middle: Project title, todo tasks*/\nmain {\n  grid-area: main;\n  min-width: 377px;\n  background: #fff;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-shadow: 0px 0px 5px 2px #cacaca;\n  -moz-box-shadow: 0px 0px 5px 2px #cacaca;\n  box-shadow: 0px 0px 5px 2px #cacaca;\n  grid-column: 2 / 4;\n  /* User input todo tasks*/ }\n  @media screen and (max-width: 1024px) {\n    main {\n      grid-column: 2 / 4; } }\n  main #project-title {\n    margin-bottom: 20px;\n    font-weight: 900;\n    font-size: 1.4em; }\n  main .todo {\n    position: relative;\n    width: 100%;\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 40px auto 20px;\n    grid-template-areas: \"checkbox todotext btn\";\n    justify-items: start;\n    align-items: center;\n    margin-bottom: 15px;\n    padding: 5px 15px;\n    border: 1px solid lightgrey;\n    border-radius: 5px;\n    cursor: pointer;\n    /* Custom made checkbox with after element */\n    /* Text of the todo task with details */ }\n    main .todo:hover {\n      -webkit-box-shadow: 0px 0px 5px 0px #e4e4e4;\n      -moz-box-shadow: 0px 0px 5px 0px #e4e4e4;\n      box-shadow: 0px 0px 5px 0px #e4e4e4; }\n    main .todo:hover .delete-todo-btn {\n      background: #fff;\n      visibility: visible;\n      animation: appearFromRightProject 0.3s ease-out forwards; }\n    main .todo label {\n      grid-area: checkbox; }\n      main .todo label .todo-icon-container {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 30px;\n        height: 30px;\n        transition: 0.7s; }\n        main .todo label .todo-icon-container::after {\n          visibility: visible;\n          content: \"\";\n          position: absolute;\n          z-index: 0;\n          left: 0;\n          top: 0;\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box;\n          border: 2px solid #c5c5c5;\n          border-radius: 50%;\n          cursor: pointer;\n          transition: 0.7s; }\n        main .todo label .todo-icon-container ion-icon {\n          visibility: hidden;\n          font-size: 24px;\n          --ionicon-stroke-width: 48px; }\n        main .todo label .todo-icon-container:hover::after {\n          border: 2px solid #e2b0e9; }\n        main .todo label .todo-icon-container:hover ion-icon {\n          color: #e2b0e9;\n          visibility: visible;\n          animation: fadeIn 0.5s ease-out; }\n    main .todo .todo-checkbox {\n      display: none; }\n    main .todo .todo-text {\n      grid-area: todotext;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around; }\n      main .todo .todo-text.done {\n        text-decoration: line-through;\n        color: #c5c5c5 !important; }\n        main .todo .todo-text.done .medium-priority,\n        main .todo .todo-text.done .high-priority {\n          color: #c5c5c5 !important; }\n      main .todo .todo-text .todo-title {\n        font-size: 1.15em;\n        overflow-wrap: break-word; }\n      main .todo .todo-text .details {\n        font-size: 0.8em; }\n        main .todo .todo-text .details .from-project,\n        main .todo .todo-text .details .due-date,\n        main .todo .todo-text .details .medium-priority,\n        main .todo .todo-text .details .high-priority,\n        main .todo .todo-text .details .note-presence {\n          margin-right: 12px; }\n        main .todo .todo-text .details .from-project:empty,\n        main .todo .todo-text .details .due-date:empty,\n        main .todo .todo-text .details .medium-priority:empty,\n        main .todo .todo-text .details .high-priority:empty,\n        main .todo .todo-text .details .note-presence:empty {\n          margin-right: 0; }\n        main .todo .todo-text .details span img {\n          position: relative;\n          top: 2px;\n          margin-right: 4px; }\n        main .todo .todo-text .details span.overdue-date {\n          color: red; }\n        main .todo .todo-text .details span.high-priority {\n          color: #7300ff; }\n        main .todo .todo-text .details span.medium-priority {\n          color: #106877; }\n    main .todo .delete-todo-btn {\n      grid-area: btn;\n      visibility: hidden;\n      position: relative;\n      font-size: 24px;\n      outline: none;\n      border: none;\n      background: #fff;\n      color: #d4d4d4;\n      cursor: pointer;\n      transition: color 0.2s; }\n      main .todo .delete-todo-btn:hover {\n        color: #494040; }\n      main .todo .delete-todo-btn:focus {\n        color: #929292; }\n  main hr {\n    position: relative;\n    bottom: 20px;\n    margin-top: auto;\n    margin-right: -20px;\n    margin-left: -20px;\n    height: 10px;\n    border: 0;\n    box-shadow: 0 -10px 10px -10px #8c8c8c inset; }\n  main #new-todo-form {\n    display: flex;\n    /* Input */\n    /* Submit button */ }\n    main #new-todo-form #new-todo {\n      width: 100%;\n      border: 0;\n      border-bottom: 2px solid #6b6b6b;\n      margin-left: 2px;\n      margin-right: auto;\n      padding: 9px 0;\n      outline: 0;\n      font-size: 1em;\n      color: #6b6b6b;\n      background: transparent;\n      font-family: \"Sen\", sans-serif; }\n      main #new-todo-form #new-todo:focus {\n        transition: 0.7s;\n        color: #11998e;\n        border-bottom: 2px solid #38ef7d; }\n        main #new-todo-form #new-todo:focus::placeholder {\n          transition: 0.7s;\n          color: #11998e; }\n    main #new-todo-form #submit-todo {\n      background: #fff;\n      display: inline-block;\n      border: none;\n      position: relative;\n      top: 0px;\n      left: 10px;\n      text-decoration: none;\n      font-size: 24px;\n      cursor: pointer;\n      text-align: center;\n      padding: 6px; }\n      main #new-todo-form #submit-todo ion-icon {\n        --ionicon-stroke-width: 48px;\n        color: #6b6b6b; }\n      main #new-todo-form #submit-todo:focus {\n        outline: none; }\n      main #new-todo-form #submit-todo::after {\n        content: \"\";\n        position: absolute;\n        z-index: 0;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: 2px solid #fff;\n        border-radius: 5px;\n        transition: 0.5s; }\n      main #new-todo-form #submit-todo:hover {\n        color: #11998e; }\n        main #new-todo-form #submit-todo:hover::after {\n          border: 2px solid #38ef7d;\n          border-radius: 5px; }\n        main #new-todo-form #submit-todo:hover ion-icon {\n          color: #11998e; }\n\n/* Right side of the page */\n#todo-misc-container {\n  grid-area: todo-misc;\n  background: #e9e9e9;\n  display: none;\n  flex-direction: column;\n  margin-top: 20px;\n  z-index: 1; }\n  @media screen and (max-width: 1024px) {\n    #todo-misc-container {\n      -webkit-box-shadow: -3px 0px 5px -2px #cacaca;\n      -moz-box-shadow: -3px 0px 5px -2px #cacaca;\n      box-shadow: -3px 0px 5px -2px #cacaca; } }\n  #todo-misc-container #todo-name-changer-container,\n  #todo-misc-container #date-changer,\n  #todo-misc-container #priority-container,\n  #todo-misc-container #note-container {\n    background: #fff;\n    margin-right: 0px;\n    margin-top: 0px;\n    border-bottom: 2px solid lightgrey;\n    border-left: 2px solid lightgrey;\n    padding: 15px;\n    -webkit-box-shadow: -3px 0px 5px -2px #cacaca;\n    -moz-box-shadow: -3px 0px 5px -2px #cacaca;\n    box-shadow: -3px 0px 5px -2px #cacaca; }\n    #todo-misc-container #todo-name-changer-container #date,\n    #todo-misc-container #date-changer #date,\n    #todo-misc-container #priority-container #date,\n    #todo-misc-container #note-container #date {\n      color: #6b6b6b; }\n  #todo-misc-container #todo-name-changer-container {\n    height: 60px;\n    border-radius: 5px 0 0 0;\n    -webkit-box-shadow: -2px -2px 5px -1px #cacaca;\n    -moz-box-shadow: -2px -2px 5px -1px #cacaca;\n    box-shadow: -2px -2px 5px -1px #cacaca; }\n    #todo-misc-container #todo-name-changer-container textarea {\n      height: 40px; }\n  #todo-misc-container #note-container {\n    height: 200px;\n    -webkit-box-shadow: -3px 4px 5px -2px #cacaca;\n    -moz-box-shadow: -3px 4px 5px -2px #cacaca;\n    box-shadow: -3px 4px 5px -2px #cacaca; }\n    #todo-misc-container #note-container textarea {\n      height: 160px; }\n  #todo-misc-container #date-changer,\n  #todo-misc-container #priority-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n    #todo-misc-container #date-changer #priority-levels,\n    #todo-misc-container #priority-container #priority-levels {\n      color: #6b6b6b; }\n      #todo-misc-container #date-changer #priority-levels .medium-priority.selected-1,\n      #todo-misc-container #date-changer #priority-levels .low-priority.selected-1,\n      #todo-misc-container #priority-container #priority-levels .medium-priority.selected-1,\n      #todo-misc-container #priority-container #priority-levels .low-priority.selected-1 {\n        color: #106877; }\n      #todo-misc-container #date-changer #priority-levels .medium-priority.selected-2,\n      #todo-misc-container #date-changer #priority-levels .low-priority.selected-2,\n      #todo-misc-container #date-changer #priority-levels .high-priority.selected-2,\n      #todo-misc-container #priority-container #priority-levels .medium-priority.selected-2,\n      #todo-misc-container #priority-container #priority-levels .low-priority.selected-2,\n      #todo-misc-container #priority-container #priority-levels .high-priority.selected-2 {\n        color: #7300ff; }\n      #todo-misc-container #date-changer #priority-levels .onmouseover:hover,\n      #todo-misc-container #priority-container #priority-levels .onmouseover:hover {\n        color: #106877; }\n      #todo-misc-container #date-changer #priority-levels .medium-priority:hover ~ .low-priority,\n      #todo-misc-container #priority-container #priority-levels .medium-priority:hover ~ .low-priority {\n        color: #106877; }\n      #todo-misc-container #date-changer #priority-levels .high-priority:hover,\n      #todo-misc-container #priority-container #priority-levels .high-priority:hover {\n        color: #7300ff; }\n      #todo-misc-container #date-changer #priority-levels ion-icon,\n      #todo-misc-container #priority-container #priority-levels ion-icon {\n        font-size: 24px;\n        cursor: pointer; }\n    #todo-misc-container #date-changer #date-remover ion-icon,\n    #todo-misc-container #priority-container #date-remover ion-icon {\n      position: relative;\n      top: 4px;\n      color: #6b6b6b;\n      cursor: pointer;\n      --ionicon-stroke-width: 48px; }\n      #todo-misc-container #date-changer #date-remover ion-icon:hover,\n      #todo-misc-container #priority-container #date-remover ion-icon:hover {\n        color: black; }\n  #todo-misc-container .misc-title {\n    font-size: 1.1em;\n    color: #6b6b6b;\n    width: 120px; }\n  #todo-misc-container textarea {\n    background: #fff;\n    outline: none;\n    resize: none;\n    overflow: hidden;\n    width: 100%;\n    border: none;\n    font-family: \"Sen\", sans-serif;\n    font-size: 1.1em; }\n    #todo-misc-container textarea::placeholder {\n      color: #6b6b6b; }\n    #todo-misc-container textarea:focus::placeholder {\n      color: #11998e; }\n  #todo-misc-container input[type=\"date\"] {\n    outline: none;\n    border: none;\n    cursor: pointer; }\n  #todo-misc-container #close-details-btn {\n    font-size: 48px;\n    width: 62px; }\n    #todo-misc-container #close-details-btn ion-icon {\n      --ionicon-stroke-width: 48px;\n      background: #fff;\n      border-radius: 0 0 5px 5px;\n      border-left: 2px solid lightgrey;\n      border-right: 2px solid lightgrey;\n      border-bottom: 2px solid lightgrey;\n      width: 60px;\n      color: #c5c5c5;\n      cursor: pointer;\n      -webkit-box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca;\n      -moz-box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca;\n      box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca; }\n      #todo-misc-container #close-details-btn ion-icon:hover {\n        color: #6e6e6e; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/alexandr/Projects/odin_on_rails/new_beg/src/JS/tasks/done.js: Unexpected token (24:23)\n\n\u001b[0m \u001b[90m 22 | \u001b[39m    closeDetailsOfCompletedTask(number)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m    \u001b[90m// complete item from the array by that number\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 24 | \u001b[39m    arr[number]\u001b[33m.\u001b[39mdone \u001b[33m=\u001b[39m \u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 25 | \u001b[39m    \u001b[90m// Rerender array\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 | \u001b[39m    renderAllTasksFrom(arr)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 27 | \u001b[39m    \u001b[90m// Avoid firing parent element listener after clicking on the checkbox\u001b[39m\u001b[0m\n    at Parser._raise (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:742:17)\n    at Parser.raiseWithData (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.raise (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:729:17)\n    at Parser.unexpected (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:8757:16)\n    at Parser.parseExprAtom (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10052:20)\n    at Parser.parseExprSubscripts (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9602:23)\n    at Parser.parseMaybeUnary (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9582:21)\n    at Parser.parseExprOps (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9452:23)\n    at Parser.parseMaybeConditional (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9425:23)\n    at Parser.parseMaybeAssign (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9380:21)\n    at Parser.parseMaybeAssign (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9412:25)\n    at Parser.parseExpression (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9332:23)\n    at Parser.parseStatementContent (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11210:23)\n    at Parser.parseStatement (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11081:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11656:25)\n    at Parser.parseBlockBody (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11642:10)\n    at Parser.parseBlock (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11626:10)\n    at Parser.parseFunctionBody (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10634:24)\n    at Parser.parseFunctionBodyAndFinish (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10617:10)\n    at /home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11796:12\n    at Parser.withTopicForbiddingContext (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10956:14)\n    at Parser.parseFunction (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11795:10)\n    at Parser.parseFunctionExpression (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10093:17)\n    at Parser.parseExprAtom (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10001:21)\n    at Parser.parseExprSubscripts (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9602:23)\n    at Parser.parseMaybeUnary (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9582:21)\n    at Parser.parseExprOps (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9452:23)\n    at Parser.parseMaybeConditional (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9425:23)\n    at Parser.parseMaybeAssign (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9380:21)\n    at Parser.parseExprListItem (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10718:18)");

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

  _done_js__WEBPACK_IMPORTED_MODULE_4__["doneBtns"](arr);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUNPTlMvY2FsZW5kYXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9JQ09OUy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL3ByaW9yaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9zdHlsZS9yZXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2FkZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZGV0YWlsc0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZXRhaWxzVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2Nzcz84MTRiIl0sIm5hbWVzIjpbIk1lbnVCdG4iLCJSZXNpemUiLCJQcmlvcml0eSIsImFsbFRhc2tzIiwiRGVmYXVsdHMiLCJyZW5kZXJBbGxUYXNrc0Zyb20iLCJBZGRUYXNrQnRuIiwiSW5wdXQiLCJzaG93UHJvamVjdHMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImJyb2FkZW5Qcm9qZWN0Q29udGFpbmVyIiwiZ2V0RWxlbWVudHNUb0Jyb2FkIiwiZWxlbWVudCIsInRvZ2dsZUJyb2FkIiwibWluaW1pemVQcm9qZWN0Q29udGFpbmVyIiwiYWRkQnJvYWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b2dnbGUiLCJjb250ZW50IiwicHJvamVjdExpc3QiLCJwcm9qZWN0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByb2plY3RJY29uIiwicHJvamVjdFRpdGxlQ291bnRDb250YWluZXIiLCJkZWxldGVQcm9qZWN0QnRuIiwibmV3UHJvamVjdEZvcm0iLCJuZXdQcm9qZWN0Iiwic3VibWl0UHJvamVjdCIsImVsZW1lbnRzIiwic3RhcnNDaGFuZ2VDb2xvcnMiLCJhY3RpdmF0ZUZpcnN0U3RhciIsImFjdGl2YXRlU2Vjb25kU3RhciIsImFjdGl2YXRlVGhpcmRTdGFyIiwiZ2V0U3RhcjEiLCJhY3RpdmF0ZVN0YXIiLCJnZXRTdGFyMiIsImdldFN0YXIzIiwibnVtYmVyIiwiY29uc29sZSIsImxvZyIsIm91dGxpbmVTZWNvbmRTdGFyIiwib3V0bGluZVRoaXJkU3RhciIsInJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzIiwiYWRkTWVkaXVtT25tb3VzZW92ZXIiLCJmaWxsU2Vjb25kU3RhciIsImFkZENvbG9yVHdvU3RhcnMiLCJkZWNvbG9yVGhpcmRTdGFyIiwiZmlsbFRoaXJkU3RhciIsImFkZENvbG9yVGhyZWVTdGFycyIsInJlbW92ZU1lZGl1bU9ubW91c2VvdmVyIiwiY2hpbGRyZW4iLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmUiLCJzdGFySXNPdXRsaW5lZCIsInN0YXIiLCJnZXRBdHRyaWJ1dGUiLCJkZWNvbG9yRmlyc3RTdGFyIiwiZGVjb2xvclNlY29uZFN0YXIiLCJyZXNwb25zaXZlIiwibWFpbiIsImRldGFpbHMiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJzY3JlZW5MZXNzVGhlbjEwMjQiLCJnZXRDb21wdXRlZERpc3BsYXkiLCJzdHlsZSIsImdyaWRDb2x1bW4iLCJtYXRjaGVzIiwiYWRkVGFza1RvIiwiYXJyIiwic3VibWl0VG9kb0J0biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoVGFza1RvIiwidGFibGUiLCJwdXNoIiwiZ2V0VGFzayIsInRhc2siLCJ0YXNrRmFjdG9yeSIsInRpdGxlIiwiZ2V0SW5wdXRWYWx1ZSIsImNsZWFyVGFza0lucHV0IiwidmFsdWUiLCJnZXQiLCJmcm9tIiwiZGF0ZSIsInByaW9yaXR5Iiwibm90ZSIsImRvbmUiLCJkZWxldGVUYXNrc0Zyb20iLCJidXR0b25zIiwiYnV0dG9uIiwiZGVsZXRlQnRuUmVtb3ZlVGFzayIsImUiLCJidG5JZCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInNwbGl0IiwiY2xvc2VEZXRhaWxzT2ZEZWxldGVkVGFzayIsInNwbGljZSIsInN0b3BQcm9wYWdhdGlvbiIsIkRldGFpbHNUb2dnbGUiLCJwdXRUYXNrSW5mb1RvSW5wdXQiLCJzZXROYW1lIiwic2V0RGF0ZSIsInNldFBpb3JpdHkiLCJzZXROb3RlIiwiY2hhbmdlVGFza09uSW5wdXQiLCJjaGFuZ2VUaXRsZU9uSW5wdXQiLCJjaGFuZ2VEYXRlT25JbnB1dCIsImNoYW5nZVByaW9yaXR5T25JbnB1dCIsImNoYW5nZU5vdGVPbklucHV0IiwiaW5wdXQiLCJvbmlucHV0IiwiY2hhbmdlVGl0bGUiLCJ0YXNrTnVtYmVyIiwiY2hhbmdlRGF0ZSIsImZvcm1hdERhdGUyIiwic3RhcnMiLCJjaGFuZ2VQcmlvcml0eSIsImdldFByaW9yaXR5SW5wdXQiLCJzdGFyMSIsImNvbnRhaW5zIiwiY2hhbmdlTm90ZSIsIm5hbWUiLCJmb3JtYXREYXRlIiwibGV2ZWwiLCJkYXkiLCJtb250aCIsInllYXIiLCJmb3JtYXR0ZWQiLCJ0YXNrc1RvZ2dsZURldGFpbHMiLCJ0b2RvTGlzdFNob3dEZXRhaWxzIiwiQXJyb3dIaWRlRGV0YWlscyIsInRhc2tzIiwidGFza0lkIiwidG9nZ2xlRGV0YWlscyIsIkRldGFpbHNJbnB1dCIsImFycm93QnRuIiwiaGlkZURldGFpbHMiLCJpZE51bWJlciIsImdldERldGFpbHNDb250YWluZXJJZE51bWJlciIsImRldGFpbHNBcmVTaG93biIsInNob3dEZXRhaWxzIiwiZGV0YWlsc0NvbnRhaW5lcklkIiwic2V0RGV0YWlsc0lkVG8iLCJtYWtlRGV0YWlsc0RlZmF1bHQiLCJoaWRlIiwic2hvd0FzRmxleCIsImNvbXB1dGVkRGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZGlzcGxheSIsImNsZWFyQ29udGVudE9mIiwiZW50cmllcyIsImluZGV4IiwiaXRlbSIsInJlbmRlclRhc2siLCJEZWxldGVUYXNrQnRucyIsIlRhc2tEb25lIiwiY29udGVudENvbnRhaW5lciIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImkiLCJhcHBlbmQiLCJjcmVhdGVUYXNrIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlTGFiZWwiLCJjcmVhdGVJbnB1dCIsImNyZWF0ZUNvbnRlbnQiLCJjcmVhdGVEZWxldGVCdG4iLCJsYWJlbCIsImh0bWxGb3IiLCJjcmVhdGVEb25lSWNvbiIsImNvbnRhaW5lciIsImljb24iLCJhcHBlbmRDaGlsZCIsImNoZWNrYm94IiwiY3JlYXRlVGl0bGUiLCJjcmVhdGVEZXRhaWxzIiwic3RyIiwidGV4dENvbnRlbnQiLCJjcmVhdGVGcm9tIiwiY3JlYXRlRHVlIiwiY3JlYXRlUHJpb3JpdHkiLCJjcmVhdGVOb3RlIiwic3BhbiIsImR1ZSIsImNyZWF0ZUNhbGVuZGFySW1hZ2UiLCJjcmVhdGVTcGFuRm9yRGF0ZSIsImltZyIsIkNhbGVuZGFyIiwiY3JlYXRlU3BhbkZvclByaW9yaXR5IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm5vdGVJY29uIiwiTm90ZSIsInRleHQiLCJidG4iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNB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QkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw4TUFBcUc7O0FBRXZJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImJ1bmRsZS44MmFlYzU1NTU4OWNkZDQ1YjhiNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0pTL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGFwcGVhckZyb21SaWdodFByb2plY3Qge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAzMHB4O1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlNlblxcXCIsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7IH1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGF1dG8gMzMwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiIFxcXCJwcm9qZWN0cyBtYWluIHRvZG8tbWlzY1xcXCI7IH1cXG4gICNjb250ZW50LmJyb2FkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2OHB4IGF1dG8gMzMwcHg7IH1cXG5cXG4vKiAtLS0gVE9QIG9mIHRoZSBQQUdFIDogSEVBREVSIC0tLSAqL1xcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzEwNjg3NztcXG4gIGNvbG9yOiAjZjRmNGY0O1xcbiAgZm9udC1zaXplOiAxLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIlBlcm1hbmVudCBNYXJrZXJcXFwiLCBjdXJzaXZlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDsgfVxcbiAgaGVhZGVyICNtZW51LWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDsgfVxcbiAgICBoZWFkZXIgI21lbnUtaWNvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogIzBiNTA1YzsgfVxcbiAgaGVhZGVyICNoZWFkZXItdGl0bGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IH1cXG4gIGhlYWRlciAjc29jaWFscyB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4vKiBMRUZUIFNJREUgT0YgVEhFIFBBR0U6IFBST0pFQ1RTICovXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogcHJvamVjdHM7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA4cHggMHB4IDVweCAtNHB4ICNjYWNhY2E7XFxuICAtbW96LWJveC1zaGFkb3c6IDhweCAwcHggNXB4IC00cHggI2NhY2FjYTtcXG4gIGJveC1zaGFkb3c6IDhweCAwcHggNXB4IC00cHggI2NhY2FjYTtcXG4gIC8qIExFRlQtU0lERSBPRiBUSEUgUEFHRTogVXNlciBJbnB1dCovIH1cXG4gICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IHtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBtYXgtd2lkdGg6IDI4MHB4OyB9XFxuICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0LmJyb2FkIHtcXG4gICAgICB3aWR0aDogNjhweDsgfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCB7XFxuICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QuYnJvYWQge1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAyMnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0LmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdDpob3ZlciAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgYW5pbWF0aW9uOiBhcHBlYXJGcm9tUmlnaHRQcm9qZWN0IDAuM3MgZWFzZS1vdXQgZm9yd2FyZHM7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdDpub3QoLmFjdGl2ZSk6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWljb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1pY29uLmJyb2FkIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC10aXRsZS1jb3VudC1jb250YWluZXIuYnJvYWQge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtbmFtZSB7XFxuICAgICAgICB3aWR0aDogMTU1cHg7XFxuICAgICAgICBtYXgtd2lkdGg6IDE1NXB4O1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5jb3VudC10b2RvcyB7XFxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgd2lkdGg6IDI5cHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICBjb2xvcjogI2M1YzVjNTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1idG4uYnJvYWQge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6ICM5OTk5OTk7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1idG46Zm9jdXMge1xcbiAgICAgICAgICBjb2xvcjogIzZlNmU2ZTsgfVxcbiAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIElucHV0ICovXFxuICAgIC8qIFN1Ym1pdCBidXR0b24gKi8gfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0uYnJvYWQge1xcbiAgICAgIHdpZHRoOiA2OHB4O1xcbiAgICAgIG1hcmdpbjogMDsgfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI25ldy1wcm9qZWN0IHtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2YjZiNmI7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgcGFkZGluZzogOXB4IDA7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBjb2xvcjogIzZiNmI2YjtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBmb250LWZhbWlseTogXFxcIlNlblxcXCIsIHNhbnMtc2VyaWY7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI25ldy1wcm9qZWN0LmJyb2FkIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI25ldy1wcm9qZWN0OmZvY3VzIHtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzhlZjdkOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI25ldy1wcm9qZWN0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxuICAgICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Qge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiAwcHg7XFxuICAgICAgbGVmdDogMTBweDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogNnB4OyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdC5icm9hZCB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgbGVmdDogNHB4O1xcbiAgICAgICAgcGFkZGluZzogN3B4IDE4cHg7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0IGlvbi1pY29uIHtcXG4gICAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7XFxuICAgICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC41czsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM4ZWY3ZDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmhvdmVyIGlvbi1pY29uIHtcXG4gICAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG5cXG4vKiBNaWRkbGU6IFByb2plY3QgdGl0bGUsIHRvZG8gdGFza3MqL1xcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgbWluLXdpZHRoOiAzNzdweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCAjY2FjYWNhO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggI2NhY2FjYTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCAjY2FjYWNhO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgLyogVXNlciBpbnB1dCB0b2RvIHRhc2tzKi8gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgIG1haW4ge1xcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDsgfSB9XFxuICBtYWluICNwcm9qZWN0LXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAxLjRlbTsgfVxcbiAgbWFpbiAudG9kbyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IGF1dG8gMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImNoZWNrYm94IHRvZG90ZXh0IGJ0blxcXCI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogQ3VzdG9tIG1hZGUgY2hlY2tib3ggd2l0aCBhZnRlciBlbGVtZW50ICovXFxuICAgIC8qIFRleHQgb2YgdGhlIHRvZG8gdGFzayB3aXRoIGRldGFpbHMgKi8gfVxcbiAgICBtYWluIC50b2RvOmhvdmVyIHtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCAjZTRlNGU0O1xcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICNlNGU0ZTQ7XFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICNlNGU0ZTQ7IH1cXG4gICAgbWFpbiAudG9kbzpob3ZlciAuZGVsZXRlLXRvZG8tYnRuIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgYW5pbWF0aW9uOiBhcHBlYXJGcm9tUmlnaHRQcm9qZWN0IDAuM3MgZWFzZS1vdXQgZm9yd2FyZHM7IH1cXG4gICAgbWFpbiAudG9kbyBsYWJlbCB7XFxuICAgICAgZ3JpZC1hcmVhOiBjaGVja2JveDsgfVxcbiAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC43czsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNWM1YzU7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzOyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyIGlvbi1pY29uIHtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXI6aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2UyYjBlOTsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lcjpob3ZlciBpb24taWNvbiB7XFxuICAgICAgICAgIGNvbG9yOiAjZTJiMGU5O1xcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2Utb3V0OyB9XFxuICAgIG1haW4gLnRvZG8gLnRvZG8tY2hlY2tib3gge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgbWFpbiAudG9kbyAudG9kby10ZXh0IHtcXG4gICAgICBncmlkLWFyZWE6IHRvZG90ZXh0O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcbiAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dC5kb25lIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICAgICAgY29sb3I6ICNjNWM1YzUgIWltcG9ydGFudDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0LmRvbmUgLm1lZGl1bS1wcmlvcml0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dC5kb25lIC5oaWdoLXByaW9yaXR5IHtcXG4gICAgICAgICAgY29sb3I6ICNjNWM1YzUgIWltcG9ydGFudDsgfVxcbiAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAudG9kby10aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7IH1cXG4gICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5mcm9tLXByb2plY3QsXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmR1ZS1kYXRlLFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5tZWRpdW0tcHJpb3JpdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmhpZ2gtcHJpb3JpdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLm5vdGUtcHJlc2VuY2Uge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAuZnJvbS1wcm9qZWN0OmVtcHR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5kdWUtZGF0ZTplbXB0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAubWVkaXVtLXByaW9yaXR5OmVtcHR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5oaWdoLXByaW9yaXR5OmVtcHR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5ub3RlLXByZXNlbmNlOmVtcHR5IHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgc3BhbiBpbWcge1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIHRvcDogMnB4O1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHNwYW4ub3ZlcmR1ZS1kYXRlIHtcXG4gICAgICAgICAgY29sb3I6IHJlZDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHNwYW4uaGlnaC1wcmlvcml0eSB7XFxuICAgICAgICAgIGNvbG9yOiAjNzMwMGZmOyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgc3Bhbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgICAgICAgICBjb2xvcjogIzEwNjg3NzsgfVxcbiAgICBtYWluIC50b2RvIC5kZWxldGUtdG9kby1idG4ge1xcbiAgICAgIGdyaWQtYXJlYTogYnRuO1xcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgY29sb3I6ICNkNGQ0ZDQ7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7IH1cXG4gICAgICBtYWluIC50b2RvIC5kZWxldGUtdG9kby1idG46aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICM0OTQwNDA7IH1cXG4gICAgICBtYWluIC50b2RvIC5kZWxldGUtdG9kby1idG46Zm9jdXMge1xcbiAgICAgICAgY29sb3I6ICM5MjkyOTI7IH1cXG4gIG1haW4gaHIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm94LXNoYWRvdzogMCAtMTBweCAxMHB4IC0xMHB4ICM4YzhjOGMgaW5zZXQ7IH1cXG4gIG1haW4gI25ldy10b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBJbnB1dCAqL1xcbiAgICAvKiBTdWJtaXQgYnV0dG9uICovIH1cXG4gICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjbmV3LXRvZG8ge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzZiNmI2YjtcXG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICBwYWRkaW5nOiA5cHggMDtcXG4gICAgICBvdXRsaW5lOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI25ldy10b2RvOmZvY3VzIHtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzhlZjdkOyB9XFxuICAgICAgICBtYWluICNuZXctdG9kby1mb3JtICNuZXctdG9kbzpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbyB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiA2cHg7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbyBpb24taWNvbiB7XFxuICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4O1xcbiAgICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC41czsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAgICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzhlZjdkO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOmhvdmVyIGlvbi1pY29uIHtcXG4gICAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG5cXG4vKiBSaWdodCBzaWRlIG9mIHRoZSBwYWdlICovXFxuI3RvZG8tbWlzYy1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiB0b2RvLW1pc2M7XFxuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgei1pbmRleDogMTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyIHtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgICAgLW1vei1ib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7IH0gfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI3RvZG8tbmFtZS1jaGFuZ2VyLWNvbnRhaW5lcixcXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIsXFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyLFxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI25vdGUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICN0b2RvLW5hbWUtY2hhbmdlci1jb250YWluZXIgI2RhdGUsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI2RhdGUsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI2RhdGUsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNub3RlLWNvbnRhaW5lciAjZGF0ZSB7XFxuICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICN0b2RvLW5hbWUtY2hhbmdlci1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgMDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMnB4IC0ycHggNXB4IC0xcHggI2NhY2FjYTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAtMnB4IC0ycHggNXB4IC0xcHggI2NhY2FjYTtcXG4gICAgYm94LXNoYWRvdzogLTJweCAtMnB4IDVweCAtMXB4ICNjYWNhY2E7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3RvZG8tbmFtZS1jaGFuZ2VyLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgICAgaGVpZ2h0OiA0MHB4OyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjbm90ZS1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0zcHggNHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgIC1tb3otYm94LXNoYWRvdzogLTNweCA0cHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgYm94LXNoYWRvdzogLTNweCA0cHggNXB4IC0ycHggI2NhY2FjYTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjbm90ZS1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICAgIGhlaWdodDogMTYwcHg7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIsXFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyxcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIHtcXG4gICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5LnNlbGVjdGVkLTEsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5sb3ctcHJpb3JpdHkuc2VsZWN0ZWQtMSxcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eS5zZWxlY3RlZC0xLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAubG93LXByaW9yaXR5LnNlbGVjdGVkLTEge1xcbiAgICAgICAgY29sb3I6ICMxMDY4Nzc7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eS5zZWxlY3RlZC0yLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubG93LXByaW9yaXR5LnNlbGVjdGVkLTIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5oaWdoLXByaW9yaXR5LnNlbGVjdGVkLTIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHkuc2VsZWN0ZWQtMixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLmxvdy1wcmlvcml0eS5zZWxlY3RlZC0yLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAuaGlnaC1wcmlvcml0eS5zZWxlY3RlZC0yIHtcXG4gICAgICAgIGNvbG9yOiAjNzMwMGZmOyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5vbm1vdXNlb3Zlcjpob3ZlcixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLm9ubW91c2VvdmVyOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjMTA2ODc3OyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHk6aG92ZXIgfiAubG93LXByaW9yaXR5LFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5OmhvdmVyIH4gLmxvdy1wcmlvcml0eSB7XFxuICAgICAgICBjb2xvcjogIzEwNjg3NzsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAuaGlnaC1wcmlvcml0eTpob3ZlcixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLmhpZ2gtcHJpb3JpdHk6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICM3MzAwZmY7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgaW9uLWljb24sXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIGlvbi1pY29uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNkYXRlLXJlbW92ZXIgaW9uLWljb24sXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI2RhdGUtcmVtb3ZlciBpb24taWNvbiB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogNHB4O1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4OyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjZGF0ZS1yZW1vdmVyIGlvbi1pY29uOmhvdmVyLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI2RhdGUtcmVtb3ZlciBpb24taWNvbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyIC5taXNjLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgY29sb3I6ICM2YjZiNmI7XFxuICAgIHdpZHRoOiAxMjBweDsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjFlbTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyIHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjY2xvc2UtZGV0YWlscy1idG4ge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIHdpZHRoOiA2MnB4OyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNjbG9zZS1kZXRhaWxzLWJ0biBpb24taWNvbiB7XFxuICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgIGNvbG9yOiAjYzVjNWM1O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDdweCAtMTNweCAjY2FjYWNhLCAwcHggNXB4IDEwcHggMHB4ICNjYWNhY2E7XFxuICAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCA3cHggLTEzcHggI2NhY2FjYSwgMHB4IDVweCAxMHB4IDBweCAjY2FjYWNhO1xcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDdweCAtMTNweCAjY2FjYWNhLCAwcHggNXB4IDEwcHggMHB4ICNjYWNhY2E7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjY2xvc2UtZGV0YWlscy1idG4gaW9uLWljb246aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICM2ZTZlNmU7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2NhbGVuZGFyLjc1MDRjODg5ZmMyZDlkNGY1NDAwYmE2OThiMjU0Mzc3LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9lZGl0LjI5MjdmOGRlNDI2OGJhZThmMTFjNGRmZTNhZGM3MmI1LnN2Z1wiOyIsImltcG9ydCBcIi4uL1NDU1Mvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0ICogYXMgTWVudUJ0biBmcm9tIFwiLi9zdHlsZS9tZW51LmpzXCI7XG5pbXBvcnQgKiBhcyBSZXNpemUgZnJvbSBcIi4vc3R5bGUvcmVzaXplLmpzXCI7XG5pbXBvcnQgKiBhcyBQcmlvcml0eSBmcm9tIFwiLi9zdHlsZS9wcmlvcml0eS5qc1wiO1xuaW1wb3J0ICogYXMgQWRkVGFza0J0biBmcm9tIFwiLi90YXNrcy9hZGQuanNcIjtcbmltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9IGZyb20gXCIuL3Rhc2tzL3JlbmRlci5qc1wiO1xuaW1wb3J0ICogYXMgRGVmYXVsdHMgZnJvbSBcIi4vdGFza3MvZGVmYXVsdHMuanNcIjtcbmltcG9ydCAqIGFzIElucHV0IGZyb20gXCIuL3Rhc2tzL2RldGFpbHNJbnB1dC5qc1wiO1xuXG4vLyBTdHlsZVxuTWVudUJ0bi5zaG93UHJvamVjdHMoKTtcblJlc2l6ZS5yZXNwb25zaXZlKCk7XG5Qcmlvcml0eS5zdGFyc0NoYW5nZUNvbG9ycygpO1xuLy8gQXBwIExvZ2ljXG5cbi8vIGRlZmluZSB0YXNrcyBhcnJheSB3aGljaCBpcyB0b2RvbGlzdFxubGV0IGFsbFRhc2tzID0gWy4uLkRlZmF1bHRzLmdldCgpXTtcblxuLy8gSW5pdGlhbCByZW5kZXIgb2YgdGhlIGRlZmF1bHQgdGFza3MgZm9ybSB0YXNrcyBhcnJheVxucmVuZGVyQWxsVGFza3NGcm9tKGFsbFRhc2tzKTtcblxuLy8gQnV0dG9uIHRvIGFkZCB0YXNrIHRvIGEgZGVmaW5lZCBhcnJheVxuLy8gQWxzbyByZXJlbmRlciB0aGUgYXJyYXkgYWZ0ZXIgYWRkaW5nIGEgdGFza1xuQWRkVGFza0J0bi5hZGRUYXNrVG8oYWxsVGFza3MpO1xuXG4vLyBDaGFuZ2UgdGFza3Mgd2hlbiB1c2VyIHR5cGUgc29tZXRoaW5nIHRvIGRldGFpbHMgd2luZG93XG5JbnB1dC5jaGFuZ2VUYXNrT25JbnB1dChhbGxUYXNrcyk7XG4iLCJmdW5jdGlvbiBzaG93UHJvamVjdHMoKSB7XG4gIC8vIE1ha2UgbWVudSBidXR0b24gaW4gdGhlIHRvcCBsZWZ0IGNvcm5lciBkbyB3b3JrIChjaGFuZ2UgcHJvamVjdHMgdG8gd2lkZSBvciBuYXJyb3cpXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwibWVudS1pY29uXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBicm9hZGVuUHJvamVjdENvbnRhaW5lcigpKTtcbn1cblxuZnVuY3Rpb24gYnJvYWRlblByb2plY3RDb250YWluZXIoKSB7XG4gIC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgZnJvbSB0aGUgcGFnZSBhbmQgdG9nZ2xlIGEgY2xhc3MgJ2Jyb2FkJyBvbiBlYWNoXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgZ2V0RWxlbWVudHNUb0Jyb2FkKCkpIHtcbiAgICB0b2dnbGVCcm9hZChlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtaW5pbWl6ZVByb2plY3RDb250YWluZXIoKSB7XG4gIC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgZnJvbSB0aGUgcGFnZSBhbmQgdG9nZ2xlIGEgY2xhc3MgJ2Jyb2FkJyBvbiBlYWNoXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgZ2V0RWxlbWVudHNUb0Jyb2FkKCkpIHtcbiAgICBhZGRCcm9hZChlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRCcm9hZChlbGVtZW50KSB7XG4gIC8vIFJlbW92ZSBjbGFzcyAnYnJvYWQnIGZyb20gYW4gZWxlbWVudFxuICAvLyB0aGlzIGNsYXNzIGNoYW5nZXMgbGVmdC1zaWRlIHBhZ2UgbWVudSBtYWtpbmcgaXQgc21hbGxlclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJicm9hZFwiKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQnJvYWQoZWxlbWVudCkge1xuICAvLyBBZGQvcmVtb3ZlIGNsYXNzICdicm9hZCcgdG8gYW4gZWxlbWVudFxuICAvLyB0aGlzIGNsYXNzIGNoYW5nZXMgbGVmdC1zaWRlIHBhZ2UgbWVudSBtYWtpbmcgaXQgc21hbGxlclxuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJicm9hZFwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudHNUb0Jyb2FkKCkge1xuICAvLyBUYWtlIHNvbWUgRE9NIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2VcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0XCIpO1xuICBsZXQgcHJvamVjdEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1pY29uXCIpO1xuICBsZXQgcHJvamVjdFRpdGxlQ291bnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgIFwicHJvamVjdC10aXRsZS1jb3VudC1jb250YWluZXIgXCJcbiAgKTtcbiAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xuICBsZXQgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWZvcm1cIik7XG4gIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdFwiKTtcbiAgbGV0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1wcm9qZWN0XCIpO1xuXG4gIC8vIFB1dCB0aGVtIGluIHRoZSBhcnJheSBhbmQgcmV0dXJuIGl0XG4gIGxldCBlbGVtZW50cyA9IFtcbiAgICBjb250ZW50LFxuICAgIHByb2plY3RMaXN0LFxuICAgIC4uLnByb2plY3QsXG4gICAgLi4ucHJvamVjdEljb24sXG4gICAgLi4ucHJvamVjdFRpdGxlQ291bnRDb250YWluZXIsXG4gICAgLi4uZGVsZXRlUHJvamVjdEJ0bixcbiAgICBuZXdQcm9qZWN0Rm9ybSxcbiAgICBuZXdQcm9qZWN0LFxuICAgIHN1Ym1pdFByb2plY3QsXG4gIF07XG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IHsgc2hvd1Byb2plY3RzLCBtaW5pbWl6ZVByb2plY3RDb250YWluZXIgfTtcbiIsImZ1bmN0aW9uIHN0YXJzQ2hhbmdlQ29sb3JzKCkge1xuICBhY3RpdmF0ZUZpcnN0U3RhcigpO1xuICBhY3RpdmF0ZVNlY29uZFN0YXIoKTtcbiAgYWN0aXZhdGVUaGlyZFN0YXIoKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVGaXJzdFN0YXIoKSB7XG4gIGdldFN0YXIxKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFjdGl2YXRlU3RhcigxKSk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlU2Vjb25kU3RhcigpIHtcbiAgZ2V0U3RhcjIoKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWN0aXZhdGVTdGFyKDIpKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVUaGlyZFN0YXIoKSB7XG4gIGdldFN0YXIzKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFjdGl2YXRlU3RhcigzKSk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlU3RhcihudW1iZXIpIHtcbiAgLy8gTWFrZSBhIHN0YXIgd2l0aCBhIGNlcnRhaW4gbnVtYmVyIGNoYW5nZSBpdHMgc3R5bGVcbiAgLy8gTnVtYmVyIGNhbiBiZSAxLCAyIG9yIDMgYmVjYXVzZSB0aGVyZSBhcmUgYSB0b3RhbCBvZiAzIHN0YXJcbiAgaWYgKG51bWJlciA8IDEgfHwgbnVtYmVyID4gMylcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBDYW4ndCBhY3RpdmF0ZSBzdGFyICR7bnVtYmVyfSBpbiBhY3RpdmF0ZVN0YXIoKS4gUG9zc2libGUgdmFsdWVzOiAxLCAyLCAzYFxuICAgICk7XG4gIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgY2FzZSAxOlxuICAgICAgb3V0bGluZVNlY29uZFN0YXIoKTtcbiAgICAgIG91dGxpbmVUaGlyZFN0YXIoKTtcbiAgICAgIHJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzKCk7XG4gICAgICBhZGRNZWRpdW1Pbm1vdXNlb3ZlcigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgZmlsbFNlY29uZFN0YXIoKTtcbiAgICAgIGFkZENvbG9yVHdvU3RhcnMoKTtcbiAgICAgIG91dGxpbmVUaGlyZFN0YXIoKTtcbiAgICAgIGRlY29sb3JUaGlyZFN0YXIoKTtcbiAgICAgIGFkZE1lZGl1bU9ubW91c2VvdmVyKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBmaWxsU2Vjb25kU3RhcigpO1xuICAgICAgZmlsbFRoaXJkU3RhcigpO1xuICAgICAgYWRkQ29sb3JUaHJlZVN0YXJzKCk7XG4gICAgICByZW1vdmVNZWRpdW1Pbm1vdXNlb3ZlcigpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0VDT05EIFNUQVJcbmZ1bmN0aW9uIGZpbGxTZWNvbmRTdGFyKCkge1xuICAvLyBHZXQgdGhlIGNoaWxkIG9mIHRoZSBwcmlvcml0eSBhbmQgbWFrZSBpdCBmaWxsZWQgc3RhclxuICBnZXRTdGFyMigpLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdGFyXCIpO1xufVxuXG5mdW5jdGlvbiBvdXRsaW5lU2Vjb25kU3RhcigpIHtcbiAgLy8gR2V0IHRoZSBjaGlsZCBvZiB0aGUgcHJpb3JpdHkgYW5kIG1ha2UgaXQgb3V0bGluZWQgc3RhclxuICBnZXRTdGFyMigpLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdGFyLW91dGxpbmVcIik7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFRISVJEIFNUQVJcblxuZnVuY3Rpb24gZmlsbFRoaXJkU3RhcigpIHtcbiAgLy8gR2V0IHRoZSBjaGlsZCBvZiB0aGUgcHJpb3JpdHkgYW5kIG1ha2UgaXQgZmlsbGVkIHN0YXJcbiAgZ2V0U3RhcjMoKS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic3RhclwiKTtcbn1cblxuZnVuY3Rpb24gb3V0bGluZVRoaXJkU3RhcigpIHtcbiAgLy8gR2V0IHRoZSBjaGlsZCBvZiB0aGUgcHJpb3JpdHkgYW5kIG1ha2UgaXQgb3V0bGluZWQgc3RhclxuICBnZXRTdGFyMygpLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdGFyLW91dGxpbmVcIik7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIZWxwZXJzXG5cbmZ1bmN0aW9uIHJlbW92ZU1lZGl1bU9ubW91c2VvdmVyKCkge1xuICAvLyBTZWNvbmQgc3RhciBoYXMgYSBjbGFzcyBcIm9ubW91c2VvdmVyXCIgd2l0aCBhIGhvdmVyIGVmZmVjdFxuICAvLyBXaGVuIHRoZSAzcmQgc3RhciBpcyBjaG9zZW4gcmVtb3ZlIHRoaXMgaG92ZXIgZWZmZWN0IGZyb20gdGhlIDJuZCBzdGFyXG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LnJlbW92ZShcIm9ubW91c2VvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBhZGRNZWRpdW1Pbm1vdXNlb3ZlcigpIHtcbiAgLy8gU2Vjb25kIHN0YXIgaGFzIGEgY2xhc3MgXCJvbm1vdXNlb3ZlclwiIHdpdGggYSBob3ZlciBlZmZlY3RcbiAgLy8gV2hlbiB0aGUgMXN0IE9SIDJuZCBzdGFyIGlzIGNob3NlbiBhZGQgdGhpcyBob3ZlciBlZmZlY3QgdG8gdGhlIDJuZCBzdGFyXG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LmFkZChcIm9ubW91c2VvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBzdGFySXNPdXRsaW5lZChzdGFyKSB7XG4gIHJldHVybiBzdGFyLmNoaWxkcmVuWzBdLmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT09IFwic3Rhci1vdXRsaW5lXCI7XG59XG5cbmZ1bmN0aW9uIGFkZENvbG9yVHdvU3RhcnMoKSB7XG4gIHJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzKCk7XG4gIGdldFN0YXIxKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTFcIik7XG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTFcIik7XG59XG5mdW5jdGlvbiBhZGRDb2xvclRocmVlU3RhcnMoKSB7XG4gIHJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzKCk7XG4gIGdldFN0YXIxKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTJcIik7XG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTJcIik7XG4gIGdldFN0YXIzKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTJcIik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzKCkge1xuICBkZWNvbG9yRmlyc3RTdGFyKCk7XG4gIGRlY29sb3JTZWNvbmRTdGFyKCk7XG4gIGRlY29sb3JUaGlyZFN0YXIoKTtcbn1cblxuZnVuY3Rpb24gZGVjb2xvckZpcnN0U3RhcigpIHtcbiAgZ2V0U3RhcjEoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMVwiKTtcbiAgZ2V0U3RhcjEoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMlwiKTtcbn1cbmZ1bmN0aW9uIGRlY29sb3JTZWNvbmRTdGFyKCkge1xuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC0xXCIpO1xuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC0yXCIpO1xufVxuZnVuY3Rpb24gZGVjb2xvclRoaXJkU3RhcigpIHtcbiAgZ2V0U3RhcjMoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMVwiKTtcbiAgZ2V0U3RhcjMoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMlwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcjEoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXItMVwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcjIoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXItMlwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcjMoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXItM1wiKTtcbn1cblxuZXhwb3J0IHsgc3RhcnNDaGFuZ2VDb2xvcnMsIGFjdGl2YXRlU3RhciB9O1xuIiwiaW1wb3J0IHsgZ2V0Q29tcHV0ZWREaXNwbGF5IH0gZnJvbSBcIi4uL3Rhc2tzL2RldGFpbHNUb2dnbGUuanNcIjtcbmltcG9ydCB7IG1pbmltaXplUHJvamVjdENvbnRhaW5lciB9IGZyb20gXCIuL21lbnUuanNcIjtcblxuZnVuY3Rpb24gcmVzcG9uc2l2ZSgpIHtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICAvLyBSZXNpemluZyB3aW5kb3cgbWFrZXMgbWlkZGxlIGNvbHVtbiBmaXRcbiAgd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDI0cHgpXCIpLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAvLyBJZiBzY3JlZW4gaXMgbmFycm93ZXIgdGhhbiAxMDI0cHggYW5kIGRldGFpbHMgYXJlIG9wZW4gKHJpZ2h0IHNpZGUgb2YgdGhlIHBhZ2UpXG4gICAgLy8gdGhhbiBtaW5pbWl6ZSBsZWZ0IHNpZGUgYW5kIG1ha2UgXCJtYWluXCIgZml0IHRoZSB3aG9sZSBzZWNvbmQgY29sdW1uXG4gICAgaWYgKHNjcmVlbkxlc3NUaGVuMTAyNCgpICYmIGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gICAgICBtaW5pbWl6ZVByb2plY3RDb250YWluZXIoKTtcbiAgICAgIC8vIERvZXNuJ3QgbWF0dGVyIHRoZSBzaXplIG9mIHRoZSBzY3JlZW4sXG4gICAgICAvLyBpZiBkZXRhaWxzIGFyZSBjbG9zZWQgJ21haW4nIGZpdCB0aGUgd2hvbGUgc2Vjb25kIGNvbHVtblxuICAgIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWREaXNwbGF5KGRldGFpbHMpID09PSBcIm5vbmVcIikge1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzRcIjtcbiAgICAgIC8vIEVsc2UgZm9yIGUuZy4gd2hlbiBzY3JlZW4gYXJlIHdpZGVyIHRoZW4gMTAyNHB4IGFuZFxuICAgICAgLy8gZGV0YWlscyBhcmUgb3BlbiwgdGhlbiBtYWluIGlzIHRoZSBjb2x1bW4gaW4gdGhlIG1pZGRsZVxuICAgIH0gZWxzZSB7XG4gICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvM1wiO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNjcmVlbkxlc3NUaGVuMTAyNCgpIHtcbiAgLy8gQ2hlY2sgaWYgc2NyZWVuIGlzIGxlc3MgdGhlbiAxMDI0cHggd2lkZVxuICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDI0cHgpXCIpLm1hdGNoZXM7XG59XG5cbi8vIFdoZW4gcmVzaXppbmcgd2luZG93IG1pZGRsZSBjb2x1bW4gcmVzaXplIGl0c2VsZiB0byBiZSByZXNwb25zaXZlXG5leHBvcnQgeyByZXNwb25zaXZlLCBzY3JlZW5MZXNzVGhlbjEwMjQgfTtcbiIsImltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5cbmZ1bmN0aW9uIGFkZFRhc2tUbyhhcnIpIHtcbiAgY29uc3Qgc3VibWl0VG9kb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0LXRvZG9cIik7XG5cbiAgc3VibWl0VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gUHJldmVudCBkZWZhdWx0IHN1Ym1pdCBiZWhhdmlvclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gR2V0IHRhc2sgbmFtZSBmcm9tIFVzZXIgYW5kIGFkZCBpdCB0byB0YXNrcyBhcnJheVxuICAgIHB1c2hUYXNrVG8oYXJyKTtcbiAgICBjb25zb2xlLnRhYmxlKGFycik7XG4gICAgLy8gUmVyZW5kZXIgYXJyYXlcbiAgICByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKTtcblxuICAgIHJldHVybiBhcnI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwdXNoVGFza1RvKGFycikge1xuICAvLyBQdXNoIHRhc2sgdG8gYXJyYXlcbiAgYXJyLnB1c2goZ2V0VGFzaygpKTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gZ2V0VGFzaygpIHtcbiAgLy8gR2V0IHVzZXIgaW5wdXQgdmFsdWUsIHNhdmUgaXRcbiAgbGV0IHRhc2sgPSB0YXNrRmFjdG9yeSh7IHRpdGxlOiBnZXRJbnB1dFZhbHVlKCkgfSk7XG4gIC8vIGFuZCBjbGVhciBpbnB1dFxuICBjbGVhclRhc2tJbnB1dCgpO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgLy8gR2V0IHVzZXIgaW5wdXQgdmFsdWUgYXMgTmV3IFRhc2sgOiBTVFJJTkdcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG9cIikudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0lucHV0KCkge1xuICAvLyBDbGVhciB1c2VyIGlucHV0XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG9cIikudmFsdWUgPSBcIlwiO1xufVxuXG5leHBvcnQgeyBnZXRUYXNrLCBhZGRUYXNrVG8gfTtcbiIsImltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuXG5mdW5jdGlvbiBnZXQoKSB7XG4gIC8vIFRoaXMgZnVuY3RpbiBzaW1wbHkgY3JlYXRlIGFuIGFycmF5IHdpdGggZGVmYXVsdCB0YXNrcyBpbiBpdFxuICBsZXQgYWxsVGFza3MgPSBbXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTGVhcm4gc3R1ZmZcIixcbiAgICAgIGZyb206IFwiUHJvamVjdCAyXCIsXG4gICAgICBkYXRlOiBcIjE1LjAzLjIwMjBcIixcbiAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgbm90ZTogXCJzb21ldGhpbmdcIixcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJMZWFybiBlbmdsaXNoXCIsXG4gICAgICBkYXRlOiBcIjEwLjAxLjIwMjBcIixcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJMZWFybiBzdHVmZlwiLFxuICAgICAgZnJvbTogXCJQcm9qZWN0IDJcIixcbiAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgIG5vdGU6IFwic29tZXRoaW5nXCIsXG4gICAgICBkb25lOiB0cnVlLFxuICAgIH0pLFxuICBdO1xuXG4gIHJldHVybiBhbGxUYXNrcztcbn1cblxuZXhwb3J0IHsgZ2V0IH07XG4iLCJpbXBvcnQgeyByZW5kZXJBbGxUYXNrc0Zyb20gfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcbmltcG9ydCAqIGFzIERldGFpbHNUb2dnbGUgZnJvbSBcIi4vZGV0YWlsc1RvZ2dsZS5qc1wiO1xuXG5mdW5jdGlvbiBkZWxldGVUYXNrc0Zyb20oYXJyKSB7XG4gIC8vIFRha2UgdGhlIGNvbGxjZXRpb24gb2YgYWxsIGRlbGV0ZSBjcm9zcyBidXR0b25zIGZyb20gdGFza3MgYnkgY2xhc3MgbmFtZVxuICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtdG9kby1idG5cIik7XG4gIC8vIExvb3AgdGhyb3VnaCBjb2xsZWN0aW9uIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBidXR0b25cbiAgZm9yIChsZXQgYnV0dG9uIG9mIGJ1dHRvbnMpIHtcbiAgICBkZWxldGVCdG5SZW1vdmVUYXNrKGJ1dHRvbiwgYXJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVCdG5SZW1vdmVUYXNrKGJ1dHRvbiwgYXJyKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIGFzc2lnbiBFdmVudCBsaXN0ZW5lciB0byBidXR0b25zXG4gIC8vIHRvIHJlbW92ZSBwYXJ0aWN1bGFyIHRhc2tzIGZyb20gcGFnZVxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gZ2V0IElkIG9mIGEgYnV0dG9uIHRvIHdoaWNoIGxpc3RlbmVyIGlzIGFzc2lnbmVkXG4gICAgbGV0IGJ0bklkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgIC8vIGdldCBvbmx5IG51bWJlciBhZnRlciB0aGUgaHlwaGVuIGZyb20gSWRcbiAgICBsZXQgbnVtYmVyID0gYnRuSWQuc3BsaXQoXCItXCIpWzFdO1xuICAgIC8vIEJlZm9yZSByZW1vdmluZyBhbiBpdGVtIG1ha2Ugc3VyZSB0byBjbG9zZSBpdHMgZGV0YWlsc1xuICAgIGNsb3NlRGV0YWlsc09mRGVsZXRlZFRhc2sobnVtYmVyKTtcbiAgICAvLyBSZW1vdmUgaXRlbSBmcm9tIHRoZSBhcnJheSBieSB0aGF0IG51bWJlclxuICAgIGFyci5zcGxpY2UobnVtYmVyLCAxKTtcbiAgICAvLyBSZXJlbmRlciBhcnJheVxuICAgIHJlbmRlckFsbFRhc2tzRnJvbShhcnIpO1xuICAgIC8vIEF2b2lkIGZpcmluZyBwYXJlbnQgZWxlbWVudCBsaXN0ZW5lciBhZnRlciBjbGlja2luZyBvbiB0aGUgYnV0dG9uXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRGV0YWlsc09mRGVsZXRlZFRhc2sobnVtYmVyKSB7XG4gIC8vIEJlZm9yZSByZW1vdmluZyBhbiBpdGVtIG1ha2Ugc3VyZSBoaXMgZGV0YWlscyBhcmUgbm90IHNob3duXG4gIC8vIElmIHRoZXkgYXJlIHRoZW4gaGlkZSB0aGVtXG4gIGlmIChEZXRhaWxzVG9nZ2xlLmdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpID09PSBudW1iZXIpXG4gICAgRGV0YWlsc1RvZ2dsZS5oaWRlRGV0YWlscygpO1xufVxuXG5leHBvcnQgeyBkZWxldGVUYXNrc0Zyb20gfTtcbiIsImltcG9ydCAqIGFzIERldGFpbHNUb2dnbGUgZnJvbSBcIi4vZGV0YWlsc1RvZ2dsZS5qc1wiO1xuaW1wb3J0IHsgYWN0aXZhdGVTdGFyIH0gZnJvbSBcIi4uL3N0eWxlL3ByaW9yaXR5LmpzXCI7XG5pbXBvcnQgeyByZW5kZXJBbGxUYXNrc0Zyb20gfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcblxuZnVuY3Rpb24gcHV0VGFza0luZm9Ub0lucHV0KHRhc2spIHtcbiAgLy8gRnVuY3Rpb24gdG8gcHV0IGluZm8gZnJvbSB0YXNrcyBpbiBpbnB1dHMgd2hlbiBkZXRhaWxzIGFyZSBzaG93blxuICBzZXROYW1lKHRhc2sudGl0bGUpO1xuICBzZXREYXRlKHRhc2suZGF0ZSk7XG4gIHNldFBpb3JpdHkodGFzay5wcmlvcml0eSk7XG4gIHNldE5vdGUodGFzay5ub3RlKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFza09uSW5wdXQoYXJyKSB7XG4gIC8vIENoYW5nZSBhIHRhc2sgd2l0aCBpbnB1dCBmcm9tIERldGFpbHMgV2luZG93XG4gIGNoYW5nZVRpdGxlT25JbnB1dChhcnIpO1xuICBjaGFuZ2VEYXRlT25JbnB1dChhcnIpO1xuICBjaGFuZ2VQcmlvcml0eU9uSW5wdXQoYXJyKTtcbiAgY2hhbmdlTm90ZU9uSW5wdXQoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGl0bGVPbklucHV0KGFycikge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbmFtZS1jaGFuZ2VyXCIpO1xuXG4gIGlucHV0Lm9uaW5wdXQgPSAoKSA9PiBjaGFuZ2VUaXRsZShhcnIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUaXRsZShhcnIpIHtcbiAgLy8gZ2V0IG51bWJlciBvZiB0YXNrIGZyb20gZGV0YWlsc1xuICBsZXQgdGFza051bWJlciA9IERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCk7XG4gIC8vIFVzZSB0aGlzIG51bWJlciB0byBnZXQgdG8gdGFzay50aXRsZSBpbiBhcnJheVxuICBsZXQgdGFzayA9IGFyclt0YXNrTnVtYmVyXTtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW5hbWUtY2hhbmdlclwiKTtcbiAgLy8gVGFzayB0aXRsZSBpcyBub3cgdXNlciBpbnB1dCB2YWx1ZVxuICB0YXNrLnRpdGxlID0gaW5wdXQudmFsdWU7XG4gIC8vIHJlcmVuZGVyIHRvIHNlZSB0aGUgY2hhbmdlc1xuICByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRGF0ZU9uSW5wdXQoYXJyKSB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcblxuICBpbnB1dC5vbmlucHV0ID0gKCkgPT4gY2hhbmdlRGF0ZShhcnIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VEYXRlKGFycikge1xuICAvLyBnZXQgbnVtYmVyIG9mIHRhc2sgZnJvbSBkZXRhaWxzXG4gIGxldCB0YXNrTnVtYmVyID0gRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKTtcbiAgLy8gVXNlIHRoaXMgbnVtYmVyIHRvIGdldCB0byB0YXNrLmRhdGUgaW4gYXJyYXlcbiAgbGV0IHRhc2sgPSBhcnJbdGFza051bWJlcl07XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcbiAgLy8gVGFzayBkYXRlIGlzIG5vdyBmb3JtYXR0ZWQgZGF0ZSBpbnB1dCB2YWx1ZVxuICB0YXNrLmRhdGUgPSBmb3JtYXREYXRlMihpbnB1dC52YWx1ZSk7XG4gIC8vIHJlcmVuZGVyIHRvIHNlZSB0aGUgY2hhbmdlc1xuICByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHlPbklucHV0KGFycikge1xuICBsZXQgc3RhcnMgPSBbXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTFcIiksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTJcIiksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTNcIiksXG4gIF07XG5cbiAgZm9yIChsZXQgc3RhciBvZiBzdGFycykge1xuICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNoYW5nZVByaW9yaXR5KGFycikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KGFycikge1xuICAvLyBnZXQgbnVtYmVyIG9mIHRhc2sgZnJvbSBkZXRhaWxzXG4gIGxldCB0YXNrTnVtYmVyID0gRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKTtcbiAgLy8gVXNlIHRoaXMgbnVtYmVyIHRvIGdldCB0byB0YXNrLmRhdGUgaW4gYXJyYXlcbiAgbGV0IHRhc2sgPSBhcnJbdGFza051bWJlcl07XG4gIGxldCBpbnB1dCA9IGdldFByaW9yaXR5SW5wdXQoKTtcbiAgLy8gVGFzayBkYXRlIGlzIG5vdyBmb3JtYXR0ZWQgZGF0ZSBpbnB1dCB2YWx1ZVxuICB0YXNrLnByaW9yaXR5ID0gaW5wdXQ7XG4gIC8vIHJlcmVuZGVyIHRvIHNlZSB0aGUgY2hhbmdlc1xuICByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJpb3JpdHlJbnB1dCgpIHtcbiAgbGV0IHN0YXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTFcIik7XG5cbiAgaWYgKHN0YXIxLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkLTFcIikpIHtcbiAgICByZXR1cm4gXCJtZWRpdW1cIjtcbiAgfSBlbHNlIGlmIChzdGFyMS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZC0yXCIpKSB7XG4gICAgcmV0dXJuIFwiaGlnaFwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcImxvd1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU5vdGVPbklucHV0KGFycikge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGUtY2hhbmdlclwiKTtcblxuICBpbnB1dC5vbmlucHV0ID0gKCkgPT4gY2hhbmdlTm90ZShhcnIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VOb3RlKGFycikge1xuICAvLyBnZXQgbnVtYmVyIG9mIHRhc2sgZnJvbSBkZXRhaWxzXG4gIGxldCB0YXNrTnVtYmVyID0gRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKTtcbiAgLy8gVXNlIHRoaXMgbnVtYmVyIHRvIGdldCB0byB0YXNrLm5vdGUgaW4gYXJyYXlcbiAgbGV0IHRhc2sgPSBhcnJbdGFza051bWJlcl07XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1jaGFuZ2VyXCIpO1xuICAvLyBUYXNrIE5vdGUgaXMgbm93IGZvcm1hdHRlZCBOb3RlIGlucHV0IHZhbHVlXG4gIHRhc2subm90ZSA9IGlucHV0LnZhbHVlO1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTZXQgaW5wdXRcbmZ1bmN0aW9uIHNldE5hbWUobmFtZSkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbmFtZS1jaGFuZ2VyXCIpLnZhbHVlID0gbmFtZTtcbn1cblxuZnVuY3Rpb24gc2V0RGF0ZShkYXRlKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZSA9IGZvcm1hdERhdGUoZGF0ZSk7XG4gIGZvcm1hdERhdGUoZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHNldFBpb3JpdHkobGV2ZWwpIHtcbiAgaWYgKGxldmVsID09PSBcImhpZ2hcIikge1xuICAgIGFjdGl2YXRlU3RhcigzKTtcbiAgfSBlbHNlIGlmIChsZXZlbCA9PT0gXCJtZWRpdW1cIikge1xuICAgIGFjdGl2YXRlU3RhcigyKTtcbiAgfSBlbHNlIGlmIChsZXZlbCA9PT0gXCJsb3dcIikge1xuICAgIGFjdGl2YXRlU3RhcigxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXROb3RlKG5vdGUpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlLWNoYW5nZXJcIikudmFsdWUgPSBub3RlO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgLy8gSWYgZGF0ZSBpcyB1bmRlZmluZWQgeWV0LCB0aGVuIHJldHVybiBub3RoaW5nIFwiXCJcbiAgaWYgKCFkYXRlKSByZXR1cm4gXCJcIjtcbiAgLy8gRGF0ZSBmb3JtYXR0aW5nOiBmcm9tIFwiZGQubW0ueXl5eVwiIHRvIFwieXl5eS1NTS1kZFwiXG4gIGxldCBkYXkgPSBkYXRlLnNwbGl0KFwiLlwiKVswXTtcbiAgbGV0IG1vbnRoID0gZGF0ZS5zcGxpdChcIi5cIilbMV07XG4gIGxldCB5ZWFyID0gZGF0ZS5zcGxpdChcIi5cIilbMl07XG5cbiAgbGV0IGZvcm1hdHRlZCA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gIHJldHVybiBmb3JtYXR0ZWQ7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUyKGRhdGUpIHtcbiAgLy8gSWYgZGF0ZSBpcyB1bmRlZmluZWQgeWV0LCB0aGVuIHJldHVybiBub3RoaW5nIFwiXCJcbiAgaWYgKCFkYXRlKSByZXR1cm4gXCJcIjtcbiAgLy8gRGF0ZSBmb3JtYXR0aW5nOiBmcm9tICBcInl5eXktTU0tZGRcIiB0byBcImRkLm1tLnl5eXlcIlxuICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi1cIilbMl07XG4gIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCItXCIpWzFdO1xuICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCItXCIpWzBdO1xuXG4gIGxldCBmb3JtYXR0ZWQgPSBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn1gO1xuICByZXR1cm4gZm9ybWF0dGVkO1xufVxuXG5leHBvcnQgeyBwdXRUYXNrSW5mb1RvSW5wdXQsIGNoYW5nZVRhc2tPbklucHV0IH07XG4iLCJpbXBvcnQgeyBzY3JlZW5MZXNzVGhlbjEwMjQgfSBmcm9tIFwiLi4vc3R5bGUvcmVzaXplLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzSW5wdXQgZnJvbSBcIi4vZGV0YWlsc0lucHV0LmpzXCI7XG5cbmZ1bmN0aW9uIHRhc2tzVG9nZ2xlRGV0YWlscyhhcnIpIHtcbiAgLy8gTWFrZSB0b2RvIHRhc2tzIHNob3cgZGV0YWlscyBvbiBjbGljayAoZnJvbSByaWdodCBzaWRlKVxuICB0b2RvTGlzdFNob3dEZXRhaWxzKGFycik7XG4gIC8vIE1ha2UgYnV0dG9uIGluIGRldGFpbHMgaW50ZXJhY3Q6IGhpZGUgZGV0YWlsc1xuICBBcnJvd0hpZGVEZXRhaWxzKCk7XG59XG5cbmZ1bmN0aW9uIHRvZG9MaXN0U2hvd0RldGFpbHMoYXJyKSB7XG4gIC8vIE1ha2UgdG9kbyBsaXN0cyBzaG93IGRldGFpbHMgb25jbGlja1xuICBsZXQgdGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb1wiKTtcblxuICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIGdldCBJZCBvZiBhIHRhc2sgdG8gd2hpY2ggbGlzdGVuZXIgaXMgYXNzaWduZWRcbiAgICAgIGxldCB0YXNrSWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICAvLyBnZXQgb25seSBudW1iZXIgZnJvbSBJZCBhZnRlciB0aGUgaHlwaGVuXG4gICAgICBsZXQgbnVtYmVyID0gdGFza0lkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAgIC8vIFBhc3MgYSBudW1iZXIgb2YgdGhlIGNsaWNrZWQgdGFzayB0byBkZXRhaWxzXG4gICAgICB0b2dnbGVEZXRhaWxzKG51bWJlcik7XG4gICAgICAvLyBQdXQgaW5mbyBmcm9tIHRhc2tzIGluIGlucHV0cyB3aGVuIGRldGFpbHMgYXJlIHNob3duXG4gICAgICBEZXRhaWxzSW5wdXQucHV0VGFza0luZm9Ub0lucHV0KGFycltudW1iZXJdKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBBcnJvd0hpZGVEZXRhaWxzKCkge1xuICAvLyBNYWtlIEFycm93IGhpZGUgRGV0YWlscyBvbmNsaWNrXG4gIGxldCBhcnJvd0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZGV0YWlscy1idG5cIik7XG4gIGFycm93QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlRGV0YWlscyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURldGFpbHMobnVtYmVyKSB7XG4gIGxldCBpZE51bWJlciA9IGdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpO1xuXG4gIC8vIGlmIGRldGFpbHMgYXJlIHZpc2libGUgb24gdGhlIHBhZ2UgQU5EXG4gIC8vIGlmIHVzZXIgY2xpY2tzIG9uIHRoZSBzYW1lIHRhc2sgMnggdGhhbiBoaWRlIGRldGFpbHNcbiAgaWYgKGRldGFpbHNBcmVTaG93bigpICYmIGlkTnVtYmVyID09PSBudW1iZXIpIHtcbiAgICBoaWRlRGV0YWlscygpO1xuICB9IGVsc2Uge1xuICAgIHNob3dEZXRhaWxzKG51bWJlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGV0YWlsc0FyZVNob3duKCkge1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgLy8gQXJlIGRldGFpbHMgc2hvd24gb24gdGhlIHBhZ2U/IFJldHVybiBib29sZWFuOlxuICByZXR1cm4gZ2V0Q29tcHV0ZWREaXNwbGF5KGRldGFpbHMpICE9PSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCkge1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgLy8gVGFrZSBpZCBvZiB0aGUgZGV0YWlscyBjaGlsZFxuICBsZXQgZGV0YWlsc0NvbnRhaW5lcklkID0gZGV0YWlscy5jaGlsZHJlblswXS5pZDtcbiAgLy8gVGFrZSBhIG51bWJlciBmcm9tIHRoYXQgaWQgYW5kIHJldHVybiBpdFxuICBsZXQgaWROdW1iZXIgPSBkZXRhaWxzQ29udGFpbmVySWQuc3BsaXQoXCItXCIpWzJdO1xuICByZXR1cm4gaWROdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHNldERldGFpbHNJZFRvKG51bWJlcikge1xuICAvLyBGaXJzdCBtYWtlIGRldGFpbHMgSUQgdGhlIHNhbWUgYXMgaW5pdGlhbCBJRCAod2l0aCBubyBudW1iZXJzKVxuICAvLyBBbm90aGVyIHdvcmRzIHJlbW92ZSBhbGwgZXhpc3RpbmcgbnVtYmVycyBmcm9tIGl0XG4gIG1ha2VEZXRhaWxzRGVmYXVsdCgpO1xuICAvLyBUaGVuIHBhc3MgYSBudW1iZXIgdG8gaXRcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGRldGFpbHMuY2hpbGRyZW5bMF0uaWQgKz0gYC0ke251bWJlcn1gO1xufVxuXG5mdW5jdGlvbiBoaWRlRGV0YWlscygpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIGhpZGUoZGV0YWlscyk7XG4gIC8vIFdoZW4gZGV0YWlscyBhcmUgaGlkZGVuIHRoZSBtYWluIGNvbHVtbiB3aWxsIGJlIGJyb2FkZXJcbiAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzRcIjtcbiAgLy8gV2hlbiBkZXRhaWxzIGFyZSBoaWRkZW4gdGhlaXIgZGV0YWlscy1jb250YWluZXItSUQgd2lsbCBiZSBkZWZhdWx0IHdpdGggbm8gbnVtYmVyXG4gIG1ha2VEZXRhaWxzRGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBzaG93RGV0YWlscyhudW1iZXIpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIHNob3dBc0ZsZXgoZGV0YWlscyk7XG4gIC8vIEFsc28gc2V0IG5ldyBJRCBudW1iZXIgdG8gZGV0YWlscyBjb250YWluZXIgKG9ubHkgaWYgaXQgZG9lc24ndCBoYXZlIElEIGFscmVhZHkpXG4gIHNldERldGFpbHNJZFRvKG51bWJlcik7XG4gIC8vIElmIHNjcmVlbiBpcyBiaWdnZXIgdGhhbiAxMDI0IHRoZW4gbWFrZSBcIm1haW5cIiB0aGUgbWlkZGxlIGNvbHVtbiBvZiAzIGNvbHVtbnNcbiAgaWYgKCFzY3JlZW5MZXNzVGhlbjEwMjQoKSkgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzNcIjtcbn1cblxuZnVuY3Rpb24gbWFrZURldGFpbHNEZWZhdWx0KCkge1xuICAvLyBDaGFuZ2UgSUQgb2YgY2hpbGQgb2YgdGhlIGRldGFpbHMgdG8gZGVmYXVsdCBcImRldGFpbHMtY29udGFpbmVyXCJcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGRldGFpbHMuY2hpbGRyZW5bMF0uaWQgPSBcImRldGFpbHMtY29udGFpbmVyXCI7XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkRGlzcGxheShlbGVtZW50KSB7XG4gIGxldCBjb21wdXRlZERpc3BsYXkgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKTtcbiAgcmV0dXJuIGNvbXB1dGVkRGlzcGxheTtcbn1cblxuZnVuY3Rpb24gc2hvd0FzRmxleChlbGVtZW50KSB7XG4gIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufVxuXG5mdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCB7XG4gIHRhc2tzVG9nZ2xlRGV0YWlscyxcbiAgZ2V0Q29tcHV0ZWREaXNwbGF5LFxuICBnZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIsXG4gIGhpZGVEZXRhaWxzLFxuICBkZXRhaWxzQXJlU2hvd24sXG59O1xuIiwiY29uc3QgdGFza0ZhY3RvcnkgPSBmdW5jdGlvbiAoe1xuICB0aXRsZSA9IFwiXCIsXG4gIGZyb20gPSBcIlwiLFxuICBkYXRlID0gXCJcIixcbiAgcHJpb3JpdHkgPSBcImxvd1wiLFxuICBub3RlID0gXCJcIixcbiAgZG9uZSA9IGZhbHNlLFxufSkge1xuICByZXR1cm4geyB0aXRsZSwgZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUsIGRvbmUgfTtcbn07XG5cbmV4cG9ydCB7IHRhc2tGYWN0b3J5IH07XG4iLCJpbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4uLy4uL0lDT05TL2NhbGVuZGFyLnN2Z1wiO1xuaW1wb3J0IE5vdGUgZnJvbSBcIi4uLy4uL0lDT05TL2VkaXQuc3ZnXCI7XG5pbXBvcnQgKiBhcyBEZWxldGVUYXNrQnRucyBmcm9tIFwiLi9kZWxldGUuanNcIjtcbmltcG9ydCAqIGFzIERldGFpbHNUb2dnbGUgZnJvbSBcIi4vZGV0YWlsc1RvZ2dsZS5qc1wiO1xuaW1wb3J0ICogYXMgVGFza0RvbmUgZnJvbSBcIi4vZG9uZS5qc1wiO1xuXG5mdW5jdGlvbiByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKSB7XG4gIC8vIENsZWFyIGFsbCBwcmV2aW91c2x5IHJlbmRlcmVkIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2VcbiAgY2xlYXJDb250ZW50T2YoXCJ0b2Rvc1wiKTtcbiAgLy9SZW5kZXIgZWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSB0byB0aGUgcGFnZVxuICBmb3IgKGxldCBbaW5kZXgsIGl0ZW1dIG9mIGFyci5lbnRyaWVzKCkpIHtcbiAgICByZW5kZXJUYXNrKGluZGV4LCBpdGVtKTtcbiAgfVxuICAvLyBNYWtlIGRlbGV0ZSBidXR0b25zIG9uIGNsaWNrIHJlbW92ZSB0YXNrIHRvIHdoaWNoIHRoZXkgYXJlIGFzc2lnbmVkXG4gIERlbGV0ZVRhc2tCdG5zLmRlbGV0ZVRhc2tzRnJvbShhcnIpO1xuICAvLyBNYWtlIGVhY2ggdGFzayBzaG93IGl0cyBkZXRhaWxzIG9uIGNsaWNrXG4gIERldGFpbHNUb2dnbGUudGFza3NUb2dnbGVEZXRhaWxzKGFycik7XG4gIC8vIE1ha2UgZWFjaCB0YXNrIGNoZWNrYm94IGNvbXBsZXRlIHRhc2sgYnkgY2hhbmdpbmcgaXRzIGNsYXNzXG4gIFRhc2tEb25lLmRvbmVCdG5zKGFycik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudE9mKGlkKSB7XG4gIC8vIFJlbW92ZSBhbnkgY2hpbGQgb2YgdGhlIGVsZW1lbnQgd2l0aCBpZFxuICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2soaSwgdGFzaykge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zXCIpLmFwcGVuZChjcmVhdGVUYXNrKGksIHRhc2spKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhpLCB0YXNrKSB7XG4gIC8vIGNyZWF0ZSBsaXN0IGVsZW1lbnQgd2l0aCBhIGNsYXNzICd0b2RvJ1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kb1wiKTtcbiAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRhc2stJHtpfWApO1xuICAvLyBBcHBlbmQgbGFiZWwsIGlucHV0LCBkaXYgYW5kIGJ1dHRvbiB0byBpdFxuICBsaS5hcHBlbmQoY3JlYXRlTGFiZWwoaSkpO1xuICBsaS5hcHBlbmQoY3JlYXRlSW5wdXQoaSkpO1xuICBsaS5hcHBlbmQoXG4gICAgY3JlYXRlQ29udGVudChcbiAgICAgIHRhc2sudGl0bGUsXG4gICAgICB0YXNrLmZyb20sXG4gICAgICB0YXNrLmRhdGUsXG4gICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgdGFzay5ub3RlLFxuICAgICAgdGFzay5kb25lXG4gICAgKVxuICApO1xuICBsaS5hcHBlbmQoY3JlYXRlRGVsZXRlQnRuKGkpKTtcblxuICByZXR1cm4gbGk7XG59XG5cbi8vIExBQkVMXG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGkpIHtcbiAgLy8gcmV0dXJucyBsYWJlbCBmb3IgXCJ0b2RvY2hlY2tib3hcIiArIGlcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5odG1sRm9yID0gYHRvZG9jaGVja2JveCR7aX1gO1xuICBsYWJlbC5hcHBlbmQoY3JlYXRlRG9uZUljb24oKSk7XG4gIHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRG9uZUljb24oKSB7XG4gIC8vIGNyZWF0ZSBpY29uIGNvbnRhaW5lclxuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pY29uLWNvbnRhaW5lclwiKTtcbiAgLy8gY3JlYXRlIGljb25cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW9uLWljb25cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNoZWNrbWFyay1vdXRsaW5lXCIpO1xuICAvLyBhcHBlbmQgaWNvbiB0byBjb250YWluZXJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBJTlBVVFxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dChpKSB7XG4gIC8vIENyZWF0ZSBpbnB1dCBjaGVja2JveCBlbGVtZW50IGFmdGVyIHRoZSBsYWJlbFxuICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIC8vIEFkZCBhdHRyaWJ1dGVzXG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYHRvZG8tY2hlY2tib3hgKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRvZG9jaGVja2JveC0ke2l9YCk7XG4gIHJldHVybiBjaGVja2JveDtcbn1cblxuLy8gQ09OVEVOVCA9IHRhc2sgdGl0bGUgYW5kIGRldGFpbHNcblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCh0aXRsZSwgZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUsIGRvbmUpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby10ZXh0XCIpO1xuICAvLyBBcHBlbmQgdGl0bGUgYW5kIGRldGFpbHMgdG8gY29udGVudFxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKHRpdGxlKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRGV0YWlscyhmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSkpO1xuICBpZiAoZG9uZSkgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHN0cikge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gc3RyO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURldGFpbHMoZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGV0YWlsc1wiKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVGcm9tKGZyb20pKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVEdWUoZGF0ZSkpO1xuICBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZVByaW9yaXR5KHByaW9yaXR5KSk7XG4gIGRldGFpbHMuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZShub3RlKSk7XG5cbiAgcmV0dXJuIGRldGFpbHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyb20oZnJvbSkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZnJvbS1wcm9qZWN0XCIpO1xuICBpZiAoZnJvbSkgc3Bhbi50ZXh0Q29udGVudCA9IGBGcm9tICR7ZnJvbX1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHVlKGRhdGUpIHtcbiAgbGV0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkdWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkdWUtZGF0ZVwiKTtcbiAgaWYgKGRhdGUpIHtcbiAgICBkdWUuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FsZW5kYXJJbWFnZSgpKTtcbiAgICBkdWUuYXBwZW5kQ2hpbGQoY3JlYXRlU3BhbkZvckRhdGUoZGF0ZSkpO1xuICB9XG4gIHJldHVybiBkdWU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFySW1hZ2UoKSB7XG4gIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIENhbGVuZGFyKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkNhbGVuZGFyXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMnB4XCIpO1xuXG4gIHJldHVybiBpbWc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYW5Gb3JEYXRlKGRhdGUpIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IGBEdWUgJHtkYXRlfWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcmlvcml0eShsZXZlbCkge1xuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYCR7bGV2ZWx9LXByaW9yaXR5YCk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGNyZWF0ZVNwYW5Gb3JQcmlvcml0eShsZXZlbCkpO1xuICByZXR1cm4gcHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYW5Gb3JQcmlvcml0eShsZXZlbCkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpZiAobGV2ZWwgIT09IFwibG93XCIpXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IGAke2NhcGl0YWxpemVGaXJzdExldHRlcihsZXZlbCl9IHByaW9yaXR5YDtcbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm90ZShub3RlKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJub3RlLXByZXNlbmNlXCIpO1xuXG4gIGlmIChub3RlKSB7XG4gICAgLy8gY3JlYXRlIGFuZCBBcHBlbmQgTm90ZSBJY29uXG4gICAgbGV0IG5vdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBub3RlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgTm90ZSk7XG4gICAgbm90ZUljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGVuXCIpO1xuICAgIG5vdGVJY29uLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTJweFwiKTtcblxuICAgIC8vIGNyZWF0ZSBhbmQgYXBwZW5kIHRleHRcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIk5vdGVcIjtcblxuICAgIHNwYW4uYXBwZW5kQ2hpbGQobm90ZUljb24pO1xuICAgIHNwYW4uYXBwZW5kQ2hpbGQodGV4dCk7XG4gIH1cbiAgcmV0dXJuIHNwYW47XG59XG5cbi8vIERFTEVURSBCVVRUT05cbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUJ0bihpKSB7XG4gIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsZXRlLXRvZG8tYnRuXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbGV0ZWJ0bi0ke2l9YCk7XG5cbiAgLy8gY3JlYXRlIGFuIGljb24gYW5kIGFwcGVuZCBpdCB0byBidXR0b25cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW9uLWljb25cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNsb3NlLWNpcmNsZVwiKTtcblxuICBidG4uYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgcmV0dXJuIGJ0bjtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tIH07XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==