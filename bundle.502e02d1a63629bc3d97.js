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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n@keyframes rotation {\n  0% {\n    transform: rotate(0); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes appearFromRightProject {\n  0% {\n    left: 30px;\n    opacity: 0; }\n  100% {\n    left: 0px;\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  user-select: none; }\n\nbody,\nhtml {\n  height: 100%;\n  margin: 0; }\n\nbody {\n  font-family: \"Sen\", sans-serif;\n  line-height: 1.25;\n  background: #e9e9e9; }\n\n#content {\n  display: grid;\n  height: 100%;\n  grid-template-rows: 60px auto;\n  grid-template-columns: 300px auto 330px;\n  grid-template-areas: \"header header header\" \"projects main todo-misc\"; }\n  #content.broad {\n    grid-template-columns: 68px auto 330px; }\n\n/* --- TOP of the PAGE : HEADER --- */\nheader {\n  grid-area: header;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  justify-content: center;\n  background: #106877;\n  color: #f4f4f4;\n  font-size: 1.9em;\n  font-weight: 900;\n  padding: 0;\n  width: 100%;\n  font-family: \"Permanent Marker\", cursive;\n  letter-spacing: 5px; }\n  header #menu-icon {\n    margin-right: auto;\n    margin-left: 0;\n    font-size: 48px;\n    cursor: pointer;\n    padding: 10px; }\n    header #menu-icon:hover {\n      background: #0b505c; }\n  header #header-title {\n    margin-right: auto; }\n  header #socials {\n    margin-right: 10px;\n    font-size: 48px;\n    cursor: pointer; }\n\n/* LEFT SIDE OF THE PAGE: PROJECTS */\n#project-container {\n  grid-area: projects;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  -webkit-box-shadow: 8px 0px 5px -4px #cacaca;\n  -moz-box-shadow: 8px 0px 5px -4px #cacaca;\n  box-shadow: 8px 0px 5px -4px #cacaca;\n  /* LEFT-SIDE OF THE PAGE: User Input*/ }\n  #project-container #project-list {\n    width: 280px;\n    max-width: 280px; }\n    #project-container #project-list.broad {\n      width: 68px; }\n    #project-container #project-list .project {\n      margin: 10px 0;\n      padding: 10px;\n      border-radius: 5px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      word-wrap: break-word;\n      white-space: normal;\n      overflow: hidden; }\n      #project-container #project-list .project.broad {\n        margin: 10px 0;\n        padding: 10px 10px 10px 22px;\n        border-radius: 0; }\n      #project-container #project-list .project.active {\n        color: #11998e;\n        font-weight: 900; }\n        #project-container #project-list .project.active:hover .delete-project-btn {\n          background: #fff; }\n      #project-container #project-list .project:hover .delete-project-btn {\n        background: #f0f0f0;\n        visibility: visible;\n        animation: appearFromRightProject 0.3s ease-out forwards; }\n      #project-container #project-list .project:not(.active):hover {\n        background: #f0f0f0;\n        cursor: pointer; }\n      #project-container #project-list .project .project-icon {\n        font-size: 24px;\n        margin-right: 20px; }\n        #project-container #project-list .project .project-icon.broad {\n          margin-right: 0; }\n      #project-container #project-list .project .project-title-count-container {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start; }\n        #project-container #project-list .project .project-title-count-container.broad {\n          display: none; }\n      #project-container #project-list .project .project-name {\n        width: 155px;\n        max-width: 155px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n      #project-container #project-list .project .count-todos {\n        font-size: 0.8em;\n        font-weight: 900;\n        margin-left: auto;\n        width: 29px;\n        padding-right: 5px; }\n      #project-container #project-list .project .delete-project-btn {\n        visibility: hidden;\n        position: relative;\n        font-size: 24px;\n        margin-left: auto;\n        outline: none;\n        border: none;\n        background: #fff;\n        color: #c5c5c5;\n        cursor: pointer;\n        transition: color 0.2s; }\n        #project-container #project-list .project .delete-project-btn.broad {\n          display: none; }\n        #project-container #project-list .project .delete-project-btn:hover {\n          color: #999999; }\n        #project-container #project-list .project .delete-project-btn:focus {\n          color: #6e6e6e; }\n  #project-container #new-project-form {\n    width: 250px;\n    max-width: 280px;\n    position: relative;\n    margin-left: 15px;\n    margin-right: 0;\n    display: flex;\n    /* Input */\n    /* Submit button */ }\n    #project-container #new-project-form.broad {\n      width: 68px;\n      margin: 0; }\n    #project-container #new-project-form #new-project {\n      border: 0;\n      border-bottom: 2px solid #6b6b6b;\n      margin-left: 2px;\n      margin-right: auto;\n      padding: 9px 0;\n      outline: 0;\n      font-size: 1em;\n      color: #6b6b6b;\n      background: transparent;\n      font-family: \"Sen\", sans-serif; }\n      #project-container #new-project-form #new-project.broad {\n        display: none; }\n      #project-container #new-project-form #new-project:focus {\n        transition: 0.7s;\n        color: #11998e;\n        border-bottom: 2px solid #38ef7d; }\n        #project-container #new-project-form #new-project:focus::placeholder {\n          transition: 0.7s;\n          color: #11998e; }\n    #project-container #new-project-form #submit-project {\n      background: #fff;\n      display: inline-block;\n      border: none;\n      position: relative;\n      top: 0px;\n      left: 10px;\n      text-decoration: none;\n      font-size: 24px;\n      cursor: pointer;\n      text-align: center;\n      padding: 6px; }\n      #project-container #new-project-form #submit-project.broad {\n        padding: 0;\n        left: 4px;\n        padding: 7px 18px; }\n      #project-container #new-project-form #submit-project ion-icon {\n        --ionicon-stroke-width: 48px;\n        color: #6b6b6b; }\n      #project-container #new-project-form #submit-project:focus {\n        outline: none; }\n      #project-container #new-project-form #submit-project::after {\n        content: \"\";\n        position: absolute;\n        z-index: 0;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: 2px solid #fff;\n        border-radius: 5px;\n        transition: 0.5s; }\n      #project-container #new-project-form #submit-project:hover {\n        color: #11998e; }\n        #project-container #new-project-form #submit-project:hover::after {\n          border: 2px solid #38ef7d;\n          border-radius: 5px; }\n        #project-container #new-project-form #submit-project:hover ion-icon {\n          color: #11998e; }\n\n/* Middle: Project title, todo tasks*/\nmain {\n  grid-area: main;\n  min-width: 377px;\n  background: #fff;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-shadow: 0px 0px 5px 2px #cacaca;\n  -moz-box-shadow: 0px 0px 5px 2px #cacaca;\n  box-shadow: 0px 0px 5px 2px #cacaca;\n  grid-column: 2 / 4;\n  /* User input todo tasks*/ }\n  @media screen and (max-width: 1024px) {\n    main {\n      grid-column: 2 / 4; } }\n  main #project-title {\n    margin-bottom: 20px;\n    font-weight: 900;\n    font-size: 1.4em; }\n  main .todo {\n    position: relative;\n    width: 100%;\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 40px auto 20px;\n    grid-template-areas: \"checkbox todotext btn\";\n    justify-items: start;\n    align-items: center;\n    margin-bottom: 15px;\n    padding: 5px 15px;\n    border: 1px solid lightgrey;\n    border-radius: 5px;\n    cursor: pointer;\n    /* Custom made checkbox with after element */\n    /* Text of the todo task with details */ }\n    main .todo:hover {\n      -webkit-box-shadow: 0px 0px 5px 0px #e4e4e4;\n      -moz-box-shadow: 0px 0px 5px 0px #e4e4e4;\n      box-shadow: 0px 0px 5px 0px #e4e4e4; }\n    main .todo:hover .delete-todo-btn {\n      background: #fff;\n      visibility: visible;\n      animation: appearFromRightProject 0.3s ease-out forwards; }\n    main .todo label {\n      grid-area: checkbox; }\n      main .todo label .todo-icon-container {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 30px;\n        height: 30px;\n        transition: 0.7s; }\n        main .todo label .todo-icon-container::after {\n          visibility: visible;\n          content: \"\";\n          position: absolute;\n          z-index: 0;\n          left: 0;\n          top: 0;\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box;\n          border: 2px solid #c5c5c5;\n          border-radius: 50%;\n          cursor: pointer;\n          transition: 0.7s; }\n        main .todo label .todo-icon-container ion-icon {\n          visibility: hidden;\n          font-size: 24px;\n          --ionicon-stroke-width: 48px; }\n        main .todo label .todo-icon-container:hover::after {\n          border: 2px solid #e2b0e9; }\n        main .todo label .todo-icon-container:hover ion-icon {\n          color: #e2b0e9;\n          visibility: visible;\n          animation: fadeIn 0.5s ease-out; }\n        main .todo label .todo-icon-container.completed:hover::after {\n          border: 2px solid #c5c5c5 !important; }\n        main .todo label .todo-icon-container.completed ion-icon {\n          visibility: visible !important;\n          color: #c5c5c5;\n          animation: none; }\n    main .todo .todo-checkbox {\n      display: none; }\n    main .todo .todo-text {\n      grid-area: todotext;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around; }\n      main .todo .todo-text.done {\n        text-decoration: line-through;\n        color: #c5c5c5 !important; }\n        main .todo .todo-text.done .medium-priority,\n        main .todo .todo-text.done .high-priority,\n        main .todo .todo-text.done .due-date,\n        main .todo .todo-text.done .overdue-date {\n          color: #c5c5c5 !important; }\n      main .todo .todo-text .todo-title {\n        font-size: 1.15em;\n        overflow-wrap: break-word;\n        word-wrap: break-word; }\n      main .todo .todo-text .details {\n        font-size: 0.8em; }\n        main .todo .todo-text .details .from-project,\n        main .todo .todo-text .details .due-date,\n        main .todo .todo-text .details .medium-priority,\n        main .todo .todo-text .details .high-priority,\n        main .todo .todo-text .details .note-presence {\n          margin-right: 12px; }\n        main .todo .todo-text .details .from-project:empty,\n        main .todo .todo-text .details .due-date:empty,\n        main .todo .todo-text .details .medium-priority:empty,\n        main .todo .todo-text .details .high-priority:empty,\n        main .todo .todo-text .details .note-presence:empty {\n          margin-right: 0; }\n        main .todo .todo-text .details span img {\n          position: relative;\n          top: 2px;\n          margin-right: 4px; }\n        main .todo .todo-text .details span.overdue-date {\n          color: red; }\n        main .todo .todo-text .details span.high-priority {\n          color: #7300ff; }\n        main .todo .todo-text .details span.medium-priority {\n          color: #106877; }\n    main .todo .delete-todo-btn {\n      grid-area: btn;\n      visibility: hidden;\n      position: relative;\n      font-size: 24px;\n      outline: none;\n      border: none;\n      background: #fff;\n      color: #d4d4d4;\n      cursor: pointer;\n      transition: color 0.2s; }\n      main .todo .delete-todo-btn:hover {\n        color: #494040; }\n      main .todo .delete-todo-btn:focus {\n        color: #929292; }\n  main hr {\n    position: relative;\n    bottom: 20px;\n    margin-top: auto;\n    margin-right: -20px;\n    margin-left: -20px;\n    height: 10px;\n    border: 0;\n    box-shadow: 0 -10px 10px -10px #8c8c8c inset; }\n  main #new-todo-form {\n    display: flex;\n    /* Input */\n    /* Submit button */ }\n    main #new-todo-form #new-todo {\n      width: 100%;\n      border: 0;\n      border-bottom: 2px solid #6b6b6b;\n      margin-left: 2px;\n      margin-right: auto;\n      padding: 9px 0;\n      outline: 0;\n      font-size: 1em;\n      color: #6b6b6b;\n      background: transparent;\n      font-family: \"Sen\", sans-serif; }\n      main #new-todo-form #new-todo:focus {\n        transition: 0.7s;\n        color: #11998e;\n        border-bottom: 2px solid #38ef7d; }\n        main #new-todo-form #new-todo:focus::placeholder {\n          transition: 0.7s;\n          color: #11998e; }\n    main #new-todo-form #submit-todo {\n      background: #fff;\n      display: inline-block;\n      border: none;\n      position: relative;\n      top: 0px;\n      left: 10px;\n      text-decoration: none;\n      font-size: 24px;\n      cursor: pointer;\n      text-align: center;\n      padding: 6px; }\n      main #new-todo-form #submit-todo ion-icon {\n        --ionicon-stroke-width: 48px;\n        color: #6b6b6b; }\n      main #new-todo-form #submit-todo:focus {\n        outline: none; }\n      main #new-todo-form #submit-todo::after {\n        content: \"\";\n        position: absolute;\n        z-index: 0;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: 2px solid #fff;\n        border-radius: 5px;\n        transition: 0.5s; }\n      main #new-todo-form #submit-todo:hover {\n        color: #11998e; }\n        main #new-todo-form #submit-todo:hover::after {\n          border: 2px solid #38ef7d;\n          border-radius: 5px; }\n        main #new-todo-form #submit-todo:hover ion-icon {\n          color: #11998e; }\n\n/* Right side of the page */\n#todo-misc-container {\n  grid-area: todo-misc;\n  background: #e9e9e9;\n  display: none;\n  flex-direction: column;\n  margin-top: 20px;\n  z-index: 1; }\n  @media screen and (max-width: 1024px) {\n    #todo-misc-container {\n      -webkit-box-shadow: -3px 0px 5px -2px #cacaca;\n      -moz-box-shadow: -3px 0px 5px -2px #cacaca;\n      box-shadow: -3px 0px 5px -2px #cacaca; } }\n  #todo-misc-container #todo-name-changer-container,\n  #todo-misc-container #date-changer,\n  #todo-misc-container #priority-container,\n  #todo-misc-container #note-container {\n    background: #fff;\n    margin-right: 0px;\n    margin-top: 0px;\n    border-bottom: 2px solid lightgrey;\n    border-left: 2px solid lightgrey;\n    padding: 15px;\n    -webkit-box-shadow: -3px 0px 5px -2px #cacaca;\n    -moz-box-shadow: -3px 0px 5px -2px #cacaca;\n    box-shadow: -3px 0px 5px -2px #cacaca; }\n    #todo-misc-container #todo-name-changer-container #date,\n    #todo-misc-container #date-changer #date,\n    #todo-misc-container #priority-container #date,\n    #todo-misc-container #note-container #date {\n      color: #6b6b6b; }\n  #todo-misc-container #todo-name-changer-container {\n    height: 60px;\n    border-radius: 5px 0 0 0;\n    -webkit-box-shadow: -2px -2px 5px -1px #cacaca;\n    -moz-box-shadow: -2px -2px 5px -1px #cacaca;\n    box-shadow: -2px -2px 5px -1px #cacaca; }\n    #todo-misc-container #todo-name-changer-container textarea {\n      height: 40px; }\n  #todo-misc-container #note-container {\n    height: 200px;\n    -webkit-box-shadow: -3px 4px 5px -2px #cacaca;\n    -moz-box-shadow: -3px 4px 5px -2px #cacaca;\n    box-shadow: -3px 4px 5px -2px #cacaca; }\n    #todo-misc-container #note-container textarea {\n      height: 160px; }\n  #todo-misc-container #date-changer,\n  #todo-misc-container #priority-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n    #todo-misc-container #date-changer #priority-levels,\n    #todo-misc-container #priority-container #priority-levels {\n      color: #6b6b6b; }\n      #todo-misc-container #date-changer #priority-levels .medium-priority.selected-1,\n      #todo-misc-container #date-changer #priority-levels .low-priority.selected-1,\n      #todo-misc-container #priority-container #priority-levels .medium-priority.selected-1,\n      #todo-misc-container #priority-container #priority-levels .low-priority.selected-1 {\n        color: #106877; }\n      #todo-misc-container #date-changer #priority-levels .medium-priority.selected-2,\n      #todo-misc-container #date-changer #priority-levels .low-priority.selected-2,\n      #todo-misc-container #date-changer #priority-levels .high-priority.selected-2,\n      #todo-misc-container #priority-container #priority-levels .medium-priority.selected-2,\n      #todo-misc-container #priority-container #priority-levels .low-priority.selected-2,\n      #todo-misc-container #priority-container #priority-levels .high-priority.selected-2 {\n        color: #7300ff; }\n      #todo-misc-container #date-changer #priority-levels .onmouseover:hover,\n      #todo-misc-container #priority-container #priority-levels .onmouseover:hover {\n        color: #106877; }\n      #todo-misc-container #date-changer #priority-levels .medium-priority:hover ~ .low-priority,\n      #todo-misc-container #priority-container #priority-levels .medium-priority:hover ~ .low-priority {\n        color: #106877; }\n      #todo-misc-container #date-changer #priority-levels .high-priority:hover,\n      #todo-misc-container #priority-container #priority-levels .high-priority:hover {\n        color: #7300ff; }\n      #todo-misc-container #date-changer #priority-levels ion-icon,\n      #todo-misc-container #priority-container #priority-levels ion-icon {\n        font-size: 24px;\n        cursor: pointer; }\n    #todo-misc-container #date-changer #date-remover ion-icon,\n    #todo-misc-container #priority-container #date-remover ion-icon {\n      position: relative;\n      top: 4px;\n      color: #6b6b6b;\n      cursor: pointer;\n      --ionicon-stroke-width: 48px; }\n      #todo-misc-container #date-changer #date-remover ion-icon:hover,\n      #todo-misc-container #priority-container #date-remover ion-icon:hover {\n        color: black; }\n  #todo-misc-container .misc-title {\n    font-size: 1.1em;\n    color: #6b6b6b;\n    width: 120px; }\n  #todo-misc-container textarea {\n    background: #fff;\n    outline: none;\n    resize: none;\n    overflow: hidden;\n    width: 100%;\n    border: none;\n    font-family: \"Sen\", sans-serif;\n    font-size: 1.1em; }\n    #todo-misc-container textarea::placeholder {\n      color: #6b6b6b; }\n    #todo-misc-container textarea:focus::placeholder {\n      color: #11998e; }\n  #todo-misc-container input[type=\"date\"] {\n    outline: none;\n    border: none;\n    cursor: pointer; }\n  #todo-misc-container #close-details-btn {\n    font-size: 48px;\n    width: 62px; }\n    #todo-misc-container #close-details-btn ion-icon {\n      --ionicon-stroke-width: 48px;\n      background: #fff;\n      border-radius: 0 0 5px 5px;\n      border-left: 2px solid lightgrey;\n      border-right: 2px solid lightgrey;\n      border-bottom: 2px solid lightgrey;\n      width: 60px;\n      color: #c5c5c5;\n      cursor: pointer;\n      -webkit-box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca;\n      -moz-box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca;\n      box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca; }\n      #todo-misc-container #close-details-btn ion-icon:hover {\n        color: #6e6e6e; }\n", ""]);
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
/* harmony import */ var _projects_add_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/add.js */ "./src/JS/projects/add.js");
/* harmony import */ var _projects_localstorage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/localstorage.js */ "./src/JS/projects/localstorage.js");
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

