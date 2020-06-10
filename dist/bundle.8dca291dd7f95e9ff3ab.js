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
/* harmony import */ var _projects_defaults_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/defaults.js */ "./src/JS/projects/defaults.js");
/* harmony import */ var _projects_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects/render.js */ "./src/JS/projects/render.js");
/* harmony import */ var _tasks_add_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/add.js */ "./src/JS/tasks/add.js");
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
_style_priority_js__WEBPACK_IMPORTED_MODULE_3__["starsChangeColors"](); // App logic
//create main list of projects

var projects = _toConsumableArray(_projects_defaults_js__WEBPACK_IMPORTED_MODULE_4__["getProjects"]()); //render first project


Object(_projects_render_js__WEBPACK_IMPORTED_MODULE_5__["initialRender"])(projects); // Button to add task to a defined array
// Also rerender the array after adding a task

_tasks_add_js__WEBPACK_IMPORTED_MODULE_6__["addTaskTo"](projects, 0); // Change tasks when user type something to details window

_tasks_detailsInput_js__WEBPACK_IMPORTED_MODULE_7__["changeTaskOnInput"](projects, 0); //test button

var testBtn = document.getElementById("socials");
testBtn.addEventListener("click", function () {
  return console.table(projects);
});

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
/*! exports provided: refreshProjects, initialRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshProjects", function() { return refreshProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialRender", function() { return initialRender; });
/* harmony import */ var _tasks_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tasks/render.js */ "./src/JS/tasks/render.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module './projects/toggle.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function initialRender(arr) {
  // Clear all previously rendered elements from the page
  Object(_tasks_render_js__WEBPACK_IMPORTED_MODULE_0__["clearContentOf"])("project-list");
  renderAllProjects(arr, 0);
}

