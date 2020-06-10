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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n@keyframes rotation {\n  0% {\n    transform: rotate(0); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes appearFromRightProject {\n  0% {\n    left: 30px;\n    opacity: 0; }\n  100% {\n    left: 0px;\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  user-select: none; }\n\nbody,\nhtml {\n  height: 100%;\n  margin: 0; }\n\nbody {\n  font-family: \"Sen\", sans-serif;\n  line-height: 1.25;\n  background: #e9e9e9; }\n\n#content {\n  display: grid;\n  height: 100%;\n  grid-template-rows: 60px auto;\n  grid-template-columns: 300px auto 330px;\n  grid-template-areas: \"header header header\" \"projects main todo-misc\"; }\n  #content.broad {\n    grid-template-columns: 68px auto 330px; }\n\n/* --- TOP of the PAGE : HEADER --- */\nheader {\n  grid-area: header;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  justify-content: center;\n  background: #106877;\n  color: #f4f4f4;\n  font-size: 1.9em;\n  font-weight: 900;\n  padding: 0;\n  width: 100%;\n  font-family: \"Permanent Marker\", cursive;\n  letter-spacing: 5px; }\n  header #menu-icon {\n    margin-right: auto;\n    margin-left: 0;\n    font-size: 48px;\n    cursor: pointer;\n    padding: 10px; }\n    header #menu-icon:hover {\n      background: #0b505c; }\n  header #header-title {\n    margin-right: auto; }\n  header #socials {\n    margin-right: 10px;\n    font-size: 48px;\n    cursor: pointer; }\n\n/* LEFT SIDE OF THE PAGE: PROJECTS */\n#project-container {\n  grid-area: projects;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  -webkit-box-shadow: 8px 0px 5px -4px #cacaca;\n  -moz-box-shadow: 8px 0px 5px -4px #cacaca;\n  box-shadow: 8px 0px 5px -4px #cacaca;\n  /* LEFT-SIDE OF THE PAGE: User Input*/ }\n  #project-container #project-list {\n    width: 280px;\n    max-width: 280px; }\n    #project-container #project-list.broad {\n      width: 68px; }\n    #project-container #project-list .project {\n      margin: 10px 0;\n      padding: 10px;\n      border-radius: 5px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      word-wrap: break-word;\n      white-space: normal;\n      overflow: hidden; }\n      #project-container #project-list .project.broad {\n        margin: 10px 0;\n        padding: 10px 10px 10px 22px;\n        border-radius: 0; }\n      #project-container #project-list .project.active {\n        color: #11998e;\n        font-weight: 900; }\n      #project-container #project-list .project:hover .delete-project-btn {\n        background: #f0f0f0;\n        visibility: visible;\n        animation: appearFromRightProject 0.3s ease-out forwards; }\n      #project-container #project-list .project:not(.active):hover {\n        background: #f0f0f0;\n        cursor: pointer; }\n      #project-container #project-list .project .project-icon {\n        font-size: 24px;\n        margin-right: 20px; }\n        #project-container #project-list .project .project-icon.broad {\n          margin-right: 0; }\n      #project-container #project-list .project .project-title-count-container {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start; }\n        #project-container #project-list .project .project-title-count-container.broad {\n          display: none; }\n      #project-container #project-list .project .project-name {\n        width: 155px;\n        max-width: 155px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n      #project-container #project-list .project .count-todos {\n        font-size: 0.8em;\n        font-weight: 900;\n        margin-left: auto;\n        width: 29px;\n        padding-right: 5px; }\n      #project-container #project-list .project .delete-project-btn {\n        visibility: hidden;\n        position: relative;\n        font-size: 24px;\n        margin-left: auto;\n        outline: none;\n        border: none;\n        background: #fff;\n        color: #c5c5c5;\n        cursor: pointer;\n        transition: color 0.2s; }\n        #project-container #project-list .project .delete-project-btn.broad {\n          display: none; }\n        #project-container #project-list .project .delete-project-btn:hover {\n          color: #999999; }\n        #project-container #project-list .project .delete-project-btn:focus {\n          color: #6e6e6e; }\n  #project-container #new-project-form {\n    width: 250px;\n    max-width: 280px;\n    position: relative;\n    margin-left: 15px;\n    margin-right: 0;\n    display: flex;\n    /* Input */\n    /* Submit button */ }\n    #project-container #new-project-form.broad {\n      width: 68px;\n      margin: 0; }\n    #project-container #new-project-form #new-project {\n      border: 0;\n      border-bottom: 2px solid #6b6b6b;\n      margin-left: 2px;\n      margin-right: auto;\n      padding: 9px 0;\n      outline: 0;\n      font-size: 1em;\n      color: #6b6b6b;\n      background: transparent;\n      font-family: \"Sen\", sans-serif; }\n      #project-container #new-project-form #new-project.broad {\n        display: none; }\n      #project-container #new-project-form #new-project:focus {\n        transition: 0.7s;\n        color: #11998e;\n        border-bottom: 2px solid #38ef7d; }\n        #project-container #new-project-form #new-project:focus::placeholder {\n          transition: 0.7s;\n          color: #11998e; }\n    #project-container #new-project-form #submit-project {\n      background: #fff;\n      display: inline-block;\n      border: none;\n      position: relative;\n      top: 0px;\n      left: 10px;\n      text-decoration: none;\n      font-size: 24px;\n      cursor: pointer;\n      text-align: center;\n      padding: 6px; }\n      #project-container #new-project-form #submit-project.broad {\n        padding: 0;\n        left: 4px;\n        padding: 7px 18px; }\n      #project-container #new-project-form #submit-project ion-icon {\n        --ionicon-stroke-width: 48px;\n        color: #6b6b6b; }\n      #project-container #new-project-form #submit-project:focus {\n        outline: none; }\n      #project-container #new-project-form #submit-project::after {\n        content: \"\";\n        position: absolute;\n        z-index: 0;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: 2px solid #fff;\n        border-radius: 5px;\n        transition: 0.5s; }\n      #project-container #new-project-form #submit-project:hover {\n        color: #11998e; }\n        #project-container #new-project-form #submit-project:hover::after {\n          border: 2px solid #38ef7d;\n          border-radius: 5px; }\n        #project-container #new-project-form #submit-project:hover ion-icon {\n          color: #11998e; }\n\n/* Middle: Project title, todo tasks*/\nmain {\n  grid-area: main;\n  min-width: 377px;\n  background: #fff;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-shadow: 0px 0px 5px 2px #cacaca;\n  -moz-box-shadow: 0px 0px 5px 2px #cacaca;\n  box-shadow: 0px 0px 5px 2px #cacaca;\n  grid-column: 2 / 4;\n  /* User input todo tasks*/ }\n  @media screen and (max-width: 1024px) {\n    main {\n      grid-column: 2 / 4; } }\n  main #project-title {\n    margin-bottom: 20px;\n    font-weight: 900;\n    font-size: 1.4em; }\n  main .todo {\n    position: relative;\n    width: 100%;\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 40px auto 20px;\n    grid-template-areas: \"checkbox todotext btn\";\n    justify-items: start;\n    align-items: center;\n    margin-bottom: 15px;\n    padding: 5px 15px;\n    border: 1px solid lightgrey;\n    border-radius: 5px;\n    cursor: pointer;\n    /* Custom made checkbox with after element */\n    /* Text of the todo task with details */ }\n    main .todo:hover {\n      -webkit-box-shadow: 0px 0px 5px 0px #e4e4e4;\n      -moz-box-shadow: 0px 0px 5px 0px #e4e4e4;\n      box-shadow: 0px 0px 5px 0px #e4e4e4; }\n    main .todo:hover .delete-todo-btn {\n      background: #fff;\n      visibility: visible;\n      animation: appearFromRightProject 0.3s ease-out forwards; }\n    main .todo label {\n      grid-area: checkbox; }\n      main .todo label .todo-icon-container {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 30px;\n        height: 30px;\n        transition: 0.7s; }\n        main .todo label .todo-icon-container::after {\n          visibility: visible;\n          content: \"\";\n          position: absolute;\n          z-index: 0;\n          left: 0;\n          top: 0;\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box;\n          border: 2px solid #c5c5c5;\n          border-radius: 50%;\n          cursor: pointer;\n          transition: 0.7s; }\n        main .todo label .todo-icon-container ion-icon {\n          visibility: hidden;\n          font-size: 24px;\n          --ionicon-stroke-width: 48px; }\n        main .todo label .todo-icon-container:hover::after {\n          border: 2px solid #e2b0e9; }\n        main .todo label .todo-icon-container:hover ion-icon {\n          color: #e2b0e9;\n          visibility: visible;\n          animation: fadeIn 0.5s ease-out; }\n        main .todo label .todo-icon-container.completed:hover::after {\n          border: 2px solid #c5c5c5 !important; }\n        main .todo label .todo-icon-container.completed ion-icon {\n          visibility: visible !important;\n          color: #c5c5c5;\n          animation: none; }\n    main .todo .todo-checkbox {\n      display: none; }\n    main .todo .todo-text {\n      grid-area: todotext;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around; }\n      main .todo .todo-text.done {\n        text-decoration: line-through;\n        color: #c5c5c5 !important; }\n        main .todo .todo-text.done .medium-priority,\n        main .todo .todo-text.done .high-priority,\n        main .todo .todo-text.done .due-date,\n        main .todo .todo-text.done .overdue-date {\n          color: #c5c5c5 !important; }\n      main .todo .todo-text .todo-title {\n        font-size: 1.15em;\n        overflow-wrap: break-word;\n        word-wrap: break-word; }\n      main .todo .todo-text .details {\n        font-size: 0.8em; }\n        main .todo .todo-text .details .from-project,\n        main .todo .todo-text .details .due-date,\n        main .todo .todo-text .details .medium-priority,\n        main .todo .todo-text .details .high-priority,\n        main .todo .todo-text .details .note-presence {\n          margin-right: 12px; }\n        main .todo .todo-text .details .from-project:empty,\n        main .todo .todo-text .details .due-date:empty,\n        main .todo .todo-text .details .medium-priority:empty,\n        main .todo .todo-text .details .high-priority:empty,\n        main .todo .todo-text .details .note-presence:empty {\n          margin-right: 0; }\n        main .todo .todo-text .details span img {\n          position: relative;\n          top: 2px;\n          margin-right: 4px; }\n        main .todo .todo-text .details span.overdue-date {\n          color: red; }\n        main .todo .todo-text .details span.high-priority {\n          color: #7300ff; }\n        main .todo .todo-text .details span.medium-priority {\n          color: #106877; }\n    main .todo .delete-todo-btn {\n      grid-area: btn;\n      visibility: hidden;\n      position: relative;\n      font-size: 24px;\n      outline: none;\n      border: none;\n      background: #fff;\n      color: #d4d4d4;\n      cursor: pointer;\n      transition: color 0.2s; }\n      main .todo .delete-todo-btn:hover {\n        color: #494040; }\n      main .todo .delete-todo-btn:focus {\n        color: #929292; }\n  main hr {\n    position: relative;\n    bottom: 20px;\n    margin-top: auto;\n    margin-right: -20px;\n    margin-left: -20px;\n    height: 10px;\n    border: 0;\n    box-shadow: 0 -10px 10px -10px #8c8c8c inset; }\n  main #new-todo-form {\n    display: flex;\n    /* Input */\n    /* Submit button */ }\n    main #new-todo-form #new-todo {\n      width: 100%;\n      border: 0;\n      border-bottom: 2px solid #6b6b6b;\n      margin-left: 2px;\n      margin-right: auto;\n      padding: 9px 0;\n      outline: 0;\n      font-size: 1em;\n      color: #6b6b6b;\n      background: transparent;\n      font-family: \"Sen\", sans-serif; }\n      main #new-todo-form #new-todo:focus {\n        transition: 0.7s;\n        color: #11998e;\n        border-bottom: 2px solid #38ef7d; }\n        main #new-todo-form #new-todo:focus::placeholder {\n          transition: 0.7s;\n          color: #11998e; }\n    main #new-todo-form #submit-todo {\n      background: #fff;\n      display: inline-block;\n      border: none;\n      position: relative;\n      top: 0px;\n      left: 10px;\n      text-decoration: none;\n      font-size: 24px;\n      cursor: pointer;\n      text-align: center;\n      padding: 6px; }\n      main #new-todo-form #submit-todo ion-icon {\n        --ionicon-stroke-width: 48px;\n        color: #6b6b6b; }\n      main #new-todo-form #submit-todo:focus {\n        outline: none; }\n      main #new-todo-form #submit-todo::after {\n        content: \"\";\n        position: absolute;\n        z-index: 0;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: 2px solid #fff;\n        border-radius: 5px;\n        transition: 0.5s; }\n      main #new-todo-form #submit-todo:hover {\n        color: #11998e; }\n        main #new-todo-form #submit-todo:hover::after {\n          border: 2px solid #38ef7d;\n          border-radius: 5px; }\n        main #new-todo-form #submit-todo:hover ion-icon {\n          color: #11998e; }\n\n/* Right side of the page */\n#todo-misc-container {\n  grid-area: todo-misc;\n  background: #e9e9e9;\n  display: none;\n  flex-direction: column;\n  margin-top: 20px;\n  z-index: 1; }\n  @media screen and (max-width: 1024px) {\n    #todo-misc-container {\n      -webkit-box-shadow: -3px 0px 5px -2px #cacaca;\n      -moz-box-shadow: -3px 0px 5px -2px #cacaca;\n      box-shadow: -3px 0px 5px -2px #cacaca; } }\n  #todo-misc-container #todo-name-changer-container,\n  #todo-misc-container #date-changer,\n  #todo-misc-container #priority-container,\n  #todo-misc-container #note-container {\n    background: #fff;\n    margin-right: 0px;\n    margin-top: 0px;\n    border-bottom: 2px solid lightgrey;\n    border-left: 2px solid lightgrey;\n    padding: 15px;\n    -webkit-box-shadow: -3px 0px 5px -2px #cacaca;\n    -moz-box-shadow: -3px 0px 5px -2px #cacaca;\n    box-shadow: -3px 0px 5px -2px #cacaca; }\n    #todo-misc-container #todo-name-changer-container #date,\n    #todo-misc-container #date-changer #date,\n    #todo-misc-container #priority-container #date,\n    #todo-misc-container #note-container #date {\n      color: #6b6b6b; }\n  #todo-misc-container #todo-name-changer-container {\n    height: 60px;\n    border-radius: 5px 0 0 0;\n    -webkit-box-shadow: -2px -2px 5px -1px #cacaca;\n    -moz-box-shadow: -2px -2px 5px -1px #cacaca;\n    box-shadow: -2px -2px 5px -1px #cacaca; }\n    #todo-misc-container #todo-name-changer-container textarea {\n      height: 40px; }\n  #todo-misc-container #note-container {\n    height: 200px;\n    -webkit-box-shadow: -3px 4px 5px -2px #cacaca;\n    -moz-box-shadow: -3px 4px 5px -2px #cacaca;\n    box-shadow: -3px 4px 5px -2px #cacaca; }\n    #todo-misc-container #note-container textarea {\n      height: 160px; }\n  #todo-misc-container #date-changer,\n  #todo-misc-container #priority-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n    #todo-misc-container #date-changer #priority-levels,\n    #todo-misc-container #priority-container #priority-levels {\n      color: #6b6b6b; }\n      #todo-misc-container #date-changer #priority-levels .medium-priority.selected-1,\n      #todo-misc-container #date-changer #priority-levels .low-priority.selected-1,\n      #todo-misc-container #priority-container #priority-levels .medium-priority.selected-1,\n      #todo-misc-container #priority-container #priority-levels .low-priority.selected-1 {\n        color: #106877; }\n      #todo-misc-container #date-changer #priority-levels .medium-priority.selected-2,\n      #todo-misc-container #date-changer #priority-levels .low-priority.selected-2,\n      #todo-misc-container #date-changer #priority-levels .high-priority.selected-2,\n      #todo-misc-container #priority-container #priority-levels .medium-priority.selected-2,\n      #todo-misc-container #priority-container #priority-levels .low-priority.selected-2,\n      #todo-misc-container #priority-container #priority-levels .high-priority.selected-2 {\n        color: #7300ff; }\n      #todo-misc-container #date-changer #priority-levels .onmouseover:hover,\n      #todo-misc-container #priority-container #priority-levels .onmouseover:hover {\n        color: #106877; }\n      #todo-misc-container #date-changer #priority-levels .medium-priority:hover ~ .low-priority,\n      #todo-misc-container #priority-container #priority-levels .medium-priority:hover ~ .low-priority {\n        color: #106877; }\n      #todo-misc-container #date-changer #priority-levels .high-priority:hover,\n      #todo-misc-container #priority-container #priority-levels .high-priority:hover {\n        color: #7300ff; }\n      #todo-misc-container #date-changer #priority-levels ion-icon,\n      #todo-misc-container #priority-container #priority-levels ion-icon {\n        font-size: 24px;\n        cursor: pointer; }\n    #todo-misc-container #date-changer #date-remover ion-icon,\n    #todo-misc-container #priority-container #date-remover ion-icon {\n      position: relative;\n      top: 4px;\n      color: #6b6b6b;\n      cursor: pointer;\n      --ionicon-stroke-width: 48px; }\n      #todo-misc-container #date-changer #date-remover ion-icon:hover,\n      #todo-misc-container #priority-container #date-remover ion-icon:hover {\n        color: black; }\n  #todo-misc-container .misc-title {\n    font-size: 1.1em;\n    color: #6b6b6b;\n    width: 120px; }\n  #todo-misc-container textarea {\n    background: #fff;\n    outline: none;\n    resize: none;\n    overflow: hidden;\n    width: 100%;\n    border: none;\n    font-family: \"Sen\", sans-serif;\n    font-size: 1.1em; }\n    #todo-misc-container textarea::placeholder {\n      color: #6b6b6b; }\n    #todo-misc-container textarea:focus::placeholder {\n      color: #11998e; }\n  #todo-misc-container input[type=\"date\"] {\n    outline: none;\n    border: none;\n    cursor: pointer; }\n  #todo-misc-container #close-details-btn {\n    font-size: 48px;\n    width: 62px; }\n    #todo-misc-container #close-details-btn ion-icon {\n      --ionicon-stroke-width: 48px;\n      background: #fff;\n      border-radius: 0 0 5px 5px;\n      border-left: 2px solid lightgrey;\n      border-right: 2px solid lightgrey;\n      border-bottom: 2px solid lightgrey;\n      width: 60px;\n      color: #c5c5c5;\n      cursor: pointer;\n      -webkit-box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca;\n      -moz-box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca;\n      box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca; }\n      #todo-misc-container #close-details-btn ion-icon:hover {\n        color: #6e6e6e; }\n", ""]);
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
/* harmony import */ var _projects_defaults_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/defaults.js */ "./src/JS/projects/defaults.js");
/* harmony import */ var _tasks_detailsInput_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/detailsInput.js */ "./src/JS/tasks/detailsInput.js");
/* harmony import */ var _projects_render_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/render.js */ "./src/JS/projects/render.js");
/* harmony import */ var _projects_toggleTasks_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/toggleTasks.js */ "./src/JS/projects/toggleTasks.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









 // Style

