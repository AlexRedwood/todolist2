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
//create a list of projects

var projects = _toConsumableArray(_projects_defaults_js__WEBPACK_IMPORTED_MODULE_5__["getProjects"]()); // render list of projects


Object(_projects_render_js__WEBPACK_IMPORTED_MODULE_7__["renderAllProjects"])(projects, 0);

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
    tasks: _tasks_defaults_js__WEBPACK_IMPORTED_MODULE_1__["getTasksByNumber"](1)
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
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? tasks.length : _ref$count;
  return {
    title: title,
    tasks: tasks,
    count: count
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
/* harmony import */ var _tasks_detailsInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tasks/detailsInput.js */ "./src/JS/tasks/detailsInput.js");
/* harmony import */ var _tasks_add_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tasks/add.js */ "./src/JS/tasks/add.js");
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

  Object(_tasks_render_js__WEBPACK_IMPORTED_MODULE_0__["renderAllTasksFrom"])(arr[number].tasks); // Button to add task to a defined array
  // Also rerender the array after adding a task

  _tasks_add_js__WEBPACK_IMPORTED_MODULE_2__["addTaskTo"](arr[number].tasks); // Change tasks when user type something to details window

  _tasks_detailsInput_js__WEBPACK_IMPORTED_MODULE_1__["changeTaskOnInput"](arr[number].tasks);
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
  li.append(createTitleAndCount(project.title, project.count));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUNPTlMvY2FsZW5kYXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9JQ09OUy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Byb2plY3RzL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9wcm9qZWN0cy9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9wcm9qZWN0cy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL3ByaW9yaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9zdHlsZS9yZXNpemUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2FkZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZGV0YWlsc0lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZXRhaWxzVG9nZ2xlLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kb25lLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2Nzcz84MTRiIl0sIm5hbWVzIjpbIk1lbnVCdG4iLCJSZXNpemUiLCJQcmlvcml0eSIsInByb2plY3RzIiwiRGVmYXVsdFByb2plY3RzIiwicmVuZGVyQWxsUHJvamVjdHMiLCJnZXRQcm9qZWN0cyIsImFsbFByb2plY3RzIiwicHJvamVjdEZhY3RvcnkiLCJ0aXRsZSIsInRhc2tzIiwiRGVmYXVsdFRhc2tzIiwiY291bnQiLCJsZW5ndGgiLCJhcnIiLCJudW1iZXIiLCJjbGVhckNvbnRlbnRPZiIsImVudHJpZXMiLCJpbmRleCIsIml0ZW0iLCJyZW5kZXJQcm9qZWN0IiwicmVuZGVyQWxsVGFza3NGcm9tIiwiQWRkVGFza0J0biIsIklucHV0IiwiaSIsInByb2plY3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kIiwiY3JlYXRlUHJvamVjdCIsImxpIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImNyZWF0ZUljb24iLCJjcmVhdGVUaXRsZUFuZENvdW50IiwiY3JlYXRlRGVsZXRlQnRuIiwic3BhbiIsImljb24iLCJkaXYiLCJuYW1lU3BhbiIsInRleHRDb250ZW50IiwiY291bnRTcGFuIiwiYnRuIiwiYXBwZW5kQ2hpbGQiLCJzaG93UHJvamVjdHMiLCJhZGRFdmVudExpc3RlbmVyIiwiYnJvYWRlblByb2plY3RDb250YWluZXIiLCJnZXRFbGVtZW50c1RvQnJvYWQiLCJlbGVtZW50IiwidG9nZ2xlQnJvYWQiLCJtaW5pbWl6ZVByb2plY3RDb250YWluZXIiLCJhZGRCcm9hZCIsImNsYXNzTGlzdCIsImFkZCIsInRvZ2dsZSIsImNvbnRlbnQiLCJwcm9qZWN0TGlzdCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwcm9qZWN0SWNvbiIsInByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyIiwiZGVsZXRlUHJvamVjdEJ0biIsIm5ld1Byb2plY3RGb3JtIiwibmV3UHJvamVjdCIsInN1Ym1pdFByb2plY3QiLCJlbGVtZW50cyIsInN0YXJzQ2hhbmdlQ29sb3JzIiwiYWN0aXZhdGVGaXJzdFN0YXIiLCJhY3RpdmF0ZVNlY29uZFN0YXIiLCJhY3RpdmF0ZVRoaXJkU3RhciIsImdldFN0YXIxIiwiYWN0aXZhdGVTdGFyIiwiZ2V0U3RhcjIiLCJnZXRTdGFyMyIsImNvbnNvbGUiLCJsb2ciLCJvdXRsaW5lU2Vjb25kU3RhciIsIm91dGxpbmVUaGlyZFN0YXIiLCJyZW1vdmVDb2xvckZyb21BbGxTdGFycyIsImFkZE1lZGl1bU9ubW91c2VvdmVyIiwiZmlsbFNlY29uZFN0YXIiLCJhZGRDb2xvclR3b1N0YXJzIiwiZGVjb2xvclRoaXJkU3RhciIsImZpbGxUaGlyZFN0YXIiLCJhZGRDb2xvclRocmVlU3RhcnMiLCJyZW1vdmVNZWRpdW1Pbm1vdXNlb3ZlciIsImNoaWxkcmVuIiwicmVtb3ZlIiwic3RhcklzT3V0bGluZWQiLCJzdGFyIiwiZ2V0QXR0cmlidXRlIiwiZGVjb2xvckZpcnN0U3RhciIsImRlY29sb3JTZWNvbmRTdGFyIiwicmVzcG9uc2l2ZSIsIm1haW4iLCJkZXRhaWxzIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwic2NyZWVuTGVzc1RoZW4xMDI0IiwiZ2V0Q29tcHV0ZWREaXNwbGF5Iiwic3R5bGUiLCJncmlkQ29sdW1uIiwibWF0Y2hlcyIsImFkZFRhc2tUbyIsInN1Ym1pdFRvZG9CdG4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHVzaFRhc2tUbyIsInRhYmxlIiwicHVzaCIsImdldFRhc2siLCJ0YXNrIiwidGFza0ZhY3RvcnkiLCJnZXRJbnB1dFZhbHVlIiwiY2xlYXJUYXNrSW5wdXQiLCJ2YWx1ZSIsImdldFRhc2tzQnlOdW1iZXIiLCJidW5kbGUxIiwiZGF0ZSIsInByaW9yaXR5Iiwibm90ZSIsImJ1bmRsZTIiLCJidW5kbGUzIiwiZG9uZSIsImRlbGV0ZVRhc2tzRnJvbSIsImJ1dHRvbnMiLCJidXR0b24iLCJkZWxldGVCdG5SZW1vdmVUYXNrIiwiZSIsImJ0bklkIiwiY3VycmVudFRhcmdldCIsImlkIiwic3BsaXQiLCJjbG9zZURldGFpbHNPZkRlbGV0ZWRUYXNrIiwic3BsaWNlIiwic3RvcFByb3BhZ2F0aW9uIiwiRGV0YWlsc1RvZ2dsZSIsInB1dFRhc2tJbmZvVG9JbnB1dCIsInNldE5hbWUiLCJzZXREYXRlIiwic2V0UGlvcml0eSIsInNldE5vdGUiLCJjaGFuZ2VUYXNrT25JbnB1dCIsImNoYW5nZVRpdGxlT25JbnB1dCIsImNoYW5nZURhdGVPbklucHV0IiwiY2hhbmdlUHJpb3JpdHlPbklucHV0IiwiY2hhbmdlTm90ZU9uSW5wdXQiLCJpbnB1dCIsIm9uaW5wdXQiLCJjaGFuZ2VUaXRsZSIsInRhc2tOdW1iZXIiLCJjaGFuZ2VEYXRlIiwiZm9ybWF0RGF0ZTIiLCJzdGFycyIsImNoYW5nZVByaW9yaXR5IiwiZ2V0UHJpb3JpdHlJbnB1dCIsInN0YXIxIiwiY29udGFpbnMiLCJjaGFuZ2VOb3RlIiwibmFtZSIsImZvcm1hdERhdGUiLCJsZXZlbCIsImRheSIsIm1vbnRoIiwieWVhciIsImZvcm1hdHRlZCIsInRhc2tzVG9nZ2xlRGV0YWlscyIsInRvZG9MaXN0U2hvd0RldGFpbHMiLCJBcnJvd0hpZGVEZXRhaWxzIiwidGFza0lkIiwidG9nZ2xlRGV0YWlscyIsIkRldGFpbHNJbnB1dCIsImFycm93QnRuIiwiaGlkZURldGFpbHMiLCJpZE51bWJlciIsImdldERldGFpbHNDb250YWluZXJJZE51bWJlciIsImRldGFpbHNBcmVTaG93biIsInNob3dEZXRhaWxzIiwiZGV0YWlsc0NvbnRhaW5lcklkIiwic2V0RGV0YWlsc0lkVG8iLCJtYWtlRGV0YWlsc0RlZmF1bHQiLCJoaWRlIiwic2hvd0FzRmxleCIsImNvbXB1dGVkRGlzcGxheSIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZGlzcGxheSIsImRvbmVCdG5zIiwiY2hlY2tib3hlcyIsImNoZWNrYm94IiwiZG9uZUJ0bkNvbXBsZXRlVGFzayIsImNib3hJZCIsInBhcmVudE5vZGUiLCJjbG9zZURldGFpbHNPZkNvbXBsZXRlZFRhc2siLCJmcm9tIiwicmVuZGVyVGFzayIsIkRlbGV0ZVRhc2tCdG5zIiwiVGFza0RvbmUiLCJ0b2dnbGVEb25lSWNvbnMiLCJjb250ZW50Q29udGFpbmVyIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlVGFzayIsImNyZWF0ZUxhYmVsIiwiY3JlYXRlSW5wdXQiLCJjcmVhdGVDb250ZW50IiwibGFiZWwiLCJodG1sRm9yIiwiY3JlYXRlRG9uZUljb24iLCJjb250YWluZXIiLCJjcmVhdGVUaXRsZSIsImNyZWF0ZURldGFpbHMiLCJzdHIiLCJjcmVhdGVGcm9tIiwiY3JlYXRlRHVlIiwiY3JlYXRlUHJpb3JpdHkiLCJjcmVhdGVOb3RlIiwiZHVlIiwiZGF0ZU92ZXJkdWUiLCJjcmVhdGVDYWxlbmRhckltYWdlIiwiY3JlYXRlU3BhbkZvckRhdGUiLCJ0b2RheSIsIkRhdGUiLCJ0YXNrRGF0ZSIsImltZyIsIkNhbGVuZGFyIiwiY3JlYXRlU3BhbkZvclByaW9yaXR5IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm5vdGVJY29uIiwiTm90ZSIsInRleHQiLCJkb25lcyIsInBhcmVudEVsZW1lbnQiLCJpY29uQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FB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QTtBQVcxQjs7Ozs7Ozs7Ozs7OztBQ2hQRCxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDhNQUFxRzs7QUFFdkk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiYnVuZGxlLmMwZjk5YTkxMzQ2YWI3ZjM1YTAyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvSlMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgYXBwZWFyRnJvbVJpZ2h0UHJvamVjdCB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IDMwcHg7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTsgfVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggYXV0byAzMzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCIgXFxcInByb2plY3RzIG1haW4gdG9kby1taXNjXFxcIjsgfVxcbiAgI2NvbnRlbnQuYnJvYWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY4cHggYXV0byAzMzBweDsgfVxcblxcbi8qIC0tLSBUT1Agb2YgdGhlIFBBR0UgOiBIRUFERVIgLS0tICovXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMTA2ODc3O1xcbiAgY29sb3I6ICNmNGY0ZjQ7XFxuICBmb250LXNpemU6IDEuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGVybWFuZW50IE1hcmtlclxcXCIsIGN1cnNpdmU7XFxuICBsZXR0ZXItc3BhY2luZzogNXB4OyB9XFxuICBoZWFkZXIgI21lbnUtaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAgIGhlYWRlciAjbWVudS1pY29uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMGI1MDVjOyB9XFxuICBoZWFkZXIgI2hlYWRlci10aXRsZSB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgfVxcbiAgaGVhZGVyICNzb2NpYWxzIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi8qIExFRlQgU0lERSBPRiBUSEUgUEFHRTogUFJPSkVDVFMgKi9cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBwcm9qZWN0cztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDhweCAwcHggNXB4IC00cHggI2NhY2FjYTtcXG4gIC1tb3otYm94LXNoYWRvdzogOHB4IDBweCA1cHggLTRweCAjY2FjYWNhO1xcbiAgYm94LXNoYWRvdzogOHB4IDBweCA1cHggLTRweCAjY2FjYWNhO1xcbiAgLyogTEVGVC1TSURFIE9GIFRIRSBQQUdFOiBVc2VyIElucHV0Ki8gfVxcbiAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3Qge1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICAgIG1heC13aWR0aDogMjgwcHg7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QuYnJvYWQge1xcbiAgICAgIHdpZHRoOiA2OHB4OyB9XFxuICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IHtcXG4gICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdC5icm9hZCB7XFxuICAgICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIycHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QuYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0OmhvdmVyIC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICBhbmltYXRpb246IGFwcGVhckZyb21SaWdodFByb2plY3QgMC4zcyBlYXNlLW91dCBmb3J3YXJkczsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0Om5vdCguYWN0aXZlKTpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtaWNvbiB7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWljb24uYnJvYWQge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC10aXRsZS1jb3VudC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWNvdW50LWNvbnRhaW5lci5icm9hZCB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1uYW1lIHtcXG4gICAgICAgIHdpZHRoOiAxNTVweDtcXG4gICAgICAgIG1heC13aWR0aDogMTU1cHg7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmNvdW50LXRvZG9zIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICB3aWR0aDogMjlweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIGNvbG9yOiAjYzVjNWM1O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4yczsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0bi5icm9hZCB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogIzk5OTk5OTsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0bjpmb2N1cyB7XFxuICAgICAgICAgIGNvbG9yOiAjNmU2ZTZlOyB9XFxuICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIG1heC13aWR0aDogMjgwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogSW5wdXQgKi9cXG4gICAgLyogU3VibWl0IGJ1dHRvbiAqLyB9XFxuICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybS5icm9hZCB7XFxuICAgICAgd2lkdGg6IDY4cHg7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjbmV3LXByb2plY3Qge1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzZiNmI2YjtcXG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICBwYWRkaW5nOiA5cHggMDtcXG4gICAgICBvdXRsaW5lOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjbmV3LXByb2plY3QuYnJvYWQge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjbmV3LXByb2plY3Q6Zm9jdXMge1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzOGVmN2Q7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjbmV3LXByb2plY3Q6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXG4gICAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdCB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiA2cHg7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0LmJyb2FkIHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBsZWZ0OiA0cHg7XFxuICAgICAgICBwYWRkaW5nOiA3cHggMThweDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3QgaW9uLWljb24ge1xcbiAgICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDtcXG4gICAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzhlZjdkO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6aG92ZXIgaW9uLWljb24ge1xcbiAgICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcblxcbi8qIE1pZGRsZTogUHJvamVjdCB0aXRsZSwgdG9kbyB0YXNrcyovXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBtaW4td2lkdGg6IDM3N3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4ICNjYWNhY2E7XFxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCAjY2FjYWNhO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4ICNjYWNhY2E7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAvKiBVc2VyIGlucHV0IHRvZG8gdGFza3MqLyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgbWFpbiB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyA0OyB9IH1cXG4gIG1haW4gI3Byb2plY3QtdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDEuNGVtOyB9XFxuICBtYWluIC50b2RvIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggYXV0byAyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiY2hlY2tib3ggdG9kb3RleHQgYnRuXFxcIjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAvKiBDdXN0b20gbWFkZSBjaGVja2JveCB3aXRoIGFmdGVyIGVsZW1lbnQgKi9cXG4gICAgLyogVGV4dCBvZiB0aGUgdG9kbyB0YXNrIHdpdGggZGV0YWlscyAqLyB9XFxuICAgIG1haW4gLnRvZG86aG92ZXIge1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICNlNGU0ZTQ7XFxuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggI2U0ZTRlNDtcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggI2U0ZTRlNDsgfVxcbiAgICBtYWluIC50b2RvOmhvdmVyIC5kZWxldGUtdG9kby1idG4ge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICBhbmltYXRpb246IGFwcGVhckZyb21SaWdodFByb2plY3QgMC4zcyBlYXNlLW91dCBmb3J3YXJkczsgfVxcbiAgICBtYWluIC50b2RvIGxhYmVsIHtcXG4gICAgICBncmlkLWFyZWE6IGNoZWNrYm94OyB9XFxuICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzOyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyOjphZnRlciB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2M1YzVjNTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuN3M7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXIgaW9uLWljb24ge1xcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lcjpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTJiMGU5OyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyOmhvdmVyIGlvbi1pY29uIHtcXG4gICAgICAgICAgY29sb3I6ICNlMmIwZTk7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1vdXQ7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXIuY29tcGxldGVkOmhvdmVyOjphZnRlciB7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNWM1YzUgIWltcG9ydGFudDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lci5jb21wbGV0ZWQgaW9uLWljb24ge1xcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxuICAgICAgICAgIGNvbG9yOiAjYzVjNWM1O1xcbiAgICAgICAgICBhbmltYXRpb246IG5vbmU7IH1cXG4gICAgbWFpbiAudG9kbyAudG9kby1jaGVja2JveCB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICBtYWluIC50b2RvIC50b2RvLXRleHQge1xcbiAgICAgIGdyaWQtYXJlYTogdG9kb3RleHQ7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0LmRvbmUge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgICAgICBjb2xvcjogI2M1YzVjNSAhaW1wb3J0YW50OyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQuZG9uZSAubWVkaXVtLXByaW9yaXR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0LmRvbmUgLmhpZ2gtcHJpb3JpdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQuZG9uZSAuZHVlLWRhdGUsXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQuZG9uZSAub3ZlcmR1ZS1kYXRlIHtcXG4gICAgICAgICAgY29sb3I6ICNjNWM1YzUgIWltcG9ydGFudDsgfVxcbiAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAudG9kby10aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cXG4gICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5mcm9tLXByb2plY3QsXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmR1ZS1kYXRlLFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5tZWRpdW0tcHJpb3JpdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmhpZ2gtcHJpb3JpdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLm5vdGUtcHJlc2VuY2Uge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAuZnJvbS1wcm9qZWN0OmVtcHR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5kdWUtZGF0ZTplbXB0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAubWVkaXVtLXByaW9yaXR5OmVtcHR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5oaWdoLXByaW9yaXR5OmVtcHR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5ub3RlLXByZXNlbmNlOmVtcHR5IHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgc3BhbiBpbWcge1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIHRvcDogMnB4O1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHNwYW4ub3ZlcmR1ZS1kYXRlIHtcXG4gICAgICAgICAgY29sb3I6IHJlZDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHNwYW4uaGlnaC1wcmlvcml0eSB7XFxuICAgICAgICAgIGNvbG9yOiAjNzMwMGZmOyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgc3Bhbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgICAgICAgICBjb2xvcjogIzEwNjg3NzsgfVxcbiAgICBtYWluIC50b2RvIC5kZWxldGUtdG9kby1idG4ge1xcbiAgICAgIGdyaWQtYXJlYTogYnRuO1xcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgY29sb3I6ICNkNGQ0ZDQ7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7IH1cXG4gICAgICBtYWluIC50b2RvIC5kZWxldGUtdG9kby1idG46aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICM0OTQwNDA7IH1cXG4gICAgICBtYWluIC50b2RvIC5kZWxldGUtdG9kby1idG46Zm9jdXMge1xcbiAgICAgICAgY29sb3I6ICM5MjkyOTI7IH1cXG4gIG1haW4gaHIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm94LXNoYWRvdzogMCAtMTBweCAxMHB4IC0xMHB4ICM4YzhjOGMgaW5zZXQ7IH1cXG4gIG1haW4gI25ldy10b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBJbnB1dCAqL1xcbiAgICAvKiBTdWJtaXQgYnV0dG9uICovIH1cXG4gICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjbmV3LXRvZG8ge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzZiNmI2YjtcXG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICBwYWRkaW5nOiA5cHggMDtcXG4gICAgICBvdXRsaW5lOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI25ldy10b2RvOmZvY3VzIHtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzhlZjdkOyB9XFxuICAgICAgICBtYWluICNuZXctdG9kby1mb3JtICNuZXctdG9kbzpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbyB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiA2cHg7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbyBpb24taWNvbiB7XFxuICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4O1xcbiAgICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC41czsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAgICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzhlZjdkO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOmhvdmVyIGlvbi1pY29uIHtcXG4gICAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG5cXG4vKiBSaWdodCBzaWRlIG9mIHRoZSBwYWdlICovXFxuI3RvZG8tbWlzYy1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiB0b2RvLW1pc2M7XFxuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgei1pbmRleDogMTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyIHtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgICAgLW1vei1ib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7IH0gfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI3RvZG8tbmFtZS1jaGFuZ2VyLWNvbnRhaW5lcixcXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIsXFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyLFxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI25vdGUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICN0b2RvLW5hbWUtY2hhbmdlci1jb250YWluZXIgI2RhdGUsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI2RhdGUsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI2RhdGUsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNub3RlLWNvbnRhaW5lciAjZGF0ZSB7XFxuICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICN0b2RvLW5hbWUtY2hhbmdlci1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgMDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMnB4IC0ycHggNXB4IC0xcHggI2NhY2FjYTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAtMnB4IC0ycHggNXB4IC0xcHggI2NhY2FjYTtcXG4gICAgYm94LXNoYWRvdzogLTJweCAtMnB4IDVweCAtMXB4ICNjYWNhY2E7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3RvZG8tbmFtZS1jaGFuZ2VyLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgICAgaGVpZ2h0OiA0MHB4OyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjbm90ZS1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0zcHggNHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgIC1tb3otYm94LXNoYWRvdzogLTNweCA0cHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgYm94LXNoYWRvdzogLTNweCA0cHggNXB4IC0ycHggI2NhY2FjYTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjbm90ZS1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICAgIGhlaWdodDogMTYwcHg7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIsXFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyxcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIHtcXG4gICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5LnNlbGVjdGVkLTEsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5sb3ctcHJpb3JpdHkuc2VsZWN0ZWQtMSxcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eS5zZWxlY3RlZC0xLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAubG93LXByaW9yaXR5LnNlbGVjdGVkLTEge1xcbiAgICAgICAgY29sb3I6ICMxMDY4Nzc7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eS5zZWxlY3RlZC0yLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubG93LXByaW9yaXR5LnNlbGVjdGVkLTIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5oaWdoLXByaW9yaXR5LnNlbGVjdGVkLTIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHkuc2VsZWN0ZWQtMixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLmxvdy1wcmlvcml0eS5zZWxlY3RlZC0yLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAuaGlnaC1wcmlvcml0eS5zZWxlY3RlZC0yIHtcXG4gICAgICAgIGNvbG9yOiAjNzMwMGZmOyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5vbm1vdXNlb3Zlcjpob3ZlcixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLm9ubW91c2VvdmVyOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjMTA2ODc3OyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHk6aG92ZXIgfiAubG93LXByaW9yaXR5LFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5OmhvdmVyIH4gLmxvdy1wcmlvcml0eSB7XFxuICAgICAgICBjb2xvcjogIzEwNjg3NzsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAuaGlnaC1wcmlvcml0eTpob3ZlcixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLmhpZ2gtcHJpb3JpdHk6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICM3MzAwZmY7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgaW9uLWljb24sXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIGlvbi1pY29uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNkYXRlLXJlbW92ZXIgaW9uLWljb24sXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI2RhdGUtcmVtb3ZlciBpb24taWNvbiB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogNHB4O1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4OyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjZGF0ZS1yZW1vdmVyIGlvbi1pY29uOmhvdmVyLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI2RhdGUtcmVtb3ZlciBpb24taWNvbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyIC5taXNjLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgY29sb3I6ICM2YjZiNmI7XFxuICAgIHdpZHRoOiAxMjBweDsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjFlbTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyIHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjY2xvc2UtZGV0YWlscy1idG4ge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIHdpZHRoOiA2MnB4OyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNjbG9zZS1kZXRhaWxzLWJ0biBpb24taWNvbiB7XFxuICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgIGNvbG9yOiAjYzVjNWM1O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDdweCAtMTNweCAjY2FjYWNhLCAwcHggNXB4IDEwcHggMHB4ICNjYWNhY2E7XFxuICAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCA3cHggLTEzcHggI2NhY2FjYSwgMHB4IDVweCAxMHB4IDBweCAjY2FjYWNhO1xcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDdweCAtMTNweCAjY2FjYWNhLCAwcHggNXB4IDEwcHggMHB4ICNjYWNhY2E7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjY2xvc2UtZGV0YWlscy1idG4gaW9uLWljb246aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICM2ZTZlNmU7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2NhbGVuZGFyLjc1MDRjODg5ZmMyZDlkNGY1NDAwYmE2OThiMjU0Mzc3LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9lZGl0LjI5MjdmOGRlNDI2OGJhZThmMTFjNGRmZTNhZGM3MmI1LnN2Z1wiOyIsImltcG9ydCBcIi4uL1NDU1Mvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0ICogYXMgTWVudUJ0biBmcm9tIFwiLi9zdHlsZS9tZW51LmpzXCI7XG5pbXBvcnQgKiBhcyBSZXNpemUgZnJvbSBcIi4vc3R5bGUvcmVzaXplLmpzXCI7XG5pbXBvcnQgKiBhcyBQcmlvcml0eSBmcm9tIFwiLi9zdHlsZS9wcmlvcml0eS5qc1wiO1xuaW1wb3J0ICogYXMgQWRkVGFza0J0biBmcm9tIFwiLi90YXNrcy9hZGQuanNcIjtcbmltcG9ydCAqIGFzIERlZmF1bHRQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0cy9kZWZhdWx0cy5qc1wiO1xuaW1wb3J0ICogYXMgSW5wdXQgZnJvbSBcIi4vdGFza3MvZGV0YWlsc0lucHV0LmpzXCI7XG5pbXBvcnQgeyByZW5kZXJBbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzL3JlbmRlci5qc1wiO1xuXG4vLyBTdHlsZVxuTWVudUJ0bi5zaG93UHJvamVjdHMoKTtcblJlc2l6ZS5yZXNwb25zaXZlKCk7XG5Qcmlvcml0eS5zdGFyc0NoYW5nZUNvbG9ycygpO1xuXG4vLyBBcHAgbG9naWNcblxuLy9jcmVhdGUgYSBsaXN0IG9mIHByb2plY3RzXG5sZXQgcHJvamVjdHMgPSBbLi4uRGVmYXVsdFByb2plY3RzLmdldFByb2plY3RzKCldO1xuXG4vLyByZW5kZXIgbGlzdCBvZiBwcm9qZWN0c1xucmVuZGVyQWxsUHJvamVjdHMocHJvamVjdHMsIDApO1xuIiwiaW1wb3J0IHsgcHJvamVjdEZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5LmpzXCI7XG5pbXBvcnQgKiBhcyBEZWZhdWx0VGFza3MgZnJvbSBcIi4uL3Rhc2tzL2RlZmF1bHRzLmpzXCI7XG5cbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAvLyBUaGlzIGZ1bmN0aW9uIHNpbXBseSBjcmVhdGVzIGFuIGFycmF5IHdpdGggZGVmYXVsdCBwcm9qZWN0cyBpbiBpdFxuICBsZXQgYWxsUHJvamVjdHMgPSBbXG4gICAgcHJvamVjdEZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiUHJvamVjdCAxXCIsXG4gICAgICB0YXNrczogRGVmYXVsdFRhc2tzLmdldFRhc2tzQnlOdW1iZXIoMSksXG4gICAgfSksXG4gICAgcHJvamVjdEZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiUHJvamVjdCAyXCIsXG4gICAgICB0YXNrczogRGVmYXVsdFRhc2tzLmdldFRhc2tzQnlOdW1iZXIoMiksXG4gICAgfSksXG4gICAgcHJvamVjdEZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiU29tZXRoaW5nIHRvIGNvbnNpZGVyXCIsXG4gICAgICB0YXNrczogRGVmYXVsdFRhc2tzLmdldFRhc2tzQnlOdW1iZXIoMyksXG4gICAgfSksXG4gIF07XG5cbiAgcmV0dXJuIGFsbFByb2plY3RzO1xufVxuXG5leHBvcnQgeyBnZXRQcm9qZWN0cyB9O1xuIiwiY29uc3QgcHJvamVjdEZhY3RvcnkgPSBmdW5jdGlvbiAoe1xuICB0aXRsZSA9IFwiXCIsXG4gIHRhc2tzID0gW10sXG4gIGNvdW50ID0gdGFza3MubGVuZ3RoLFxufSkge1xuICByZXR1cm4geyB0aXRsZSwgdGFza3MsIGNvdW50IH07XG59O1xuXG5leHBvcnQgeyBwcm9qZWN0RmFjdG9yeSB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tLCBjbGVhckNvbnRlbnRPZiB9IGZyb20gXCIuLi90YXNrcy9yZW5kZXIuanNcIjtcbmltcG9ydCAqIGFzIElucHV0IGZyb20gXCIuLi90YXNrcy9kZXRhaWxzSW5wdXQuanNcIjtcbmltcG9ydCAqIGFzIEFkZFRhc2tCdG4gZnJvbSBcIi4uL3Rhc2tzL2FkZC5qc1wiO1xuXG5mdW5jdGlvbiByZW5kZXJBbGxQcm9qZWN0cyhhcnIsIG51bWJlcikge1xuICAvLyBDbGVhciBhbGwgcHJldmlvdXNseSByZW5kZXJlZCBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG4gIGNsZWFyQ29udGVudE9mKFwicHJvamVjdC1saXN0XCIpO1xuICAvL1JlbmRlciBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IHRvIHRoZSBwYWdlXG4gIGZvciAobGV0IFtpbmRleCwgaXRlbV0gb2YgYXJyLmVudHJpZXMoKSkge1xuICAgIHJlbmRlclByb2plY3QoaW5kZXgsIGl0ZW0pO1xuICB9XG4gIC8vIFJlbmRlciBhbGwgdGFza3MgZnJvbSBwcm9qZWN0XG4gIHJlbmRlckFsbFRhc2tzRnJvbShhcnJbbnVtYmVyXS50YXNrcyk7XG5cbiAgLy8gQnV0dG9uIHRvIGFkZCB0YXNrIHRvIGEgZGVmaW5lZCBhcnJheVxuICAvLyBBbHNvIHJlcmVuZGVyIHRoZSBhcnJheSBhZnRlciBhZGRpbmcgYSB0YXNrXG4gIEFkZFRhc2tCdG4uYWRkVGFza1RvKGFycltudW1iZXJdLnRhc2tzKTtcblxuICAvLyBDaGFuZ2UgdGFza3Mgd2hlbiB1c2VyIHR5cGUgc29tZXRoaW5nIHRvIGRldGFpbHMgd2luZG93XG4gIElucHV0LmNoYW5nZVRhc2tPbklucHV0KGFycltudW1iZXJdLnRhc2tzKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdChpLCBwcm9qZWN0KSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpLmFwcGVuZChjcmVhdGVQcm9qZWN0KGksIHByb2plY3QpKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChpLCBwcm9qZWN0KSB7XG4gIC8vIGNyZWF0ZSBhIGxpIGVsZW1lbnRcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3RcIik7XG4gIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIGBwcm9qZWN0LSR7aX1gKTtcbiAgLy8gYXBwZW5kIGV2ZXJ5dGhpbmcgdG8gaXRcbiAgbGkuYXBwZW5kKGNyZWF0ZUljb24oKSk7XG4gIGxpLmFwcGVuZChjcmVhdGVUaXRsZUFuZENvdW50KHByb2plY3QudGl0bGUsIHByb2plY3QuY291bnQpKTtcbiAgbGkuYXBwZW5kKGNyZWF0ZURlbGV0ZUJ0bihpKSk7XG4gIHJldHVybiBsaTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSWNvbigpIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3QtaWNvblwiKTtcblxuICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpb24taWNvblwiKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicmVhZGVyLW91dGxpbmVcIik7XG5cbiAgc3Bhbi5hcHBlbmQoaWNvbik7XG5cbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlQW5kQ291bnQodGl0bGUsIGNvdW50KSB7XG4gIC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBmb3IgVGl0bGUgYW5kIFRvZG8gQ291bnQgTnVtYmVyXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LXRpdGxlLWNvdW50LWNvbnRhaW5lclwiKTtcbiAgLy8gQ3JlYXRlIGEgc3BhbiBmb3IgdGl0bGVcbiAgbGV0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG5hbWVTcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdC1uYW1lXCIpO1xuICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAvLyBDcmVhdGUgYSBzcGFuIGZvciBjb3VudCBudW1iZXJcbiAgbGV0IGNvdW50U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb3VudFNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb3VudC10b2Rvc1wiKTtcbiAgY291bnRTcGFuLnRleHRDb250ZW50ID0gY291bnQ7XG4gIC8vIEFwcGVuZCBzcGFucyB0byBhIGRpdiBhbmQgcmV0dXJuIGEgY29udGFpbmVyXG4gIGRpdi5hcHBlbmQobmFtZVNwYW4pO1xuICBkaXYuYXBwZW5kKGNvdW50U3Bhbik7XG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUJ0bihpKSB7XG4gIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbGV0ZS1wcm9qZWN0LSR7aX1gKTtcblxuICAvLyBjcmVhdGUgYW4gaWNvbiBhbmQgYXBwZW5kIGl0IHRvIGJ1dHRvblxuICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpb24taWNvblwiKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY2xvc2UtY2lyY2xlXCIpO1xuXG4gIGJ0bi5hcHBlbmRDaGlsZChpY29uKTtcblxuICByZXR1cm4gYnRuO1xufVxuXG5leHBvcnQgeyByZW5kZXJBbGxQcm9qZWN0cyB9O1xuIiwiZnVuY3Rpb24gc2hvd1Byb2plY3RzKCkge1xuICAvLyBNYWtlIG1lbnUgYnV0dG9uIGluIHRoZSB0b3AgbGVmdCBjb3JuZXIgZG8gd29yayAoY2hhbmdlIHByb2plY3RzIHRvIHdpZGUgb3IgbmFycm93KVxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYnJvYWRlblByb2plY3RDb250YWluZXIoKSk7XG59XG5cbmZ1bmN0aW9uIGJyb2FkZW5Qcm9qZWN0Q29udGFpbmVyKCkge1xuICAvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2UgYW5kIHRvZ2dsZSBhIGNsYXNzICdicm9hZCcgb24gZWFjaFxuICBmb3IgKGxldCBlbGVtZW50IG9mIGdldEVsZW1lbnRzVG9Ccm9hZCgpKSB7XG4gICAgdG9nZ2xlQnJvYWQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWluaW1pemVQcm9qZWN0Q29udGFpbmVyKCkge1xuICAvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2UgYW5kIHRvZ2dsZSBhIGNsYXNzICdicm9hZCcgb24gZWFjaFxuICBmb3IgKGxldCBlbGVtZW50IG9mIGdldEVsZW1lbnRzVG9Ccm9hZCgpKSB7XG4gICAgYWRkQnJvYWQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQnJvYWQoZWxlbWVudCkge1xuICAvLyBSZW1vdmUgY2xhc3MgJ2Jyb2FkJyBmcm9tIGFuIGVsZW1lbnRcbiAgLy8gdGhpcyBjbGFzcyBjaGFuZ2VzIGxlZnQtc2lkZSBwYWdlIG1lbnUgbWFraW5nIGl0IHNtYWxsZXJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnJvYWRcIik7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJyb2FkKGVsZW1lbnQpIHtcbiAgLy8gQWRkL3JlbW92ZSBjbGFzcyAnYnJvYWQnIHRvIGFuIGVsZW1lbnRcbiAgLy8gdGhpcyBjbGFzcyBjaGFuZ2VzIGxlZnQtc2lkZSBwYWdlIG1lbnUgbWFraW5nIGl0IHNtYWxsZXJcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYnJvYWRcIik7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRzVG9Ccm9hZCgpIHtcbiAgLy8gVGFrZSBzb21lIERPTSBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcbiAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdFwiKTtcbiAgbGV0IHByb2plY3RJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtaWNvblwiKTtcbiAgbGV0IHByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICBcInByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyIFwiXG4gICk7XG4gIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKTtcbiAgbGV0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1mb3JtXCIpO1xuICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3RcIik7XG4gIGxldCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtcHJvamVjdFwiKTtcblxuICAvLyBQdXQgdGhlbSBpbiB0aGUgYXJyYXkgYW5kIHJldHVybiBpdFxuICBsZXQgZWxlbWVudHMgPSBbXG4gICAgY29udGVudCxcbiAgICBwcm9qZWN0TGlzdCxcbiAgICAuLi5wcm9qZWN0LFxuICAgIC4uLnByb2plY3RJY29uLFxuICAgIC4uLnByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyLFxuICAgIC4uLmRlbGV0ZVByb2plY3RCdG4sXG4gICAgbmV3UHJvamVjdEZvcm0sXG4gICAgbmV3UHJvamVjdCxcbiAgICBzdWJtaXRQcm9qZWN0LFxuICBdO1xuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbmV4cG9ydCB7IHNob3dQcm9qZWN0cywgbWluaW1pemVQcm9qZWN0Q29udGFpbmVyIH07XG4iLCJmdW5jdGlvbiBzdGFyc0NoYW5nZUNvbG9ycygpIHtcbiAgYWN0aXZhdGVGaXJzdFN0YXIoKTtcbiAgYWN0aXZhdGVTZWNvbmRTdGFyKCk7XG4gIGFjdGl2YXRlVGhpcmRTdGFyKCk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlRmlyc3RTdGFyKCkge1xuICBnZXRTdGFyMSgpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhY3RpdmF0ZVN0YXIoMSkpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVNlY29uZFN0YXIoKSB7XG4gIGdldFN0YXIyKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFjdGl2YXRlU3RhcigyKSk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlVGhpcmRTdGFyKCkge1xuICBnZXRTdGFyMygpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhY3RpdmF0ZVN0YXIoMykpO1xufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZVN0YXIobnVtYmVyKSB7XG4gIC8vIE1ha2UgYSBzdGFyIHdpdGggYSBjZXJ0YWluIG51bWJlciBjaGFuZ2UgaXRzIHN0eWxlXG4gIC8vIE51bWJlciBjYW4gYmUgMSwgMiBvciAzIGJlY2F1c2UgdGhlcmUgYXJlIGEgdG90YWwgb2YgMyBzdGFyXG4gIGlmIChudW1iZXIgPCAxIHx8IG51bWJlciA+IDMpXG4gICAgY29uc29sZS5sb2coXG4gICAgICBgQ2FuJ3QgYWN0aXZhdGUgc3RhciAke251bWJlcn0gaW4gYWN0aXZhdGVTdGFyKCkuIFBvc3NpYmxlIHZhbHVlczogMSwgMiwgM2BcbiAgICApO1xuICBzd2l0Y2ggKG51bWJlcikge1xuICAgIGNhc2UgMTpcbiAgICAgIG91dGxpbmVTZWNvbmRTdGFyKCk7XG4gICAgICBvdXRsaW5lVGhpcmRTdGFyKCk7XG4gICAgICByZW1vdmVDb2xvckZyb21BbGxTdGFycygpO1xuICAgICAgYWRkTWVkaXVtT25tb3VzZW92ZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIGZpbGxTZWNvbmRTdGFyKCk7XG4gICAgICBhZGRDb2xvclR3b1N0YXJzKCk7XG4gICAgICBvdXRsaW5lVGhpcmRTdGFyKCk7XG4gICAgICBkZWNvbG9yVGhpcmRTdGFyKCk7XG4gICAgICBhZGRNZWRpdW1Pbm1vdXNlb3ZlcigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgZmlsbFNlY29uZFN0YXIoKTtcbiAgICAgIGZpbGxUaGlyZFN0YXIoKTtcbiAgICAgIGFkZENvbG9yVGhyZWVTdGFycygpO1xuICAgICAgcmVtb3ZlTWVkaXVtT25tb3VzZW92ZXIoKTtcbiAgICAgIGJyZWFrO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNFQ09ORCBTVEFSXG5mdW5jdGlvbiBmaWxsU2Vjb25kU3RhcigpIHtcbiAgLy8gR2V0IHRoZSBjaGlsZCBvZiB0aGUgcHJpb3JpdHkgYW5kIG1ha2UgaXQgZmlsbGVkIHN0YXJcbiAgZ2V0U3RhcjIoKS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic3RhclwiKTtcbn1cblxuZnVuY3Rpb24gb3V0bGluZVNlY29uZFN0YXIoKSB7XG4gIC8vIEdldCB0aGUgY2hpbGQgb2YgdGhlIHByaW9yaXR5IGFuZCBtYWtlIGl0IG91dGxpbmVkIHN0YXJcbiAgZ2V0U3RhcjIoKS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic3Rhci1vdXRsaW5lXCIpO1xufVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBUSElSRCBTVEFSXG5cbmZ1bmN0aW9uIGZpbGxUaGlyZFN0YXIoKSB7XG4gIC8vIEdldCB0aGUgY2hpbGQgb2YgdGhlIHByaW9yaXR5IGFuZCBtYWtlIGl0IGZpbGxlZCBzdGFyXG4gIGdldFN0YXIzKCkuY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInN0YXJcIik7XG59XG5cbmZ1bmN0aW9uIG91dGxpbmVUaGlyZFN0YXIoKSB7XG4gIC8vIEdldCB0aGUgY2hpbGQgb2YgdGhlIHByaW9yaXR5IGFuZCBtYWtlIGl0IG91dGxpbmVkIHN0YXJcbiAgZ2V0U3RhcjMoKS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic3Rhci1vdXRsaW5lXCIpO1xufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gSGVscGVyc1xuXG5mdW5jdGlvbiByZW1vdmVNZWRpdW1Pbm1vdXNlb3ZlcigpIHtcbiAgLy8gU2Vjb25kIHN0YXIgaGFzIGEgY2xhc3MgXCJvbm1vdXNlb3ZlclwiIHdpdGggYSBob3ZlciBlZmZlY3RcbiAgLy8gV2hlbiB0aGUgM3JkIHN0YXIgaXMgY2hvc2VuIHJlbW92ZSB0aGlzIGhvdmVyIGVmZmVjdCBmcm9tIHRoZSAybmQgc3RhclxuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5yZW1vdmUoXCJvbm1vdXNlb3ZlclwiKTtcbn1cblxuZnVuY3Rpb24gYWRkTWVkaXVtT25tb3VzZW92ZXIoKSB7XG4gIC8vIFNlY29uZCBzdGFyIGhhcyBhIGNsYXNzIFwib25tb3VzZW92ZXJcIiB3aXRoIGEgaG92ZXIgZWZmZWN0XG4gIC8vIFdoZW4gdGhlIDFzdCBPUiAybmQgc3RhciBpcyBjaG9zZW4gYWRkIHRoaXMgaG92ZXIgZWZmZWN0IHRvIHRoZSAybmQgc3RhclxuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5hZGQoXCJvbm1vdXNlb3ZlclwiKTtcbn1cblxuZnVuY3Rpb24gc3RhcklzT3V0bGluZWQoc3Rhcikge1xuICByZXR1cm4gc3Rhci5jaGlsZHJlblswXS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpID09PSBcInN0YXItb3V0bGluZVwiO1xufVxuXG5mdW5jdGlvbiBhZGRDb2xvclR3b1N0YXJzKCkge1xuICByZW1vdmVDb2xvckZyb21BbGxTdGFycygpO1xuICBnZXRTdGFyMSgpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0xXCIpO1xuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0xXCIpO1xufVxuZnVuY3Rpb24gYWRkQ29sb3JUaHJlZVN0YXJzKCkge1xuICByZW1vdmVDb2xvckZyb21BbGxTdGFycygpO1xuICBnZXRTdGFyMSgpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0yXCIpO1xuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0yXCIpO1xuICBnZXRTdGFyMygpLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC0yXCIpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDb2xvckZyb21BbGxTdGFycygpIHtcbiAgZGVjb2xvckZpcnN0U3RhcigpO1xuICBkZWNvbG9yU2Vjb25kU3RhcigpO1xuICBkZWNvbG9yVGhpcmRTdGFyKCk7XG59XG5cbmZ1bmN0aW9uIGRlY29sb3JGaXJzdFN0YXIoKSB7XG4gIGdldFN0YXIxKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTFcIik7XG4gIGdldFN0YXIxKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTJcIik7XG59XG5mdW5jdGlvbiBkZWNvbG9yU2Vjb25kU3RhcigpIHtcbiAgZ2V0U3RhcjIoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMVwiKTtcbiAgZ2V0U3RhcjIoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMlwiKTtcbn1cbmZ1bmN0aW9uIGRlY29sb3JUaGlyZFN0YXIoKSB7XG4gIGdldFN0YXIzKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTFcIik7XG4gIGdldFN0YXIzKCkuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLTJcIik7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXIxKCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTFcIik7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXIyKCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTJcIik7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXIzKCkge1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTNcIik7XG59XG5cbmV4cG9ydCB7IHN0YXJzQ2hhbmdlQ29sb3JzLCBhY3RpdmF0ZVN0YXIgfTtcbiIsImltcG9ydCB7IGdldENvbXB1dGVkRGlzcGxheSB9IGZyb20gXCIuLi90YXNrcy9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5pbXBvcnQgeyBtaW5pbWl6ZVByb2plY3RDb250YWluZXIgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbmZ1bmN0aW9uIHJlc3BvbnNpdmUoKSB7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgLy8gUmVzaXppbmcgd2luZG93IG1ha2VzIG1pZGRsZSBjb2x1bW4gZml0XG4gIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTAyNHB4KVwiKS5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgLy8gSWYgc2NyZWVuIGlzIG5hcnJvd2VyIHRoYW4gMTAyNHB4IGFuZCBkZXRhaWxzIGFyZSBvcGVuIChyaWdodCBzaWRlIG9mIHRoZSBwYWdlKVxuICAgIC8vIHRoYW4gbWluaW1pemUgbGVmdCBzaWRlIGFuZCBtYWtlIFwibWFpblwiIGZpdCB0aGUgd2hvbGUgc2Vjb25kIGNvbHVtblxuICAgIGlmIChzY3JlZW5MZXNzVGhlbjEwMjQoKSAmJiBnZXRDb21wdXRlZERpc3BsYXkoZGV0YWlscykgPT09IFwiZmxleFwiKSB7XG4gICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvNFwiO1xuICAgICAgbWluaW1pemVQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgICAvLyBEb2Vzbid0IG1hdHRlciB0aGUgc2l6ZSBvZiB0aGUgc2NyZWVuLFxuICAgICAgLy8gaWYgZGV0YWlscyBhcmUgY2xvc2VkICdtYWluJyBmaXQgdGhlIHdob2xlIHNlY29uZCBjb2x1bW5cbiAgICB9IGVsc2UgaWYgKGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSA9PT0gXCJub25lXCIpIHtcbiAgICAgIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gICAgICAvLyBFbHNlIGZvciBlLmcuIHdoZW4gc2NyZWVuIGFyZSB3aWRlciB0aGVuIDEwMjRweCBhbmRcbiAgICAgIC8vIGRldGFpbHMgYXJlIG9wZW4sIHRoZW4gbWFpbiBpcyB0aGUgY29sdW1uIGluIHRoZSBtaWRkbGVcbiAgICB9IGVsc2Uge1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzNcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzY3JlZW5MZXNzVGhlbjEwMjQoKSB7XG4gIC8vIENoZWNrIGlmIHNjcmVlbiBpcyBsZXNzIHRoZW4gMTAyNHB4IHdpZGVcbiAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTAyNHB4KVwiKS5tYXRjaGVzO1xufVxuXG4vLyBXaGVuIHJlc2l6aW5nIHdpbmRvdyBtaWRkbGUgY29sdW1uIHJlc2l6ZSBpdHNlbGYgdG8gYmUgcmVzcG9uc2l2ZVxuZXhwb3J0IHsgcmVzcG9uc2l2ZSwgc2NyZWVuTGVzc1RoZW4xMDI0IH07XG4iLCJpbXBvcnQgeyB0YXNrRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcbmltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuXG5mdW5jdGlvbiBhZGRUYXNrVG8oYXJyKSB7XG4gIGNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC10b2RvXCIpO1xuXG4gIHN1Ym1pdFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIFByZXZlbnQgZGVmYXVsdCBzdWJtaXQgYmVoYXZpb3JcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIEdldCB0YXNrIG5hbWUgZnJvbSBVc2VyIGFuZCBhZGQgaXQgdG8gdGFza3MgYXJyYXlcbiAgICBwdXNoVGFza1RvKGFycik7XG4gICAgY29uc29sZS50YWJsZShhcnIpO1xuICAgIC8vIFJlcmVuZGVyIGFycmF5XG4gICAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG5cbiAgICByZXR1cm4gYXJyO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHVzaFRhc2tUbyhhcnIpIHtcbiAgLy8gUHVzaCB0YXNrIHRvIGFycmF5XG4gIGFyci5wdXNoKGdldFRhc2soKSk7XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2soKSB7XG4gIC8vIEdldCB1c2VyIGlucHV0IHZhbHVlLCBzYXZlIGl0XG4gIGxldCB0YXNrID0gdGFza0ZhY3RvcnkoeyB0aXRsZTogZ2V0SW5wdXRWYWx1ZSgpIH0pO1xuICAvLyBhbmQgY2xlYXIgaW5wdXRcbiAgY2xlYXJUYXNrSW5wdXQoKTtcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoKSB7XG4gIC8vIEdldCB1c2VyIGlucHV0IHZhbHVlIGFzIE5ldyBUYXNrIDogU1RSSU5HXG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvXCIpLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tJbnB1dCgpIHtcbiAgLy8gQ2xlYXIgdXNlciBpbnB1dFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvXCIpLnZhbHVlID0gXCJcIjtcbn1cblxuZXhwb3J0IHsgZ2V0VGFzaywgYWRkVGFza1RvIH07XG4iLCJpbXBvcnQgeyB0YXNrRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcblxuZnVuY3Rpb24gZ2V0VGFza3NCeU51bWJlcihudW1iZXIgPSAxKSB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gc2ltcGx5IGNyZWF0ZXMgYW4gYXJyYXkgd2l0aCBkZWZhdWx0IHRhc2tzIGluIGl0XG4gIC8vIE51bWJlciBpcyBqdXN0IGEgbnVtYmVyIG9mIGJ1bmRsZSBmcm9tIDEgdG8gM1xuICBsZXQgYnVuZGxlMSA9IFtcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJMZWFybiBlbmdsaXNoXCIsXG4gICAgICBkYXRlOiBcIjE1LjAzLjIwMjVcIixcbiAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgbm90ZTogXCJzb21ldGhpbmdcIixcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJMZWFybiBlbmdsaXNoIGFnYWluXCIsXG4gICAgICBkYXRlOiBcIjE1LjAzLjIwMjhcIixcbiAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgIH0pLFxuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkFuZCBBZ2FpbiFcIixcbiAgICAgIHByaW9yaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgbm90ZTogXCJzb21ldGhpbmdcIixcbiAgICB9KSxcbiAgXTtcblxuICBsZXQgYnVuZGxlMiA9IFtcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJMZWFybiBnZXJtYW5cIixcbiAgICAgIGRhdGU6IFwiMTUuMDMuMjAxOFwiLFxuICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgbm90ZTogXCJzb21ldGhpbmdcIixcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJMZWFybiBNYXRoIVwiLFxuICAgICAgZGF0ZTogXCIxNS4wMy4yMDE4XCIsXG4gICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTEVIUk5FIERFVVRTQ0ghISFcIixcbiAgICAgIGRhdGU6IFwiMTUuMDMuMjAxOFwiLFxuICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgIH0pLFxuICBdO1xuXG4gIGxldCBidW5kbGUzID0gW1xuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIk1ha2Ugc3R1ZmZcIixcbiAgICAgIG5vdGU6IFwic29tZXRoaW5nXCIsXG4gICAgICBkb25lOiB0cnVlLFxuICAgIH0pLFxuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkRvIHN0dWZmXCIsXG4gICAgICBkYXRlOiBcIjEwLjAxLjIwMjBcIixcbiAgICAgIGRvbmU6IHRydWUsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiUnVuIHN0dWZmXCIsXG4gICAgICBub3RlOiBcInNvbWV0aGluZ1wiLFxuICAgICAgZG9uZTogdHJ1ZSxcbiAgICB9KSxcbiAgXTtcblxuICBzd2l0Y2ggKG51bWJlcikge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBidW5kbGUxO1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGJ1bmRsZTI7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gYnVuZGxlMztcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRUYXNrc0J5TnVtYmVyIH07XG4iLCJpbXBvcnQgeyByZW5kZXJBbGxUYXNrc0Zyb20gfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcbmltcG9ydCAqIGFzIERldGFpbHNUb2dnbGUgZnJvbSBcIi4vZGV0YWlsc1RvZ2dsZS5qc1wiO1xuXG5mdW5jdGlvbiBkZWxldGVUYXNrc0Zyb20oYXJyKSB7XG4gIC8vIFRha2UgdGhlIGNvbGxjZXRpb24gb2YgYWxsIGRlbGV0ZSBjcm9zcyBidXR0b25zIGZyb20gdGFza3MgYnkgY2xhc3MgbmFtZVxuICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkZWxldGUtdG9kby1idG5cIik7XG4gIC8vIExvb3AgdGhyb3VnaCBjb2xsZWN0aW9uIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBidXR0b25cbiAgZm9yIChsZXQgYnV0dG9uIG9mIGJ1dHRvbnMpIHtcbiAgICBkZWxldGVCdG5SZW1vdmVUYXNrKGJ1dHRvbiwgYXJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVCdG5SZW1vdmVUYXNrKGJ1dHRvbiwgYXJyKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIGFzc2lnbiBFdmVudCBsaXN0ZW5lciB0byBidXR0b25zXG4gIC8vIHRvIHJlbW92ZSBwYXJ0aWN1bGFyIHRhc2tzIGZyb20gcGFnZVxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gZ2V0IElkIG9mIGEgYnV0dG9uIHRvIHdoaWNoIGxpc3RlbmVyIGlzIGFzc2lnbmVkXG4gICAgbGV0IGJ0bklkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgIC8vIGdldCBvbmx5IG51bWJlciBhZnRlciB0aGUgaHlwaGVuIGZyb20gSWRcbiAgICBsZXQgbnVtYmVyID0gYnRuSWQuc3BsaXQoXCItXCIpWzFdO1xuICAgIC8vIEJlZm9yZSByZW1vdmluZyBhbiBpdGVtIG1ha2Ugc3VyZSB0byBjbG9zZSBpdHMgZGV0YWlsc1xuICAgIGNsb3NlRGV0YWlsc09mRGVsZXRlZFRhc2sobnVtYmVyKTtcbiAgICAvLyBSZW1vdmUgaXRlbSBmcm9tIHRoZSBhcnJheSBieSB0aGF0IG51bWJlclxuICAgIGFyci5zcGxpY2UobnVtYmVyLCAxKTtcbiAgICAvLyBSZXJlbmRlciBhcnJheVxuICAgIHJlbmRlckFsbFRhc2tzRnJvbShhcnIpO1xuICAgIC8vIEF2b2lkIGZpcmluZyBwYXJlbnQgZWxlbWVudCBsaXN0ZW5lciBhZnRlciBjbGlja2luZyBvbiB0aGUgYnV0dG9uXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRGV0YWlsc09mRGVsZXRlZFRhc2sobnVtYmVyKSB7XG4gIC8vIEJlZm9yZSByZW1vdmluZyBhbiBpdGVtIG1ha2Ugc3VyZSBoaXMgZGV0YWlscyBhcmUgbm90IHNob3duXG4gIC8vIElmIHRoZXkgYXJlIHRoZW4gaGlkZSB0aGVtXG4gIGlmIChEZXRhaWxzVG9nZ2xlLmdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpID09PSBudW1iZXIpXG4gICAgRGV0YWlsc1RvZ2dsZS5oaWRlRGV0YWlscygpO1xufVxuXG5leHBvcnQgeyBkZWxldGVUYXNrc0Zyb20gfTtcbiIsImltcG9ydCAqIGFzIERldGFpbHNUb2dnbGUgZnJvbSBcIi4vZGV0YWlsc1RvZ2dsZS5qc1wiO1xuaW1wb3J0IHsgYWN0aXZhdGVTdGFyIH0gZnJvbSBcIi4uL3N0eWxlL3ByaW9yaXR5LmpzXCI7XG5pbXBvcnQgeyByZW5kZXJBbGxUYXNrc0Zyb20gfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcblxuZnVuY3Rpb24gcHV0VGFza0luZm9Ub0lucHV0KHRhc2spIHtcbiAgLy8gRnVuY3Rpb24gdG8gcHV0IGluZm8gZnJvbSB0YXNrcyBpbiBpbnB1dHMgd2hlbiBkZXRhaWxzIGFyZSBzaG93blxuICBzZXROYW1lKHRhc2sudGl0bGUpO1xuICBzZXREYXRlKHRhc2suZGF0ZSk7XG4gIHNldFBpb3JpdHkodGFzay5wcmlvcml0eSk7XG4gIHNldE5vdGUodGFzay5ub3RlKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGFza09uSW5wdXQoYXJyKSB7XG4gIC8vIENoYW5nZSBhIHRhc2sgd2l0aCBpbnB1dCBmcm9tIERldGFpbHMgV2luZG93XG4gIGNoYW5nZVRpdGxlT25JbnB1dChhcnIpO1xuICBjaGFuZ2VEYXRlT25JbnB1dChhcnIpO1xuICBjaGFuZ2VQcmlvcml0eU9uSW5wdXQoYXJyKTtcbiAgY2hhbmdlTm90ZU9uSW5wdXQoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVGl0bGVPbklucHV0KGFycikge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbmFtZS1jaGFuZ2VyXCIpO1xuXG4gIGlucHV0Lm9uaW5wdXQgPSAoKSA9PiBjaGFuZ2VUaXRsZShhcnIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUaXRsZShhcnIpIHtcbiAgLy8gZ2V0IG51bWJlciBvZiB0YXNrIGZyb20gZGV0YWlsc1xuICBsZXQgdGFza051bWJlciA9IERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCk7XG4gIC8vIFVzZSB0aGlzIG51bWJlciB0byBnZXQgdG8gdGFzay50aXRsZSBpbiBhcnJheVxuICBsZXQgdGFzayA9IGFyclt0YXNrTnVtYmVyXTtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW5hbWUtY2hhbmdlclwiKTtcbiAgLy8gVGFzayB0aXRsZSBpcyBub3cgdXNlciBpbnB1dCB2YWx1ZVxuICB0YXNrLnRpdGxlID0gaW5wdXQudmFsdWU7XG4gIC8vIHJlcmVuZGVyIHRvIHNlZSB0aGUgY2hhbmdlc1xuICByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRGF0ZU9uSW5wdXQoYXJyKSB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcblxuICBpbnB1dC5vbmlucHV0ID0gKCkgPT4gY2hhbmdlRGF0ZShhcnIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VEYXRlKGFycikge1xuICAvLyBnZXQgbnVtYmVyIG9mIHRhc2sgZnJvbSBkZXRhaWxzXG4gIGxldCB0YXNrTnVtYmVyID0gRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKTtcbiAgLy8gVXNlIHRoaXMgbnVtYmVyIHRvIGdldCB0byB0YXNrLmRhdGUgaW4gYXJyYXlcbiAgbGV0IHRhc2sgPSBhcnJbdGFza051bWJlcl07XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKTtcbiAgLy8gVGFzayBkYXRlIGlzIG5vdyBmb3JtYXR0ZWQgZGF0ZSBpbnB1dCB2YWx1ZVxuICB0YXNrLmRhdGUgPSBmb3JtYXREYXRlMihpbnB1dC52YWx1ZSk7XG4gIC8vIHJlcmVuZGVyIHRvIHNlZSB0aGUgY2hhbmdlc1xuICByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHlPbklucHV0KGFycikge1xuICBsZXQgc3RhcnMgPSBbXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTFcIiksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTJcIiksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTNcIiksXG4gIF07XG5cbiAgZm9yIChsZXQgc3RhciBvZiBzdGFycykge1xuICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNoYW5nZVByaW9yaXR5KGFycikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KGFycikge1xuICAvLyBnZXQgbnVtYmVyIG9mIHRhc2sgZnJvbSBkZXRhaWxzXG4gIGxldCB0YXNrTnVtYmVyID0gRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKTtcbiAgLy8gVXNlIHRoaXMgbnVtYmVyIHRvIGdldCB0byB0YXNrLmRhdGUgaW4gYXJyYXlcbiAgbGV0IHRhc2sgPSBhcnJbdGFza051bWJlcl07XG4gIGxldCBpbnB1dCA9IGdldFByaW9yaXR5SW5wdXQoKTtcbiAgLy8gVGFzayBkYXRlIGlzIG5vdyBmb3JtYXR0ZWQgZGF0ZSBpbnB1dCB2YWx1ZVxuICB0YXNrLnByaW9yaXR5ID0gaW5wdXQ7XG4gIC8vIHJlcmVuZGVyIHRvIHNlZSB0aGUgY2hhbmdlc1xuICByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJpb3JpdHlJbnB1dCgpIHtcbiAgbGV0IHN0YXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTFcIik7XG5cbiAgaWYgKHN0YXIxLmNsYXNzTGlzdC5jb250YWlucyhcInNlbGVjdGVkLTFcIikpIHtcbiAgICByZXR1cm4gXCJtZWRpdW1cIjtcbiAgfSBlbHNlIGlmIChzdGFyMS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZC0yXCIpKSB7XG4gICAgcmV0dXJuIFwiaGlnaFwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcImxvd1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZU5vdGVPbklucHV0KGFycikge1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGUtY2hhbmdlclwiKTtcblxuICBpbnB1dC5vbmlucHV0ID0gKCkgPT4gY2hhbmdlTm90ZShhcnIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VOb3RlKGFycikge1xuICAvLyBnZXQgbnVtYmVyIG9mIHRhc2sgZnJvbSBkZXRhaWxzXG4gIGxldCB0YXNrTnVtYmVyID0gRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKTtcbiAgLy8gVXNlIHRoaXMgbnVtYmVyIHRvIGdldCB0byB0YXNrLm5vdGUgaW4gYXJyYXlcbiAgbGV0IHRhc2sgPSBhcnJbdGFza051bWJlcl07XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1jaGFuZ2VyXCIpO1xuICAvLyBUYXNrIE5vdGUgaXMgbm93IGZvcm1hdHRlZCBOb3RlIGlucHV0IHZhbHVlXG4gIHRhc2subm90ZSA9IGlucHV0LnZhbHVlO1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTZXQgaW5wdXRcbmZ1bmN0aW9uIHNldE5hbWUobmFtZSkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbmFtZS1jaGFuZ2VyXCIpLnZhbHVlID0gbmFtZTtcbn1cblxuZnVuY3Rpb24gc2V0RGF0ZShkYXRlKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZSA9IGZvcm1hdERhdGUoZGF0ZSk7XG4gIGZvcm1hdERhdGUoZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHNldFBpb3JpdHkobGV2ZWwpIHtcbiAgaWYgKGxldmVsID09PSBcImhpZ2hcIikge1xuICAgIGFjdGl2YXRlU3RhcigzKTtcbiAgfSBlbHNlIGlmIChsZXZlbCA9PT0gXCJtZWRpdW1cIikge1xuICAgIGFjdGl2YXRlU3RhcigyKTtcbiAgfSBlbHNlIGlmIChsZXZlbCA9PT0gXCJsb3dcIikge1xuICAgIGFjdGl2YXRlU3RhcigxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXROb3RlKG5vdGUpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlLWNoYW5nZXJcIikudmFsdWUgPSBub3RlO1xufVxuXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgLy8gSWYgZGF0ZSBpcyB1bmRlZmluZWQgeWV0LCB0aGVuIHJldHVybiBub3RoaW5nIFwiXCJcbiAgaWYgKCFkYXRlKSByZXR1cm4gXCJcIjtcbiAgLy8gRGF0ZSBmb3JtYXR0aW5nOiBmcm9tIFwiZGQubW0ueXl5eVwiIHRvIFwieXl5eS1NTS1kZFwiXG4gIGxldCBkYXkgPSBkYXRlLnNwbGl0KFwiLlwiKVswXTtcbiAgbGV0IG1vbnRoID0gZGF0ZS5zcGxpdChcIi5cIilbMV07XG4gIGxldCB5ZWFyID0gZGF0ZS5zcGxpdChcIi5cIilbMl07XG5cbiAgbGV0IGZvcm1hdHRlZCA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gIHJldHVybiBmb3JtYXR0ZWQ7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUyKGRhdGUpIHtcbiAgLy8gSWYgZGF0ZSBpcyB1bmRlZmluZWQgeWV0LCB0aGVuIHJldHVybiBub3RoaW5nIFwiXCJcbiAgaWYgKCFkYXRlKSByZXR1cm4gXCJcIjtcbiAgLy8gRGF0ZSBmb3JtYXR0aW5nOiBmcm9tICBcInl5eXktTU0tZGRcIiB0byBcImRkLm1tLnl5eXlcIlxuICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi1cIilbMl07XG4gIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCItXCIpWzFdO1xuICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCItXCIpWzBdO1xuXG4gIGxldCBmb3JtYXR0ZWQgPSBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn1gO1xuICByZXR1cm4gZm9ybWF0dGVkO1xufVxuXG5leHBvcnQgeyBwdXRUYXNrSW5mb1RvSW5wdXQsIGNoYW5nZVRhc2tPbklucHV0IH07XG4iLCJpbXBvcnQgeyBzY3JlZW5MZXNzVGhlbjEwMjQgfSBmcm9tIFwiLi4vc3R5bGUvcmVzaXplLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzSW5wdXQgZnJvbSBcIi4vZGV0YWlsc0lucHV0LmpzXCI7XG5cbmZ1bmN0aW9uIHRhc2tzVG9nZ2xlRGV0YWlscyhhcnIpIHtcbiAgLy8gTWFrZSB0b2RvIHRhc2tzIHNob3cgZGV0YWlscyBvbiBjbGljayAoZnJvbSByaWdodCBzaWRlKVxuICB0b2RvTGlzdFNob3dEZXRhaWxzKGFycik7XG4gIC8vIE1ha2UgYnV0dG9uIGluIGRldGFpbHMgaW50ZXJhY3Q6IGhpZGUgZGV0YWlsc1xuICBBcnJvd0hpZGVEZXRhaWxzKCk7XG59XG5cbmZ1bmN0aW9uIHRvZG9MaXN0U2hvd0RldGFpbHMoYXJyKSB7XG4gIC8vIE1ha2UgdG9kbyBsaXN0cyBzaG93IGRldGFpbHMgb25jbGlja1xuICBsZXQgdGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb1wiKTtcblxuICBmb3IgKGxldCB0YXNrIG9mIHRhc2tzKSB7XG4gICAgdGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIC8vIGdldCBJZCBvZiBhIHRhc2sgdG8gd2hpY2ggbGlzdGVuZXIgaXMgYXNzaWduZWRcbiAgICAgIGxldCB0YXNrSWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgICAvLyBnZXQgb25seSBudW1iZXIgZnJvbSBJZCBhZnRlciB0aGUgaHlwaGVuXG4gICAgICBsZXQgbnVtYmVyID0gdGFza0lkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAgIC8vIFBhc3MgYSBudW1iZXIgb2YgdGhlIGNsaWNrZWQgdGFzayB0byBkZXRhaWxzXG4gICAgICB0b2dnbGVEZXRhaWxzKG51bWJlcik7XG4gICAgICAvLyBQdXQgaW5mbyBmcm9tIHRhc2tzIGluIGlucHV0cyB3aGVuIGRldGFpbHMgYXJlIHNob3duXG4gICAgICBEZXRhaWxzSW5wdXQucHV0VGFza0luZm9Ub0lucHV0KGFycltudW1iZXJdKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBBcnJvd0hpZGVEZXRhaWxzKCkge1xuICAvLyBNYWtlIEFycm93IGhpZGUgRGV0YWlscyBvbmNsaWNrXG4gIGxldCBhcnJvd0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZGV0YWlscy1idG5cIik7XG4gIGFycm93QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoaWRlRGV0YWlscyk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURldGFpbHMobnVtYmVyKSB7XG4gIGxldCBpZE51bWJlciA9IGdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpO1xuXG4gIC8vIGlmIGRldGFpbHMgYXJlIHZpc2libGUgb24gdGhlIHBhZ2UgQU5EXG4gIC8vIGlmIHVzZXIgY2xpY2tzIG9uIHRoZSBzYW1lIHRhc2sgMnggdGhhbiBoaWRlIGRldGFpbHNcbiAgaWYgKGRldGFpbHNBcmVTaG93bigpICYmIGlkTnVtYmVyID09PSBudW1iZXIpIHtcbiAgICBoaWRlRGV0YWlscygpO1xuICB9IGVsc2Uge1xuICAgIHNob3dEZXRhaWxzKG51bWJlcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGV0YWlsc0FyZVNob3duKCkge1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgLy8gQXJlIGRldGFpbHMgc2hvd24gb24gdGhlIHBhZ2U/IFJldHVybiBib29sZWFuOlxuICByZXR1cm4gZ2V0Q29tcHV0ZWREaXNwbGF5KGRldGFpbHMpICE9PSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCkge1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgLy8gVGFrZSBpZCBvZiB0aGUgZGV0YWlscyBjaGlsZFxuICBsZXQgZGV0YWlsc0NvbnRhaW5lcklkID0gZGV0YWlscy5jaGlsZHJlblswXS5pZDtcbiAgLy8gVGFrZSBhIG51bWJlciBmcm9tIHRoYXQgaWQgYW5kIHJldHVybiBpdFxuICBsZXQgaWROdW1iZXIgPSBkZXRhaWxzQ29udGFpbmVySWQuc3BsaXQoXCItXCIpWzJdO1xuICByZXR1cm4gaWROdW1iZXI7XG59XG5cbmZ1bmN0aW9uIHNldERldGFpbHNJZFRvKG51bWJlcikge1xuICAvLyBGaXJzdCBtYWtlIGRldGFpbHMgSUQgdGhlIHNhbWUgYXMgaW5pdGlhbCBJRCAod2l0aCBubyBudW1iZXJzKVxuICAvLyBBbm90aGVyIHdvcmRzIHJlbW92ZSBhbGwgZXhpc3RpbmcgbnVtYmVycyBmcm9tIGl0XG4gIG1ha2VEZXRhaWxzRGVmYXVsdCgpO1xuICAvLyBUaGVuIHBhc3MgYSBudW1iZXIgdG8gaXRcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGRldGFpbHMuY2hpbGRyZW5bMF0uaWQgKz0gYC0ke251bWJlcn1gO1xufVxuXG5mdW5jdGlvbiBoaWRlRGV0YWlscygpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIGhpZGUoZGV0YWlscyk7XG4gIC8vIFdoZW4gZGV0YWlscyBhcmUgaGlkZGVuIHRoZSBtYWluIGNvbHVtbiB3aWxsIGJlIGJyb2FkZXJcbiAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzRcIjtcbiAgLy8gV2hlbiBkZXRhaWxzIGFyZSBoaWRkZW4gdGhlaXIgZGV0YWlscy1jb250YWluZXItSUQgd2lsbCBiZSBkZWZhdWx0IHdpdGggbm8gbnVtYmVyXG4gIG1ha2VEZXRhaWxzRGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBzaG93RGV0YWlscyhudW1iZXIpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIHNob3dBc0ZsZXgoZGV0YWlscyk7XG4gIC8vIEFsc28gc2V0IG5ldyBJRCBudW1iZXIgdG8gZGV0YWlscyBjb250YWluZXIgKG9ubHkgaWYgaXQgZG9lc24ndCBoYXZlIElEIGFscmVhZHkpXG4gIHNldERldGFpbHNJZFRvKG51bWJlcik7XG4gIC8vIElmIHNjcmVlbiBpcyBiaWdnZXIgdGhhbiAxMDI0IHRoZW4gbWFrZSBcIm1haW5cIiB0aGUgbWlkZGxlIGNvbHVtbiBvZiAzIGNvbHVtbnNcbiAgaWYgKCFzY3JlZW5MZXNzVGhlbjEwMjQoKSkgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzNcIjtcbn1cblxuZnVuY3Rpb24gbWFrZURldGFpbHNEZWZhdWx0KCkge1xuICAvLyBDaGFuZ2UgSUQgb2YgY2hpbGQgb2YgdGhlIGRldGFpbHMgdG8gZGVmYXVsdCBcImRldGFpbHMtY29udGFpbmVyXCJcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGRldGFpbHMuY2hpbGRyZW5bMF0uaWQgPSBcImRldGFpbHMtY29udGFpbmVyXCI7XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkRGlzcGxheShlbGVtZW50KSB7XG4gIGxldCBjb21wdXRlZERpc3BsYXkgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKTtcbiAgcmV0dXJuIGNvbXB1dGVkRGlzcGxheTtcbn1cblxuZnVuY3Rpb24gc2hvd0FzRmxleChlbGVtZW50KSB7XG4gIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufVxuXG5mdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCB7XG4gIHRhc2tzVG9nZ2xlRGV0YWlscyxcbiAgZ2V0Q29tcHV0ZWREaXNwbGF5LFxuICBnZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIsXG4gIGhpZGVEZXRhaWxzLFxuICBkZXRhaWxzQXJlU2hvd24sXG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcblxuZnVuY3Rpb24gZG9uZUJ0bnMoYXJyKSB7XG4gIC8vIFRha2UgdGhlIGNvbGxlY3Rpb24gb2YgYWxsIGNoZWNrYm94ZXMgZnJvbSB0YXNrcyBieSBjbGFzcyBuYW1lXG4gIGxldCBjaGVja2JveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG8taWNvbi1jb250YWluZXJcIik7XG4gIC8vIExvb3AgdGhyb3VnaCBjb2xsZWN0aW9uIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBidXR0b25cbiAgZm9yIChsZXQgY2hlY2tib3ggb2YgY2hlY2tib3hlcykge1xuICAgIGRvbmVCdG5Db21wbGV0ZVRhc2soY2hlY2tib3gsIGFycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZG9uZUJ0bkNvbXBsZXRlVGFzayhjaGVja2JveCwgYXJyKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIGFzc2lnbiBFdmVudCBsaXN0ZW5lciB0byBjaGVja2JveGVzXG4gIC8vIHRvIGNvbXBsZXRlIHBhcnRpY3VsYXIgdGFza3MgZnJvbSBwYWdlXG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIGdldCBJZCBvZiBhIGNoZWNrYm94IHRvIHdoaWNoIGxpc3RlbmVyIGlzIGFzc2lnbmVkXG4gICAgbGV0IGNib3hJZCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQ7XG4gICAgLy8gZ2V0IG9ubHkgbnVtYmVyIGFmdGVyIHRoZSBoeXBoZW4gZnJvbSBJZFxuICAgIGxldCBudW1iZXIgPSBjYm94SWQuc3BsaXQoXCItXCIpWzFdO1xuICAgIC8vIEJlZm9yZSBjb21wbGV0aW5nIGFuIGl0ZW0gbWFrZSBzdXJlIHRvIGNsb3NlIGl0cyBkZXRhaWxzXG4gICAgY2xvc2VEZXRhaWxzT2ZDb21wbGV0ZWRUYXNrKG51bWJlcik7XG4gICAgLy8gSWYgdGFzayBpcyBkb25lIHRoZW4gdW5kb25lIGl0LCBlbHNlIGNvbXBsZXRlIGl0XG4gICAgYXJyW251bWJlcl0uZG9uZSA9ICFhcnJbbnVtYmVyXS5kb25lO1xuICAgIC8vIFJlcmVuZGVyIGFycmF5XG4gICAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG4gICAgLy8gQXZvaWQgZmlyaW5nIHBhcmVudCBlbGVtZW50IGxpc3RlbmVyIGFmdGVyIGNsaWNraW5nIG9uIHRoZSBjaGVja2JveFxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjbG9zZURldGFpbHNPZkNvbXBsZXRlZFRhc2sobnVtYmVyKSB7XG4gIC8vIEJlZm9yZSByZW1vdmluZyBhbiBpdGVtIG1ha2Ugc3VyZSBoaXMgZGV0YWlscyBhcmUgbm90IHNob3duXG4gIC8vIElmIHRoZXkgYXJlIHRoZW4gaGlkZSB0aGVtXG4gIGlmIChEZXRhaWxzVG9nZ2xlLmdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpID09PSBudW1iZXIpXG4gICAgRGV0YWlsc1RvZ2dsZS5oaWRlRGV0YWlscygpO1xufVxuXG5leHBvcnQgeyBkb25lQnRucyB9O1xuIiwiY29uc3QgdGFza0ZhY3RvcnkgPSBmdW5jdGlvbiAoe1xuICB0aXRsZSA9IFwiXCIsXG4gIGZyb20gPSBcIlwiLFxuICBkYXRlID0gXCJcIixcbiAgcHJpb3JpdHkgPSBcImxvd1wiLFxuICBub3RlID0gXCJcIixcbiAgZG9uZSA9IGZhbHNlLFxufSkge1xuICByZXR1cm4geyB0aXRsZSwgZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUsIGRvbmUgfTtcbn07XG5cbmV4cG9ydCB7IHRhc2tGYWN0b3J5IH07XG4iLCJpbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4uLy4uL0lDT05TL2NhbGVuZGFyLnN2Z1wiO1xuaW1wb3J0IE5vdGUgZnJvbSBcIi4uLy4uL0lDT05TL2VkaXQuc3ZnXCI7XG5pbXBvcnQgKiBhcyBEZWxldGVUYXNrQnRucyBmcm9tIFwiLi9kZWxldGUuanNcIjtcbmltcG9ydCAqIGFzIERldGFpbHNUb2dnbGUgZnJvbSBcIi4vZGV0YWlsc1RvZ2dsZS5qc1wiO1xuaW1wb3J0ICogYXMgVGFza0RvbmUgZnJvbSBcIi4vZG9uZS5qc1wiO1xuXG5mdW5jdGlvbiByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKSB7XG4gIC8vIENsZWFyIGFsbCBwcmV2aW91c2x5IHJlbmRlcmVkIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2VcbiAgY2xlYXJDb250ZW50T2YoXCJ0b2Rvc1wiKTtcbiAgLy9SZW5kZXIgZWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSB0byB0aGUgcGFnZVxuICBmb3IgKGxldCBbaW5kZXgsIGl0ZW1dIG9mIGFyci5lbnRyaWVzKCkpIHtcbiAgICByZW5kZXJUYXNrKGluZGV4LCBpdGVtKTtcbiAgfVxuICAvLyBNYWtlIGRlbGV0ZSBidXR0b25zIG9uIGNsaWNrIHJlbW92ZSB0YXNrIHRvIHdoaWNoIHRoZXkgYXJlIGFzc2lnbmVkXG4gIERlbGV0ZVRhc2tCdG5zLmRlbGV0ZVRhc2tzRnJvbShhcnIpO1xuICAvLyBNYWtlIGVhY2ggdGFzayBzaG93IGl0cyBkZXRhaWxzIG9uIGNsaWNrXG4gIERldGFpbHNUb2dnbGUudGFza3NUb2dnbGVEZXRhaWxzKGFycik7XG4gIC8vIE1ha2UgZWFjaCB0YXNrIGNoZWNrYm94IGNvbXBsZXRlIHRhc2sgYnkgY2hhbmdpbmcgaXRzIGNsYXNzXG4gIFRhc2tEb25lLmRvbmVCdG5zKGFycik7XG4gIC8vIFJlYWNoIGxhYmVscyBhbmQgbWFrZSB0aGVtIGNoYW5nZSB0aGVtc2VsdmVzIHdoZW4gdGhlIHRhc2sgaXMgZG9uZVxuICB0b2dnbGVEb25lSWNvbnMoKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50T2YoaWQpIHtcbiAgLy8gUmVtb3ZlIGFueSBjaGlsZCBvZiB0aGUgZWxlbWVudCB3aXRoIGlkXG4gIGxldCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gIHdoaWxlIChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50Q29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFzayhpLCB0YXNrKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kb3NcIikuYXBwZW5kKGNyZWF0ZVRhc2soaSwgdGFzaykpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKGksIHRhc2spIHtcbiAgLy8gY3JlYXRlIGxpc3QgZWxlbWVudCB3aXRoIGEgY2xhc3MgJ3RvZG8nXG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvXCIpO1xuICBsaS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdGFzay0ke2l9YCk7XG4gIC8vIEFwcGVuZCBsYWJlbCwgaW5wdXQsIGRpdiBhbmQgYnV0dG9uIHRvIGl0XG4gIGxpLmFwcGVuZChjcmVhdGVMYWJlbChpKSk7XG4gIGxpLmFwcGVuZChjcmVhdGVJbnB1dChpKSk7XG4gIGxpLmFwcGVuZChcbiAgICBjcmVhdGVDb250ZW50KFxuICAgICAgdGFzay50aXRsZSxcbiAgICAgIHRhc2suZnJvbSxcbiAgICAgIHRhc2suZGF0ZSxcbiAgICAgIHRhc2sucHJpb3JpdHksXG4gICAgICB0YXNrLm5vdGUsXG4gICAgICB0YXNrLmRvbmVcbiAgICApXG4gICk7XG4gIGxpLmFwcGVuZChjcmVhdGVEZWxldGVCdG4oaSkpO1xuXG4gIHJldHVybiBsaTtcbn1cblxuLy8gTEFCRUxcblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoaSkge1xuICAvLyByZXR1cm5zIGxhYmVsIGZvciBcInRvZG9jaGVja2JveFwiICsgaVxuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImlkXCIsIGBsYWJlbC0ke2l9YCk7XG4gIGxhYmVsLmh0bWxGb3IgPSBgdG9kb2NoZWNrYm94JHtpfWA7XG4gIGxhYmVsLmFwcGVuZChjcmVhdGVEb25lSWNvbigpKTtcbiAgcmV0dXJuIGxhYmVsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEb25lSWNvbigpIHtcbiAgLy8gY3JlYXRlIGljb24gY29udGFpbmVyXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWljb24tY29udGFpbmVyXCIpO1xuICAvLyBjcmVhdGUgaWNvblxuICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpb24taWNvblwiKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY2hlY2ttYXJrLW91dGxpbmVcIik7XG4gIC8vIGFwcGVuZCBpY29uIHRvIGNvbnRhaW5lclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbi8vIElOUFVUXG5cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KGkpIHtcbiAgLy8gQ3JlYXRlIGlucHV0IGNoZWNrYm94IGVsZW1lbnQgYWZ0ZXIgdGhlIGxhYmVsXG4gIGxldCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgLy8gQWRkIGF0dHJpYnV0ZXNcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgdG9kby1jaGVja2JveGApO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdG9kb2NoZWNrYm94LSR7aX1gKTtcbiAgcmV0dXJuIGNoZWNrYm94O1xufVxuXG4vLyBDT05URU5UID0gdGFzayB0aXRsZSBhbmQgZGV0YWlsc1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KHRpdGxlLCBmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSwgZG9uZSkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLXRleHRcIik7XG4gIC8vIEFwcGVuZCB0aXRsZSBhbmQgZGV0YWlscyB0byBjb250ZW50XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUodGl0bGUpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVEZXRhaWxzKGZyb20sIGRhdGUsIHByaW9yaXR5LCBub3RlKSk7XG4gIGlmIChkb25lKSBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJkb25lXCIpO1xuICByZXR1cm4gY29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoc3RyKSB7XG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby10aXRsZVwiKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBzdHI7XG4gIHJldHVybiB0aXRsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGV0YWlscyhmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSkge1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRldGFpbHMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXRhaWxzXCIpO1xuICBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZUZyb20oZnJvbSkpO1xuICBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZUR1ZShkYXRlKSk7XG4gIGRldGFpbHMuYXBwZW5kQ2hpbGQoY3JlYXRlUHJpb3JpdHkocHJpb3JpdHkpKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVOb3RlKG5vdGUpKTtcblxuICByZXR1cm4gZGV0YWlscztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRnJvbShmcm9tKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmcm9tLXByb2plY3RcIik7XG4gIGlmIChmcm9tKSBzcGFuLnRleHRDb250ZW50ID0gYEZyb20gJHtmcm9tfWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEdWUoZGF0ZSkge1xuICBsZXQgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgZHVlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHVlLWRhdGVcIik7XG4gIGlmIChkYXRlKSB7XG4gICAgLy8gSWYgdGFzayBoYXMgZGF0ZSBiZWZvcmUgdG9kYXksIGl0IHdpbGwgYmUgcmVkIGNvbG9yZWRcbiAgICBpZiAoZGF0ZU92ZXJkdWUoZGF0ZSkpIGR1ZS5jbGFzc0xpc3QuYWRkKFwib3ZlcmR1ZS1kYXRlXCIpO1xuXG4gICAgZHVlLmFwcGVuZENoaWxkKGNyZWF0ZUNhbGVuZGFySW1hZ2UoKSk7XG4gICAgZHVlLmFwcGVuZENoaWxkKGNyZWF0ZVNwYW5Gb3JEYXRlKGRhdGUpKTtcbiAgfVxuICByZXR1cm4gZHVlO1xufVxuXG5mdW5jdGlvbiBkYXRlT3ZlcmR1ZShkYXRlKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIGNvbXBhcmUgZGF0ZXM6IHRvZGF5IHdpdGggYSBkYXRlXG4gIC8vIElmIGRhdGUgaXMgZWFybGllciB0aGFuIHRvZGF5IHRoZW4gcmV0dXJuIHRydWVcbiAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICBsZXQgZGF5ID0gZGF0ZS5zcGxpdChcIi5cIilbMF07XG4gIGxldCBtb250aCA9IGRhdGUuc3BsaXQoXCIuXCIpWzFdO1xuICBsZXQgeWVhciA9IGRhdGUuc3BsaXQoXCIuXCIpWzJdO1xuXG4gIGxldCB0YXNrRGF0ZSA9IG5ldyBEYXRlKGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fSAwOjAwOjAwYCk7XG5cbiAgcmV0dXJuIHRhc2tEYXRlIDwgdG9kYXkgPyB0cnVlIDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhbGVuZGFySW1hZ2UoKSB7XG4gIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIENhbGVuZGFyKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkNhbGVuZGFyXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMnB4XCIpO1xuXG4gIHJldHVybiBpbWc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYW5Gb3JEYXRlKGRhdGUpIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IGBEdWUgJHtkYXRlfWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcmlvcml0eShsZXZlbCkge1xuICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYCR7bGV2ZWx9LXByaW9yaXR5YCk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKGNyZWF0ZVNwYW5Gb3JQcmlvcml0eShsZXZlbCkpO1xuICByZXR1cm4gcHJpb3JpdHk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNwYW5Gb3JQcmlvcml0eShsZXZlbCkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpZiAobGV2ZWwgIT09IFwibG93XCIpXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IGAke2NhcGl0YWxpemVGaXJzdExldHRlcihsZXZlbCl9IHByaW9yaXR5YDtcbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm90ZShub3RlKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJub3RlLXByZXNlbmNlXCIpO1xuXG4gIGlmIChub3RlKSB7XG4gICAgLy8gY3JlYXRlIGFuZCBBcHBlbmQgTm90ZSBJY29uXG4gICAgbGV0IG5vdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBub3RlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgTm90ZSk7XG4gICAgbm90ZUljb24uc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiUGVuXCIpO1xuICAgIG5vdGVJY29uLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTJweFwiKTtcblxuICAgIC8vIGNyZWF0ZSBhbmQgYXBwZW5kIHRleHRcbiAgICBsZXQgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIk5vdGVcIjtcblxuICAgIHNwYW4uYXBwZW5kQ2hpbGQobm90ZUljb24pO1xuICAgIHNwYW4uYXBwZW5kQ2hpbGQodGV4dCk7XG4gIH1cbiAgcmV0dXJuIHNwYW47XG59XG5cbi8vIERFTEVURSBCVVRUT05cbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUJ0bihpKSB7XG4gIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsZXRlLXRvZG8tYnRuXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbGV0ZWJ0bi0ke2l9YCk7XG5cbiAgLy8gY3JlYXRlIGFuIGljb24gYW5kIGFwcGVuZCBpdCB0byBidXR0b25cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW9uLWljb25cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNsb3NlLWNpcmNsZVwiKTtcblxuICBidG4uYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgcmV0dXJuIGJ0bjtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRG9uZUljb25zKCkge1xuICAvLyBHZXQgY29sbGVjdGlvbiBvZiBhbGwgdGFza3Mgd2ljaCBhcmUgY29tcGxldGVkXG4gIGxldCBkb25lcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkb25lXCIpO1xuICAvLyBGb3IgZWFjaCBjb21wbGV0ZWQgdGFzayB0YWtlIGxhYmVsIGFuZCB0b2dnbGUgYSBjbGFzcyBcImNvbXBsZXRlZFwiIG9uIGl0XG4gIGZvciAobGV0IHRhc2sgb2YgZG9uZXMpIHtcbiAgICBsZXQgbnVtYmVyID0gdGFzay5wYXJlbnRFbGVtZW50LmlkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgbGFiZWwtJHtudW1iZXJ9YCk7XG4gICAgbGV0IGljb25Db250YWluZXIgPSBsYWJlbC5maXJzdENoaWxkO1xuXG4gICAgaWNvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVkXCIpO1xuICB9XG59XG5cbmV4cG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSwgY2xlYXJDb250ZW50T2YgfTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9