var projects = _projects_localstorage_js__WEBPACK_IMPORTED_MODULE_8__["get"]() || _toConsumableArray(_projects_defaults_js__WEBPACK_IMPORTED_MODULE_4__["getProjects"]()); //render first project


Object(_projects_render_js__WEBPACK_IMPORTED_MODULE_5__["initialRender"])(projects); // Buttons which can add a task or a project to a defined array
// Also rerender the array after adding a task

_tasks_add_js__WEBPACK_IMPORTED_MODULE_6__["addTaskTo"](projects);
_projects_add_js__WEBPACK_IMPORTED_MODULE_7__["addProjectTo"](projects); //test button

var testBtn = document.getElementById("socials");
testBtn.addEventListener("click", function () {
  return console.table(projects);
});

/***/ }),

/***/ "./src/JS/projects/add.js":
/*!********************************!*\
  !*** ./src/JS/projects/add.js ***!
  \********************************/
/*! exports provided: addProjectTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProjectTo", function() { return addProjectTo; });
/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ "./src/JS/projects/factory.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ "./src/JS/projects/render.js");
/* harmony import */ var _toggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggle.js */ "./src/JS/projects/toggle.js");




function addProjectTo(projects) {
  var submitProjectBtn = document.getElementById("submit-project");
  submitProjectBtn.addEventListener("click", function () {
    return addProject(projects);
  });
}

function addProject(projects) {
  // Prevent default submit behavior
  event.preventDefault();
  pushProjectTo(projects);
  if (projects.length === 1) Object(_toggle_js__WEBPACK_IMPORTED_MODULE_2__["activateProject"])(projects, 0);
  Object(_render_js__WEBPACK_IMPORTED_MODULE_1__["refreshProjects"])(projects);
}

function pushProjectTo(projects) {
  projects.push(getProject());
}

function getProject() {
  // Get user input value, save it
  var project = Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["projectFactory"])({
    title: getInputValue()
  }); // and clear input

  clearProjectInput();
  return project;
}

function getInputValue() {
  // Get user input value as New Project : STRING
  return document.getElementById("new-project").value;
}

function clearProjectInput() {
  document.getElementById("new-project").value = "";
}



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
    isActive: true
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

/***/ "./src/JS/projects/delete.js":
/*!***********************************!*\
  !*** ./src/JS/projects/delete.js ***!
  \***********************************/
/*! exports provided: deleteProjectFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProjectFrom", function() { return deleteProjectFrom; });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/JS/projects/render.js");
/* harmony import */ var _toggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle.js */ "./src/JS/projects/toggle.js");
/* harmony import */ var _tasks_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/render.js */ "./src/JS/tasks/render.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





function deleteProjectFrom(projects) {
  // Take the collection of all delete cross buttons from projects by class name
  var buttons = document.getElementsByClassName("delete-project-btn"); // Loop through collection and add event listener to each button

  var _iterator = _createForOfIteratorHelper(buttons),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var button = _step.value;
      deleteBtnRemoveProject(button, projects);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function deleteBtnRemoveProject(button, projects) {
  // Function to assign Event listener to buttons
  // to remove particular projects from page
  button.addEventListener("click", function (e) {
    // get Id of a button to which listener is assigned
    var btnId = e.currentTarget.id; // get only number after the hyphen from Id

    var number = btnId.split("-")[2]; // Remove item from the array of projects by that number

    projects.splice(number, 1); // Handle active projects after deleting one but before rerendering

    activationHandling(projects); // Rerender projects

    Object(_render_js__WEBPACK_IMPORTED_MODULE_0__["refreshProjects"])(projects); // Avoid firing parent element listener after clicking on the button

    e.stopPropagation();
  });
}

function activationHandling(projects) {
  // This function is needed when you delete projects
  // When is one active deleted, there needs to be another active project
  // When all deleted, there needs to be all tasks shown
  if (projects.length > 0 && noneActiveProjects(projects)) Object(_toggle_js__WEBPACK_IMPORTED_MODULE_1__["activateProject"])(projects, 0);
  if (projects.length === 0) Object(_tasks_render_js__WEBPACK_IMPORTED_MODULE_2__["clearContentOf"])("todos");
}

function noneActiveProjects(projects) {
  var _iterator2 = _createForOfIteratorHelper(projects),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var project = _step2.value;
      if (project.isActive) return false;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return true;
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
      tasks = _ref$tasks === void 0 ? [] : _ref$tasks,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? false : _ref$isActive;
  return {
    title: title,
    tasks: tasks,
    isActive: isActive
  };
};


"";

/***/ }),

/***/ "./src/JS/projects/localstorage.js":
/*!*****************************************!*\
  !*** ./src/JS/projects/localstorage.js ***!
  \*****************************************/
/*! exports provided: save, get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
function save(projects) {
  window.localStorage.setItem("projects", stringify(projects));
}

function stringify(obj) {
  return JSON.stringify(obj);
}

function get() {
  return JSON.parse(window.localStorage.getItem("projects"));
}



/***/ }),

/***/ "./src/JS/projects/render.js":
/*!***********************************!*\
  !*** ./src/JS/projects/render.js ***!
  \***********************************/
/*! exports provided: refreshProjects, initialRender, refreshOnlyTasksFrom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshProjects", function() { return refreshProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialRender", function() { return initialRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshOnlyTasksFrom", function() { return refreshOnlyTasksFrom; });
/* harmony import */ var _tasks_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tasks/render.js */ "./src/JS/tasks/render.js");
/* harmony import */ var _toggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toggle.js */ "./src/JS/projects/toggle.js");
/* harmony import */ var _tasks_detailsInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/detailsInput.js */ "./src/JS/tasks/detailsInput.js");
/* harmony import */ var _tasks_delete_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tasks/delete.js */ "./src/JS/tasks/delete.js");
/* harmony import */ var _tasks_done_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tasks/done.js */ "./src/JS/tasks/done.js");
/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delete.js */ "./src/JS/projects/delete.js");
/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localstorage.js */ "./src/JS/projects/localstorage.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










function initialRender(arr) {
  refreshProjects(arr);
}

function refreshProjects(projects) {
  // Show the name of the active project
  showActiveProjectTitle(projects); // Clear all previously rendered elements from the page

  Object(_tasks_render_js__WEBPACK_IMPORTED_MODULE_0__["clearContentOf"])("project-list");
  renderAllProjects(projects); // each project shows its tasks

  Object(_toggle_js__WEBPACK_IMPORTED_MODULE_1__["projectsShowTasks"])(projects); // delete btns can delete projects

  _delete_js__WEBPACK_IMPORTED_MODULE_5__["deleteProjectFrom"](projects); // Turn on all of the interactiveness of the tasks

  turnOnTasksInteraction(projects); // Save the projects to localStorage

  _localstorage_js__WEBPACK_IMPORTED_MODULE_6__["save"](projects);
}

function refreshOnlyTasksFrom(projects) {
  var _iterator = _createForOfIteratorHelper(projects),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var project = _step.value;
      // If project is active then render its tasks
      if (project.isActive) Object(_tasks_render_js__WEBPACK_IMPORTED_MODULE_0__["renderAllTasksFrom"])(project.tasks);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  turnOnTasksInteraction(projects);
}

function turnOnTasksInteraction(projects) {
  // Change tasks when user type something to details window
  _tasks_detailsInput_js__WEBPACK_IMPORTED_MODULE_2__["changeTaskOnInput"](projects); // Make delete tasks buttons delete tasks from projects

  _tasks_delete_js__WEBPACK_IMPORTED_MODULE_3__["deleteTasksFrom"](projects); // make done buttonst complete tasks

  _tasks_done_js__WEBPACK_IMPORTED_MODULE_4__["doneBtns"](projects);
}

function showActiveProjectTitle(projects) {
  var projectTitle = document.getElementById("project-title");

  if (projects.length > 0) {
    projectTitle.textContent = Object(_tasks_detailsInput_js__WEBPACK_IMPORTED_MODULE_2__["getActiveProject"])(projects).title;
  } else {
    projectTitle.textContent = "";
  }
}