_style_menu_js__WEBPACK_IMPORTED_MODULE_1__["showProjects"]();
_style_resize_js__WEBPACK_IMPORTED_MODULE_2__["responsive"]();
_style_priority_js__WEBPACK_IMPORTED_MODULE_3__["starsChangeColors"](); // App logic
//create main list of projects

var projects = _toConsumableArray(_projects_defaults_js__WEBPACK_IMPORTED_MODULE_5__["getProjects"]()); // render list of projects


Object(_projects_render_js__WEBPACK_IMPORTED_MODULE_7__["renderAllProjects"])(projects, 0); // Button to add task to a defined array
// Also rerender the array after adding a task

_tasks_add_js__WEBPACK_IMPORTED_MODULE_4__["addTaskTo"](projects, 0); // Change tasks when user type something to details window

_tasks_detailsInput_js__WEBPACK_IMPORTED_MODULE_6__["changeTaskOnInput"](projects, 0); //test button

var testBtn = document.getElementById("socials");
testBtn.addEventListener("click", function () {
  return console.table(projects);
});
Object(_projects_toggleTasks_js__WEBPACK_IMPORTED_MODULE_8__["projectsShowTasks"])(projects);

/***/ }),

/***/ "./src/JS/projects/defaults.js":
/*!*************************************!*\
  !*** ./src/JS/projects/defaults.js ***!
  \*************************************/
/*! exports provided: getProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjects", function() { return getProjects; });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "./src/JS/projects/factory.js");
/* harmony import */ var _tasks_defaults_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks/defaults.js */ "./src/JS/tasks/defaults.js");



function getProjects() {
  // This function simply creates an array with default projects in it
  var allProjects = [Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["projectFactory"])({
    title: "Project 1",
    tasks: _tasks_defaults_js__WEBPACK_IMPORTED_MODULE_1__["getTasksByNumber"](1),
    count: _tasks_defaults_js__WEBPACK_IMPORTED_MODULE_1__["getTasksByNumber"](1).length
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["projectFactory"])({
    title: "Project 2",
    tasks: _tasks_defaults_js__WEBPACK_IMPORTED_MODULE_1__["getTasksByNumber"](2)
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["projectFactory"])({
    title: "Something to consider",
    tasks: _tasks_defaults_js__WEBPACK_IMPORTED_MODULE_1__["getTasksByNumber"](3)
  })];
  return allProjects;
}



/***/ }),

/***/ "./src/JS/projects/factory.js":
/*!************************************!*\
  !*** ./src/JS/projects/factory.js ***!
  \************************************/
/*! exports provided: projectFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectFactory", function() { return projectFactory; });
var projectFactory = function projectFactory(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$tasks = _ref.tasks,
      tasks = _ref$tasks === void 0 ? [] : _ref$tasks;
  return {
    title: title,
    tasks: tasks
  };
};



/***/ }),

/***/ "./src/JS/projects/render.js":
/*!***********************************!*\
  !*** ./src/JS/projects/render.js ***!
  \***********************************/
/*! exports provided: renderAllProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAllProjects", function() { return renderAllProjects; });
/* harmony import */ var _tasks_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tasks/render.js */ "./src/JS/tasks/render.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function renderAllProjects(arr, number) {
  // Clear all previously rendered elements from the page
  Object(_tasks_render_js__WEBPACK_IMPORTED_MODULE_0__["clearContentOf"])("project-list"); //Render each element of the array to the page

  var _iterator = _createForOfIteratorHelper(arr.entries()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          index = _step$value[0],
          item = _step$value[1];

      renderProject(index, item);
    } // Render all tasks from project

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  Object(_tasks_render_js__WEBPACK_IMPORTED_MODULE_0__["renderAllTasksFrom"])(arr[number].tasks);
}

function renderProject(i, project) {
  document.getElementById("project-list").append(createProject(i, project));
}

function createProject(i, project) {
  // create a li element
  var li = document.createElement("li");
  li.setAttribute("class", "project");
  li.setAttribute("id", "project-".concat(i)); // append everything to it

  li.append(createIcon());
  li.append(createTitleAndCount(project.title, project.tasks.length));
  li.append(createDeleteBtn(i));
  return li;
}

function createIcon() {
  var span = document.createElement("span");
  span.setAttribute("class", "project-icon");
  var icon = document.createElement("ion-icon");
  icon.setAttribute("name", "reader-outline");
  span.append(icon);
  return span;
}

function createTitleAndCount(title, count) {
  // create a container for Title and Todo Count Number
  var div = document.createElement("div");
  div.setAttribute("class", "project-title-count-container"); // Create a span for title

  var nameSpan = document.createElement("span");
  nameSpan.setAttribute("class", "project-name");
  nameSpan.textContent = title; // Create a span for count number

  var countSpan = document.createElement("span");
  countSpan.setAttribute("class", "count-todos");
  countSpan.textContent = count; // Append spans to a div and return a container

  div.append(nameSpan);
  div.append(countSpan);
  return div;
}

function createDeleteBtn(i) {
  var btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("class", "delete-project-btn");
  btn.setAttribute("id", "delete-project-".concat(i)); // create an icon and append it to button

  var icon = document.createElement("ion-icon");
  icon.setAttribute("name", "close-circle");
  btn.appendChild(icon);
  return btn;
}



/***/ }),

/***/ "./src/JS/projects/toggleTasks.js":
/*!****************************************!*\
  !*** ./src/JS/projects/toggleTasks.js ***!
  \****************************************/
/*! exports provided: projectsShowTasks */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/home/alexandr/Projects/odin_on_rails/new_beg/src/JS/projects/toggleTasks.js'");

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
/* harmony import */ var _projects_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects/render.js */ "./src/JS/projects/render.js");



