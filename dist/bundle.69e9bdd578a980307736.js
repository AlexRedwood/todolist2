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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n@keyframes rotation {\n  0% {\n    transform: rotate(0); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes appearFromRightProject {\n  0% {\n    left: 30px;\n    opacity: 0; }\n  100% {\n    left: 0px;\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  user-select: none; }\n\nbody,\nhtml {\n  height: 100%;\n  margin: 0; }\n\nbody {\n  font-family: \"Sen\", sans-serif;\n  line-height: 1.25;\n  background: #e9e9e9; }\n\n#content {\n  display: grid;\n  height: 100%;\n  grid-template-rows: 60px auto;\n  grid-template-columns: 300px auto 330px;\n  grid-template-areas: \"header header header\" \"projects main todo-misc\"; }\n  #content.narrow {\n    grid-template-columns: 68px auto 330px; }\n\n/* --- TOP of the PAGE : HEADER --- */\nheader {\n  grid-area: header;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  justify-content: center;\n  background: #106877;\n  color: #f4f4f4;\n  font-size: 1.9em;\n  font-weight: 900;\n  padding: 0;\n  width: 100%;\n  font-family: \"Permanent Marker\", cursive;\n  letter-spacing: 5px; }\n  header #menu-icon {\n    margin-right: auto;\n    margin-left: 0;\n    font-size: 48px;\n    cursor: pointer;\n    padding: 10px; }\n    header #menu-icon:hover {\n      background: #0b505c; }\n  header #header-title {\n    margin-right: auto; }\n  header #socials {\n    margin-right: 10px;\n    font-size: 48px;\n    cursor: pointer; }\n    header #socials a {\n      display: block;\n      height: 48px;\n      transition: 0.4s;\n      border: 1px solid transparent;\n      border-radius: 5px; }\n      header #socials a:link {\n        color: #f4f4f4; }\n      header #socials a:visited {\n        color: #f4f4f4; }\n\n/* LEFT SIDE OF THE PAGE: PROJECTS */\n#project-container {\n  grid-area: projects;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  -webkit-box-shadow: 8px 0px 5px -4px #cacaca;\n  -moz-box-shadow: 8px 0px 5px -4px #cacaca;\n  box-shadow: 8px 0px 5px -4px #cacaca;\n  /* LEFT-SIDE OF THE PAGE: User Input*/ }\n  #project-container #project-list {\n    width: 280px;\n    max-width: 280px; }\n    #project-container #project-list.narrow {\n      width: 68px; }\n    #project-container #project-list .project {\n      margin: 10px 0;\n      padding: 10px;\n      border-radius: 5px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      word-wrap: break-word;\n      white-space: normal;\n      overflow: hidden; }\n      #project-container #project-list .project.narrow {\n        margin: 10px 0;\n        padding: 10px 10px 10px 22px;\n        border-radius: 0; }\n      #project-container #project-list .project.active {\n        color: #11998e;\n        font-weight: 900; }\n        #project-container #project-list .project.active:hover .delete-project-btn {\n          background: #fff; }\n      #project-container #project-list .project:hover .delete-project-btn {\n        background: #f0f0f0;\n        visibility: visible;\n        animation: appearFromRightProject 0.3s ease-out forwards; }\n      #project-container #project-list .project:not(.active):hover {\n        background: #f0f0f0;\n        cursor: pointer; }\n      #project-container #project-list .project .project-icon {\n        font-size: 24px;\n        margin-right: 20px; }\n        #project-container #project-list .project .project-icon.narrow {\n          margin-right: 0; }\n      #project-container #project-list .project .project-title-count-container {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start; }\n        #project-container #project-list .project .project-title-count-container.narrow {\n          display: none; }\n      #project-container #project-list .project .project-name {\n        width: 155px;\n        max-width: 155px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n      #project-container #project-list .project .count-todos {\n        font-size: 0.8em;\n        font-weight: 900;\n        margin-left: auto;\n        width: 29px;\n        padding-right: 5px; }\n      #project-container #project-list .project .delete-project-btn {\n        visibility: hidden;\n        position: relative;\n        font-size: 24px;\n        margin-left: auto;\n        outline: none;\n        border: none;\n        background: #fff;\n        color: #c5c5c5;\n        cursor: pointer;\n        transition: color 0.2s; }\n        #project-container #project-list .project .delete-project-btn.narrow {\n          display: none; }\n        #project-container #project-list .project .delete-project-btn:hover {\n          color: #999999; }\n        #project-container #project-list .project .delete-project-btn:focus {\n          color: #6e6e6e; }\n  #project-container #new-project-form {\n    width: 250px;\n    max-width: 280px;\n    position: relative;\n    margin-left: 15px;\n    margin-right: 0;\n    display: flex;\n    /* Input */\n    /* Submit button */ }\n    #project-container #new-project-form.narrow {\n      width: 68px;\n      margin: 0; }\n    #project-container #new-project-form #new-project {\n      border: 0;\n      border-bottom: 2px solid #6b6b6b;\n      margin-left: 2px;\n      margin-right: auto;\n      padding: 9px 0;\n      outline: 0;\n      font-size: 1em;\n      color: #6b6b6b;\n      background: transparent;\n      font-family: \"Sen\", sans-serif; }\n      #project-container #new-project-form #new-project.narrow {\n        display: none; }\n      #project-container #new-project-form #new-project:focus {\n        transition: 0.7s;\n        color: #11998e;\n        border-bottom: 2px solid #38ef7d; }\n        #project-container #new-project-form #new-project:focus::placeholder {\n          transition: 0.7s;\n          color: #11998e; }\n    #project-container #new-project-form #submit-project {\n      background: #fff;\n      display: inline-block;\n      border: none;\n      position: relative;\n      top: 0px;\n      left: 2px;\n      text-decoration: none;\n      font-size: 24px;\n      cursor: pointer;\n      text-align: center;\n      padding: 6px; }\n      #project-container #new-project-form #submit-project.narrow {\n        padding: 0;\n        left: 4px;\n        padding: 7px 18px; }\n      #project-container #new-project-form #submit-project ion-icon {\n        --ionicon-stroke-width: 48px;\n        color: #6b6b6b; }\n      #project-container #new-project-form #submit-project:focus {\n        outline: none; }\n      #project-container #new-project-form #submit-project::after {\n        content: \"\";\n        position: absolute;\n        z-index: 0;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: 2px solid #fff;\n        border-radius: 5px;\n        transition: 0.5s; }\n      #project-container #new-project-form #submit-project:hover {\n        color: #11998e; }\n        #project-container #new-project-form #submit-project:hover::after {\n          border: 2px solid #38ef7d;\n          border-radius: 5px; }\n        #project-container #new-project-form #submit-project:hover ion-icon {\n          color: #11998e; }\n\n/* Middle: Project title, todo tasks*/\nmain {\n  grid-area: main;\n  min-width: 377px;\n  background: #fff;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-shadow: 0px 0px 5px 2px #cacaca;\n  -moz-box-shadow: 0px 0px 5px 2px #cacaca;\n  box-shadow: 0px 0px 5px 2px #cacaca;\n  grid-column: 2 / 4;\n  /* User input todo tasks*/ }\n  @media screen and (max-width: 1024px) {\n    main {\n      grid-column: 2 / 4; } }\n  main #project-title {\n    margin-bottom: 20px;\n    font-weight: 900;\n    font-size: 1.4em; }\n  main .todo {\n    position: relative;\n    width: 100%;\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 40px auto 20px;\n    grid-template-areas: \"checkbox todotext btn\";\n    justify-items: start;\n    align-items: center;\n    margin-bottom: 15px;\n    padding: 5px 15px;\n    border: 1px solid lightgrey;\n    border-radius: 5px;\n    cursor: pointer;\n    /* Custom made checkbox with after element */\n    /* Text of the todo task with details */ }\n    main .todo:hover {\n      -webkit-box-shadow: 0px 0px 5px 0px #e4e4e4;\n      -moz-box-shadow: 0px 0px 5px 0px #e4e4e4;\n      box-shadow: 0px 0px 5px 0px #e4e4e4; }\n    main .todo:hover .delete-todo-btn {\n      background: #fff;\n      visibility: visible;\n      animation: appearFromRightProject 0.3s ease-out forwards; }\n    main .todo label {\n      grid-area: checkbox; }\n      main .todo label .todo-icon-container {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 30px;\n        height: 30px;\n        transition: 0.7s; }\n        main .todo label .todo-icon-container::after {\n          visibility: visible;\n          content: \"\";\n          position: absolute;\n          z-index: 0;\n          left: 0;\n          top: 0;\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box;\n          border: 2px solid #c5c5c5;\n          border-radius: 50%;\n          cursor: pointer;\n          transition: 0.7s; }\n        main .todo label .todo-icon-container ion-icon {\n          visibility: hidden;\n          font-size: 24px;\n          --ionicon-stroke-width: 48px; }\n        main .todo label .todo-icon-container:hover::after {\n          border: 2px solid #e2b0e9; }\n        main .todo label .todo-icon-container:hover ion-icon {\n          color: #e2b0e9;\n          visibility: visible;\n          animation: fadeIn 0.5s ease-out; }\n        main .todo label .todo-icon-container.completed:hover::after {\n          border: 2px solid #c5c5c5 !important; }\n        main .todo label .todo-icon-container.completed ion-icon {\n          visibility: visible !important;\n          color: #c5c5c5;\n          animation: none; }\n    main .todo .todo-checkbox {\n      display: none; }\n    main .todo .todo-text {\n      grid-area: todotext;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around; }\n      main .todo .todo-text.done {\n        text-decoration: line-through;\n        color: #c5c5c5 !important; }\n        main .todo .todo-text.done .medium-priority,\n        main .todo .todo-text.done .high-priority,\n        main .todo .todo-text.done .due-date,\n        main .todo .todo-text.done .overdue-date {\n          color: #c5c5c5 !important; }\n      main .todo .todo-text .todo-title {\n        font-size: 1.15em;\n        overflow-wrap: break-word;\n        word-wrap: break-word; }\n      main .todo .todo-text .details {\n        font-size: 0.8em; }\n        main .todo .todo-text .details .from-project,\n        main .todo .todo-text .details .due-date,\n        main .todo .todo-text .details .medium-priority,\n        main .todo .todo-text .details .high-priority,\n        main .todo .todo-text .details .note-presence {\n          margin-right: 12px; }\n        main .todo .todo-text .details .from-project:empty,\n        main .todo .todo-text .details .due-date:empty,\n        main .todo .todo-text .details .medium-priority:empty,\n        main .todo .todo-text .details .high-priority:empty,\n        main .todo .todo-text .details .note-presence:empty {\n          margin-right: 0; }\n        main .todo .todo-text .details span img {\n          position: relative;\n          top: 2px;\n          margin-right: 4px; }\n        main .todo .todo-text .details span.overdue-date {\n          color: red; }\n        main .todo .todo-text .details span.high-priority {\n          color: #7300ff; }\n        main .todo .todo-text .details span.medium-priority {\n          color: #106877; }\n    main .todo .delete-todo-btn {\n      grid-area: btn;\n      visibility: hidden;\n      position: relative;\n      font-size: 24px;\n      outline: none;\n      border: none;\n      background: #fff;\n      color: #d4d4d4;\n      cursor: pointer;\n      transition: color 0.2s; }\n      main .todo .delete-todo-btn:hover {\n        color: #494040; }\n      main .todo .delete-todo-btn:focus {\n        color: #929292; }\n  main hr {\n    position: relative;\n    bottom: 20px;\n    margin-top: auto;\n    margin-right: -20px;\n    margin-left: -20px;\n    height: 10px;\n    border: 0;\n    box-shadow: 0 -10px 10px -10px #8c8c8c inset; }\n  main #new-todo-form {\n    display: flex;\n    /* Input */\n    /* Submit button */ }\n    main #new-todo-form #new-todo {\n      width: 100%;\n      border: 0;\n      border-bottom: 2px solid #6b6b6b;\n      margin-left: 2px;\n      margin-right: auto;\n      padding: 9px 0;\n      outline: 0;\n      font-size: 1em;\n      color: #6b6b6b;\n      background: transparent;\n      font-family: \"Sen\", sans-serif; }\n      main #new-todo-form #new-todo:focus {\n        transition: 0.7s;\n        color: #11998e;\n        border-bottom: 2px solid #38ef7d; }\n        main #new-todo-form #new-todo:focus::placeholder {\n          transition: 0.7s;\n          color: #11998e; }\n    main #new-todo-form #submit-todo {\n      background: #fff;\n      display: inline-block;\n      border: none;\n      position: relative;\n      top: 0px;\n      left: 10px;\n      text-decoration: none;\n      font-size: 24px;\n      cursor: pointer;\n      text-align: center;\n      padding: 6px; }\n      main #new-todo-form #submit-todo ion-icon {\n        --ionicon-stroke-width: 48px;\n        color: #6b6b6b; }\n      main #new-todo-form #submit-todo:focus {\n        outline: none; }\n      main #new-todo-form #submit-todo::after {\n        content: \"\";\n        position: absolute;\n        z-index: 0;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: 2px solid #fff;\n        border-radius: 5px;\n        transition: 0.5s; }\n      main #new-todo-form #submit-todo:hover {\n        color: #11998e; }\n        main #new-todo-form #submit-todo:hover::after {\n          border: 2px solid #38ef7d;\n          border-radius: 5px; }\n        main #new-todo-form #submit-todo:hover ion-icon {\n          color: #11998e; }\n\n/* Right side of the page */\n#todo-misc-container {\n  grid-area: todo-misc;\n  background: #e9e9e9;\n  display: none;\n  flex-direction: column;\n  margin-top: 20px;\n  z-index: 1; }\n  @media screen and (max-width: 1024px) {\n    #todo-misc-container {\n      -webkit-box-shadow: -3px 0px 5px -2px #cacaca;\n      -moz-box-shadow: -3px 0px 5px -2px #cacaca;\n      box-shadow: -3px 0px 5px -2px #cacaca; } }\n  #todo-misc-container #todo-name-changer-container,\n  #todo-misc-container #date-changer,\n  #todo-misc-container #priority-container,\n  #todo-misc-container #note-container {\n    background: #fff;\n    margin-right: 0px;\n    margin-top: 0px;\n    border-bottom: 2px solid lightgrey;\n    border-left: 2px solid lightgrey;\n    padding: 15px;\n    -webkit-box-shadow: -3px 0px 5px -2px #cacaca;\n    -moz-box-shadow: -3px 0px 5px -2px #cacaca;\n    box-shadow: -3px 0px 5px -2px #cacaca; }\n    #todo-misc-container #todo-name-changer-container #date,\n    #todo-misc-container #date-changer #date,\n    #todo-misc-container #priority-container #date,\n    #todo-misc-container #note-container #date {\n      color: #6b6b6b; }\n  #todo-misc-container #todo-name-changer-container {\n    height: 60px;\n    border-radius: 5px 0 0 0;\n    -webkit-box-shadow: -2px -2px 5px -1px #cacaca;\n    -moz-box-shadow: -2px -2px 5px -1px #cacaca;\n    box-shadow: -2px -2px 5px -1px #cacaca; }\n    #todo-misc-container #todo-name-changer-container textarea {\n      height: 40px; }\n  #todo-misc-container #note-container {\n    height: 200px;\n    -webkit-box-shadow: -3px 4px 5px -2px #cacaca;\n    -moz-box-shadow: -3px 4px 5px -2px #cacaca;\n    box-shadow: -3px 4px 5px -2px #cacaca; }\n    #todo-misc-container #note-container textarea {\n      height: 160px; }\n  #todo-misc-container #date-changer,\n  #todo-misc-container #priority-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n    #todo-misc-container #date-changer #priority-levels,\n    #todo-misc-container #priority-container #priority-levels {\n      color: #6b6b6b; }\n      #todo-misc-container #date-changer #priority-levels .medium-priority.selected-1,\n      #todo-misc-container #date-changer #priority-levels .low-priority.selected-1,\n      #todo-misc-container #priority-container #priority-levels .medium-priority.selected-1,\n      #todo-misc-container #priority-container #priority-levels .low-priority.selected-1 {\n        color: #106877; }\n      #todo-misc-container #date-changer #priority-levels .medium-priority.selected-2,\n      #todo-misc-container #date-changer #priority-levels .low-priority.selected-2,\n      #todo-misc-container #date-changer #priority-levels .high-priority.selected-2,\n      #todo-misc-container #priority-container #priority-levels .medium-priority.selected-2,\n      #todo-misc-container #priority-container #priority-levels .low-priority.selected-2,\n      #todo-misc-container #priority-container #priority-levels .high-priority.selected-2 {\n        color: #7300ff; }\n      #todo-misc-container #date-changer #priority-levels .onmouseover:hover,\n      #todo-misc-container #priority-container #priority-levels .onmouseover:hover {\n        color: #106877; }\n      #todo-misc-container #date-changer #priority-levels .medium-priority:hover ~ .low-priority,\n      #todo-misc-container #priority-container #priority-levels .medium-priority:hover ~ .low-priority {\n        color: #106877; }\n      #todo-misc-container #date-changer #priority-levels .high-priority:hover,\n      #todo-misc-container #priority-container #priority-levels .high-priority:hover {\n        color: #7300ff; }\n      #todo-misc-container #date-changer #priority-levels ion-icon,\n      #todo-misc-container #priority-container #priority-levels ion-icon {\n        font-size: 24px;\n        cursor: pointer; }\n    #todo-misc-container #date-changer #date-remover ion-icon,\n    #todo-misc-container #priority-container #date-remover ion-icon {\n      position: relative;\n      top: 4px;\n      color: #6b6b6b;\n      cursor: pointer;\n      --ionicon-stroke-width: 48px; }\n      #todo-misc-container #date-changer #date-remover ion-icon:hover,\n      #todo-misc-container #priority-container #date-remover ion-icon:hover {\n        color: black; }\n  #todo-misc-container .misc-title {\n    font-size: 1.1em;\n    color: #6b6b6b;\n    width: 120px; }\n  #todo-misc-container textarea {\n    background: #fff;\n    outline: none;\n    resize: none;\n    overflow: hidden;\n    width: 100%;\n    border: none;\n    font-family: \"Sen\", sans-serif;\n    font-size: 1.1em; }\n    #todo-misc-container textarea::placeholder {\n      color: #6b6b6b; }\n    #todo-misc-container textarea:focus::placeholder {\n      color: #11998e; }\n  #todo-misc-container input[type=\"date\"] {\n    outline: none;\n    border: none;\n    cursor: pointer; }\n  #todo-misc-container #close-details-btn {\n    font-size: 48px;\n    width: 62px; }\n    #todo-misc-container #close-details-btn ion-icon {\n      --ionicon-stroke-width: 48px;\n      background: #fff;\n      border-radius: 0 0 5px 5px;\n      border-left: 2px solid lightgrey;\n      border-right: 2px solid lightgrey;\n      border-bottom: 2px solid lightgrey;\n      width: 60px;\n      color: #c5c5c5;\n      cursor: pointer;\n      -webkit-box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca;\n      -moz-box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca;\n      box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca; }\n      #todo-misc-container #close-details-btn ion-icon:hover {\n        color: #6e6e6e; }\n", ""]);
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
// Take projects from local storage if exists
// If not create default projects

var projects = _projects_localstorage_js__WEBPACK_IMPORTED_MODULE_8__["get"]() || _toConsumableArray(_projects_defaults_js__WEBPACK_IMPORTED_MODULE_4__["getProjects"]()); //render first project


Object(_projects_render_js__WEBPACK_IMPORTED_MODULE_5__["initialRender"])(projects); // Buttons which can add a task or a project to a defined array
// Also rerender the array after adding a task

_tasks_add_js__WEBPACK_IMPORTED_MODULE_6__["addTaskTo"](projects);
_projects_add_js__WEBPACK_IMPORTED_MODULE_7__["addProjectTo"](projects);

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
/* harmony import */ var _style_menu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../style/menu.js */ "./src/JS/style/menu.js");
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
  // If projects are minimized, broaden them
  broadIfMinimized(); // Show the name of the active project

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

function broadIfMinimized() {
  var content = document.getElementById("content");
  var isNarrow = content.classList.contains("narrow");
  if (isNarrow) _style_menu_js__WEBPACK_IMPORTED_MODULE_7__["narrowProjectContainer"]();
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
/*! exports provided: showProjects, minimizeProjectContainer, narrowProjectContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showProjects", function() { return showProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minimizeProjectContainer", function() { return minimizeProjectContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "narrowProjectContainer", function() { return narrowProjectContainer; });
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
    return narrowProjectContainer();
  });
}

function narrowProjectContainer() {
  // Take an array of elements from the page and toggle a class 'narrow' on each
  var _iterator = _createForOfIteratorHelper(getElementsToNarrow()),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;
      toggleNarrow(element);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function minimizeProjectContainer() {
  // Take an array of elements from the page and toggle a class 'narrow' on each
  var _iterator2 = _createForOfIteratorHelper(getElementsToNarrow()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var element = _step2.value;
      addNarrow(element);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
}

function addNarrow(element) {
  // Remove class 'narrow' from an element
  // this class changes left-side page menu making it smaller
  element.classList.add("narrow");
}

function toggleNarrow(element) {
  // Add/remove class 'narrow' to an element
  // this class changes left-side page menu making it smaller
  element.classList.toggle("narrow");
}

function getElementsToNarrow() {
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
    title: "Example 1",
    date: "15.03.2025",
    priority: "medium",
    note: "something"
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Example 2",
    date: "15.03.2000"
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Example 3",
    priority: "high"
  })];
  var bundle2 = [Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Example 4",
    note: "something else"
  }), Object(_factory_js__WEBPACK_IMPORTED_MODULE_0__["taskFactory"])({
    title: "Example 5",
    date: "15.03.2018",
    priority: "high",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUNPTlMvY2FsZW5kYXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9JQ09OUy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Byb2plY3RzL2FkZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvcHJvamVjdHMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Byb2plY3RzL2RlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvcHJvamVjdHMvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvcHJvamVjdHMvbG9jYWxzdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy9wcm9qZWN0cy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Byb2plY3RzL3RvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvc3R5bGUvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvc3R5bGUvcHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZGVsZXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZXRhaWxzSW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2RldGFpbHNUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2RvbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3Rhc2tzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU0NTUy9zdHlsZS5zY3NzPzgxNGIiXSwibmFtZXMiOlsiTWVudUJ0biIsIlJlc2l6ZSIsIlByaW9yaXR5IiwicHJvamVjdHMiLCJMb2NhbFN0b3JhZ2UiLCJEZWZhdWx0UHJvamVjdHMiLCJpbml0aWFsUmVuZGVyIiwiQWRkVGFza0J0biIsIkFkZFByb2plY3RCdG4iLCJhZGRQcm9qZWN0VG8iLCJzdWJtaXRQcm9qZWN0QnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRQcm9qZWN0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2hQcm9qZWN0VG8iLCJsZW5ndGgiLCJhY3RpdmF0ZVByb2plY3QiLCJyZWZyZXNoUHJvamVjdHMiLCJwdXNoIiwiZ2V0UHJvamVjdCIsInByb2plY3QiLCJwcm9qZWN0RmFjdG9yeSIsInRpdGxlIiwiZ2V0SW5wdXRWYWx1ZSIsImNsZWFyUHJvamVjdElucHV0IiwidmFsdWUiLCJnZXRQcm9qZWN0cyIsImFsbFByb2plY3RzIiwidGFza3MiLCJEZWZhdWx0VGFza3MiLCJpc0FjdGl2ZSIsImRlbGV0ZVByb2plY3RGcm9tIiwiYnV0dG9ucyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJidXR0b24iLCJkZWxldGVCdG5SZW1vdmVQcm9qZWN0IiwiZSIsImJ0bklkIiwiY3VycmVudFRhcmdldCIsImlkIiwibnVtYmVyIiwic3BsaXQiLCJzcGxpY2UiLCJhY3RpdmF0aW9uSGFuZGxpbmciLCJzdG9wUHJvcGFnYXRpb24iLCJub25lQWN0aXZlUHJvamVjdHMiLCJjbGVhckNvbnRlbnRPZiIsInNhdmUiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwib2JqIiwiSlNPTiIsImdldCIsInBhcnNlIiwiZ2V0SXRlbSIsImFyciIsImJyb2FkSWZNaW5pbWl6ZWQiLCJzaG93QWN0aXZlUHJvamVjdFRpdGxlIiwicmVuZGVyQWxsUHJvamVjdHMiLCJwcm9qZWN0c1Nob3dUYXNrcyIsIkRlbGV0ZVByb2plY3RCdG5zIiwidHVybk9uVGFza3NJbnRlcmFjdGlvbiIsInJlZnJlc2hPbmx5VGFza3NGcm9tIiwicmVuZGVyQWxsVGFza3NGcm9tIiwiY29udGVudCIsImlzTmFycm93IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJNZW51IiwiRGV0YWlscyIsIkRlbGV0ZVRhc2tCdG5zIiwiVGFza0RvbmUiLCJwcm9qZWN0VGl0bGUiLCJ0ZXh0Q29udGVudCIsImdldEFjdGl2ZVByb2plY3QiLCJlbnRyaWVzIiwiaW5kZXgiLCJpdGVtIiwicmVuZGVyUHJvamVjdCIsImkiLCJhcHBlbmQiLCJjcmVhdGVQcm9qZWN0IiwibGkiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYWRkIiwiY3JlYXRlSWNvbiIsImNyZWF0ZVRpdGxlQW5kQ291bnQiLCJjcmVhdGVEZWxldGVCdG4iLCJzcGFuIiwiaWNvbiIsImNvdW50IiwiZGl2IiwibmFtZVNwYW4iLCJjb3VudFNwYW4iLCJidG4iLCJhcHBlbmRDaGlsZCIsInByb2plY3RJZCIsImhpZGVEZXRhaWxzIiwiZGVhY3RpdmF0ZUFsbFByb2plY3RzIiwic2hvd1Byb2plY3RzIiwibmFycm93UHJvamVjdENvbnRhaW5lciIsImdldEVsZW1lbnRzVG9OYXJyb3ciLCJlbGVtZW50IiwidG9nZ2xlTmFycm93IiwibWluaW1pemVQcm9qZWN0Q29udGFpbmVyIiwiYWRkTmFycm93IiwidG9nZ2xlIiwicHJvamVjdExpc3QiLCJwcm9qZWN0SWNvbiIsInByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyIiwiZGVsZXRlUHJvamVjdEJ0biIsIm5ld1Byb2plY3RGb3JtIiwibmV3UHJvamVjdCIsInN1Ym1pdFByb2plY3QiLCJlbGVtZW50cyIsInN0YXJzQ2hhbmdlQ29sb3JzIiwiYWN0aXZhdGVGaXJzdFN0YXIiLCJhY3RpdmF0ZVNlY29uZFN0YXIiLCJhY3RpdmF0ZVRoaXJkU3RhciIsImdldFN0YXIxIiwiYWN0aXZhdGVTdGFyIiwiZ2V0U3RhcjIiLCJnZXRTdGFyMyIsImNvbnNvbGUiLCJsb2ciLCJvdXRsaW5lU2Vjb25kU3RhciIsIm91dGxpbmVUaGlyZFN0YXIiLCJyZW1vdmVDb2xvckZyb21BbGxTdGFycyIsImFkZE1lZGl1bU9ubW91c2VvdmVyIiwiZmlsbFNlY29uZFN0YXIiLCJhZGRDb2xvclR3b1N0YXJzIiwiZGVjb2xvclRoaXJkU3RhciIsImZpbGxUaGlyZFN0YXIiLCJhZGRDb2xvclRocmVlU3RhcnMiLCJyZW1vdmVNZWRpdW1Pbm1vdXNlb3ZlciIsImNoaWxkcmVuIiwicmVtb3ZlIiwic3RhcklzT3V0bGluZWQiLCJzdGFyIiwiZ2V0QXR0cmlidXRlIiwiZGVjb2xvckZpcnN0U3RhciIsImRlY29sb3JTZWNvbmRTdGFyIiwicmVzcG9uc2l2ZSIsIm1haW4iLCJkZXRhaWxzIiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwic2NyZWVuTGVzc1RoZW4xMDI0IiwiZ2V0Q29tcHV0ZWREaXNwbGF5Iiwic3R5bGUiLCJncmlkQ29sdW1uIiwibWF0Y2hlcyIsImFkZFRhc2tUbyIsInN1Ym1pdFRvZG9CdG4iLCJhZGRUYXNrIiwicHVzaFRhc2tUbyIsImdldFRhc2siLCJ0YXNrIiwidGFza0ZhY3RvcnkiLCJjbGVhclRhc2tJbnB1dCIsImdldFRhc2tzQnlOdW1iZXIiLCJidW5kbGUxIiwiZGF0ZSIsInByaW9yaXR5Iiwibm90ZSIsImJ1bmRsZTIiLCJkb25lIiwiYnVuZGxlMyIsImRlbGV0ZVRhc2tzRnJvbSIsImRlbGV0ZUJ0blJlbW92ZVRhc2siLCJjbG9zZURldGFpbHNPZkRlbGV0ZWRUYXNrIiwibWFrZURldGFpbHNDb25zaXN0ZW50IiwiRGV0YWlsc1RvZ2dsZSIsImRlY3JlYXNlRGV0YWlsc0lkIiwiZGV0YWlsc0lkTnVtYmVyIiwicHV0VGFza0luZm9Ub0lucHV0Iiwic2V0TmFtZSIsInNldERhdGUiLCJzZXRQaW9yaXR5Iiwic2V0Tm90ZSIsInRhc2tOdW1iZXIiLCJjaGFuZ2VUYXNrT25JbnB1dCIsImNoYW5nZVRpdGxlT25JbnB1dCIsImNoYW5nZURhdGVPbklucHV0IiwiY2hhbmdlUHJpb3JpdHlPbklucHV0IiwiY2hhbmdlTm90ZU9uSW5wdXQiLCJpbnB1dCIsIm9uaW5wdXQiLCJjaGFuZ2VUaXRsZSIsImNoYW5nZURhdGUiLCJmb3JtYXREYXRlMiIsInN0YXJzIiwiY2hhbmdlUHJpb3JpdHkiLCJnZXRQcmlvcml0eUlucHV0Iiwic3RhcjEiLCJjaGFuZ2VOb3RlIiwibmFtZSIsImZvcm1hdERhdGUiLCJsZXZlbCIsImRheSIsIm1vbnRoIiwieWVhciIsImZvcm1hdHRlZCIsInRhc2tzVG9nZ2xlRGV0YWlscyIsInRvZG9MaXN0U2hvd0RldGFpbHMiLCJBcnJvd0hpZGVEZXRhaWxzIiwidGFza0lkIiwidG9nZ2xlRGV0YWlscyIsIkRldGFpbHNJbnB1dCIsImFycm93QnRuIiwiaWROdW1iZXIiLCJnZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIiLCJkZXRhaWxzQXJlU2hvd24iLCJzaG93RGV0YWlscyIsImRldGFpbHNDb250YWluZXJJZCIsInNldERldGFpbHNJZFRvIiwibWFrZURldGFpbHNEZWZhdWx0IiwiaGlkZSIsInNob3dBc0ZsZXgiLCJjb21wdXRlZERpc3BsYXkiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImRpc3BsYXkiLCJkb25lQnRucyIsImNoZWNrYm94ZXMiLCJjaGVja2JveCIsImRvbmVCdG5Db21wbGV0ZVRhc2siLCJjYm94SWQiLCJwYXJlbnROb2RlIiwiY2xvc2VEZXRhaWxzT2ZDb21wbGV0ZWRUYXNrIiwiZnJvbSIsInJlbmRlclRhc2siLCJ0b2dnbGVEb25lSWNvbnMiLCJjb250ZW50Q29udGFpbmVyIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiY3JlYXRlVGFzayIsImNyZWF0ZUxhYmVsIiwiY3JlYXRlSW5wdXQiLCJjcmVhdGVDb250ZW50IiwibGFiZWwiLCJodG1sRm9yIiwiY3JlYXRlRG9uZUljb24iLCJjb250YWluZXIiLCJjcmVhdGVUaXRsZSIsImNyZWF0ZURldGFpbHMiLCJzdHIiLCJjcmVhdGVGcm9tIiwiY3JlYXRlRHVlIiwiY3JlYXRlUHJpb3JpdHkiLCJjcmVhdGVOb3RlIiwiZHVlIiwiZGF0ZU92ZXJkdWUiLCJjcmVhdGVDYWxlbmRhckltYWdlIiwiY3JlYXRlU3BhbkZvckRhdGUiLCJ0b2RheSIsIkRhdGUiLCJ0YXNrRGF0ZSIsImltZyIsIkNhbGVuZGFyIiwiY3JlYXRlU3BhbkZvclByaW9yaXR5IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIm5vdGVJY29uIiwiTm90ZSIsInRleHQiLCJkb25lcyIsInBhcmVudEVsZW1lbnQiLCJpY29uQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtR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MEIsQ0FNMUI7O0FBQ0EsTUFBSVcsSUFBSSxHQUFHcEYsUUFBUSxDQUFDNkUsYUFBVCxDQUF1QixVQUF2QixDQUFYO0FBQ0FPLE1BQUksQ0FBQ04sWUFBTCxDQUFrQixNQUFsQixFQUEwQixjQUExQjtBQUVBVyxLQUFHLENBQUNDLFdBQUosQ0FBZ0JOLElBQWhCO0FBRUEsU0FBT0ssR0FBUDtBQUNEOztBQUVELFNBQVMwSSxlQUFULEdBQTJCO0FBQ3pCO0FBQ0EsTUFBSW9DLEtBQUssR0FBR3ZRLFFBQVEsQ0FBQ3lCLHNCQUFULENBQWdDLE1BQWhDLENBQVosQ0FGeUIsQ0FHekI7O0FBSHlCLDhDQUlSOE8sS0FKUTtBQUFBOztBQUFBO0FBSXpCLDJEQUF3QjtBQUFBLFVBQWYvRyxJQUFlO0FBQ3RCLFVBQUl4SCxNQUFNLEdBQUd3SCxJQUFJLENBQUNnSCxhQUFMLENBQW1Cek8sRUFBbkIsQ0FBc0JFLEtBQXRCLENBQTRCLEdBQTVCLEVBQWlDLENBQWpDLENBQWI7QUFDQSxVQUFJME0sS0FBSyxHQUFHM08sUUFBUSxDQUFDQyxjQUFULGlCQUFpQytCLE1BQWpDLEVBQVo7QUFDQSxVQUFJeU8sYUFBYSxHQUFHOUIsS0FBSyxDQUFDTixVQUExQjtBQUVBb0MsbUJBQWEsQ0FBQzdNLFNBQWQsQ0FBd0JtQixHQUF4QixDQUE0QixXQUE1QjtBQUNEO0FBVndCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFXMUI7Ozs7Ozs7Ozs7Ozs7QUMxT0QsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw4TUFBcUc7O0FBRXZJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImJ1bmRsZS42OWU5YmRkNTc4YTk4MDMwNzczNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0pTL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGFwcGVhckZyb21SaWdodFByb2plY3Qge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAzMHB4O1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlNlblxcXCIsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7IH1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGF1dG8gMzMwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiIFxcXCJwcm9qZWN0cyBtYWluIHRvZG8tbWlzY1xcXCI7IH1cXG4gICNjb250ZW50Lm5hcnJvdyB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjhweCBhdXRvIDMzMHB4OyB9XFxuXFxuLyogLS0tIFRPUCBvZiB0aGUgUEFHRSA6IEhFQURFUiAtLS0gKi9cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxMDY4Nzc7XFxuICBjb2xvcjogI2Y0ZjRmNDtcXG4gIGZvbnQtc2l6ZTogMS45ZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQZXJtYW5lbnQgTWFya2VyXFxcIiwgY3Vyc2l2ZTtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7IH1cXG4gIGhlYWRlciAjbWVudS1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgaGVhZGVyICNtZW51LWljb246aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICMwYjUwNWM7IH1cXG4gIGhlYWRlciAjaGVhZGVyLXRpdGxlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XFxuICBoZWFkZXIgI3NvY2lhbHMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIGhlYWRlciAjc29jaWFscyBhIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgICAgdHJhbnNpdGlvbjogMC40cztcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgICBoZWFkZXIgI3NvY2lhbHMgYTpsaW5rIHtcXG4gICAgICAgIGNvbG9yOiAjZjRmNGY0OyB9XFxuICAgICAgaGVhZGVyICNzb2NpYWxzIGE6dmlzaXRlZCB7XFxuICAgICAgICBjb2xvcjogI2Y0ZjRmNDsgfVxcblxcbi8qIExFRlQgU0lERSBPRiBUSEUgUEFHRTogUFJPSkVDVFMgKi9cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBwcm9qZWN0cztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDhweCAwcHggNXB4IC00cHggI2NhY2FjYTtcXG4gIC1tb3otYm94LXNoYWRvdzogOHB4IDBweCA1cHggLTRweCAjY2FjYWNhO1xcbiAgYm94LXNoYWRvdzogOHB4IDBweCA1cHggLTRweCAjY2FjYWNhO1xcbiAgLyogTEVGVC1TSURFIE9GIFRIRSBQQUdFOiBVc2VyIElucHV0Ki8gfVxcbiAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3Qge1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICAgIG1heC13aWR0aDogMjgwcHg7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QubmFycm93IHtcXG4gICAgICB3aWR0aDogNjhweDsgfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCB7XFxuICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QubmFycm93IHtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjJweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdC5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7XFxuICAgICAgICBmb250LXdlaWdodDogOTAwOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdC5hY3RpdmU6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdDpob3ZlciAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgYW5pbWF0aW9uOiBhcHBlYXJGcm9tUmlnaHRQcm9qZWN0IDAuM3MgZWFzZS1vdXQgZm9yd2FyZHM7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdDpub3QoLmFjdGl2ZSk6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWljb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1pY29uLm5hcnJvdyB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWNvdW50LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyLm5hcnJvdyB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1uYW1lIHtcXG4gICAgICAgIHdpZHRoOiAxNTVweDtcXG4gICAgICAgIG1heC13aWR0aDogMTU1cHg7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmNvdW50LXRvZG9zIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICB3aWR0aDogMjlweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIGNvbG9yOiAjYzVjNWM1O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4yczsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0bi5uYXJyb3cge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6ICM5OTk5OTk7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1idG46Zm9jdXMge1xcbiAgICAgICAgICBjb2xvcjogIzZlNmU2ZTsgfVxcbiAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIElucHV0ICovXFxuICAgIC8qIFN1Ym1pdCBidXR0b24gKi8gfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0ubmFycm93IHtcXG4gICAgICB3aWR0aDogNjhweDtcXG4gICAgICBtYXJnaW46IDA7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdCB7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNmI2YjZiO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDlweCAwO1xcbiAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgY29sb3I6ICM2YjZiNmI7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdC5uYXJyb3cge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjbmV3LXByb2plY3Q6Zm9jdXMge1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzOGVmN2Q7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjbmV3LXByb2plY3Q6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXG4gICAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdCB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAycHg7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDZweDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3QubmFycm93IHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBsZWZ0OiA0cHg7XFxuICAgICAgICBwYWRkaW5nOiA3cHggMThweDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3QgaW9uLWljb24ge1xcbiAgICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDtcXG4gICAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzhlZjdkO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6aG92ZXIgaW9uLWljb24ge1xcbiAgICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcblxcbi8qIE1pZGRsZTogUHJvamVjdCB0aXRsZSwgdG9kbyB0YXNrcyovXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBtaW4td2lkdGg6IDM3N3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4ICNjYWNhY2E7XFxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCAjY2FjYWNhO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4ICNjYWNhY2E7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAvKiBVc2VyIGlucHV0IHRvZG8gdGFza3MqLyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgbWFpbiB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyA0OyB9IH1cXG4gIG1haW4gI3Byb2plY3QtdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDEuNGVtOyB9XFxuICBtYWluIC50b2RvIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggYXV0byAyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiY2hlY2tib3ggdG9kb3RleHQgYnRuXFxcIjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAvKiBDdXN0b20gbWFkZSBjaGVja2JveCB3aXRoIGFmdGVyIGVsZW1lbnQgKi9cXG4gICAgLyogVGV4dCBvZiB0aGUgdG9kbyB0YXNrIHdpdGggZGV0YWlscyAqLyB9XFxuICAgIG1haW4gLnRvZG86aG92ZXIge1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICNlNGU0ZTQ7XFxuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggI2U0ZTRlNDtcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggI2U0ZTRlNDsgfVxcbiAgICBtYWluIC50b2RvOmhvdmVyIC5kZWxldGUtdG9kby1idG4ge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICBhbmltYXRpb246IGFwcGVhckZyb21SaWdodFByb2plY3QgMC4zcyBlYXNlLW91dCBmb3J3YXJkczsgfVxcbiAgICBtYWluIC50b2RvIGxhYmVsIHtcXG4gICAgICBncmlkLWFyZWE6IGNoZWNrYm94OyB9XFxuICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzOyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyOjphZnRlciB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2M1YzVjNTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuN3M7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXIgaW9uLWljb24ge1xcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lcjpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTJiMGU5OyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyOmhvdmVyIGlvbi1pY29uIHtcXG4gICAgICAgICAgY29sb3I6ICNlMmIwZTk7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1vdXQ7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXIuY29tcGxldGVkOmhvdmVyOjphZnRlciB7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNWM1YzUgIWltcG9ydGFudDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lci5jb21wbGV0ZWQgaW9uLWljb24ge1xcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XFxuICAgICAgICAgIGNvbG9yOiAjYzVjNWM1O1xcbiAgICAgICAgICBhbmltYXRpb246IG5vbmU7IH1cXG4gICAgbWFpbiAudG9kbyAudG9kby1jaGVja2JveCB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICBtYWluIC50b2RvIC50b2RvLXRleHQge1xcbiAgICAgIGdyaWQtYXJlYTogdG9kb3RleHQ7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0LmRvbmUge1xcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgICAgICBjb2xvcjogI2M1YzVjNSAhaW1wb3J0YW50OyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQuZG9uZSAubWVkaXVtLXByaW9yaXR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0LmRvbmUgLmhpZ2gtcHJpb3JpdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQuZG9uZSAuZHVlLWRhdGUsXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQuZG9uZSAub3ZlcmR1ZS1kYXRlIHtcXG4gICAgICAgICAgY29sb3I6ICNjNWM1YzUgIWltcG9ydGFudDsgfVxcbiAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAudG9kby10aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcXG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cXG4gICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5mcm9tLXByb2plY3QsXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmR1ZS1kYXRlLFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5tZWRpdW0tcHJpb3JpdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmhpZ2gtcHJpb3JpdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLm5vdGUtcHJlc2VuY2Uge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAuZnJvbS1wcm9qZWN0OmVtcHR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5kdWUtZGF0ZTplbXB0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAubWVkaXVtLXByaW9yaXR5OmVtcHR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5oaWdoLXByaW9yaXR5OmVtcHR5LFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5ub3RlLXByZXNlbmNlOmVtcHR5IHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgc3BhbiBpbWcge1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIHRvcDogMnB4O1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHNwYW4ub3ZlcmR1ZS1kYXRlIHtcXG4gICAgICAgICAgY29sb3I6IHJlZDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHNwYW4uaGlnaC1wcmlvcml0eSB7XFxuICAgICAgICAgIGNvbG9yOiAjNzMwMGZmOyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgc3Bhbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgICAgICAgICBjb2xvcjogIzEwNjg3NzsgfVxcbiAgICBtYWluIC50b2RvIC5kZWxldGUtdG9kby1idG4ge1xcbiAgICAgIGdyaWQtYXJlYTogYnRuO1xcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgY29sb3I6ICNkNGQ0ZDQ7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7IH1cXG4gICAgICBtYWluIC50b2RvIC5kZWxldGUtdG9kby1idG46aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICM0OTQwNDA7IH1cXG4gICAgICBtYWluIC50b2RvIC5kZWxldGUtdG9kby1idG46Zm9jdXMge1xcbiAgICAgICAgY29sb3I6ICM5MjkyOTI7IH1cXG4gIG1haW4gaHIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm94LXNoYWRvdzogMCAtMTBweCAxMHB4IC0xMHB4ICM4YzhjOGMgaW5zZXQ7IH1cXG4gIG1haW4gI25ldy10b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBJbnB1dCAqL1xcbiAgICAvKiBTdWJtaXQgYnV0dG9uICovIH1cXG4gICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjbmV3LXRvZG8ge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzZiNmI2YjtcXG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICBwYWRkaW5nOiA5cHggMDtcXG4gICAgICBvdXRsaW5lOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI25ldy10b2RvOmZvY3VzIHtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzhlZjdkOyB9XFxuICAgICAgICBtYWluICNuZXctdG9kby1mb3JtICNuZXctdG9kbzpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbyB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiA2cHg7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbyBpb24taWNvbiB7XFxuICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4O1xcbiAgICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC41czsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAgICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzhlZjdkO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOmhvdmVyIGlvbi1pY29uIHtcXG4gICAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG5cXG4vKiBSaWdodCBzaWRlIG9mIHRoZSBwYWdlICovXFxuI3RvZG8tbWlzYy1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiB0b2RvLW1pc2M7XFxuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgei1pbmRleDogMTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyIHtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgICAgLW1vei1ib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7IH0gfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI3RvZG8tbmFtZS1jaGFuZ2VyLWNvbnRhaW5lcixcXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIsXFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyLFxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI25vdGUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICN0b2RvLW5hbWUtY2hhbmdlci1jb250YWluZXIgI2RhdGUsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI2RhdGUsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI2RhdGUsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNub3RlLWNvbnRhaW5lciAjZGF0ZSB7XFxuICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICN0b2RvLW5hbWUtY2hhbmdlci1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgMDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMnB4IC0ycHggNXB4IC0xcHggI2NhY2FjYTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAtMnB4IC0ycHggNXB4IC0xcHggI2NhY2FjYTtcXG4gICAgYm94LXNoYWRvdzogLTJweCAtMnB4IDVweCAtMXB4ICNjYWNhY2E7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3RvZG8tbmFtZS1jaGFuZ2VyLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgICAgaGVpZ2h0OiA0MHB4OyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjbm90ZS1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0zcHggNHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgIC1tb3otYm94LXNoYWRvdzogLTNweCA0cHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgYm94LXNoYWRvdzogLTNweCA0cHggNXB4IC0ycHggI2NhY2FjYTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjbm90ZS1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICAgIGhlaWdodDogMTYwcHg7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIsXFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyxcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIHtcXG4gICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5LnNlbGVjdGVkLTEsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5sb3ctcHJpb3JpdHkuc2VsZWN0ZWQtMSxcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eS5zZWxlY3RlZC0xLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAubG93LXByaW9yaXR5LnNlbGVjdGVkLTEge1xcbiAgICAgICAgY29sb3I6ICMxMDY4Nzc7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eS5zZWxlY3RlZC0yLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubG93LXByaW9yaXR5LnNlbGVjdGVkLTIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5oaWdoLXByaW9yaXR5LnNlbGVjdGVkLTIsXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHkuc2VsZWN0ZWQtMixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLmxvdy1wcmlvcml0eS5zZWxlY3RlZC0yLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAuaGlnaC1wcmlvcml0eS5zZWxlY3RlZC0yIHtcXG4gICAgICAgIGNvbG9yOiAjNzMwMGZmOyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5vbm1vdXNlb3Zlcjpob3ZlcixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLm9ubW91c2VvdmVyOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjMTA2ODc3OyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHk6aG92ZXIgfiAubG93LXByaW9yaXR5LFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5OmhvdmVyIH4gLmxvdy1wcmlvcml0eSB7XFxuICAgICAgICBjb2xvcjogIzEwNjg3NzsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAuaGlnaC1wcmlvcml0eTpob3ZlcixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLmhpZ2gtcHJpb3JpdHk6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICM3MzAwZmY7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgaW9uLWljb24sXFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIGlvbi1pY29uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNkYXRlLXJlbW92ZXIgaW9uLWljb24sXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI2RhdGUtcmVtb3ZlciBpb24taWNvbiB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogNHB4O1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4OyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjZGF0ZS1yZW1vdmVyIGlvbi1pY29uOmhvdmVyLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI2RhdGUtcmVtb3ZlciBpb24taWNvbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyIC5taXNjLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgY29sb3I6ICM2YjZiNmI7XFxuICAgIHdpZHRoOiAxMjBweDsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjFlbTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyIHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjY2xvc2UtZGV0YWlscy1idG4ge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIHdpZHRoOiA2MnB4OyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNjbG9zZS1kZXRhaWxzLWJ0biBpb24taWNvbiB7XFxuICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgIGNvbG9yOiAjYzVjNWM1O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDdweCAtMTNweCAjY2FjYWNhLCAwcHggNXB4IDEwcHggMHB4ICNjYWNhY2E7XFxuICAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCA3cHggLTEzcHggI2NhY2FjYSwgMHB4IDVweCAxMHB4IDBweCAjY2FjYWNhO1xcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDdweCAtMTNweCAjY2FjYWNhLCAwcHggNXB4IDEwcHggMHB4ICNjYWNhY2E7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjY2xvc2UtZGV0YWlscy1idG4gaW9uLWljb246aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICM2ZTZlNmU7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2NhbGVuZGFyLjc1MDRjODg5ZmMyZDlkNGY1NDAwYmE2OThiMjU0Mzc3LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9lZGl0LjI5MjdmOGRlNDI2OGJhZThmMTFjNGRmZTNhZGM3MmI1LnN2Z1wiOyIsImltcG9ydCBcIi4uL1NDU1Mvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0ICogYXMgTWVudUJ0biBmcm9tIFwiLi9zdHlsZS9tZW51LmpzXCI7XG5pbXBvcnQgKiBhcyBSZXNpemUgZnJvbSBcIi4vc3R5bGUvcmVzaXplLmpzXCI7XG5pbXBvcnQgKiBhcyBQcmlvcml0eSBmcm9tIFwiLi9zdHlsZS9wcmlvcml0eS5qc1wiO1xuaW1wb3J0ICogYXMgRGVmYXVsdFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzL2RlZmF1bHRzLmpzXCI7XG5pbXBvcnQgeyBpbml0aWFsUmVuZGVyIH0gZnJvbSBcIi4vcHJvamVjdHMvcmVuZGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBBZGRUYXNrQnRuIGZyb20gXCIuL3Rhc2tzL2FkZC5qc1wiO1xuaW1wb3J0ICogYXMgQWRkUHJvamVjdEJ0biBmcm9tIFwiLi9wcm9qZWN0cy9hZGQuanNcIjtcbmltcG9ydCAqIGFzIExvY2FsU3RvcmFnZSBmcm9tIFwiLi9wcm9qZWN0cy9sb2NhbHN0b3JhZ2UuanNcIjtcblxuLy8gU3R5bGVcbk1lbnVCdG4uc2hvd1Byb2plY3RzKCk7XG5SZXNpemUucmVzcG9uc2l2ZSgpO1xuUHJpb3JpdHkuc3RhcnNDaGFuZ2VDb2xvcnMoKTtcblxuLy8gQXBwIGxvZ2ljXG5cbi8vIFRha2UgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlIGlmIGV4aXN0c1xuLy8gSWYgbm90IGNyZWF0ZSBkZWZhdWx0IHByb2plY3RzXG5cbmxldCBwcm9qZWN0cyA9IExvY2FsU3RvcmFnZS5nZXQoKSB8fCBbLi4uRGVmYXVsdFByb2plY3RzLmdldFByb2plY3RzKCldO1xuXG4vL3JlbmRlciBmaXJzdCBwcm9qZWN0XG5pbml0aWFsUmVuZGVyKHByb2plY3RzKTtcblxuLy8gQnV0dG9ucyB3aGljaCBjYW4gYWRkIGEgdGFzayBvciBhIHByb2plY3QgdG8gYSBkZWZpbmVkIGFycmF5XG4vLyBBbHNvIHJlcmVuZGVyIHRoZSBhcnJheSBhZnRlciBhZGRpbmcgYSB0YXNrXG5BZGRUYXNrQnRuLmFkZFRhc2tUbyhwcm9qZWN0cyk7XG5BZGRQcm9qZWN0QnRuLmFkZFByb2plY3RUbyhwcm9qZWN0cyk7XG4iLCJpbXBvcnQgeyBwcm9qZWN0RmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcbmltcG9ydCB7IHJlZnJlc2hQcm9qZWN0cyB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuaW1wb3J0IHsgYWN0aXZhdGVQcm9qZWN0IH0gZnJvbSBcIi4vdG9nZ2xlLmpzXCI7XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUbyhwcm9qZWN0cykge1xuICBjb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtcHJvamVjdFwiKTtcblxuICBzdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBhZGRQcm9qZWN0KHByb2plY3RzKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdHMpIHtcbiAgLy8gUHJldmVudCBkZWZhdWx0IHN1Ym1pdCBiZWhhdmlvclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBwdXNoUHJvamVjdFRvKHByb2plY3RzKTtcbiAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMSkgYWN0aXZhdGVQcm9qZWN0KHByb2plY3RzLCAwKTtcbiAgcmVmcmVzaFByb2plY3RzKHByb2plY3RzKTtcbn1cblxuZnVuY3Rpb24gcHVzaFByb2plY3RUbyhwcm9qZWN0cykge1xuICBwcm9qZWN0cy5wdXNoKGdldFByb2plY3QoKSk7XG59XG5cbmZ1bmN0aW9uIGdldFByb2plY3QoKSB7XG4gIC8vIEdldCB1c2VyIGlucHV0IHZhbHVlLCBzYXZlIGl0XG4gIGxldCBwcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoeyB0aXRsZTogZ2V0SW5wdXRWYWx1ZSgpIH0pO1xuICAvLyBhbmQgY2xlYXIgaW5wdXRcbiAgY2xlYXJQcm9qZWN0SW5wdXQoKTtcbiAgcmV0dXJuIHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoKSB7XG4gIC8vIEdldCB1c2VyIGlucHV0IHZhbHVlIGFzIE5ldyBQcm9qZWN0IDogU1RSSU5HXG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0XCIpLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbGVhclByb2plY3RJbnB1dCgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdFwiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmV4cG9ydCB7IGFkZFByb2plY3RUbyB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdEZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5LmpzXCI7XG5pbXBvcnQgKiBhcyBEZWZhdWx0VGFza3MgZnJvbSBcIi4uL3Rhc2tzL2RlZmF1bHRzLmpzXCI7XG5cbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAvLyBUaGlzIGZ1bmN0aW9uIHNpbXBseSBjcmVhdGVzIGFuIGFycmF5IHdpdGggZGVmYXVsdCBwcm9qZWN0cyBpbiBpdFxuICBsZXQgYWxsUHJvamVjdHMgPSBbXG4gICAgcHJvamVjdEZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiUHJvamVjdCAxXCIsXG4gICAgICB0YXNrczogRGVmYXVsdFRhc2tzLmdldFRhc2tzQnlOdW1iZXIoMSksXG4gICAgICBpc0FjdGl2ZTogdHJ1ZSxcbiAgICB9KSxcbiAgICBwcm9qZWN0RmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJQcm9qZWN0IDJcIixcbiAgICAgIHRhc2tzOiBEZWZhdWx0VGFza3MuZ2V0VGFza3NCeU51bWJlcigyKSxcbiAgICB9KSxcbiAgXTtcblxuICByZXR1cm4gYWxsUHJvamVjdHM7XG59XG5cbmV4cG9ydCB7IGdldFByb2plY3RzIH07XG4iLCJpbXBvcnQgeyByZWZyZXNoUHJvamVjdHMgfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcblxuaW1wb3J0IHsgYWN0aXZhdGVQcm9qZWN0IH0gZnJvbSBcIi4vdG9nZ2xlLmpzXCI7XG5pbXBvcnQgeyBjbGVhckNvbnRlbnRPZiB9IGZyb20gXCIuLi90YXNrcy9yZW5kZXIuanNcIjtcblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdEZyb20ocHJvamVjdHMpIHtcbiAgLy8gVGFrZSB0aGUgY29sbGVjdGlvbiBvZiBhbGwgZGVsZXRlIGNyb3NzIGJ1dHRvbnMgZnJvbSBwcm9qZWN0cyBieSBjbGFzcyBuYW1lXG4gIGxldCBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKTtcbiAgLy8gTG9vcCB0aHJvdWdoIGNvbGxlY3Rpb24gYW5kIGFkZCBldmVudCBsaXN0ZW5lciB0byBlYWNoIGJ1dHRvblxuICBmb3IgKGxldCBidXR0b24gb2YgYnV0dG9ucykge1xuICAgIGRlbGV0ZUJ0blJlbW92ZVByb2plY3QoYnV0dG9uLCBwcm9qZWN0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQnRuUmVtb3ZlUHJvamVjdChidXR0b24sIHByb2plY3RzKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIGFzc2lnbiBFdmVudCBsaXN0ZW5lciB0byBidXR0b25zXG4gIC8vIHRvIHJlbW92ZSBwYXJ0aWN1bGFyIHByb2plY3RzIGZyb20gcGFnZVxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgLy8gZ2V0IElkIG9mIGEgYnV0dG9uIHRvIHdoaWNoIGxpc3RlbmVyIGlzIGFzc2lnbmVkXG4gICAgbGV0IGJ0bklkID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xuICAgIC8vIGdldCBvbmx5IG51bWJlciBhZnRlciB0aGUgaHlwaGVuIGZyb20gSWRcbiAgICBsZXQgbnVtYmVyID0gYnRuSWQuc3BsaXQoXCItXCIpWzJdO1xuXG4gICAgLy8gUmVtb3ZlIGl0ZW0gZnJvbSB0aGUgYXJyYXkgb2YgcHJvamVjdHMgYnkgdGhhdCBudW1iZXJcbiAgICBwcm9qZWN0cy5zcGxpY2UobnVtYmVyLCAxKTtcbiAgICAvLyBIYW5kbGUgYWN0aXZlIHByb2plY3RzIGFmdGVyIGRlbGV0aW5nIG9uZSBidXQgYmVmb3JlIHJlcmVuZGVyaW5nXG4gICAgYWN0aXZhdGlvbkhhbmRsaW5nKHByb2plY3RzKTtcbiAgICAvLyBSZXJlbmRlciBwcm9qZWN0c1xuICAgIHJlZnJlc2hQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgLy8gQXZvaWQgZmlyaW5nIHBhcmVudCBlbGVtZW50IGxpc3RlbmVyIGFmdGVyIGNsaWNraW5nIG9uIHRoZSBidXR0b25cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGlvbkhhbmRsaW5nKHByb2plY3RzKSB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gaXMgbmVlZGVkIHdoZW4geW91IGRlbGV0ZSBwcm9qZWN0c1xuICAvLyBXaGVuIGlzIG9uZSBhY3RpdmUgZGVsZXRlZCwgdGhlcmUgbmVlZHMgdG8gYmUgYW5vdGhlciBhY3RpdmUgcHJvamVjdFxuICAvLyBXaGVuIGFsbCBkZWxldGVkLCB0aGVyZSBuZWVkcyB0byBiZSBhbGwgdGFza3Mgc2hvd25cbiAgaWYgKHByb2plY3RzLmxlbmd0aCA+IDAgJiYgbm9uZUFjdGl2ZVByb2plY3RzKHByb2plY3RzKSlcbiAgICBhY3RpdmF0ZVByb2plY3QocHJvamVjdHMsIDApO1xuICBpZiAocHJvamVjdHMubGVuZ3RoID09PSAwKSBjbGVhckNvbnRlbnRPZihcInRvZG9zXCIpO1xufVxuXG5mdW5jdGlvbiBub25lQWN0aXZlUHJvamVjdHMocHJvamVjdHMpIHtcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgIGlmIChwcm9qZWN0LmlzQWN0aXZlKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7IGRlbGV0ZVByb2plY3RGcm9tIH07XG4iLCJjb25zdCBwcm9qZWN0RmFjdG9yeSA9IGZ1bmN0aW9uICh7IHRpdGxlID0gXCJcIiwgdGFza3MgPSBbXSwgaXNBY3RpdmUgPSBmYWxzZSB9KSB7XG4gIHJldHVybiB7IHRpdGxlLCB0YXNrcywgaXNBY3RpdmUgfTtcbn07XG5cbmV4cG9ydCB7IHByb2plY3RGYWN0b3J5IH07XG5gYDtcbiIsImZ1bmN0aW9uIHNhdmUocHJvamVjdHMpIHtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgc3RyaW5naWZ5KHByb2plY3RzKSk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeShvYmopIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG9iaik7XG59XG5cbmZ1bmN0aW9uIGdldCgpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xufVxuXG5leHBvcnQgeyBzYXZlLCBnZXQgfTtcbiIsImltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSwgY2xlYXJDb250ZW50T2YgfSBmcm9tIFwiLi4vdGFza3MvcmVuZGVyLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c1Nob3dUYXNrcyB9IGZyb20gXCIuL3RvZ2dsZS5qc1wiO1xuaW1wb3J0ICogYXMgRGV0YWlscyBmcm9tIFwiLi4vdGFza3MvZGV0YWlsc0lucHV0LmpzXCI7XG5pbXBvcnQgKiBhcyBEZWxldGVUYXNrQnRucyBmcm9tIFwiLi4vdGFza3MvZGVsZXRlLmpzXCI7XG5pbXBvcnQgKiBhcyBUYXNrRG9uZSBmcm9tIFwiLi4vdGFza3MvZG9uZS5qc1wiO1xuaW1wb3J0ICogYXMgRGVsZXRlUHJvamVjdEJ0bnMgZnJvbSBcIi4vZGVsZXRlLmpzXCI7XG5pbXBvcnQgeyBnZXRBY3RpdmVQcm9qZWN0IH0gZnJvbSBcIi4uL3Rhc2tzL2RldGFpbHNJbnB1dC5qc1wiO1xuaW1wb3J0ICogYXMgTG9jYWxTdG9yYWdlIGZyb20gXCIuL2xvY2Fsc3RvcmFnZS5qc1wiO1xuaW1wb3J0ICogYXMgTWVudSBmcm9tIFwiLi4vc3R5bGUvbWVudS5qc1wiO1xuXG5mdW5jdGlvbiBpbml0aWFsUmVuZGVyKGFycikge1xuICByZWZyZXNoUHJvamVjdHMoYXJyKTtcbn1cblxuZnVuY3Rpb24gcmVmcmVzaFByb2plY3RzKHByb2plY3RzKSB7XG4gIC8vIElmIHByb2plY3RzIGFyZSBtaW5pbWl6ZWQsIGJyb2FkZW4gdGhlbVxuICBicm9hZElmTWluaW1pemVkKCk7XG4gIC8vIFNob3cgdGhlIG5hbWUgb2YgdGhlIGFjdGl2ZSBwcm9qZWN0XG4gIHNob3dBY3RpdmVQcm9qZWN0VGl0bGUocHJvamVjdHMpO1xuICAvLyBDbGVhciBhbGwgcHJldmlvdXNseSByZW5kZXJlZCBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG4gIGNsZWFyQ29udGVudE9mKFwicHJvamVjdC1saXN0XCIpO1xuICByZW5kZXJBbGxQcm9qZWN0cyhwcm9qZWN0cyk7XG4gIC8vIGVhY2ggcHJvamVjdCBzaG93cyBpdHMgdGFza3NcbiAgcHJvamVjdHNTaG93VGFza3MocHJvamVjdHMpO1xuICAvLyBkZWxldGUgYnRucyBjYW4gZGVsZXRlIHByb2plY3RzXG4gIERlbGV0ZVByb2plY3RCdG5zLmRlbGV0ZVByb2plY3RGcm9tKHByb2plY3RzKTtcbiAgLy8gVHVybiBvbiBhbGwgb2YgdGhlIGludGVyYWN0aXZlbmVzcyBvZiB0aGUgdGFza3NcbiAgdHVybk9uVGFza3NJbnRlcmFjdGlvbihwcm9qZWN0cyk7XG4gIC8vIFNhdmUgdGhlIHByb2plY3RzIHRvIGxvY2FsU3RvcmFnZVxuICBMb2NhbFN0b3JhZ2Uuc2F2ZShwcm9qZWN0cyk7XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hPbmx5VGFza3NGcm9tKHByb2plY3RzKSB7XG4gIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAvLyBJZiBwcm9qZWN0IGlzIGFjdGl2ZSB0aGVuIHJlbmRlciBpdHMgdGFza3NcbiAgICBpZiAocHJvamVjdC5pc0FjdGl2ZSkgcmVuZGVyQWxsVGFza3NGcm9tKHByb2plY3QudGFza3MpO1xuICB9XG4gIHR1cm5PblRhc2tzSW50ZXJhY3Rpb24ocHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBicm9hZElmTWluaW1pemVkKCkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgbGV0IGlzTmFycm93ID0gY29udGVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJuYXJyb3dcIik7XG4gIGlmIChpc05hcnJvdykgTWVudS5uYXJyb3dQcm9qZWN0Q29udGFpbmVyKCk7XG59XG5cbmZ1bmN0aW9uIHR1cm5PblRhc2tzSW50ZXJhY3Rpb24ocHJvamVjdHMpIHtcbiAgLy8gQ2hhbmdlIHRhc2tzIHdoZW4gdXNlciB0eXBlIHNvbWV0aGluZyB0byBkZXRhaWxzIHdpbmRvd1xuICBEZXRhaWxzLmNoYW5nZVRhc2tPbklucHV0KHByb2plY3RzKTtcbiAgLy8gTWFrZSBkZWxldGUgdGFza3MgYnV0dG9ucyBkZWxldGUgdGFza3MgZnJvbSBwcm9qZWN0c1xuICBEZWxldGVUYXNrQnRucy5kZWxldGVUYXNrc0Zyb20ocHJvamVjdHMpO1xuICAvLyBtYWtlIGRvbmUgYnV0dG9uc3QgY29tcGxldGUgdGFza3NcbiAgVGFza0RvbmUuZG9uZUJ0bnMocHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBzaG93QWN0aXZlUHJvamVjdFRpdGxlKHByb2plY3RzKSB7XG4gIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGl0bGVcIik7XG4gIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gZ2V0QWN0aXZlUHJvamVjdChwcm9qZWN0cykudGl0bGU7XG4gIH0gZWxzZSB7XG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJBbGxQcm9qZWN0cyhhcnIpIHtcbiAgLy9SZW5kZXIgZWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSB0byB0aGUgcGFnZVxuICBmb3IgKGxldCBbaW5kZXgsIGl0ZW1dIG9mIGFyci5lbnRyaWVzKCkpIHtcbiAgICByZW5kZXJQcm9qZWN0KGluZGV4LCBpdGVtKTtcbiAgICAvLyBJZiBwcm9qZWN0IGlzIGFjdGl2ZSB0aGVuIHJlbmRlciBpdHMgdGFza3NcbiAgICBpZiAoaXRlbS5pc0FjdGl2ZSkgcmVuZGVyQWxsVGFza3NGcm9tKGl0ZW0udGFza3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3QoaSwgcHJvamVjdCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKS5hcHBlbmQoY3JlYXRlUHJvamVjdChpLCBwcm9qZWN0KSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoaSwgcHJvamVjdCkge1xuICAvLyBjcmVhdGUgYSBsaSBlbGVtZW50XG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0XCIpO1xuICBpZiAocHJvamVjdC5pc0FjdGl2ZSkgbGkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHByb2plY3QtJHtpfWApO1xuICAvLyBhcHBlbmQgZXZlcnl0aGluZyB0byBpdFxuICBsaS5hcHBlbmQoY3JlYXRlSWNvbigpKTtcbiAgbGkuYXBwZW5kKGNyZWF0ZVRpdGxlQW5kQ291bnQocHJvamVjdC50aXRsZSwgcHJvamVjdC50YXNrcy5sZW5ndGgpKTtcbiAgbGkuYXBwZW5kKGNyZWF0ZURlbGV0ZUJ0bihpKSk7XG4gIHJldHVybiBsaTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSWNvbigpIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3QtaWNvblwiKTtcblxuICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpb24taWNvblwiKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicmVhZGVyLW91dGxpbmVcIik7XG5cbiAgc3Bhbi5hcHBlbmQoaWNvbik7XG5cbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlQW5kQ291bnQodGl0bGUsIGNvdW50KSB7XG4gIC8vIGNyZWF0ZSBhIGNvbnRhaW5lciBmb3IgVGl0bGUgYW5kIFRvZG8gQ291bnQgTnVtYmVyXG4gIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcm9qZWN0LXRpdGxlLWNvdW50LWNvbnRhaW5lclwiKTtcbiAgLy8gQ3JlYXRlIGEgc3BhbiBmb3IgdGl0bGVcbiAgbGV0IG5hbWVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIG5hbWVTcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdC1uYW1lXCIpO1xuICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAvLyBDcmVhdGUgYSBzcGFuIGZvciBjb3VudCBudW1iZXJcbiAgbGV0IGNvdW50U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBjb3VudFNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjb3VudC10b2Rvc1wiKTtcbiAgY291bnRTcGFuLnRleHRDb250ZW50ID0gY291bnQ7XG4gIC8vIEFwcGVuZCBzcGFucyB0byBhIGRpdiBhbmQgcmV0dXJuIGEgY29udGFpbmVyXG4gIGRpdi5hcHBlbmQobmFtZVNwYW4pO1xuICBkaXYuYXBwZW5kKGNvdW50U3Bhbik7XG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlbGV0ZUJ0bihpKSB7XG4gIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGRlbGV0ZS1wcm9qZWN0LSR7aX1gKTtcblxuICAvLyBjcmVhdGUgYW4gaWNvbiBhbmQgYXBwZW5kIGl0IHRvIGJ1dHRvblxuICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpb24taWNvblwiKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY2xvc2UtY2lyY2xlXCIpO1xuXG4gIGJ0bi5hcHBlbmRDaGlsZChpY29uKTtcblxuICByZXR1cm4gYnRuO1xufVxuXG5leHBvcnQgeyByZWZyZXNoUHJvamVjdHMsIGluaXRpYWxSZW5kZXIsIHJlZnJlc2hPbmx5VGFza3NGcm9tIH07XG4iLCJpbXBvcnQgeyByZWZyZXNoUHJvamVjdHMgfSBmcm9tIFwiLi9yZW5kZXIuanNcIjtcbmltcG9ydCB7IGhpZGVEZXRhaWxzIH0gZnJvbSBcIi4uL3Rhc2tzL2RldGFpbHNUb2dnbGUuanNcIjtcblxuZnVuY3Rpb24gcHJvamVjdHNTaG93VGFza3MoYXJyKSB7XG4gIC8vIE1ha2UgcHJvamVjdHMgb24gdGhlIHBhZ2Ugc2hvdyB0aGVpciB0YXNrcyBvbmNsaWNrXG4gIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0XCIpO1xuXG4gIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBnZXQgSWQgb2YgYSBwcm9qZWN0IHRvIHdoaWNoIGxpc3RlbmVyIGlzIGFzc2lnbmVkXG4gICAgICBsZXQgcHJvamVjdElkID0gZXZlbnQuY3VycmVudFRhcmdldC5pZDtcbiAgICAgIC8vIGdldCBhIG51bWJlciBmcm9tIElkIGFmdGVyIHRoZSBoeXBoZW5cbiAgICAgIGxldCBudW1iZXIgPSBwcm9qZWN0SWQuc3BsaXQoXCItXCIpWzFdO1xuICAgICAgLy8gQWN0aXZhdGUgb25lIHByb2plY3QgYW5kIGRlYWN0aXZhdGUgb3RoZXJzXG4gICAgICBhY3RpdmF0ZVByb2plY3QoYXJyLCBudW1iZXIpO1xuICAgICAgLy8gUmVmcmVzaCBwcm9qZWN0c1xuICAgICAgcmVmcmVzaFByb2plY3RzKGFyciwgbnVtYmVyKTtcbiAgICAgIC8vIENsb3NlIHRoZSBkZXRhaWxzIG9uIHRhc2sgaWYgaXQncyBvcGVuXG4gICAgICBoaWRlRGV0YWlscygpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlUHJvamVjdChhcnIsIG51bWJlcikge1xuICBkZWFjdGl2YXRlQWxsUHJvamVjdHMoYXJyKTtcbiAgLy8gQWZ0ZXIgZGVhY3RpdmF0aW9uIG9mIGFsbCBwcm9qZWN0cyB3ZSBhY3RpdmF0ZSBvbmx5IG9uZVxuICBhcnJbbnVtYmVyXS5pc0FjdGl2ZSA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGRlYWN0aXZhdGVBbGxQcm9qZWN0cyhhcnIpIHtcbiAgZm9yIChsZXQgaXRlbSBvZiBhcnIpIHtcbiAgICBpdGVtLmlzQWN0aXZlID0gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IHsgcHJvamVjdHNTaG93VGFza3MsIGFjdGl2YXRlUHJvamVjdCB9O1xuIiwiZnVuY3Rpb24gc2hvd1Byb2plY3RzKCkge1xuICAvLyBNYWtlIG1lbnUgYnV0dG9uIGluIHRoZSB0b3AgbGVmdCBjb3JuZXIgZG8gd29yayAoY2hhbmdlIHByb2plY3RzIHRvIHdpZGUgb3IgbmFycm93KVxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbmFycm93UHJvamVjdENvbnRhaW5lcigpKTtcbn1cblxuZnVuY3Rpb24gbmFycm93UHJvamVjdENvbnRhaW5lcigpIHtcbiAgLy8gVGFrZSBhbiBhcnJheSBvZiBlbGVtZW50cyBmcm9tIHRoZSBwYWdlIGFuZCB0b2dnbGUgYSBjbGFzcyAnbmFycm93JyBvbiBlYWNoXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgZ2V0RWxlbWVudHNUb05hcnJvdygpKSB7XG4gICAgdG9nZ2xlTmFycm93KGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1pbmltaXplUHJvamVjdENvbnRhaW5lcigpIHtcbiAgLy8gVGFrZSBhbiBhcnJheSBvZiBlbGVtZW50cyBmcm9tIHRoZSBwYWdlIGFuZCB0b2dnbGUgYSBjbGFzcyAnbmFycm93JyBvbiBlYWNoXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgZ2V0RWxlbWVudHNUb05hcnJvdygpKSB7XG4gICAgYWRkTmFycm93KGVsZW1lbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZE5hcnJvdyhlbGVtZW50KSB7XG4gIC8vIFJlbW92ZSBjbGFzcyAnbmFycm93JyBmcm9tIGFuIGVsZW1lbnRcbiAgLy8gdGhpcyBjbGFzcyBjaGFuZ2VzIGxlZnQtc2lkZSBwYWdlIG1lbnUgbWFraW5nIGl0IHNtYWxsZXJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibmFycm93XCIpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVOYXJyb3coZWxlbWVudCkge1xuICAvLyBBZGQvcmVtb3ZlIGNsYXNzICduYXJyb3cnIHRvIGFuIGVsZW1lbnRcbiAgLy8gdGhpcyBjbGFzcyBjaGFuZ2VzIGxlZnQtc2lkZSBwYWdlIG1lbnUgbWFraW5nIGl0IHNtYWxsZXJcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwibmFycm93XCIpO1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50c1RvTmFycm93KCkge1xuICAvLyBUYWtlIHNvbWUgRE9NIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2VcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0XCIpO1xuICBsZXQgcHJvamVjdEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1pY29uXCIpO1xuICBsZXQgcHJvamVjdFRpdGxlQ291bnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgIFwicHJvamVjdC10aXRsZS1jb3VudC1jb250YWluZXIgXCJcbiAgKTtcbiAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xuICBsZXQgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWZvcm1cIik7XG4gIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdFwiKTtcbiAgbGV0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1wcm9qZWN0XCIpO1xuXG4gIC8vIFB1dCB0aGVtIGluIHRoZSBhcnJheSBhbmQgcmV0dXJuIGl0XG4gIGxldCBlbGVtZW50cyA9IFtcbiAgICBjb250ZW50LFxuICAgIHByb2plY3RMaXN0LFxuICAgIC4uLnByb2plY3QsXG4gICAgLi4ucHJvamVjdEljb24sXG4gICAgLi4ucHJvamVjdFRpdGxlQ291bnRDb250YWluZXIsXG4gICAgLi4uZGVsZXRlUHJvamVjdEJ0bixcbiAgICBuZXdQcm9qZWN0Rm9ybSxcbiAgICBuZXdQcm9qZWN0LFxuICAgIHN1Ym1pdFByb2plY3QsXG4gIF07XG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IHsgc2hvd1Byb2plY3RzLCBtaW5pbWl6ZVByb2plY3RDb250YWluZXIsIG5hcnJvd1Byb2plY3RDb250YWluZXIgfTtcbiIsImZ1bmN0aW9uIHN0YXJzQ2hhbmdlQ29sb3JzKCkge1xuICBhY3RpdmF0ZUZpcnN0U3RhcigpO1xuICBhY3RpdmF0ZVNlY29uZFN0YXIoKTtcbiAgYWN0aXZhdGVUaGlyZFN0YXIoKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVGaXJzdFN0YXIoKSB7XG4gIGdldFN0YXIxKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFjdGl2YXRlU3RhcigxKSk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlU2Vjb25kU3RhcigpIHtcbiAgZ2V0U3RhcjIoKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWN0aXZhdGVTdGFyKDIpKTtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVUaGlyZFN0YXIoKSB7XG4gIGdldFN0YXIzKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFjdGl2YXRlU3RhcigzKSk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlU3RhcihudW1iZXIpIHtcbiAgLy8gTWFrZSBhIHN0YXIgd2l0aCBhIGNlcnRhaW4gbnVtYmVyIGNoYW5nZSBpdHMgc3R5bGVcbiAgLy8gTnVtYmVyIGNhbiBiZSAxLCAyIG9yIDMgYmVjYXVzZSB0aGVyZSBhcmUgYSB0b3RhbCBvZiAzIHN0YXJcbiAgaWYgKG51bWJlciA8IDEgfHwgbnVtYmVyID4gMylcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBDYW4ndCBhY3RpdmF0ZSBzdGFyICR7bnVtYmVyfSBpbiBhY3RpdmF0ZVN0YXIoKS4gUG9zc2libGUgdmFsdWVzOiAxLCAyLCAzYFxuICAgICk7XG4gIHN3aXRjaCAobnVtYmVyKSB7XG4gICAgY2FzZSAxOlxuICAgICAgb3V0bGluZVNlY29uZFN0YXIoKTtcbiAgICAgIG91dGxpbmVUaGlyZFN0YXIoKTtcbiAgICAgIHJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzKCk7XG4gICAgICBhZGRNZWRpdW1Pbm1vdXNlb3ZlcigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgZmlsbFNlY29uZFN0YXIoKTtcbiAgICAgIGFkZENvbG9yVHdvU3RhcnMoKTtcbiAgICAgIG91dGxpbmVUaGlyZFN0YXIoKTtcbiAgICAgIGRlY29sb3JUaGlyZFN0YXIoKTtcbiAgICAgIGFkZE1lZGl1bU9ubW91c2VvdmVyKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDM6XG4gICAgICBmaWxsU2Vjb25kU3RhcigpO1xuICAgICAgZmlsbFRoaXJkU3RhcigpO1xuICAgICAgYWRkQ29sb3JUaHJlZVN0YXJzKCk7XG4gICAgICByZW1vdmVNZWRpdW1Pbm1vdXNlb3ZlcigpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0VDT05EIFNUQVJcbmZ1bmN0aW9uIGZpbGxTZWNvbmRTdGFyKCkge1xuICAvLyBHZXQgdGhlIGNoaWxkIG9mIHRoZSBwcmlvcml0eSBhbmQgbWFrZSBpdCBmaWxsZWQgc3RhclxuICBnZXRTdGFyMigpLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdGFyXCIpO1xufVxuXG5mdW5jdGlvbiBvdXRsaW5lU2Vjb25kU3RhcigpIHtcbiAgLy8gR2V0IHRoZSBjaGlsZCBvZiB0aGUgcHJpb3JpdHkgYW5kIG1ha2UgaXQgb3V0bGluZWQgc3RhclxuICBnZXRTdGFyMigpLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdGFyLW91dGxpbmVcIik7XG59XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFRISVJEIFNUQVJcblxuZnVuY3Rpb24gZmlsbFRoaXJkU3RhcigpIHtcbiAgLy8gR2V0IHRoZSBjaGlsZCBvZiB0aGUgcHJpb3JpdHkgYW5kIG1ha2UgaXQgZmlsbGVkIHN0YXJcbiAgZ2V0U3RhcjMoKS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwic3RhclwiKTtcbn1cblxuZnVuY3Rpb24gb3V0bGluZVRoaXJkU3RhcigpIHtcbiAgLy8gR2V0IHRoZSBjaGlsZCBvZiB0aGUgcHJpb3JpdHkgYW5kIG1ha2UgaXQgb3V0bGluZWQgc3RhclxuICBnZXRTdGFyMygpLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzdGFyLW91dGxpbmVcIik7XG59XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBIZWxwZXJzXG5cbmZ1bmN0aW9uIHJlbW92ZU1lZGl1bU9ubW91c2VvdmVyKCkge1xuICAvLyBTZWNvbmQgc3RhciBoYXMgYSBjbGFzcyBcIm9ubW91c2VvdmVyXCIgd2l0aCBhIGhvdmVyIGVmZmVjdFxuICAvLyBXaGVuIHRoZSAzcmQgc3RhciBpcyBjaG9zZW4gcmVtb3ZlIHRoaXMgaG92ZXIgZWZmZWN0IGZyb20gdGhlIDJuZCBzdGFyXG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LnJlbW92ZShcIm9ubW91c2VvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBhZGRNZWRpdW1Pbm1vdXNlb3ZlcigpIHtcbiAgLy8gU2Vjb25kIHN0YXIgaGFzIGEgY2xhc3MgXCJvbm1vdXNlb3ZlclwiIHdpdGggYSBob3ZlciBlZmZlY3RcbiAgLy8gV2hlbiB0aGUgMXN0IE9SIDJuZCBzdGFyIGlzIGNob3NlbiBhZGQgdGhpcyBob3ZlciBlZmZlY3QgdG8gdGhlIDJuZCBzdGFyXG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LmFkZChcIm9ubW91c2VvdmVyXCIpO1xufVxuXG5mdW5jdGlvbiBzdGFySXNPdXRsaW5lZChzdGFyKSB7XG4gIHJldHVybiBzdGFyLmNoaWxkcmVuWzBdLmdldEF0dHJpYnV0ZShcIm5hbWVcIikgPT09IFwic3Rhci1vdXRsaW5lXCI7XG59XG5cbmZ1bmN0aW9uIGFkZENvbG9yVHdvU3RhcnMoKSB7XG4gIHJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzKCk7XG4gIGdldFN0YXIxKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTFcIik7XG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTFcIik7XG59XG5mdW5jdGlvbiBhZGRDb2xvclRocmVlU3RhcnMoKSB7XG4gIHJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzKCk7XG4gIGdldFN0YXIxKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTJcIik7XG4gIGdldFN0YXIyKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTJcIik7XG4gIGdldFN0YXIzKCkuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLTJcIik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNvbG9yRnJvbUFsbFN0YXJzKCkge1xuICBkZWNvbG9yRmlyc3RTdGFyKCk7XG4gIGRlY29sb3JTZWNvbmRTdGFyKCk7XG4gIGRlY29sb3JUaGlyZFN0YXIoKTtcbn1cblxuZnVuY3Rpb24gZGVjb2xvckZpcnN0U3RhcigpIHtcbiAgZ2V0U3RhcjEoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMVwiKTtcbiAgZ2V0U3RhcjEoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMlwiKTtcbn1cbmZ1bmN0aW9uIGRlY29sb3JTZWNvbmRTdGFyKCkge1xuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC0xXCIpO1xuICBnZXRTdGFyMigpLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC0yXCIpO1xufVxuZnVuY3Rpb24gZGVjb2xvclRoaXJkU3RhcigpIHtcbiAgZ2V0U3RhcjMoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMVwiKTtcbiAgZ2V0U3RhcjMoKS5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWQtMlwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcjEoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXItMVwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcjIoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXItMlwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhcjMoKSB7XG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXItM1wiKTtcbn1cblxuZXhwb3J0IHsgc3RhcnNDaGFuZ2VDb2xvcnMsIGFjdGl2YXRlU3RhciB9O1xuIiwiaW1wb3J0IHsgZ2V0Q29tcHV0ZWREaXNwbGF5IH0gZnJvbSBcIi4uL3Rhc2tzL2RldGFpbHNUb2dnbGUuanNcIjtcbmltcG9ydCB7IG1pbmltaXplUHJvamVjdENvbnRhaW5lciB9IGZyb20gXCIuL21lbnUuanNcIjtcblxuZnVuY3Rpb24gcmVzcG9uc2l2ZSgpIHtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICAvLyBSZXNpemluZyB3aW5kb3cgbWFrZXMgbWlkZGxlIGNvbHVtbiBmaXRcbiAgd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDI0cHgpXCIpLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAvLyBJZiBzY3JlZW4gaXMgbmFycm93ZXIgdGhhbiAxMDI0cHggYW5kIGRldGFpbHMgYXJlIG9wZW4gKHJpZ2h0IHNpZGUgb2YgdGhlIHBhZ2UpXG4gICAgLy8gdGhhbiBtaW5pbWl6ZSBsZWZ0IHNpZGUgYW5kIG1ha2UgXCJtYWluXCIgZml0IHRoZSB3aG9sZSBzZWNvbmQgY29sdW1uXG4gICAgaWYgKHNjcmVlbkxlc3NUaGVuMTAyNCgpICYmIGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gICAgICBtaW5pbWl6ZVByb2plY3RDb250YWluZXIoKTtcbiAgICAgIC8vIERvZXNuJ3QgbWF0dGVyIHRoZSBzaXplIG9mIHRoZSBzY3JlZW4sXG4gICAgICAvLyBpZiBkZXRhaWxzIGFyZSBjbG9zZWQgJ21haW4nIGZpdCB0aGUgd2hvbGUgc2Vjb25kIGNvbHVtblxuICAgIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWREaXNwbGF5KGRldGFpbHMpID09PSBcIm5vbmVcIikge1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzRcIjtcbiAgICAgIC8vIEVsc2UgZm9yIGUuZy4gd2hlbiBzY3JlZW4gYXJlIHdpZGVyIHRoZW4gMTAyNHB4IGFuZFxuICAgICAgLy8gZGV0YWlscyBhcmUgb3BlbiwgdGhlbiBtYWluIGlzIHRoZSBjb2x1bW4gaW4gdGhlIG1pZGRsZVxuICAgIH0gZWxzZSB7XG4gICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvM1wiO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNjcmVlbkxlc3NUaGVuMTAyNCgpIHtcbiAgLy8gQ2hlY2sgaWYgc2NyZWVuIGlzIGxlc3MgdGhlbiAxMDI0cHggd2lkZVxuICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDI0cHgpXCIpLm1hdGNoZXM7XG59XG5cbi8vIFdoZW4gcmVzaXppbmcgd2luZG93IG1pZGRsZSBjb2x1bW4gcmVzaXplIGl0c2VsZiB0byBiZSByZXNwb25zaXZlXG5leHBvcnQgeyByZXNwb25zaXZlLCBzY3JlZW5MZXNzVGhlbjEwMjQgfTtcbiIsImltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuaW1wb3J0IHsgcmVmcmVzaFByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2plY3RzL3JlbmRlci5qc1wiO1xuXG5mdW5jdGlvbiBhZGRUYXNrVG8oYXJyKSB7XG4gIGNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC10b2RvXCIpO1xuXG4gIHN1Ym1pdFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGFkZFRhc2soYXJyKSk7XG59XG5cbmZ1bmN0aW9uIGFkZFRhc2soYXJyKSB7XG4gIC8vIFByZXZlbnQgZGVmYXVsdCBzdWJtaXQgYmVoYXZpb3JcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgLy8gTG9vcCB0byBnZXQgYWN0aXZlIHByb2plY3RcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhcnIpIHtcbiAgICBpZiAocHJvamVjdC5pc0FjdGl2ZSkgcHVzaFRhc2tUbyhwcm9qZWN0LnRhc2tzKTtcbiAgfVxuXG4gIC8vIFJlcmVuZGVyIGFycmF5XG4gIHJlZnJlc2hQcm9qZWN0cyhhcnIpO1xufVxuXG5mdW5jdGlvbiBwdXNoVGFza1RvKGFycikge1xuICAvLyBQdXNoIHRhc2sgdG8gYXJyYXlcbiAgYXJyLnB1c2goZ2V0VGFzaygpKTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gZ2V0VGFzaygpIHtcbiAgLy8gR2V0IHVzZXIgaW5wdXQgdmFsdWUsIHNhdmUgaXRcbiAgbGV0IHRhc2sgPSB0YXNrRmFjdG9yeSh7IHRpdGxlOiBnZXRJbnB1dFZhbHVlKCkgfSk7XG4gIC8vIGFuZCBjbGVhciBpbnB1dFxuICBjbGVhclRhc2tJbnB1dCgpO1xuICByZXR1cm4gdGFzaztcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXRWYWx1ZSgpIHtcbiAgLy8gR2V0IHVzZXIgaW5wdXQgdmFsdWUgYXMgTmV3IFRhc2sgOiBTVFJJTkdcbiAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG9cIikudmFsdWU7XG59XG5cbmZ1bmN0aW9uIGNsZWFyVGFza0lucHV0KCkge1xuICAvLyBDbGVhciB1c2VyIGlucHV0XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXRvZG9cIikudmFsdWUgPSBcIlwiO1xufVxuXG5leHBvcnQgeyBnZXRUYXNrLCBhZGRUYXNrVG8gfTtcbiIsImltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuXG5mdW5jdGlvbiBnZXRUYXNrc0J5TnVtYmVyKG51bWJlciA9IDEpIHtcbiAgLy8gVGhpcyBmdW5jdGlvbiBzaW1wbHkgY3JlYXRlcyBhbiBhcnJheSB3aXRoIGRlZmF1bHQgdGFza3MgaW4gaXRcbiAgLy8gTnVtYmVyIGlzIGp1c3QgYSBudW1iZXIgb2YgYnVuZGxlIGZyb20gMSB0byAzXG4gIGxldCBidW5kbGUxID0gW1xuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkV4YW1wbGUgMVwiLFxuICAgICAgZGF0ZTogXCIxNS4wMy4yMDI1XCIsXG4gICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgIG5vdGU6IFwic29tZXRoaW5nXCIsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiRXhhbXBsZSAyXCIsXG4gICAgICBkYXRlOiBcIjE1LjAzLjIwMDBcIixcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJFeGFtcGxlIDNcIixcbiAgICAgIHByaW9yaXR5OiBcImhpZ2hcIixcbiAgICB9KSxcbiAgXTtcblxuICBsZXQgYnVuZGxlMiA9IFtcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJFeGFtcGxlIDRcIixcbiAgICAgIG5vdGU6IFwic29tZXRoaW5nIGVsc2VcIixcbiAgICB9KSxcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJFeGFtcGxlIDVcIixcbiAgICAgIGRhdGU6IFwiMTUuMDMuMjAxOFwiLFxuICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgZG9uZTogdHJ1ZSxcbiAgICB9KSxcbiAgXTtcblxuICBzd2l0Y2ggKG51bWJlcikge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBidW5kbGUxO1xuXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIGJ1bmRsZTI7XG5cbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gYnVuZGxlMztcbiAgfVxufVxuXG5leHBvcnQgeyBnZXRUYXNrc0J5TnVtYmVyIH07XG4iLCJpbXBvcnQgeyByZWZyZXNoUHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvamVjdHMvcmVuZGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcblxuZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdChhcnIpIHtcbiAgLy8gRmluZCBhY3RpdmUgcHJvamVjdCBhbmQgcmV0dXJuIGl0XG4gIGZvciAobGV0IHByb2plY3Qgb2YgYXJyKSB7XG4gICAgaWYgKHByb2plY3QuaXNBY3RpdmUpIHJldHVybiBwcm9qZWN0O1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tzRnJvbShwcm9qZWN0cykge1xuICAvLyBUYWtlIHRoZSBjb2xsY2V0aW9uIG9mIGFsbCBkZWxldGUgY3Jvc3MgYnV0dG9ucyBmcm9tIHRhc2tzIGJ5IGNsYXNzIG5hbWVcbiAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXRvZG8tYnRuXCIpO1xuICAvLyBMb29wIHRocm91Z2ggY29sbGVjdGlvbiBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggYnV0dG9uXG4gIGZvciAobGV0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG4gICAgZGVsZXRlQnRuUmVtb3ZlVGFzayhidXR0b24sIHByb2plY3RzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWxldGVCdG5SZW1vdmVUYXNrKGJ1dHRvbiwgcHJvamVjdHMpIHtcbiAgLy8gRnVuY3Rpb24gdG8gYXNzaWduIEV2ZW50IGxpc3RlbmVyIHRvIGJ1dHRvbnNcbiAgLy8gdG8gcmVtb3ZlIHBhcnRpY3VsYXIgdGFza3MgZnJvbSBwYWdlXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAvLyBnZXQgSWQgb2YgYSBidXR0b24gdG8gd2hpY2ggbGlzdGVuZXIgaXMgYXNzaWduZWRcbiAgICBsZXQgYnRuSWQgPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XG4gICAgLy8gZ2V0IG9ubHkgbnVtYmVyIGFmdGVyIHRoZSBoeXBoZW4gZnJvbSBJZFxuICAgIGxldCBudW1iZXIgPSBidG5JZC5zcGxpdChcIi1cIilbMV07XG4gICAgLy8gQmVmb3JlIHJlbW92aW5nIGFuIGl0ZW0gbWFrZSBzdXJlIHRvIGNsb3NlIGl0cyBkZXRhaWxzXG4gICAgY2xvc2VEZXRhaWxzT2ZEZWxldGVkVGFzayhudW1iZXIpO1xuICAgIG1ha2VEZXRhaWxzQ29uc2lzdGVudChudW1iZXIpO1xuICAgIC8vIFJlbW92ZSBpdGVtIGZyb20gdGhlIGFycmF5IG9mIHRhc2tzIGJ5IHRoYXQgbnVtYmVyXG4gICAgZ2V0QWN0aXZlUHJvamVjdChwcm9qZWN0cykudGFza3Muc3BsaWNlKG51bWJlciwgMSk7XG4gICAgLy8gUmVyZW5kZXIgcHJvamVjdHNcbiAgICByZWZyZXNoUHJvamVjdHMocHJvamVjdHMpO1xuICAgIC8vIEF2b2lkIGZpcmluZyBwYXJlbnQgZWxlbWVudCBsaXN0ZW5lciBhZnRlciBjbGlja2luZyBvbiB0aGUgYnV0dG9uXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlRGV0YWlsc09mRGVsZXRlZFRhc2sobnVtYmVyKSB7XG4gIC8vIEJlZm9yZSByZW1vdmluZyBhbiBpdGVtIG1ha2Ugc3VyZSBoaXMgZGV0YWlscyBhcmUgbm90IHNob3duXG4gIC8vIElmIHRoZXkgYXJlIHRoZW4gaGlkZSB0aGVtXG4gIGlmIChEZXRhaWxzVG9nZ2xlLmdldERldGFpbHNDb250YWluZXJJZE51bWJlcigpID09PSBudW1iZXIpXG4gICAgRGV0YWlsc1RvZ2dsZS5oaWRlRGV0YWlscygpO1xufVxuXG5mdW5jdGlvbiBtYWtlRGV0YWlsc0NvbnNpc3RlbnQobnVtYmVyKSB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gaXMgbmVlZGVkIGZvciBkZXRhaWxzIGNvbnRhaW5lciB0byBoYXZlIHRoZSBzYW1lIGlkIGFzIHRha3MgaGF2ZVxuICAvLyBGb3IgZS5nLiBpZiB5b3Ugb3BlbiB0aGUgZGV0YWlscyBvZiBhIHRhc2sgd2hpY2ggaGFzIGlkID0gNCAoaXRzIGRldGFpbHMgaWQgaXMgYWxzbyA9IDQpXG4gIC8vIGFuZCB0aGVuIGRlbGV0ZSB0YXNrIHdpdGggaWQgPSAyLCB0aGVuIGFsbCB0YXNrcyBhZnRlciAyIHdpbGwgaGF2ZSBpZCA9IGlkIC0gMSwgYnV0IGRldGFpbHMgc3RheXMgdGhlIHNhbWVcbiAgLy8gVGhhdCdzIHdoeSB3ZSBuZWVkIGEgZnVuY3Rpb24gdG8gZGVjcmVhc2UgZGV0YWlscyBpZCBieSBvbmUgZXZlcnkgdGltZSB3ZSBkZWxldGUgYSB0YXNrIHdpdGggaWQgPCBpZCBvZiBkZWxldGVkIHRhc2tcbiAgaWYgKERldGFpbHNUb2dnbGUuZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCkgPiBudW1iZXIpIHtcbiAgICBkZWNyZWFzZURldGFpbHNJZCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlY3JlYXNlRGV0YWlsc0lkKCkge1xuICAvLyBnZXQgaWQgb2YgY3VycmVudCBkZXRhaWxzXG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpLmNoaWxkcmVuWzBdO1xuICBsZXQgZGV0YWlsc0lkTnVtYmVyID0gZGV0YWlscy5pZC5zcGxpdChcIi1cIilbMl07XG4gIC8vIE5vdyBkZWNyZWFzZSBpdCBieSBvbmVcbiAgRGV0YWlsc1RvZ2dsZS5zZXREZXRhaWxzSWRUbyhkZXRhaWxzSWROdW1iZXIgLSAxKTtcbn1cbmV4cG9ydCB7IGRlbGV0ZVRhc2tzRnJvbSB9O1xuIiwiaW1wb3J0ICogYXMgRGV0YWlsc1RvZ2dsZSBmcm9tIFwiLi9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5pbXBvcnQgeyBhY3RpdmF0ZVN0YXIgfSBmcm9tIFwiLi4vc3R5bGUvcHJpb3JpdHkuanNcIjtcbmltcG9ydCB7IHJlZnJlc2hPbmx5VGFza3NGcm9tIH0gZnJvbSBcIi4uL3Byb2plY3RzL3JlbmRlci5qc1wiO1xuXG5mdW5jdGlvbiBwdXRUYXNrSW5mb1RvSW5wdXQodGFzaykge1xuICAvLyBGdW5jdGlvbiB0byBwdXQgaW5mbyBmcm9tIHRhc2tzIGluIGlucHV0cyB3aGVuIGRldGFpbHMgYXJlIHNob3duXG4gIHNldE5hbWUodGFzay50aXRsZSk7XG4gIHNldERhdGUodGFzay5kYXRlKTtcbiAgc2V0UGlvcml0eSh0YXNrLnByaW9yaXR5KTtcbiAgc2V0Tm90ZSh0YXNrLm5vdGUpO1xufVxuXG5mdW5jdGlvbiBnZXRBY3RpdmVQcm9qZWN0KGFycikge1xuICAvLyBGaW5kIGFjdGl2ZSBwcm9qZWN0IGFuZCByZXR1cm4gaXRcbiAgZm9yIChsZXQgcHJvamVjdCBvZiBhcnIpIHtcbiAgICBpZiAocHJvamVjdC5pc0FjdGl2ZSkgcmV0dXJuIHByb2plY3Q7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VGFzayhwcm9qZWN0cykge1xuICAvLyBnZXQgbnVtYmVyIG9mIHRhc2sgZnJvbSBkZXRhaWxzXG4gIGxldCB0YXNrTnVtYmVyID0gRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKTtcbiAgLy8gZ2V0IHRhc2sgd2l0aCB0aGUgc2FtZSBudW1iZXIgYXMgZGV0YWlscyB3aW5kb3dcbiAgbGV0IHRhc2sgPSBnZXRBY3RpdmVQcm9qZWN0KHByb2plY3RzKS50YXNrc1t0YXNrTnVtYmVyXTtcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRhc2tPbklucHV0KHByb2plY3RzKSB7XG4gIC8vIENoYW5nZSBhIHRhc2sgd2l0aCBpbnB1dCBmcm9tIERldGFpbHMgV2luZG93XG4gIGNoYW5nZVRpdGxlT25JbnB1dChwcm9qZWN0cyk7XG4gIGNoYW5nZURhdGVPbklucHV0KHByb2plY3RzKTtcbiAgY2hhbmdlUHJpb3JpdHlPbklucHV0KHByb2plY3RzKTtcbiAgY2hhbmdlTm90ZU9uSW5wdXQocHJvamVjdHMpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUaXRsZU9uSW5wdXQoYXJyKSB7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1uYW1lLWNoYW5nZXJcIik7XG5cbiAgaW5wdXQub25pbnB1dCA9ICgpID0+IGNoYW5nZVRpdGxlKGFycik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRpdGxlKGFycikge1xuICBsZXQgdGFzayA9IGdldFRhc2soYXJyKTtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW5hbWUtY2hhbmdlclwiKTtcbiAgLy8gVGFzayB0aXRsZSBpcyBub3cgdXNlciBpbnB1dCB2YWx1ZVxuICB0YXNrLnRpdGxlID0gaW5wdXQudmFsdWU7XG4gIC8vIHJlcmVuZGVyIHRvIHNlZSB0aGUgY2hhbmdlc1xuICByZWZyZXNoT25seVRhc2tzRnJvbShhcnIpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VEYXRlT25JbnB1dChhcnIpIHtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpO1xuXG4gIGlucHV0Lm9uaW5wdXQgPSAoKSA9PiBjaGFuZ2VEYXRlKGFycik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZURhdGUoYXJyKSB7XG4gIGxldCB0YXNrID0gZ2V0VGFzayhhcnIpO1xuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIik7XG4gIC8vIFRhc2sgZGF0ZSBpcyBub3cgZm9ybWF0dGVkIGRhdGUgaW5wdXQgdmFsdWVcbiAgdGFzay5kYXRlID0gZm9ybWF0RGF0ZTIoaW5wdXQudmFsdWUpO1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVmcmVzaE9ubHlUYXNrc0Zyb20oYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUHJpb3JpdHlPbklucHV0KGFycikge1xuICBsZXQgc3RhcnMgPSBbXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTFcIiksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTJcIiksXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFyLTNcIiksXG4gIF07XG5cbiAgZm9yIChsZXQgc3RhciBvZiBzdGFycykge1xuICAgIHN0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNoYW5nZVByaW9yaXR5KGFycikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVByaW9yaXR5KGFycikge1xuICBsZXQgdGFzayA9IGdldFRhc2soYXJyKTtcbiAgbGV0IGlucHV0ID0gZ2V0UHJpb3JpdHlJbnB1dCgpO1xuICAvLyBUYXNrIGRhdGUgaXMgbm93IGZvcm1hdHRlZCBkYXRlIGlucHV0IHZhbHVlXG4gIHRhc2sucHJpb3JpdHkgPSBpbnB1dDtcbiAgLy8gcmVyZW5kZXIgdG8gc2VlIHRoZSBjaGFuZ2VzXG4gIHJlZnJlc2hPbmx5VGFza3NGcm9tKGFycik7XG59XG5cbmZ1bmN0aW9uIGdldFByaW9yaXR5SW5wdXQoKSB7XG4gIGxldCBzdGFyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3Rhci0xXCIpO1xuXG4gIGlmIChzdGFyMS5jbGFzc0xpc3QuY29udGFpbnMoXCJzZWxlY3RlZC0xXCIpKSB7XG4gICAgcmV0dXJuIFwibWVkaXVtXCI7XG4gIH0gZWxzZSBpZiAoc3RhcjEuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWQtMlwiKSkge1xuICAgIHJldHVybiBcImhpZ2hcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJsb3dcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VOb3RlT25JbnB1dChhcnIpIHtcbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3RlLWNoYW5nZXJcIik7XG5cbiAgaW5wdXQub25pbnB1dCA9ICgpID0+IGNoYW5nZU5vdGUoYXJyKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlTm90ZShhcnIpIHtcbiAgbGV0IHRhc2sgPSBnZXRUYXNrKGFycik7XG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibm90ZS1jaGFuZ2VyXCIpO1xuICAvLyBUYXNrIE5vdGUgaXMgbm93IGZvcm1hdHRlZCBOb3RlIGlucHV0IHZhbHVlXG4gIHRhc2subm90ZSA9IGlucHV0LnZhbHVlO1xuICAvLyByZXJlbmRlciB0byBzZWUgdGhlIGNoYW5nZXNcbiAgcmVmcmVzaE9ubHlUYXNrc0Zyb20oYXJyKTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIFNldCBpbnB1dFxuZnVuY3Rpb24gc2V0TmFtZShuYW1lKSB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1uYW1lLWNoYW5nZXJcIikudmFsdWUgPSBuYW1lO1xufVxuXG5mdW5jdGlvbiBzZXREYXRlKGRhdGUpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlID0gZm9ybWF0RGF0ZShkYXRlKTtcbiAgZm9ybWF0RGF0ZShkYXRlKTtcbn1cblxuZnVuY3Rpb24gc2V0UGlvcml0eShsZXZlbCkge1xuICBpZiAobGV2ZWwgPT09IFwiaGlnaFwiKSB7XG4gICAgYWN0aXZhdGVTdGFyKDMpO1xuICB9IGVsc2UgaWYgKGxldmVsID09PSBcIm1lZGl1bVwiKSB7XG4gICAgYWN0aXZhdGVTdGFyKDIpO1xuICB9IGVsc2UgaWYgKGxldmVsID09PSBcImxvd1wiKSB7XG4gICAgYWN0aXZhdGVTdGFyKDEpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldE5vdGUobm90ZSkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGUtY2hhbmdlclwiKS52YWx1ZSA9IG5vdGU7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAvLyBJZiBkYXRlIGlzIHVuZGVmaW5lZCB5ZXQsIHRoZW4gcmV0dXJuIG5vdGhpbmcgXCJcIlxuICBpZiAoIWRhdGUpIHJldHVybiBcIlwiO1xuICAvLyBEYXRlIGZvcm1hdHRpbmc6IGZyb20gXCJkZC5tbS55eXl5XCIgdG8gXCJ5eXl5LU1NLWRkXCJcbiAgbGV0IGRheSA9IGRhdGUuc3BsaXQoXCIuXCIpWzBdO1xuICBsZXQgbW9udGggPSBkYXRlLnNwbGl0KFwiLlwiKVsxXTtcbiAgbGV0IHllYXIgPSBkYXRlLnNwbGl0KFwiLlwiKVsyXTtcblxuICBsZXQgZm9ybWF0dGVkID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgcmV0dXJuIGZvcm1hdHRlZDtcbn1cblxuZnVuY3Rpb24gZm9ybWF0RGF0ZTIoZGF0ZSkge1xuICAvLyBJZiBkYXRlIGlzIHVuZGVmaW5lZCB5ZXQsIHRoZW4gcmV0dXJuIG5vdGhpbmcgXCJcIlxuICBpZiAoIWRhdGUpIHJldHVybiBcIlwiO1xuICAvLyBEYXRlIGZvcm1hdHRpbmc6IGZyb20gIFwieXl5eS1NTS1kZFwiIHRvIFwiZGQubW0ueXl5eVwiXG4gIGxldCBkYXkgPSBkYXRlLnNwbGl0KFwiLVwiKVsyXTtcbiAgbGV0IG1vbnRoID0gZGF0ZS5zcGxpdChcIi1cIilbMV07XG4gIGxldCB5ZWFyID0gZGF0ZS5zcGxpdChcIi1cIilbMF07XG5cbiAgbGV0IGZvcm1hdHRlZCA9IGAke2RheX0uJHttb250aH0uJHt5ZWFyfWA7XG4gIHJldHVybiBmb3JtYXR0ZWQ7XG59XG5cbmV4cG9ydCB7IHB1dFRhc2tJbmZvVG9JbnB1dCwgY2hhbmdlVGFza09uSW5wdXQsIGdldEFjdGl2ZVByb2plY3QgfTtcbiIsImltcG9ydCB7IHNjcmVlbkxlc3NUaGVuMTAyNCB9IGZyb20gXCIuLi9zdHlsZS9yZXNpemUuanNcIjtcbmltcG9ydCAqIGFzIERldGFpbHNJbnB1dCBmcm9tIFwiLi9kZXRhaWxzSW5wdXQuanNcIjtcblxuZnVuY3Rpb24gdGFza3NUb2dnbGVEZXRhaWxzKGFycikge1xuICAvLyBNYWtlIHRvZG8gdGFza3Mgc2hvdyBkZXRhaWxzIG9uIGNsaWNrIChmcm9tIHJpZ2h0IHNpZGUpXG4gIHRvZG9MaXN0U2hvd0RldGFpbHMoYXJyKTtcbiAgLy8gTWFrZSBidXR0b24gaW4gZGV0YWlscyBpbnRlcmFjdDogaGlkZSBkZXRhaWxzXG4gIEFycm93SGlkZURldGFpbHMoKTtcbn1cblxuZnVuY3Rpb24gdG9kb0xpc3RTaG93RGV0YWlscyhhcnIpIHtcbiAgLy8gTWFrZSB0b2RvIGxpc3RzIHNob3cgZGV0YWlscyBvbmNsaWNrXG4gIGxldCB0YXNrcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0b2RvXCIpO1xuXG4gIGZvciAobGV0IHRhc2sgb2YgdGFza3MpIHtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8gZ2V0IElkIG9mIGEgdGFzayB0byB3aGljaCBsaXN0ZW5lciBpcyBhc3NpZ25lZFxuICAgICAgbGV0IHRhc2tJZCA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAgIC8vIGdldCBvbmx5IG51bWJlciBmcm9tIElkIGFmdGVyIHRoZSBoeXBoZW5cbiAgICAgIGxldCBudW1iZXIgPSB0YXNrSWQuc3BsaXQoXCItXCIpWzFdO1xuICAgICAgLy8gUGFzcyBhIG51bWJlciBvZiB0aGUgY2xpY2tlZCB0YXNrIHRvIGRldGFpbHNcbiAgICAgIHRvZ2dsZURldGFpbHMobnVtYmVyKTtcbiAgICAgIC8vIFB1dCBpbmZvIGZyb20gdGFza3MgaW4gaW5wdXRzIHdoZW4gZGV0YWlscyBhcmUgc2hvd25cbiAgICAgIERldGFpbHNJbnB1dC5wdXRUYXNrSW5mb1RvSW5wdXQoYXJyW251bWJlcl0pO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIEFycm93SGlkZURldGFpbHMoKSB7XG4gIC8vIE1ha2UgQXJyb3cgaGlkZSBEZXRhaWxzIG9uY2xpY2tcbiAgbGV0IGFycm93QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZS1kZXRhaWxzLWJ0blwiKTtcbiAgYXJyb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhpZGVEZXRhaWxzKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRGV0YWlscyhudW1iZXIpIHtcbiAgbGV0IGlkTnVtYmVyID0gZ2V0RGV0YWlsc0NvbnRhaW5lcklkTnVtYmVyKCk7XG5cbiAgLy8gaWYgZGV0YWlscyBhcmUgdmlzaWJsZSBvbiB0aGUgcGFnZSBBTkRcbiAgLy8gaWYgdXNlciBjbGlja3Mgb24gdGhlIHNhbWUgdGFzayAyeCB0aGFuIGhpZGUgZGV0YWlsc1xuICBpZiAoZGV0YWlsc0FyZVNob3duKCkgJiYgaWROdW1iZXIgPT09IG51bWJlcikge1xuICAgIGhpZGVEZXRhaWxzKCk7XG4gIH0gZWxzZSB7XG4gICAgc2hvd0RldGFpbHMobnVtYmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZXRhaWxzQXJlU2hvd24oKSB7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICAvLyBBcmUgZGV0YWlscyBzaG93biBvbiB0aGUgcGFnZT8gUmV0dXJuIGJvb2xlYW46XG4gIHJldHVybiBnZXRDb21wdXRlZERpc3BsYXkoZGV0YWlscykgIT09IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBnZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKSB7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICAvLyBUYWtlIGlkIG9mIHRoZSBkZXRhaWxzIGNoaWxkXG4gIGxldCBkZXRhaWxzQ29udGFpbmVySWQgPSBkZXRhaWxzLmNoaWxkcmVuWzBdLmlkO1xuICAvLyBUYWtlIGEgbnVtYmVyIGZyb20gdGhhdCBpZCBhbmQgcmV0dXJuIGl0XG4gIGxldCBpZE51bWJlciA9IGRldGFpbHNDb250YWluZXJJZC5zcGxpdChcIi1cIilbMl07XG4gIHJldHVybiBpZE51bWJlcjtcbn1cblxuZnVuY3Rpb24gc2V0RGV0YWlsc0lkVG8obnVtYmVyKSB7XG4gIC8vIEZpcnN0IG1ha2UgZGV0YWlscyBJRCB0aGUgc2FtZSBhcyBpbml0aWFsIElEICh3aXRoIG5vIG51bWJlcnMpXG4gIC8vIEFub3RoZXIgd29yZHMgcmVtb3ZlIGFsbCBleGlzdGluZyBudW1iZXJzIGZyb20gaXRcbiAgbWFrZURldGFpbHNEZWZhdWx0KCk7XG4gIC8vIFRoZW4gcGFzcyBhIG51bWJlciB0byBpdFxuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgZGV0YWlscy5jaGlsZHJlblswXS5pZCArPSBgLSR7bnVtYmVyfWA7XG59XG5cbmZ1bmN0aW9uIGhpZGVEZXRhaWxzKCkge1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cbiAgaGlkZShkZXRhaWxzKTtcbiAgLy8gV2hlbiBkZXRhaWxzIGFyZSBoaWRkZW4gdGhlIG1haW4gY29sdW1uIHdpbGwgYmUgYnJvYWRlclxuICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvNFwiO1xuICAvLyBXaGVuIGRldGFpbHMgYXJlIGhpZGRlbiB0aGVpciBkZXRhaWxzLWNvbnRhaW5lci1JRCB3aWxsIGJlIGRlZmF1bHQgd2l0aCBubyBudW1iZXJcbiAgbWFrZURldGFpbHNEZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIHNob3dEZXRhaWxzKG51bWJlcikge1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cbiAgc2hvd0FzRmxleChkZXRhaWxzKTtcbiAgLy8gQWxzbyBzZXQgbmV3IElEIG51bWJlciB0byBkZXRhaWxzIGNvbnRhaW5lciAob25seSBpZiBpdCBkb2Vzbid0IGhhdmUgSUQgYWxyZWFkeSlcbiAgc2V0RGV0YWlsc0lkVG8obnVtYmVyKTtcbiAgLy8gSWYgc2NyZWVuIGlzIGJpZ2dlciB0aGFuIDEwMjQgdGhlbiBtYWtlIFwibWFpblwiIHRoZSBtaWRkbGUgY29sdW1uIG9mIDMgY29sdW1uc1xuICBpZiAoIXNjcmVlbkxlc3NUaGVuMTAyNCgpKSBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvM1wiO1xufVxuXG5mdW5jdGlvbiBtYWtlRGV0YWlsc0RlZmF1bHQoKSB7XG4gIC8vIENoYW5nZSBJRCBvZiBjaGlsZCBvZiB0aGUgZGV0YWlscyB0byBkZWZhdWx0IFwiZGV0YWlscy1jb250YWluZXJcIlxuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgZGV0YWlscy5jaGlsZHJlblswXS5pZCA9IFwiZGV0YWlscy1jb250YWluZXJcIjtcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcHV0ZWREaXNwbGF5KGVsZW1lbnQpIHtcbiAgbGV0IGNvbXB1dGVkRGlzcGxheSA9IHdpbmRvd1xuICAgIC5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG4gICAgLmdldFByb3BlcnR5VmFsdWUoXCJkaXNwbGF5XCIpO1xuICByZXR1cm4gY29tcHV0ZWREaXNwbGF5O1xufVxuXG5mdW5jdGlvbiBzaG93QXNGbGV4KGVsZW1lbnQpIHtcbiAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59XG5cbmZ1bmN0aW9uIGhpZGUoZWxlbWVudCkge1xuICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IHtcbiAgdGFza3NUb2dnbGVEZXRhaWxzLFxuICBnZXRDb21wdXRlZERpc3BsYXksXG4gIGdldERldGFpbHNDb250YWluZXJJZE51bWJlcixcbiAgaGlkZURldGFpbHMsXG4gIGRldGFpbHNBcmVTaG93bixcbiAgc2V0RGV0YWlsc0lkVG8sXG59O1xuIiwiaW1wb3J0ICogYXMgRGV0YWlsc1RvZ2dsZSBmcm9tIFwiLi9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5pbXBvcnQgeyByZWZyZXNoT25seVRhc2tzRnJvbSB9IGZyb20gXCIuLi9wcm9qZWN0cy9yZW5kZXIuanNcIjtcbmltcG9ydCB7IGdldEFjdGl2ZVByb2plY3QgfSBmcm9tIFwiLi9kZXRhaWxzSW5wdXQuanNcIjtcblxuZnVuY3Rpb24gZG9uZUJ0bnMoYXJyKSB7XG4gIC8vIFRha2UgdGhlIGNvbGxlY3Rpb24gb2YgYWxsIGNoZWNrYm94ZXMgZnJvbSB0YXNrcyBieSBjbGFzcyBuYW1lXG4gIGxldCBjaGVja2JveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG8taWNvbi1jb250YWluZXJcIik7XG4gIC8vIExvb3AgdGhyb3VnaCBjb2xsZWN0aW9uIGFuZCBhZGQgZXZlbnQgbGlzdGVuZXIgdG8gZWFjaCBidXR0b25cbiAgZm9yIChsZXQgY2hlY2tib3ggb2YgY2hlY2tib3hlcykge1xuICAgIGRvbmVCdG5Db21wbGV0ZVRhc2soY2hlY2tib3gsIGFycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZG9uZUJ0bkNvbXBsZXRlVGFzayhjaGVja2JveCwgYXJyKSB7XG4gIC8vIEZ1bmN0aW9uIHRvIGFzc2lnbiBFdmVudCBsaXN0ZW5lciB0byBjaGVja2JveGVzXG4gIC8vIHRvIGNvbXBsZXRlIHBhcnRpY3VsYXIgdGFza3MgZnJvbSBwYWdlXG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIGdldCBJZCBvZiBhIGNoZWNrYm94IHRvIHdoaWNoIGxpc3RlbmVyIGlzIGFzc2lnbmVkXG4gICAgbGV0IGNib3hJZCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQ7XG4gICAgLy8gZ2V0IG9ubHkgbnVtYmVyIGFmdGVyIHRoZSBoeXBoZW4gZnJvbSBJZFxuICAgIGxldCBudW1iZXIgPSBjYm94SWQuc3BsaXQoXCItXCIpWzFdO1xuICAgIC8vIEJlZm9yZSBjb21wbGV0aW5nIGFuIGl0ZW0gbWFrZSBzdXJlIHRvIGNsb3NlIGl0cyBkZXRhaWxzXG4gICAgY2xvc2VEZXRhaWxzT2ZDb21wbGV0ZWRUYXNrKG51bWJlcik7XG4gICAgLy8gSWYgdGFzayBpcyBkb25lIHRoZW4gdW5kb25lIGl0LCBlbHNlIGNvbXBsZXRlIGl0XG4gICAgZ2V0QWN0aXZlUHJvamVjdChhcnIpLnRhc2tzW251bWJlcl0uZG9uZSA9ICFnZXRBY3RpdmVQcm9qZWN0KGFycikudGFza3NbXG4gICAgICBudW1iZXJcbiAgICBdLmRvbmU7XG4gICAgLy8gUmVyZW5kZXIgYXJyYXlcbiAgICByZWZyZXNoT25seVRhc2tzRnJvbShhcnIpO1xuICAgIC8vIEF2b2lkIGZpcmluZyBwYXJlbnQgZWxlbWVudCBsaXN0ZW5lciBhZnRlciBjbGlja2luZyBvbiB0aGUgY2hlY2tib3hcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xvc2VEZXRhaWxzT2ZDb21wbGV0ZWRUYXNrKG51bWJlcikge1xuICAvLyBCZWZvcmUgcmVtb3ZpbmcgYW4gaXRlbSBtYWtlIHN1cmUgaGlzIGRldGFpbHMgYXJlIG5vdCBzaG93blxuICAvLyBJZiB0aGV5IGFyZSB0aGVuIGhpZGUgdGhlbVxuICBpZiAoRGV0YWlsc1RvZ2dsZS5nZXREZXRhaWxzQ29udGFpbmVySWROdW1iZXIoKSA9PT0gbnVtYmVyKVxuICAgIERldGFpbHNUb2dnbGUuaGlkZURldGFpbHMoKTtcbn1cblxuZXhwb3J0IHsgZG9uZUJ0bnMgfTtcbiIsImNvbnN0IHRhc2tGYWN0b3J5ID0gZnVuY3Rpb24gKHtcbiAgdGl0bGUgPSBcIlwiLFxuICBmcm9tID0gXCJcIixcbiAgZGF0ZSA9IFwiXCIsXG4gIHByaW9yaXR5ID0gXCJsb3dcIixcbiAgbm90ZSA9IFwiXCIsXG4gIGRvbmUgPSBmYWxzZSxcbn0pIHtcbiAgcmV0dXJuIHsgdGl0bGUsIGZyb20sIGRhdGUsIHByaW9yaXR5LCBub3RlLCBkb25lIH07XG59O1xuXG5leHBvcnQgeyB0YXNrRmFjdG9yeSB9O1xuIiwiaW1wb3J0IENhbGVuZGFyIGZyb20gXCIuLi8uLi9JQ09OUy9jYWxlbmRhci5zdmdcIjtcbmltcG9ydCBOb3RlIGZyb20gXCIuLi8uLi9JQ09OUy9lZGl0LnN2Z1wiO1xuaW1wb3J0ICogYXMgRGV0YWlsc1RvZ2dsZSBmcm9tIFwiLi9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckFsbFRhc2tzRnJvbShhcnIpIHtcbiAgLy8gQ2xlYXIgYWxsIHByZXZpb3VzbHkgcmVuZGVyZWQgZWxlbWVudHMgZnJvbSB0aGUgcGFnZVxuICBjbGVhckNvbnRlbnRPZihcInRvZG9zXCIpO1xuICAvL1JlbmRlciBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IHRvIHRoZSBwYWdlXG4gIGZvciAobGV0IFtpbmRleCwgaXRlbV0gb2YgYXJyLmVudHJpZXMoKSkge1xuICAgIHJlbmRlclRhc2soaW5kZXgsIGl0ZW0pO1xuICB9XG4gIC8vIE1ha2UgZWFjaCB0YXNrIHNob3cgaXRzIGRldGFpbHMgb24gY2xpY2tcbiAgRGV0YWlsc1RvZ2dsZS50YXNrc1RvZ2dsZURldGFpbHMoYXJyKTtcbiAgLy8gUmVhY2ggbGFiZWxzIGFuZCBtYWtlIHRoZW0gY2hhbmdlIHRoZW1zZWx2ZXMgd2hlbiB0aGUgdGFzayBpcyBkb25lXG4gIHRvZ2dsZURvbmVJY29ucygpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnRPZihpZCkge1xuICAvLyBSZW1vdmUgYW55IGNoaWxkIG9mIHRoZSBlbGVtZW50IHdpdGggaWRcbiAgbGV0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG5cbiAgd2hpbGUgKGNvbnRlbnRDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnRDb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUYXNrKGksIHRhc2spIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2Rvc1wiKS5hcHBlbmQoY3JlYXRlVGFzayhpLCB0YXNrKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2soaSwgdGFzaykge1xuICAvLyBjcmVhdGUgbGlzdCBlbGVtZW50IHdpdGggYSBjbGFzcyAndG9kbydcbiAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG9cIik7XG4gIGxpLnNldEF0dHJpYnV0ZShcImlkXCIsIGB0YXNrLSR7aX1gKTtcbiAgLy8gQXBwZW5kIGxhYmVsLCBpbnB1dCwgZGl2IGFuZCBidXR0b24gdG8gaXRcbiAgbGkuYXBwZW5kKGNyZWF0ZUxhYmVsKGkpKTtcbiAgbGkuYXBwZW5kKGNyZWF0ZUlucHV0KGkpKTtcbiAgbGkuYXBwZW5kKFxuICAgIGNyZWF0ZUNvbnRlbnQoXG4gICAgICB0YXNrLnRpdGxlLFxuICAgICAgdGFzay5mcm9tLFxuICAgICAgdGFzay5kYXRlLFxuICAgICAgdGFzay5wcmlvcml0eSxcbiAgICAgIHRhc2subm90ZSxcbiAgICAgIHRhc2suZG9uZVxuICAgIClcbiAgKTtcbiAgbGkuYXBwZW5kKGNyZWF0ZURlbGV0ZUJ0bihpKSk7XG5cbiAgcmV0dXJuIGxpO1xufVxuXG4vLyBMQUJFTFxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChpKSB7XG4gIC8vIHJldHVybnMgbGFiZWwgZm9yIFwidG9kb2NoZWNrYm94XCIgKyBpXG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGxhYmVsLSR7aX1gKTtcbiAgbGFiZWwuaHRtbEZvciA9IGB0b2RvY2hlY2tib3gke2l9YDtcbiAgbGFiZWwuYXBwZW5kKGNyZWF0ZURvbmVJY29uKCkpO1xuICByZXR1cm4gbGFiZWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURvbmVJY29uKCkge1xuICAvLyBjcmVhdGUgaWNvbiBjb250YWluZXJcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taWNvbi1jb250YWluZXJcIik7XG4gIC8vIGNyZWF0ZSBpY29uXG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlvbi1pY29uXCIpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjaGVja21hcmstb3V0bGluZVwiKTtcbiAgLy8gYXBwZW5kIGljb24gdG8gY29udGFpbmVyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy8gSU5QVVRcblxuZnVuY3Rpb24gY3JlYXRlSW5wdXQoaSkge1xuICAvLyBDcmVhdGUgaW5wdXQgY2hlY2tib3ggZWxlbWVudCBhZnRlciB0aGUgbGFiZWxcbiAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAvLyBBZGQgYXR0cmlidXRlc1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGB0b2RvLWNoZWNrYm94YCk7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIGB0b2RvY2hlY2tib3gtJHtpfWApO1xuICByZXR1cm4gY2hlY2tib3g7XG59XG5cbi8vIENPTlRFTlQgPSB0YXNrIHRpdGxlIGFuZCBkZXRhaWxzXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQodGl0bGUsIGZyb20sIGRhdGUsIHByaW9yaXR5LCBub3RlLCBkb25lKSB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tdGV4dFwiKTtcbiAgLy8gQXBwZW5kIHRpdGxlIGFuZCBkZXRhaWxzIHRvIGNvbnRlbnRcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZSh0aXRsZSkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZURldGFpbHMoZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUpKTtcbiAgaWYgKGRvbmUpIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRvbmVcIik7XG4gIHJldHVybiBjb250ZW50O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUaXRsZShzdHIpIHtcbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLXRpdGxlXCIpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IHN0cjtcbiAgcmV0dXJuIHRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXRhaWxzKGZyb20sIGRhdGUsIHByaW9yaXR5LCBub3RlKSB7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGV0YWlscy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRldGFpbHNcIik7XG4gIGRldGFpbHMuYXBwZW5kQ2hpbGQoY3JlYXRlRnJvbShmcm9tKSk7XG4gIGRldGFpbHMuYXBwZW5kQ2hpbGQoY3JlYXRlRHVlKGRhdGUpKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVQcmlvcml0eShwcmlvcml0eSkpO1xuICBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZU5vdGUobm90ZSkpO1xuXG4gIHJldHVybiBkZXRhaWxzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcm9tKGZyb20pIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZyb20tcHJvamVjdFwiKTtcbiAgaWYgKGZyb20pIHNwYW4udGV4dENvbnRlbnQgPSBgRnJvbSAke2Zyb219YDtcbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUR1ZShkYXRlKSB7XG4gIGxldCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICBkdWUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkdWUtZGF0ZVwiKTtcbiAgaWYgKGRhdGUpIHtcbiAgICAvLyBJZiB0YXNrIGhhcyBkYXRlIGJlZm9yZSB0b2RheSwgaXQgd2lsbCBiZSByZWQgY29sb3JlZFxuICAgIGlmIChkYXRlT3ZlcmR1ZShkYXRlKSkgZHVlLmNsYXNzTGlzdC5hZGQoXCJvdmVyZHVlLWRhdGVcIik7XG5cbiAgICBkdWUuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FsZW5kYXJJbWFnZSgpKTtcbiAgICBkdWUuYXBwZW5kQ2hpbGQoY3JlYXRlU3BhbkZvckRhdGUoZGF0ZSkpO1xuICB9XG4gIHJldHVybiBkdWU7XG59XG5cbmZ1bmN0aW9uIGRhdGVPdmVyZHVlKGRhdGUpIHtcbiAgLy8gRnVuY3Rpb24gdG8gY29tcGFyZSBkYXRlczogdG9kYXkgd2l0aCBhIGRhdGVcbiAgLy8gSWYgZGF0ZSBpcyBlYXJsaWVyIHRoYW4gdG9kYXkgdGhlbiByZXR1cm4gdHJ1ZVxuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gIGxldCBkYXkgPSBkYXRlLnNwbGl0KFwiLlwiKVswXTtcbiAgbGV0IG1vbnRoID0gZGF0ZS5zcGxpdChcIi5cIilbMV07XG4gIGxldCB5ZWFyID0gZGF0ZS5zcGxpdChcIi5cIilbMl07XG5cbiAgbGV0IHRhc2tEYXRlID0gbmV3IERhdGUoYCR7eWVhcn0tJHttb250aH0tJHtkYXl9IDA6MDA6MDBgKTtcblxuICByZXR1cm4gdGFza0RhdGUgPCB0b2RheSA/IHRydWUgOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FsZW5kYXJJbWFnZSgpIHtcbiAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgQ2FsZW5kYXIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiQ2FsZW5kYXJcIik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEycHhcIik7XG5cbiAgcmV0dXJuIGltZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3BhbkZvckRhdGUoZGF0ZSkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gYER1ZSAke2RhdGV9YDtcbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByaW9yaXR5KGxldmVsKSB7XG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgJHtsZXZlbH0tcHJpb3JpdHlgKTtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoY3JlYXRlU3BhbkZvclByaW9yaXR5KGxldmVsKSk7XG4gIHJldHVybiBwcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3BhbkZvclByaW9yaXR5KGxldmVsKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGlmIChsZXZlbCAhPT0gXCJsb3dcIilcbiAgICBzcGFuLnRleHRDb250ZW50ID0gYCR7Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKGxldmVsKX0gcHJpb3JpdHlgO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cikge1xuICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOb3RlKG5vdGUpIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5vdGUtcHJlc2VuY2VcIik7XG5cbiAgaWYgKG5vdGUpIHtcbiAgICAvLyBjcmVhdGUgYW5kIEFwcGVuZCBOb3RlIEljb25cbiAgICBsZXQgbm90ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIG5vdGVJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBOb3RlKTtcbiAgICBub3RlSWNvbi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJQZW5cIik7XG4gICAgbm90ZUljb24uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMnB4XCIpO1xuXG4gICAgLy8gY3JlYXRlIGFuZCBhcHBlbmQgdGV4dFxuICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IFwiTm90ZVwiO1xuXG4gICAgc3Bhbi5hcHBlbmRDaGlsZChub3RlSWNvbik7XG4gICAgc3Bhbi5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgfVxuICByZXR1cm4gc3Bhbjtcbn1cblxuLy8gREVMRVRFIEJVVFRPTlxuZnVuY3Rpb24gY3JlYXRlRGVsZXRlQnRuKGkpIHtcbiAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO1xuICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZWxldGUtdG9kby1idG5cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgZGVsZXRlYnRuLSR7aX1gKTtcblxuICAvLyBjcmVhdGUgYW4gaWNvbiBhbmQgYXBwZW5kIGl0IHRvIGJ1dHRvblxuICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpb24taWNvblwiKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY2xvc2UtY2lyY2xlXCIpO1xuXG4gIGJ0bi5hcHBlbmRDaGlsZChpY29uKTtcblxuICByZXR1cm4gYnRuO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVEb25lSWNvbnMoKSB7XG4gIC8vIEdldCBjb2xsZWN0aW9uIG9mIGFsbCB0YXNrcyB3aWNoIGFyZSBjb21wbGV0ZWRcbiAgbGV0IGRvbmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRvbmVcIik7XG4gIC8vIEZvciBlYWNoIGNvbXBsZXRlZCB0YXNrIHRha2UgbGFiZWwgYW5kIHRvZ2dsZSBhIGNsYXNzIFwiY29tcGxldGVkXCIgb24gaXRcbiAgZm9yIChsZXQgdGFzayBvZiBkb25lcykge1xuICAgIGxldCBudW1iZXIgPSB0YXNrLnBhcmVudEVsZW1lbnQuaWQuc3BsaXQoXCItXCIpWzFdO1xuICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBsYWJlbC0ke251bWJlcn1gKTtcbiAgICBsZXQgaWNvbkNvbnRhaW5lciA9IGxhYmVsLmZpcnN0Q2hpbGQ7XG5cbiAgICBpY29uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWRcIik7XG4gIH1cbn1cblxuZXhwb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tLCBjbGVhckNvbnRlbnRPZiB9O1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=