function renderAllProjects(arr) {
  //Render each element of the array to the page
  var _iterator2 = _createForOfIteratorHelper(arr.entries()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          index = _step2$value[0],
          item = _step2$value[1];

      renderProject(index, item); // If project is active then render its tasks

      if (item.isActive) Object(_tasks_render_js__WEBPACK_IMPORTED_MODULE_0__["renderAllTasksFrom"])(item.tasks);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function renderProject(i, project) {
  document.getElementById("project-list").append(createProject(i, project));
}

function createProject(i, project) {
  // create a li element
  var li = document.createElement("li");
  li.setAttribute("class", "project");
  if (project.isActive) li.classList.add("active");
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

/***/ "./src/JS/projects/toggle.js":
/*!***********************************!*\
  !*** ./src/JS/projects/toggle.js ***!
  \***********************************/
/*! exports provided: projectsShowTasks, activateProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsShowTasks", function() { return projectsShowTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateProject", function() { return activateProject; });
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ "./src/JS/projects/render.js");
/* harmony import */ var _tasks_detailsToggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks/detailsToggle.js */ "./src/JS/tasks/detailsToggle.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function projectsShowTasks(arr) {
  // Make projects on the page show their tasks onclick
  var projects = document.getElementsByClassName("project");

  var _iterator = _createForOfIteratorHelper(projects),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var project = _step.value;
      project.addEventListener("click", function () {
        // get Id of a project to which listener is assigned
        var projectId = event.currentTarget.id; // get a number from Id after the hyphen

        var number = projectId.split("-")[1]; // Activate one project and deactivate others

        activateProject(arr, number); // Refresh projects

        Object(_render_js__WEBPACK_IMPORTED_MODULE_0__["refreshProjects"])(arr, number); // Close the details on task if it's open

        Object(_tasks_detailsToggle_js__WEBPACK_IMPORTED_MODULE_1__["hideDetails"])();
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function activateProject(arr, number) {
  deactivateAllProjects(arr); // After deactivation of all projects we activate only one

  arr[number].isActive = true;
}

function deactivateAllProjects(arr) {
  var _iterator2 = _createForOfIteratorHelper(arr),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var item = _step2.value;
      item.isActive = false;
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
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
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function addTaskTo(arr) {
  var submitTodoBtn = document.getElementById("submit-todo");
  submitTodoBtn.addEventListener("click", function () {
    return addTask(arr);
  });
}

function addTask(arr) {
  // Prevent default submit behavior
  event.preventDefault(); // Loop to get active project

  var _iterator = _createForOfIteratorHelper(arr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var project = _step.value;
      if (project.isActive) pushTaskTo(project.tasks);
    } // Rerender array

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  Object(_projects_render_js__WEBPACK_IMPORTED_MODULE_1__["refreshProjects"])(arr);
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
/* harmony import */ var _projects_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/render.js */ "./src/JS/projects/render.js");
/* harmony import */ var _detailsToggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detailsToggle.js */ "./src/JS/tasks/detailsToggle.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




function getActiveProject(arr) {
  // Find active project and return it
  var _iterator = _createForOfIteratorHelper(arr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var project = _step.value;
      if (project.isActive) return project;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function deleteTasksFrom(projects) {
  // Take the collcetion of all delete cross buttons from tasks by class name
  var buttons = document.getElementsByClassName("delete-todo-btn"); // Loop through collection and add event listener to each button

  var _iterator2 = _createForOfIteratorHelper(buttons),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var button = _step2.value;
      deleteBtnRemoveTask(button, projects);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function deleteBtnRemoveTask(button, projects) {
  // Function to assign Event listener to buttons
  // to remove particular tasks from page
  button.addEventListener("click", function (e) {
    // get Id of a button to which listener is assigned
    var btnId = e.currentTarget.id; // get only number after the hyphen from Id

    var number = btnId.split("-")[1]; // Before removing an item make sure to close its details

    closeDetailsOfDeletedTask(number);
    makeDetailsConsistent(number); // Remove item from the array of tasks by that number

    getActiveProject(projects).tasks.splice(number, 1); // Rerender projects

    Object(_projects_render_js__WEBPACK_IMPORTED_MODULE_0__["refreshProjects"])(projects); // Avoid firing parent element listener after clicking on the button

    e.stopPropagation();
  });
}

function closeDetailsOfDeletedTask(number) {
  // Before removing an item make sure his details are not shown
  // If they are then hide them
  if (_detailsToggle_js__WEBPACK_IMPORTED_MODULE_1__["getDetailsContainerIdNumber"]() === number) _detailsToggle_js__WEBPACK_IMPORTED_MODULE_1__["hideDetails"]();
}

function makeDetailsConsistent(number) {
  // This function is needed for details container to have the same id as taks have
  // For e.g. if you open the details of a task which has id = 4 (its details id is also = 4)
  // and then delete task with id = 2, then all tasks after 2 will have id = id - 1, but details stays the same
  // That's why we need a function to decrease details id by one every time we delete a task with id < id of deleted task
  if (_detailsToggle_js__WEBPACK_IMPORTED_MODULE_1__["getDetailsContainerIdNumber"]() > number) {
    decreaseDetailsId();
  }
}

function decreaseDetailsId() {
  // get id of current details
  var details = document.getElementById("todo-misc-container").children[0];
  var detailsIdNumber = details.id.split("-")[2]; // Now decrease it by one

  _detailsToggle_js__WEBPACK_IMPORTED_MODULE_1__["setDetailsIdTo"](detailsIdNumber - 1);
}



/***/ }),

/***/ "./src/JS/tasks/detailsInput.js":
/*!**************************************!*\
  !*** ./src/JS/tasks/detailsInput.js ***!
  \**************************************/
/*! exports provided: putTaskInfoToInput, changeTaskOnInput, getActiveProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "putTaskInfoToInput", function() { return putTaskInfoToInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTaskOnInput", function() { return changeTaskOnInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActiveProject", function() { return getActiveProject; });
/* harmony import */ var _detailsToggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailsToggle.js */ "./src/JS/tasks/detailsToggle.js");
/* harmony import */ var _style_priority_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/priority.js */ "./src/JS/style/priority.js");
/* harmony import */ var _projects_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../projects/render.js */ "./src/JS/projects/render.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





function putTaskInfoToInput(task) {
  // Function to put info from tasks in inputs when details are shown
  setName(task.title);
  setDate(task.date);
  setPiority(task.priority);
  setNote(task.note);
}

function getActiveProject(arr) {
  // Find active project and return it
  var _iterator = _createForOfIteratorHelper(arr),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var project = _step.value;
      if (project.isActive) return project;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function getTask(projects) {
  // get number of task from details
  var taskNumber = _detailsToggle_js__WEBPACK_IMPORTED_MODULE_0__["getDetailsContainerIdNumber"](); // get task with the same number as details window

  var task = getActiveProject(projects).tasks[taskNumber];
  return task;
}

function changeTaskOnInput(projects) {
  // Change a task with input from Details Window
  changeTitleOnInput(projects);
  changeDateOnInput(projects);
  changePriorityOnInput(projects);
  changeNoteOnInput(projects);
}

function changeTitleOnInput(arr) {
  var input = document.getElementById("todo-name-changer");

  input.oninput = function () {
    return changeTitle(arr);
  };
}

function changeTitle(arr) {
  var task = getTask(arr);
  var input = document.getElementById("todo-name-changer"); // Task title is now user input value

  task.title = input.value; // rerender to see the changes

  Object(_projects_render_js__WEBPACK_IMPORTED_MODULE_2__["refreshOnlyTasksFrom"])(arr);
}

function changeDateOnInput(arr) {
  var input = document.getElementById("date");

  input.oninput = function () {
    return changeDate(arr);
  };
}

function changeDate(arr) {
  var task = getTask(arr);
  var input = document.getElementById("date"); // Task date is now formatted date input value

  task.date = formatDate2(input.value); // rerender to see the changes

  Object(_projects_render_js__WEBPACK_IMPORTED_MODULE_2__["refreshOnlyTasksFrom"])(arr);
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
  var task = getTask(arr);
  var input = getPriorityInput(); // Task date is now formatted date input value

  task.priority = input; // rerender to see the changes

  Object(_projects_render_js__WEBPACK_IMPORTED_MODULE_2__["refreshOnlyTasksFrom"])(arr);
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
  var task = getTask(arr);
  var input = document.getElementById("note-changer"); // Task Note is now formatted Note input value

  task.note = input.value; // rerender to see the changes

  Object(_projects_render_js__WEBPACK_IMPORTED_MODULE_2__["refreshOnlyTasksFrom"])(arr);
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
/*! exports provided: tasksToggleDetails, getComputedDisplay, getDetailsContainerIdNumber, hideDetails, detailsAreShown, setDetailsIdTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tasksToggleDetails", function() { return tasksToggleDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedDisplay", function() { return getComputedDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDetailsContainerIdNumber", function() { return getDetailsContainerIdNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideDetails", function() { return hideDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detailsAreShown", function() { return detailsAreShown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDetailsIdTo", function() { return setDetailsIdTo; });
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
/* harmony import */ var _detailsToggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detailsToggle.js */ "./src/JS/tasks/detailsToggle.js");
/* harmony import */ var _projects_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects/render.js */ "./src/JS/projects/render.js");
/* harmony import */ var _detailsInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailsInput.js */ "./src/JS/tasks/detailsInput.js");
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

    Object(_detailsInput_js__WEBPACK_IMPORTED_MODULE_2__["getActiveProject"])(arr).tasks[number].done = !Object(_detailsInput_js__WEBPACK_IMPORTED_MODULE_2__["getActiveProject"])(arr).tasks[number].done; // Rerender array

    Object(_projects_render_js__WEBPACK_IMPORTED_MODULE_1__["refreshOnlyTasksFrom"])(arr); // Avoid firing parent element listener after clicking on the checkbox

    e.stopPropagation();
  });
}

function closeDetailsOfCompletedTask(number) {
  // Before removing an item make sure his details are not shown
  // If they are then hide them
  if (_detailsToggle_js__WEBPACK_IMPORTED_MODULE_0__["getDetailsContainerIdNumber"]() === number) _detailsToggle_js__WEBPACK_IMPORTED_MODULE_0__["hideDetails"]();
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
/* harmony import */ var _detailsToggle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailsToggle.js */ "./src/JS/tasks/detailsToggle.js");
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
    } // Make each task show its details on click

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  _detailsToggle_js__WEBPACK_IMPORTED_MODULE_2__["tasksToggleDetails"](arr); // Reach labels and make them change themselves when the task is done

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUNPTlMvY2FsZW5kYXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9JQ09OUy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Byb2plY3RzL2FkZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvcHJvamVjdHMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Byb2plY3RzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvcHJvamVjdHMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvcHJvamVjdHMvbG9jYWxzdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9wcm9qZWN0cy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Byb2plY3RzL3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvc3R5bGUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvc3R5bGUvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZGVsZXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZXRhaWxzSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2RldGFpbHNUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2RvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU0NTUy9zdHlsZS5zY3NzPzgxNGIiXSwibmFtZXMiOlsiTWVudUJ0biIsIlJlc2l6ZSIsIlByaW9yaXR5IiwicHJvamVjdHMiLCJMb2NhbFN0b3JhZ2UiLCJEZWZhdWx0UHJvamVjdHMiLCJpbml0aWFsUmVuZGVyIiwiQWRkVGFza0J0biIsIkFkZFByb2plY3RCdG4iLCJ0ZXN0QnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwidGFibGUiLCJhZGRQcm9qZWN0VG8iLCJzdWJtaXRQcm9qZWN0QnRuIiwiYWRkUHJvamVjdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoUHJvamVjdFRvIiwibGVuZ3RoIiwiYWN0aXZhdGVQcm9qZWN0IiwicmVmcmVzaFByb2plY3RzIiwicHVzaCIsImdldFByb2plY3QiLCJwcm9qZWN0IiwicHJvamVjdEZhY3RvcnkiLCJ0aXRsZSIsImdldElucHV0VmFsdWUiLCJjbGVhclByb2plY3RJbnB1dCIsInZhbHVlIiwiZ2V0UHJvamVjdHMiLCJhbGxQcm9qZWN0cyIsInRhc2tzIiwiRGVmYXVsdFRhc2tzIiwiaXNBY3RpdmUiLCJkZWxldGVQcm9qZWN0RnJvbSIsImJ1dHRvbnMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYnV0dG9uIiwiZGVsZXRlQnRuUmVtb3ZlUHJvamVjdCIsImUiLCJidG5JZCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIm51bWJlciIsInNwbGl0Iiwic3BsaWNlIiwiYWN0aXZhdGlvbkhhbmRsaW5nIiwic3RvcFByb3BhZ2F0aW9uIiwibm9uZUFjdGl2ZVByb2plY3RzIiwiY2xlYXJDb250ZW50T2YiLCJzYXZlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIm9iaiIsIkpTT04iLCJnZXQiLCJwYXJzZSIsImdldEl0ZW0iLCJhcnIiLCJzaG93QWN0aXZlUHJvamVjdFRpdGxlIiwicmVuZGVyQWxsUHJvamVjdHMiLCJwcm9qZWN0c1Nob3dUYXNrcyIsIkRlbGV0ZVByb2plY3RCdG5zIiwidHVybk9uVGFza3NJbnRlcmFjdGlvbiIsInJlZnJlc2hPbmx5VGFza3NGcm9tIiwicmVuZGVyQWxsVGFza3NGcm9tIiwiRGV0YWlscyIsIkRlbGV0ZVRhc2tCdG5zIiwiVGFza0RvbmUiLCJwcm9qZWN0VGl0bGUiLCJ0ZXh0Q29udGVudCIsImdldEFjdGl2ZVByb2plY3QiLCJlbnRyaWVzIiwiaW5kZXgiLCJpdGVtIiwicmVuZGVyUHJvamVjdCIsImkiLCJhcHBlbmQiLCJjcmVhdGVQcm9qZWN0IiwibGkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwiY3JlYXRlSWNvbiIsImNyZWF0ZVRpdGxlQW5kQ291bnQiLCJjcmVhdGVEZWxldGVCdG4iLCJzcGFuIiwiaWNvbiIsImNvdW50IiwiZGl2IiwibmFtZVNwYW4iLCJjb3VudFNwYW4iLCJidG4iLCJhcHBlbmRDaGlsZCIsInByb2plY3RJZCIsImhpZGVEZXRhaWxzIiwiZGVhY3RpdmF0ZUFsbFByb2plY3RzIiwic2hvd1Byb2plY3RzIiwiYnJvYWRlblByb2plY3RDb250YWluZXIiLCJnZXRFbGVtZW50c1RvQnJvYWQiLCJlbGVtZW50IiwidG9nZ2xlQnJvYWQiLCJtaW5pbWl6ZVByb2plY3RDb250YWluZXIiLCJhZGRCcm9hZCIsInRvZ2dsZSIsImNvbnRlbnQiLCJwcm9qZWN0TGlzdCIsInByb2plY3RJY29uIiwicHJvamVjdFRpdGxlQ291bnRDb250YWluZXIiLCJkZWxldGVQcm9qZWN0QnRuIiwibmV3UHJvamVjdEZvcm0iLCJuZXdQcm9qZWN0Iiwic3VibWl0UHJvamVjdCIsImVsZW1lbnRzIiwic3RhcnNDaGFuZ2VDb2xvcnMiLCJhY3RpdmF0ZUZpcnN0U3RhciIsImFjdGl2YXRlU2Vjb25kU3RhciIsImFjdGl2YXRlVGhpcmRTdGFyIiwiZ2V0U3RhcjEiLCJhY3RpdmF0ZVN0YXIiLCJnZXRTdGFyMiIsImdldFN0YXIzIiwibG9nIiwib3V0bGluZVNlY29uZFN0YXIiLCJvdXRsaW5lVGhpcmRTdGFyIiwicmVtb3ZlQ29sb3JGcm9tQWxsU3RhcnMiLCJhZGRNZWRpdW1Pbm1vdXNlb3ZlciIsImZpbGxTZWNvbmRTdGFyIiwiYWRkQ29sb3JUd29TdGFycyIsImRlY29sb3JUaGlyZFN0YXIiLCJmaWxsVGhpcmRTdGFyIiwiYWRkQ29sb3JUaHJlZVN0YXJzIiwicmVtb3ZlTWVkaXVtT25tb3VzZW92ZXIiLCJjaGlsZHJlbiIsInJlbW92ZSIsInN0YXJJc091dGxpbmVkIiwic3RhciIsImdldEF0dHJpYnV0ZSIsImRlY29sb3JGaXJzdFN0YXIiLCJkZWNvbG9yU2Vjb25kU3RhciIsInJlc3BvbnNpdmUiLCJtYWluIiwiZGV0YWlscyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInNjcmVlbkxlc3NUaGVuMTAyNCIsImdldENvbXB1dGVkRGlzcGxheSIsInN0eWxlIiwiZ3JpZENvbHVtbiIsIm1hdGNoZXMiLCJhZGRUYXNrVG8iLCJzdWJtaXRUb2RvQnRuIiwiYWRkVGFzayIsInB1c2hUYXNrVG8iLCJnZXRUYXNrIiwidGFzayIsInRhc2tGYWN0b3J5IiwiY2xlYXJUYXNrSW5wdXQiLCJnZXRUYXNrc0J5TnVtYmVyIiwiYnVuZGxlMSIsImRhdGUiLCJwcmlvcml0eSIsIm5vdGUiLCJidW5kbGUyIiwiYnVuZGxlMyIsImRvbmUiLCJkZWxldGVUYXNrc0Zyb20iLCJkZWxldGVCdG5SZW1vdmVUYXNrIiwiY2xvc2VEZXRhaWxzT2ZEZWxldGVkVGFzayIsIm1ha2VEZXRhaWxzQ29uc2lzdGVudCIsIkRldGFpbHNUb2dnbGUiLCJkZWNyZWFzZURldGFpbHNJZCIsImRldGFpbHNJZE51bWJlciIsInB1dFRhc2tJbmZvVG9JbnB1dCIsInNldE5hbWUiLCJzZXREYXRlIiwic2V0UGlvcml0eSIsInNldE5vdGUiLCJ0YXNrTnVtYmVyIiwiY2hhbmdlVGFza09uSW5wdXQiLCJjaGFuZ2VUaXRsZU9uSW5wdXQiLCJjaGFuZ2VEYXRlT25JbnB1dCIsImNoYW5nZVByaW9yaXR5T25JbnB1dCIsImNoYW5nZU5vdGVPbklucHV0IiwiaW5wdXQiLCJvbmlucHV0IiwiY2hhbmdlVGl0bGUiLCJjaGFuZ2VEYXRlIiwiZm9ybWF0RGF0ZTIiLCJzdGFycyIsImNoYW5nZVByaW9yaXR5IiwiZ2V0UHJpb3JpdHlJbnB1dCIsInN0YXIxIiwiY29udGFpbnMiLCJjaGFuZ2VOb3RlIiwibmFtZSIsImZvcm1hdERhdGUiLCJsZXZlbCIsImRheSIsIm1vbnRoIiwieWVhciIsImZvcm1hdHRlZCIsInRhc2tzVG9nZ2xlRGV0YWlscyIsInRvZG9MaXN0U2hvd0RldGFpbHMiLCJBcnJvd0hpZGVEZXRhaWxzIiwidGFza0lkIiwidG9nZ2xlRGV0YWlscyIsIkRldGFpbHNJbnB1dCIsImFycm93QnRuIiwiaWROdW1iZXIiLCJnZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIiLCJkZXRhaWxzQXJlU2hvd24iLCJzaG93RGV0YWlscyIsImRldGFpbHNDb250YWluZXJJZCIsInNldERldGFpbHNJZFRvIiwibWFrZURldGFpbHNEZWZhdWx0IiwiaGlkZSIsInNob3dBc0ZsZXgiLCJjb21wdXRlZERpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImRpc3BsYXkiLCJkb25lQnRucyIsImNoZWNrYm94ZXMiLCJjaGVja2JveCIsImRvbmVCdG5Db21wbGV0ZVRhc2siLCJjYm94SWQiLCJwYXJlbnROb2RlIiwiY2xvc2VEZXRhaWxzT2ZDb21wbGV0ZWRUYXNrIiwiZnJvbSIsInJlbmRlclRhc2siLCJ0b2dnbGVEb25lSWNvbnMiLCJjb250ZW50Q29udGFpbmVyIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlVGFzayIsImNyZWF0ZUxhYmVsIiwiY3JlYXRlSW5wdXQiLCJjcmVhdGVDb250ZW50IiwibGFiZWwiLCJodG1sRm9yIiwiY3JlYXRlRG9uZUljb24iLCJjb250YWluZXIiLCJjcmVhdGVUaXRsZSIsImNyZWF0ZURldGFpbHMiLCJzdHIiLCJjcmVhdGVGcm9tIiwiY3JlYXRlRHVlIiwiY3JlYXRlUHJpb3JpdHkiLCJjcmVhdGVOb3RlIiwiZHVlIiwiZGF0ZU92ZXJkdWUiLCJjcmVhdGVDYWxlbmRhckltYWdlIiwiY3JlYXRlU3BhbkZvckRhdGUiLCJ0b2RheSIsIkRhdGUiLCJ0YXNrRGF0ZSIsImltZyIsIkNhbGVuZGFyIiwiY3JlYXRlU3BhbkZvclByaW9yaXR5IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm5vdGVJY29uIiwiTm90ZSIsInRleHQiLCJkb25lcyIsInBhcmVudEVsZW1lbnQiLCJpY29uQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNo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QUExQjtBQUVBb0MsbUJBQWEsQ0FBQzVMLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFdBQTVCO0FBQ0Q7QUFWd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVcxQjs7Ozs7Ozs7Ozs7OztBQzFPRCxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDhNQUFxRzs7QUFFdkk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiYnVuZGxlLjUwMmUwMmQxYTYzNjI5YmMzZDk3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvSlMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgYXBwZWFyRnJvbVJpZ2h0UHJvamVjdCB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IDMwcHg7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTsgfVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggYXV0byAzMzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCIgXFxcInByb2plY3RzIG1haW4gdG9kby1taXNjXFxcIjsgfVxcbiAgI2NvbnRlbnQuYnJvYWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY4cHggYXV0byAzMzBweDsgfVxcblxcbi8qIC0tLSBUT1Agb2YgdGhlIFBBR0UgOiBIRUFERVIgLS0tICovXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMTA2ODc3O1xcbiAgY29sb3I6ICNmNGY0ZjQ7XFxuICBmb250LXNpemU6IDEuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGVybWFuZW50IE1hcmtlclxcXCIsIGN1cnNpdmU7XFxuICBsZXR0ZXItc3BhY2luZzogNXB4OyB9XFxuICBoZWFkZXIgI21lbnUtaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAgIGhlYWRlciAjbWVudS1pY29uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMGI1MDVjOyB9XFxuICBoZWFkZXIgI2hlYWRlci10aXRsZSB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgfVxcbiAgaGVhZGVyICNzb2NpYWxzIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi8qIExFRlQgU0lERSBPRiBUSEUgUEFHRTogUFJPSkVDVFMgKi9cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBwcm9qZWN0cztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDhweCAwcHggNXB4IC00cHggI2NhY2FjYTtcXG4gIC1tb3otYm94LXNoYWRvdzogOHB4IDBweCA1cHggLTRweCAjY2FjYWNhO1xcbiAgYm94LXNoYWRvdzogOHB4IDBweCA1cHggLTRweCAjY2FjYWNhO1xcbiAgLyogTEVGVC1TSURFIE9GIFRIRSBQQUdFOiBVc2VyIElucHV0Ki8gfVxcbiAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3Qge1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICAgIG1heC13aWR0aDogMjgwcHg7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QuYnJvYWQge1xcbiAgICAgIHdpZHRoOiA2OHB4OyB9XFxuICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IHtcXG4gICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdC5icm9hZCB7XFxuICAgICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIycHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QuYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QuYWN0aXZlOmhvdmVyIC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3Q6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIGFuaW1hdGlvbjogYXBwZWFyRnJvbVJpZ2h0UHJvamVjdCAwLjNzIGVhc2Utb3V0IGZvcndhcmRzOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3Q6bm90KC5hY3RpdmUpOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1pY29uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtaWNvbi5icm9hZCB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWNvdW50LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyLmJyb2FkIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LW5hbWUge1xcbiAgICAgICAgd2lkdGg6IDE1NXB4O1xcbiAgICAgICAgbWF4LXdpZHRoOiAxNTVweDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuY291bnQtdG9kb3Mge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIHdpZHRoOiAyOXB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4OyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgICAgY29sb3I6ICNjNWM1YzU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuLmJyb2FkIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiAjOTk5OTk5OyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuOmZvY3VzIHtcXG4gICAgICAgICAgY29sb3I6ICM2ZTZlNmU7IH1cXG4gICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgbWF4LXdpZHRoOiAyODBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBJbnB1dCAqL1xcbiAgICAvKiBTdWJtaXQgYnV0dG9uICovIH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtLmJyb2FkIHtcXG4gICAgICB3aWR0aDogNjhweDtcXG4gICAgICBtYXJnaW46IDA7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdCB7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNmI2YjZiO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDlweCAwO1xcbiAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgY29sb3I6ICM2YjZiNmI7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdC5icm9hZCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdDpmb2N1cyB7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM4ZWY3ZDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0IHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogMHB4O1xcbiAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDZweDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3QuYnJvYWQge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGxlZnQ6IDRweDtcXG4gICAgICAgIHBhZGRpbmc6IDdweCAxOHB4OyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdCBpb24taWNvbiB7XFxuICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4O1xcbiAgICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmhvdmVyOjphZnRlciB7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOGVmN2Q7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDpob3ZlciBpb24taWNvbiB7XFxuICAgICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuXFxuLyogTWlkZGxlOiBQcm9qZWN0IHRpdGxlLCB0b2RvIHRhc2tzKi9cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIG1pbi13aWR0aDogMzc3cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggI2NhY2FjYTtcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4ICNjYWNhY2E7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggI2NhY2FjYTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIC8qIFVzZXIgaW5wdXQgdG9kbyB0YXNrcyovIH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICBtYWluIHtcXG4gICAgICBncmlkLWNvbHVtbjogMiAvIDQ7IH0gfVxcbiAgbWFpbiAjcHJvamVjdC10aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMS40ZW07IH1cXG4gIG1haW4gLnRvZG8ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCBhdXRvIDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjaGVja2JveCB0b2RvdGV4dCBidG5cXFwiO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC8qIEN1c3RvbSBtYWRlIGNoZWNrYm94IHdpdGggYWZ0ZXIgZWxlbWVudCAqL1xcbiAgICAvKiBUZXh0IG9mIHRoZSB0b2RvIHRhc2sgd2l0aCBkZXRhaWxzICovIH1cXG4gICAgbWFpbiAudG9kbzpob3ZlciB7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggI2U0ZTRlNDtcXG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCAjZTRlNGU0O1xcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCAjZTRlNGU0OyB9XFxuICAgIG1haW4gLnRvZG86aG92ZXIgLmRlbGV0ZS10b2RvLWJ0biB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgIGFuaW1hdGlvbjogYXBwZWFyRnJvbVJpZ2h0UHJvamVjdCAwLjNzIGVhc2Utb3V0IGZvcndhcmRzOyB9XFxuICAgIG1haW4gLnRvZG8gbGFiZWwge1xcbiAgICAgIGdyaWQtYXJlYTogY2hlY2tib3g7IH1cXG4gICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXI6OmFmdGVyIHtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzVjNWM1O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC43czsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lciBpb24taWNvbiB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4OyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyOmhvdmVyOjphZnRlciB7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMmIwZTk7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXI6aG92ZXIgaW9uLWljb24ge1xcbiAgICAgICAgICBjb2xvcjogI2UyYjBlOTtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLW91dDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lci5jb21wbGV0ZWQ6aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2M1YzVjNSAhaW1wb3J0YW50OyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyLmNvbXBsZXRlZCBpb24taWNvbiB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gICAgICAgICAgY29sb3I6ICNjNWM1YzU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTsgfVxcbiAgICBtYWluIC50b2RvIC50b2RvLWNoZWNrYm94IHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCB7XFxuICAgICAgZ3JpZC1hcmVhOiB0b2RvdGV4dDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG4gICAgICBtYWluIC50b2RvIC50b2RvLXRleHQuZG9uZSB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgICAgIGNvbG9yOiAjYzVjNWM1ICFpbXBvcnRhbnQ7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dC5kb25lIC5tZWRpdW0tcHJpb3JpdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQuZG9uZSAuaGlnaC1wcmlvcml0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dC5kb25lIC5kdWUtZGF0ZSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dC5kb25lIC5vdmVyZHVlLWRhdGUge1xcbiAgICAgICAgICBjb2xvcjogI2M1YzVjNSAhaW1wb3J0YW50OyB9XFxuICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC50b2RvLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxcbiAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyB7XFxuICAgICAgICBmb250LXNpemU6IDAuOGVtOyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmZyb20tcHJvamVjdCxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAuZHVlLWRhdGUsXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLm1lZGl1bS1wcmlvcml0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAuaGlnaC1wcmlvcml0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAubm90ZS1wcmVzZW5jZSB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5mcm9tLXByb2plY3Q6ZW1wdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmR1ZS1kYXRlOmVtcHR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5tZWRpdW0tcHJpb3JpdHk6ZW1wdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmhpZ2gtcHJpb3JpdHk6ZW1wdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLm5vdGUtcHJlc2VuY2U6ZW1wdHkge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyBzcGFuIGltZyB7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgdG9wOiAycHg7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgc3Bhbi5vdmVyZHVlLWRhdGUge1xcbiAgICAgICAgICBjb2xvcjogcmVkOyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgc3Bhbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgICAgICAgY29sb3I6ICM3MzAwZmY7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyBzcGFuLm1lZGl1bS1wcmlvcml0eSB7XFxuICAgICAgICAgIGNvbG9yOiAjMTA2ODc3OyB9XFxuICAgIG1haW4gLnRvZG8gLmRlbGV0ZS10b2RvLWJ0biB7XFxuICAgICAgZ3JpZC1hcmVhOiBidG47XFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICBjb2xvcjogI2Q0ZDRkNDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4yczsgfVxcbiAgICAgIG1haW4gLnRvZG8gLmRlbGV0ZS10b2RvLWJ0bjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzQ5NDA0MDsgfVxcbiAgICAgIG1haW4gLnRvZG8gLmRlbGV0ZS10b2RvLWJ0bjpmb2N1cyB7XFxuICAgICAgICBjb2xvcjogIzkyOTI5MjsgfVxcbiAgbWFpbiBociB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3gtc2hhZG93OiAwIC0xMHB4IDEwcHggLTEwcHggIzhjOGM4YyBpbnNldDsgfVxcbiAgbWFpbiAjbmV3LXRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIElucHV0ICovXFxuICAgIC8qIFN1Ym1pdCBidXR0b24gKi8gfVxcbiAgICBtYWluICNuZXctdG9kby1mb3JtICNuZXctdG9kbyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNmI2YjZiO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDlweCAwO1xcbiAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgY29sb3I6ICM2YjZiNmI7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmOyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjbmV3LXRvZG86Zm9jdXMge1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzOGVmN2Q7IH1cXG4gICAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI25ldy10b2RvOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxuICAgICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogMHB4O1xcbiAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDZweDsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvIGlvbi1pY29uIHtcXG4gICAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7XFxuICAgICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzOyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOmhvdmVyOjphZnRlciB7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOGVmN2Q7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86aG92ZXIgaW9uLWljb24ge1xcbiAgICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcblxcbi8qIFJpZ2h0IHNpZGUgb2YgdGhlIHBhZ2UgKi9cXG4jdG9kby1taXNjLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHRvZG8tbWlzYztcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB6LWluZGV4OiAxOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIge1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgICAtbW96LWJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgICAgYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTsgfSB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjdG9kby1uYW1lLWNoYW5nZXItY29udGFpbmVyLFxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlcixcXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIsXFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjbm90ZS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3RvZG8tbmFtZS1jaGFuZ2VyLWNvbnRhaW5lciAjZGF0ZSxcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjZGF0ZSxcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjZGF0ZSxcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI25vdGUtY29udGFpbmVyICNkYXRlIHtcXG4gICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI3RvZG8tbmFtZS1jaGFuZ2VyLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCAwO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0ycHggLTJweCA1cHggLTFweCAjY2FjYWNhO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IC0ycHggLTJweCA1cHggLTFweCAjY2FjYWNhO1xcbiAgICBib3gtc2hhZG93OiAtMnB4IC0ycHggNXB4IC0xcHggI2NhY2FjYTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjdG9kby1uYW1lLWNoYW5nZXItY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgICBoZWlnaHQ6IDQwcHg7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNub3RlLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTNweCA0cHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAtM3B4IDRweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDRweCA1cHggLTJweCAjY2FjYWNhOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNub3RlLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgICAgaGVpZ2h0OiAxNjBweDsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlcixcXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMge1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHkuc2VsZWN0ZWQtMSxcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLmxvdy1wcmlvcml0eS5zZWxlY3RlZC0xLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5LnNlbGVjdGVkLTEsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5sb3ctcHJpb3JpdHkuc2VsZWN0ZWQtMSB7XFxuICAgICAgICBjb2xvcjogIzEwNjg3NzsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5LnNlbGVjdGVkLTIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5sb3ctcHJpb3JpdHkuc2VsZWN0ZWQtMixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLmhpZ2gtcHJpb3JpdHkuc2VsZWN0ZWQtMixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eS5zZWxlY3RlZC0yLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAubG93LXByaW9yaXR5LnNlbGVjdGVkLTIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5oaWdoLXByaW9yaXR5LnNlbGVjdGVkLTIge1xcbiAgICAgICAgY29sb3I6ICM3MzAwZmY7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLm9ubW91c2VvdmVyOmhvdmVyLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAub25tb3VzZW92ZXI6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICMxMDY4Nzc7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eTpob3ZlciB+IC5sb3ctcHJpb3JpdHksXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHk6aG92ZXIgfiAubG93LXByaW9yaXR5IHtcXG4gICAgICAgIGNvbG9yOiAjMTA2ODc3OyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5oaWdoLXByaW9yaXR5OmhvdmVyLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAuaGlnaC1wcmlvcml0eTpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzczMDBmZjsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyBpb24taWNvbixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgaW9uLWljb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI2RhdGUtcmVtb3ZlciBpb24taWNvbixcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjZGF0ZS1yZW1vdmVyIGlvbi1pY29uIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiA0cHg7XFxuICAgICAgY29sb3I6ICM2YjZiNmI7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNkYXRlLXJlbW92ZXIgaW9uLWljb246aG92ZXIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjZGF0ZS1yZW1vdmVyIGlvbi1pY29uOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgLm1pc2MtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBjb2xvcjogIzZiNmI2YjtcXG4gICAgd2lkdGg6IDEyMHB4OyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMWVtOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNjbG9zZS1kZXRhaWxzLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgd2lkdGg6IDYycHg7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2Nsb3NlLWRldGFpbHMtYnRuIGlvbi1pY29uIHtcXG4gICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4O1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgY29sb3I6ICNjNWM1YzU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggN3B4IC0xM3B4ICNjYWNhY2EsIDBweCA1cHggMTBweCAwcHggI2NhY2FjYTtcXG4gICAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDdweCAtMTNweCAjY2FjYWNhLCAwcHggNXB4IDEwcHggMHB4ICNjYWNhY2E7XFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggN3B4IC0xM3B4ICNjYWNhY2EsIDBweCA1cHggMTBweCAwcHggI2NhY2FjYTsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNjbG9zZS1kZXRhaWxzLWJ0biBpb24taWNvbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzZlNmU2ZTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvY2FsZW5kYXIuNzUwNGM4ODlmYzJkOWQ0ZjU0MDBiYTY5OGIyNTQzNzcuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2VkaXQuMjkyN2Y4ZGU0MjY4YmFlOGYxMWM0ZGZlM2FkYzcyYjUuc3ZnXCI7IiwiaW1wb3J0IFwiLi4vU0NTUy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgKiBhcyBNZW51QnRuIGZyb20gXCIuL3N0eWxlL21lbnUuanNcIjtcbmltcG9ydCAqIGFzIFJlc2l6ZSBmcm9tIFwiLi9zdHlsZS9yZXNpemUuanNcIjtcbmltcG9ydCAqIGFzIFByaW9yaXR5IGZyb20gXCIuL3N0eWxlL3ByaW9yaXR5LmpzXCI7XG5pbXBvcnQgKiBhcyBEZWZhdWx0UHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHMvZGVmYXVsdHMuanNcIjtcbmltcG9ydCB7IGluaXRpYWxSZW5kZXIgfSBmcm9tIFwiLi9wcm9qZWN0cy9yZW5kZXIuanNcIjtcbmltcG9ydCAqIGFzIEFkZFRhc2tCdG4gZnJvbSBcIi4vdGFza3MvYWRkLmpzXCI7XG5pbXBvcnQgKiBhcyBBZGRQcm9qZWN0QnRuIGZyb20gXCIuL3Byb2plY3RzL2FkZC5qc1wiO1xuaW1wb3J0ICogYXMgTG9jYWxTdG9yYWdlIGZyb20gXCIuL3Byb2plY3RzL2xvY2Fsc3RvcmFnZS5qc1wiO1xuXG4vLyBTdHlsZVxuTWVudUJ0bi5zaG93UHJvamVjdHMoKTtcblJlc2l6ZS5yZXNwb25zaXZlKCk7XG5Qcmlvcml0eS5zdGFyc0NoYW5nZUNvbG9ycygpO1xuXG4vLyBBcHAgbG9naWNcblxuLy9jcmVhdGUgbWFpbiBsaXN0IG9mIHByb2plY3RzXG5sZXQgcHJvamVjdHMgPSBMb2NhbFN0b3JhZ2UuZ2V0KCkgfHwgWy4uLkRlZmF1bHRQcm9qZWN0cy5nZXRQcm9qZWN0cygpXTtcblxuLy9yZW5kZXIgZmlyc3QgcHJvamVjdFxuaW5pdGlhbFJlbmRlcihwcm9qZWN0cyk7XG5cbi8vIEJ1dHRvbnMgd2hpY2ggY2FuIGFkZCBhIHRhc2sgb3IgYSBwcm9qZWN0IHRvIGEgZGVmaW5lZCBhcnJheVxuLy8gQWxzbyByZXJlbmRlciB0aGUgYXJyYXkgYWZ0ZXIgYWRkaW5nIGEgdGFza1xuQWRkVGFza0J0bi5hZGRUYXNrVG8ocHJvamVjdHMpO1xuXG5BZGRQcm9qZWN0QnRuLmFkZFByb2plY3RUbyhwcm9qZWN0cyk7XG5cbi8vdGVzdCBidXR0b25cbmxldCB0ZXN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb2NpYWxzXCIpO1xudGVzdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS50YWJsZShwcm9qZWN0cykpO1xuIiwiaW1wb3J0IHsgcHJvamVjdEZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5LmpzXCI7XG5pbXBvcnQgeyByZWZyZXNoUHJvamVjdHMgfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcbmltcG9ydCB7IGFjdGl2YXRlUHJvamVjdCB9IGZyb20gXCIuL3RvZ2dsZS5qc1wiO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0VG8ocHJvamVjdHMpIHtcbiAgY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0LXByb2plY3RcIik7XG5cbiAgc3VibWl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWRkUHJvamVjdChwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3RzKSB7XG4gIC8vIFByZXZlbnQgZGVmYXVsdCBzdWJtaXQgYmVoYXZpb3JcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcHVzaFByb2plY3RUbyhwcm9qZWN0cyk7XG4gIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDEpIGFjdGl2YXRlUHJvamVjdChwcm9qZWN0cywgMCk7XG4gIHJlZnJlc2hQcm9qZWN0cyhwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIHB1c2hQcm9qZWN0VG8ocHJvamVjdHMpIHtcbiAgcHJvamVjdHMucHVzaChnZXRQcm9qZWN0KCkpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0KCkge1xuICAvLyBHZXQgdXNlciBpbnB1dCB2YWx1ZSwgc2F2ZSBpdFxuICBsZXQgcHJvamVjdCA9IHByb2plY3RGYWN0b3J5KHsgdGl0bGU6IGdldElucHV0VmFsdWUoKSB9KTtcbiAgLy8gYW5kIGNsZWFyIGlucHV0XG4gIGNsZWFyUHJvamVjdElucHV0KCk7XG4gIHJldHVybiBwcm9qZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAvLyBHZXQgdXNlciBpbnB1dCB2YWx1ZSBhcyBOZXcgUHJvamVjdCA6IFNUUklOR1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdFwiKS52YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2xlYXJQcm9qZWN0SW5wdXQoKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3RcIikudmFsdWUgPSBcIlwiO1xufVxuXG5leHBvcnQgeyBhZGRQcm9qZWN0VG8gfTtcbiIsImltcG9ydCB7IHByb2plY3RGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuaW1wb3J0ICogYXMgRGVmYXVsdFRhc2tzIGZyb20gXCIuLi90YXNrcy9kZWZhdWx0cy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiBzaW1wbHkgY3JlYXRlcyBhbiBhcnJheSB3aXRoIGRlZmF1bHQgcHJvamVjdHMgaW4gaXRcbiAgbGV0IGFsbFByb2plY3RzID0gW1xuICAgIHByb2plY3RGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIlByb2plY3QgMVwiLFxuICAgICAgdGFza3M6IERlZmF1bHRUYXNrcy5nZXRUYXNrc0J5TnVtYmVyKDEpLFxuICAgICAgaXNBY3RpdmU6IHRydWUsXG4gICAgfSksXG4gICAgcHJvamVjdEZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiUHJvamVjdCAyXCIsXG4gICAgICB0YXNrczogRGVmYXVsdFRhc2tzLmdldFRhc2tzQnlOdW1iZXIoMiksXG4gICAgfSksXG4gICAgcHJvamVjdEZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiU29tZXRoaW5nIHRvIGNvbnNpZGVyXCIsXG4gICAgICB0YXNrczogRGVmYXVsdFRhc2tzLmdldFRhc2tzQnlOdW1iZXIoMyksXG4gICAgfSksXG4gIF07XG5cbiAgcmV0dXJuIGFsbFByb2plY3RzO1xufVxuXG5leHBvcnQgeyBnZXRQcm9qZWN0cyB9O1xuIiwiaW1wb3J0IHsgcmVmcmVzaFByb2plY3RzIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5cbmltcG9ydCB7IGFjdGl2YXRlUHJvamVjdCB9IGZyb20gXCIuL3RvZ2dsZS5qc1wiO1xuaW1wb3J0IHsgY2xlYXJDb250ZW50T2YgfSBmcm9tIFwiLi4vdGFza3MvcmVuZGVyLmpzXCI7XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tKHByb2plY3RzKSB7XG4gIC8vIFRha2UgdGhlIGNvbGxlY3Rpb24gb2YgYWxsIGRlbGV0ZSBjcm9zcyBidXR0b25zIGZyb20gcHJvamVjdHMgYnkgY2xhc3MgbmFtZVxuICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtcHJvamVjdC1idG5cIik7XG4gIC8vIExvb3AgdGhyb3VnaCBjb2xsZWN0aW9uIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBidXR0b25cbiAgZm9yIChsZXQgYnV0dG9uIG9mIGJ1dHRvbnMpIHtcbiAgICBkZWxldGVCdG5SZW1vdmVQcm9qZWN0KGJ1dHRvbiwgcHJvamVjdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUJ0blJlbW92ZVByb2plY3QoYnV0dG9uLCBwcm9qZWN0cykge1xuICAvLyBGdW5jdGlvbiB0byBhc3NpZ24gRXZlbnQgbGlzdGVuZXIgdG8gYnV0dG9uc1xuICAvLyB0byByZW1vdmUgcGFydGljdWxhciBwcm9qZWN0cyBmcm9tIHBhZ2VcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIGdldCBJZCBvZiBhIGJ1dHRvbiB0byB3aGljaCBsaXN0ZW5lciBpcyBhc3NpZ25lZFxuICAgIGxldCBidG5JZCA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAvLyBnZXQgb25seSBudW1iZXIgYWZ0ZXIgdGhlIGh5cGhlbiBmcm9tIElkXG4gICAgbGV0IG51bWJlciA9IGJ0bklkLnNwbGl0KFwiLVwiKVsyXTtcblxuICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gdGhlIGFycmF5IG9mIHByb2plY3RzIGJ5IHRoYXQgbnVtYmVyXG4gICAgcHJvamVjdHMuc3BsaWNlKG51bWJlciwgMSk7XG4gICAgLy8gSGFuZGxlIGFjdGl2ZSBwcm9qZWN0cyBhZnRlciBkZWxldGluZyBvbmUgYnV0IGJlZm9yZSByZXJlbmRlcmluZ1xuICAgIGFjdGl2YXRpb25IYW5kbGluZyhwcm9qZWN0cyk7XG4gICAgLy8gUmVyZW5kZXIgcHJvamVjdHNcbiAgICByZWZyZXNoUHJvamVjdHMocHJvamVjdHMpO1xuICAgIC8vIEF2b2lkIGZpcmluZyBwYXJlbnQgZWxlbWVudCBsaXN0ZW5lciBhZnRlciBjbGlja2luZyBvbiB0aGUgYnV0dG9uXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRpb25IYW5kbGluZyhwcm9qZWN0cykge1xuICAvLyBUaGlzIGZ1bmN0aW9uIGlzIG5lZWRlZCB3aGVuIHlvdSBkZWxldGUgcHJvamVjdHNcbiAgLy8gV2hlbiBpcyBvbmUgYWN0aXZlIGRlbGV0ZWQsIHRoZXJlIG5lZWRzIHRvIGJlIGFub3RoZXIgYWN0aXZlIHByb2plY3RcbiAgLy8gV2hlbiBhbGwgZGVsZXRlZCwgdGhlcmUgbmVlZHMgdG8gYmUgYWxsIHRhc2tzIHNob3duXG4gIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwICYmIG5vbmVBY3RpdmVQcm9qZWN0cyhwcm9qZWN0cykpXG4gICAgYWN0aXZhdGVQcm9qZWN0KHByb2plY3RzLCAwKTtcbiAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkgY2xlYXJDb250ZW50T2YoXCJ0b2Rvc1wiKTtcbn1cblxuZnVuY3Rpb24gbm9uZUFjdGl2ZVByb2plY3RzKHByb2plY3RzKSB7XG4gIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICBpZiAocHJvamVjdC5pc0FjdGl2ZSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgeyBkZWxldGVQcm9qZWN0RnJvbSB9O1xuIiwiY29uc3QgcHJvamVjdEZhY3RvcnkgPSBmdW5jdGlvbiAoeyB0aXRsZSA9IFwiXCIsIHRhc2tzID0gW10sIGlzQWN0aXZlID0gZmFsc2UgfSkge1xuICByZXR1cm4geyB0aXRsZSwgdGFza3MsIGlzQWN0aXZlIH07XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0RmFjdG9yeSB9O1xuYGA7XG4iLCJmdW5jdGlvbiBzYXZlKHByb2plY3RzKSB7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIHN0cmluZ2lmeShwcm9qZWN0cykpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkob2JqKSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xufVxuXG5mdW5jdGlvbiBnZXQoKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbn1cblxuZXhwb3J0IHsgc2F2ZSwgZ2V0IH07XG4iLCJpbXBvcnQgeyByZW5kZXJBbGxUYXNrc0Zyb20sIGNsZWFyQ29udGVudE9mIH0gZnJvbSBcIi4uL3Rhc2tzL3JlbmRlci5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdHNTaG93VGFza3MgfSBmcm9tIFwiLi90b2dnbGUuanNcIjtcbmltcG9ydCAqIGFzIERldGFpbHMgZnJvbSBcIi4uL3Rhc2tzL2RldGFpbHNJbnB1dC5qc1wiO1xuaW1wb3J0ICogYXMgRGVsZXRlVGFza0J0bnMgZnJvbSBcIi4uL3Rhc2tzL2RlbGV0ZS5qc1wiO1xuaW1wb3J0ICogYXMgVGFza0RvbmUgZnJvbSBcIi4uL3Rhc2tzL2RvbmUuanNcIjtcbmltcG9ydCAqIGFzIERlbGV0ZVByb2plY3RCdG5zIGZyb20gXCIuL2RlbGV0ZS5qc1wiO1xuaW1wb3J0IHsgZ2V0QWN0aXZlUHJvamVjdCB9IGZyb20gXCIuLi90YXNrcy9kZXRhaWxzSW5wdXQuanNcIjtcbmltcG9ydCAqIGFzIExvY2FsU3RvcmFnZSBmcm9tIFwiLi9sb2NhbHN0b3JhZ2UuanNcIjtcblxuZnVuY3Rpb24gaW5pdGlhbFJlbmRlcihhcnIpIHtcbiAgcmVmcmVzaFByb2plY3RzKGFycik7XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hQcm9qZWN0cyhwcm9qZWN0cykge1xuICAvLyBTaG93IHRoZSBuYW1lIG9mIHRoZSBhY3RpdmUgcHJvamVjdFxuICBzaG93QWN0aXZlUHJvamVjdFRpdGxlKHByb2plY3RzKTtcbiAgLy8gQ2xlYXIgYWxsIHByZXZpb3VzbHkgcmVuZGVyZWQgZWxlbWVudHMgZnJvbSB0aGUgcGFnZVxuICBjbGVhckNvbnRlbnRPZihcInByb2plY3QtbGlzdFwiKTtcbiAgcmVuZGVyQWxsUHJvamVjdHMocHJvamVjdHMpO1xuICAvLyBlYWNoIHByb2plY3Qgc2hvd3MgaXRzIHRhc2tzXG4gIHByb2plY3RzU2hvd1Rhc2tzKHByb2plY3RzKTtcbiAgLy8gZGVsZXRlIGJ0bnMgY2FuIGRlbGV0ZSBwcm9qZWN0c1xuICBEZWxldGVQcm9qZWN0QnRucy5kZWxldGVQcm9qZWN0RnJvbShwcm9qZWN0cyk7XG4gIC8vIFR1cm4gb24gYWxsIG9mIHRoZSBpbnRlcmFjdGl2ZW5lc3Mgb2YgdGhlIHRhc2tzXG4gIHR1cm5PblRhc2tzSW50ZXJhY3Rpb24ocHJvamVjdHMpO1xuICAvLyBTYXZlIHRoZSBwcm9qZWN0cyB0byBsb2NhbFN0b3JhZ2VcbiAgTG9jYWxTdG9yYWdlLnNhdmUocHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiByZWZyZXNoT25seVRhc2tzRnJvbShwcm9qZWN0cykge1xuICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgLy8gSWYgcHJvamVjdCBpcyBhY3RpdmUgdGhlbiByZW5kZXIgaXRzIHRhc2tzXG4gICAgaWYgKHByb2plY3QuaXNBY3RpdmUpIHJlbmRlckFsbFRhc2tzRnJvbShwcm9qZWN0LnRhc2tzKTtcbiAgfVxuICB0dXJuT25UYXNrc0ludGVyYWN0aW9uKHByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gdHVybk9uVGFza3NJbnRlcmFjdGlvbihwcm9qZWN0cykge1xuICAvLyBDaGFuZ2UgdGFza3Mgd2hlbiB1c2VyIHR5cGUgc29tZXRoaW5nIHRvIGRldGFpbHMgd2luZG93XG4gIERldGFpbHMuY2hhbmdlVGFza09uSW5wdXQocHJvamVjdHMpO1xuICAvLyBNYWtlIGRlbGV0ZSB0YXNrcyBidXR0b25zIGRlbGV0ZSB0YXNrcyBmcm9tIHByb2plY3RzXG4gIERlbGV0ZVRhc2tCdG5zLmRlbGV0ZVRhc2tzRnJvbShwcm9qZWN0cyk7XG4gIC8vIG1ha2UgZG9uZSBidXR0b25zdCBjb21wbGV0ZSB0YXNrc1xuICBUYXNrRG9uZS5kb25lQnRucyhwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIHNob3dBY3RpdmVQcm9qZWN0VGl0bGUocHJvamVjdHMpIHtcbiAgbGV0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKTtcbiAgaWYgKHByb2plY3RzLmxlbmd0aCA+IDApIHtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBnZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzKS50aXRsZTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFsbFByb2plY3RzKGFycikge1xuICAvL1JlbmRlciBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IHRvIHRoZSBwYWdlXG4gIGZvciAobGV0IFtpbmRleCwgaXRlbV0gb2YgYXJyLmVudHJpZXMoKSkge1xuICAgIHJlbmRlclByb2plY3QoaW5kZXgsIGl0ZW0pO1xuICAgIC8vIElmIHByb2plY3QgaXMgYWN0aXZlIHRoZW4gcmVuZGVyIGl0cyB0YXNrc1xuICAgIGlmIChpdGVtLmlzQWN0aXZlKSByZW5kZXJBbGxUYXNrc0Zyb20oaXRlbS50YXNrcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdChpLCBwcm9qZWN0KSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpLmFwcGVuZChjcmVhdGVQcm9qZWN0KGksIHByb2plY3QpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChpLCBwcm9qZWN0KSB7XG4gIC8vIGNyZWF0ZSBhIGxpIGVsZW1lbnRcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3RcIik7XG4gIGlmIChwcm9qZWN0LmlzQWN0aXZlKSBsaS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcHJvamVjdC0ke2l9YCk7XG4gIC8vIGFwcGVuZCBldmVyeXRoaW5nIHRvIGl0XG4gIGxpLmFwcGVuZChjcmVhdGVJY29uKCkpO1xuICBsaS5hcHBlbmQoY3JlYXRlVGl0bGVBbmRDb3VudChwcm9qZWN0LnRpdGxlLCBwcm9qZWN0LnRhc2tzLmxlbmd0aCkpO1xuICBsaS5hcHBlbmQoY3JlYXRlRGVsZXRlQnRuKGkpKTtcbiAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJY29uKCkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdC1pY29uXCIpO1xuXG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlvbi1pY29uXCIpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJyZWFkZXItb3V0bGluZVwiKTtcblxuICBzcGFuLmFwcGVuZChpY29uKTtcblxuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGVBbmRDb3VudCh0aXRsZSwgY291bnQpIHtcbiAgLy8gY3JlYXRlIGEgY29udGFpbmVyIGZvciBUaXRsZSBhbmQgVG9kbyBDb3VudCBOdW1iZXJcbiAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyXCIpO1xuICAvLyBDcmVhdGUgYSBzcGFuIGZvciB0aXRsZVxuICBsZXQgbmFtZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgbmFtZVNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LW5hbWVcIik7XG4gIG5hbWVTcGFuLnRleHRDb250ZW50ID0gdGl0bGU7XG4gIC8vIENyZWF0ZSBhIHNwYW4gZm9yIGNvdW50IG51bWJlclxuICBsZXQgY291bnRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNvdW50U3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNvdW50LXRvZG9zXCIpO1xuICBjb3VudFNwYW4udGV4dENvbnRlbnQgPSBjb3VudDtcbiAgLy8gQXBwZW5kIHNwYW5zIHRvIGEgZGl2IGFuZCByZXR1cm4gYSBjb250YWluZXJcbiAgZGl2LmFwcGVuZChuYW1lU3Bhbik7XG4gIGRpdi5hcHBlbmQoY291bnRTcGFuKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlQnRuKGkpIHtcbiAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZWxldGUtcHJvamVjdC1idG5cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZGVsZXRlLXByb2plY3QtJHtpfWApO1xuXG4gIC8vIGNyZWF0ZSBhbiBpY29uIGFuZCBhcHBlbmQgaXQgdG8gYnV0dG9uXG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlvbi1pY29uXCIpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjbG9zZS1jaXJjbGVcIik7XG5cbiAgYnRuLmFwcGVuZENoaWxkKGljb24pO1xuXG4gIHJldHVybiBidG47XG59XG5cbmV4cG9ydCB7IHJlZnJlc2hQcm9qZWN0cywgaW5pdGlhbFJlbmRlciwgcmVmcmVzaE9ubHlUYXNrc0Zyb20gfTtcbiIsImltcG9ydCB7IHJlZnJlc2hQcm9qZWN0cyB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuaW1wb3J0IHsgaGlkZURldGFpbHMgfSBmcm9tIFwiLi4vdGFza3MvZGV0YWlsc1RvZ2dsZS5qc1wiO1xuXG5mdW5jdGlvbiBwcm9qZWN0c1Nob3dUYXNrcyhhcnIpIHtcbiAgLy8gTWFrZSBwcm9qZWN0cyBvbiB0aGUgcGFnZSBzaG93IHRoZWlyIHRhc2tzIG9uY2xpY2tcbiAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RcIik7XG5cbiAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGdldCBJZCBvZiBhIHByb2plY3QgdG8gd2hpY2ggbGlzdGVuZXIgaXMgYXNzaWduZWRcbiAgICAgIGxldCBwcm9qZWN0SWQgPSBldmVudC5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgLy8gZ2V0IGEgbnVtYmVyIGZyb20gSWQgYWZ0ZXIgdGhlIGh5cGhlblxuICAgICAgbGV0IG51bWJlciA9IHByb2plY3RJZC5zcGxpdChcIi1cIilbMV07XG4gICAgICAvLyBBY3RpdmF0ZSBvbmUgcHJvamVjdCBhbmQgZGVhY3RpdmF0ZSBvdGhlcnNcbiAgICAgIGFjdGl2YXRlUHJvamVjdChhcnIsIG51bWJlcik7XG4gICAgICAvLyBSZWZyZXNoIHByb2plY3RzXG4gICAgICByZWZyZXNoUHJvamVjdHMoYXJyLCBudW1iZXIpO1xuICAgICAgLy8gQ2xvc2UgdGhlIGRldGFpbHMgb24gdGFzayBpZiBpdCdzIG9wZW5cbiAgICAgIGhpZGVEZXRhaWxzKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVQcm9qZWN0KGFyciwgbnVtYmVyKSB7XG4gIGRlYWN0aXZhdGVBbGxQcm9qZWN0cyhhcnIpO1xuICAvLyBBZnRlciBkZWFjdGl2YXRpb24gb2YgYWxsIHByb2plY3RzIHdlIGFjdGl2YXRlIG9ubHkgb25lXG4gIGFycltudW1iZXJdLmlzQWN0aXZlID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZGVhY3RpdmF0ZUFsbFByb2plY3RzKGFycikge1xuICBmb3IgKGxldCBpdGVtIG9mIGFycikge1xuICAgIGl0ZW0uaXNBY3RpdmUgPSBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgeyBwcm9qZWN0c1Nob3dUYXNrcywgYWN0aXZhdGVQcm9qZWN0IH07XG4iLCJmdW5jdGlvbiBzaG93UHJvamVjdHMoKSB7XG4gIC8vIE1ha2UgbWVudSBidXR0b24gaW4gdGhlIHRvcCBsZWZ0IGNvcm5lciBkbyB3b3JrIChjaGFuZ2UgcHJvamVjdHMgdG8gd2lkZSBvciBuYXJyb3cpXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwibWVudS1pY29uXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBicm9hZGVuUHJvamVjdENvbnRhaW5lcigpKTtcbn1cblxuZnVuY3Rpb24gYnJvYWRlblByb2plY3RDb250YWluZXIoKSB7XG4gIC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgZnJvbSB0aGUgcGFnZSBhbmQgdG9nZ2xlIGEgY2xhc3MgJ2Jyb2FkJyBvbiBlYWNoXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgZ2V0RWxlbWVudHNUb0Jyb2FkKCkpIHtcbiAgICB0b2dnbGVCcm9hZChlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtaW5pbWl6ZVByb2plY3RDb250YWluZXIoKSB7XG4gIC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgZnJvbSB0aGUgcGFnZSBhbmQgdG9nZ2xlIGEgY2xhc3MgJ2Jyb2FkJyBvbiBlYWNoXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgZ2V0RWxlbWVudHNUb0Jyb2FkKCkpIHtcbiAgICBhZGRCcm9hZChlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRCcm9hZChlbGVtZW50KSB7XG4gIC8vIFJlbW92ZSBjbGFzcyAnYnJvYWQnIGZyb20gYW4gZWxlbWVudFxuICAvLyB0aGlzIGNsYXNzIGNoYW5nZXMgbGVmdC1zaWRlIHBhZ2UgbWVudSBtYWtpbmcgaXQgc21hbGxlclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJicm9hZFwiKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQnJvYWQoZWxlbWVudCkge1xuICAvLyBBZGQvcmVtb3ZlIGNsYXNzICdicm9hZCcgdG8gYW4gZWxlbWVudFxuICAvLyB0aGlzIGNsYXNzIGNoYW5nZXMgbGVmdC1zaWRlIHBhZ2UgbWVudSBtYWtpbmcgaXQgc21hbGxlclxuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJicm9hZFwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudHNUb0Jyb2FkKCkge1xuICAvLyBUYWtlIHNvbWUgRE9NIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2VcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0XCIpO1xuICBsZXQgcHJvamVjdEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1pY29uXCIpO1xuICBsZXQgcHJvamVjdFRpdGxlQ291bnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgIFwicHJvamVjdC10aXRsZS1jb3VudC1jb250YWluZXIgXCJcbiAgKTtcbiAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xuICBsZXQgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWZvcm1cIik7XG4gIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdFwiKTtcbiAgbGV0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1wcm9qZWN0XCIpO1xuXG4gIC8vIFB1dCB0aGVtIGluIHRoZSBhcnJheSBhbmQgcmV0dXJuIGl0XG4gIGxldCBlbGVtZW50cyA9IFtcbiAgICBjb250ZW50LFxuICAgIHByb2plY3RMaXN0LFxuICAgIC4uLnByb2plY3QsXG4gICAgLi4ucHJvamVjdEljb24sXG4gICAgLi4ucHJvamVjdFRpdGxlQ291bnRDb250YWluZXIsXG4gICAgLi4uZGVsZXRlUHJvamVjdEJ0bixcbiAgICBuZXdQcm9qZWN0Rm9ybSxcbiAgICBuZXdQcm9qZWN0LFxuICAgIHN1Ym1pdFByb2plY3QsXG4gIF07XG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IHsgc2hvd1Byb2plY3RzLCBtaW5pbWl6ZVByb2plY3RDb250YWluZXIgfTtcbiIsImZ1bmN0aW9uIHN0YXJzQ2hhbmdlQ29sb3JzKCkge1xuICBhY3RpdmF0ZUZpcnN0U3RhcigpO1xuICBhY3RpdmF0ZVNlY29uZFN0YXIoKTtcbiAgYWN0aXZhdGVUaGlyZFN0YXIoKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVGaXJzdFN0YXIoKSB7XG4gIGdldFN0YXIxKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFjdGl2YXRlU3RhcigxKSk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlU2Vjb25kU3RhcigpIHtcbiAgZ2V0U3RhcjIoKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWN0aXZhdGVTdGFyKDIpKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVUaGlyZFN0YXIoKSB7XG4gIGdldFN0YXIzKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFjdGl2YXRlU3RhcigzKSk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlU3RhcihudW1iZXIpIHtcbiAgLy8gTWFrZSBhIHN0YXIgd2l0aCBhIGNlcnRhaW4gbnVtYmVyIGNoYW5nZSBpdHMgc3R5bGVcbiAgLy8gTnVtYmVyIGNhbiBiZSAxLCAyIG9yIDMgYmVjYXVzZSB0aGVyZSBhcmUgYSB0b3RhbCBvZiAzIHN0YXJcbiAgaWYgKG51bWJlciA8IDEgfHwgbnVtYmVyID4gMylcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBDYW4ndCBhY3RpdmF0ZSBzdGFyICR7bnVtYmVyfSBpbiBhY3RpdmF0ZVN0YXIoKS4gUG9zc2libGUgdmFsdWVzOiAxLCAyLCAzYFxuICAgICk7XG4gIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgY2FzZSAxOlxuICAgICAgb3V0bGluZVNlY29uZFN0YXIoKTtcbiAgICAgIG91dGxpbmVUaGlyZFN0YXIoKTtcbiAgICAgIHJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzKCk7XG4gICAgICBhZGRNZWRpdW1Pbm1vdXNlb3ZlcigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgZmlsbFNlY29uZFN0YXIoKTtcbiAgICAgIGFkZENvbG9yVHdvU3RhcnMoKTtcbiAgICAgIG91dGxpbmVUaGlyZFN0YXIoKTtcbiAgICAgIGRlY29sb3JUaGlyZFN0YXIoKTtcbiAgICAgIGFkZE1lZGl1bU9ubW91c2VvdmVyKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBmaWxsU2Vjb25kU3RhcigpO1xuICAgICAgZmlsbFRoaXJkU3RhcigpO1xuICAgICAgYWRkQ29sb3JUaHJlZVN0YXJzKCk7XG4gICAgICByZW1vdmVNZWRpdW1Pbm1vdXNlb3ZlcigpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0VDT05EIFNUQVJcbmZ1bmN0aW9uIGZpbGxTZWNvbmRTdGFyKCkge1xuICAvLyBHZXQgdGhlIGNoaWxkIG9mIHRoZSBwcmlvcml0eSBhbmQgbWFrZSBpdCBmaWxsZWQgc3RhclxuICBnZXRTdGFyMigpLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdGFyXCIpO1xufVxuXG5mdW5jdGlvbiBvdXRsaW5lU2Vjb25kU3RhcigpIHtcbiAgLy8gR2V0IHRoZSBjaGlsZCBvZiB0aGUgcHJpb3JpdHkgYW5kIG1ha2UgaXQgb3V0bGluZWQgc3RhclxuICBnZXRTdGFyMigpLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdGFyLW91dGxpbmVcIik7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFRISVJEIFNUQVJcblxuZnVuY3Rpb24gZmlsbFRoaXJkU3RhcigpIHtcbiAgLy8gR2V0IHRoZSBjaGlsZCBvZiB0aGUgcHJpb3JpdHkgYW5kIG1ha2UgaXQgZmlsbGVkIHN0YXJcbiAgZ2V0U3RhcjMoKS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic3RhclwiKTtcbn1cblxuZnVuY3Rpb24gb3V0bGluZVRoaXJkU3RhcigpIHtcbiAgLy8gR2V0IHRoZSBjaGlsZCBvZiB0aGUgcHJpb3JpdHkgYW5kIG1ha2UgaXQgb3V0bGluZWQgc3RhclxuICBnZXRTdGFyMygpLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdGFyLW91dGxpbmVcIik7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIZWxwZXJzXG5cbmZ1bmN0aW9uIHJlbW92ZU1lZGl1bU9ubW91c2VvdmVyKCkge1xuICAvLyBTZWNvbmQgc3RhciBoYXMgYSBjbGFzcyBcIm9ubW91c2VvdmVyXCIgd2l0aCBhIGhvdmVyIGVmZmVjdFxuICAvLyBXaGVuIHRoZSAzcmQgc3RhciBpcyBjaG9zZW4gcmVtb3ZlIHRoaXMgaG92ZXIgZWZmZWN0IGZyb20gdGhlIDJuZCBzdGFyXG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LnJlbW92ZShcIm9ubW91c2VvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBhZGRNZWRpdW1Pbm1vdXNlb3ZlcigpIHtcbiAgLy8gU2Vjb25kIHN0YXIgaGFzIGEgY2xhc3MgXCJvbm1vdXNlb3ZlclwiIHdpdGggYSBob3ZlciBlZmZlY3RcbiAgLy8gV2hlbiB0aGUgMXN0IE9SIDJuZCBzdGFyIGlzIGNob3NlbiBhZGQgdGhpcyBob3ZlciBlZmZlY3QgdG8gdGhlIDJuZCBzdGFyXG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LmFkZChcIm9ubW91c2VvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBzdGFySXNPdXRsaW5lZChzdGFyKSB7XG4gIHJldHVybiBzdGFyLmNoaWxkcmVuWzBdLmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT09IFwic3Rhci1vdXRsaW5lXCI7XG59XG5cbmZ1bmN0aW9uIGFkZENvbG9yVHdvU3RhcnMoKSB7XG4gIHJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzKCk7XG4gIGdldFN0YXIxKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTFcIik7XG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTFcIik7XG59XG5mdW5jdGlvbiBhZGRDb2xvclRocmVlU3RhcnMoKSB7XG4gIHJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzKCk7XG4gIGdldFN0YXIxKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTJcIik7XG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTJcIik7XG4gIGdldFN0YXIzKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTJcIik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzKCkge1xuICBkZWNvbG9yRmlyc3RTdGFyKCk7XG4gIGRlY29sb3JTZWNvbmRTdGFyKCk7XG4gIGRlY29sb3JUaGlyZFN0YXIoKTtcbn1cblxuZnVuY3Rpb24gZGVjb2xvckZpcnN0U3RhcigpIHtcbiAgZ2V0U3RhcjEoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMVwiKTtcbiAgZ2V0U3RhcjEoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMlwiKTtcbn1cbmZ1bmN0aW9uIGRlY29sb3JTZWNvbmRTdGFyKCkge1xuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC0xXCIpO1xuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC0yXCIpO1xufVxuZnVuY3Rpb24gZGVjb2xvclRoaXJkU3RhcigpIHtcbiAgZ2V0U3RhcjMoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMVwiKTtcbiAgZ2V0U3RhcjMoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMlwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcjEoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXItMVwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcjIoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXItMlwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcjMoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXItM1wiKTtcbn1cblxuZXhwb3J0IHsgc3RhcnNDaGFuZ2VDb2xvcnMsIGFjdGl2YXRlU3RhciB9O1xuIiwiaW1wb3J0IHsgZ2V0Q29tcHV0ZWREaXNwbGF5IH0gZnJvbSBcIi4uL3Rhc2tzL2RldGFpbHNUb2dnbGUuanNcIjtcbmltcG9ydCB7IG1pbmltaXplUHJvamVjdENvbnRhaW5lciB9IGZyb20gXCIuL21lbnUuanNcIjtcblxuZnVuY3Rpb24gcmVzcG9uc2l2ZSgpIHtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICAvLyBSZXNpemluZyB3aW5kb3cgbWFrZXMgbWlkZGxlIGNvbHVtbiBmaXRcbiAgd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDI0cHgpXCIpLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAvLyBJZiBzY3JlZW4gaXMgbmFycm93ZXIgdGhhbiAxMDI0cHggYW5kIGRldGFpbHMgYXJlIG9wZW4gKHJpZ2h0IHNpZGUgb2YgdGhlIHBhZ2UpXG4gICAgLy8gdGhhbiBtaW5pbWl6ZSBsZWZ0IHNpZGUgYW5kIG1ha2UgXCJtYWluXCIgZml0IHRoZSB3aG9sZSBzZWNvbmQgY29sdW1uXG4gICAgaWYgKHNjcmVlbkxlc3NUaGVuMTAyNCgpICYmIGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gICAgICBtaW5pbWl6ZVByb2plY3RDb250YWluZXIoKTtcbiAgICAgIC8vIERvZXNuJ3QgbWF0dGVyIHRoZSBzaXplIG9mIHRoZSBzY3JlZW4sXG4gICAgICAvLyBpZiBkZXRhaWxzIGFyZSBjbG9zZWQgJ21haW4nIGZpdCB0aGUgd2hvbGUgc2Vjb25kIGNvbHVtblxuICAgIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWREaXNwbGF5KGRldGFpbHMpID09PSBcIm5vbmVcIikge1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzRcIjtcbiAgICAgIC8vIEVsc2UgZm9yIGUuZy4gd2hlbiBzY3JlZW4gYXJlIHdpZGVyIHRoZW4gMTAyNHB4IGFuZFxuICAgICAgLy8gZGV0YWlscyBhcmUgb3BlbiwgdGhlbiBtYWluIGlzIHRoZSBjb2x1bW4gaW4gdGhlIG1pZGRsZVxuICAgIH0gZWxzZSB7XG4gICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvM1wiO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNjcmVlbkxlc3NUaGVuMTAyNCgpIHtcbiAgLy8gQ2hlY2sgaWYgc2NyZWVuIGlzIGxlc3MgdGhlbiAxMDI0cHggd2lkZVxuICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDI0cHgpXCIpLm1hdGNoZXM7XG59XG5cbi8vIFdoZW4gcmVzaXppbmcgd2luZG93IG1pZGRsZSBjb2x1bW4gcmVzaXplIGl0c2VsZiB0byBiZSByZXNwb25zaXZlXG5leHBvcnQgeyByZXNwb25zaXZlLCBzY3JlZW5MZXNzVGhlbjEwMjQgfTtcbiIsImltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuaW1wb3J0IHsgcmVmcmVzaFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3RzL3JlbmRlci5qc1wiO1xuXG5mdW5jdGlvbiBhZGRUYXNrVG8oYXJyKSB7XG4gIGNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC10b2RvXCIpO1xuXG4gIHN1Ym1pdFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFkZFRhc2soYXJyKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soYXJyKSB7XG4gIC8vIFByZXZlbnQgZGVmYXVsdCBzdWJtaXQgYmVoYXZpb3JcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gTG9vcCB0byBnZXQgYWN0aXZlIHByb2plY3RcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhcnIpIHtcbiAgICBpZiAocHJvamVjdC5pc0FjdGl2ZSkgcHVzaFRhc2tUbyhwcm9qZWN0LnRhc2tzKTtcbiAgfVxuXG4gIC8vIFJlcmVuZGVyIGFycmF5XG4gIHJlZnJlc2hQcm9qZWN0cyhhcnIpO1xufVxuXG5mdW5jdGlvbiBwdXNoVGFza1RvKGFycikge1xuICAvLyBQdXNoIHRhc2sgdG8gYXJyYXlcbiAgYXJyLnB1c2goZ2V0VGFzaygpKTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gZ2V0VGFzaygpIHtcbiAgLy8gR2V0IHVzZXIgaW5wdXQgdmFsdWUsIHNhdmUgaXRcbiAgbGV0IHRhc2sgPSB0YXNrRmFjdG9yeSh7IHRpdGxlOiBnZXRJbnB1dFZhbHVlKCkgfSk7XG4gIC8vIGFuZCBjbGVhciBpbnB1dFxuICBjbGVhclRhc2tJbnB1dCgpO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgLy8gR2V0IHVzZXIgaW5wdXQgdmFsdWUgYXMgTmV3IFRhc2sgOiBTVFJJTkdcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG9cIikudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0lucHV0KCkge1xuICAvLyBDbGVhciB1c2VyIGlucHV0XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG9cIikudmFsdWUgPSBcIlwiO1xufVxuXG5leHBvcnQgeyBnZXRUYXNrLCBhZGRUYXNrVG8gfTtcbiIsImltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUYXNrc0J5TnVtYmVyKG51bWJlciA9IDEpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiBzaW1wbHkgY3JlYXRlcyBhbiBhcnJheSB3aXRoIGRlZmF1bHQgdGFza3MgaW4gaXRcbiAgLy8gTnVtYmVyIGlzIGp1c3QgYSBudW1iZXIgb2YgYnVuZGxlIGZyb20gMSB0byAzXG4gIGxldCBidW5kbGUxID0gW1xuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIGVuZ2xpc2hcIixcbiAgICAgIGRhdGU6IFwiMTUuMDMuMjAyNVwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICBub3RlOiBcInNvbWV0aGluZ1wiLFxuICAgIH0pLFxuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIGVuZ2xpc2ggYWdhaW5cIixcbiAgICAgIGRhdGU6IFwiMTUuMDMuMjAyOFwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiQW5kIEFnYWluIVwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICBub3RlOiBcInNvbWV0aGluZ1wiLFxuICAgIH0pLFxuICBdO1xuXG4gIGxldCBidW5kbGUyID0gW1xuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIGdlcm1hblwiLFxuICAgICAgZGF0ZTogXCIxNS4wMy4yMDE4XCIsXG4gICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICBub3RlOiBcInNvbWV0aGluZ1wiLFxuICAgIH0pLFxuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIE1hdGghXCIsXG4gICAgICBkYXRlOiBcIjE1LjAzLjIwMThcIixcbiAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJMRUhSTkUgREVVVFNDSCEhIVwiLFxuICAgICAgZGF0ZTogXCIxNS4wMy4yMDE4XCIsXG4gICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgfSksXG4gIF07XG5cbiAgbGV0IGJ1bmRsZTMgPSBbXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTWFrZSBzdHVmZlwiLFxuICAgICAgbm90ZTogXCJzb21ldGhpbmdcIixcbiAgICAgIGRvbmU6IHRydWUsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiRG8gc3R1ZmZcIixcbiAgICAgIGRhdGU6IFwiMTAuMDEuMjAyMFwiLFxuICAgICAgZG9uZTogdHJ1ZSxcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJSdW4gc3R1ZmZcIixcbiAgICAgIG5vdGU6IFwic29tZXRoaW5nXCIsXG4gICAgICBkb25lOiB0cnVlLFxuICAgIH0pLFxuICBdO1xuXG4gIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIGJ1bmRsZTE7XG5cbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gYnVuZGxlMjtcblxuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBidW5kbGUzO1xuICB9XG59XG5cbmV4cG9ydCB7IGdldFRhc2tzQnlOdW1iZXIgfTtcbiIsImltcG9ydCB7IHJlZnJlc2hQcm9qZWN0cyB9IGZyb20gXCIuLi9wcm9qZWN0cy9yZW5kZXIuanNcIjtcbmltcG9ydCAqIGFzIERldGFpbHNUb2dnbGUgZnJvbSBcIi4vZGV0YWlsc1RvZ2dsZS5qc1wiO1xuXG5mdW5jdGlvbiBnZXRBY3RpdmVQcm9qZWN0KGFycikge1xuICAvLyBGaW5kIGFjdGl2ZSBwcm9qZWN0IGFuZCByZXR1cm4gaXRcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhcnIpIHtcbiAgICBpZiAocHJvamVjdC5pc0FjdGl2ZSkgcmV0dXJuIHByb2plY3Q7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFza3NGcm9tKHByb2plY3RzKSB7XG4gIC8vIFRha2UgdGhlIGNvbGxjZXRpb24gb2YgYWxsIGRlbGV0ZSBjcm9zcyBidXR0b25zIGZyb20gdGFza3MgYnkgY2xhc3MgbmFtZVxuICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtdG9kby1idG5cIik7XG4gIC8vIExvb3AgdGhyb3VnaCBjb2xsZWN0aW9uIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBidXR0b25cbiAgZm9yIChsZXQgYnV0dG9uIG9mIGJ1dHRvbnMpIHtcbiAgICBkZWxldGVCdG5SZW1vdmVUYXNrKGJ1dHRvbiwgcHJvamVjdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUJ0blJlbW92ZVRhc2soYnV0dG9uLCBwcm9qZWN0cykge1xuICAvLyBGdW5jdGlvbiB0byBhc3NpZ24gRXZlbnQgbGlzdGVuZXIgdG8gYnV0dG9uc1xuICAvLyB0byByZW1vdmUgcGFydGljdWxhciB0YXNrcyBmcm9tIHBhZ2VcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIGdldCBJZCBvZiBhIGJ1dHRvbiB0byB3aGljaCBsaXN0ZW5lciBpcyBhc3NpZ25lZFxuICAgIGxldCBidG5JZCA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAvLyBnZXQgb25seSBudW1iZXIgYWZ0ZXIgdGhlIGh5cGhlbiBmcm9tIElkXG4gICAgbGV0IG51bWJlciA9IGJ0bklkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAvLyBCZWZvcmUgcmVtb3ZpbmcgYW4gaXRlbSBtYWtlIHN1cmUgdG8gY2xvc2UgaXRzIGRldGFpbHNcbiAgICBjbG9zZURldGFpbHNPZkRlbGV0ZWRUYXNrKG51bWJlcik7XG4gICAgbWFrZURldGFpbHNDb25zaXN0ZW50KG51bWJlcik7XG4gICAgLy8gUmVtb3ZlIGl0ZW0gZnJvbSB0aGUgYXJyYXkgb2YgdGFza3MgYnkgdGhhdCBudW1iZXJcbiAgICBnZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzKS50YXNrcy5zcGxpY2UobnVtYmVyLCAxKTtcbiAgICAvLyBSZXJlbmRlciBwcm9qZWN0c1xuICAgIHJlZnJlc2hQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgLy8gQXZvaWQgZmlyaW5nIHBhcmVudCBlbGVtZW50IGxpc3RlbmVyIGFmdGVyIGNsaWNraW5nIG9uIHRoZSBidXR0b25cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VEZXRhaWxzT2ZEZWxldGVkVGFzayhudW1iZXIpIHtcbiAgLy8gQmVmb3JlIHJlbW92aW5nIGFuIGl0ZW0gbWFrZSBzdXJlIGhpcyBkZXRhaWxzIGFyZSBub3Qgc2hvd25cbiAgLy8gSWYgdGhleSBhcmUgdGhlbiBoaWRlIHRoZW1cbiAgaWYgKERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCkgPT09IG51bWJlcilcbiAgICBEZXRhaWxzVG9nZ2xlLmhpZGVEZXRhaWxzKCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VEZXRhaWxzQ29uc2lzdGVudChudW1iZXIpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiBpcyBuZWVkZWQgZm9yIGRldGFpbHMgY29udGFpbmVyIHRvIGhhdmUgdGhlIHNhbWUgaWQgYXMgdGFrcyBoYXZlXG4gIC8vIEZvciBlLmcuIGlmIHlvdSBvcGVuIHRoZSBkZXRhaWxzIG9mIGEgdGFzayB3aGljaCBoYXMgaWQgPSA0IChpdHMgZGV0YWlscyBpZCBpcyBhbHNvID0gNClcbiAgLy8gYW5kIHRoZW4gZGVsZXRlIHRhc2sgd2l0aCBpZCA9IDIsIHRoZW4gYWxsIHRhc2tzIGFmdGVyIDIgd2lsbCBoYXZlIGlkID0gaWQgLSAxLCBidXQgZGV0YWlscyBzdGF5cyB0aGUgc2FtZVxuICAvLyBUaGF0J3Mgd2h5IHdlIG5lZWQgYSBmdW5jdGlvbiB0byBkZWNyZWFzZSBkZXRhaWxzIGlkIGJ5IG9uZSBldmVyeSB0aW1lIHdlIGRlbGV0ZSBhIHRhc2sgd2l0aCBpZCA8IGlkIG9mIGRlbGV0ZWQgdGFza1xuICBpZiAoRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKSA+IG51bWJlcikge1xuICAgIGRlY3JlYXNlRGV0YWlsc0lkKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVjcmVhc2VEZXRhaWxzSWQoKSB7XG4gIC8vIGdldCBpZCBvZiBjdXJyZW50IGRldGFpbHNcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIikuY2hpbGRyZW5bMF07XG4gIGxldCBkZXRhaWxzSWROdW1iZXIgPSBkZXRhaWxzLmlkLnNwbGl0KFwiLVwiKVsyXTtcbiAgLy8gTm93IGRlY3JlYXNlIGl0IGJ5IG9uZVxuICBEZXRhaWxzVG9nZ2xlLnNldERldGFpbHNJZFRvKGRldGFpbHNJZE51bWJlciAtIDEpO1xufVxuZXhwb3J0IHsgZGVsZXRlVGFza3NGcm9tIH07XG4iLCJpbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcbmltcG9ydCB7IGFjdGl2YXRlU3RhciB9IGZyb20gXCIuLi9zdHlsZS9wcmlvcml0eS5qc1wiO1xuaW1wb3J0IHsgcmVmcmVzaE9ubHlUYXNrc0Zyb20gfSBmcm9tIFwiLi4vcHJvamVjdHMvcmVuZGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHB1dFRhc2tJbmZvVG9JbnB1dCh0YXNrKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIHB1dCBpbmZvIGZyb20gdGFza3MgaW4gaW5wdXRzIHdoZW4gZGV0YWlscyBhcmUgc2hvd25cbiAgc2V0TmFtZSh0YXNrLnRpdGxlKTtcbiAgc2V0RGF0ZSh0YXNrLmRhdGUpO1xuICBzZXRQaW9yaXR5KHRhc2sucHJpb3JpdHkpO1xuICBzZXROb3RlKHRhc2subm90ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZVByb2plY3QoYXJyKSB7XG4gIC8vIEZpbmQgYWN0aXZlIHByb2plY3QgYW5kIHJldHVybiBpdFxuICBmb3IgKGxldCBwcm9qZWN0IG9mIGFycikge1xuICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlKSByZXR1cm4gcHJvamVjdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUYXNrKHByb2plY3RzKSB7XG4gIC8vIGdldCBudW1iZXIgb2YgdGFzayBmcm9tIGRldGFpbHNcbiAgbGV0IHRhc2tOdW1iZXIgPSBEZXRhaWxzVG9nZ2xlLmdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpO1xuICAvLyBnZXQgdGFzayB3aXRoIHRoZSBzYW1lIG51bWJlciBhcyBkZXRhaWxzIHdpbmRvd1xuICBsZXQgdGFzayA9IGdldEFjdGl2ZVByb2plY3QocHJvamVjdHMpLnRhc2tzW3Rhc2tOdW1iZXJdO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFza09uSW5wdXQocHJvamVjdHMpIHtcbiAgLy8gQ2hhbmdlIGEgdGFzayB3aXRoIGlucHV0IGZyb20gRGV0YWlscyBXaW5kb3dcbiAgY2hhbmdlVGl0bGVPbklucHV0KHByb2plY3RzKTtcbiAgY2hhbmdlRGF0ZU9uSW5wdXQocHJvamVjdHMpO1xuICBjaGFuZ2VQcmlvcml0eU9uSW5wdXQocHJvamVjdHMpO1xuICBjaGFuZ2VOb3RlT25JbnB1dChwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRpdGxlT25JbnB1dChhcnIpIHtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW5hbWUtY2hhbmdlclwiKTtcblxuICBpbnB1dC5vbmlucHV0ID0gKCkgPT4gY2hhbmdlVGl0bGUoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGl0bGUoYXJyKSB7XG4gIGxldCB0YXNrID0gZ2V0VGFzayhhcnIpO1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbmFtZS1jaGFuZ2VyXCIpO1xuICAvLyBUYXNrIHRpdGxlIGlzIG5vdyB1c2VyIGlucHV0IHZhbHVlXG4gIHRhc2sudGl0bGUgPSBpbnB1dC52YWx1ZTtcbiAgLy8gcmVyZW5kZXIgdG8gc2VlIHRoZSBjaGFuZ2VzXG4gIHJlZnJlc2hPbmx5VGFza3NGcm9tKGFycik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZURhdGVPbklucHV0KGFycikge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG5cbiAgaW5wdXQub25pbnB1dCA9ICgpID0+IGNoYW5nZURhdGUoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRGF0ZShhcnIpIHtcbiAgbGV0IHRhc2sgPSBnZXRUYXNrKGFycik7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcbiAgLy8gVGFzayBkYXRlIGlzIG5vdyBmb3JtYXR0ZWQgZGF0ZSBpbnB1dCB2YWx1ZVxuICB0YXNrLmRhdGUgPSBmb3JtYXREYXRlMihpbnB1dC52YWx1ZSk7XG4gIC8vIHJlcmVuZGVyIHRvIHNlZSB0aGUgY2hhbmdlc1xuICByZWZyZXNoT25seVRhc2tzRnJvbShhcnIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VQcmlvcml0eU9uSW5wdXQoYXJyKSB7XG4gIGxldCBzdGFycyA9IFtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXItMVwiKSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXItMlwiKSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXItM1wiKSxcbiAgXTtcblxuICBmb3IgKGxldCBzdGFyIG9mIHN0YXJzKSB7XG4gICAgc3Rhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2hhbmdlUHJpb3JpdHkoYXJyKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHkoYXJyKSB7XG4gIGxldCB0YXNrID0gZ2V0VGFzayhhcnIpO1xuICBsZXQgaW5wdXQgPSBnZXRQcmlvcml0eUlucHV0KCk7XG4gIC8vIFRhc2sgZGF0ZSBpcyBub3cgZm9ybWF0dGVkIGRhdGUgaW5wdXQgdmFsdWVcbiAgdGFzay5wcmlvcml0eSA9IGlucHV0O1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVmcmVzaE9ubHlUYXNrc0Zyb20oYXJyKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJpb3JpdHlJbnB1dCgpIHtcbiAgbGV0IHN0YXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTFcIik7XG5cbiAgaWYgKHN0YXIxLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkLTFcIikpIHtcbiAgICByZXR1cm4gXCJtZWRpdW1cIjtcbiAgfSBlbHNlIGlmIChzdGFyMS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZC0yXCIpKSB7XG4gICAgcmV0dXJuIFwiaGlnaFwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcImxvd1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU5vdGVPbklucHV0KGFycikge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGUtY2hhbmdlclwiKTtcblxuICBpbnB1dC5vbmlucHV0ID0gKCkgPT4gY2hhbmdlTm90ZShhcnIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VOb3RlKGFycikge1xuICBsZXQgdGFzayA9IGdldFRhc2soYXJyKTtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlLWNoYW5nZXJcIik7XG4gIC8vIFRhc2sgTm90ZSBpcyBub3cgZm9ybWF0dGVkIE5vdGUgaW5wdXQgdmFsdWVcbiAgdGFzay5ub3RlID0gaW5wdXQudmFsdWU7XG4gIC8vIHJlcmVuZGVyIHRvIHNlZSB0aGUgY2hhbmdlc1xuICByZWZyZXNoT25seVRhc2tzRnJvbShhcnIpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gU2V0IGlucHV0XG5mdW5jdGlvbiBzZXROYW1lKG5hbWUpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW5hbWUtY2hhbmdlclwiKS52YWx1ZSA9IG5hbWU7XG59XG5cbmZ1bmN0aW9uIHNldERhdGUoZGF0ZSkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWUgPSBmb3JtYXREYXRlKGRhdGUpO1xuICBmb3JtYXREYXRlKGRhdGUpO1xufVxuXG5mdW5jdGlvbiBzZXRQaW9yaXR5KGxldmVsKSB7XG4gIGlmIChsZXZlbCA9PT0gXCJoaWdoXCIpIHtcbiAgICBhY3RpdmF0ZVN0YXIoMyk7XG4gIH0gZWxzZSBpZiAobGV2ZWwgPT09IFwibWVkaXVtXCIpIHtcbiAgICBhY3RpdmF0ZVN0YXIoMik7XG4gIH0gZWxzZSBpZiAobGV2ZWwgPT09IFwibG93XCIpIHtcbiAgICBhY3RpdmF0ZVN0YXIoMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0Tm90ZShub3RlKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1jaGFuZ2VyXCIpLnZhbHVlID0gbm90ZTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gIC8vIElmIGRhdGUgaXMgdW5kZWZpbmVkIHlldCwgdGhlbiByZXR1cm4gbm90aGluZyBcIlwiXG4gIGlmICghZGF0ZSkgcmV0dXJuIFwiXCI7XG4gIC8vIERhdGUgZm9ybWF0dGluZzogZnJvbSBcImRkLm1tLnl5eXlcIiB0byBcInl5eXktTU0tZGRcIlxuICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi5cIilbMF07XG4gIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCIuXCIpWzFdO1xuICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCIuXCIpWzJdO1xuXG4gIGxldCBmb3JtYXR0ZWQgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICByZXR1cm4gZm9ybWF0dGVkO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlMihkYXRlKSB7XG4gIC8vIElmIGRhdGUgaXMgdW5kZWZpbmVkIHlldCwgdGhlbiByZXR1cm4gbm90aGluZyBcIlwiXG4gIGlmICghZGF0ZSkgcmV0dXJuIFwiXCI7XG4gIC8vIERhdGUgZm9ybWF0dGluZzogZnJvbSAgXCJ5eXl5LU1NLWRkXCIgdG8gXCJkZC5tbS55eXl5XCJcbiAgbGV0IGRheSA9IGRhdGUuc3BsaXQoXCItXCIpWzJdO1xuICBsZXQgbW9udGggPSBkYXRlLnNwbGl0KFwiLVwiKVsxXTtcbiAgbGV0IHllYXIgPSBkYXRlLnNwbGl0KFwiLVwiKVswXTtcblxuICBsZXQgZm9ybWF0dGVkID0gYCR7ZGF5fS4ke21vbnRofS4ke3llYXJ9YDtcbiAgcmV0dXJuIGZvcm1hdHRlZDtcbn1cblxuZXhwb3J0IHsgcHV0VGFza0luZm9Ub0lucHV0LCBjaGFuZ2VUYXNrT25JbnB1dCwgZ2V0QWN0aXZlUHJvamVjdCB9O1xuIiwiaW1wb3J0IHsgc2NyZWVuTGVzc1RoZW4xMDI0IH0gZnJvbSBcIi4uL3N0eWxlL3Jlc2l6ZS5qc1wiO1xuaW1wb3J0ICogYXMgRGV0YWlsc0lucHV0IGZyb20gXCIuL2RldGFpbHNJbnB1dC5qc1wiO1xuXG5mdW5jdGlvbiB0YXNrc1RvZ2dsZURldGFpbHMoYXJyKSB7XG4gIC8vIE1ha2UgdG9kbyB0YXNrcyBzaG93IGRldGFpbHMgb24gY2xpY2sgKGZyb20gcmlnaHQgc2lkZSlcbiAgdG9kb0xpc3RTaG93RGV0YWlscyhhcnIpO1xuICAvLyBNYWtlIGJ1dHRvbiBpbiBkZXRhaWxzIGludGVyYWN0OiBoaWRlIGRldGFpbHNcbiAgQXJyb3dIaWRlRGV0YWlscygpO1xufVxuXG5mdW5jdGlvbiB0b2RvTGlzdFNob3dEZXRhaWxzKGFycikge1xuICAvLyBNYWtlIHRvZG8gbGlzdHMgc2hvdyBkZXRhaWxzIG9uY2xpY2tcbiAgbGV0IHRhc2tzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9cIik7XG5cbiAgZm9yIChsZXQgdGFzayBvZiB0YXNrcykge1xuICAgIHRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBnZXQgSWQgb2YgYSB0YXNrIHRvIHdoaWNoIGxpc3RlbmVyIGlzIGFzc2lnbmVkXG4gICAgICBsZXQgdGFza0lkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgICAgLy8gZ2V0IG9ubHkgbnVtYmVyIGZyb20gSWQgYWZ0ZXIgdGhlIGh5cGhlblxuICAgICAgbGV0IG51bWJlciA9IHRhc2tJZC5zcGxpdChcIi1cIilbMV07XG4gICAgICAvLyBQYXNzIGEgbnVtYmVyIG9mIHRoZSBjbGlja2VkIHRhc2sgdG8gZGV0YWlsc1xuICAgICAgdG9nZ2xlRGV0YWlscyhudW1iZXIpO1xuICAgICAgLy8gUHV0IGluZm8gZnJvbSB0YXNrcyBpbiBpbnB1dHMgd2hlbiBkZXRhaWxzIGFyZSBzaG93blxuICAgICAgRGV0YWlsc0lucHV0LnB1dFRhc2tJbmZvVG9JbnB1dChhcnJbbnVtYmVyXSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gQXJyb3dIaWRlRGV0YWlscygpIHtcbiAgLy8gTWFrZSBBcnJvdyBoaWRlIERldGFpbHMgb25jbGlja1xuICBsZXQgYXJyb3dCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlLWRldGFpbHMtYnRuXCIpO1xuICBhcnJvd0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGlkZURldGFpbHMpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVEZXRhaWxzKG51bWJlcikge1xuICBsZXQgaWROdW1iZXIgPSBnZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKTtcblxuICAvLyBpZiBkZXRhaWxzIGFyZSB2aXNpYmxlIG9uIHRoZSBwYWdlIEFORFxuICAvLyBpZiB1c2VyIGNsaWNrcyBvbiB0aGUgc2FtZSB0YXNrIDJ4IHRoYW4gaGlkZSBkZXRhaWxzXG4gIGlmIChkZXRhaWxzQXJlU2hvd24oKSAmJiBpZE51bWJlciA9PT0gbnVtYmVyKSB7XG4gICAgaGlkZURldGFpbHMoKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93RGV0YWlscyhudW1iZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRldGFpbHNBcmVTaG93bigpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIC8vIEFyZSBkZXRhaWxzIHNob3duIG9uIHRoZSBwYWdlPyBSZXR1cm4gYm9vbGVhbjpcbiAgcmV0dXJuIGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSAhPT0gXCJub25lXCI7XG59XG5cbmZ1bmN0aW9uIGdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIC8vIFRha2UgaWQgb2YgdGhlIGRldGFpbHMgY2hpbGRcbiAgbGV0IGRldGFpbHNDb250YWluZXJJZCA9IGRldGFpbHMuY2hpbGRyZW5bMF0uaWQ7XG4gIC8vIFRha2UgYSBudW1iZXIgZnJvbSB0aGF0IGlkIGFuZCByZXR1cm4gaXRcbiAgbGV0IGlkTnVtYmVyID0gZGV0YWlsc0NvbnRhaW5lcklkLnNwbGl0KFwiLVwiKVsyXTtcbiAgcmV0dXJuIGlkTnVtYmVyO1xufVxuXG5mdW5jdGlvbiBzZXREZXRhaWxzSWRUbyhudW1iZXIpIHtcbiAgLy8gRmlyc3QgbWFrZSBkZXRhaWxzIElEIHRoZSBzYW1lIGFzIGluaXRpYWwgSUQgKHdpdGggbm8gbnVtYmVycylcbiAgLy8gQW5vdGhlciB3b3JkcyByZW1vdmUgYWxsIGV4aXN0aW5nIG51bWJlcnMgZnJvbSBpdFxuICBtYWtlRGV0YWlsc0RlZmF1bHQoKTtcbiAgLy8gVGhlbiBwYXNzIGEgbnVtYmVyIHRvIGl0XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBkZXRhaWxzLmNoaWxkcmVuWzBdLmlkICs9IGAtJHtudW1iZXJ9YDtcbn1cblxuZnVuY3Rpb24gaGlkZURldGFpbHMoKSB7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuICBoaWRlKGRldGFpbHMpO1xuICAvLyBXaGVuIGRldGFpbHMgYXJlIGhpZGRlbiB0aGUgbWFpbiBjb2x1bW4gd2lsbCBiZSBicm9hZGVyXG4gIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gIC8vIFdoZW4gZGV0YWlscyBhcmUgaGlkZGVuIHRoZWlyIGRldGFpbHMtY29udGFpbmVyLUlEIHdpbGwgYmUgZGVmYXVsdCB3aXRoIG5vIG51bWJlclxuICBtYWtlRGV0YWlsc0RlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gc2hvd0RldGFpbHMobnVtYmVyKSB7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuICBzaG93QXNGbGV4KGRldGFpbHMpO1xuICAvLyBBbHNvIHNldCBuZXcgSUQgbnVtYmVyIHRvIGRldGFpbHMgY29udGFpbmVyIChvbmx5IGlmIGl0IGRvZXNuJ3QgaGF2ZSBJRCBhbHJlYWR5KVxuICBzZXREZXRhaWxzSWRUbyhudW1iZXIpO1xuICAvLyBJZiBzY3JlZW4gaXMgYmlnZ2VyIHRoYW4gMTAyNCB0aGVuIG1ha2UgXCJtYWluXCIgdGhlIG1pZGRsZSBjb2x1bW4gb2YgMyBjb2x1bW5zXG4gIGlmICghc2NyZWVuTGVzc1RoZW4xMDI0KCkpIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi8zXCI7XG59XG5cbmZ1bmN0aW9uIG1ha2VEZXRhaWxzRGVmYXVsdCgpIHtcbiAgLy8gQ2hhbmdlIElEIG9mIGNoaWxkIG9mIHRoZSBkZXRhaWxzIHRvIGRlZmF1bHQgXCJkZXRhaWxzLWNvbnRhaW5lclwiXG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICBkZXRhaWxzLmNoaWxkcmVuWzBdLmlkID0gXCJkZXRhaWxzLWNvbnRhaW5lclwiO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wdXRlZERpc3BsYXkoZWxlbWVudCkge1xuICBsZXQgY29tcHV0ZWREaXNwbGF5ID0gd2luZG93XG4gICAgLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudClcbiAgICAuZ2V0UHJvcGVydHlWYWx1ZShcImRpc3BsYXlcIik7XG4gIHJldHVybiBjb21wdXRlZERpc3BsYXk7XG59XG5cbmZ1bmN0aW9uIHNob3dBc0ZsZXgoZWxlbWVudCkge1xuICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbn1cblxuZnVuY3Rpb24gaGlkZShlbGVtZW50KSB7XG4gIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5leHBvcnQge1xuICB0YXNrc1RvZ2dsZURldGFpbHMsXG4gIGdldENvbXB1dGVkRGlzcGxheSxcbiAgZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyLFxuICBoaWRlRGV0YWlscyxcbiAgZGV0YWlsc0FyZVNob3duLFxuICBzZXREZXRhaWxzSWRUbyxcbn07XG4iLCJpbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcbmltcG9ydCB7IHJlZnJlc2hPbmx5VGFza3NGcm9tIH0gZnJvbSBcIi4uL3Byb2plY3RzL3JlbmRlci5qc1wiO1xuaW1wb3J0IHsgZ2V0QWN0aXZlUHJvamVjdCB9IGZyb20gXCIuL2RldGFpbHNJbnB1dC5qc1wiO1xuXG5mdW5jdGlvbiBkb25lQnRucyhhcnIpIHtcbiAgLy8gVGFrZSB0aGUgY29sbGVjdGlvbiBvZiBhbGwgY2hlY2tib3hlcyBmcm9tIHRhc2tzIGJ5IGNsYXNzIG5hbWVcbiAgbGV0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kby1pY29uLWNvbnRhaW5lclwiKTtcbiAgLy8gTG9vcCB0aHJvdWdoIGNvbGxlY3Rpb24gYW5kIGFkZCBldmVudCBsaXN0ZW5lciB0byBlYWNoIGJ1dHRvblxuICBmb3IgKGxldCBjaGVja2JveCBvZiBjaGVja2JveGVzKSB7XG4gICAgZG9uZUJ0bkNvbXBsZXRlVGFzayhjaGVja2JveCwgYXJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkb25lQnRuQ29tcGxldGVUYXNrKGNoZWNrYm94LCBhcnIpIHtcbiAgLy8gRnVuY3Rpb24gdG8gYXNzaWduIEV2ZW50IGxpc3RlbmVyIHRvIGNoZWNrYm94ZXNcbiAgLy8gdG8gY29tcGxldGUgcGFydGljdWxhciB0YXNrcyBmcm9tIHBhZ2VcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gZ2V0IElkIG9mIGEgY2hlY2tib3ggdG8gd2hpY2ggbGlzdGVuZXIgaXMgYXNzaWduZWRcbiAgICBsZXQgY2JveElkID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZDtcbiAgICAvLyBnZXQgb25seSBudW1iZXIgYWZ0ZXIgdGhlIGh5cGhlbiBmcm9tIElkXG4gICAgbGV0IG51bWJlciA9IGNib3hJZC5zcGxpdChcIi1cIilbMV07XG4gICAgLy8gQmVmb3JlIGNvbXBsZXRpbmcgYW4gaXRlbSBtYWtlIHN1cmUgdG8gY2xvc2UgaXRzIGRldGFpbHNcbiAgICBjbG9zZURldGFpbHNPZkNvbXBsZXRlZFRhc2sobnVtYmVyKTtcbiAgICAvLyBJZiB0YXNrIGlzIGRvbmUgdGhlbiB1bmRvbmUgaXQsIGVsc2UgY29tcGxldGUgaXRcbiAgICBnZXRBY3RpdmVQcm9qZWN0KGFycikudGFza3NbbnVtYmVyXS5kb25lID0gIWdldEFjdGl2ZVByb2plY3QoYXJyKS50YXNrc1tcbiAgICAgIG51bWJlclxuICAgIF0uZG9uZTtcbiAgICAvLyBSZXJlbmRlciBhcnJheVxuICAgIHJlZnJlc2hPbmx5VGFza3NGcm9tKGFycik7XG4gICAgLy8gQXZvaWQgZmlyaW5nIHBhcmVudCBlbGVtZW50IGxpc3RlbmVyIGFmdGVyIGNsaWNraW5nIG9uIHRoZSBjaGVja2JveFxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZURldGFpbHNPZkNvbXBsZXRlZFRhc2sobnVtYmVyKSB7XG4gIC8vIEJlZm9yZSByZW1vdmluZyBhbiBpdGVtIG1ha2Ugc3VyZSBoaXMgZGV0YWlscyBhcmUgbm90IHNob3duXG4gIC8vIElmIHRoZXkgYXJlIHRoZW4gaGlkZSB0aGVtXG4gIGlmIChEZXRhaWxzVG9nZ2xlLmdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpID09PSBudW1iZXIpXG4gICAgRGV0YWlsc1RvZ2dsZS5oaWRlRGV0YWlscygpO1xufVxuXG5leHBvcnQgeyBkb25lQnRucyB9O1xuIiwiY29uc3QgdGFza0ZhY3RvcnkgPSBmdW5jdGlvbiAoe1xuICB0aXRsZSA9IFwiXCIsXG4gIGZyb20gPSBcIlwiLFxuICBkYXRlID0gXCJcIixcbiAgcHJpb3JpdHkgPSBcImxvd1wiLFxuICBub3RlID0gXCJcIixcbiAgZG9uZSA9IGZhbHNlLFxufSkge1xuICByZXR1cm4geyB0aXRsZSwgZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUsIGRvbmUgfTtcbn07XG5cbmV4cG9ydCB7IHRhc2tGYWN0b3J5IH07XG4iLCJpbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4uLy4uL0lDT05TL2NhbGVuZGFyLnN2Z1wiO1xuaW1wb3J0IE5vdGUgZnJvbSBcIi4uLy4uL0lDT05TL2VkaXQuc3ZnXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcblxuZnVuY3Rpb24gcmVuZGVyQWxsVGFza3NGcm9tKGFycikge1xuICAvLyBDbGVhciBhbGwgcHJldmlvdXNseSByZW5kZXJlZCBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG4gIGNsZWFyQ29udGVudE9mKFwidG9kb3NcIik7XG4gIC8vUmVuZGVyIGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXkgdG8gdGhlIHBhZ2VcbiAgZm9yIChsZXQgW2luZGV4LCBpdGVtXSBvZiBhcnIuZW50cmllcygpKSB7XG4gICAgcmVuZGVyVGFzayhpbmRleCwgaXRlbSk7XG4gIH1cbiAgLy8gTWFrZSBlYWNoIHRhc2sgc2hvdyBpdHMgZGV0YWlscyBvbiBjbGlja1xuICBEZXRhaWxzVG9nZ2xlLnRhc2tzVG9nZ2xlRGV0YWlscyhhcnIpO1xuICAvLyBSZWFjaCBsYWJlbHMgYW5kIG1ha2UgdGhlbSBjaGFuZ2UgdGhlbXNlbHZlcyB3aGVuIHRoZSB0YXNrIGlzIGRvbmVcbiAgdG9nZ2xlRG9uZUljb25zKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudE9mKGlkKSB7XG4gIC8vIFJlbW92ZSBhbnkgY2hpbGQgb2YgdGhlIGVsZW1lbnQgd2l0aCBpZFxuICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2soaSwgdGFzaykge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zXCIpLmFwcGVuZChjcmVhdGVUYXNrKGksIHRhc2spKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhpLCB0YXNrKSB7XG4gIC8vIGNyZWF0ZSBsaXN0IGVsZW1lbnQgd2l0aCBhIGNsYXNzICd0b2RvJ1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kb1wiKTtcbiAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRhc2stJHtpfWApO1xuICAvLyBBcHBlbmQgbGFiZWwsIGlucHV0LCBkaXYgYW5kIGJ1dHRvbiB0byBpdFxuICBsaS5hcHBlbmQoY3JlYXRlTGFiZWwoaSkpO1xuICBsaS5hcHBlbmQoY3JlYXRlSW5wdXQoaSkpO1xuICBsaS5hcHBlbmQoXG4gICAgY3JlYXRlQ29udGVudChcbiAgICAgIHRhc2sudGl0bGUsXG4gICAgICB0YXNrLmZyb20sXG4gICAgICB0YXNrLmRhdGUsXG4gICAgICB0YXNrLnByaW9yaXR5LFxuICAgICAgdGFzay5ub3RlLFxuICAgICAgdGFzay5kb25lXG4gICAgKVxuICApO1xuICBsaS5hcHBlbmQoY3JlYXRlRGVsZXRlQnRuKGkpKTtcblxuICByZXR1cm4gbGk7XG59XG5cbi8vIExBQkVMXG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGkpIHtcbiAgLy8gcmV0dXJucyBsYWJlbCBmb3IgXCJ0b2RvY2hlY2tib3hcIiArIGlcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgbGFiZWwtJHtpfWApO1xuICBsYWJlbC5odG1sRm9yID0gYHRvZG9jaGVja2JveCR7aX1gO1xuICBsYWJlbC5hcHBlbmQoY3JlYXRlRG9uZUljb24oKSk7XG4gIHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRG9uZUljb24oKSB7XG4gIC8vIGNyZWF0ZSBpY29uIGNvbnRhaW5lclxuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pY29uLWNvbnRhaW5lclwiKTtcbiAgLy8gY3JlYXRlIGljb25cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW9uLWljb25cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNoZWNrbWFyay1vdXRsaW5lXCIpO1xuICAvLyBhcHBlbmQgaWNvbiB0byBjb250YWluZXJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBJTlBVVFxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dChpKSB7XG4gIC8vIENyZWF0ZSBpbnB1dCBjaGVja2JveCBlbGVtZW50IGFmdGVyIHRoZSBsYWJlbFxuICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIC8vIEFkZCBhdHRyaWJ1dGVzXG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYHRvZG8tY2hlY2tib3hgKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRvZG9jaGVja2JveC0ke2l9YCk7XG4gIHJldHVybiBjaGVja2JveDtcbn1cblxuLy8gQ09OVEVOVCA9IHRhc2sgdGl0bGUgYW5kIGRldGFpbHNcblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCh0aXRsZSwgZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUsIGRvbmUpIHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby10ZXh0XCIpO1xuICAvLyBBcHBlbmQgdGl0bGUgYW5kIGRldGFpbHMgdG8gY29udGVudFxuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKHRpdGxlKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRGV0YWlscyhmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSkpO1xuICBpZiAoZG9uZSkgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiZG9uZVwiKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHN0cikge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gc3RyO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURldGFpbHMoZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGV0YWlsc1wiKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVGcm9tKGZyb20pKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVEdWUoZGF0ZSkpO1xuICBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZVByaW9yaXR5KHByaW9yaXR5KSk7XG4gIGRldGFpbHMuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZShub3RlKSk7XG5cbiAgcmV0dXJuIGRldGFpbHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyb20oZnJvbSkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZnJvbS1wcm9qZWN0XCIpO1xuICBpZiAoZnJvbSkgc3Bhbi50ZXh0Q29udGVudCA9IGBGcm9tICR7ZnJvbX1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRHVlKGRhdGUpIHtcbiAgbGV0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gIGR1ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImR1ZS1kYXRlXCIpO1xuICBpZiAoZGF0ZSkge1xuICAgIC8vIElmIHRhc2sgaGFzIGRhdGUgYmVmb3JlIHRvZGF5LCBpdCB3aWxsIGJlIHJlZCBjb2xvcmVkXG4gICAgaWYgKGRhdGVPdmVyZHVlKGRhdGUpKSBkdWUuY2xhc3NMaXN0LmFkZChcIm92ZXJkdWUtZGF0ZVwiKTtcblxuICAgIGR1ZS5hcHBlbmRDaGlsZChjcmVhdGVDYWxlbmRhckltYWdlKCkpO1xuICAgIGR1ZS5hcHBlbmRDaGlsZChjcmVhdGVTcGFuRm9yRGF0ZShkYXRlKSk7XG4gIH1cbiAgcmV0dXJuIGR1ZTtcbn1cblxuZnVuY3Rpb24gZGF0ZU92ZXJkdWUoZGF0ZSkge1xuICAvLyBGdW5jdGlvbiB0byBjb21wYXJlIGRhdGVzOiB0b2RheSB3aXRoIGEgZGF0ZVxuICAvLyBJZiBkYXRlIGlzIGVhcmxpZXIgdGhhbiB0b2RheSB0aGVuIHJldHVybiB0cnVlXG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbiAgbGV0IGRheSA9IGRhdGUuc3BsaXQoXCIuXCIpWzBdO1xuICBsZXQgbW9udGggPSBkYXRlLnNwbGl0KFwiLlwiKVsxXTtcbiAgbGV0IHllYXIgPSBkYXRlLnNwbGl0KFwiLlwiKVsyXTtcblxuICBsZXQgdGFza0RhdGUgPSBuZXcgRGF0ZShgJHt5ZWFyfS0ke21vbnRofS0ke2RheX0gMDowMDowMGApO1xuXG4gIHJldHVybiB0YXNrRGF0ZSA8IHRvZGF5ID8gdHJ1ZSA6IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYWxlbmRhckltYWdlKCkge1xuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBDYWxlbmRhcik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJDYWxlbmRhclwiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTJweFwiKTtcblxuICByZXR1cm4gaW1nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuRm9yRGF0ZShkYXRlKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBgRHVlICR7ZGF0ZX1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHkobGV2ZWwpIHtcbiAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGAke2xldmVsfS1wcmlvcml0eWApO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChjcmVhdGVTcGFuRm9yUHJpb3JpdHkobGV2ZWwpKTtcbiAgcmV0dXJuIHByaW9yaXR5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuRm9yUHJpb3JpdHkobGV2ZWwpIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaWYgKGxldmVsICE9PSBcImxvd1wiKVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBgJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIobGV2ZWwpfSBwcmlvcml0eWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGUobm90ZSkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibm90ZS1wcmVzZW5jZVwiKTtcblxuICBpZiAobm90ZSkge1xuICAgIC8vIGNyZWF0ZSBhbmQgQXBwZW5kIE5vdGUgSWNvblxuICAgIGxldCBub3RlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbm90ZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIE5vdGUpO1xuICAgIG5vdGVJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBlblwiKTtcbiAgICBub3RlSWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEycHhcIik7XG5cbiAgICAvLyBjcmVhdGUgYW5kIGFwcGVuZCB0ZXh0XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJOb3RlXCI7XG5cbiAgICBzcGFuLmFwcGVuZENoaWxkKG5vdGVJY29uKTtcbiAgICBzcGFuLmFwcGVuZENoaWxkKHRleHQpO1xuICB9XG4gIHJldHVybiBzcGFuO1xufVxuXG4vLyBERUxFVEUgQlVUVE9OXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVCdG4oaSkge1xuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGV0ZS10b2RvLWJ0blwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGBkZWxldGVidG4tJHtpfWApO1xuXG4gIC8vIGNyZWF0ZSBhbiBpY29uIGFuZCBhcHBlbmQgaXQgdG8gYnV0dG9uXG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlvbi1pY29uXCIpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjbG9zZS1jaXJjbGVcIik7XG5cbiAgYnRuLmFwcGVuZENoaWxkKGljb24pO1xuXG4gIHJldHVybiBidG47XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURvbmVJY29ucygpIHtcbiAgLy8gR2V0IGNvbGxlY3Rpb24gb2YgYWxsIHRhc2tzIHdpY2ggYXJlIGNvbXBsZXRlZFxuICBsZXQgZG9uZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZG9uZVwiKTtcbiAgLy8gRm9yIGVhY2ggY29tcGxldGVkIHRhc2sgdGFrZSBsYWJlbCBhbmQgdG9nZ2xlIGEgY2xhc3MgXCJjb21wbGV0ZWRcIiBvbiBpdFxuICBmb3IgKGxldCB0YXNrIG9mIGRvbmVzKSB7XG4gICAgbGV0IG51bWJlciA9IHRhc2sucGFyZW50RWxlbWVudC5pZC5zcGxpdChcIi1cIilbMV07XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGxhYmVsLSR7bnVtYmVyfWApO1xuICAgIGxldCBpY29uQ29udGFpbmVyID0gbGFiZWwuZmlyc3RDaGlsZDtcblxuICAgIGljb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgfVxufVxuXG5leHBvcnQgeyByZW5kZXJBbGxUYXNrc0Zyb20sIGNsZWFyQ29udGVudE9mIH07XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==