function addTaskTo(arr, number) {
  var submitTodoBtn = document.getElementById("submit-todo");
  submitTodoBtn.addEventListener("click", function (event) {
    // Prevent default submit behavior
    event.preventDefault(); // Get task name from User and add it to tasks array

    pushTaskTo(arr[number].tasks);
    console.table(arr[number].tasks); // Rerender array

    Object(_projects_render_js__WEBPACK_IMPORTED_MODULE_1__["renderAllProjects"])(arr, number);
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
/*! exports provided: getTasksByNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasksByNumber", function() { return getTasksByNumber; });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "./src/JS/tasks/factory.js");


function getTasksByNumber() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  // This function simply creates an array with default tasks in it
  // Number is just a number of bundle from 1 to 3
  var bundle1 = [Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Learn english",
    date: "15.03.2025",
    priority: "medium",
    note: "something"
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Learn english again",
    date: "15.03.2028",
    priority: "medium"
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "And Again!",
    priority: "medium",
    note: "something"
  })];
  var bundle2 = [Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Learn german",
    date: "15.03.2018",
    priority: "high",
    note: "something"
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Learn Math!",
    date: "15.03.2018",
    priority: "high"
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "LEHRNE DEUTSCH!!!",
    date: "15.03.2018",
    priority: "high"
  })];
  var bundle3 = [Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Make stuff",
    note: "something",
    done: true
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Do stuff",
    date: "10.01.2020",
    done: true
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Run stuff",
    note: "something",
    done: true
  })];

  switch (number) {
    case 1:
      return bundle1;

    case 2:
      return bundle2;

    case 3:
      return bundle3;
  }
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

function changeTaskOnInput(projects, number) {
  // Change a task with input from Details Window
  changeTitleOnInput(projects[number].tasks);
  changeDateOnInput(projects[number].tasks);
  changePriorityOnInput(projects[number].tasks);
  changeNoteOnInput(projects[number].tasks);
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
/*! exports provided: renderAllTasksFrom, clearContentOf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAllTasksFrom", function() { return renderAllTasksFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearContentOf", function() { return clearContentOf; });
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
    // If task has date before today, it will be red colored
    if (dateOverdue(date)) due.classList.add("overdue-date");
    due.appendChild(createCalendarImage());
    due.appendChild(createSpanForDate(date));
  }

  return due;
}

function dateOverdue(date) {
  // Function to compare dates: today with a date
  // If date is earlier than today then return true
  var today = new Date();
  var day = date.split(".")[0];
  var month = date.split(".")[1];
  var year = date.split(".")[2];
  var taskDate = new Date("".concat(year, "-").concat(month, "-").concat(day, " 0:00:00"));
  return taskDate < today ? true : false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUNPTlMvY2FsZW5kYXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9JQ09OUy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Byb2plY3RzL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9wcm9qZWN0cy9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9wcm9qZWN0cy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL3ByaW9yaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9zdHlsZS9yZXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2FkZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZGV0YWlsc0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZXRhaWxzVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2Nzcz84MTRiIl0sIm5hbWVzIjpbIk1lbnVCdG4iLCJSZXNpemUiLCJQcmlvcml0eSIsInByb2plY3RzIiwiRGVmYXVsdFByb2plY3RzIiwicmVuZGVyQWxsUHJvamVjdHMiLCJBZGRUYXNrQnRuIiwiRGV0YWlscyIsInRlc3RCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJ0YWJsZSIsInByb2plY3RzU2hvd1Rhc2tzIiwiZ2V0UHJvamVjdHMiLCJhbGxQcm9qZWN0cyIsInByb2plY3RGYWN0b3J5IiwidGl0bGUiLCJ0YXNrcyIsIkRlZmF1bHRUYXNrcyIsImNvdW50IiwibGVuZ3RoIiwiYXJyIiwibnVtYmVyIiwiY2xlYXJDb250ZW50T2YiLCJlbnRyaWVzIiwiaW5kZXgiLCJpdGVtIiwicmVuZGVyUHJvamVjdCIsInJlbmRlckFsbFRhc2tzRnJvbSIsImkiLCJwcm9qZWN0IiwiYXBwZW5kIiwiY3JlYXRlUHJvamVjdCIsImxpIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUljb24iLCJjcmVhdGVUaXRsZUFuZENvdW50IiwiY3JlYXRlRGVsZXRlQnRuIiwic3BhbiIsImljb24iLCJkaXYiLCJuYW1lU3BhbiIsInRleHRDb250ZW50IiwiY291bnRTcGFuIiwiYnRuIiwiYXBwZW5kQ2hpbGQiLCJzaG93UHJvamVjdHMiLCJicm9hZGVuUHJvamVjdENvbnRhaW5lciIsImdldEVsZW1lbnRzVG9Ccm9hZCIsImVsZW1lbnQiLCJ0b2dnbGVCcm9hZCIsIm1pbmltaXplUHJvamVjdENvbnRhaW5lciIsImFkZEJyb2FkIiwiY2xhc3NMaXN0IiwiYWRkIiwidG9nZ2xlIiwiY29udGVudCIsInByb2plY3RMaXN0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByb2plY3RJY29uIiwicHJvamVjdFRpdGxlQ291bnRDb250YWluZXIiLCJkZWxldGVQcm9qZWN0QnRuIiwibmV3UHJvamVjdEZvcm0iLCJuZXdQcm9qZWN0Iiwic3VibWl0UHJvamVjdCIsImVsZW1lbnRzIiwic3RhcnNDaGFuZ2VDb2xvcnMiLCJhY3RpdmF0ZUZpcnN0U3RhciIsImFjdGl2YXRlU2Vjb25kU3RhciIsImFjdGl2YXRlVGhpcmRTdGFyIiwiZ2V0U3RhcjEiLCJhY3RpdmF0ZVN0YXIiLCJnZXRTdGFyMiIsImdldFN0YXIzIiwibG9nIiwib3V0bGluZVNlY29uZFN0YXIiLCJvdXRsaW5lVGhpcmRTdGFyIiwicmVtb3ZlQ29sb3JGcm9tQWxsU3RhcnMiLCJhZGRNZWRpdW1Pbm1vdXNlb3ZlciIsImZpbGxTZWNvbmRTdGFyIiwiYWRkQ29sb3JUd29TdGFycyIsImRlY29sb3JUaGlyZFN0YXIiLCJmaWxsVGhpcmRTdGFyIiwiYWRkQ29sb3JUaHJlZVN0YXJzIiwicmVtb3ZlTWVkaXVtT25tb3VzZW92ZXIiLCJjaGlsZHJlbiIsInJlbW92ZSIsInN0YXJJc091dGxpbmVkIiwic3RhciIsImdldEF0dHJpYnV0ZSIsImRlY29sb3JGaXJzdFN0YXIiLCJkZWNvbG9yU2Vjb25kU3RhciIsInJlc3BvbnNpdmUiLCJtYWluIiwiZGV0YWlscyIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInNjcmVlbkxlc3NUaGVuMTAyNCIsImdldENvbXB1dGVkRGlzcGxheSIsInN0eWxlIiwiZ3JpZENvbHVtbiIsIm1hdGNoZXMiLCJhZGRUYXNrVG8iLCJzdWJtaXRUb2RvQnRuIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2hUYXNrVG8iLCJwdXNoIiwiZ2V0VGFzayIsInRhc2siLCJ0YXNrRmFjdG9yeSIsImdldElucHV0VmFsdWUiLCJjbGVhclRhc2tJbnB1dCIsInZhbHVlIiwiZ2V0VGFza3NCeU51bWJlciIsImJ1bmRsZTEiLCJkYXRlIiwicHJpb3JpdHkiLCJub3RlIiwiYnVuZGxlMiIsImJ1bmRsZTMiLCJkb25lIiwiZGVsZXRlVGFza3NGcm9tIiwiYnV0dG9ucyIsImJ1dHRvbiIsImRlbGV0ZUJ0blJlbW92ZVRhc2siLCJlIiwiYnRuSWQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJzcGxpdCIsImNsb3NlRGV0YWlsc09mRGVsZXRlZFRhc2siLCJzcGxpY2UiLCJzdG9wUHJvcGFnYXRpb24iLCJEZXRhaWxzVG9nZ2xlIiwicHV0VGFza0luZm9Ub0lucHV0Iiwic2V0TmFtZSIsInNldERhdGUiLCJzZXRQaW9yaXR5Iiwic2V0Tm90ZSIsImNoYW5nZVRhc2tPbklucHV0IiwiY2hhbmdlVGl0bGVPbklucHV0IiwiY2hhbmdlRGF0ZU9uSW5wdXQiLCJjaGFuZ2VQcmlvcml0eU9uSW5wdXQiLCJjaGFuZ2VOb3RlT25JbnB1dCIsImlucHV0Iiwib25pbnB1dCIsImNoYW5nZVRpdGxlIiwidGFza051bWJlciIsImNoYW5nZURhdGUiLCJmb3JtYXREYXRlMiIsInN0YXJzIiwiY2hhbmdlUHJpb3JpdHkiLCJnZXRQcmlvcml0eUlucHV0Iiwic3RhcjEiLCJjb250YWlucyIsImNoYW5nZU5vdGUiLCJuYW1lIiwiZm9ybWF0RGF0ZSIsImxldmVsIiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZm9ybWF0dGVkIiwidGFza3NUb2dnbGVEZXRhaWxzIiwidG9kb0xpc3RTaG93RGV0YWlscyIsIkFycm93SGlkZURldGFpbHMiLCJ0YXNrSWQiLCJ0b2dnbGVEZXRhaWxzIiwiRGV0YWlsc0lucHV0IiwiYXJyb3dCdG4iLCJoaWRlRGV0YWlscyIsImlkTnVtYmVyIiwiZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyIiwiZGV0YWlsc0FyZVNob3duIiwic2hvd0RldGFpbHMiLCJkZXRhaWxzQ29udGFpbmVySWQiLCJzZXREZXRhaWxzSWRUbyIsIm1ha2VEZXRhaWxzRGVmYXVsdCIsImhpZGUiLCJzaG93QXNGbGV4IiwiY29tcHV0ZWREaXNwbGF5IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJkaXNwbGF5IiwiZG9uZUJ0bnMiLCJjaGVja2JveGVzIiwiY2hlY2tib3giLCJkb25lQnRuQ29tcGxldGVUYXNrIiwiY2JveElkIiwicGFyZW50Tm9kZSIsImNsb3NlRGV0YWlsc09mQ29tcGxldGVkVGFzayIsImZyb20iLCJyZW5kZXJUYXNrIiwiRGVsZXRlVGFza0J0bnMiLCJUYXNrRG9uZSIsInRvZ2dsZURvbmVJY29ucyIsImNvbnRlbnRDb250YWluZXIiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVUYXNrIiwiY3JlYXRlTGFiZWwiLCJjcmVhdGVJbnB1dCIsImNyZWF0ZUNvbnRlbnQiLCJsYWJlbCIsImh0bWxGb3IiLCJjcmVhdGVEb25lSWNvbiIsImNvbnRhaW5lciIsImNyZWF0ZVRpdGxlIiwiY3JlYXRlRGV0YWlscyIsInN0ciIsImNyZWF0ZUZyb20iLCJjcmVhdGVEdWUiLCJjcmVhdGVQcmlvcml0eSIsImNyZWF0ZU5vdGUiLCJkdWUiLCJkYXRlT3ZlcmR1ZSIsImNyZWF0ZUNhbGVuZGFySW1hZ2UiLCJjcmVhdGVTcGFuRm9yRGF0ZSIsInRvZGF5IiwiRGF0ZSIsInRhc2tEYXRlIiwiaW1nIiwiQ2FsZW5kYXIiLCJjcmVhdGVTcGFuRm9yUHJpb3JpdHkiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwibm90ZUljb24iLCJOb3RlIiwidGV4dCIsImRvbmVzIiwicGFyZW50RWxlbWVudCIsImljb25Db250YWluZXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFULEdBQTJCO0FBQ3pCO0FBQ0EsTUFBSW9DLEtBQUssR0FBR25PLFFBQVEsQ0FBQ29ELHNCQUFULENBQWdDLE1BQWhDLENBQVosQ0FGeUIsQ0FHekI7O0FBSHlCLDhDQUlSK0ssS0FKUTtBQUFBOztBQUFBO0FBSXpCLDJEQUF3QjtBQUFBLFVBQWYzSCxJQUFlO0FBQ3RCLFVBQUl6RixNQUFNLEdBQUd5RixJQUFJLENBQUM0SCxhQUFMLENBQW1CeEcsRUFBbkIsQ0FBc0JDLEtBQXRCLENBQTRCLEdBQTVCLEVBQWlDLENBQWpDLENBQWI7QUFDQSxVQUFJMEUsS0FBSyxHQUFHdk0sUUFBUSxDQUFDQyxjQUFULGlCQUFpQ2MsTUFBakMsRUFBWjtBQUNBLFVBQUlzTixhQUFhLEdBQUc5QixLQUFLLENBQUNOLFVBQTFCO0FBRUFvQyxtQkFBYSxDQUFDdEwsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsV0FBNUI7QUFDRDtBQVZ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVzFCOzs7Ozs7Ozs7Ozs7O0FDaFBELFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsOE1BQXFHOztBQUV2STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJidW5kbGUuNzQ4NTdiZGVhY2NkMTViYThhMDEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9KUy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxuQGtleWZyYW1lcyByb3RhdGlvbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBhcHBlYXJGcm9tUmlnaHRQcm9qZWN0IHtcXG4gIDAlIHtcXG4gICAgbGVmdDogMzBweDtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHVzZXItc2VsZWN0OiBub25lOyB9XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBiYWNrZ3JvdW5kOiAjZTllOWU5OyB9XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvIDMzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIiBcXFwicHJvamVjdHMgbWFpbiB0b2RvLW1pc2NcXFwiOyB9XFxuICAjY29udGVudC5icm9hZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjhweCBhdXRvIDMzMHB4OyB9XFxuXFxuLyogLS0tIFRPUCBvZiB0aGUgUEFHRSA6IEhFQURFUiAtLS0gKi9cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxMDY4Nzc7XFxuICBjb2xvcjogI2Y0ZjRmNDtcXG4gIGZvbnQtc2l6ZTogMS45ZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQZXJtYW5lbnQgTWFya2VyXFxcIiwgY3Vyc2l2ZTtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7IH1cXG4gIGhlYWRlciAjbWVudS1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgaGVhZGVyICNtZW51LWljb246aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICMwYjUwNWM7IH1cXG4gIGhlYWRlciAjaGVhZGVyLXRpdGxlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XFxuICBoZWFkZXIgI3NvY2lhbHMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLyogTEVGVCBTSURFIE9GIFRIRSBQQUdFOiBQUk9KRUNUUyAqL1xcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHByb2plY3RzO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogOHB4IDBweCA1cHggLTRweCAjY2FjYWNhO1xcbiAgLW1vei1ib3gtc2hhZG93OiA4cHggMHB4IDVweCAtNHB4ICNjYWNhY2E7XFxuICBib3gtc2hhZG93OiA4cHggMHB4IDVweCAtNHB4ICNjYWNhY2E7XFxuICAvKiBMRUZULVNJREUgT0YgVEhFIFBBR0U6IFVzZXIgSW5wdXQqLyB9XFxuICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCB7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gICAgbWF4LXdpZHRoOiAyODBweDsgfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdC5icm9hZCB7XFxuICAgICAgd2lkdGg6IDY4cHg7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xcbiAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0LmJyb2FkIHtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjJweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdC5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7XFxuICAgICAgICBmb250LXdlaWdodDogOTAwOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3Q6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIGFuaW1hdGlvbjogYXBwZWFyRnJvbVJpZ2h0UHJvamVjdCAwLjNzIGVhc2Utb3V0IGZvcndhcmRzOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3Q6bm90KC5hY3RpdmUpOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1pY29uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtaWNvbi5icm9hZCB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWNvdW50LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyLmJyb2FkIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LW5hbWUge1xcbiAgICAgICAgd2lkdGg6IDE1NXB4O1xcbiAgICAgICAgbWF4LXdpZHRoOiAxNTVweDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuY291bnQtdG9kb3Mge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIHdpZHRoOiAyOXB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4OyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgICAgY29sb3I6ICNjNWM1YzU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuLmJyb2FkIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiAjOTk5OTk5OyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuOmZvY3VzIHtcXG4gICAgICAgICAgY29sb3I6ICM2ZTZlNmU7IH1cXG4gICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgbWF4LXdpZHRoOiAyODBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBJbnB1dCAqL1xcbiAgICAvKiBTdWJtaXQgYnV0dG9uICovIH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtLmJyb2FkIHtcXG4gICAgICB3aWR0aDogNjhweDtcXG4gICAgICBtYXJnaW46IDA7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdCB7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNmI2YjZiO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDlweCAwO1xcbiAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgY29sb3I6ICM2YjZiNmI7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdC5icm9hZCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdDpmb2N1cyB7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM4ZWY3ZDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0IHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogMHB4O1xcbiAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDZweDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3QuYnJvYWQge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGxlZnQ6IDRweDtcXG4gICAgICAgIHBhZGRpbmc6IDdweCAxOHB4OyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdCBpb24taWNvbiB7XFxuICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4O1xcbiAgICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmhvdmVyOjphZnRlciB7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOGVmN2Q7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDpob3ZlciBpb24taWNvbiB7XFxuICAgICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuXFxuLyogTWlkZGxlOiBQcm9qZWN0IHRpdGxlLCB0b2RvIHRhc2tzKi9cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIG1pbi13aWR0aDogMzc3cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggI2NhY2FjYTtcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4ICNjYWNhY2E7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggI2NhY2FjYTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIC8qIFVzZXIgaW5wdXQgdG9kbyB0YXNrcyovIH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICBtYWluIHtcXG4gICAgICBncmlkLWNvbHVtbjogMiAvIDQ7IH0gfVxcbiAgbWFpbiAjcHJvamVjdC10aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMS40ZW07IH1cXG4gIG1haW4gLnRvZG8ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCBhdXRvIDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjaGVja2JveCB0b2RvdGV4dCBidG5cXFwiO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC8qIEN1c3RvbSBtYWRlIGNoZWNrYm94IHdpdGggYWZ0ZXIgZWxlbWVudCAqL1xcbiAgICAvKiBUZXh0IG9mIHRoZSB0b2RvIHRhc2sgd2l0aCBkZXRhaWxzICovIH1cXG4gICAgbWFpbiAudG9kbzpob3ZlciB7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggI2U0ZTRlNDtcXG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCAjZTRlNGU0O1xcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCAjZTRlNGU0OyB9XFxuICAgIG1haW4gLnRvZG86aG92ZXIgLmRlbGV0ZS10b2RvLWJ0biB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgIGFuaW1hdGlvbjogYXBwZWFyRnJvbVJpZ2h0UHJvamVjdCAwLjNzIGVhc2Utb3V0IGZvcndhcmRzOyB9XFxuICAgIG1haW4gLnRvZG8gbGFiZWwge1xcbiAgICAgIGdyaWQtYXJlYTogY2hlY2tib3g7IH1cXG4gICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXI6OmFmdGVyIHtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzVjNWM1O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC43czsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lciBpb24taWNvbiB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4OyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyOmhvdmVyOjphZnRlciB7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMmIwZTk7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXI6aG92ZXIgaW9uLWljb24ge1xcbiAgICAgICAgICBjb2xvcjogI2UyYjBlOTtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLW91dDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lci5jb21wbGV0ZWQ6aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2M1YzVjNSAhaW1wb3J0YW50OyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyLmNvbXBsZXRlZCBpb24taWNvbiB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gICAgICAgICAgY29sb3I6ICNjNWM1YzU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTsgfVxcbiAgICBtYWluIC50b2RvIC50b2RvLWNoZWNrYm94IHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCB7XFxuICAgICAgZ3JpZC1hcmVhOiB0b2RvdGV4dDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG4gICAgICBtYWluIC50b2RvIC50b2RvLXRleHQuZG9uZSB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgICAgIGNvbG9yOiAjYzVjNWM1ICFpbXBvcnRhbnQ7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dC5kb25lIC5tZWRpdW0tcHJpb3JpdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQuZG9uZSAuaGlnaC1wcmlvcml0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dC5kb25lIC5kdWUtZGF0ZSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dC5kb25lIC5vdmVyZHVlLWRhdGUge1xcbiAgICAgICAgICBjb2xvcjogI2M1YzVjNSAhaW1wb3J0YW50OyB9XFxuICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC50b2RvLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxcbiAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyB7XFxuICAgICAgICBmb250LXNpemU6IDAuOGVtOyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmZyb20tcHJvamVjdCxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAuZHVlLWRhdGUsXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLm1lZGl1bS1wcmlvcml0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAuaGlnaC1wcmlvcml0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAubm90ZS1wcmVzZW5jZSB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5mcm9tLXByb2plY3Q6ZW1wdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmR1ZS1kYXRlOmVtcHR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5tZWRpdW0tcHJpb3JpdHk6ZW1wdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmhpZ2gtcHJpb3JpdHk6ZW1wdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLm5vdGUtcHJlc2VuY2U6ZW1wdHkge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyBzcGFuIGltZyB7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgdG9wOiAycHg7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgc3Bhbi5vdmVyZHVlLWRhdGUge1xcbiAgICAgICAgICBjb2xvcjogcmVkOyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgc3Bhbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgICAgICAgY29sb3I6ICM3MzAwZmY7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyBzcGFuLm1lZGl1bS1wcmlvcml0eSB7XFxuICAgICAgICAgIGNvbG9yOiAjMTA2ODc3OyB9XFxuICAgIG1haW4gLnRvZG8gLmRlbGV0ZS10b2RvLWJ0biB7XFxuICAgICAgZ3JpZC1hcmVhOiBidG47XFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICBjb2xvcjogI2Q0ZDRkNDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4yczsgfVxcbiAgICAgIG1haW4gLnRvZG8gLmRlbGV0ZS10b2RvLWJ0bjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzQ5NDA0MDsgfVxcbiAgICAgIG1haW4gLnRvZG8gLmRlbGV0ZS10b2RvLWJ0bjpmb2N1cyB7XFxuICAgICAgICBjb2xvcjogIzkyOTI5MjsgfVxcbiAgbWFpbiBociB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3gtc2hhZG93OiAwIC0xMHB4IDEwcHggLTEwcHggIzhjOGM4YyBpbnNldDsgfVxcbiAgbWFpbiAjbmV3LXRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIElucHV0ICovXFxuICAgIC8qIFN1Ym1pdCBidXR0b24gKi8gfVxcbiAgICBtYWluICNuZXctdG9kby1mb3JtICNuZXctdG9kbyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNmI2YjZiO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDlweCAwO1xcbiAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgY29sb3I6ICM2YjZiNmI7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmOyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjbmV3LXRvZG86Zm9jdXMge1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzOGVmN2Q7IH1cXG4gICAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI25ldy10b2RvOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxuICAgICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogMHB4O1xcbiAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDZweDsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvIGlvbi1pY29uIHtcXG4gICAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7XFxuICAgICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzOyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOmhvdmVyOjphZnRlciB7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOGVmN2Q7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86aG92ZXIgaW9uLWljb24ge1xcbiAgICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcblxcbi8qIFJpZ2h0IHNpZGUgb2YgdGhlIHBhZ2UgKi9cXG4jdG9kby1taXNjLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHRvZG8tbWlzYztcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB6LWluZGV4OiAxOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIge1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgICAtbW96LWJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgICAgYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTsgfSB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjdG9kby1uYW1lLWNoYW5nZXItY29udGFpbmVyLFxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlcixcXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIsXFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjbm90ZS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3RvZG8tbmFtZS1jaGFuZ2VyLWNvbnRhaW5lciAjZGF0ZSxcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjZGF0ZSxcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjZGF0ZSxcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI25vdGUtY29udGFpbmVyICNkYXRlIHtcXG4gICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI3RvZG8tbmFtZS1jaGFuZ2VyLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCAwO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0ycHggLTJweCA1cHggLTFweCAjY2FjYWNhO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IC0ycHggLTJweCA1cHggLTFweCAjY2FjYWNhO1xcbiAgICBib3gtc2hhZG93OiAtMnB4IC0ycHggNXB4IC0xcHggI2NhY2FjYTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjdG9kby1uYW1lLWNoYW5nZXItY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgICBoZWlnaHQ6IDQwcHg7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNub3RlLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTNweCA0cHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAtM3B4IDRweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDRweCA1cHggLTJweCAjY2FjYWNhOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNub3RlLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgICAgaGVpZ2h0OiAxNjBweDsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlcixcXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMge1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHkuc2VsZWN0ZWQtMSxcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLmxvdy1wcmlvcml0eS5zZWxlY3RlZC0xLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5LnNlbGVjdGVkLTEsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5sb3ctcHJpb3JpdHkuc2VsZWN0ZWQtMSB7XFxuICAgICAgICBjb2xvcjogIzEwNjg3NzsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5LnNlbGVjdGVkLTIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5sb3ctcHJpb3JpdHkuc2VsZWN0ZWQtMixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLmhpZ2gtcHJpb3JpdHkuc2VsZWN0ZWQtMixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eS5zZWxlY3RlZC0yLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAubG93LXByaW9yaXR5LnNlbGVjdGVkLTIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5oaWdoLXByaW9yaXR5LnNlbGVjdGVkLTIge1xcbiAgICAgICAgY29sb3I6ICM3MzAwZmY7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLm9ubW91c2VvdmVyOmhvdmVyLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAub25tb3VzZW92ZXI6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICMxMDY4Nzc7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eTpob3ZlciB+IC5sb3ctcHJpb3JpdHksXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHk6aG92ZXIgfiAubG93LXByaW9yaXR5IHtcXG4gICAgICAgIGNvbG9yOiAjMTA2ODc3OyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5oaWdoLXByaW9yaXR5OmhvdmVyLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAuaGlnaC1wcmlvcml0eTpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzczMDBmZjsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyBpb24taWNvbixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgaW9uLWljb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI2RhdGUtcmVtb3ZlciBpb24taWNvbixcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjZGF0ZS1yZW1vdmVyIGlvbi1pY29uIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiA0cHg7XFxuICAgICAgY29sb3I6ICM2YjZiNmI7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNkYXRlLXJlbW92ZXIgaW9uLWljb246aG92ZXIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjZGF0ZS1yZW1vdmVyIGlvbi1pY29uOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgLm1pc2MtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBjb2xvcjogIzZiNmI2YjtcXG4gICAgd2lkdGg6IDEyMHB4OyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMWVtOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNjbG9zZS1kZXRhaWxzLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgd2lkdGg6IDYycHg7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2Nsb3NlLWRldGFpbHMtYnRuIGlvbi1pY29uIHtcXG4gICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4O1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgY29sb3I6ICNjNWM1YzU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggN3B4IC0xM3B4ICNjYWNhY2EsIDBweCA1cHggMTBweCAwcHggI2NhY2FjYTtcXG4gICAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDdweCAtMTNweCAjY2FjYWNhLCAwcHggNXB4IDEwcHggMHB4ICNjYWNhY2E7XFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggN3B4IC0xM3B4ICNjYWNhY2EsIDBweCA1cHggMTBweCAwcHggI2NhY2FjYTsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNjbG9zZS1kZXRhaWxzLWJ0biBpb24taWNvbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzZlNmU2ZTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvY2FsZW5kYXIuNzUwNGM4ODlmYzJkOWQ0ZjU0MDBiYTY5OGIyNTQzNzcuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2VkaXQuMjkyN2Y4ZGU0MjY4YmFlOGYxMWM0ZGZlM2FkYzcyYjUuc3ZnXCI7IiwiaW1wb3J0IFwiLi4vU0NTUy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgKiBhcyBNZW51QnRuIGZyb20gXCIuL3N0eWxlL21lbnUuanNcIjtcbmltcG9ydCAqIGFzIFJlc2l6ZSBmcm9tIFwiLi9zdHlsZS9yZXNpemUuanNcIjtcbmltcG9ydCAqIGFzIFByaW9yaXR5IGZyb20gXCIuL3N0eWxlL3ByaW9yaXR5LmpzXCI7XG5pbXBvcnQgKiBhcyBBZGRUYXNrQnRuIGZyb20gXCIuL3Rhc2tzL2FkZC5qc1wiO1xuaW1wb3J0ICogYXMgRGVmYXVsdFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzL2RlZmF1bHRzLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzIGZyb20gXCIuL3Rhc2tzL2RldGFpbHNJbnB1dC5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyQWxsUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0cy9yZW5kZXIuanNcIjtcbmltcG9ydCB7IHByb2plY3RzU2hvd1Rhc2tzIH0gZnJvbSBcIi4vcHJvamVjdHMvdG9nZ2xlVGFza3MuanNcIjtcblxuLy8gU3R5bGVcbk1lbnVCdG4uc2hvd1Byb2plY3RzKCk7XG5SZXNpemUucmVzcG9uc2l2ZSgpO1xuUHJpb3JpdHkuc3RhcnNDaGFuZ2VDb2xvcnMoKTtcblxuLy8gQXBwIGxvZ2ljXG5cbi8vY3JlYXRlIG1haW4gbGlzdCBvZiBwcm9qZWN0c1xubGV0IHByb2plY3RzID0gWy4uLkRlZmF1bHRQcm9qZWN0cy5nZXRQcm9qZWN0cygpXTtcblxuLy8gcmVuZGVyIGxpc3Qgb2YgcHJvamVjdHNcbnJlbmRlckFsbFByb2plY3RzKHByb2plY3RzLCAwKTtcblxuLy8gQnV0dG9uIHRvIGFkZCB0YXNrIHRvIGEgZGVmaW5lZCBhcnJheVxuLy8gQWxzbyByZXJlbmRlciB0aGUgYXJyYXkgYWZ0ZXIgYWRkaW5nIGEgdGFza1xuQWRkVGFza0J0bi5hZGRUYXNrVG8ocHJvamVjdHMsIDApO1xuXG4vLyBDaGFuZ2UgdGFza3Mgd2hlbiB1c2VyIHR5cGUgc29tZXRoaW5nIHRvIGRldGFpbHMgd2luZG93XG5EZXRhaWxzLmNoYW5nZVRhc2tPbklucHV0KHByb2plY3RzLCAwKTtcblxuLy90ZXN0IGJ1dHRvblxubGV0IHRlc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvY2lhbHNcIik7XG50ZXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjb25zb2xlLnRhYmxlKHByb2plY3RzKSk7XG5cbnByb2plY3RzU2hvd1Rhc2tzKHByb2plY3RzKTtcbiIsImltcG9ydCB7IHByb2plY3RGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuaW1wb3J0ICogYXMgRGVmYXVsdFRhc2tzIGZyb20gXCIuLi90YXNrcy9kZWZhdWx0cy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiBzaW1wbHkgY3JlYXRlcyBhbiBhcnJheSB3aXRoIGRlZmF1bHQgcHJvamVjdHMgaW4gaXRcbiAgbGV0IGFsbFByb2plY3RzID0gW1xuICAgIHByb2plY3RGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIlByb2plY3QgMVwiLFxuICAgICAgdGFza3M6IERlZmF1bHRUYXNrcy5nZXRUYXNrc0J5TnVtYmVyKDEpLFxuICAgICAgY291bnQ6IERlZmF1bHRUYXNrcy5nZXRUYXNrc0J5TnVtYmVyKDEpLmxlbmd0aCxcbiAgICB9KSxcbiAgICBwcm9qZWN0RmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJQcm9qZWN0IDJcIixcbiAgICAgIHRhc2tzOiBEZWZhdWx0VGFza3MuZ2V0VGFza3NCeU51bWJlcigyKSxcbiAgICB9KSxcbiAgICBwcm9qZWN0RmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJTb21ldGhpbmcgdG8gY29uc2lkZXJcIixcbiAgICAgIHRhc2tzOiBEZWZhdWx0VGFza3MuZ2V0VGFza3NCeU51bWJlcigzKSxcbiAgICB9KSxcbiAgXTtcblxuICByZXR1cm4gYWxsUHJvamVjdHM7XG59XG5cbmV4cG9ydCB7IGdldFByb2plY3RzIH07XG4iLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9IGZ1bmN0aW9uICh7IHRpdGxlID0gXCJcIiwgdGFza3MgPSBbXSB9KSB7XG4gIHJldHVybiB7IHRpdGxlLCB0YXNrcyB9O1xufTtcblxuZXhwb3J0IHsgcHJvamVjdEZhY3RvcnkgfTtcbiIsImltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSwgY2xlYXJDb250ZW50T2YgfSBmcm9tIFwiLi4vdGFza3MvcmVuZGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckFsbFByb2plY3RzKGFyciwgbnVtYmVyKSB7XG4gIC8vIENsZWFyIGFsbCBwcmV2aW91c2x5IHJlbmRlcmVkIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2VcbiAgY2xlYXJDb250ZW50T2YoXCJwcm9qZWN0LWxpc3RcIik7XG4gIC8vUmVuZGVyIGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXkgdG8gdGhlIHBhZ2VcbiAgZm9yIChsZXQgW2luZGV4LCBpdGVtXSBvZiBhcnIuZW50cmllcygpKSB7XG4gICAgcmVuZGVyUHJvamVjdChpbmRleCwgaXRlbSk7XG4gIH1cbiAgLy8gUmVuZGVyIGFsbCB0YXNrcyBmcm9tIHByb2plY3RcbiAgcmVuZGVyQWxsVGFza3NGcm9tKGFycltudW1iZXJdLnRhc2tzKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdChpLCBwcm9qZWN0KSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpLmFwcGVuZChjcmVhdGVQcm9qZWN0KGksIHByb2plY3QpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChpLCBwcm9qZWN0KSB7XG4gIC8vIGNyZWF0ZSBhIGxpIGVsZW1lbnRcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3RcIik7XG4gIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIGBwcm9qZWN0LSR7aX1gKTtcbiAgLy8gYXBwZW5kIGV2ZXJ5dGhpbmcgdG8gaXRcbiAgbGkuYXBwZW5kKGNyZWF0ZUljb24oKSk7XG4gIGxpLmFwcGVuZChjcmVhdGVUaXRsZUFuZENvdW50KHByb2plY3QudGl0bGUsIHByb2plY3QudGFza3MubGVuZ3RoKSk7XG4gIGxpLmFwcGVuZChjcmVhdGVEZWxldGVCdG4oaSkpO1xuICByZXR1cm4gbGk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUljb24oKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LWljb25cIik7XG5cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW9uLWljb25cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInJlYWRlci1vdXRsaW5lXCIpO1xuXG4gIHNwYW4uYXBwZW5kKGljb24pO1xuXG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZUFuZENvdW50KHRpdGxlLCBjb3VudCkge1xuICAvLyBjcmVhdGUgYSBjb250YWluZXIgZm9yIFRpdGxlIGFuZCBUb2RvIENvdW50IE51bWJlclxuICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdC10aXRsZS1jb3VudC1jb250YWluZXJcIik7XG4gIC8vIENyZWF0ZSBhIHNwYW4gZm9yIHRpdGxlXG4gIGxldCBuYW1lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBuYW1lU3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3QtbmFtZVwiKTtcbiAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgLy8gQ3JlYXRlIGEgc3BhbiBmb3IgY291bnQgbnVtYmVyXG4gIGxldCBjb3VudFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgY291bnRTcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY291bnQtdG9kb3NcIik7XG4gIGNvdW50U3Bhbi50ZXh0Q29udGVudCA9IGNvdW50O1xuICAvLyBBcHBlbmQgc3BhbnMgdG8gYSBkaXYgYW5kIHJldHVybiBhIGNvbnRhaW5lclxuICBkaXYuYXBwZW5kKG5hbWVTcGFuKTtcbiAgZGl2LmFwcGVuZChjb3VudFNwYW4pO1xuICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVCdG4oaSkge1xuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGBkZWxldGUtcHJvamVjdC0ke2l9YCk7XG5cbiAgLy8gY3JlYXRlIGFuIGljb24gYW5kIGFwcGVuZCBpdCB0byBidXR0b25cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW9uLWljb25cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNsb3NlLWNpcmNsZVwiKTtcblxuICBidG4uYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgcmV0dXJuIGJ0bjtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQWxsUHJvamVjdHMgfTtcbiIsImZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgLy8gTWFrZSBtZW51IGJ1dHRvbiBpbiB0aGUgdG9wIGxlZnQgY29ybmVyIGRvIHdvcmsgKGNoYW5nZSBwcm9qZWN0cyB0byB3aWRlIG9yIG5hcnJvdylcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWljb25cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGJyb2FkZW5Qcm9qZWN0Q29udGFpbmVyKCkpO1xufVxuXG5mdW5jdGlvbiBicm9hZGVuUHJvamVjdENvbnRhaW5lcigpIHtcbiAgLy8gVGFrZSBhbiBhcnJheSBvZiBlbGVtZW50cyBmcm9tIHRoZSBwYWdlIGFuZCB0b2dnbGUgYSBjbGFzcyAnYnJvYWQnIG9uIGVhY2hcbiAgZm9yIChsZXQgZWxlbWVudCBvZiBnZXRFbGVtZW50c1RvQnJvYWQoKSkge1xuICAgIHRvZ2dsZUJyb2FkKGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1pbmltaXplUHJvamVjdENvbnRhaW5lcigpIHtcbiAgLy8gVGFrZSBhbiBhcnJheSBvZiBlbGVtZW50cyBmcm9tIHRoZSBwYWdlIGFuZCB0b2dnbGUgYSBjbGFzcyAnYnJvYWQnIG9uIGVhY2hcbiAgZm9yIChsZXQgZWxlbWVudCBvZiBnZXRFbGVtZW50c1RvQnJvYWQoKSkge1xuICAgIGFkZEJyb2FkKGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEJyb2FkKGVsZW1lbnQpIHtcbiAgLy8gUmVtb3ZlIGNsYXNzICdicm9hZCcgZnJvbSBhbiBlbGVtZW50XG4gIC8vIHRoaXMgY2xhc3MgY2hhbmdlcyBsZWZ0LXNpZGUgcGFnZSBtZW51IG1ha2luZyBpdCBzbWFsbGVyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJyb2FkXCIpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVCcm9hZChlbGVtZW50KSB7XG4gIC8vIEFkZC9yZW1vdmUgY2xhc3MgJ2Jyb2FkJyB0byBhbiBlbGVtZW50XG4gIC8vIHRoaXMgY2xhc3MgY2hhbmdlcyBsZWZ0LXNpZGUgcGFnZSBtZW51IG1ha2luZyBpdCBzbWFsbGVyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImJyb2FkXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50c1RvQnJvYWQoKSB7XG4gIC8vIFRha2Ugc29tZSBET00gZWxlbWVudHMgZnJvbSB0aGUgcGFnZVxuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3RcIik7XG4gIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RcIik7XG4gIGxldCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LWljb25cIik7XG4gIGxldCBwcm9qZWN0VGl0bGVDb3VudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgXCJwcm9qZWN0LXRpdGxlLWNvdW50LWNvbnRhaW5lciBcIlxuICApO1xuICBsZXQgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtcHJvamVjdC1idG5cIik7XG4gIGxldCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtZm9ybVwiKTtcbiAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0XCIpO1xuICBsZXQgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0LXByb2plY3RcIik7XG5cbiAgLy8gUHV0IHRoZW0gaW4gdGhlIGFycmF5IGFuZCByZXR1cm4gaXRcbiAgbGV0IGVsZW1lbnRzID0gW1xuICAgIGNvbnRlbnQsXG4gICAgcHJvamVjdExpc3QsXG4gICAgLi4ucHJvamVjdCxcbiAgICAuLi5wcm9qZWN0SWNvbixcbiAgICAuLi5wcm9qZWN0VGl0bGVDb3VudENvbnRhaW5lcixcbiAgICAuLi5kZWxldGVQcm9qZWN0QnRuLFxuICAgIG5ld1Byb2plY3RGb3JtLFxuICAgIG5ld1Byb2plY3QsXG4gICAgc3VibWl0UHJvamVjdCxcbiAgXTtcbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgeyBzaG93UHJvamVjdHMsIG1pbmltaXplUHJvamVjdENvbnRhaW5lciB9O1xuIiwiZnVuY3Rpb24gc3RhcnNDaGFuZ2VDb2xvcnMoKSB7XG4gIGFjdGl2YXRlRmlyc3RTdGFyKCk7XG4gIGFjdGl2YXRlU2Vjb25kU3RhcigpO1xuICBhY3RpdmF0ZVRoaXJkU3RhcigpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUZpcnN0U3RhcigpIHtcbiAgZ2V0U3RhcjEoKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWN0aXZhdGVTdGFyKDEpKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVTZWNvbmRTdGFyKCkge1xuICBnZXRTdGFyMigpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhY3RpdmF0ZVN0YXIoMikpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVRoaXJkU3RhcigpIHtcbiAgZ2V0U3RhcjMoKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWN0aXZhdGVTdGFyKDMpKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVTdGFyKG51bWJlcikge1xuICAvLyBNYWtlIGEgc3RhciB3aXRoIGEgY2VydGFpbiBudW1iZXIgY2hhbmdlIGl0cyBzdHlsZVxuICAvLyBOdW1iZXIgY2FuIGJlIDEsIDIgb3IgMyBiZWNhdXNlIHRoZXJlIGFyZSBhIHRvdGFsIG9mIDMgc3RhclxuICBpZiAobnVtYmVyIDwgMSB8fCBudW1iZXIgPiAzKVxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYENhbid0IGFjdGl2YXRlIHN0YXIgJHtudW1iZXJ9IGluIGFjdGl2YXRlU3RhcigpLiBQb3NzaWJsZSB2YWx1ZXM6IDEsIDIsIDNgXG4gICAgKTtcbiAgc3dpdGNoIChudW1iZXIpIHtcbiAgICBjYXNlIDE6XG4gICAgICBvdXRsaW5lU2Vjb25kU3RhcigpO1xuICAgICAgb3V0bGluZVRoaXJkU3RhcigpO1xuICAgICAgcmVtb3ZlQ29sb3JGcm9tQWxsU3RhcnMoKTtcbiAgICAgIGFkZE1lZGl1bU9ubW91c2VvdmVyKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBmaWxsU2Vjb25kU3RhcigpO1xuICAgICAgYWRkQ29sb3JUd29TdGFycygpO1xuICAgICAgb3V0bGluZVRoaXJkU3RhcigpO1xuICAgICAgZGVjb2xvclRoaXJkU3RhcigpO1xuICAgICAgYWRkTWVkaXVtT25tb3VzZW92ZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGZpbGxTZWNvbmRTdGFyKCk7XG4gICAgICBmaWxsVGhpcmRTdGFyKCk7XG4gICAgICBhZGRDb2xvclRocmVlU3RhcnMoKTtcbiAgICAgIHJlbW92ZU1lZGl1bU9ubW91c2VvdmVyKCk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TRUNPTkQgU1RBUlxuZnVuY3Rpb24gZmlsbFNlY29uZFN0YXIoKSB7XG4gIC8vIEdldCB0aGUgY2hpbGQgb2YgdGhlIHByaW9yaXR5IGFuZCBtYWtlIGl0IGZpbGxlZCBzdGFyXG4gIGdldFN0YXIyKCkuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN0YXJcIik7XG59XG5cbmZ1bmN0aW9uIG91dGxpbmVTZWNvbmRTdGFyKCkge1xuICAvLyBHZXQgdGhlIGNoaWxkIG9mIHRoZSBwcmlvcml0eSBhbmQgbWFrZSBpdCBvdXRsaW5lZCBzdGFyXG4gIGdldFN0YXIyKCkuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN0YXItb3V0bGluZVwiKTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVEhJUkQgU1RBUlxuXG5mdW5jdGlvbiBmaWxsVGhpcmRTdGFyKCkge1xuICAvLyBHZXQgdGhlIGNoaWxkIG9mIHRoZSBwcmlvcml0eSBhbmQgbWFrZSBpdCBmaWxsZWQgc3RhclxuICBnZXRTdGFyMygpLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdGFyXCIpO1xufVxuXG5mdW5jdGlvbiBvdXRsaW5lVGhpcmRTdGFyKCkge1xuICAvLyBHZXQgdGhlIGNoaWxkIG9mIHRoZSBwcmlvcml0eSBhbmQgbWFrZSBpdCBvdXRsaW5lZCBzdGFyXG4gIGdldFN0YXIzKCkuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN0YXItb3V0bGluZVwiKTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEhlbHBlcnNcblxuZnVuY3Rpb24gcmVtb3ZlTWVkaXVtT25tb3VzZW92ZXIoKSB7XG4gIC8vIFNlY29uZCBzdGFyIGhhcyBhIGNsYXNzIFwib25tb3VzZW92ZXJcIiB3aXRoIGEgaG92ZXIgZWZmZWN0XG4gIC8vIFdoZW4gdGhlIDNyZCBzdGFyIGlzIGNob3NlbiByZW1vdmUgdGhpcyBob3ZlciBlZmZlY3QgZnJvbSB0aGUgMm5kIHN0YXJcbiAgZ2V0U3RhcjIoKS5jbGFzc0xpc3QucmVtb3ZlKFwib25tb3VzZW92ZXJcIik7XG59XG5cbmZ1bmN0aW9uIGFkZE1lZGl1bU9ubW91c2VvdmVyKCkge1xuICAvLyBTZWNvbmQgc3RhciBoYXMgYSBjbGFzcyBcIm9ubW91c2VvdmVyXCIgd2l0aCBhIGhvdmVyIGVmZmVjdFxuICAvLyBXaGVuIHRoZSAxc3QgT1IgMm5kIHN0YXIgaXMgY2hvc2VuIGFkZCB0aGlzIGhvdmVyIGVmZmVjdCB0byB0aGUgMm5kIHN0YXJcbiAgZ2V0U3RhcjIoKS5jbGFzc0xpc3QuYWRkKFwib25tb3VzZW92ZXJcIik7XG59XG5cbmZ1bmN0aW9uIHN0YXJJc091dGxpbmVkKHN0YXIpIHtcbiAgcmV0dXJuIHN0YXIuY2hpbGRyZW5bMF0uZ2V0QXR0cmlidXRlKFwibmFtZVwiKSA9PT0gXCJzdGFyLW91dGxpbmVcIjtcbn1cblxuZnVuY3Rpb24gYWRkQ29sb3JUd29TdGFycygpIHtcbiAgcmVtb3ZlQ29sb3JGcm9tQWxsU3RhcnMoKTtcbiAgZ2V0U3RhcjEoKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtMVwiKTtcbiAgZ2V0U3RhcjIoKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtMVwiKTtcbn1cbmZ1bmN0aW9uIGFkZENvbG9yVGhyZWVTdGFycygpIHtcbiAgcmVtb3ZlQ29sb3JGcm9tQWxsU3RhcnMoKTtcbiAgZ2V0U3RhcjEoKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtMlwiKTtcbiAgZ2V0U3RhcjIoKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtMlwiKTtcbiAgZ2V0U3RhcjMoKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtMlwiKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ29sb3JGcm9tQWxsU3RhcnMoKSB7XG4gIGRlY29sb3JGaXJzdFN0YXIoKTtcbiAgZGVjb2xvclNlY29uZFN0YXIoKTtcbiAgZGVjb2xvclRoaXJkU3RhcigpO1xufVxuXG5mdW5jdGlvbiBkZWNvbG9yRmlyc3RTdGFyKCkge1xuICBnZXRTdGFyMSgpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC0xXCIpO1xuICBnZXRTdGFyMSgpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC0yXCIpO1xufVxuZnVuY3Rpb24gZGVjb2xvclNlY29uZFN0YXIoKSB7XG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTFcIik7XG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTJcIik7XG59XG5mdW5jdGlvbiBkZWNvbG9yVGhpcmRTdGFyKCkge1xuICBnZXRTdGFyMygpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC0xXCIpO1xuICBnZXRTdGFyMygpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC0yXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFyMSgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0xXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFyMigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0yXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFyMygpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0zXCIpO1xufVxuXG5leHBvcnQgeyBzdGFyc0NoYW5nZUNvbG9ycywgYWN0aXZhdGVTdGFyIH07XG4iLCJpbXBvcnQgeyBnZXRDb21wdXRlZERpc3BsYXkgfSBmcm9tIFwiLi4vdGFza3MvZGV0YWlsc1RvZ2dsZS5qc1wiO1xuaW1wb3J0IHsgbWluaW1pemVQcm9qZWN0Q29udGFpbmVyIH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuXG5mdW5jdGlvbiByZXNwb25zaXZlKCkge1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIC8vIFJlc2l6aW5nIHdpbmRvdyBtYWtlcyBtaWRkbGUgY29sdW1uIGZpdFxuICB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEwMjRweClcIikuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgIC8vIElmIHNjcmVlbiBpcyBuYXJyb3dlciB0aGFuIDEwMjRweCBhbmQgZGV0YWlscyBhcmUgb3BlbiAocmlnaHQgc2lkZSBvZiB0aGUgcGFnZSlcbiAgICAvLyB0aGFuIG1pbmltaXplIGxlZnQgc2lkZSBhbmQgbWFrZSBcIm1haW5cIiBmaXQgdGhlIHdob2xlIHNlY29uZCBjb2x1bW5cbiAgICBpZiAoc2NyZWVuTGVzc1RoZW4xMDI0KCkgJiYgZ2V0Q29tcHV0ZWREaXNwbGF5KGRldGFpbHMpID09PSBcImZsZXhcIikge1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzRcIjtcbiAgICAgIG1pbmltaXplUHJvamVjdENvbnRhaW5lcigpO1xuICAgICAgLy8gRG9lc24ndCBtYXR0ZXIgdGhlIHNpemUgb2YgdGhlIHNjcmVlbixcbiAgICAgIC8vIGlmIGRldGFpbHMgYXJlIGNsb3NlZCAnbWFpbicgZml0IHRoZSB3aG9sZSBzZWNvbmQgY29sdW1uXG4gICAgfSBlbHNlIGlmIChnZXRDb21wdXRlZERpc3BsYXkoZGV0YWlscykgPT09IFwibm9uZVwiKSB7XG4gICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvNFwiO1xuICAgICAgLy8gRWxzZSBmb3IgZS5nLiB3aGVuIHNjcmVlbiBhcmUgd2lkZXIgdGhlbiAxMDI0cHggYW5kXG4gICAgICAvLyBkZXRhaWxzIGFyZSBvcGVuLCB0aGVuIG1haW4gaXMgdGhlIGNvbHVtbiBpbiB0aGUgbWlkZGxlXG4gICAgfSBlbHNlIHtcbiAgICAgIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi8zXCI7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2NyZWVuTGVzc1RoZW4xMDI0KCkge1xuICAvLyBDaGVjayBpZiBzY3JlZW4gaXMgbGVzcyB0aGVuIDEwMjRweCB3aWRlXG4gIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEwMjRweClcIikubWF0Y2hlcztcbn1cblxuLy8gV2hlbiByZXNpemluZyB3aW5kb3cgbWlkZGxlIGNvbHVtbiByZXNpemUgaXRzZWxmIHRvIGJlIHJlc3BvbnNpdmVcbmV4cG9ydCB7IHJlc3BvbnNpdmUsIHNjcmVlbkxlc3NUaGVuMTAyNCB9O1xuIiwiaW1wb3J0IHsgdGFza0ZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5LmpzXCI7XG5pbXBvcnQgeyByZW5kZXJBbGxQcm9qZWN0cyB9IGZyb20gXCIuLi9wcm9qZWN0cy9yZW5kZXIuanNcIjtcblxuZnVuY3Rpb24gYWRkVGFza1RvKGFyciwgbnVtYmVyKSB7XG4gIGNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC10b2RvXCIpO1xuXG4gIHN1Ym1pdFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIFByZXZlbnQgZGVmYXVsdCBzdWJtaXQgYmVoYXZpb3JcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIEdldCB0YXNrIG5hbWUgZnJvbSBVc2VyIGFuZCBhZGQgaXQgdG8gdGFza3MgYXJyYXlcbiAgICBwdXNoVGFza1RvKGFycltudW1iZXJdLnRhc2tzKTtcbiAgICBjb25zb2xlLnRhYmxlKGFycltudW1iZXJdLnRhc2tzKTtcbiAgICAvLyBSZXJlbmRlciBhcnJheVxuICAgIHJlbmRlckFsbFByb2plY3RzKGFyciwgbnVtYmVyKTtcblxuICAgIHJldHVybiBhcnI7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwdXNoVGFza1RvKGFycikge1xuICAvLyBQdXNoIHRhc2sgdG8gYXJyYXlcbiAgYXJyLnB1c2goZ2V0VGFzaygpKTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gZ2V0VGFzaygpIHtcbiAgLy8gR2V0IHVzZXIgaW5wdXQgdmFsdWUsIHNhdmUgaXRcbiAgbGV0IHRhc2sgPSB0YXNrRmFjdG9yeSh7IHRpdGxlOiBnZXRJbnB1dFZhbHVlKCkgfSk7XG4gIC8vIGFuZCBjbGVhciBpbnB1dFxuICBjbGVhclRhc2tJbnB1dCgpO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgLy8gR2V0IHVzZXIgaW5wdXQgdmFsdWUgYXMgTmV3IFRhc2sgOiBTVFJJTkdcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG9cIikudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0lucHV0KCkge1xuICAvLyBDbGVhciB1c2VyIGlucHV0XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG9cIikudmFsdWUgPSBcIlwiO1xufVxuXG5leHBvcnQgeyBnZXRUYXNrLCBhZGRUYXNrVG8gfTtcbiIsImltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUYXNrc0J5TnVtYmVyKG51bWJlciA9IDEpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiBzaW1wbHkgY3JlYXRlcyBhbiBhcnJheSB3aXRoIGRlZmF1bHQgdGFza3MgaW4gaXRcbiAgLy8gTnVtYmVyIGlzIGp1c3QgYSBudW1iZXIgb2YgYnVuZGxlIGZyb20gMSB0byAzXG4gIGxldCBidW5kbGUxID0gW1xuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIGVuZ2xpc2hcIixcbiAgICAgIGRhdGU6IFwiMTUuMDMuMjAyNVwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICBub3RlOiBcInNvbWV0aGluZ1wiLFxuICAgIH0pLFxuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIGVuZ2xpc2ggYWdhaW5cIixcbiAgICAgIGRhdGU6IFwiMTUuMDMuMjAyOFwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiQW5kIEFnYWluIVwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICBub3RlOiBcInNvbWV0aGluZ1wiLFxuICAgIH0pLFxuICBdO1xuXG4gIGxldCBidW5kbGUyID0gW1xuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIGdlcm1hblwiLFxuICAgICAgZGF0ZTogXCIxNS4wMy4yMDE4XCIsXG4gICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICBub3RlOiBcInNvbWV0aGluZ1wiLFxuICAgIH0pLFxuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIE1hdGghXCIsXG4gICAgICBkYXRlOiBcIjE1LjAzLjIwMThcIixcbiAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJMRUhSTkUgREVVVFNDSCEhIVwiLFxuICAgICAgZGF0ZTogXCIxNS4wMy4yMDE4XCIsXG4gICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgfSksXG4gIF07XG5cbiAgbGV0IGJ1bmRsZTMgPSBbXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTWFrZSBzdHVmZlwiLFxuICAgICAgbm90ZTogXCJzb21ldGhpbmdcIixcbiAgICAgIGRvbmU6IHRydWUsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiRG8gc3R1ZmZcIixcbiAgICAgIGRhdGU6IFwiMTAuMDEuMjAyMFwiLFxuICAgICAgZG9uZTogdHJ1ZSxcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJSdW4gc3R1ZmZcIixcbiAgICAgIG5vdGU6IFwic29tZXRoaW5nXCIsXG4gICAgICBkb25lOiB0cnVlLFxuICAgIH0pLFxuICBdO1xuXG4gIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIGJ1bmRsZTE7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gYnVuZGxlMjtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBidW5kbGUzO1xuICB9XG59XG5cbmV4cG9ydCB7IGdldFRhc2tzQnlOdW1iZXIgfTtcbiIsImltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuaW1wb3J0ICogYXMgRGV0YWlsc1RvZ2dsZSBmcm9tIFwiLi9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tzRnJvbShhcnIpIHtcbiAgLy8gVGFrZSB0aGUgY29sbGNldGlvbiBvZiBhbGwgZGVsZXRlIGNyb3NzIGJ1dHRvbnMgZnJvbSB0YXNrcyBieSBjbGFzcyBuYW1lXG4gIGxldCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS10b2RvLWJ0blwiKTtcbiAgLy8gTG9vcCB0aHJvdWdoIGNvbGxlY3Rpb24gYW5kIGFkZCBldmVudCBsaXN0ZW5lciB0byBlYWNoIGJ1dHRvblxuICBmb3IgKGxldCBidXR0b24gb2YgYnV0dG9ucykge1xuICAgIGRlbGV0ZUJ0blJlbW92ZVRhc2soYnV0dG9uLCBhcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUJ0blJlbW92ZVRhc2soYnV0dG9uLCBhcnIpIHtcbiAgLy8gRnVuY3Rpb24gdG8gYXNzaWduIEV2ZW50IGxpc3RlbmVyIHRvIGJ1dHRvbnNcbiAgLy8gdG8gcmVtb3ZlIHBhcnRpY3VsYXIgdGFza3MgZnJvbSBwYWdlXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAvLyBnZXQgSWQgb2YgYSBidXR0b24gdG8gd2hpY2ggbGlzdGVuZXIgaXMgYXNzaWduZWRcbiAgICBsZXQgYnRuSWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgLy8gZ2V0IG9ubHkgbnVtYmVyIGFmdGVyIHRoZSBoeXBoZW4gZnJvbSBJZFxuICAgIGxldCBudW1iZXIgPSBidG5JZC5zcGxpdChcIi1cIilbMV07XG4gICAgLy8gQmVmb3JlIHJlbW92aW5nIGFuIGl0ZW0gbWFrZSBzdXJlIHRvIGNsb3NlIGl0cyBkZXRhaWxzXG4gICAgY2xvc2VEZXRhaWxzT2ZEZWxldGVkVGFzayhudW1iZXIpO1xuICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gdGhlIGFycmF5IGJ5IHRoYXQgbnVtYmVyXG4gICAgYXJyLnNwbGljZShudW1iZXIsIDEpO1xuICAgIC8vIFJlcmVuZGVyIGFycmF5XG4gICAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG4gICAgLy8gQXZvaWQgZmlyaW5nIHBhcmVudCBlbGVtZW50IGxpc3RlbmVyIGFmdGVyIGNsaWNraW5nIG9uIHRoZSBidXR0b25cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VEZXRhaWxzT2ZEZWxldGVkVGFzayhudW1iZXIpIHtcbiAgLy8gQmVmb3JlIHJlbW92aW5nIGFuIGl0ZW0gbWFrZSBzdXJlIGhpcyBkZXRhaWxzIGFyZSBub3Qgc2hvd25cbiAgLy8gSWYgdGhleSBhcmUgdGhlbiBoaWRlIHRoZW1cbiAgaWYgKERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCkgPT09IG51bWJlcilcbiAgICBEZXRhaWxzVG9nZ2xlLmhpZGVEZXRhaWxzKCk7XG59XG5cbmV4cG9ydCB7IGRlbGV0ZVRhc2tzRnJvbSB9O1xuIiwiaW1wb3J0ICogYXMgRGV0YWlsc1RvZ2dsZSBmcm9tIFwiLi9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5pbXBvcnQgeyBhY3RpdmF0ZVN0YXIgfSBmcm9tIFwiLi4vc3R5bGUvcHJpb3JpdHkuanNcIjtcbmltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuXG5mdW5jdGlvbiBwdXRUYXNrSW5mb1RvSW5wdXQodGFzaykge1xuICAvLyBGdW5jdGlvbiB0byBwdXQgaW5mbyBmcm9tIHRhc2tzIGluIGlucHV0cyB3aGVuIGRldGFpbHMgYXJlIHNob3duXG4gIHNldE5hbWUodGFzay50aXRsZSk7XG4gIHNldERhdGUodGFzay5kYXRlKTtcbiAgc2V0UGlvcml0eSh0YXNrLnByaW9yaXR5KTtcbiAgc2V0Tm90ZSh0YXNrLm5vdGUpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUYXNrT25JbnB1dChwcm9qZWN0cywgbnVtYmVyKSB7XG4gIC8vIENoYW5nZSBhIHRhc2sgd2l0aCBpbnB1dCBmcm9tIERldGFpbHMgV2luZG93XG4gIGNoYW5nZVRpdGxlT25JbnB1dChwcm9qZWN0c1tudW1iZXJdLnRhc2tzKTtcbiAgY2hhbmdlRGF0ZU9uSW5wdXQocHJvamVjdHNbbnVtYmVyXS50YXNrcyk7XG4gIGNoYW5nZVByaW9yaXR5T25JbnB1dChwcm9qZWN0c1tudW1iZXJdLnRhc2tzKTtcbiAgY2hhbmdlTm90ZU9uSW5wdXQocHJvamVjdHNbbnVtYmVyXS50YXNrcyk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRpdGxlT25JbnB1dChhcnIpIHtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW5hbWUtY2hhbmdlclwiKTtcblxuICBpbnB1dC5vbmlucHV0ID0gKCkgPT4gY2hhbmdlVGl0bGUoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGl0bGUoYXJyKSB7XG4gIC8vIGdldCBudW1iZXIgb2YgdGFzayBmcm9tIGRldGFpbHNcbiAgbGV0IHRhc2tOdW1iZXIgPSBEZXRhaWxzVG9nZ2xlLmdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpO1xuICAvLyBVc2UgdGhpcyBudW1iZXIgdG8gZ2V0IHRvIHRhc2sudGl0bGUgaW4gYXJyYXlcbiAgbGV0IHRhc2sgPSBhcnJbdGFza051bWJlcl07XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1uYW1lLWNoYW5nZXJcIik7XG4gIC8vIFRhc2sgdGl0bGUgaXMgbm93IHVzZXIgaW5wdXQgdmFsdWVcbiAgdGFzay50aXRsZSA9IGlucHV0LnZhbHVlO1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZURhdGVPbklucHV0KGFycikge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG5cbiAgaW5wdXQub25pbnB1dCA9ICgpID0+IGNoYW5nZURhdGUoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRGF0ZShhcnIpIHtcbiAgLy8gZ2V0IG51bWJlciBvZiB0YXNrIGZyb20gZGV0YWlsc1xuICBsZXQgdGFza051bWJlciA9IERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCk7XG4gIC8vIFVzZSB0aGlzIG51bWJlciB0byBnZXQgdG8gdGFzay5kYXRlIGluIGFycmF5XG4gIGxldCB0YXNrID0gYXJyW3Rhc2tOdW1iZXJdO1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG4gIC8vIFRhc2sgZGF0ZSBpcyBub3cgZm9ybWF0dGVkIGRhdGUgaW5wdXQgdmFsdWVcbiAgdGFzay5kYXRlID0gZm9ybWF0RGF0ZTIoaW5wdXQudmFsdWUpO1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5T25JbnB1dChhcnIpIHtcbiAgbGV0IHN0YXJzID0gW1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0xXCIpLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0yXCIpLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0zXCIpLFxuICBdO1xuXG4gIGZvciAobGV0IHN0YXIgb2Ygc3RhcnMpIHtcbiAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjaGFuZ2VQcmlvcml0eShhcnIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VQcmlvcml0eShhcnIpIHtcbiAgLy8gZ2V0IG51bWJlciBvZiB0YXNrIGZyb20gZGV0YWlsc1xuICBsZXQgdGFza051bWJlciA9IERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCk7XG4gIC8vIFVzZSB0aGlzIG51bWJlciB0byBnZXQgdG8gdGFzay5kYXRlIGluIGFycmF5XG4gIGxldCB0YXNrID0gYXJyW3Rhc2tOdW1iZXJdO1xuICBsZXQgaW5wdXQgPSBnZXRQcmlvcml0eUlucHV0KCk7XG4gIC8vIFRhc2sgZGF0ZSBpcyBub3cgZm9ybWF0dGVkIGRhdGUgaW5wdXQgdmFsdWVcbiAgdGFzay5wcmlvcml0eSA9IGlucHV0O1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG59XG5cbmZ1bmN0aW9uIGdldFByaW9yaXR5SW5wdXQoKSB7XG4gIGxldCBzdGFyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0xXCIpO1xuXG4gIGlmIChzdGFyMS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZC0xXCIpKSB7XG4gICAgcmV0dXJuIFwibWVkaXVtXCI7XG4gIH0gZWxzZSBpZiAoc3RhcjEuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWQtMlwiKSkge1xuICAgIHJldHVybiBcImhpZ2hcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJsb3dcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VOb3RlT25JbnB1dChhcnIpIHtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlLWNoYW5nZXJcIik7XG5cbiAgaW5wdXQub25pbnB1dCA9ICgpID0+IGNoYW5nZU5vdGUoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlTm90ZShhcnIpIHtcbiAgLy8gZ2V0IG51bWJlciBvZiB0YXNrIGZyb20gZGV0YWlsc1xuICBsZXQgdGFza051bWJlciA9IERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCk7XG4gIC8vIFVzZSB0aGlzIG51bWJlciB0byBnZXQgdG8gdGFzay5ub3RlIGluIGFycmF5XG4gIGxldCB0YXNrID0gYXJyW3Rhc2tOdW1iZXJdO1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGUtY2hhbmdlclwiKTtcbiAgLy8gVGFzayBOb3RlIGlzIG5vdyBmb3JtYXR0ZWQgTm90ZSBpbnB1dCB2YWx1ZVxuICB0YXNrLm5vdGUgPSBpbnB1dC52YWx1ZTtcbiAgLy8gcmVyZW5kZXIgdG8gc2VlIHRoZSBjaGFuZ2VzXG4gIHJlbmRlckFsbFRhc2tzRnJvbShhcnIpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU2V0IGlucHV0XG5mdW5jdGlvbiBzZXROYW1lKG5hbWUpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW5hbWUtY2hhbmdlclwiKS52YWx1ZSA9IG5hbWU7XG59XG5cbmZ1bmN0aW9uIHNldERhdGUoZGF0ZSkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUgPSBmb3JtYXREYXRlKGRhdGUpO1xuICBmb3JtYXREYXRlKGRhdGUpO1xufVxuXG5mdW5jdGlvbiBzZXRQaW9yaXR5KGxldmVsKSB7XG4gIGlmIChsZXZlbCA9PT0gXCJoaWdoXCIpIHtcbiAgICBhY3RpdmF0ZVN0YXIoMyk7XG4gIH0gZWxzZSBpZiAobGV2ZWwgPT09IFwibWVkaXVtXCIpIHtcbiAgICBhY3RpdmF0ZVN0YXIoMik7XG4gIH0gZWxzZSBpZiAobGV2ZWwgPT09IFwibG93XCIpIHtcbiAgICBhY3RpdmF0ZVN0YXIoMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Tm90ZShub3RlKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1jaGFuZ2VyXCIpLnZhbHVlID0gbm90ZTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIC8vIElmIGRhdGUgaXMgdW5kZWZpbmVkIHlldCwgdGhlbiByZXR1cm4gbm90aGluZyBcIlwiXG4gIGlmICghZGF0ZSkgcmV0dXJuIFwiXCI7XG4gIC8vIERhdGUgZm9ybWF0dGluZzogZnJvbSBcImRkLm1tLnl5eXlcIiB0byBcInl5eXktTU0tZGRcIlxuICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi5cIilbMF07XG4gIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCIuXCIpWzFdO1xuICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCIuXCIpWzJdO1xuXG4gIGxldCBmb3JtYXR0ZWQgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICByZXR1cm4gZm9ybWF0dGVkO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlMihkYXRlKSB7XG4gIC8vIElmIGRhdGUgaXMgdW5kZWZpbmVkIHlldCwgdGhlbiByZXR1cm4gbm90aGluZyBcIlwiXG4gIGlmICghZGF0ZSkgcmV0dXJuIFwiXCI7XG4gIC8vIERhdGUgZm9ybWF0dGluZzogZnJvbSAgXCJ5eXl5LU1NLWRkXCIgdG8gXCJkZC5tbS55eXl5XCJcbiAgbGV0IGRheSA9IGRhdGUuc3BsaXQoXCItXCIpWzJdO1xuICBsZXQgbW9udGggPSBkYXRlLnNwbGl0KFwiLVwiKVsxXTtcbiAgbGV0IHllYXIgPSBkYXRlLnNwbGl0KFwiLVwiKVswXTtcblxuICBsZXQgZm9ybWF0dGVkID0gYCR7ZGF5fS4ke21vbnRofS4ke3llYXJ9YDtcbiAgcmV0dXJuIGZvcm1hdHRlZDtcbn1cblxuZXhwb3J0IHsgcHV0VGFza0luZm9Ub0lucHV0LCBjaGFuZ2VUYXNrT25JbnB1dCB9O1xuIiwiaW1wb3J0IHsgc2NyZWVuTGVzc1RoZW4xMDI0IH0gZnJvbSBcIi4uL3N0eWxlL3Jlc2l6ZS5qc1wiO1xuaW1wb3J0ICogYXMgRGV0YWlsc0lucHV0IGZyb20gXCIuL2RldGFpbHNJbnB1dC5qc1wiO1xuXG5mdW5jdGlvbiB0YXNrc1RvZ2dsZURldGFpbHMoYXJyKSB7XG4gIC8vIE1ha2UgdG9kbyB0YXNrcyBzaG93IGRldGFpbHMgb24gY2xpY2sgKGZyb20gcmlnaHQgc2lkZSlcbiAgdG9kb0xpc3RTaG93RGV0YWlscyhhcnIpO1xuICAvLyBNYWtlIGJ1dHRvbiBpbiBkZXRhaWxzIGludGVyYWN0OiBoaWRlIGRldGFpbHNcbiAgQXJyb3dIaWRlRGV0YWlscygpO1xufVxuXG5mdW5jdGlvbiB0b2RvTGlzdFNob3dEZXRhaWxzKGFycikge1xuICAvLyBNYWtlIHRvZG8gbGlzdHMgc2hvdyBkZXRhaWxzIG9uY2xpY2tcbiAgbGV0IHRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9cIik7XG5cbiAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBnZXQgSWQgb2YgYSB0YXNrIHRvIHdoaWNoIGxpc3RlbmVyIGlzIGFzc2lnbmVkXG4gICAgICBsZXQgdGFza0lkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgLy8gZ2V0IG9ubHkgbnVtYmVyIGZyb20gSWQgYWZ0ZXIgdGhlIGh5cGhlblxuICAgICAgbGV0IG51bWJlciA9IHRhc2tJZC5zcGxpdChcIi1cIilbMV07XG4gICAgICAvLyBQYXNzIGEgbnVtYmVyIG9mIHRoZSBjbGlja2VkIHRhc2sgdG8gZGV0YWlsc1xuICAgICAgdG9nZ2xlRGV0YWlscyhudW1iZXIpO1xuICAgICAgLy8gUHV0IGluZm8gZnJvbSB0YXNrcyBpbiBpbnB1dHMgd2hlbiBkZXRhaWxzIGFyZSBzaG93blxuICAgICAgRGV0YWlsc0lucHV0LnB1dFRhc2tJbmZvVG9JbnB1dChhcnJbbnVtYmVyXSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gQXJyb3dIaWRlRGV0YWlscygpIHtcbiAgLy8gTWFrZSBBcnJvdyBoaWRlIERldGFpbHMgb25jbGlja1xuICBsZXQgYXJyb3dCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWRldGFpbHMtYnRuXCIpO1xuICBhcnJvd0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZURldGFpbHMpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVEZXRhaWxzKG51bWJlcikge1xuICBsZXQgaWROdW1iZXIgPSBnZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKTtcblxuICAvLyBpZiBkZXRhaWxzIGFyZSB2aXNpYmxlIG9uIHRoZSBwYWdlIEFORFxuICAvLyBpZiB1c2VyIGNsaWNrcyBvbiB0aGUgc2FtZSB0YXNrIDJ4IHRoYW4gaGlkZSBkZXRhaWxzXG4gIGlmIChkZXRhaWxzQXJlU2hvd24oKSAmJiBpZE51bWJlciA9PT0gbnVtYmVyKSB7XG4gICAgaGlkZURldGFpbHMoKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93RGV0YWlscyhudW1iZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRldGFpbHNBcmVTaG93bigpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIC8vIEFyZSBkZXRhaWxzIHNob3duIG9uIHRoZSBwYWdlPyBSZXR1cm4gYm9vbGVhbjpcbiAgcmV0dXJuIGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSAhPT0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIC8vIFRha2UgaWQgb2YgdGhlIGRldGFpbHMgY2hpbGRcbiAgbGV0IGRldGFpbHNDb250YWluZXJJZCA9IGRldGFpbHMuY2hpbGRyZW5bMF0uaWQ7XG4gIC8vIFRha2UgYSBudW1iZXIgZnJvbSB0aGF0IGlkIGFuZCByZXR1cm4gaXRcbiAgbGV0IGlkTnVtYmVyID0gZGV0YWlsc0NvbnRhaW5lcklkLnNwbGl0KFwiLVwiKVsyXTtcbiAgcmV0dXJuIGlkTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBzZXREZXRhaWxzSWRUbyhudW1iZXIpIHtcbiAgLy8gRmlyc3QgbWFrZSBkZXRhaWxzIElEIHRoZSBzYW1lIGFzIGluaXRpYWwgSUQgKHdpdGggbm8gbnVtYmVycylcbiAgLy8gQW5vdGhlciB3b3JkcyByZW1vdmUgYWxsIGV4aXN0aW5nIG51bWJlcnMgZnJvbSBpdFxuICBtYWtlRGV0YWlsc0RlZmF1bHQoKTtcbiAgLy8gVGhlbiBwYXNzIGEgbnVtYmVyIHRvIGl0XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBkZXRhaWxzLmNoaWxkcmVuWzBdLmlkICs9IGAtJHtudW1iZXJ9YDtcbn1cblxuZnVuY3Rpb24gaGlkZURldGFpbHMoKSB7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuICBoaWRlKGRldGFpbHMpO1xuICAvLyBXaGVuIGRldGFpbHMgYXJlIGhpZGRlbiB0aGUgbWFpbiBjb2x1bW4gd2lsbCBiZSBicm9hZGVyXG4gIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gIC8vIFdoZW4gZGV0YWlscyBhcmUgaGlkZGVuIHRoZWlyIGRldGFpbHMtY29udGFpbmVyLUlEIHdpbGwgYmUgZGVmYXVsdCB3aXRoIG5vIG51bWJlclxuICBtYWtlRGV0YWlsc0RlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gc2hvd0RldGFpbHMobnVtYmVyKSB7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuICBzaG93QXNGbGV4KGRldGFpbHMpO1xuICAvLyBBbHNvIHNldCBuZXcgSUQgbnVtYmVyIHRvIGRldGFpbHMgY29udGFpbmVyIChvbmx5IGlmIGl0IGRvZXNuJ3QgaGF2ZSBJRCBhbHJlYWR5KVxuICBzZXREZXRhaWxzSWRUbyhudW1iZXIpO1xuICAvLyBJZiBzY3JlZW4gaXMgYmlnZ2VyIHRoYW4gMTAyNCB0aGVuIG1ha2UgXCJtYWluXCIgdGhlIG1pZGRsZSBjb2x1bW4gb2YgMyBjb2x1bW5zXG4gIGlmICghc2NyZWVuTGVzc1RoZW4xMDI0KCkpIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi8zXCI7XG59XG5cbmZ1bmN0aW9uIG1ha2VEZXRhaWxzRGVmYXVsdCgpIHtcbiAgLy8gQ2hhbmdlIElEIG9mIGNoaWxkIG9mIHRoZSBkZXRhaWxzIHRvIGRlZmF1bHQgXCJkZXRhaWxzLWNvbnRhaW5lclwiXG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBkZXRhaWxzLmNoaWxkcmVuWzBdLmlkID0gXCJkZXRhaWxzLWNvbnRhaW5lclwiO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZERpc3BsYXkoZWxlbWVudCkge1xuICBsZXQgY29tcHV0ZWREaXNwbGF5ID0gd2luZG93XG4gICAgLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIik7XG4gIHJldHVybiBjb21wdXRlZERpc3BsYXk7XG59XG5cbmZ1bmN0aW9uIHNob3dBc0ZsZXgoZWxlbWVudCkge1xuICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn1cblxuZnVuY3Rpb24gaGlkZShlbGVtZW50KSB7XG4gIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5leHBvcnQge1xuICB0YXNrc1RvZ2dsZURldGFpbHMsXG4gIGdldENvbXB1dGVkRGlzcGxheSxcbiAgZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyLFxuICBoaWRlRGV0YWlscyxcbiAgZGV0YWlsc0FyZVNob3duLFxufTtcbiIsImltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuaW1wb3J0ICogYXMgRGV0YWlsc1RvZ2dsZSBmcm9tIFwiLi9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5cbmZ1bmN0aW9uIGRvbmVCdG5zKGFycikge1xuICAvLyBUYWtlIHRoZSBjb2xsZWN0aW9uIG9mIGFsbCBjaGVja2JveGVzIGZyb20gdGFza3MgYnkgY2xhc3MgbmFtZVxuICBsZXQgY2hlY2tib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvLWljb24tY29udGFpbmVyXCIpO1xuICAvLyBMb29wIHRocm91Z2ggY29sbGVjdGlvbiBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggYnV0dG9uXG4gIGZvciAobGV0IGNoZWNrYm94IG9mIGNoZWNrYm94ZXMpIHtcbiAgICBkb25lQnRuQ29tcGxldGVUYXNrKGNoZWNrYm94LCBhcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRvbmVCdG5Db21wbGV0ZVRhc2soY2hlY2tib3gsIGFycikge1xuICAvLyBGdW5jdGlvbiB0byBhc3NpZ24gRXZlbnQgbGlzdGVuZXIgdG8gY2hlY2tib3hlc1xuICAvLyB0byBjb21wbGV0ZSBwYXJ0aWN1bGFyIHRhc2tzIGZyb20gcGFnZVxuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAvLyBnZXQgSWQgb2YgYSBjaGVja2JveCB0byB3aGljaCBsaXN0ZW5lciBpcyBhc3NpZ25lZFxuICAgIGxldCBjYm94SWQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuICAgIC8vIGdldCBvbmx5IG51bWJlciBhZnRlciB0aGUgaHlwaGVuIGZyb20gSWRcbiAgICBsZXQgbnVtYmVyID0gY2JveElkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAvLyBCZWZvcmUgY29tcGxldGluZyBhbiBpdGVtIG1ha2Ugc3VyZSB0byBjbG9zZSBpdHMgZGV0YWlsc1xuICAgIGNsb3NlRGV0YWlsc09mQ29tcGxldGVkVGFzayhudW1iZXIpO1xuICAgIC8vIElmIHRhc2sgaXMgZG9uZSB0aGVuIHVuZG9uZSBpdCwgZWxzZSBjb21wbGV0ZSBpdFxuICAgIGFycltudW1iZXJdLmRvbmUgPSAhYXJyW251bWJlcl0uZG9uZTtcbiAgICAvLyBSZXJlbmRlciBhcnJheVxuICAgIHJlbmRlckFsbFRhc2tzRnJvbShhcnIpO1xuICAgIC8vIEF2b2lkIGZpcmluZyBwYXJlbnQgZWxlbWVudCBsaXN0ZW5lciBhZnRlciBjbGlja2luZyBvbiB0aGUgY2hlY2tib3hcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VEZXRhaWxzT2ZDb21wbGV0ZWRUYXNrKG51bWJlcikge1xuICAvLyBCZWZvcmUgcmVtb3ZpbmcgYW4gaXRlbSBtYWtlIHN1cmUgaGlzIGRldGFpbHMgYXJlIG5vdCBzaG93blxuICAvLyBJZiB0aGV5IGFyZSB0aGVuIGhpZGUgdGhlbVxuICBpZiAoRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKSA9PT0gbnVtYmVyKVxuICAgIERldGFpbHNUb2dnbGUuaGlkZURldGFpbHMoKTtcbn1cblxuZXhwb3J0IHsgZG9uZUJ0bnMgfTtcbiIsImNvbnN0IHRhc2tGYWN0b3J5ID0gZnVuY3Rpb24gKHtcbiAgdGl0bGUgPSBcIlwiLFxuICBmcm9tID0gXCJcIixcbiAgZGF0ZSA9IFwiXCIsXG4gIHByaW9yaXR5ID0gXCJsb3dcIixcbiAgbm90ZSA9IFwiXCIsXG4gIGRvbmUgPSBmYWxzZSxcbn0pIHtcbiAgcmV0dXJuIHsgdGl0bGUsIGZyb20sIGRhdGUsIHByaW9yaXR5LCBub3RlLCBkb25lIH07XG59O1xuXG5leHBvcnQgeyB0YXNrRmFjdG9yeSB9O1xuIiwiaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuLi8uLi9JQ09OUy9jYWxlbmRhci5zdmdcIjtcbmltcG9ydCBOb3RlIGZyb20gXCIuLi8uLi9JQ09OUy9lZGl0LnN2Z1wiO1xuaW1wb3J0ICogYXMgRGVsZXRlVGFza0J0bnMgZnJvbSBcIi4vZGVsZXRlLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcbmltcG9ydCAqIGFzIFRhc2tEb25lIGZyb20gXCIuL2RvbmUuanNcIjtcblxuZnVuY3Rpb24gcmVuZGVyQWxsVGFza3NGcm9tKGFycikge1xuICAvLyBDbGVhciBhbGwgcHJldmlvdXNseSByZW5kZXJlZCBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG4gIGNsZWFyQ29udGVudE9mKFwidG9kb3NcIik7XG4gIC8vUmVuZGVyIGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXkgdG8gdGhlIHBhZ2VcbiAgZm9yIChsZXQgW2luZGV4LCBpdGVtXSBvZiBhcnIuZW50cmllcygpKSB7XG4gICAgcmVuZGVyVGFzayhpbmRleCwgaXRlbSk7XG4gIH1cbiAgLy8gTWFrZSBkZWxldGUgYnV0dG9ucyBvbiBjbGljayByZW1vdmUgdGFzayB0byB3aGljaCB0aGV5IGFyZSBhc3NpZ25lZFxuICBEZWxldGVUYXNrQnRucy5kZWxldGVUYXNrc0Zyb20oYXJyKTtcbiAgLy8gTWFrZSBlYWNoIHRhc2sgc2hvdyBpdHMgZGV0YWlscyBvbiBjbGlja1xuICBEZXRhaWxzVG9nZ2xlLnRhc2tzVG9nZ2xlRGV0YWlscyhhcnIpO1xuICAvLyBNYWtlIGVhY2ggdGFzayBjaGVja2JveCBjb21wbGV0ZSB0YXNrIGJ5IGNoYW5naW5nIGl0cyBjbGFzc1xuICBUYXNrRG9uZS5kb25lQnRucyhhcnIpO1xuICAvLyBSZWFjaCBsYWJlbHMgYW5kIG1ha2UgdGhlbSBjaGFuZ2UgdGhlbXNlbHZlcyB3aGVuIHRoZSB0YXNrIGlzIGRvbmVcbiAgdG9nZ2xlRG9uZUljb25zKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudE9mKGlkKSB7XG4gIC8vIFJlbW92ZSBhbnkgY2hpbGQgb2YgdGhlIGVsZW1lbnQgd2l0aCBpZFxuICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2soaSwgdGFzaykge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zXCIpLmFwcGVuZChjcmVhdGVUYXNrKGksIHRhc2spKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhpLCB0YXNrKSB7XG4gIC8vIGNyZWF0ZSBsaXN0IGVsZW1lbnQgd2l0aCBhIGNsYXNzICd0b2RvJ1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kb1wiKTtcbiAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRhc2stJHtpfWApO1xuICAvLyBBcHBlbmQgbGFiZWwsIGlucHV0LCBkaXYgYW5kIGJ1dHRvbiB0byBpdFxuICBsaS5hcHBlbmQoY3JlYXRlTGFiZWwoaSkpO1xuICBsaS5hcHBlbmQoY3JlYXRlSW5wdXQoaSkpO1xuICBsaS5hcHBlbmQoXG4gICAgY3JlYXRlQ29udGVudChcbiAgICAgIHRhc2sudGl0bGUsXG4gICAgICB0YXNrLmZyb20sXG4gICAgICB0YXNrLmRhdGUsXG4gICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgdGFzay5ub3RlLFxuICAgICAgdGFzay5kb25lXG4gICAgKVxuICApO1xuICBsaS5hcHBlbmQoY3JlYXRlRGVsZXRlQnRuKGkpKTtcblxuICByZXR1cm4gbGk7XG59XG5cbi8vIExBQkVMXG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGkpIHtcbiAgLy8gcmV0dXJucyBsYWJlbCBmb3IgXCJ0b2RvY2hlY2tib3hcIiArIGlcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgbGFiZWwtJHtpfWApO1xuICBsYWJlbC5odG1sRm9yID0gYHRvZG9jaGVja2JveCR7aX1gO1xuICBsYWJlbC5hcHBlbmQoY3JlYXRlRG9uZUljb24oKSk7XG4gIHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRG9uZUljb24oKSB7XG4gIC8vIGNyZWF0ZSBpY29uIGNvbnRhaW5lclxuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pY29uLWNvbnRhaW5lclwiKTtcbiAgLy8gY3JlYXRlIGljb25cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW9uLWljb25cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNoZWNrbWFyay1vdXRsaW5lXCIpO1xuICAvLyBhcHBlbmQgaWNvbiB0byBjb250YWluZXJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBJTlBVVFxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dChpKSB7XG4gIC8vIENyZWF0ZSBpbnB1dCBjaGVja2JveCBlbGVtZW50IGFmdGVyIHRoZSBsYWJlbFxuICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIC8vIEFkZCBhdHRyaWJ1dGVzXG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYHRvZG8tY2hlY2tib3hgKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRvZG9jaGVja2JveC0ke2l9YCk7XG4gIHJldHVybiBjaGVja2JveDtcbn1cblxuLy8gQ09OVEVOVCA9IHRhc2sgdGl0bGUgYW5kIGRldGFpbHNcblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCh0aXRsZSwgZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUsIGRvbmUpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby10ZXh0XCIpO1xuICAvLyBBcHBlbmQgdGl0bGUgYW5kIGRldGFpbHMgdG8gY29udGVudFxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKHRpdGxlKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRGV0YWlscyhmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSkpO1xuICBpZiAoZG9uZSkgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHN0cikge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gc3RyO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURldGFpbHMoZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGV0YWlsc1wiKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVGcm9tKGZyb20pKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVEdWUoZGF0ZSkpO1xuICBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZVByaW9yaXR5KHByaW9yaXR5KSk7XG4gIGRldGFpbHMuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZShub3RlKSk7XG5cbiAgcmV0dXJuIGRldGFpbHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyb20oZnJvbSkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZnJvbS1wcm9qZWN0XCIpO1xuICBpZiAoZnJvbSkgc3Bhbi50ZXh0Q29udGVudCA9IGBGcm9tICR7ZnJvbX1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHVlKGRhdGUpIHtcbiAgbGV0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGR1ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImR1ZS1kYXRlXCIpO1xuICBpZiAoZGF0ZSkge1xuICAgIC8vIElmIHRhc2sgaGFzIGRhdGUgYmVmb3JlIHRvZGF5LCBpdCB3aWxsIGJlIHJlZCBjb2xvcmVkXG4gICAgaWYgKGRhdGVPdmVyZHVlKGRhdGUpKSBkdWUuY2xhc3NMaXN0LmFkZChcIm92ZXJkdWUtZGF0ZVwiKTtcblxuICAgIGR1ZS5hcHBlbmRDaGlsZChjcmVhdGVDYWxlbmRhckltYWdlKCkpO1xuICAgIGR1ZS5hcHBlbmRDaGlsZChjcmVhdGVTcGFuRm9yRGF0ZShkYXRlKSk7XG4gIH1cbiAgcmV0dXJuIGR1ZTtcbn1cblxuZnVuY3Rpb24gZGF0ZU92ZXJkdWUoZGF0ZSkge1xuICAvLyBGdW5jdGlvbiB0byBjb21wYXJlIGRhdGVzOiB0b2RheSB3aXRoIGEgZGF0ZVxuICAvLyBJZiBkYXRlIGlzIGVhcmxpZXIgdGhhbiB0b2RheSB0aGVuIHJldHVybiB0cnVlXG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbiAgbGV0IGRheSA9IGRhdGUuc3BsaXQoXCIuXCIpWzBdO1xuICBsZXQgbW9udGggPSBkYXRlLnNwbGl0KFwiLlwiKVsxXTtcbiAgbGV0IHllYXIgPSBkYXRlLnNwbGl0KFwiLlwiKVsyXTtcblxuICBsZXQgdGFza0RhdGUgPSBuZXcgRGF0ZShgJHt5ZWFyfS0ke21vbnRofS0ke2RheX0gMDowMDowMGApO1xuXG4gIHJldHVybiB0YXNrRGF0ZSA8IHRvZGF5ID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYWxlbmRhckltYWdlKCkge1xuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBDYWxlbmRhcik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJDYWxlbmRhclwiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTJweFwiKTtcblxuICByZXR1cm4gaW1nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuRm9yRGF0ZShkYXRlKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBgRHVlICR7ZGF0ZX1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHkobGV2ZWwpIHtcbiAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGAke2xldmVsfS1wcmlvcml0eWApO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChjcmVhdGVTcGFuRm9yUHJpb3JpdHkobGV2ZWwpKTtcbiAgcmV0dXJuIHByaW9yaXR5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuRm9yUHJpb3JpdHkobGV2ZWwpIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaWYgKGxldmVsICE9PSBcImxvd1wiKVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBgJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIobGV2ZWwpfSBwcmlvcml0eWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGUobm90ZSkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibm90ZS1wcmVzZW5jZVwiKTtcblxuICBpZiAobm90ZSkge1xuICAgIC8vIGNyZWF0ZSBhbmQgQXBwZW5kIE5vdGUgSWNvblxuICAgIGxldCBub3RlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbm90ZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIE5vdGUpO1xuICAgIG5vdGVJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBlblwiKTtcbiAgICBub3RlSWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEycHhcIik7XG5cbiAgICAvLyBjcmVhdGUgYW5kIGFwcGVuZCB0ZXh0XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJOb3RlXCI7XG5cbiAgICBzcGFuLmFwcGVuZENoaWxkKG5vdGVJY29uKTtcbiAgICBzcGFuLmFwcGVuZENoaWxkKHRleHQpO1xuICB9XG4gIHJldHVybiBzcGFuO1xufVxuXG4vLyBERUxFVEUgQlVUVE9OXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVCdG4oaSkge1xuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGV0ZS10b2RvLWJ0blwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGBkZWxldGVidG4tJHtpfWApO1xuXG4gIC8vIGNyZWF0ZSBhbiBpY29uIGFuZCBhcHBlbmQgaXQgdG8gYnV0dG9uXG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlvbi1pY29uXCIpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjbG9zZS1jaXJjbGVcIik7XG5cbiAgYnRuLmFwcGVuZENoaWxkKGljb24pO1xuXG4gIHJldHVybiBidG47XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURvbmVJY29ucygpIHtcbiAgLy8gR2V0IGNvbGxlY3Rpb24gb2YgYWxsIHRhc2tzIHdpY2ggYXJlIGNvbXBsZXRlZFxuICBsZXQgZG9uZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZG9uZVwiKTtcbiAgLy8gRm9yIGVhY2ggY29tcGxldGVkIHRhc2sgdGFrZSBsYWJlbCBhbmQgdG9nZ2xlIGEgY2xhc3MgXCJjb21wbGV0ZWRcIiBvbiBpdFxuICBmb3IgKGxldCB0YXNrIG9mIGRvbmVzKSB7XG4gICAgbGV0IG51bWJlciA9IHRhc2sucGFyZW50RWxlbWVudC5pZC5zcGxpdChcIi1cIilbMV07XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxhYmVsLSR7bnVtYmVyfWApO1xuICAgIGxldCBpY29uQ29udGFpbmVyID0gbGFiZWwuZmlyc3RDaGlsZDtcblxuICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgfVxufVxuXG5leHBvcnQgeyByZW5kZXJBbGxUYXNrc0Zyb20sIGNsZWFyQ29udGVudE9mIH07XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==