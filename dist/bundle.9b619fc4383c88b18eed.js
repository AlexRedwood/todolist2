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

_tasks_add_js__WEBPACK_IMPORTED_MODULE_6__["addTaskTo"](projects); // Change tasks when user type something to details window

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



/***/ }),

/***/ "./src/JS/projects/render.js":
/*!***********************************!*\
  !*** ./src/JS/projects/render.js ***!
  \***********************************/
/*! exports provided: refreshProjects, initialRender */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/alexandr/Projects/odin_on_rails/new_beg/src/JS/projects/render.js: 'import' and 'export' may only appear at the top level (88:0)\n\n\u001b[0m \u001b[90m 86 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m 87 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 88 | \u001b[39m\u001b[36mexport\u001b[39m { refreshProjects\u001b[33m,\u001b[39m initialRender }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 89 | \u001b[39m\u001b[0m\n    at Parser._raise (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:742:17)\n    at Parser.raiseWithData (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.raise (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:729:17)\n    at Parser.parseStatementContent (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11172:18)\n    at Parser.parseStatement (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11081:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11656:25)\n    at Parser.parseBlockBody (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11642:10)\n    at Parser.parseBlock (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11626:10)\n    at Parser.parseFunctionBody (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10634:24)\n    at Parser.parseFunctionBodyAndFinish (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10617:10)\n    at /home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11796:12\n    at Parser.withTopicForbiddingContext (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10956:14)\n    at Parser.parseFunction (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11795:10)\n    at Parser.parseFunctionStatement (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11427:17)\n    at Parser.parseStatementContent (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11119:21)\n    at Parser.parseStatement (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11081:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11656:25)\n    at Parser.parseBlockBody (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11642:10)\n    at Parser.parseTopLevel (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11012:10)\n    at Parser.parse (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:12637:10)\n    at parse (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:12688:38)\n    at parser (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/gensync/index.js:254:32)");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUNPTlMvY2FsZW5kYXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9JQ09OUy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Byb2plY3RzL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9wcm9qZWN0cy9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9zdHlsZS9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9zdHlsZS9wcmlvcml0eS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvc3R5bGUvcmVzaXplLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9hZGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2RldGFpbHNJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZGV0YWlsc1RvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZG9uZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9TQ1NTL3N0eWxlLnNjc3M/ODE0YiJdLCJuYW1lcyI6WyJNZW51QnRuIiwiUmVzaXplIiwiUHJpb3JpdHkiLCJwcm9qZWN0cyIsIkRlZmF1bHRQcm9qZWN0cyIsImluaXRpYWxSZW5kZXIiLCJBZGRUYXNrQnRuIiwiRGV0YWlscyIsInRlc3RCdG4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJ0YWJsZSIsImdldFByb2plY3RzIiwiYWxsUHJvamVjdHMiLCJwcm9qZWN0RmFjdG9yeSIsInRpdGxlIiwidGFza3MiLCJEZWZhdWx0VGFza3MiLCJpc0FjdGl2ZSIsInNob3dQcm9qZWN0cyIsImJyb2FkZW5Qcm9qZWN0Q29udGFpbmVyIiwiZ2V0RWxlbWVudHNUb0Jyb2FkIiwiZWxlbWVudCIsInRvZ2dsZUJyb2FkIiwibWluaW1pemVQcm9qZWN0Q29udGFpbmVyIiwiYWRkQnJvYWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b2dnbGUiLCJjb250ZW50IiwicHJvamVjdExpc3QiLCJwcm9qZWN0IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInByb2plY3RJY29uIiwicHJvamVjdFRpdGxlQ291bnRDb250YWluZXIiLCJkZWxldGVQcm9qZWN0QnRuIiwibmV3UHJvamVjdEZvcm0iLCJuZXdQcm9qZWN0Iiwic3VibWl0UHJvamVjdCIsImVsZW1lbnRzIiwic3RhcnNDaGFuZ2VDb2xvcnMiLCJhY3RpdmF0ZUZpcnN0U3RhciIsImFjdGl2YXRlU2Vjb25kU3RhciIsImFjdGl2YXRlVGhpcmRTdGFyIiwiZ2V0U3RhcjEiLCJhY3RpdmF0ZVN0YXIiLCJnZXRTdGFyMiIsImdldFN0YXIzIiwibnVtYmVyIiwibG9nIiwib3V0bGluZVNlY29uZFN0YXIiLCJvdXRsaW5lVGhpcmRTdGFyIiwicmVtb3ZlQ29sb3JGcm9tQWxsU3RhcnMiLCJhZGRNZWRpdW1Pbm1vdXNlb3ZlciIsImZpbGxTZWNvbmRTdGFyIiwiYWRkQ29sb3JUd29TdGFycyIsImRlY29sb3JUaGlyZFN0YXIiLCJmaWxsVGhpcmRTdGFyIiwiYWRkQ29sb3JUaHJlZVN0YXJzIiwicmVtb3ZlTWVkaXVtT25tb3VzZW92ZXIiLCJjaGlsZHJlbiIsInNldEF0dHJpYnV0ZSIsInJlbW92ZSIsInN0YXJJc091dGxpbmVkIiwic3RhciIsImdldEF0dHJpYnV0ZSIsImRlY29sb3JGaXJzdFN0YXIiLCJkZWNvbG9yU2Vjb25kU3RhciIsInJlc3BvbnNpdmUiLCJtYWluIiwiZGV0YWlscyIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJhZGRMaXN0ZW5lciIsInNjcmVlbkxlc3NUaGVuMTAyNCIsImdldENvbXB1dGVkRGlzcGxheSIsInN0eWxlIiwiZ3JpZENvbHVtbiIsIm1hdGNoZXMiLCJhZGRUYXNrVG8iLCJhcnIiLCJzdWJtaXRUb2RvQnRuIiwiYWRkVGFzayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoVGFza1RvIiwicmVmcmVzaFByb2plY3RzIiwicHVzaCIsImdldFRhc2siLCJ0YXNrIiwidGFza0ZhY3RvcnkiLCJnZXRJbnB1dFZhbHVlIiwiY2xlYXJUYXNrSW5wdXQiLCJ2YWx1ZSIsImdldFRhc2tzQnlOdW1iZXIiLCJidW5kbGUxIiwiZGF0ZSIsInByaW9yaXR5Iiwibm90ZSIsImJ1bmRsZTIiLCJidW5kbGUzIiwiZG9uZSIsImRlbGV0ZVRhc2tzRnJvbSIsImJ1dHRvbnMiLCJidXR0b24iLCJkZWxldGVCdG5SZW1vdmVUYXNrIiwiZSIsImJ0bklkIiwiY3VycmVudFRhcmdldCIsImlkIiwic3BsaXQiLCJjbG9zZURldGFpbHNPZkRlbGV0ZWRUYXNrIiwic3BsaWNlIiwicmVuZGVyQWxsVGFza3NGcm9tIiwic3RvcFByb3BhZ2F0aW9uIiwiRGV0YWlsc1RvZ2dsZSIsInB1dFRhc2tJbmZvVG9JbnB1dCIsInNldE5hbWUiLCJzZXREYXRlIiwic2V0UGlvcml0eSIsInNldE5vdGUiLCJjaGFuZ2VUYXNrT25JbnB1dCIsImNoYW5nZVRpdGxlT25JbnB1dCIsImNoYW5nZURhdGVPbklucHV0IiwiY2hhbmdlUHJpb3JpdHlPbklucHV0IiwiY2hhbmdlTm90ZU9uSW5wdXQiLCJpbnB1dCIsIm9uaW5wdXQiLCJjaGFuZ2VUaXRsZSIsInRhc2tOdW1iZXIiLCJjaGFuZ2VEYXRlIiwiZm9ybWF0RGF0ZTIiLCJzdGFycyIsImNoYW5nZVByaW9yaXR5IiwiZ2V0UHJpb3JpdHlJbnB1dCIsInN0YXIxIiwiY29udGFpbnMiLCJjaGFuZ2VOb3RlIiwibmFtZSIsImZvcm1hdERhdGUiLCJsZXZlbCIsImRheSIsIm1vbnRoIiwieWVhciIsImZvcm1hdHRlZCIsInRhc2tzVG9nZ2xlRGV0YWlscyIsInRvZG9MaXN0U2hvd0RldGFpbHMiLCJBcnJvd0hpZGVEZXRhaWxzIiwidGFza0lkIiwidG9nZ2xlRGV0YWlscyIsIkRldGFpbHNJbnB1dCIsImFycm93QnRuIiwiaGlkZURldGFpbHMiLCJpZE51bWJlciIsImdldERldGFpbHNDb250YWluZXJJZE51bWJlciIsImRldGFpbHNBcmVTaG93biIsInNob3dEZXRhaWxzIiwiZGV0YWlsc0NvbnRhaW5lcklkIiwic2V0RGV0YWlsc0lkVG8iLCJtYWtlRGV0YWlsc0RlZmF1bHQiLCJoaWRlIiwic2hvd0FzRmxleCIsImNvbXB1dGVkRGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZGlzcGxheSIsImRvbmVCdG5zIiwiY2hlY2tib3hlcyIsImNoZWNrYm94IiwiZG9uZUJ0bkNvbXBsZXRlVGFzayIsImNib3hJZCIsInBhcmVudE5vZGUiLCJjbG9zZURldGFpbHNPZkNvbXBsZXRlZFRhc2siLCJmcm9tIiwiY2xlYXJDb250ZW50T2YiLCJlbnRyaWVzIiwiaW5kZXgiLCJpdGVtIiwicmVuZGVyVGFzayIsIkRlbGV0ZVRhc2tCdG5zIiwiVGFza0RvbmUiLCJ0b2dnbGVEb25lSWNvbnMiLCJjb250ZW50Q29udGFpbmVyIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiaSIsImFwcGVuZCIsImNyZWF0ZVRhc2siLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVMYWJlbCIsImNyZWF0ZUlucHV0IiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZURlbGV0ZUJ0biIsImxhYmVsIiwiaHRtbEZvciIsImNyZWF0ZURvbmVJY29uIiwiY29udGFpbmVyIiwiaWNvbiIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGl0bGUiLCJjcmVhdGVEZXRhaWxzIiwic3RyIiwidGV4dENvbnRlbnQiLCJjcmVhdGVGcm9tIiwiY3JlYXRlRHVlIiwiY3JlYXRlUHJpb3JpdHkiLCJjcmVhdGVOb3RlIiwic3BhbiIsImR1ZSIsImRhdGVPdmVyZHVlIiwiY3JlYXRlQ2FsZW5kYXJJbWFnZSIsImNyZWF0ZVNwYW5Gb3JEYXRlIiwidG9kYXkiLCJEYXRlIiwidGFza0RhdGUiLCJpbWciLCJDYWxlbmRhciIsImNyZWF0ZVNwYW5Gb3JQcmlvcml0eSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJub3RlSWNvbiIsIk5vdGUiLCJ0ZXh0IiwiYnRuIiwiZG9uZXMiLCJwYXJlbnRFbGVtZW50IiwiaWNvbkNvbnRhaW5lciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFD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QUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJidW5kbGUuOWI2MTlmYzQzODNjODhiMThlZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9KUy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxuQGtleWZyYW1lcyByb3RhdGlvbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBhcHBlYXJGcm9tUmlnaHRQcm9qZWN0IHtcXG4gIDAlIHtcXG4gICAgbGVmdDogMzBweDtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHVzZXItc2VsZWN0OiBub25lOyB9XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBiYWNrZ3JvdW5kOiAjZTllOWU5OyB9XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvIDMzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIiBcXFwicHJvamVjdHMgbWFpbiB0b2RvLW1pc2NcXFwiOyB9XFxuICAjY29udGVudC5icm9hZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjhweCBhdXRvIDMzMHB4OyB9XFxuXFxuLyogLS0tIFRPUCBvZiB0aGUgUEFHRSA6IEhFQURFUiAtLS0gKi9cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxMDY4Nzc7XFxuICBjb2xvcjogI2Y0ZjRmNDtcXG4gIGZvbnQtc2l6ZTogMS45ZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQZXJtYW5lbnQgTWFya2VyXFxcIiwgY3Vyc2l2ZTtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7IH1cXG4gIGhlYWRlciAjbWVudS1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgaGVhZGVyICNtZW51LWljb246aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICMwYjUwNWM7IH1cXG4gIGhlYWRlciAjaGVhZGVyLXRpdGxlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XFxuICBoZWFkZXIgI3NvY2lhbHMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLyogTEVGVCBTSURFIE9GIFRIRSBQQUdFOiBQUk9KRUNUUyAqL1xcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHByb2plY3RzO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogOHB4IDBweCA1cHggLTRweCAjY2FjYWNhO1xcbiAgLW1vei1ib3gtc2hhZG93OiA4cHggMHB4IDVweCAtNHB4ICNjYWNhY2E7XFxuICBib3gtc2hhZG93OiA4cHggMHB4IDVweCAtNHB4ICNjYWNhY2E7XFxuICAvKiBMRUZULVNJREUgT0YgVEhFIFBBR0U6IFVzZXIgSW5wdXQqLyB9XFxuICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCB7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gICAgbWF4LXdpZHRoOiAyODBweDsgfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdC5icm9hZCB7XFxuICAgICAgd2lkdGg6IDY4cHg7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xcbiAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0LmJyb2FkIHtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjJweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdC5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7XFxuICAgICAgICBmb250LXdlaWdodDogOTAwOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3Q6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIGFuaW1hdGlvbjogYXBwZWFyRnJvbVJpZ2h0UHJvamVjdCAwLjNzIGVhc2Utb3V0IGZvcndhcmRzOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3Q6bm90KC5hY3RpdmUpOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1pY29uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtaWNvbi5icm9hZCB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWNvdW50LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyLmJyb2FkIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LW5hbWUge1xcbiAgICAgICAgd2lkdGg6IDE1NXB4O1xcbiAgICAgICAgbWF4LXdpZHRoOiAxNTVweDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuY291bnQtdG9kb3Mge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIHdpZHRoOiAyOXB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4OyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgICAgY29sb3I6ICNjNWM1YzU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuLmJyb2FkIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiAjOTk5OTk5OyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuOmZvY3VzIHtcXG4gICAgICAgICAgY29sb3I6ICM2ZTZlNmU7IH1cXG4gICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgbWF4LXdpZHRoOiAyODBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBJbnB1dCAqL1xcbiAgICAvKiBTdWJtaXQgYnV0dG9uICovIH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtLmJyb2FkIHtcXG4gICAgICB3aWR0aDogNjhweDtcXG4gICAgICBtYXJnaW46IDA7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdCB7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNmI2YjZiO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDlweCAwO1xcbiAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgY29sb3I6ICM2YjZiNmI7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdC5icm9hZCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdDpmb2N1cyB7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM4ZWY3ZDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0IHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogMHB4O1xcbiAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDZweDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3QuYnJvYWQge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGxlZnQ6IDRweDtcXG4gICAgICAgIHBhZGRpbmc6IDdweCAxOHB4OyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdCBpb24taWNvbiB7XFxuICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4O1xcbiAgICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmhvdmVyOjphZnRlciB7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOGVmN2Q7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDpob3ZlciBpb24taWNvbiB7XFxuICAgICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuXFxuLyogTWlkZGxlOiBQcm9qZWN0IHRpdGxlLCB0b2RvIHRhc2tzKi9cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIG1pbi13aWR0aDogMzc3cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggI2NhY2FjYTtcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4ICNjYWNhY2E7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggI2NhY2FjYTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIC8qIFVzZXIgaW5wdXQgdG9kbyB0YXNrcyovIH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICBtYWluIHtcXG4gICAgICBncmlkLWNvbHVtbjogMiAvIDQ7IH0gfVxcbiAgbWFpbiAjcHJvamVjdC10aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMS40ZW07IH1cXG4gIG1haW4gLnRvZG8ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCBhdXRvIDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjaGVja2JveCB0b2RvdGV4dCBidG5cXFwiO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC8qIEN1c3RvbSBtYWRlIGNoZWNrYm94IHdpdGggYWZ0ZXIgZWxlbWVudCAqL1xcbiAgICAvKiBUZXh0IG9mIHRoZSB0b2RvIHRhc2sgd2l0aCBkZXRhaWxzICovIH1cXG4gICAgbWFpbiAudG9kbzpob3ZlciB7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggI2U0ZTRlNDtcXG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCAjZTRlNGU0O1xcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCAjZTRlNGU0OyB9XFxuICAgIG1haW4gLnRvZG86aG92ZXIgLmRlbGV0ZS10b2RvLWJ0biB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgIGFuaW1hdGlvbjogYXBwZWFyRnJvbVJpZ2h0UHJvamVjdCAwLjNzIGVhc2Utb3V0IGZvcndhcmRzOyB9XFxuICAgIG1haW4gLnRvZG8gbGFiZWwge1xcbiAgICAgIGdyaWQtYXJlYTogY2hlY2tib3g7IH1cXG4gICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXI6OmFmdGVyIHtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzVjNWM1O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC43czsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lciBpb24taWNvbiB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4OyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyOmhvdmVyOjphZnRlciB7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMmIwZTk7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXI6aG92ZXIgaW9uLWljb24ge1xcbiAgICAgICAgICBjb2xvcjogI2UyYjBlOTtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLW91dDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lci5jb21wbGV0ZWQ6aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2M1YzVjNSAhaW1wb3J0YW50OyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyLmNvbXBsZXRlZCBpb24taWNvbiB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gICAgICAgICAgY29sb3I6ICNjNWM1YzU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTsgfVxcbiAgICBtYWluIC50b2RvIC50b2RvLWNoZWNrYm94IHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCB7XFxuICAgICAgZ3JpZC1hcmVhOiB0b2RvdGV4dDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG4gICAgICBtYWluIC50b2RvIC50b2RvLXRleHQuZG9uZSB7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgICAgIGNvbG9yOiAjYzVjNWM1ICFpbXBvcnRhbnQ7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dC5kb25lIC5tZWRpdW0tcHJpb3JpdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQuZG9uZSAuaGlnaC1wcmlvcml0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dC5kb25lIC5kdWUtZGF0ZSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dC5kb25lIC5vdmVyZHVlLWRhdGUge1xcbiAgICAgICAgICBjb2xvcjogI2M1YzVjNSAhaW1wb3J0YW50OyB9XFxuICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC50b2RvLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xcbiAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDsgfVxcbiAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyB7XFxuICAgICAgICBmb250LXNpemU6IDAuOGVtOyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmZyb20tcHJvamVjdCxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAuZHVlLWRhdGUsXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLm1lZGl1bS1wcmlvcml0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAuaGlnaC1wcmlvcml0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAubm90ZS1wcmVzZW5jZSB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5mcm9tLXByb2plY3Q6ZW1wdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmR1ZS1kYXRlOmVtcHR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5tZWRpdW0tcHJpb3JpdHk6ZW1wdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmhpZ2gtcHJpb3JpdHk6ZW1wdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLm5vdGUtcHJlc2VuY2U6ZW1wdHkge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyBzcGFuIGltZyB7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgdG9wOiAycHg7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4OyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgc3Bhbi5vdmVyZHVlLWRhdGUge1xcbiAgICAgICAgICBjb2xvcjogcmVkOyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgc3Bhbi5oaWdoLXByaW9yaXR5IHtcXG4gICAgICAgICAgY29sb3I6ICM3MzAwZmY7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyBzcGFuLm1lZGl1bS1wcmlvcml0eSB7XFxuICAgICAgICAgIGNvbG9yOiAjMTA2ODc3OyB9XFxuICAgIG1haW4gLnRvZG8gLmRlbGV0ZS10b2RvLWJ0biB7XFxuICAgICAgZ3JpZC1hcmVhOiBidG47XFxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICBjb2xvcjogI2Q0ZDRkNDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4yczsgfVxcbiAgICAgIG1haW4gLnRvZG8gLmRlbGV0ZS10b2RvLWJ0bjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzQ5NDA0MDsgfVxcbiAgICAgIG1haW4gLnRvZG8gLmRlbGV0ZS10b2RvLWJ0bjpmb2N1cyB7XFxuICAgICAgICBjb2xvcjogIzkyOTI5MjsgfVxcbiAgbWFpbiBociB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3gtc2hhZG93OiAwIC0xMHB4IDEwcHggLTEwcHggIzhjOGM4YyBpbnNldDsgfVxcbiAgbWFpbiAjbmV3LXRvZG8tZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIElucHV0ICovXFxuICAgIC8qIFN1Ym1pdCBidXR0b24gKi8gfVxcbiAgICBtYWluICNuZXctdG9kby1mb3JtICNuZXctdG9kbyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNmI2YjZiO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDlweCAwO1xcbiAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgY29sb3I6ICM2YjZiNmI7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmOyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjbmV3LXRvZG86Zm9jdXMge1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzOGVmN2Q7IH1cXG4gICAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI25ldy10b2RvOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxuICAgICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogMHB4O1xcbiAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDZweDsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvIGlvbi1pY29uIHtcXG4gICAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7XFxuICAgICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzOyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOmhvdmVyOjphZnRlciB7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOGVmN2Q7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86aG92ZXIgaW9uLWljb24ge1xcbiAgICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcblxcbi8qIFJpZ2h0IHNpZGUgb2YgdGhlIHBhZ2UgKi9cXG4jdG9kby1taXNjLWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHRvZG8tbWlzYztcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB6LWluZGV4OiAxOyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIge1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgICAtbW96LWJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgICAgYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTsgfSB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjdG9kby1uYW1lLWNoYW5nZXItY29udGFpbmVyLFxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlcixcXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIsXFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjbm90ZS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3RvZG8tbmFtZS1jaGFuZ2VyLWNvbnRhaW5lciAjZGF0ZSxcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjZGF0ZSxcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjZGF0ZSxcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI25vdGUtY29udGFpbmVyICNkYXRlIHtcXG4gICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI3RvZG8tbmFtZS1jaGFuZ2VyLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCAwO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0ycHggLTJweCA1cHggLTFweCAjY2FjYWNhO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IC0ycHggLTJweCA1cHggLTFweCAjY2FjYWNhO1xcbiAgICBib3gtc2hhZG93OiAtMnB4IC0ycHggNXB4IC0xcHggI2NhY2FjYTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjdG9kby1uYW1lLWNoYW5nZXItY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgICBoZWlnaHQ6IDQwcHg7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNub3RlLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTNweCA0cHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAtM3B4IDRweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDRweCA1cHggLTJweCAjY2FjYWNhOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNub3RlLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgICAgaGVpZ2h0OiAxNjBweDsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlcixcXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMge1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHkuc2VsZWN0ZWQtMSxcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLmxvdy1wcmlvcml0eS5zZWxlY3RlZC0xLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5LnNlbGVjdGVkLTEsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5sb3ctcHJpb3JpdHkuc2VsZWN0ZWQtMSB7XFxuICAgICAgICBjb2xvcjogIzEwNjg3NzsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5LnNlbGVjdGVkLTIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5sb3ctcHJpb3JpdHkuc2VsZWN0ZWQtMixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLmhpZ2gtcHJpb3JpdHkuc2VsZWN0ZWQtMixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eS5zZWxlY3RlZC0yLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAubG93LXByaW9yaXR5LnNlbGVjdGVkLTIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5oaWdoLXByaW9yaXR5LnNlbGVjdGVkLTIge1xcbiAgICAgICAgY29sb3I6ICM3MzAwZmY7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLm9ubW91c2VvdmVyOmhvdmVyLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAub25tb3VzZW92ZXI6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICMxMDY4Nzc7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eTpob3ZlciB+IC5sb3ctcHJpb3JpdHksXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHk6aG92ZXIgfiAubG93LXByaW9yaXR5IHtcXG4gICAgICAgIGNvbG9yOiAjMTA2ODc3OyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5oaWdoLXByaW9yaXR5OmhvdmVyLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAuaGlnaC1wcmlvcml0eTpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzczMDBmZjsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyBpb24taWNvbixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgaW9uLWljb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI2RhdGUtcmVtb3ZlciBpb24taWNvbixcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjZGF0ZS1yZW1vdmVyIGlvbi1pY29uIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiA0cHg7XFxuICAgICAgY29sb3I6ICM2YjZiNmI7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNkYXRlLXJlbW92ZXIgaW9uLWljb246aG92ZXIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjZGF0ZS1yZW1vdmVyIGlvbi1pY29uOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgLm1pc2MtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBjb2xvcjogIzZiNmI2YjtcXG4gICAgd2lkdGg6IDEyMHB4OyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuMWVtOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgdGV4dGFyZWE6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNjbG9zZS1kZXRhaWxzLWJ0biB7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgd2lkdGg6IDYycHg7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2Nsb3NlLWRldGFpbHMtYnRuIGlvbi1pY29uIHtcXG4gICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4O1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgY29sb3I6ICNjNWM1YzU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggN3B4IC0xM3B4ICNjYWNhY2EsIDBweCA1cHggMTBweCAwcHggI2NhY2FjYTtcXG4gICAgICAtbW96LWJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDdweCAtMTNweCAjY2FjYWNhLCAwcHggNXB4IDEwcHggMHB4ICNjYWNhY2E7XFxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggN3B4IC0xM3B4ICNjYWNhY2EsIDBweCA1cHggMTBweCAwcHggI2NhY2FjYTsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNjbG9zZS1kZXRhaWxzLWJ0biBpb24taWNvbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzZlNmU2ZTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvY2FsZW5kYXIuNzUwNGM4ODlmYzJkOWQ0ZjU0MDBiYTY5OGIyNTQzNzcuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2VkaXQuMjkyN2Y4ZGU0MjY4YmFlOGYxMWM0ZGZlM2FkYzcyYjUuc3ZnXCI7IiwiaW1wb3J0IFwiLi4vU0NTUy9zdHlsZS5zY3NzXCI7XG5pbXBvcnQgKiBhcyBNZW51QnRuIGZyb20gXCIuL3N0eWxlL21lbnUuanNcIjtcbmltcG9ydCAqIGFzIFJlc2l6ZSBmcm9tIFwiLi9zdHlsZS9yZXNpemUuanNcIjtcbmltcG9ydCAqIGFzIFByaW9yaXR5IGZyb20gXCIuL3N0eWxlL3ByaW9yaXR5LmpzXCI7XG5pbXBvcnQgKiBhcyBEZWZhdWx0UHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHMvZGVmYXVsdHMuanNcIjtcbmltcG9ydCB7IGluaXRpYWxSZW5kZXIgfSBmcm9tIFwiLi9wcm9qZWN0cy9yZW5kZXIuanNcIjtcbmltcG9ydCAqIGFzIEFkZFRhc2tCdG4gZnJvbSBcIi4vdGFza3MvYWRkLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzIGZyb20gXCIuL3Rhc2tzL2RldGFpbHNJbnB1dC5qc1wiO1xuXG4vLyBTdHlsZVxuTWVudUJ0bi5zaG93UHJvamVjdHMoKTtcblJlc2l6ZS5yZXNwb25zaXZlKCk7XG5Qcmlvcml0eS5zdGFyc0NoYW5nZUNvbG9ycygpO1xuXG4vLyBBcHAgbG9naWNcblxuLy9jcmVhdGUgbWFpbiBsaXN0IG9mIHByb2plY3RzXG5sZXQgcHJvamVjdHMgPSBbLi4uRGVmYXVsdFByb2plY3RzLmdldFByb2plY3RzKCldO1xuXG4vL3JlbmRlciBmaXJzdCBwcm9qZWN0XG5pbml0aWFsUmVuZGVyKHByb2plY3RzKTtcblxuLy8gQnV0dG9uIHRvIGFkZCB0YXNrIHRvIGEgZGVmaW5lZCBhcnJheVxuLy8gQWxzbyByZXJlbmRlciB0aGUgYXJyYXkgYWZ0ZXIgYWRkaW5nIGEgdGFza1xuQWRkVGFza0J0bi5hZGRUYXNrVG8ocHJvamVjdHMpO1xuXG4vLyBDaGFuZ2UgdGFza3Mgd2hlbiB1c2VyIHR5cGUgc29tZXRoaW5nIHRvIGRldGFpbHMgd2luZG93XG5EZXRhaWxzLmNoYW5nZVRhc2tPbklucHV0KHByb2plY3RzLCAwKTtcblxuLy90ZXN0IGJ1dHRvblxubGV0IHRlc3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvY2lhbHNcIik7XG50ZXN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjb25zb2xlLnRhYmxlKHByb2plY3RzKSk7XG4iLCJpbXBvcnQgeyBwcm9qZWN0RmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcbmltcG9ydCAqIGFzIERlZmF1bHRUYXNrcyBmcm9tIFwiLi4vdGFza3MvZGVmYXVsdHMuanNcIjtcblxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gc2ltcGx5IGNyZWF0ZXMgYW4gYXJyYXkgd2l0aCBkZWZhdWx0IHByb2plY3RzIGluIGl0XG4gIGxldCBhbGxQcm9qZWN0cyA9IFtcbiAgICBwcm9qZWN0RmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJQcm9qZWN0IDFcIixcbiAgICAgIHRhc2tzOiBEZWZhdWx0VGFza3MuZ2V0VGFza3NCeU51bWJlcigxKSxcbiAgICAgIGlzQWN0aXZlOiB0cnVlLFxuICAgIH0pLFxuICAgIHByb2plY3RGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIlByb2plY3QgMlwiLFxuICAgICAgdGFza3M6IERlZmF1bHRUYXNrcy5nZXRUYXNrc0J5TnVtYmVyKDIpLFxuICAgIH0pLFxuICAgIHByb2plY3RGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIlNvbWV0aGluZyB0byBjb25zaWRlclwiLFxuICAgICAgdGFza3M6IERlZmF1bHRUYXNrcy5nZXRUYXNrc0J5TnVtYmVyKDMpLFxuICAgIH0pLFxuICBdO1xuXG4gIHJldHVybiBhbGxQcm9qZWN0cztcbn1cblxuZXhwb3J0IHsgZ2V0UHJvamVjdHMgfTtcbiIsImNvbnN0IHByb2plY3RGYWN0b3J5ID0gZnVuY3Rpb24gKHsgdGl0bGUgPSBcIlwiLCB0YXNrcyA9IFtdLCBpc0FjdGl2ZSA9IGZhbHNlIH0pIHtcbiAgcmV0dXJuIHsgdGl0bGUsIHRhc2tzLCBpc0FjdGl2ZSB9O1xufTtcblxuZXhwb3J0IHsgcHJvamVjdEZhY3RvcnkgfTtcbiIsImZ1bmN0aW9uIHNob3dQcm9qZWN0cygpIHtcbiAgLy8gTWFrZSBtZW51IGJ1dHRvbiBpbiB0aGUgdG9wIGxlZnQgY29ybmVyIGRvIHdvcmsgKGNoYW5nZSBwcm9qZWN0cyB0byB3aWRlIG9yIG5hcnJvdylcbiAgZG9jdW1lbnRcbiAgICAuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWljb25cIilcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGJyb2FkZW5Qcm9qZWN0Q29udGFpbmVyKCkpO1xufVxuXG5mdW5jdGlvbiBicm9hZGVuUHJvamVjdENvbnRhaW5lcigpIHtcbiAgLy8gVGFrZSBhbiBhcnJheSBvZiBlbGVtZW50cyBmcm9tIHRoZSBwYWdlIGFuZCB0b2dnbGUgYSBjbGFzcyAnYnJvYWQnIG9uIGVhY2hcbiAgZm9yIChsZXQgZWxlbWVudCBvZiBnZXRFbGVtZW50c1RvQnJvYWQoKSkge1xuICAgIHRvZ2dsZUJyb2FkKGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1pbmltaXplUHJvamVjdENvbnRhaW5lcigpIHtcbiAgLy8gVGFrZSBhbiBhcnJheSBvZiBlbGVtZW50cyBmcm9tIHRoZSBwYWdlIGFuZCB0b2dnbGUgYSBjbGFzcyAnYnJvYWQnIG9uIGVhY2hcbiAgZm9yIChsZXQgZWxlbWVudCBvZiBnZXRFbGVtZW50c1RvQnJvYWQoKSkge1xuICAgIGFkZEJyb2FkKGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZEJyb2FkKGVsZW1lbnQpIHtcbiAgLy8gUmVtb3ZlIGNsYXNzICdicm9hZCcgZnJvbSBhbiBlbGVtZW50XG4gIC8vIHRoaXMgY2xhc3MgY2hhbmdlcyBsZWZ0LXNpZGUgcGFnZSBtZW51IG1ha2luZyBpdCBzbWFsbGVyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJyb2FkXCIpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVCcm9hZChlbGVtZW50KSB7XG4gIC8vIEFkZC9yZW1vdmUgY2xhc3MgJ2Jyb2FkJyB0byBhbiBlbGVtZW50XG4gIC8vIHRoaXMgY2xhc3MgY2hhbmdlcyBsZWZ0LXNpZGUgcGFnZSBtZW51IG1ha2luZyBpdCBzbWFsbGVyXG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImJyb2FkXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50c1RvQnJvYWQoKSB7XG4gIC8vIFRha2Ugc29tZSBET00gZWxlbWVudHMgZnJvbSB0aGUgcGFnZVxuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgbGV0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LWxpc3RcIik7XG4gIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RcIik7XG4gIGxldCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0LWljb25cIik7XG4gIGxldCBwcm9qZWN0VGl0bGVDb3VudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgXCJwcm9qZWN0LXRpdGxlLWNvdW50LWNvbnRhaW5lciBcIlxuICApO1xuICBsZXQgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtcHJvamVjdC1idG5cIik7XG4gIGxldCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtZm9ybVwiKTtcbiAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0XCIpO1xuICBsZXQgc3VibWl0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0LXByb2plY3RcIik7XG5cbiAgLy8gUHV0IHRoZW0gaW4gdGhlIGFycmF5IGFuZCByZXR1cm4gaXRcbiAgbGV0IGVsZW1lbnRzID0gW1xuICAgIGNvbnRlbnQsXG4gICAgcHJvamVjdExpc3QsXG4gICAgLi4ucHJvamVjdCxcbiAgICAuLi5wcm9qZWN0SWNvbixcbiAgICAuLi5wcm9qZWN0VGl0bGVDb3VudENvbnRhaW5lcixcbiAgICAuLi5kZWxldGVQcm9qZWN0QnRuLFxuICAgIG5ld1Byb2plY3RGb3JtLFxuICAgIG5ld1Byb2plY3QsXG4gICAgc3VibWl0UHJvamVjdCxcbiAgXTtcbiAgcmV0dXJuIGVsZW1lbnRzO1xufVxuXG5leHBvcnQgeyBzaG93UHJvamVjdHMsIG1pbmltaXplUHJvamVjdENvbnRhaW5lciB9O1xuIiwiZnVuY3Rpb24gc3RhcnNDaGFuZ2VDb2xvcnMoKSB7XG4gIGFjdGl2YXRlRmlyc3RTdGFyKCk7XG4gIGFjdGl2YXRlU2Vjb25kU3RhcigpO1xuICBhY3RpdmF0ZVRoaXJkU3RhcigpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUZpcnN0U3RhcigpIHtcbiAgZ2V0U3RhcjEoKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWN0aXZhdGVTdGFyKDEpKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVTZWNvbmRTdGFyKCkge1xuICBnZXRTdGFyMigpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhY3RpdmF0ZVN0YXIoMikpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVRoaXJkU3RhcigpIHtcbiAgZ2V0U3RhcjMoKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWN0aXZhdGVTdGFyKDMpKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVTdGFyKG51bWJlcikge1xuICAvLyBNYWtlIGEgc3RhciB3aXRoIGEgY2VydGFpbiBudW1iZXIgY2hhbmdlIGl0cyBzdHlsZVxuICAvLyBOdW1iZXIgY2FuIGJlIDEsIDIgb3IgMyBiZWNhdXNlIHRoZXJlIGFyZSBhIHRvdGFsIG9mIDMgc3RhclxuICBpZiAobnVtYmVyIDwgMSB8fCBudW1iZXIgPiAzKVxuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYENhbid0IGFjdGl2YXRlIHN0YXIgJHtudW1iZXJ9IGluIGFjdGl2YXRlU3RhcigpLiBQb3NzaWJsZSB2YWx1ZXM6IDEsIDIsIDNgXG4gICAgKTtcbiAgc3dpdGNoIChudW1iZXIpIHtcbiAgICBjYXNlIDE6XG4gICAgICBvdXRsaW5lU2Vjb25kU3RhcigpO1xuICAgICAgb3V0bGluZVRoaXJkU3RhcigpO1xuICAgICAgcmVtb3ZlQ29sb3JGcm9tQWxsU3RhcnMoKTtcbiAgICAgIGFkZE1lZGl1bU9ubW91c2VvdmVyKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICBmaWxsU2Vjb25kU3RhcigpO1xuICAgICAgYWRkQ29sb3JUd29TdGFycygpO1xuICAgICAgb3V0bGluZVRoaXJkU3RhcigpO1xuICAgICAgZGVjb2xvclRoaXJkU3RhcigpO1xuICAgICAgYWRkTWVkaXVtT25tb3VzZW92ZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzpcbiAgICAgIGZpbGxTZWNvbmRTdGFyKCk7XG4gICAgICBmaWxsVGhpcmRTdGFyKCk7XG4gICAgICBhZGRDb2xvclRocmVlU3RhcnMoKTtcbiAgICAgIHJlbW92ZU1lZGl1bU9ubW91c2VvdmVyKCk7XG4gICAgICBicmVhaztcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TRUNPTkQgU1RBUlxuZnVuY3Rpb24gZmlsbFNlY29uZFN0YXIoKSB7XG4gIC8vIEdldCB0aGUgY2hpbGQgb2YgdGhlIHByaW9yaXR5IGFuZCBtYWtlIGl0IGZpbGxlZCBzdGFyXG4gIGdldFN0YXIyKCkuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN0YXJcIik7XG59XG5cbmZ1bmN0aW9uIG91dGxpbmVTZWNvbmRTdGFyKCkge1xuICAvLyBHZXQgdGhlIGNoaWxkIG9mIHRoZSBwcmlvcml0eSBhbmQgbWFrZSBpdCBvdXRsaW5lZCBzdGFyXG4gIGdldFN0YXIyKCkuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN0YXItb3V0bGluZVwiKTtcbn1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVEhJUkQgU1RBUlxuXG5mdW5jdGlvbiBmaWxsVGhpcmRTdGFyKCkge1xuICAvLyBHZXQgdGhlIGNoaWxkIG9mIHRoZSBwcmlvcml0eSBhbmQgbWFrZSBpdCBmaWxsZWQgc3RhclxuICBnZXRTdGFyMygpLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdGFyXCIpO1xufVxuXG5mdW5jdGlvbiBvdXRsaW5lVGhpcmRTdGFyKCkge1xuICAvLyBHZXQgdGhlIGNoaWxkIG9mIHRoZSBwcmlvcml0eSBhbmQgbWFrZSBpdCBvdXRsaW5lZCBzdGFyXG4gIGdldFN0YXIzKCkuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN0YXItb3V0bGluZVwiKTtcbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEhlbHBlcnNcblxuZnVuY3Rpb24gcmVtb3ZlTWVkaXVtT25tb3VzZW92ZXIoKSB7XG4gIC8vIFNlY29uZCBzdGFyIGhhcyBhIGNsYXNzIFwib25tb3VzZW92ZXJcIiB3aXRoIGEgaG92ZXIgZWZmZWN0XG4gIC8vIFdoZW4gdGhlIDNyZCBzdGFyIGlzIGNob3NlbiByZW1vdmUgdGhpcyBob3ZlciBlZmZlY3QgZnJvbSB0aGUgMm5kIHN0YXJcbiAgZ2V0U3RhcjIoKS5jbGFzc0xpc3QucmVtb3ZlKFwib25tb3VzZW92ZXJcIik7XG59XG5cbmZ1bmN0aW9uIGFkZE1lZGl1bU9ubW91c2VvdmVyKCkge1xuICAvLyBTZWNvbmQgc3RhciBoYXMgYSBjbGFzcyBcIm9ubW91c2VvdmVyXCIgd2l0aCBhIGhvdmVyIGVmZmVjdFxuICAvLyBXaGVuIHRoZSAxc3QgT1IgMm5kIHN0YXIgaXMgY2hvc2VuIGFkZCB0aGlzIGhvdmVyIGVmZmVjdCB0byB0aGUgMm5kIHN0YXJcbiAgZ2V0U3RhcjIoKS5jbGFzc0xpc3QuYWRkKFwib25tb3VzZW92ZXJcIik7XG59XG5cbmZ1bmN0aW9uIHN0YXJJc091dGxpbmVkKHN0YXIpIHtcbiAgcmV0dXJuIHN0YXIuY2hpbGRyZW5bMF0uZ2V0QXR0cmlidXRlKFwibmFtZVwiKSA9PT0gXCJzdGFyLW91dGxpbmVcIjtcbn1cblxuZnVuY3Rpb24gYWRkQ29sb3JUd29TdGFycygpIHtcbiAgcmVtb3ZlQ29sb3JGcm9tQWxsU3RhcnMoKTtcbiAgZ2V0U3RhcjEoKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtMVwiKTtcbiAgZ2V0U3RhcjIoKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtMVwiKTtcbn1cbmZ1bmN0aW9uIGFkZENvbG9yVGhyZWVTdGFycygpIHtcbiAgcmVtb3ZlQ29sb3JGcm9tQWxsU3RhcnMoKTtcbiAgZ2V0U3RhcjEoKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtMlwiKTtcbiAgZ2V0U3RhcjIoKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtMlwiKTtcbiAgZ2V0U3RhcjMoKS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWQtMlwiKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ29sb3JGcm9tQWxsU3RhcnMoKSB7XG4gIGRlY29sb3JGaXJzdFN0YXIoKTtcbiAgZGVjb2xvclNlY29uZFN0YXIoKTtcbiAgZGVjb2xvclRoaXJkU3RhcigpO1xufVxuXG5mdW5jdGlvbiBkZWNvbG9yRmlyc3RTdGFyKCkge1xuICBnZXRTdGFyMSgpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC0xXCIpO1xuICBnZXRTdGFyMSgpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC0yXCIpO1xufVxuZnVuY3Rpb24gZGVjb2xvclNlY29uZFN0YXIoKSB7XG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTFcIik7XG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTJcIik7XG59XG5mdW5jdGlvbiBkZWNvbG9yVGhpcmRTdGFyKCkge1xuICBnZXRTdGFyMygpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC0xXCIpO1xuICBnZXRTdGFyMygpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC0yXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFyMSgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0xXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFyMigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0yXCIpO1xufVxuXG5mdW5jdGlvbiBnZXRTdGFyMygpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0zXCIpO1xufVxuXG5leHBvcnQgeyBzdGFyc0NoYW5nZUNvbG9ycywgYWN0aXZhdGVTdGFyIH07XG4iLCJpbXBvcnQgeyBnZXRDb21wdXRlZERpc3BsYXkgfSBmcm9tIFwiLi4vdGFza3MvZGV0YWlsc1RvZ2dsZS5qc1wiO1xuaW1wb3J0IHsgbWluaW1pemVQcm9qZWN0Q29udGFpbmVyIH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuXG5mdW5jdGlvbiByZXNwb25zaXZlKCkge1xuICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIC8vIFJlc2l6aW5nIHdpbmRvdyBtYWtlcyBtaWRkbGUgY29sdW1uIGZpdFxuICB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEwMjRweClcIikuYWRkTGlzdGVuZXIoKCkgPT4ge1xuICAgIC8vIElmIHNjcmVlbiBpcyBuYXJyb3dlciB0aGFuIDEwMjRweCBhbmQgZGV0YWlscyBhcmUgb3BlbiAocmlnaHQgc2lkZSBvZiB0aGUgcGFnZSlcbiAgICAvLyB0aGFuIG1pbmltaXplIGxlZnQgc2lkZSBhbmQgbWFrZSBcIm1haW5cIiBmaXQgdGhlIHdob2xlIHNlY29uZCBjb2x1bW5cbiAgICBpZiAoc2NyZWVuTGVzc1RoZW4xMDI0KCkgJiYgZ2V0Q29tcHV0ZWREaXNwbGF5KGRldGFpbHMpID09PSBcImZsZXhcIikge1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzRcIjtcbiAgICAgIG1pbmltaXplUHJvamVjdENvbnRhaW5lcigpO1xuICAgICAgLy8gRG9lc24ndCBtYXR0ZXIgdGhlIHNpemUgb2YgdGhlIHNjcmVlbixcbiAgICAgIC8vIGlmIGRldGFpbHMgYXJlIGNsb3NlZCAnbWFpbicgZml0IHRoZSB3aG9sZSBzZWNvbmQgY29sdW1uXG4gICAgfSBlbHNlIGlmIChnZXRDb21wdXRlZERpc3BsYXkoZGV0YWlscykgPT09IFwibm9uZVwiKSB7XG4gICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvNFwiO1xuICAgICAgLy8gRWxzZSBmb3IgZS5nLiB3aGVuIHNjcmVlbiBhcmUgd2lkZXIgdGhlbiAxMDI0cHggYW5kXG4gICAgICAvLyBkZXRhaWxzIGFyZSBvcGVuLCB0aGVuIG1haW4gaXMgdGhlIGNvbHVtbiBpbiB0aGUgbWlkZGxlXG4gICAgfSBlbHNlIHtcbiAgICAgIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi8zXCI7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2NyZWVuTGVzc1RoZW4xMDI0KCkge1xuICAvLyBDaGVjayBpZiBzY3JlZW4gaXMgbGVzcyB0aGVuIDEwMjRweCB3aWRlXG4gIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDEwMjRweClcIikubWF0Y2hlcztcbn1cblxuLy8gV2hlbiByZXNpemluZyB3aW5kb3cgbWlkZGxlIGNvbHVtbiByZXNpemUgaXRzZWxmIHRvIGJlIHJlc3BvbnNpdmVcbmV4cG9ydCB7IHJlc3BvbnNpdmUsIHNjcmVlbkxlc3NUaGVuMTAyNCB9O1xuIiwiaW1wb3J0IHsgdGFza0ZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5LmpzXCI7XG5pbXBvcnQgeyByZWZyZXNoUHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvamVjdHMvcmVuZGVyLmpzXCI7XG5cbmZ1bmN0aW9uIGFkZFRhc2tUbyhhcnIpIHtcbiAgY29uc3Qgc3VibWl0VG9kb0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0LXRvZG9cIik7XG5cbiAgc3VibWl0VG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWRkVGFzayhhcnIpKTtcbn1cblxuZnVuY3Rpb24gYWRkVGFzayhhcnIpIHtcbiAgLy8gUHJldmVudCBkZWZhdWx0IHN1Ym1pdCBiZWhhdmlvclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyBMb29wIHRvIGdldCBhY3RpdmUgcHJvamVjdFxuICBmb3IgKGxldCBwcm9qZWN0IG9mIGFycikge1xuICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlKSBwdXNoVGFza1RvKHByb2plY3QudGFza3MpO1xuICB9XG5cbiAgLy8gUmVyZW5kZXIgYXJyYXlcbiAgcmVmcmVzaFByb2plY3RzKGFycik7XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIHB1c2hUYXNrVG8oYXJyKSB7XG4gIC8vIFB1c2ggdGFzayB0byBhcnJheVxuICBhcnIucHVzaChnZXRUYXNrKCkpO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrKCkge1xuICAvLyBHZXQgdXNlciBpbnB1dCB2YWx1ZSwgc2F2ZSBpdFxuICBsZXQgdGFzayA9IHRhc2tGYWN0b3J5KHsgdGl0bGU6IGdldElucHV0VmFsdWUoKSB9KTtcbiAgLy8gYW5kIGNsZWFyIGlucHV0XG4gIGNsZWFyVGFza0lucHV0KCk7XG4gIHJldHVybiB0YXNrO1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAvLyBHZXQgdXNlciBpbnB1dCB2YWx1ZSBhcyBOZXcgVGFzayA6IFNUUklOR1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdG9kb1wiKS52YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrSW5wdXQoKSB7XG4gIC8vIENsZWFyIHVzZXIgaW5wdXRcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdG9kb1wiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmV4cG9ydCB7IGdldFRhc2ssIGFkZFRhc2tUbyB9O1xuIiwiaW1wb3J0IHsgdGFza0ZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5LmpzXCI7XG5cbmZ1bmN0aW9uIGdldFRhc2tzQnlOdW1iZXIobnVtYmVyID0gMSkge1xuICAvLyBUaGlzIGZ1bmN0aW9uIHNpbXBseSBjcmVhdGVzIGFuIGFycmF5IHdpdGggZGVmYXVsdCB0YXNrcyBpbiBpdFxuICAvLyBOdW1iZXIgaXMganVzdCBhIG51bWJlciBvZiBidW5kbGUgZnJvbSAxIHRvIDNcbiAgbGV0IGJ1bmRsZTEgPSBbXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTGVhcm4gZW5nbGlzaFwiLFxuICAgICAgZGF0ZTogXCIxNS4wMy4yMDI1XCIsXG4gICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgIG5vdGU6IFwic29tZXRoaW5nXCIsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTGVhcm4gZW5nbGlzaCBhZ2FpblwiLFxuICAgICAgZGF0ZTogXCIxNS4wMy4yMDI4XCIsXG4gICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJBbmQgQWdhaW4hXCIsXG4gICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgIG5vdGU6IFwic29tZXRoaW5nXCIsXG4gICAgfSksXG4gIF07XG5cbiAgbGV0IGJ1bmRsZTIgPSBbXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTGVhcm4gZ2VybWFuXCIsXG4gICAgICBkYXRlOiBcIjE1LjAzLjIwMThcIixcbiAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICAgIG5vdGU6IFwic29tZXRoaW5nXCIsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTGVhcm4gTWF0aCFcIixcbiAgICAgIGRhdGU6IFwiMTUuMDMuMjAxOFwiLFxuICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgIH0pLFxuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxFSFJORSBERVVUU0NIISEhXCIsXG4gICAgICBkYXRlOiBcIjE1LjAzLjIwMThcIixcbiAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICB9KSxcbiAgXTtcblxuICBsZXQgYnVuZGxlMyA9IFtcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJNYWtlIHN0dWZmXCIsXG4gICAgICBub3RlOiBcInNvbWV0aGluZ1wiLFxuICAgICAgZG9uZTogdHJ1ZSxcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJEbyBzdHVmZlwiLFxuICAgICAgZGF0ZTogXCIxMC4wMS4yMDIwXCIsXG4gICAgICBkb25lOiB0cnVlLFxuICAgIH0pLFxuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIlJ1biBzdHVmZlwiLFxuICAgICAgbm90ZTogXCJzb21ldGhpbmdcIixcbiAgICAgIGRvbmU6IHRydWUsXG4gICAgfSksXG4gIF07XG5cbiAgc3dpdGNoIChudW1iZXIpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gYnVuZGxlMTtcblxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBidW5kbGUyO1xuXG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIGJ1bmRsZTM7XG4gIH1cbn1cblxuZXhwb3J0IHsgZ2V0VGFza3NCeU51bWJlciB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcblxuZnVuY3Rpb24gZGVsZXRlVGFza3NGcm9tKGFycikge1xuICAvLyBUYWtlIHRoZSBjb2xsY2V0aW9uIG9mIGFsbCBkZWxldGUgY3Jvc3MgYnV0dG9ucyBmcm9tIHRhc2tzIGJ5IGNsYXNzIG5hbWVcbiAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXRvZG8tYnRuXCIpO1xuICAvLyBMb29wIHRocm91Z2ggY29sbGVjdGlvbiBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggYnV0dG9uXG4gIGZvciAobGV0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG4gICAgZGVsZXRlQnRuUmVtb3ZlVGFzayhidXR0b24sIGFycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQnRuUmVtb3ZlVGFzayhidXR0b24sIGFycikge1xuICAvLyBGdW5jdGlvbiB0byBhc3NpZ24gRXZlbnQgbGlzdGVuZXIgdG8gYnV0dG9uc1xuICAvLyB0byByZW1vdmUgcGFydGljdWxhciB0YXNrcyBmcm9tIHBhZ2VcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIGdldCBJZCBvZiBhIGJ1dHRvbiB0byB3aGljaCBsaXN0ZW5lciBpcyBhc3NpZ25lZFxuICAgIGxldCBidG5JZCA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAvLyBnZXQgb25seSBudW1iZXIgYWZ0ZXIgdGhlIGh5cGhlbiBmcm9tIElkXG4gICAgbGV0IG51bWJlciA9IGJ0bklkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAvLyBCZWZvcmUgcmVtb3ZpbmcgYW4gaXRlbSBtYWtlIHN1cmUgdG8gY2xvc2UgaXRzIGRldGFpbHNcbiAgICBjbG9zZURldGFpbHNPZkRlbGV0ZWRUYXNrKG51bWJlcik7XG4gICAgLy8gUmVtb3ZlIGl0ZW0gZnJvbSB0aGUgYXJyYXkgYnkgdGhhdCBudW1iZXJcbiAgICBhcnIuc3BsaWNlKG51bWJlciwgMSk7XG4gICAgLy8gUmVyZW5kZXIgYXJyYXlcbiAgICByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKTtcbiAgICAvLyBBdm9pZCBmaXJpbmcgcGFyZW50IGVsZW1lbnQgbGlzdGVuZXIgYWZ0ZXIgY2xpY2tpbmcgb24gdGhlIGJ1dHRvblxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZURldGFpbHNPZkRlbGV0ZWRUYXNrKG51bWJlcikge1xuICAvLyBCZWZvcmUgcmVtb3ZpbmcgYW4gaXRlbSBtYWtlIHN1cmUgaGlzIGRldGFpbHMgYXJlIG5vdCBzaG93blxuICAvLyBJZiB0aGV5IGFyZSB0aGVuIGhpZGUgdGhlbVxuICBpZiAoRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKSA9PT0gbnVtYmVyKVxuICAgIERldGFpbHNUb2dnbGUuaGlkZURldGFpbHMoKTtcbn1cblxuZXhwb3J0IHsgZGVsZXRlVGFza3NGcm9tIH07XG4iLCJpbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcbmltcG9ydCB7IGFjdGl2YXRlU3RhciB9IGZyb20gXCIuLi9zdHlsZS9wcmlvcml0eS5qc1wiO1xuaW1wb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5cbmZ1bmN0aW9uIHB1dFRhc2tJbmZvVG9JbnB1dCh0YXNrKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIHB1dCBpbmZvIGZyb20gdGFza3MgaW4gaW5wdXRzIHdoZW4gZGV0YWlscyBhcmUgc2hvd25cbiAgc2V0TmFtZSh0YXNrLnRpdGxlKTtcbiAgc2V0RGF0ZSh0YXNrLmRhdGUpO1xuICBzZXRQaW9yaXR5KHRhc2sucHJpb3JpdHkpO1xuICBzZXROb3RlKHRhc2subm90ZSk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhc2tPbklucHV0KHByb2plY3RzLCBudW1iZXIpIHtcbiAgLy8gQ2hhbmdlIGEgdGFzayB3aXRoIGlucHV0IGZyb20gRGV0YWlscyBXaW5kb3dcbiAgY2hhbmdlVGl0bGVPbklucHV0KHByb2plY3RzW251bWJlcl0udGFza3MpO1xuICBjaGFuZ2VEYXRlT25JbnB1dChwcm9qZWN0c1tudW1iZXJdLnRhc2tzKTtcbiAgY2hhbmdlUHJpb3JpdHlPbklucHV0KHByb2plY3RzW251bWJlcl0udGFza3MpO1xuICBjaGFuZ2VOb3RlT25JbnB1dChwcm9qZWN0c1tudW1iZXJdLnRhc2tzKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGl0bGVPbklucHV0KGFycikge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbmFtZS1jaGFuZ2VyXCIpO1xuXG4gIGlucHV0Lm9uaW5wdXQgPSAoKSA9PiBjaGFuZ2VUaXRsZShhcnIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUaXRsZShhcnIpIHtcbiAgLy8gZ2V0IG51bWJlciBvZiB0YXNrIGZyb20gZGV0YWlsc1xuICBsZXQgdGFza051bWJlciA9IERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCk7XG4gIC8vIFVzZSB0aGlzIG51bWJlciB0byBnZXQgdG8gdGFzay50aXRsZSBpbiBhcnJheVxuICBsZXQgdGFzayA9IGFyclt0YXNrTnVtYmVyXTtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW5hbWUtY2hhbmdlclwiKTtcbiAgLy8gVGFzayB0aXRsZSBpcyBub3cgdXNlciBpbnB1dCB2YWx1ZVxuICB0YXNrLnRpdGxlID0gaW5wdXQudmFsdWU7XG4gIC8vIHJlcmVuZGVyIHRvIHNlZSB0aGUgY2hhbmdlc1xuICByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRGF0ZU9uSW5wdXQoYXJyKSB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcblxuICBpbnB1dC5vbmlucHV0ID0gKCkgPT4gY2hhbmdlRGF0ZShhcnIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VEYXRlKGFycikge1xuICAvLyBnZXQgbnVtYmVyIG9mIHRhc2sgZnJvbSBkZXRhaWxzXG4gIGxldCB0YXNrTnVtYmVyID0gRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKTtcbiAgLy8gVXNlIHRoaXMgbnVtYmVyIHRvIGdldCB0byB0YXNrLmRhdGUgaW4gYXJyYXlcbiAgbGV0IHRhc2sgPSBhcnJbdGFza051bWJlcl07XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcbiAgLy8gVGFzayBkYXRlIGlzIG5vdyBmb3JtYXR0ZWQgZGF0ZSBpbnB1dCB2YWx1ZVxuICB0YXNrLmRhdGUgPSBmb3JtYXREYXRlMihpbnB1dC52YWx1ZSk7XG4gIC8vIHJlcmVuZGVyIHRvIHNlZSB0aGUgY2hhbmdlc1xuICByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHlPbklucHV0KGFycikge1xuICBsZXQgc3RhcnMgPSBbXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTFcIiksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTJcIiksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTNcIiksXG4gIF07XG5cbiAgZm9yIChsZXQgc3RhciBvZiBzdGFycykge1xuICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNoYW5nZVByaW9yaXR5KGFycikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KGFycikge1xuICAvLyBnZXQgbnVtYmVyIG9mIHRhc2sgZnJvbSBkZXRhaWxzXG4gIGxldCB0YXNrTnVtYmVyID0gRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKTtcbiAgLy8gVXNlIHRoaXMgbnVtYmVyIHRvIGdldCB0byB0YXNrLmRhdGUgaW4gYXJyYXlcbiAgbGV0IHRhc2sgPSBhcnJbdGFza051bWJlcl07XG4gIGxldCBpbnB1dCA9IGdldFByaW9yaXR5SW5wdXQoKTtcbiAgLy8gVGFzayBkYXRlIGlzIG5vdyBmb3JtYXR0ZWQgZGF0ZSBpbnB1dCB2YWx1ZVxuICB0YXNrLnByaW9yaXR5ID0gaW5wdXQ7XG4gIC8vIHJlcmVuZGVyIHRvIHNlZSB0aGUgY2hhbmdlc1xuICByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJpb3JpdHlJbnB1dCgpIHtcbiAgbGV0IHN0YXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTFcIik7XG5cbiAgaWYgKHN0YXIxLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkLTFcIikpIHtcbiAgICByZXR1cm4gXCJtZWRpdW1cIjtcbiAgfSBlbHNlIGlmIChzdGFyMS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZC0yXCIpKSB7XG4gICAgcmV0dXJuIFwiaGlnaFwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcImxvd1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU5vdGVPbklucHV0KGFycikge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGUtY2hhbmdlclwiKTtcblxuICBpbnB1dC5vbmlucHV0ID0gKCkgPT4gY2hhbmdlTm90ZShhcnIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VOb3RlKGFycikge1xuICAvLyBnZXQgbnVtYmVyIG9mIHRhc2sgZnJvbSBkZXRhaWxzXG4gIGxldCB0YXNrTnVtYmVyID0gRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKTtcbiAgLy8gVXNlIHRoaXMgbnVtYmVyIHRvIGdldCB0byB0YXNrLm5vdGUgaW4gYXJyYXlcbiAgbGV0IHRhc2sgPSBhcnJbdGFza051bWJlcl07XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1jaGFuZ2VyXCIpO1xuICAvLyBUYXNrIE5vdGUgaXMgbm93IGZvcm1hdHRlZCBOb3RlIGlucHV0IHZhbHVlXG4gIHRhc2subm90ZSA9IGlucHV0LnZhbHVlO1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTZXQgaW5wdXRcbmZ1bmN0aW9uIHNldE5hbWUobmFtZSkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbmFtZS1jaGFuZ2VyXCIpLnZhbHVlID0gbmFtZTtcbn1cblxuZnVuY3Rpb24gc2V0RGF0ZShkYXRlKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZSA9IGZvcm1hdERhdGUoZGF0ZSk7XG4gIGZvcm1hdERhdGUoZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHNldFBpb3JpdHkobGV2ZWwpIHtcbiAgaWYgKGxldmVsID09PSBcImhpZ2hcIikge1xuICAgIGFjdGl2YXRlU3RhcigzKTtcbiAgfSBlbHNlIGlmIChsZXZlbCA9PT0gXCJtZWRpdW1cIikge1xuICAgIGFjdGl2YXRlU3RhcigyKTtcbiAgfSBlbHNlIGlmIChsZXZlbCA9PT0gXCJsb3dcIikge1xuICAgIGFjdGl2YXRlU3RhcigxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXROb3RlKG5vdGUpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlLWNoYW5nZXJcIikudmFsdWUgPSBub3RlO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgLy8gSWYgZGF0ZSBpcyB1bmRlZmluZWQgeWV0LCB0aGVuIHJldHVybiBub3RoaW5nIFwiXCJcbiAgaWYgKCFkYXRlKSByZXR1cm4gXCJcIjtcbiAgLy8gRGF0ZSBmb3JtYXR0aW5nOiBmcm9tIFwiZGQubW0ueXl5eVwiIHRvIFwieXl5eS1NTS1kZFwiXG4gIGxldCBkYXkgPSBkYXRlLnNwbGl0KFwiLlwiKVswXTtcbiAgbGV0IG1vbnRoID0gZGF0ZS5zcGxpdChcIi5cIilbMV07XG4gIGxldCB5ZWFyID0gZGF0ZS5zcGxpdChcIi5cIilbMl07XG5cbiAgbGV0IGZvcm1hdHRlZCA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gIHJldHVybiBmb3JtYXR0ZWQ7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUyKGRhdGUpIHtcbiAgLy8gSWYgZGF0ZSBpcyB1bmRlZmluZWQgeWV0LCB0aGVuIHJldHVybiBub3RoaW5nIFwiXCJcbiAgaWYgKCFkYXRlKSByZXR1cm4gXCJcIjtcbiAgLy8gRGF0ZSBmb3JtYXR0aW5nOiBmcm9tICBcInl5eXktTU0tZGRcIiB0byBcImRkLm1tLnl5eXlcIlxuICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi1cIilbMl07XG4gIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCItXCIpWzFdO1xuICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCItXCIpWzBdO1xuXG4gIGxldCBmb3JtYXR0ZWQgPSBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn1gO1xuICByZXR1cm4gZm9ybWF0dGVkO1xufVxuXG5leHBvcnQgeyBwdXRUYXNrSW5mb1RvSW5wdXQsIGNoYW5nZVRhc2tPbklucHV0IH07XG4iLCJpbXBvcnQgeyBzY3JlZW5MZXNzVGhlbjEwMjQgfSBmcm9tIFwiLi4vc3R5bGUvcmVzaXplLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzSW5wdXQgZnJvbSBcIi4vZGV0YWlsc0lucHV0LmpzXCI7XG5cbmZ1bmN0aW9uIHRhc2tzVG9nZ2xlRGV0YWlscyhhcnIpIHtcbiAgLy8gTWFrZSB0b2RvIHRhc2tzIHNob3cgZGV0YWlscyBvbiBjbGljayAoZnJvbSByaWdodCBzaWRlKVxuICB0b2RvTGlzdFNob3dEZXRhaWxzKGFycik7XG4gIC8vIE1ha2UgYnV0dG9uIGluIGRldGFpbHMgaW50ZXJhY3Q6IGhpZGUgZGV0YWlsc1xuICBBcnJvd0hpZGVEZXRhaWxzKCk7XG59XG5cbmZ1bmN0aW9uIHRvZG9MaXN0U2hvd0RldGFpbHMoYXJyKSB7XG4gIC8vIE1ha2UgdG9kbyBsaXN0cyBzaG93IGRldGFpbHMgb25jbGlja1xuICBsZXQgdGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb1wiKTtcblxuICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIGdldCBJZCBvZiBhIHRhc2sgdG8gd2hpY2ggbGlzdGVuZXIgaXMgYXNzaWduZWRcbiAgICAgIGxldCB0YXNrSWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICAvLyBnZXQgb25seSBudW1iZXIgZnJvbSBJZCBhZnRlciB0aGUgaHlwaGVuXG4gICAgICBsZXQgbnVtYmVyID0gdGFza0lkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAgIC8vIFBhc3MgYSBudW1iZXIgb2YgdGhlIGNsaWNrZWQgdGFzayB0byBkZXRhaWxzXG4gICAgICB0b2dnbGVEZXRhaWxzKG51bWJlcik7XG4gICAgICAvLyBQdXQgaW5mbyBmcm9tIHRhc2tzIGluIGlucHV0cyB3aGVuIGRldGFpbHMgYXJlIHNob3duXG4gICAgICBEZXRhaWxzSW5wdXQucHV0VGFza0luZm9Ub0lucHV0KGFycltudW1iZXJdKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBBcnJvd0hpZGVEZXRhaWxzKCkge1xuICAvLyBNYWtlIEFycm93IGhpZGUgRGV0YWlscyBvbmNsaWNrXG4gIGxldCBhcnJvd0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZGV0YWlscy1idG5cIik7XG4gIGFycm93QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlRGV0YWlscyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURldGFpbHMobnVtYmVyKSB7XG4gIGxldCBpZE51bWJlciA9IGdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpO1xuXG4gIC8vIGlmIGRldGFpbHMgYXJlIHZpc2libGUgb24gdGhlIHBhZ2UgQU5EXG4gIC8vIGlmIHVzZXIgY2xpY2tzIG9uIHRoZSBzYW1lIHRhc2sgMnggdGhhbiBoaWRlIGRldGFpbHNcbiAgaWYgKGRldGFpbHNBcmVTaG93bigpICYmIGlkTnVtYmVyID09PSBudW1iZXIpIHtcbiAgICBoaWRlRGV0YWlscygpO1xuICB9IGVsc2Uge1xuICAgIHNob3dEZXRhaWxzKG51bWJlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGV0YWlsc0FyZVNob3duKCkge1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgLy8gQXJlIGRldGFpbHMgc2hvd24gb24gdGhlIHBhZ2U/IFJldHVybiBib29sZWFuOlxuICByZXR1cm4gZ2V0Q29tcHV0ZWREaXNwbGF5KGRldGFpbHMpICE9PSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCkge1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgLy8gVGFrZSBpZCBvZiB0aGUgZGV0YWlscyBjaGlsZFxuICBsZXQgZGV0YWlsc0NvbnRhaW5lcklkID0gZGV0YWlscy5jaGlsZHJlblswXS5pZDtcbiAgLy8gVGFrZSBhIG51bWJlciBmcm9tIHRoYXQgaWQgYW5kIHJldHVybiBpdFxuICBsZXQgaWROdW1iZXIgPSBkZXRhaWxzQ29udGFpbmVySWQuc3BsaXQoXCItXCIpWzJdO1xuICByZXR1cm4gaWROdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHNldERldGFpbHNJZFRvKG51bWJlcikge1xuICAvLyBGaXJzdCBtYWtlIGRldGFpbHMgSUQgdGhlIHNhbWUgYXMgaW5pdGlhbCBJRCAod2l0aCBubyBudW1iZXJzKVxuICAvLyBBbm90aGVyIHdvcmRzIHJlbW92ZSBhbGwgZXhpc3RpbmcgbnVtYmVycyBmcm9tIGl0XG4gIG1ha2VEZXRhaWxzRGVmYXVsdCgpO1xuICAvLyBUaGVuIHBhc3MgYSBudW1iZXIgdG8gaXRcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGRldGFpbHMuY2hpbGRyZW5bMF0uaWQgKz0gYC0ke251bWJlcn1gO1xufVxuXG5mdW5jdGlvbiBoaWRlRGV0YWlscygpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIGhpZGUoZGV0YWlscyk7XG4gIC8vIFdoZW4gZGV0YWlscyBhcmUgaGlkZGVuIHRoZSBtYWluIGNvbHVtbiB3aWxsIGJlIGJyb2FkZXJcbiAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzRcIjtcbiAgLy8gV2hlbiBkZXRhaWxzIGFyZSBoaWRkZW4gdGhlaXIgZGV0YWlscy1jb250YWluZXItSUQgd2lsbCBiZSBkZWZhdWx0IHdpdGggbm8gbnVtYmVyXG4gIG1ha2VEZXRhaWxzRGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBzaG93RGV0YWlscyhudW1iZXIpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIHNob3dBc0ZsZXgoZGV0YWlscyk7XG4gIC8vIEFsc28gc2V0IG5ldyBJRCBudW1iZXIgdG8gZGV0YWlscyBjb250YWluZXIgKG9ubHkgaWYgaXQgZG9lc24ndCBoYXZlIElEIGFscmVhZHkpXG4gIHNldERldGFpbHNJZFRvKG51bWJlcik7XG4gIC8vIElmIHNjcmVlbiBpcyBiaWdnZXIgdGhhbiAxMDI0IHRoZW4gbWFrZSBcIm1haW5cIiB0aGUgbWlkZGxlIGNvbHVtbiBvZiAzIGNvbHVtbnNcbiAgaWYgKCFzY3JlZW5MZXNzVGhlbjEwMjQoKSkgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzNcIjtcbn1cblxuZnVuY3Rpb24gbWFrZURldGFpbHNEZWZhdWx0KCkge1xuICAvLyBDaGFuZ2UgSUQgb2YgY2hpbGQgb2YgdGhlIGRldGFpbHMgdG8gZGVmYXVsdCBcImRldGFpbHMtY29udGFpbmVyXCJcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGRldGFpbHMuY2hpbGRyZW5bMF0uaWQgPSBcImRldGFpbHMtY29udGFpbmVyXCI7XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkRGlzcGxheShlbGVtZW50KSB7XG4gIGxldCBjb21wdXRlZERpc3BsYXkgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKTtcbiAgcmV0dXJuIGNvbXB1dGVkRGlzcGxheTtcbn1cblxuZnVuY3Rpb24gc2hvd0FzRmxleChlbGVtZW50KSB7XG4gIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufVxuXG5mdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCB7XG4gIHRhc2tzVG9nZ2xlRGV0YWlscyxcbiAgZ2V0Q29tcHV0ZWREaXNwbGF5LFxuICBnZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIsXG4gIGhpZGVEZXRhaWxzLFxuICBkZXRhaWxzQXJlU2hvd24sXG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcblxuZnVuY3Rpb24gZG9uZUJ0bnMoYXJyKSB7XG4gIC8vIFRha2UgdGhlIGNvbGxlY3Rpb24gb2YgYWxsIGNoZWNrYm94ZXMgZnJvbSB0YXNrcyBieSBjbGFzcyBuYW1lXG4gIGxldCBjaGVja2JveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG8taWNvbi1jb250YWluZXJcIik7XG4gIC8vIExvb3AgdGhyb3VnaCBjb2xsZWN0aW9uIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBidXR0b25cbiAgZm9yIChsZXQgY2hlY2tib3ggb2YgY2hlY2tib3hlcykge1xuICAgIGRvbmVCdG5Db21wbGV0ZVRhc2soY2hlY2tib3gsIGFycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZG9uZUJ0bkNvbXBsZXRlVGFzayhjaGVja2JveCwgYXJyKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIGFzc2lnbiBFdmVudCBsaXN0ZW5lciB0byBjaGVja2JveGVzXG4gIC8vIHRvIGNvbXBsZXRlIHBhcnRpY3VsYXIgdGFza3MgZnJvbSBwYWdlXG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIGdldCBJZCBvZiBhIGNoZWNrYm94IHRvIHdoaWNoIGxpc3RlbmVyIGlzIGFzc2lnbmVkXG4gICAgbGV0IGNib3hJZCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQ7XG4gICAgLy8gZ2V0IG9ubHkgbnVtYmVyIGFmdGVyIHRoZSBoeXBoZW4gZnJvbSBJZFxuICAgIGxldCBudW1iZXIgPSBjYm94SWQuc3BsaXQoXCItXCIpWzFdO1xuICAgIC8vIEJlZm9yZSBjb21wbGV0aW5nIGFuIGl0ZW0gbWFrZSBzdXJlIHRvIGNsb3NlIGl0cyBkZXRhaWxzXG4gICAgY2xvc2VEZXRhaWxzT2ZDb21wbGV0ZWRUYXNrKG51bWJlcik7XG4gICAgLy8gSWYgdGFzayBpcyBkb25lIHRoZW4gdW5kb25lIGl0LCBlbHNlIGNvbXBsZXRlIGl0XG4gICAgYXJyW251bWJlcl0uZG9uZSA9ICFhcnJbbnVtYmVyXS5kb25lO1xuICAgIC8vIFJlcmVuZGVyIGFycmF5XG4gICAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG4gICAgLy8gQXZvaWQgZmlyaW5nIHBhcmVudCBlbGVtZW50IGxpc3RlbmVyIGFmdGVyIGNsaWNraW5nIG9uIHRoZSBjaGVja2JveFxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZURldGFpbHNPZkNvbXBsZXRlZFRhc2sobnVtYmVyKSB7XG4gIC8vIEJlZm9yZSByZW1vdmluZyBhbiBpdGVtIG1ha2Ugc3VyZSBoaXMgZGV0YWlscyBhcmUgbm90IHNob3duXG4gIC8vIElmIHRoZXkgYXJlIHRoZW4gaGlkZSB0aGVtXG4gIGlmIChEZXRhaWxzVG9nZ2xlLmdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpID09PSBudW1iZXIpXG4gICAgRGV0YWlsc1RvZ2dsZS5oaWRlRGV0YWlscygpO1xufVxuXG5leHBvcnQgeyBkb25lQnRucyB9O1xuIiwiY29uc3QgdGFza0ZhY3RvcnkgPSBmdW5jdGlvbiAoe1xuICB0aXRsZSA9IFwiXCIsXG4gIGZyb20gPSBcIlwiLFxuICBkYXRlID0gXCJcIixcbiAgcHJpb3JpdHkgPSBcImxvd1wiLFxuICBub3RlID0gXCJcIixcbiAgZG9uZSA9IGZhbHNlLFxufSkge1xuICByZXR1cm4geyB0aXRsZSwgZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUsIGRvbmUgfTtcbn07XG5cbmV4cG9ydCB7IHRhc2tGYWN0b3J5IH07XG4iLCJpbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4uLy4uL0lDT05TL2NhbGVuZGFyLnN2Z1wiO1xuaW1wb3J0IE5vdGUgZnJvbSBcIi4uLy4uL0lDT05TL2VkaXQuc3ZnXCI7XG5pbXBvcnQgKiBhcyBEZWxldGVUYXNrQnRucyBmcm9tIFwiLi9kZWxldGUuanNcIjtcbmltcG9ydCAqIGFzIERldGFpbHNUb2dnbGUgZnJvbSBcIi4vZGV0YWlsc1RvZ2dsZS5qc1wiO1xuaW1wb3J0ICogYXMgVGFza0RvbmUgZnJvbSBcIi4vZG9uZS5qc1wiO1xuXG5mdW5jdGlvbiByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKSB7XG4gIC8vIENsZWFyIGFsbCBwcmV2aW91c2x5IHJlbmRlcmVkIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2VcbiAgY2xlYXJDb250ZW50T2YoXCJ0b2Rvc1wiKTtcbiAgLy9SZW5kZXIgZWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSB0byB0aGUgcGFnZVxuICBmb3IgKGxldCBbaW5kZXgsIGl0ZW1dIG9mIGFyci5lbnRyaWVzKCkpIHtcbiAgICByZW5kZXJUYXNrKGluZGV4LCBpdGVtKTtcbiAgfVxuICAvLyBNYWtlIGRlbGV0ZSBidXR0b25zIG9uIGNsaWNrIHJlbW92ZSB0YXNrIHRvIHdoaWNoIHRoZXkgYXJlIGFzc2lnbmVkXG4gIERlbGV0ZVRhc2tCdG5zLmRlbGV0ZVRhc2tzRnJvbShhcnIpO1xuICAvLyBNYWtlIGVhY2ggdGFzayBzaG93IGl0cyBkZXRhaWxzIG9uIGNsaWNrXG4gIERldGFpbHNUb2dnbGUudGFza3NUb2dnbGVEZXRhaWxzKGFycik7XG4gIC8vIE1ha2UgZWFjaCB0YXNrIGNoZWNrYm94IGNvbXBsZXRlIHRhc2sgYnkgY2hhbmdpbmcgaXRzIGNsYXNzXG4gIFRhc2tEb25lLmRvbmVCdG5zKGFycik7XG4gIC8vIFJlYWNoIGxhYmVscyBhbmQgbWFrZSB0aGVtIGNoYW5nZSB0aGVtc2VsdmVzIHdoZW4gdGhlIHRhc2sgaXMgZG9uZVxuICB0b2dnbGVEb25lSWNvbnMoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50T2YoaWQpIHtcbiAgLy8gUmVtb3ZlIGFueSBjaGlsZCBvZiB0aGUgZWxlbWVudCB3aXRoIGlkXG4gIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFzayhpLCB0YXNrKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3NcIikuYXBwZW5kKGNyZWF0ZVRhc2soaSwgdGFzaykpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGksIHRhc2spIHtcbiAgLy8gY3JlYXRlIGxpc3QgZWxlbWVudCB3aXRoIGEgY2xhc3MgJ3RvZG8nXG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvXCIpO1xuICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdGFzay0ke2l9YCk7XG4gIC8vIEFwcGVuZCBsYWJlbCwgaW5wdXQsIGRpdiBhbmQgYnV0dG9uIHRvIGl0XG4gIGxpLmFwcGVuZChjcmVhdGVMYWJlbChpKSk7XG4gIGxpLmFwcGVuZChjcmVhdGVJbnB1dChpKSk7XG4gIGxpLmFwcGVuZChcbiAgICBjcmVhdGVDb250ZW50KFxuICAgICAgdGFzay50aXRsZSxcbiAgICAgIHRhc2suZnJvbSxcbiAgICAgIHRhc2suZGF0ZSxcbiAgICAgIHRhc2sucHJpb3JpdHksXG4gICAgICB0YXNrLm5vdGUsXG4gICAgICB0YXNrLmRvbmVcbiAgICApXG4gICk7XG4gIGxpLmFwcGVuZChjcmVhdGVEZWxldGVCdG4oaSkpO1xuXG4gIHJldHVybiBsaTtcbn1cblxuLy8gTEFCRUxcblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoaSkge1xuICAvLyByZXR1cm5zIGxhYmVsIGZvciBcInRvZG9jaGVja2JveFwiICsgaVxuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIGBsYWJlbC0ke2l9YCk7XG4gIGxhYmVsLmh0bWxGb3IgPSBgdG9kb2NoZWNrYm94JHtpfWA7XG4gIGxhYmVsLmFwcGVuZChjcmVhdGVEb25lSWNvbigpKTtcbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEb25lSWNvbigpIHtcbiAgLy8gY3JlYXRlIGljb24gY29udGFpbmVyXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWljb24tY29udGFpbmVyXCIpO1xuICAvLyBjcmVhdGUgaWNvblxuICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpb24taWNvblwiKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY2hlY2ttYXJrLW91dGxpbmVcIik7XG4gIC8vIGFwcGVuZCBpY29uIHRvIGNvbnRhaW5lclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbi8vIElOUFVUXG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KGkpIHtcbiAgLy8gQ3JlYXRlIGlucHV0IGNoZWNrYm94IGVsZW1lbnQgYWZ0ZXIgdGhlIGxhYmVsXG4gIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgLy8gQWRkIGF0dHJpYnV0ZXNcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgdG9kby1jaGVja2JveGApO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdG9kb2NoZWNrYm94LSR7aX1gKTtcbiAgcmV0dXJuIGNoZWNrYm94O1xufVxuXG4vLyBDT05URU5UID0gdGFzayB0aXRsZSBhbmQgZGV0YWlsc1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KHRpdGxlLCBmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSwgZG9uZSkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLXRleHRcIik7XG4gIC8vIEFwcGVuZCB0aXRsZSBhbmQgZGV0YWlscyB0byBjb250ZW50XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUodGl0bGUpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVEZXRhaWxzKGZyb20sIGRhdGUsIHByaW9yaXR5LCBub3RlKSk7XG4gIGlmIChkb25lKSBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpO1xuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoc3RyKSB7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby10aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBzdHI7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGV0YWlscyhmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSkge1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRldGFpbHMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXRhaWxzXCIpO1xuICBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZUZyb20oZnJvbSkpO1xuICBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZUR1ZShkYXRlKSk7XG4gIGRldGFpbHMuYXBwZW5kQ2hpbGQoY3JlYXRlUHJpb3JpdHkocHJpb3JpdHkpKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVOb3RlKG5vdGUpKTtcblxuICByZXR1cm4gZGV0YWlscztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJvbShmcm9tKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmcm9tLXByb2plY3RcIik7XG4gIGlmIChmcm9tKSBzcGFuLnRleHRDb250ZW50ID0gYEZyb20gJHtmcm9tfWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEdWUoZGF0ZSkge1xuICBsZXQgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgZHVlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHVlLWRhdGVcIik7XG4gIGlmIChkYXRlKSB7XG4gICAgLy8gSWYgdGFzayBoYXMgZGF0ZSBiZWZvcmUgdG9kYXksIGl0IHdpbGwgYmUgcmVkIGNvbG9yZWRcbiAgICBpZiAoZGF0ZU92ZXJkdWUoZGF0ZSkpIGR1ZS5jbGFzc0xpc3QuYWRkKFwib3ZlcmR1ZS1kYXRlXCIpO1xuXG4gICAgZHVlLmFwcGVuZENoaWxkKGNyZWF0ZUNhbGVuZGFySW1hZ2UoKSk7XG4gICAgZHVlLmFwcGVuZENoaWxkKGNyZWF0ZVNwYW5Gb3JEYXRlKGRhdGUpKTtcbiAgfVxuICByZXR1cm4gZHVlO1xufVxuXG5mdW5jdGlvbiBkYXRlT3ZlcmR1ZShkYXRlKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIGNvbXBhcmUgZGF0ZXM6IHRvZGF5IHdpdGggYSBkYXRlXG4gIC8vIElmIGRhdGUgaXMgZWFybGllciB0aGFuIHRvZGF5IHRoZW4gcmV0dXJuIHRydWVcbiAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi5cIilbMF07XG4gIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCIuXCIpWzFdO1xuICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCIuXCIpWzJdO1xuXG4gIGxldCB0YXNrRGF0ZSA9IG5ldyBEYXRlKGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fSAwOjAwOjAwYCk7XG5cbiAgcmV0dXJuIHRhc2tEYXRlIDwgdG9kYXkgPyB0cnVlIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFySW1hZ2UoKSB7XG4gIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIENhbGVuZGFyKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkNhbGVuZGFyXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMnB4XCIpO1xuXG4gIHJldHVybiBpbWc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYW5Gb3JEYXRlKGRhdGUpIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IGBEdWUgJHtkYXRlfWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcmlvcml0eShsZXZlbCkge1xuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYCR7bGV2ZWx9LXByaW9yaXR5YCk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGNyZWF0ZVNwYW5Gb3JQcmlvcml0eShsZXZlbCkpO1xuICByZXR1cm4gcHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYW5Gb3JQcmlvcml0eShsZXZlbCkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpZiAobGV2ZWwgIT09IFwibG93XCIpXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IGAke2NhcGl0YWxpemVGaXJzdExldHRlcihsZXZlbCl9IHByaW9yaXR5YDtcbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm90ZShub3RlKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJub3RlLXByZXNlbmNlXCIpO1xuXG4gIGlmIChub3RlKSB7XG4gICAgLy8gY3JlYXRlIGFuZCBBcHBlbmQgTm90ZSBJY29uXG4gICAgbGV0IG5vdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBub3RlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgTm90ZSk7XG4gICAgbm90ZUljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGVuXCIpO1xuICAgIG5vdGVJY29uLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTJweFwiKTtcblxuICAgIC8vIGNyZWF0ZSBhbmQgYXBwZW5kIHRleHRcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIk5vdGVcIjtcblxuICAgIHNwYW4uYXBwZW5kQ2hpbGQobm90ZUljb24pO1xuICAgIHNwYW4uYXBwZW5kQ2hpbGQodGV4dCk7XG4gIH1cbiAgcmV0dXJuIHNwYW47XG59XG5cbi8vIERFTEVURSBCVVRUT05cbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUJ0bihpKSB7XG4gIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsZXRlLXRvZG8tYnRuXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbGV0ZWJ0bi0ke2l9YCk7XG5cbiAgLy8gY3JlYXRlIGFuIGljb24gYW5kIGFwcGVuZCBpdCB0byBidXR0b25cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW9uLWljb25cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNsb3NlLWNpcmNsZVwiKTtcblxuICBidG4uYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgcmV0dXJuIGJ0bjtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRG9uZUljb25zKCkge1xuICAvLyBHZXQgY29sbGVjdGlvbiBvZiBhbGwgdGFza3Mgd2ljaCBhcmUgY29tcGxldGVkXG4gIGxldCBkb25lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkb25lXCIpO1xuICAvLyBGb3IgZWFjaCBjb21wbGV0ZWQgdGFzayB0YWtlIGxhYmVsIGFuZCB0b2dnbGUgYSBjbGFzcyBcImNvbXBsZXRlZFwiIG9uIGl0XG4gIGZvciAobGV0IHRhc2sgb2YgZG9uZXMpIHtcbiAgICBsZXQgbnVtYmVyID0gdGFzay5wYXJlbnRFbGVtZW50LmlkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGFiZWwtJHtudW1iZXJ9YCk7XG4gICAgbGV0IGljb25Db250YWluZXIgPSBsYWJlbC5maXJzdENoaWxkO1xuXG4gICAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICB9XG59XG5cbmV4cG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSwgY2xlYXJDb250ZW50T2YgfTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9