function refreshProjects(arr, number) {
  // Clear all previously rendered elements from the page
  Object(_tasks_render_js__WEBPACK_IMPORTED_MODULE_0__["clearContentOf"])("project-list");
  renderAllProjects(arr, number);
  !(function webpackMissingModule() { var e = new Error("Cannot find module './projects/toggle.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(arr);
}

function renderAllProjects(arr, number) {
  //Render each element of the array to the page
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
  submitTodoBtn.addEventListener("click", function () {
    return addTask(arr, number);
  });
}

function addTask(arr, number) {
  // Prevent default submit behavior
  event.preventDefault(); // Get task name from User and add it to tasks array

  pushTaskTo(arr[number].tasks);
  console.table(arr[number].tasks); // Rerender array

  Object(_projects_render_js__WEBPACK_IMPORTED_MODULE_1__["refreshProjects"])(arr, number);
  return arr;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUNPTlMvY2FsZW5kYXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9JQ09OUy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Byb2plY3RzL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9wcm9qZWN0cy9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9wcm9qZWN0cy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL3ByaW9yaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9zdHlsZS9yZXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2FkZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZGV0YWlsc0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZXRhaWxzVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2Nzcz84MTRiIl0sIm5hbWVzIjpbIk1lbnVCdG4iLCJSZXNpemUiLCJQcmlvcml0eSIsInByb2plY3RzIiwiRGVmYXVsdFByb2plY3RzIiwiaW5pdGlhbFJlbmRlciIsIkFkZFRhc2tCdG4iLCJEZXRhaWxzIiwidGVzdEJ0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsInRhYmxlIiwiZ2V0UHJvamVjdHMiLCJhbGxQcm9qZWN0cyIsInByb2plY3RGYWN0b3J5IiwidGl0bGUiLCJ0YXNrcyIsIkRlZmF1bHRUYXNrcyIsImNvdW50IiwibGVuZ3RoIiwiYXJyIiwiY2xlYXJDb250ZW50T2YiLCJyZW5kZXJBbGxQcm9qZWN0cyIsInJlZnJlc2hQcm9qZWN0cyIsIm51bWJlciIsInByb2plY3RzU2hvd1Rhc2tzIiwiZW50cmllcyIsImluZGV4IiwiaXRlbSIsInJlbmRlclByb2plY3QiLCJyZW5kZXJBbGxUYXNrc0Zyb20iLCJpIiwicHJvamVjdCIsImFwcGVuZCIsImNyZWF0ZVByb2plY3QiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVJY29uIiwiY3JlYXRlVGl0bGVBbmRDb3VudCIsImNyZWF0ZURlbGV0ZUJ0biIsInNwYW4iLCJpY29uIiwiZGl2IiwibmFtZVNwYW4iLCJ0ZXh0Q29udGVudCIsImNvdW50U3BhbiIsImJ0biIsImFwcGVuZENoaWxkIiwic2hvd1Byb2plY3RzIiwiYnJvYWRlblByb2plY3RDb250YWluZXIiLCJnZXRFbGVtZW50c1RvQnJvYWQiLCJlbGVtZW50IiwidG9nZ2xlQnJvYWQiLCJtaW5pbWl6ZVByb2plY3RDb250YWluZXIiLCJhZGRCcm9hZCIsImNsYXNzTGlzdCIsImFkZCIsInRvZ2dsZSIsImNvbnRlbnQiLCJwcm9qZWN0TGlzdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwcm9qZWN0SWNvbiIsInByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyIiwiZGVsZXRlUHJvamVjdEJ0biIsIm5ld1Byb2plY3RGb3JtIiwibmV3UHJvamVjdCIsInN1Ym1pdFByb2plY3QiLCJlbGVtZW50cyIsInN0YXJzQ2hhbmdlQ29sb3JzIiwiYWN0aXZhdGVGaXJzdFN0YXIiLCJhY3RpdmF0ZVNlY29uZFN0YXIiLCJhY3RpdmF0ZVRoaXJkU3RhciIsImdldFN0YXIxIiwiYWN0aXZhdGVTdGFyIiwiZ2V0U3RhcjIiLCJnZXRTdGFyMyIsImxvZyIsIm91dGxpbmVTZWNvbmRTdGFyIiwib3V0bGluZVRoaXJkU3RhciIsInJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzIiwiYWRkTWVkaXVtT25tb3VzZW92ZXIiLCJmaWxsU2Vjb25kU3RhciIsImFkZENvbG9yVHdvU3RhcnMiLCJkZWNvbG9yVGhpcmRTdGFyIiwiZmlsbFRoaXJkU3RhciIsImFkZENvbG9yVGhyZWVTdGFycyIsInJlbW92ZU1lZGl1bU9ubW91c2VvdmVyIiwiY2hpbGRyZW4iLCJyZW1vdmUiLCJzdGFySXNPdXRsaW5lZCIsInN0YXIiLCJnZXRBdHRyaWJ1dGUiLCJkZWNvbG9yRmlyc3RTdGFyIiwiZGVjb2xvclNlY29uZFN0YXIiLCJyZXNwb25zaXZlIiwibWFpbiIsImRldGFpbHMiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJzY3JlZW5MZXNzVGhlbjEwMjQiLCJnZXRDb21wdXRlZERpc3BsYXkiLCJzdHlsZSIsImdyaWRDb2x1bW4iLCJtYXRjaGVzIiwiYWRkVGFza1RvIiwic3VibWl0VG9kb0J0biIsImFkZFRhc2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHVzaFRhc2tUbyIsInB1c2giLCJnZXRUYXNrIiwidGFzayIsInRhc2tGYWN0b3J5IiwiZ2V0SW5wdXRWYWx1ZSIsImNsZWFyVGFza0lucHV0IiwidmFsdWUiLCJnZXRUYXNrc0J5TnVtYmVyIiwiYnVuZGxlMSIsImRhdGUiLCJwcmlvcml0eSIsIm5vdGUiLCJidW5kbGUyIiwiYnVuZGxlMyIsImRvbmUiLCJkZWxldGVUYXNrc0Zyb20iLCJidXR0b25zIiwiYnV0dG9uIiwiZGVsZXRlQnRuUmVtb3ZlVGFzayIsImUiLCJidG5JZCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsInNwbGl0IiwiY2xvc2VEZXRhaWxzT2ZEZWxldGVkVGFzayIsInNwbGljZSIsInN0b3BQcm9wYWdhdGlvbiIsIkRldGFpbHNUb2dnbGUiLCJwdXRUYXNrSW5mb1RvSW5wdXQiLCJzZXROYW1lIiwic2V0RGF0ZSIsInNldFBpb3JpdHkiLCJzZXROb3RlIiwiY2hhbmdlVGFza09uSW5wdXQiLCJjaGFuZ2VUaXRsZU9uSW5wdXQiLCJjaGFuZ2VEYXRlT25JbnB1dCIsImNoYW5nZVByaW9yaXR5T25JbnB1dCIsImNoYW5nZU5vdGVPbklucHV0IiwiaW5wdXQiLCJvbmlucHV0IiwiY2hhbmdlVGl0bGUiLCJ0YXNrTnVtYmVyIiwiY2hhbmdlRGF0ZSIsImZvcm1hdERhdGUyIiwic3RhcnMiLCJjaGFuZ2VQcmlvcml0eSIsImdldFByaW9yaXR5SW5wdXQiLCJzdGFyMSIsImNvbnRhaW5zIiwiY2hhbmdlTm90ZSIsIm5hbWUiLCJmb3JtYXREYXRlIiwibGV2ZWwiLCJkYXkiLCJtb250aCIsInllYXIiLCJmb3JtYXR0ZWQiLCJ0YXNrc1RvZ2dsZURldGFpbHMiLCJ0b2RvTGlzdFNob3dEZXRhaWxzIiwiQXJyb3dIaWRlRGV0YWlscyIsInRhc2tJZCIsInRvZ2dsZURldGFpbHMiLCJEZXRhaWxzSW5wdXQiLCJhcnJvd0J0biIsImhpZGVEZXRhaWxzIiwiaWROdW1iZXIiLCJnZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIiLCJkZXRhaWxzQXJlU2hvd24iLCJzaG93RGV0YWlscyIsImRldGFpbHNDb250YWluZXJJZCIsInNldERldGFpbHNJZFRvIiwibWFrZURldGFpbHNEZWZhdWx0IiwiaGlkZSIsInNob3dBc0ZsZXgiLCJjb21wdXRlZERpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImRpc3BsYXkiLCJkb25lQnRucyIsImNoZWNrYm94ZXMiLCJjaGVja2JveCIsImRvbmVCdG5Db21wbGV0ZVRhc2siLCJjYm94SWQiLCJwYXJlbnROb2RlIiwiY2xvc2VEZXRhaWxzT2ZDb21wbGV0ZWRUYXNrIiwiZnJvbSIsInJlbmRlclRhc2siLCJEZWxldGVUYXNrQnRucyIsIlRhc2tEb25lIiwidG9nZ2xlRG9uZUljb25zIiwiY29udGVudENvbnRhaW5lciIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZVRhc2siLCJjcmVhdGVMYWJlbCIsImNyZWF0ZUlucHV0IiwiY3JlYXRlQ29udGVudCIsImxhYmVsIiwiaHRtbEZvciIsImNyZWF0ZURvbmVJY29uIiwiY29udGFpbmVyIiwiY3JlYXRlVGl0bGUiLCJjcmVhdGVEZXRhaWxzIiwic3RyIiwiY3JlYXRlRnJvbSIsImNyZWF0ZUR1ZSIsImNyZWF0ZVByaW9yaXR5IiwiY3JlYXRlTm90ZSIsImR1ZSIsImRhdGVPdmVyZHVlIiwiY3JlYXRlQ2FsZW5kYXJJbWFnZSIsImNyZWF0ZVNwYW5Gb3JEYXRlIiwidG9kYXkiLCJEYXRlIiwidGFza0RhdGUiLCJpbWciLCJDYWxlbmRhciIsImNyZWF0ZVNwYW5Gb3JQcmlvcml0eSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJub3RlSWNvbiIsIk5vdGUiLCJ0ZXh0IiwiZG9uZXMiLCJwYXJlbnRFbGVtZW50IiwiaWNvbkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQs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ImJ1bmRsZS44ZGNhMjkxZGQ3Zjk1ZTlmZjNhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0pTL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGFwcGVhckZyb21SaWdodFByb2plY3Qge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAzMHB4O1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlNlblxcXCIsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7IH1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGF1dG8gMzMwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiIFxcXCJwcm9qZWN0cyBtYWluIHRvZG8tbWlzY1xcXCI7IH1cXG4gICNjb250ZW50LmJyb2FkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2OHB4IGF1dG8gMzMwcHg7IH1cXG5cXG4vKiAtLS0gVE9QIG9mIHRoZSBQQUdFIDogSEVBREVSIC0tLSAqL1xcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzEwNjg3NztcXG4gIGNvbG9yOiAjZjRmNGY0O1xcbiAgZm9udC1zaXplOiAxLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIlBlcm1hbmVudCBNYXJrZXJcXFwiLCBjdXJzaXZlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDsgfVxcbiAgaGVhZGVyICNtZW51LWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDsgfVxcbiAgICBoZWFkZXIgI21lbnUtaWNvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogIzBiNTA1YzsgfVxcbiAgaGVhZGVyICNoZWFkZXItdGl0bGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IH1cXG4gIGhlYWRlciAjc29jaWFscyB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4vKiBMRUZUIFNJREUgT0YgVEhFIFBBR0U6IFBST0pFQ1RTICovXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogcHJvamVjdHM7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA4cHggMHB4IDVweCAtNHB4ICNjYWNhY2E7XFxuICAtbW96LWJveC1zaGFkb3c6IDhweCAwcHggNXB4IC00cHggI2NhY2FjYTtcXG4gIGJveC1zaGFkb3c6IDhweCAwcHggNXB4IC00cHggI2NhY2FjYTtcXG4gIC8qIExFRlQtU0lERSBPRiBUSEUgUEFHRTogVXNlciBJbnB1dCovIH1cXG4gICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IHtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBtYXgtd2lkdGg6IDI4MHB4OyB9XFxuICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0LmJyb2FkIHtcXG4gICAgICB3aWR0aDogNjhweDsgfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCB7XFxuICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QuYnJvYWQge1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAyMnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0LmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdDpob3ZlciAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgYW5pbWF0aW9uOiBhcHBlYXJGcm9tUmlnaHRQcm9qZWN0IDAuM3MgZWFzZS1vdXQgZm9yd2FyZHM7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdDpub3QoLmFjdGl2ZSk6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWljb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1pY29uLmJyb2FkIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC10aXRsZS1jb3VudC1jb250YWluZXIuYnJvYWQge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtbmFtZSB7XFxuICAgICAgICB3aWR0aDogMTU1cHg7XFxuICAgICAgICBtYXgtd2lkdGg6IDE1NXB4O1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5jb3VudC10b2RvcyB7XFxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgd2lkdGg6IDI5cHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICBjb2xvcjogI2M1YzVjNTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1idG4uYnJvYWQge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6ICM5OTk5OTk7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1idG46Zm9jdXMge1xcbiAgICAgICAgICBjb2xvcjogIzZlNmU2ZTsgfVxcbiAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIElucHV0ICovXFxuICAgIC8qIFN1Ym1pdCBidXR0b24gKi8gfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0uYnJvYWQge1xcbiAgICAgIHdpZHRoOiA2OHB4O1xcbiAgICAgIG1hcmdpbjogMDsgfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI25ldy1wcm9qZWN0IHtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2YjZiNmI7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgcGFkZGluZzogOXB4IDA7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBjb2xvcjogIzZiNmI2YjtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBmb250LWZhbWlseTogXFxcIlNlblxcXCIsIHNhbnMtc2VyaWY7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI25ldy1wcm9qZWN0LmJyb2FkIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI25ldy1wcm9qZWN0OmZvY3VzIHtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzhlZjdkOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI25ldy1wcm9qZWN0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxuICAgICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Qge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiAwcHg7XFxuICAgICAgbGVmdDogMTBweDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogNnB4OyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdC5icm9hZCB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgbGVmdDogNHB4O1xcbiAgICAgICAgcGFkZGluZzogN3B4IDE4cHg7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0IGlvbi1pY29uIHtcXG4gICAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7XFxuICAgICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC41czsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM4ZWY3ZDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmhvdmVyIGlvbi1pY29uIHtcXG4gICAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG5cXG4vKiBNaWRkbGU6IFByb2plY3QgdGl0bGUsIHRvZG8gdGFza3MqL1xcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgbWluLXdpZHRoOiAzNzdweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCAjY2FjYWNhO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggI2NhY2FjYTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCAjY2FjYWNhO1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgLyogVXNlciBpbnB1dCB0b2RvIHRhc2tzKi8gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgIG1haW4ge1xcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDsgfSB9XFxuICBtYWluICNwcm9qZWN0LXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAxLjRlbTsgfVxcbiAgbWFpbiAudG9kbyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IGF1dG8gMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImNoZWNrYm94IHRvZG90ZXh0IGJ0blxcXCI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogQ3VzdG9tIG1hZGUgY2hlY2tib3ggd2l0aCBhZnRlciBlbGVtZW50ICovXFxuICAgIC8qIFRleHQgb2YgdGhlIHRvZG8gdGFzayB3aXRoIGRldGFpbHMgKi8gfVxcbiAgICBtYWluIC50b2RvOmhvdmVyIHtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCAjZTRlNGU0O1xcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICNlNGU0ZTQ7XFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICNlNGU0ZTQ7IH1cXG4gICAgbWFpbiAudG9kbzpob3ZlciAuZGVsZXRlLXRvZG8tYnRuIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgYW5pbWF0aW9uOiBhcHBlYXJGcm9tUmlnaHRQcm9qZWN0IDAuM3MgZWFzZS1vdXQgZm9yd2FyZHM7IH1cXG4gICAgbWFpbiAudG9kbyBsYWJlbCB7XFxuICAgICAgZ3JpZC1hcmVhOiBjaGVja2JveDsgfVxcbiAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC43czsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNWM1YzU7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzOyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyIGlvbi1pY29uIHtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXI6aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2UyYjBlOTsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lcjpob3ZlciBpb24taWNvbiB7XFxuICAgICAgICAgIGNvbG9yOiAjZTJiMGU5O1xcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2Utb3V0OyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyLmNvbXBsZXRlZDpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzVjNWM1ICFpbXBvcnRhbnQ7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXIuY29tcGxldGVkIGlvbi1pY29uIHtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xcbiAgICAgICAgICBjb2xvcjogI2M1YzVjNTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBub25lOyB9XFxuICAgIG1haW4gLnRvZG8gLnRvZG8tY2hlY2tib3gge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgbWFpbiAudG9kbyAudG9kby10ZXh0IHtcXG4gICAgICBncmlkLWFyZWE6IHRvZG90ZXh0O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcbiAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dC5kb25lIHtcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICAgICAgY29sb3I6ICNjNWM1YzUgIWltcG9ydGFudDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0LmRvbmUgLm1lZGl1bS1wcmlvcml0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dC5kb25lIC5oaWdoLXByaW9yaXR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0LmRvbmUgLmR1ZS1kYXRlLFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0LmRvbmUgLm92ZXJkdWUtZGF0ZSB7XFxuICAgICAgICAgIGNvbG9yOiAjYzVjNWM1ICFpbXBvcnRhbnQ7IH1cXG4gICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLnRvZG8tdGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XFxuICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XFxuICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAuZnJvbS1wcm9qZWN0LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5kdWUtZGF0ZSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAubWVkaXVtLXByaW9yaXR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5oaWdoLXByaW9yaXR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5ub3RlLXByZXNlbmNlIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4OyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmZyb20tcHJvamVjdDplbXB0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAuZHVlLWRhdGU6ZW1wdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLm1lZGl1bS1wcmlvcml0eTplbXB0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAuaGlnaC1wcmlvcml0eTplbXB0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAubm90ZS1wcmVzZW5jZTplbXB0eSB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHNwYW4gaW1nIHtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICB0b3A6IDJweDtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyBzcGFuLm92ZXJkdWUtZGF0ZSB7XFxuICAgICAgICAgIGNvbG9yOiByZWQ7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyBzcGFuLmhpZ2gtcHJpb3JpdHkge1xcbiAgICAgICAgICBjb2xvcjogIzczMDBmZjsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHNwYW4ubWVkaXVtLXByaW9yaXR5IHtcXG4gICAgICAgICAgY29sb3I6ICMxMDY4Nzc7IH1cXG4gICAgbWFpbiAudG9kbyAuZGVsZXRlLXRvZG8tYnRuIHtcXG4gICAgICBncmlkLWFyZWE6IGJ0bjtcXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGNvbG9yOiAjZDRkNGQ0O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzOyB9XFxuICAgICAgbWFpbiAudG9kbyAuZGVsZXRlLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjNDk0MDQwOyB9XFxuICAgICAgbWFpbiAudG9kbyAuZGVsZXRlLXRvZG8tYnRuOmZvY3VzIHtcXG4gICAgICAgIGNvbG9yOiAjOTI5MjkyOyB9XFxuICBtYWluIGhyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJveC1zaGFkb3c6IDAgLTEwcHggMTBweCAtMTBweCAjOGM4YzhjIGluc2V0OyB9XFxuICBtYWluICNuZXctdG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogSW5wdXQgKi9cXG4gICAgLyogU3VibWl0IGJ1dHRvbiAqLyB9XFxuICAgIG1haW4gI25ldy10b2RvLWZvcm0gI25ldy10b2RvIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2YjZiNmI7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgcGFkZGluZzogOXB4IDA7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBjb2xvcjogIzZiNmI2YjtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBmb250LWZhbWlseTogXFxcIlNlblxcXCIsIHNhbnMtc2VyaWY7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNuZXctdG9kbzpmb2N1cyB7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM4ZWY3ZDsgfVxcbiAgICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjbmV3LXRvZG86Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXG4gICAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG8ge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiAwcHg7XFxuICAgICAgbGVmdDogMTBweDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogNnB4OyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG8gaW9uLWljb24ge1xcbiAgICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDtcXG4gICAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM4ZWY3ZDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzpob3ZlciBpb24taWNvbiB7XFxuICAgICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuXFxuLyogUmlnaHQgc2lkZSBvZiB0aGUgcGFnZSAqL1xcbiN0b2RvLW1pc2MtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogdG9kby1taXNjO1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHotaW5kZXg6IDE7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciB7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICAgIC1tb3otYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgICBib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhOyB9IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICN0b2RvLW5hbWUtY2hhbmdlci1jb250YWluZXIsXFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyLFxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lcixcXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNub3RlLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgIC1tb3otYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjdG9kby1uYW1lLWNoYW5nZXItY29udGFpbmVyICNkYXRlLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNkYXRlLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNkYXRlLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjbm90ZS1jb250YWluZXIgI2RhdGUge1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjdG9kby1uYW1lLWNoYW5nZXItY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDA7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTJweCAtMnB4IDVweCAtMXB4ICNjYWNhY2E7XFxuICAgIC1tb3otYm94LXNoYWRvdzogLTJweCAtMnB4IDVweCAtMXB4ICNjYWNhY2E7XFxuICAgIGJveC1zaGFkb3c6IC0ycHggLTJweCA1cHggLTFweCAjY2FjYWNhOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICN0b2RvLW5hbWUtY2hhbmdlci1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICAgIGhlaWdodDogNDBweDsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI25vdGUtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtM3B4IDRweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IC0zcHggNHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggNHB4IDVweCAtMnB4ICNjYWNhY2E7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI25vdGUtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgICBoZWlnaHQ6IDE2MHB4OyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyLFxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyB7XFxuICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eS5zZWxlY3RlZC0xLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubG93LXByaW9yaXR5LnNlbGVjdGVkLTEsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHkuc2VsZWN0ZWQtMSxcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLmxvdy1wcmlvcml0eS5zZWxlY3RlZC0xIHtcXG4gICAgICAgIGNvbG9yOiAjMTA2ODc3OyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHkuc2VsZWN0ZWQtMixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLmxvdy1wcmlvcml0eS5zZWxlY3RlZC0yLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAuaGlnaC1wcmlvcml0eS5zZWxlY3RlZC0yLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5LnNlbGVjdGVkLTIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5sb3ctcHJpb3JpdHkuc2VsZWN0ZWQtMixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLmhpZ2gtcHJpb3JpdHkuc2VsZWN0ZWQtMiB7XFxuICAgICAgICBjb2xvcjogIzczMDBmZjsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAub25tb3VzZW92ZXI6aG92ZXIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5vbm1vdXNlb3Zlcjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzEwNjg3NzsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5OmhvdmVyIH4gLmxvdy1wcmlvcml0eSxcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eTpob3ZlciB+IC5sb3ctcHJpb3JpdHkge1xcbiAgICAgICAgY29sb3I6ICMxMDY4Nzc7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLmhpZ2gtcHJpb3JpdHk6aG92ZXIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5oaWdoLXByaW9yaXR5OmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjNzMwMGZmOyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIGlvbi1pY29uLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyBpb24taWNvbiB7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjZGF0ZS1yZW1vdmVyIGlvbi1pY29uLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNkYXRlLXJlbW92ZXIgaW9uLWljb24ge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDRweDtcXG4gICAgICBjb2xvcjogIzZiNmI2YjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI2RhdGUtcmVtb3ZlciBpb24taWNvbjpob3ZlcixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNkYXRlLXJlbW92ZXIgaW9uLWljb246aG92ZXIge1xcbiAgICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAubWlzYy10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcbiAgICB3aWR0aDogMTIwcHg7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlblxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI2Nsb3NlLWRldGFpbHMtYnRuIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB3aWR0aDogNjJweDsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjY2xvc2UtZGV0YWlscy1idG4gaW9uLWljb24ge1xcbiAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICB3aWR0aDogNjBweDtcXG4gICAgICBjb2xvcjogI2M1YzVjNTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCA3cHggLTEzcHggI2NhY2FjYSwgMHB4IDVweCAxMHB4IDBweCAjY2FjYWNhO1xcbiAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggN3B4IC0xM3B4ICNjYWNhY2EsIDBweCA1cHggMTBweCAwcHggI2NhY2FjYTtcXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCA3cHggLTEzcHggI2NhY2FjYSwgMHB4IDVweCAxMHB4IDBweCAjY2FjYWNhOyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2Nsb3NlLWRldGFpbHMtYnRuIGlvbi1pY29uOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjNmU2ZTZlOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9jYWxlbmRhci43NTA0Yzg4OWZjMmQ5ZDRmNTQwMGJhNjk4YjI1NDM3Ny5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvZWRpdC4yOTI3ZjhkZTQyNjhiYWU4ZjExYzRkZmUzYWRjNzJiNS5zdmdcIjsiLCJpbXBvcnQgXCIuLi9TQ1NTL3N0eWxlLnNjc3NcIjtcbmltcG9ydCAqIGFzIE1lbnVCdG4gZnJvbSBcIi4vc3R5bGUvbWVudS5qc1wiO1xuaW1wb3J0ICogYXMgUmVzaXplIGZyb20gXCIuL3N0eWxlL3Jlc2l6ZS5qc1wiO1xuaW1wb3J0ICogYXMgUHJpb3JpdHkgZnJvbSBcIi4vc3R5bGUvcHJpb3JpdHkuanNcIjtcbmltcG9ydCAqIGFzIERlZmF1bHRQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0cy9kZWZhdWx0cy5qc1wiO1xuaW1wb3J0IHsgaW5pdGlhbFJlbmRlciB9IGZyb20gXCIuL3Byb2plY3RzL3JlbmRlci5qc1wiO1xuaW1wb3J0ICogYXMgQWRkVGFza0J0biBmcm9tIFwiLi90YXNrcy9hZGQuanNcIjtcbmltcG9ydCAqIGFzIERldGFpbHMgZnJvbSBcIi4vdGFza3MvZGV0YWlsc0lucHV0LmpzXCI7XG5cbi8vIFN0eWxlXG5NZW51QnRuLnNob3dQcm9qZWN0cygpO1xuUmVzaXplLnJlc3BvbnNpdmUoKTtcblByaW9yaXR5LnN0YXJzQ2hhbmdlQ29sb3JzKCk7XG5cbi8vIEFwcCBsb2dpY1xuXG4vL2NyZWF0ZSBtYWluIGxpc3Qgb2YgcHJvamVjdHNcbmxldCBwcm9qZWN0cyA9IFsuLi5EZWZhdWx0UHJvamVjdHMuZ2V0UHJvamVjdHMoKV07XG5cbi8vcmVuZGVyIGZpcnN0IHByb2plY3RcbmluaXRpYWxSZW5kZXIocHJvamVjdHMpO1xuXG4vLyBCdXR0b24gdG8gYWRkIHRhc2sgdG8gYSBkZWZpbmVkIGFycmF5XG4vLyBBbHNvIHJlcmVuZGVyIHRoZSBhcnJheSBhZnRlciBhZGRpbmcgYSB0YXNrXG5BZGRUYXNrQnRuLmFkZFRhc2tUbyhwcm9qZWN0cywgMCk7XG5cbi8vIENoYW5nZSB0YXNrcyB3aGVuIHVzZXIgdHlwZSBzb21ldGhpbmcgdG8gZGV0YWlscyB3aW5kb3dcbkRldGFpbHMuY2hhbmdlVGFza09uSW5wdXQocHJvamVjdHMsIDApO1xuXG4vL3Rlc3QgYnV0dG9uXG5sZXQgdGVzdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29jaWFsc1wiKTtcbnRlc3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbnNvbGUudGFibGUocHJvamVjdHMpKTtcbiIsImltcG9ydCB7IHByb2plY3RGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuaW1wb3J0ICogYXMgRGVmYXVsdFRhc2tzIGZyb20gXCIuLi90YXNrcy9kZWZhdWx0cy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiBzaW1wbHkgY3JlYXRlcyBhbiBhcnJheSB3aXRoIGRlZmF1bHQgcHJvamVjdHMgaW4gaXRcbiAgbGV0IGFsbFByb2plY3RzID0gW1xuICAgIHByb2plY3RGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIlByb2plY3QgMVwiLFxuICAgICAgdGFza3M6IERlZmF1bHRUYXNrcy5nZXRUYXNrc0J5TnVtYmVyKDEpLFxuICAgICAgY291bnQ6IERlZmF1bHRUYXNrcy5nZXRUYXNrc0J5TnVtYmVyKDEpLmxlbmd0aCxcbiAgICB9KSxcbiAgICBwcm9qZWN0RmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJQcm9qZWN0IDJcIixcbiAgICAgIHRhc2tzOiBEZWZhdWx0VGFza3MuZ2V0VGFza3NCeU51bWJlcigyKSxcbiAgICB9KSxcbiAgICBwcm9qZWN0RmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJTb21ldGhpbmcgdG8gY29uc2lkZXJcIixcbiAgICAgIHRhc2tzOiBEZWZhdWx0VGFza3MuZ2V0VGFza3NCeU51bWJlcigzKSxcbiAgICB9KSxcbiAgXTtcblxuICByZXR1cm4gYWxsUHJvamVjdHM7XG59XG5cbmV4cG9ydCB7IGdldFByb2plY3RzIH07XG4iLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9IGZ1bmN0aW9uICh7IHRpdGxlID0gXCJcIiwgdGFza3MgPSBbXSB9KSB7XG4gIHJldHVybiB7IHRpdGxlLCB0YXNrcyB9O1xufTtcblxuZXhwb3J0IHsgcHJvamVjdEZhY3RvcnkgfTtcbiIsImltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSwgY2xlYXJDb250ZW50T2YgfSBmcm9tIFwiLi4vdGFza3MvcmVuZGVyLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c1Nob3dUYXNrcyB9IGZyb20gXCIuL3Byb2plY3RzL3RvZ2dsZS5qc1wiO1xuXG5mdW5jdGlvbiBpbml0aWFsUmVuZGVyKGFycikge1xuICAvLyBDbGVhciBhbGwgcHJldmlvdXNseSByZW5kZXJlZCBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG4gIGNsZWFyQ29udGVudE9mKFwicHJvamVjdC1saXN0XCIpO1xuICByZW5kZXJBbGxQcm9qZWN0cyhhcnIsIDApO1xufVxuXG5mdW5jdGlvbiByZWZyZXNoUHJvamVjdHMoYXJyLCBudW1iZXIpIHtcbiAgLy8gQ2xlYXIgYWxsIHByZXZpb3VzbHkgcmVuZGVyZWQgZWxlbWVudHMgZnJvbSB0aGUgcGFnZVxuICBjbGVhckNvbnRlbnRPZihcInByb2plY3QtbGlzdFwiKTtcbiAgcmVuZGVyQWxsUHJvamVjdHMoYXJyLCBudW1iZXIpO1xuICBwcm9qZWN0c1Nob3dUYXNrcyhhcnIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBbGxQcm9qZWN0cyhhcnIsIG51bWJlcikge1xuICAvL1JlbmRlciBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IHRvIHRoZSBwYWdlXG4gIGZvciAobGV0IFtpbmRleCwgaXRlbV0gb2YgYXJyLmVudHJpZXMoKSkge1xuICAgIHJlbmRlclByb2plY3QoaW5kZXgsIGl0ZW0pO1xuICB9XG4gIC8vIFJlbmRlciBhbGwgdGFza3MgZnJvbSBwcm9qZWN0XG4gIHJlbmRlckFsbFRhc2tzRnJvbShhcnJbbnVtYmVyXS50YXNrcyk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3QoaSwgcHJvamVjdCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKS5hcHBlbmQoY3JlYXRlUHJvamVjdChpLCBwcm9qZWN0KSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoaSwgcHJvamVjdCkge1xuICAvLyBjcmVhdGUgYSBsaSBlbGVtZW50XG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0XCIpO1xuICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcHJvamVjdC0ke2l9YCk7XG4gIC8vIGFwcGVuZCBldmVyeXRoaW5nIHRvIGl0XG4gIGxpLmFwcGVuZChjcmVhdGVJY29uKCkpO1xuICBsaS5hcHBlbmQoY3JlYXRlVGl0bGVBbmRDb3VudChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LnRhc2tzLmxlbmd0aCkpO1xuICBsaS5hcHBlbmQoY3JlYXRlRGVsZXRlQnRuKGkpKTtcbiAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJY29uKCkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdC1pY29uXCIpO1xuXG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlvbi1pY29uXCIpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJyZWFkZXItb3V0bGluZVwiKTtcblxuICBzcGFuLmFwcGVuZChpY29uKTtcblxuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGVBbmRDb3VudCh0aXRsZSwgY291bnQpIHtcbiAgLy8gY3JlYXRlIGEgY29udGFpbmVyIGZvciBUaXRsZSBhbmQgVG9kbyBDb3VudCBOdW1iZXJcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyXCIpO1xuICAvLyBDcmVhdGUgYSBzcGFuIGZvciB0aXRsZVxuICBsZXQgbmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbmFtZVNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LW5hbWVcIik7XG4gIG5hbWVTcGFuLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIC8vIENyZWF0ZSBhIHNwYW4gZm9yIGNvdW50IG51bWJlclxuICBsZXQgY291bnRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvdW50U3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvdW50LXRvZG9zXCIpO1xuICBjb3VudFNwYW4udGV4dENvbnRlbnQgPSBjb3VudDtcbiAgLy8gQXBwZW5kIHNwYW5zIHRvIGEgZGl2IGFuZCByZXR1cm4gYSBjb250YWluZXJcbiAgZGl2LmFwcGVuZChuYW1lU3Bhbik7XG4gIGRpdi5hcHBlbmQoY291bnRTcGFuKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlQnRuKGkpIHtcbiAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZWxldGUtcHJvamVjdC1idG5cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZGVsZXRlLXByb2plY3QtJHtpfWApO1xuXG4gIC8vIGNyZWF0ZSBhbiBpY29uIGFuZCBhcHBlbmQgaXQgdG8gYnV0dG9uXG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlvbi1pY29uXCIpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjbG9zZS1jaXJjbGVcIik7XG5cbiAgYnRuLmFwcGVuZENoaWxkKGljb24pO1xuXG4gIHJldHVybiBidG47XG59XG5cbmV4cG9ydCB7IHJlZnJlc2hQcm9qZWN0cywgaW5pdGlhbFJlbmRlciB9O1xuIiwiZnVuY3Rpb24gc2hvd1Byb2plY3RzKCkge1xuICAvLyBNYWtlIG1lbnUgYnV0dG9uIGluIHRoZSB0b3AgbGVmdCBjb3JuZXIgZG8gd29yayAoY2hhbmdlIHByb2plY3RzIHRvIHdpZGUgb3IgbmFycm93KVxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYnJvYWRlblByb2plY3RDb250YWluZXIoKSk7XG59XG5cbmZ1bmN0aW9uIGJyb2FkZW5Qcm9qZWN0Q29udGFpbmVyKCkge1xuICAvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2UgYW5kIHRvZ2dsZSBhIGNsYXNzICdicm9hZCcgb24gZWFjaFxuICBmb3IgKGxldCBlbGVtZW50IG9mIGdldEVsZW1lbnRzVG9Ccm9hZCgpKSB7XG4gICAgdG9nZ2xlQnJvYWQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWluaW1pemVQcm9qZWN0Q29udGFpbmVyKCkge1xuICAvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2UgYW5kIHRvZ2dsZSBhIGNsYXNzICdicm9hZCcgb24gZWFjaFxuICBmb3IgKGxldCBlbGVtZW50IG9mIGdldEVsZW1lbnRzVG9Ccm9hZCgpKSB7XG4gICAgYWRkQnJvYWQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQnJvYWQoZWxlbWVudCkge1xuICAvLyBSZW1vdmUgY2xhc3MgJ2Jyb2FkJyBmcm9tIGFuIGVsZW1lbnRcbiAgLy8gdGhpcyBjbGFzcyBjaGFuZ2VzIGxlZnQtc2lkZSBwYWdlIG1lbnUgbWFraW5nIGl0IHNtYWxsZXJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnJvYWRcIik7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJyb2FkKGVsZW1lbnQpIHtcbiAgLy8gQWRkL3JlbW92ZSBjbGFzcyAnYnJvYWQnIHRvIGFuIGVsZW1lbnRcbiAgLy8gdGhpcyBjbGFzcyBjaGFuZ2VzIGxlZnQtc2lkZSBwYWdlIG1lbnUgbWFraW5nIGl0IHNtYWxsZXJcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYnJvYWRcIik7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRzVG9Ccm9hZCgpIHtcbiAgLy8gVGFrZSBzb21lIERPTSBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcbiAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdFwiKTtcbiAgbGV0IHByb2plY3RJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtaWNvblwiKTtcbiAgbGV0IHByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICBcInByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyIFwiXG4gICk7XG4gIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKTtcbiAgbGV0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1mb3JtXCIpO1xuICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3RcIik7XG4gIGxldCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtcHJvamVjdFwiKTtcblxuICAvLyBQdXQgdGhlbSBpbiB0aGUgYXJyYXkgYW5kIHJldHVybiBpdFxuICBsZXQgZWxlbWVudHMgPSBbXG4gICAgY29udGVudCxcbiAgICBwcm9qZWN0TGlzdCxcbiAgICAuLi5wcm9qZWN0LFxuICAgIC4uLnByb2plY3RJY29uLFxuICAgIC4uLnByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyLFxuICAgIC4uLmRlbGV0ZVByb2plY3RCdG4sXG4gICAgbmV3UHJvamVjdEZvcm0sXG4gICAgbmV3UHJvamVjdCxcbiAgICBzdWJtaXRQcm9qZWN0LFxuICBdO1xuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCB7IHNob3dQcm9qZWN0cywgbWluaW1pemVQcm9qZWN0Q29udGFpbmVyIH07XG4iLCJmdW5jdGlvbiBzdGFyc0NoYW5nZUNvbG9ycygpIHtcbiAgYWN0aXZhdGVGaXJzdFN0YXIoKTtcbiAgYWN0aXZhdGVTZWNvbmRTdGFyKCk7XG4gIGFjdGl2YXRlVGhpcmRTdGFyKCk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlRmlyc3RTdGFyKCkge1xuICBnZXRTdGFyMSgpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhY3RpdmF0ZVN0YXIoMSkpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVNlY29uZFN0YXIoKSB7XG4gIGdldFN0YXIyKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFjdGl2YXRlU3RhcigyKSk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGhpcmRTdGFyKCkge1xuICBnZXRTdGFyMygpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhY3RpdmF0ZVN0YXIoMykpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVN0YXIobnVtYmVyKSB7XG4gIC8vIE1ha2UgYSBzdGFyIHdpdGggYSBjZXJ0YWluIG51bWJlciBjaGFuZ2UgaXRzIHN0eWxlXG4gIC8vIE51bWJlciBjYW4gYmUgMSwgMiBvciAzIGJlY2F1c2UgdGhlcmUgYXJlIGEgdG90YWwgb2YgMyBzdGFyXG4gIGlmIChudW1iZXIgPCAxIHx8IG51bWJlciA+IDMpXG4gICAgY29uc29sZS5sb2coXG4gICAgICBgQ2FuJ3QgYWN0aXZhdGUgc3RhciAke251bWJlcn0gaW4gYWN0aXZhdGVTdGFyKCkuIFBvc3NpYmxlIHZhbHVlczogMSwgMiwgM2BcbiAgICApO1xuICBzd2l0Y2ggKG51bWJlcikge1xuICAgIGNhc2UgMTpcbiAgICAgIG91dGxpbmVTZWNvbmRTdGFyKCk7XG4gICAgICBvdXRsaW5lVGhpcmRTdGFyKCk7XG4gICAgICByZW1vdmVDb2xvckZyb21BbGxTdGFycygpO1xuICAgICAgYWRkTWVkaXVtT25tb3VzZW92ZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIGZpbGxTZWNvbmRTdGFyKCk7XG4gICAgICBhZGRDb2xvclR3b1N0YXJzKCk7XG4gICAgICBvdXRsaW5lVGhpcmRTdGFyKCk7XG4gICAgICBkZWNvbG9yVGhpcmRTdGFyKCk7XG4gICAgICBhZGRNZWRpdW1Pbm1vdXNlb3ZlcigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgZmlsbFNlY29uZFN0YXIoKTtcbiAgICAgIGZpbGxUaGlyZFN0YXIoKTtcbiAgICAgIGFkZENvbG9yVGhyZWVTdGFycygpO1xuICAgICAgcmVtb3ZlTWVkaXVtT25tb3VzZW92ZXIoKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNFQ09ORCBTVEFSXG5mdW5jdGlvbiBmaWxsU2Vjb25kU3RhcigpIHtcbiAgLy8gR2V0IHRoZSBjaGlsZCBvZiB0aGUgcHJpb3JpdHkgYW5kIG1ha2UgaXQgZmlsbGVkIHN0YXJcbiAgZ2V0U3RhcjIoKS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic3RhclwiKTtcbn1cblxuZnVuY3Rpb24gb3V0bGluZVNlY29uZFN0YXIoKSB7XG4gIC8vIEdldCB0aGUgY2hpbGQgb2YgdGhlIHByaW9yaXR5IGFuZCBtYWtlIGl0IG91dGxpbmVkIHN0YXJcbiAgZ2V0U3RhcjIoKS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic3Rhci1vdXRsaW5lXCIpO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUSElSRCBTVEFSXG5cbmZ1bmN0aW9uIGZpbGxUaGlyZFN0YXIoKSB7XG4gIC8vIEdldCB0aGUgY2hpbGQgb2YgdGhlIHByaW9yaXR5IGFuZCBtYWtlIGl0IGZpbGxlZCBzdGFyXG4gIGdldFN0YXIzKCkuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN0YXJcIik7XG59XG5cbmZ1bmN0aW9uIG91dGxpbmVUaGlyZFN0YXIoKSB7XG4gIC8vIEdldCB0aGUgY2hpbGQgb2YgdGhlIHByaW9yaXR5IGFuZCBtYWtlIGl0IG91dGxpbmVkIHN0YXJcbiAgZ2V0U3RhcjMoKS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic3Rhci1vdXRsaW5lXCIpO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSGVscGVyc1xuXG5mdW5jdGlvbiByZW1vdmVNZWRpdW1Pbm1vdXNlb3ZlcigpIHtcbiAgLy8gU2Vjb25kIHN0YXIgaGFzIGEgY2xhc3MgXCJvbm1vdXNlb3ZlclwiIHdpdGggYSBob3ZlciBlZmZlY3RcbiAgLy8gV2hlbiB0aGUgM3JkIHN0YXIgaXMgY2hvc2VuIHJlbW92ZSB0aGlzIGhvdmVyIGVmZmVjdCBmcm9tIHRoZSAybmQgc3RhclxuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5yZW1vdmUoXCJvbm1vdXNlb3ZlclwiKTtcbn1cblxuZnVuY3Rpb24gYWRkTWVkaXVtT25tb3VzZW92ZXIoKSB7XG4gIC8vIFNlY29uZCBzdGFyIGhhcyBhIGNsYXNzIFwib25tb3VzZW92ZXJcIiB3aXRoIGEgaG92ZXIgZWZmZWN0XG4gIC8vIFdoZW4gdGhlIDFzdCBPUiAybmQgc3RhciBpcyBjaG9zZW4gYWRkIHRoaXMgaG92ZXIgZWZmZWN0IHRvIHRoZSAybmQgc3RhclxuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5hZGQoXCJvbm1vdXNlb3ZlclwiKTtcbn1cblxuZnVuY3Rpb24gc3RhcklzT3V0bGluZWQoc3Rhcikge1xuICByZXR1cm4gc3Rhci5jaGlsZHJlblswXS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09PSBcInN0YXItb3V0bGluZVwiO1xufVxuXG5mdW5jdGlvbiBhZGRDb2xvclR3b1N0YXJzKCkge1xuICByZW1vdmVDb2xvckZyb21BbGxTdGFycygpO1xuICBnZXRTdGFyMSgpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0xXCIpO1xuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0xXCIpO1xufVxuZnVuY3Rpb24gYWRkQ29sb3JUaHJlZVN0YXJzKCkge1xuICByZW1vdmVDb2xvckZyb21BbGxTdGFycygpO1xuICBnZXRTdGFyMSgpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0yXCIpO1xuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0yXCIpO1xuICBnZXRTdGFyMygpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0yXCIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDb2xvckZyb21BbGxTdGFycygpIHtcbiAgZGVjb2xvckZpcnN0U3RhcigpO1xuICBkZWNvbG9yU2Vjb25kU3RhcigpO1xuICBkZWNvbG9yVGhpcmRTdGFyKCk7XG59XG5cbmZ1bmN0aW9uIGRlY29sb3JGaXJzdFN0YXIoKSB7XG4gIGdldFN0YXIxKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTFcIik7XG4gIGdldFN0YXIxKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTJcIik7XG59XG5mdW5jdGlvbiBkZWNvbG9yU2Vjb25kU3RhcigpIHtcbiAgZ2V0U3RhcjIoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMVwiKTtcbiAgZ2V0U3RhcjIoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMlwiKTtcbn1cbmZ1bmN0aW9uIGRlY29sb3JUaGlyZFN0YXIoKSB7XG4gIGdldFN0YXIzKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTFcIik7XG4gIGdldFN0YXIzKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTJcIik7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXIxKCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTFcIik7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXIyKCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTJcIik7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXIzKCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTNcIik7XG59XG5cbmV4cG9ydCB7IHN0YXJzQ2hhbmdlQ29sb3JzLCBhY3RpdmF0ZVN0YXIgfTtcbiIsImltcG9ydCB7IGdldENvbXB1dGVkRGlzcGxheSB9IGZyb20gXCIuLi90YXNrcy9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5pbXBvcnQgeyBtaW5pbWl6ZVByb2plY3RDb250YWluZXIgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbmZ1bmN0aW9uIHJlc3BvbnNpdmUoKSB7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgLy8gUmVzaXppbmcgd2luZG93IG1ha2VzIG1pZGRsZSBjb2x1bW4gZml0XG4gIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTAyNHB4KVwiKS5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgLy8gSWYgc2NyZWVuIGlzIG5hcnJvd2VyIHRoYW4gMTAyNHB4IGFuZCBkZXRhaWxzIGFyZSBvcGVuIChyaWdodCBzaWRlIG9mIHRoZSBwYWdlKVxuICAgIC8vIHRoYW4gbWluaW1pemUgbGVmdCBzaWRlIGFuZCBtYWtlIFwibWFpblwiIGZpdCB0aGUgd2hvbGUgc2Vjb25kIGNvbHVtblxuICAgIGlmIChzY3JlZW5MZXNzVGhlbjEwMjQoKSAmJiBnZXRDb21wdXRlZERpc3BsYXkoZGV0YWlscykgPT09IFwiZmxleFwiKSB7XG4gICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvNFwiO1xuICAgICAgbWluaW1pemVQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgICAvLyBEb2Vzbid0IG1hdHRlciB0aGUgc2l6ZSBvZiB0aGUgc2NyZWVuLFxuICAgICAgLy8gaWYgZGV0YWlscyBhcmUgY2xvc2VkICdtYWluJyBmaXQgdGhlIHdob2xlIHNlY29uZCBjb2x1bW5cbiAgICB9IGVsc2UgaWYgKGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSA9PT0gXCJub25lXCIpIHtcbiAgICAgIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gICAgICAvLyBFbHNlIGZvciBlLmcuIHdoZW4gc2NyZWVuIGFyZSB3aWRlciB0aGVuIDEwMjRweCBhbmRcbiAgICAgIC8vIGRldGFpbHMgYXJlIG9wZW4sIHRoZW4gbWFpbiBpcyB0aGUgY29sdW1uIGluIHRoZSBtaWRkbGVcbiAgICB9IGVsc2Uge1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzNcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzY3JlZW5MZXNzVGhlbjEwMjQoKSB7XG4gIC8vIENoZWNrIGlmIHNjcmVlbiBpcyBsZXNzIHRoZW4gMTAyNHB4IHdpZGVcbiAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTAyNHB4KVwiKS5tYXRjaGVzO1xufVxuXG4vLyBXaGVuIHJlc2l6aW5nIHdpbmRvdyBtaWRkbGUgY29sdW1uIHJlc2l6ZSBpdHNlbGYgdG8gYmUgcmVzcG9uc2l2ZVxuZXhwb3J0IHsgcmVzcG9uc2l2ZSwgc2NyZWVuTGVzc1RoZW4xMDI0IH07XG4iLCJpbXBvcnQgeyB0YXNrRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcbmltcG9ydCB7IHJlZnJlc2hQcm9qZWN0cyB9IGZyb20gXCIuLi9wcm9qZWN0cy9yZW5kZXIuanNcIjtcblxuZnVuY3Rpb24gYWRkVGFza1RvKGFyciwgbnVtYmVyKSB7XG4gIGNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC10b2RvXCIpO1xuXG4gIHN1Ym1pdFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFkZFRhc2soYXJyLCBudW1iZXIpKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFzayhhcnIsIG51bWJlcikge1xuICAvLyBQcmV2ZW50IGRlZmF1bHQgc3VibWl0IGJlaGF2aW9yXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vIEdldCB0YXNrIG5hbWUgZnJvbSBVc2VyIGFuZCBhZGQgaXQgdG8gdGFza3MgYXJyYXlcbiAgcHVzaFRhc2tUbyhhcnJbbnVtYmVyXS50YXNrcyk7XG4gIGNvbnNvbGUudGFibGUoYXJyW251bWJlcl0udGFza3MpO1xuICAvLyBSZXJlbmRlciBhcnJheVxuICByZWZyZXNoUHJvamVjdHMoYXJyLCBudW1iZXIpO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBwdXNoVGFza1RvKGFycikge1xuICAvLyBQdXNoIHRhc2sgdG8gYXJyYXlcbiAgYXJyLnB1c2goZ2V0VGFzaygpKTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gZ2V0VGFzaygpIHtcbiAgLy8gR2V0IHVzZXIgaW5wdXQgdmFsdWUsIHNhdmUgaXRcbiAgbGV0IHRhc2sgPSB0YXNrRmFjdG9yeSh7IHRpdGxlOiBnZXRJbnB1dFZhbHVlKCkgfSk7XG4gIC8vIGFuZCBjbGVhciBpbnB1dFxuICBjbGVhclRhc2tJbnB1dCgpO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgLy8gR2V0IHVzZXIgaW5wdXQgdmFsdWUgYXMgTmV3IFRhc2sgOiBTVFJJTkdcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG9cIikudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0lucHV0KCkge1xuICAvLyBDbGVhciB1c2VyIGlucHV0XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG9cIikudmFsdWUgPSBcIlwiO1xufVxuXG5leHBvcnQgeyBnZXRUYXNrLCBhZGRUYXNrVG8gfTtcbiIsImltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUYXNrc0J5TnVtYmVyKG51bWJlciA9IDEpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiBzaW1wbHkgY3JlYXRlcyBhbiBhcnJheSB3aXRoIGRlZmF1bHQgdGFza3MgaW4gaXRcbiAgLy8gTnVtYmVyIGlzIGp1c3QgYSBudW1iZXIgb2YgYnVuZGxlIGZyb20gMSB0byAzXG4gIGxldCBidW5kbGUxID0gW1xuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIGVuZ2xpc2hcIixcbiAgICAgIGRhdGU6IFwiMTUuMDMuMjAyNVwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICBub3RlOiBcInNvbWV0aGluZ1wiLFxuICAgIH0pLFxuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIGVuZ2xpc2ggYWdhaW5cIixcbiAgICAgIGRhdGU6IFwiMTUuMDMuMjAyOFwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiQW5kIEFnYWluIVwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICBub3RlOiBcInNvbWV0aGluZ1wiLFxuICAgIH0pLFxuICBdO1xuXG4gIGxldCBidW5kbGUyID0gW1xuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIGdlcm1hblwiLFxuICAgICAgZGF0ZTogXCIxNS4wMy4yMDE4XCIsXG4gICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICBub3RlOiBcInNvbWV0aGluZ1wiLFxuICAgIH0pLFxuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIE1hdGghXCIsXG4gICAgICBkYXRlOiBcIjE1LjAzLjIwMThcIixcbiAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJMRUhSTkUgREVVVFNDSCEhIVwiLFxuICAgICAgZGF0ZTogXCIxNS4wMy4yMDE4XCIsXG4gICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgfSksXG4gIF07XG5cbiAgbGV0IGJ1bmRsZTMgPSBbXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTWFrZSBzdHVmZlwiLFxuICAgICAgbm90ZTogXCJzb21ldGhpbmdcIixcbiAgICAgIGRvbmU6IHRydWUsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiRG8gc3R1ZmZcIixcbiAgICAgIGRhdGU6IFwiMTAuMDEuMjAyMFwiLFxuICAgICAgZG9uZTogdHJ1ZSxcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJSdW4gc3R1ZmZcIixcbiAgICAgIG5vdGU6IFwic29tZXRoaW5nXCIsXG4gICAgICBkb25lOiB0cnVlLFxuICAgIH0pLFxuICBdO1xuXG4gIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIGJ1bmRsZTE7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gYnVuZGxlMjtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBidW5kbGUzO1xuICB9XG59XG5cbmV4cG9ydCB7IGdldFRhc2tzQnlOdW1iZXIgfTtcbiIsImltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuaW1wb3J0ICogYXMgRGV0YWlsc1RvZ2dsZSBmcm9tIFwiLi9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tzRnJvbShhcnIpIHtcbiAgLy8gVGFrZSB0aGUgY29sbGNldGlvbiBvZiBhbGwgZGVsZXRlIGNyb3NzIGJ1dHRvbnMgZnJvbSB0YXNrcyBieSBjbGFzcyBuYW1lXG4gIGxldCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS10b2RvLWJ0blwiKTtcbiAgLy8gTG9vcCB0aHJvdWdoIGNvbGxlY3Rpb24gYW5kIGFkZCBldmVudCBsaXN0ZW5lciB0byBlYWNoIGJ1dHRvblxuICBmb3IgKGxldCBidXR0b24gb2YgYnV0dG9ucykge1xuICAgIGRlbGV0ZUJ0blJlbW92ZVRhc2soYnV0dG9uLCBhcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUJ0blJlbW92ZVRhc2soYnV0dG9uLCBhcnIpIHtcbiAgLy8gRnVuY3Rpb24gdG8gYXNzaWduIEV2ZW50IGxpc3RlbmVyIHRvIGJ1dHRvbnNcbiAgLy8gdG8gcmVtb3ZlIHBhcnRpY3VsYXIgdGFza3MgZnJvbSBwYWdlXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAvLyBnZXQgSWQgb2YgYSBidXR0b24gdG8gd2hpY2ggbGlzdGVuZXIgaXMgYXNzaWduZWRcbiAgICBsZXQgYnRuSWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgLy8gZ2V0IG9ubHkgbnVtYmVyIGFmdGVyIHRoZSBoeXBoZW4gZnJvbSBJZFxuICAgIGxldCBudW1iZXIgPSBidG5JZC5zcGxpdChcIi1cIilbMV07XG4gICAgLy8gQmVmb3JlIHJlbW92aW5nIGFuIGl0ZW0gbWFrZSBzdXJlIHRvIGNsb3NlIGl0cyBkZXRhaWxzXG4gICAgY2xvc2VEZXRhaWxzT2ZEZWxldGVkVGFzayhudW1iZXIpO1xuICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gdGhlIGFycmF5IGJ5IHRoYXQgbnVtYmVyXG4gICAgYXJyLnNwbGljZShudW1iZXIsIDEpO1xuICAgIC8vIFJlcmVuZGVyIGFycmF5XG4gICAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG4gICAgLy8gQXZvaWQgZmlyaW5nIHBhcmVudCBlbGVtZW50IGxpc3RlbmVyIGFmdGVyIGNsaWNraW5nIG9uIHRoZSBidXR0b25cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VEZXRhaWxzT2ZEZWxldGVkVGFzayhudW1iZXIpIHtcbiAgLy8gQmVmb3JlIHJlbW92aW5nIGFuIGl0ZW0gbWFrZSBzdXJlIGhpcyBkZXRhaWxzIGFyZSBub3Qgc2hvd25cbiAgLy8gSWYgdGhleSBhcmUgdGhlbiBoaWRlIHRoZW1cbiAgaWYgKERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCkgPT09IG51bWJlcilcbiAgICBEZXRhaWxzVG9nZ2xlLmhpZGVEZXRhaWxzKCk7XG59XG5cbmV4cG9ydCB7IGRlbGV0ZVRhc2tzRnJvbSB9O1xuIiwiaW1wb3J0ICogYXMgRGV0YWlsc1RvZ2dsZSBmcm9tIFwiLi9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5pbXBvcnQgeyBhY3RpdmF0ZVN0YXIgfSBmcm9tIFwiLi4vc3R5bGUvcHJpb3JpdHkuanNcIjtcbmltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuXG5mdW5jdGlvbiBwdXRUYXNrSW5mb1RvSW5wdXQodGFzaykge1xuICAvLyBGdW5jdGlvbiB0byBwdXQgaW5mbyBmcm9tIHRhc2tzIGluIGlucHV0cyB3aGVuIGRldGFpbHMgYXJlIHNob3duXG4gIHNldE5hbWUodGFzay50aXRsZSk7XG4gIHNldERhdGUodGFzay5kYXRlKTtcbiAgc2V0UGlvcml0eSh0YXNrLnByaW9yaXR5KTtcbiAgc2V0Tm90ZSh0YXNrLm5vdGUpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUYXNrT25JbnB1dChwcm9qZWN0cywgbnVtYmVyKSB7XG4gIC8vIENoYW5nZSBhIHRhc2sgd2l0aCBpbnB1dCBmcm9tIERldGFpbHMgV2luZG93XG4gIGNoYW5nZVRpdGxlT25JbnB1dChwcm9qZWN0c1tudW1iZXJdLnRhc2tzKTtcbiAgY2hhbmdlRGF0ZU9uSW5wdXQocHJvamVjdHNbbnVtYmVyXS50YXNrcyk7XG4gIGNoYW5nZVByaW9yaXR5T25JbnB1dChwcm9qZWN0c1tudW1iZXJdLnRhc2tzKTtcbiAgY2hhbmdlTm90ZU9uSW5wdXQocHJvamVjdHNbbnVtYmVyXS50YXNrcyk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRpdGxlT25JbnB1dChhcnIpIHtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW5hbWUtY2hhbmdlclwiKTtcblxuICBpbnB1dC5vbmlucHV0ID0gKCkgPT4gY2hhbmdlVGl0bGUoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGl0bGUoYXJyKSB7XG4gIC8vIGdldCBudW1iZXIgb2YgdGFzayBmcm9tIGRldGFpbHNcbiAgbGV0IHRhc2tOdW1iZXIgPSBEZXRhaWxzVG9nZ2xlLmdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpO1xuICAvLyBVc2UgdGhpcyBudW1iZXIgdG8gZ2V0IHRvIHRhc2sudGl0bGUgaW4gYXJyYXlcbiAgbGV0IHRhc2sgPSBhcnJbdGFza051bWJlcl07XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1uYW1lLWNoYW5nZXJcIik7XG4gIC8vIFRhc2sgdGl0bGUgaXMgbm93IHVzZXIgaW5wdXQgdmFsdWVcbiAgdGFzay50aXRsZSA9IGlucHV0LnZhbHVlO1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZURhdGVPbklucHV0KGFycikge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG5cbiAgaW5wdXQub25pbnB1dCA9ICgpID0+IGNoYW5nZURhdGUoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRGF0ZShhcnIpIHtcbiAgLy8gZ2V0IG51bWJlciBvZiB0YXNrIGZyb20gZGV0YWlsc1xuICBsZXQgdGFza051bWJlciA9IERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCk7XG4gIC8vIFVzZSB0aGlzIG51bWJlciB0byBnZXQgdG8gdGFzay5kYXRlIGluIGFycmF5XG4gIGxldCB0YXNrID0gYXJyW3Rhc2tOdW1iZXJdO1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG4gIC8vIFRhc2sgZGF0ZSBpcyBub3cgZm9ybWF0dGVkIGRhdGUgaW5wdXQgdmFsdWVcbiAgdGFzay5kYXRlID0gZm9ybWF0RGF0ZTIoaW5wdXQudmFsdWUpO1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5T25JbnB1dChhcnIpIHtcbiAgbGV0IHN0YXJzID0gW1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0xXCIpLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0yXCIpLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0zXCIpLFxuICBdO1xuXG4gIGZvciAobGV0IHN0YXIgb2Ygc3RhcnMpIHtcbiAgICBzdGFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjaGFuZ2VQcmlvcml0eShhcnIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VQcmlvcml0eShhcnIpIHtcbiAgLy8gZ2V0IG51bWJlciBvZiB0YXNrIGZyb20gZGV0YWlsc1xuICBsZXQgdGFza051bWJlciA9IERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCk7XG4gIC8vIFVzZSB0aGlzIG51bWJlciB0byBnZXQgdG8gdGFzay5kYXRlIGluIGFycmF5XG4gIGxldCB0YXNrID0gYXJyW3Rhc2tOdW1iZXJdO1xuICBsZXQgaW5wdXQgPSBnZXRQcmlvcml0eUlucHV0KCk7XG4gIC8vIFRhc2sgZGF0ZSBpcyBub3cgZm9ybWF0dGVkIGRhdGUgaW5wdXQgdmFsdWVcbiAgdGFzay5wcmlvcml0eSA9IGlucHV0O1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG59XG5cbmZ1bmN0aW9uIGdldFByaW9yaXR5SW5wdXQoKSB7XG4gIGxldCBzdGFyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0xXCIpO1xuXG4gIGlmIChzdGFyMS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZC0xXCIpKSB7XG4gICAgcmV0dXJuIFwibWVkaXVtXCI7XG4gIH0gZWxzZSBpZiAoc3RhcjEuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWQtMlwiKSkge1xuICAgIHJldHVybiBcImhpZ2hcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJsb3dcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VOb3RlT25JbnB1dChhcnIpIHtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlLWNoYW5nZXJcIik7XG5cbiAgaW5wdXQub25pbnB1dCA9ICgpID0+IGNoYW5nZU5vdGUoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlTm90ZShhcnIpIHtcbiAgLy8gZ2V0IG51bWJlciBvZiB0YXNrIGZyb20gZGV0YWlsc1xuICBsZXQgdGFza051bWJlciA9IERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCk7XG4gIC8vIFVzZSB0aGlzIG51bWJlciB0byBnZXQgdG8gdGFzay5ub3RlIGluIGFycmF5XG4gIGxldCB0YXNrID0gYXJyW3Rhc2tOdW1iZXJdO1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGUtY2hhbmdlclwiKTtcbiAgLy8gVGFzayBOb3RlIGlzIG5vdyBmb3JtYXR0ZWQgTm90ZSBpbnB1dCB2YWx1ZVxuICB0YXNrLm5vdGUgPSBpbnB1dC52YWx1ZTtcbiAgLy8gcmVyZW5kZXIgdG8gc2VlIHRoZSBjaGFuZ2VzXG4gIHJlbmRlckFsbFRhc2tzRnJvbShhcnIpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU2V0IGlucHV0XG5mdW5jdGlvbiBzZXROYW1lKG5hbWUpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW5hbWUtY2hhbmdlclwiKS52YWx1ZSA9IG5hbWU7XG59XG5cbmZ1bmN0aW9uIHNldERhdGUoZGF0ZSkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUgPSBmb3JtYXREYXRlKGRhdGUpO1xuICBmb3JtYXREYXRlKGRhdGUpO1xufVxuXG5mdW5jdGlvbiBzZXRQaW9yaXR5KGxldmVsKSB7XG4gIGlmIChsZXZlbCA9PT0gXCJoaWdoXCIpIHtcbiAgICBhY3RpdmF0ZVN0YXIoMyk7XG4gIH0gZWxzZSBpZiAobGV2ZWwgPT09IFwibWVkaXVtXCIpIHtcbiAgICBhY3RpdmF0ZVN0YXIoMik7XG4gIH0gZWxzZSBpZiAobGV2ZWwgPT09IFwibG93XCIpIHtcbiAgICBhY3RpdmF0ZVN0YXIoMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Tm90ZShub3RlKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1jaGFuZ2VyXCIpLnZhbHVlID0gbm90ZTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIC8vIElmIGRhdGUgaXMgdW5kZWZpbmVkIHlldCwgdGhlbiByZXR1cm4gbm90aGluZyBcIlwiXG4gIGlmICghZGF0ZSkgcmV0dXJuIFwiXCI7XG4gIC8vIERhdGUgZm9ybWF0dGluZzogZnJvbSBcImRkLm1tLnl5eXlcIiB0byBcInl5eXktTU0tZGRcIlxuICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi5cIilbMF07XG4gIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCIuXCIpWzFdO1xuICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCIuXCIpWzJdO1xuXG4gIGxldCBmb3JtYXR0ZWQgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICByZXR1cm4gZm9ybWF0dGVkO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlMihkYXRlKSB7XG4gIC8vIElmIGRhdGUgaXMgdW5kZWZpbmVkIHlldCwgdGhlbiByZXR1cm4gbm90aGluZyBcIlwiXG4gIGlmICghZGF0ZSkgcmV0dXJuIFwiXCI7XG4gIC8vIERhdGUgZm9ybWF0dGluZzogZnJvbSAgXCJ5eXl5LU1NLWRkXCIgdG8gXCJkZC5tbS55eXl5XCJcbiAgbGV0IGRheSA9IGRhdGUuc3BsaXQoXCItXCIpWzJdO1xuICBsZXQgbW9udGggPSBkYXRlLnNwbGl0KFwiLVwiKVsxXTtcbiAgbGV0IHllYXIgPSBkYXRlLnNwbGl0KFwiLVwiKVswXTtcblxuICBsZXQgZm9ybWF0dGVkID0gYCR7ZGF5fS4ke21vbnRofS4ke3llYXJ9YDtcbiAgcmV0dXJuIGZvcm1hdHRlZDtcbn1cblxuZXhwb3J0IHsgcHV0VGFza0luZm9Ub0lucHV0LCBjaGFuZ2VUYXNrT25JbnB1dCB9O1xuIiwiaW1wb3J0IHsgc2NyZWVuTGVzc1RoZW4xMDI0IH0gZnJvbSBcIi4uL3N0eWxlL3Jlc2l6ZS5qc1wiO1xuaW1wb3J0ICogYXMgRGV0YWlsc0lucHV0IGZyb20gXCIuL2RldGFpbHNJbnB1dC5qc1wiO1xuXG5mdW5jdGlvbiB0YXNrc1RvZ2dsZURldGFpbHMoYXJyKSB7XG4gIC8vIE1ha2UgdG9kbyB0YXNrcyBzaG93IGRldGFpbHMgb24gY2xpY2sgKGZyb20gcmlnaHQgc2lkZSlcbiAgdG9kb0xpc3RTaG93RGV0YWlscyhhcnIpO1xuICAvLyBNYWtlIGJ1dHRvbiBpbiBkZXRhaWxzIGludGVyYWN0OiBoaWRlIGRldGFpbHNcbiAgQXJyb3dIaWRlRGV0YWlscygpO1xufVxuXG5mdW5jdGlvbiB0b2RvTGlzdFNob3dEZXRhaWxzKGFycikge1xuICAvLyBNYWtlIHRvZG8gbGlzdHMgc2hvdyBkZXRhaWxzIG9uY2xpY2tcbiAgbGV0IHRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9cIik7XG5cbiAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBnZXQgSWQgb2YgYSB0YXNrIHRvIHdoaWNoIGxpc3RlbmVyIGlzIGFzc2lnbmVkXG4gICAgICBsZXQgdGFza0lkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgLy8gZ2V0IG9ubHkgbnVtYmVyIGZyb20gSWQgYWZ0ZXIgdGhlIGh5cGhlblxuICAgICAgbGV0IG51bWJlciA9IHRhc2tJZC5zcGxpdChcIi1cIilbMV07XG4gICAgICAvLyBQYXNzIGEgbnVtYmVyIG9mIHRoZSBjbGlja2VkIHRhc2sgdG8gZGV0YWlsc1xuICAgICAgdG9nZ2xlRGV0YWlscyhudW1iZXIpO1xuICAgICAgLy8gUHV0IGluZm8gZnJvbSB0YXNrcyBpbiBpbnB1dHMgd2hlbiBkZXRhaWxzIGFyZSBzaG93blxuICAgICAgRGV0YWlsc0lucHV0LnB1dFRhc2tJbmZvVG9JbnB1dChhcnJbbnVtYmVyXSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gQXJyb3dIaWRlRGV0YWlscygpIHtcbiAgLy8gTWFrZSBBcnJvdyBoaWRlIERldGFpbHMgb25jbGlja1xuICBsZXQgYXJyb3dCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWRldGFpbHMtYnRuXCIpO1xuICBhcnJvd0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZURldGFpbHMpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVEZXRhaWxzKG51bWJlcikge1xuICBsZXQgaWROdW1iZXIgPSBnZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKTtcblxuICAvLyBpZiBkZXRhaWxzIGFyZSB2aXNpYmxlIG9uIHRoZSBwYWdlIEFORFxuICAvLyBpZiB1c2VyIGNsaWNrcyBvbiB0aGUgc2FtZSB0YXNrIDJ4IHRoYW4gaGlkZSBkZXRhaWxzXG4gIGlmIChkZXRhaWxzQXJlU2hvd24oKSAmJiBpZE51bWJlciA9PT0gbnVtYmVyKSB7XG4gICAgaGlkZURldGFpbHMoKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93RGV0YWlscyhudW1iZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRldGFpbHNBcmVTaG93bigpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIC8vIEFyZSBkZXRhaWxzIHNob3duIG9uIHRoZSBwYWdlPyBSZXR1cm4gYm9vbGVhbjpcbiAgcmV0dXJuIGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSAhPT0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIC8vIFRha2UgaWQgb2YgdGhlIGRldGFpbHMgY2hpbGRcbiAgbGV0IGRldGFpbHNDb250YWluZXJJZCA9IGRldGFpbHMuY2hpbGRyZW5bMF0uaWQ7XG4gIC8vIFRha2UgYSBudW1iZXIgZnJvbSB0aGF0IGlkIGFuZCByZXR1cm4gaXRcbiAgbGV0IGlkTnVtYmVyID0gZGV0YWlsc0NvbnRhaW5lcklkLnNwbGl0KFwiLVwiKVsyXTtcbiAgcmV0dXJuIGlkTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBzZXREZXRhaWxzSWRUbyhudW1iZXIpIHtcbiAgLy8gRmlyc3QgbWFrZSBkZXRhaWxzIElEIHRoZSBzYW1lIGFzIGluaXRpYWwgSUQgKHdpdGggbm8gbnVtYmVycylcbiAgLy8gQW5vdGhlciB3b3JkcyByZW1vdmUgYWxsIGV4aXN0aW5nIG51bWJlcnMgZnJvbSBpdFxuICBtYWtlRGV0YWlsc0RlZmF1bHQoKTtcbiAgLy8gVGhlbiBwYXNzIGEgbnVtYmVyIHRvIGl0XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBkZXRhaWxzLmNoaWxkcmVuWzBdLmlkICs9IGAtJHtudW1iZXJ9YDtcbn1cblxuZnVuY3Rpb24gaGlkZURldGFpbHMoKSB7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuICBoaWRlKGRldGFpbHMpO1xuICAvLyBXaGVuIGRldGFpbHMgYXJlIGhpZGRlbiB0aGUgbWFpbiBjb2x1bW4gd2lsbCBiZSBicm9hZGVyXG4gIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gIC8vIFdoZW4gZGV0YWlscyBhcmUgaGlkZGVuIHRoZWlyIGRldGFpbHMtY29udGFpbmVyLUlEIHdpbGwgYmUgZGVmYXVsdCB3aXRoIG5vIG51bWJlclxuICBtYWtlRGV0YWlsc0RlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gc2hvd0RldGFpbHMobnVtYmVyKSB7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuICBzaG93QXNGbGV4KGRldGFpbHMpO1xuICAvLyBBbHNvIHNldCBuZXcgSUQgbnVtYmVyIHRvIGRldGFpbHMgY29udGFpbmVyIChvbmx5IGlmIGl0IGRvZXNuJ3QgaGF2ZSBJRCBhbHJlYWR5KVxuICBzZXREZXRhaWxzSWRUbyhudW1iZXIpO1xuICAvLyBJZiBzY3JlZW4gaXMgYmlnZ2VyIHRoYW4gMTAyNCB0aGVuIG1ha2UgXCJtYWluXCIgdGhlIG1pZGRsZSBjb2x1bW4gb2YgMyBjb2x1bW5zXG4gIGlmICghc2NyZWVuTGVzc1RoZW4xMDI0KCkpIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi8zXCI7XG59XG5cbmZ1bmN0aW9uIG1ha2VEZXRhaWxzRGVmYXVsdCgpIHtcbiAgLy8gQ2hhbmdlIElEIG9mIGNoaWxkIG9mIHRoZSBkZXRhaWxzIHRvIGRlZmF1bHQgXCJkZXRhaWxzLWNvbnRhaW5lclwiXG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBkZXRhaWxzLmNoaWxkcmVuWzBdLmlkID0gXCJkZXRhaWxzLWNvbnRhaW5lclwiO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZERpc3BsYXkoZWxlbWVudCkge1xuICBsZXQgY29tcHV0ZWREaXNwbGF5ID0gd2luZG93XG4gICAgLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIik7XG4gIHJldHVybiBjb21wdXRlZERpc3BsYXk7XG59XG5cbmZ1bmN0aW9uIHNob3dBc0ZsZXgoZWxlbWVudCkge1xuICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn1cblxuZnVuY3Rpb24gaGlkZShlbGVtZW50KSB7XG4gIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5leHBvcnQge1xuICB0YXNrc1RvZ2dsZURldGFpbHMsXG4gIGdldENvbXB1dGVkRGlzcGxheSxcbiAgZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyLFxuICBoaWRlRGV0YWlscyxcbiAgZGV0YWlsc0FyZVNob3duLFxufTtcbiIsImltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuaW1wb3J0ICogYXMgRGV0YWlsc1RvZ2dsZSBmcm9tIFwiLi9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5cbmZ1bmN0aW9uIGRvbmVCdG5zKGFycikge1xuICAvLyBUYWtlIHRoZSBjb2xsZWN0aW9uIG9mIGFsbCBjaGVja2JveGVzIGZyb20gdGFza3MgYnkgY2xhc3MgbmFtZVxuICBsZXQgY2hlY2tib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvLWljb24tY29udGFpbmVyXCIpO1xuICAvLyBMb29wIHRocm91Z2ggY29sbGVjdGlvbiBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggYnV0dG9uXG4gIGZvciAobGV0IGNoZWNrYm94IG9mIGNoZWNrYm94ZXMpIHtcbiAgICBkb25lQnRuQ29tcGxldGVUYXNrKGNoZWNrYm94LCBhcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRvbmVCdG5Db21wbGV0ZVRhc2soY2hlY2tib3gsIGFycikge1xuICAvLyBGdW5jdGlvbiB0byBhc3NpZ24gRXZlbnQgbGlzdGVuZXIgdG8gY2hlY2tib3hlc1xuICAvLyB0byBjb21wbGV0ZSBwYXJ0aWN1bGFyIHRhc2tzIGZyb20gcGFnZVxuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAvLyBnZXQgSWQgb2YgYSBjaGVja2JveCB0byB3aGljaCBsaXN0ZW5lciBpcyBhc3NpZ25lZFxuICAgIGxldCBjYm94SWQgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkO1xuICAgIC8vIGdldCBvbmx5IG51bWJlciBhZnRlciB0aGUgaHlwaGVuIGZyb20gSWRcbiAgICBsZXQgbnVtYmVyID0gY2JveElkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAvLyBCZWZvcmUgY29tcGxldGluZyBhbiBpdGVtIG1ha2Ugc3VyZSB0byBjbG9zZSBpdHMgZGV0YWlsc1xuICAgIGNsb3NlRGV0YWlsc09mQ29tcGxldGVkVGFzayhudW1iZXIpO1xuICAgIC8vIElmIHRhc2sgaXMgZG9uZSB0aGVuIHVuZG9uZSBpdCwgZWxzZSBjb21wbGV0ZSBpdFxuICAgIGFycltudW1iZXJdLmRvbmUgPSAhYXJyW251bWJlcl0uZG9uZTtcbiAgICAvLyBSZXJlbmRlciBhcnJheVxuICAgIHJlbmRlckFsbFRhc2tzRnJvbShhcnIpO1xuICAgIC8vIEF2b2lkIGZpcmluZyBwYXJlbnQgZWxlbWVudCBsaXN0ZW5lciBhZnRlciBjbGlja2luZyBvbiB0aGUgY2hlY2tib3hcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VEZXRhaWxzT2ZDb21wbGV0ZWRUYXNrKG51bWJlcikge1xuICAvLyBCZWZvcmUgcmVtb3ZpbmcgYW4gaXRlbSBtYWtlIHN1cmUgaGlzIGRldGFpbHMgYXJlIG5vdCBzaG93blxuICAvLyBJZiB0aGV5IGFyZSB0aGVuIGhpZGUgdGhlbVxuICBpZiAoRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKSA9PT0gbnVtYmVyKVxuICAgIERldGFpbHNUb2dnbGUuaGlkZURldGFpbHMoKTtcbn1cblxuZXhwb3J0IHsgZG9uZUJ0bnMgfTtcbiIsImNvbnN0IHRhc2tGYWN0b3J5ID0gZnVuY3Rpb24gKHtcbiAgdGl0bGUgPSBcIlwiLFxuICBmcm9tID0gXCJcIixcbiAgZGF0ZSA9IFwiXCIsXG4gIHByaW9yaXR5ID0gXCJsb3dcIixcbiAgbm90ZSA9IFwiXCIsXG4gIGRvbmUgPSBmYWxzZSxcbn0pIHtcbiAgcmV0dXJuIHsgdGl0bGUsIGZyb20sIGRhdGUsIHByaW9yaXR5LCBub3RlLCBkb25lIH07XG59O1xuXG5leHBvcnQgeyB0YXNrRmFjdG9yeSB9O1xuIiwiaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuLi8uLi9JQ09OUy9jYWxlbmRhci5zdmdcIjtcbmltcG9ydCBOb3RlIGZyb20gXCIuLi8uLi9JQ09OUy9lZGl0LnN2Z1wiO1xuaW1wb3J0ICogYXMgRGVsZXRlVGFza0J0bnMgZnJvbSBcIi4vZGVsZXRlLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcbmltcG9ydCAqIGFzIFRhc2tEb25lIGZyb20gXCIuL2RvbmUuanNcIjtcblxuZnVuY3Rpb24gcmVuZGVyQWxsVGFza3NGcm9tKGFycikge1xuICAvLyBDbGVhciBhbGwgcHJldmlvdXNseSByZW5kZXJlZCBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG4gIGNsZWFyQ29udGVudE9mKFwidG9kb3NcIik7XG4gIC8vUmVuZGVyIGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXkgdG8gdGhlIHBhZ2VcbiAgZm9yIChsZXQgW2luZGV4LCBpdGVtXSBvZiBhcnIuZW50cmllcygpKSB7XG4gICAgcmVuZGVyVGFzayhpbmRleCwgaXRlbSk7XG4gIH1cbiAgLy8gTWFrZSBkZWxldGUgYnV0dG9ucyBvbiBjbGljayByZW1vdmUgdGFzayB0byB3aGljaCB0aGV5IGFyZSBhc3NpZ25lZFxuICBEZWxldGVUYXNrQnRucy5kZWxldGVUYXNrc0Zyb20oYXJyKTtcbiAgLy8gTWFrZSBlYWNoIHRhc2sgc2hvdyBpdHMgZGV0YWlscyBvbiBjbGlja1xuICBEZXRhaWxzVG9nZ2xlLnRhc2tzVG9nZ2xlRGV0YWlscyhhcnIpO1xuICAvLyBNYWtlIGVhY2ggdGFzayBjaGVja2JveCBjb21wbGV0ZSB0YXNrIGJ5IGNoYW5naW5nIGl0cyBjbGFzc1xuICBUYXNrRG9uZS5kb25lQnRucyhhcnIpO1xuICAvLyBSZWFjaCBsYWJlbHMgYW5kIG1ha2UgdGhlbSBjaGFuZ2UgdGhlbXNlbHZlcyB3aGVuIHRoZSB0YXNrIGlzIGRvbmVcbiAgdG9nZ2xlRG9uZUljb25zKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudE9mKGlkKSB7XG4gIC8vIFJlbW92ZSBhbnkgY2hpbGQgb2YgdGhlIGVsZW1lbnQgd2l0aCBpZFxuICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2soaSwgdGFzaykge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zXCIpLmFwcGVuZChjcmVhdGVUYXNrKGksIHRhc2spKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhpLCB0YXNrKSB7XG4gIC8vIGNyZWF0ZSBsaXN0IGVsZW1lbnQgd2l0aCBhIGNsYXNzICd0b2RvJ1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kb1wiKTtcbiAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRhc2stJHtpfWApO1xuICAvLyBBcHBlbmQgbGFiZWwsIGlucHV0LCBkaXYgYW5kIGJ1dHRvbiB0byBpdFxuICBsaS5hcHBlbmQoY3JlYXRlTGFiZWwoaSkpO1xuICBsaS5hcHBlbmQoY3JlYXRlSW5wdXQoaSkpO1xuICBsaS5hcHBlbmQoXG4gICAgY3JlYXRlQ29udGVudChcbiAgICAgIHRhc2sudGl0bGUsXG4gICAgICB0YXNrLmZyb20sXG4gICAgICB0YXNrLmRhdGUsXG4gICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgdGFzay5ub3RlLFxuICAgICAgdGFzay5kb25lXG4gICAgKVxuICApO1xuICBsaS5hcHBlbmQoY3JlYXRlRGVsZXRlQnRuKGkpKTtcblxuICByZXR1cm4gbGk7XG59XG5cbi8vIExBQkVMXG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGkpIHtcbiAgLy8gcmV0dXJucyBsYWJlbCBmb3IgXCJ0b2RvY2hlY2tib3hcIiArIGlcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgbGFiZWwtJHtpfWApO1xuICBsYWJlbC5odG1sRm9yID0gYHRvZG9jaGVja2JveCR7aX1gO1xuICBsYWJlbC5hcHBlbmQoY3JlYXRlRG9uZUljb24oKSk7XG4gIHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRG9uZUljb24oKSB7XG4gIC8vIGNyZWF0ZSBpY29uIGNvbnRhaW5lclxuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pY29uLWNvbnRhaW5lclwiKTtcbiAgLy8gY3JlYXRlIGljb25cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW9uLWljb25cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNoZWNrbWFyay1vdXRsaW5lXCIpO1xuICAvLyBhcHBlbmQgaWNvbiB0byBjb250YWluZXJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBJTlBVVFxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dChpKSB7XG4gIC8vIENyZWF0ZSBpbnB1dCBjaGVja2JveCBlbGVtZW50IGFmdGVyIHRoZSBsYWJlbFxuICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIC8vIEFkZCBhdHRyaWJ1dGVzXG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYHRvZG8tY2hlY2tib3hgKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRvZG9jaGVja2JveC0ke2l9YCk7XG4gIHJldHVybiBjaGVja2JveDtcbn1cblxuLy8gQ09OVEVOVCA9IHRhc2sgdGl0bGUgYW5kIGRldGFpbHNcblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCh0aXRsZSwgZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUsIGRvbmUpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby10ZXh0XCIpO1xuICAvLyBBcHBlbmQgdGl0bGUgYW5kIGRldGFpbHMgdG8gY29udGVudFxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKHRpdGxlKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRGV0YWlscyhmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSkpO1xuICBpZiAoZG9uZSkgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHN0cikge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gc3RyO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURldGFpbHMoZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGV0YWlsc1wiKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVGcm9tKGZyb20pKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVEdWUoZGF0ZSkpO1xuICBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZVByaW9yaXR5KHByaW9yaXR5KSk7XG4gIGRldGFpbHMuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZShub3RlKSk7XG5cbiAgcmV0dXJuIGRldGFpbHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyb20oZnJvbSkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZnJvbS1wcm9qZWN0XCIpO1xuICBpZiAoZnJvbSkgc3Bhbi50ZXh0Q29udGVudCA9IGBGcm9tICR7ZnJvbX1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHVlKGRhdGUpIHtcbiAgbGV0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGR1ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImR1ZS1kYXRlXCIpO1xuICBpZiAoZGF0ZSkge1xuICAgIC8vIElmIHRhc2sgaGFzIGRhdGUgYmVmb3JlIHRvZGF5LCBpdCB3aWxsIGJlIHJlZCBjb2xvcmVkXG4gICAgaWYgKGRhdGVPdmVyZHVlKGRhdGUpKSBkdWUuY2xhc3NMaXN0LmFkZChcIm92ZXJkdWUtZGF0ZVwiKTtcblxuICAgIGR1ZS5hcHBlbmRDaGlsZChjcmVhdGVDYWxlbmRhckltYWdlKCkpO1xuICAgIGR1ZS5hcHBlbmRDaGlsZChjcmVhdGVTcGFuRm9yRGF0ZShkYXRlKSk7XG4gIH1cbiAgcmV0dXJuIGR1ZTtcbn1cblxuZnVuY3Rpb24gZGF0ZU92ZXJkdWUoZGF0ZSkge1xuICAvLyBGdW5jdGlvbiB0byBjb21wYXJlIGRhdGVzOiB0b2RheSB3aXRoIGEgZGF0ZVxuICAvLyBJZiBkYXRlIGlzIGVhcmxpZXIgdGhhbiB0b2RheSB0aGVuIHJldHVybiB0cnVlXG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbiAgbGV0IGRheSA9IGRhdGUuc3BsaXQoXCIuXCIpWzBdO1xuICBsZXQgbW9udGggPSBkYXRlLnNwbGl0KFwiLlwiKVsxXTtcbiAgbGV0IHllYXIgPSBkYXRlLnNwbGl0KFwiLlwiKVsyXTtcblxuICBsZXQgdGFza0RhdGUgPSBuZXcgRGF0ZShgJHt5ZWFyfS0ke21vbnRofS0ke2RheX0gMDowMDowMGApO1xuXG4gIHJldHVybiB0YXNrRGF0ZSA8IHRvZGF5ID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYWxlbmRhckltYWdlKCkge1xuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBDYWxlbmRhcik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJDYWxlbmRhclwiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTJweFwiKTtcblxuICByZXR1cm4gaW1nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuRm9yRGF0ZShkYXRlKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBgRHVlICR7ZGF0ZX1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHkobGV2ZWwpIHtcbiAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGAke2xldmVsfS1wcmlvcml0eWApO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChjcmVhdGVTcGFuRm9yUHJpb3JpdHkobGV2ZWwpKTtcbiAgcmV0dXJuIHByaW9yaXR5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuRm9yUHJpb3JpdHkobGV2ZWwpIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaWYgKGxldmVsICE9PSBcImxvd1wiKVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBgJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIobGV2ZWwpfSBwcmlvcml0eWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGUobm90ZSkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibm90ZS1wcmVzZW5jZVwiKTtcblxuICBpZiAobm90ZSkge1xuICAgIC8vIGNyZWF0ZSBhbmQgQXBwZW5kIE5vdGUgSWNvblxuICAgIGxldCBub3RlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbm90ZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIE5vdGUpO1xuICAgIG5vdGVJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBlblwiKTtcbiAgICBub3RlSWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEycHhcIik7XG5cbiAgICAvLyBjcmVhdGUgYW5kIGFwcGVuZCB0ZXh0XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJOb3RlXCI7XG5cbiAgICBzcGFuLmFwcGVuZENoaWxkKG5vdGVJY29uKTtcbiAgICBzcGFuLmFwcGVuZENoaWxkKHRleHQpO1xuICB9XG4gIHJldHVybiBzcGFuO1xufVxuXG4vLyBERUxFVEUgQlVUVE9OXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVCdG4oaSkge1xuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGV0ZS10b2RvLWJ0blwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGBkZWxldGVidG4tJHtpfWApO1xuXG4gIC8vIGNyZWF0ZSBhbiBpY29uIGFuZCBhcHBlbmQgaXQgdG8gYnV0dG9uXG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlvbi1pY29uXCIpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjbG9zZS1jaXJjbGVcIik7XG5cbiAgYnRuLmFwcGVuZENoaWxkKGljb24pO1xuXG4gIHJldHVybiBidG47XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURvbmVJY29ucygpIHtcbiAgLy8gR2V0IGNvbGxlY3Rpb24gb2YgYWxsIHRhc2tzIHdpY2ggYXJlIGNvbXBsZXRlZFxuICBsZXQgZG9uZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZG9uZVwiKTtcbiAgLy8gRm9yIGVhY2ggY29tcGxldGVkIHRhc2sgdGFrZSBsYWJlbCBhbmQgdG9nZ2xlIGEgY2xhc3MgXCJjb21wbGV0ZWRcIiBvbiBpdFxuICBmb3IgKGxldCB0YXNrIG9mIGRvbmVzKSB7XG4gICAgbGV0IG51bWJlciA9IHRhc2sucGFyZW50RWxlbWVudC5pZC5zcGxpdChcIi1cIilbMV07XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxhYmVsLSR7bnVtYmVyfWApO1xuICAgIGxldCBpY29uQ29udGFpbmVyID0gbGFiZWwuZmlyc3RDaGlsZDtcblxuICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgfVxufVxuXG5leHBvcnQgeyByZW5kZXJBbGxUYXNrc0Zyb20sIGNsZWFyQ29udGVudE9mIH07XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==