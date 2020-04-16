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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n@keyframes rotation {\n  0% {\n    transform: rotate(0); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes appearFromRightProject {\n  0% {\n    left: 30px;\n    opacity: 0; }\n  100% {\n    left: 0px;\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  user-select: none; }\n\nbody,\nhtml {\n  height: 100%;\n  margin: 0; }\n\nbody {\n  font-family: \"Sen\", sans-serif;\n  line-height: 1.25;\n  background: #e9e9e9; }\n\n#content {\n  display: grid;\n  height: 100%;\n  grid-template-rows: 60px auto;\n  grid-template-columns: 300px auto 330px;\n  grid-template-areas: \"header header header\" \"projects main todo-misc\"; }\n  #content.broad {\n    grid-template-columns: 68px auto 330px; }\n\n/* --- TOP of the PAGE : HEADER --- */\nheader {\n  grid-area: header;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  justify-content: center;\n  background: #106877;\n  color: #f4f4f4;\n  font-size: 1.9em;\n  font-weight: 900;\n  padding: 0;\n  width: 100%;\n  font-family: \"Permanent Marker\", cursive;\n  letter-spacing: 5px; }\n  header #menu-icon {\n    margin-right: auto;\n    margin-left: 0;\n    font-size: 48px;\n    cursor: pointer;\n    padding: 10px; }\n    header #menu-icon:hover {\n      background: #0b505c; }\n  header #header-title {\n    margin-right: auto; }\n  header #socials {\n    margin-right: 10px;\n    font-size: 48px;\n    cursor: pointer; }\n\n/* LEFT SIDE OF THE PAGE: PROJECTS */\n#project-container {\n  grid-area: projects;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  -webkit-box-shadow: 8px 0px 5px -4px #cacaca;\n  -moz-box-shadow: 8px 0px 5px -4px #cacaca;\n  box-shadow: 8px 0px 5px -4px #cacaca;\n  /* LEFT-SIDE OF THE PAGE: User Input*/ }\n  #project-container #project-list {\n    width: 280px;\n    max-width: 280px; }\n    #project-container #project-list.broad {\n      width: 68px; }\n    #project-container #project-list .project {\n      margin: 10px 0;\n      padding: 10px;\n      border-radius: 5px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      word-wrap: break-word;\n      white-space: normal;\n      overflow: hidden; }\n      #project-container #project-list .project.broad {\n        margin: 10px 0;\n        padding: 10px 10px 10px 22px;\n        border-radius: 0; }\n      #project-container #project-list .project.active {\n        color: #11998e;\n        font-weight: 900; }\n      #project-container #project-list .project:hover .delete-project-btn {\n        background: #f0f0f0;\n        visibility: visible;\n        animation: appearFromRightProject 0.3s ease-out forwards; }\n      #project-container #project-list .project:not(.active):hover {\n        background: #f0f0f0;\n        cursor: pointer; }\n      #project-container #project-list .project .project-icon {\n        font-size: 24px;\n        margin-right: 20px; }\n        #project-container #project-list .project .project-icon.broad {\n          margin-right: 0; }\n      #project-container #project-list .project .project-title-count-container {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start; }\n        #project-container #project-list .project .project-title-count-container.broad {\n          display: none; }\n      #project-container #project-list .project .project-name {\n        width: 155px;\n        max-width: 155px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n      #project-container #project-list .project .count-todos {\n        font-size: 0.8em;\n        font-weight: 900;\n        margin-left: auto;\n        width: 29px;\n        padding-right: 5px; }\n      #project-container #project-list .project .delete-project-btn {\n        visibility: hidden;\n        position: relative;\n        font-size: 24px;\n        margin-left: auto;\n        outline: none;\n        border: none;\n        background: #fff;\n        color: #c5c5c5;\n        cursor: pointer;\n        transition: color 0.2s; }\n        #project-container #project-list .project .delete-project-btn.broad {\n          display: none; }\n        #project-container #project-list .project .delete-project-btn:hover {\n          color: #999999; }\n        #project-container #project-list .project .delete-project-btn:focus {\n          color: #6e6e6e; }\n  #project-container #new-project-form {\n    width: 250px;\n    max-width: 280px;\n    position: relative;\n    margin-left: 15px;\n    margin-right: 0;\n    display: flex;\n    /* Input */\n    /* Submit button */ }\n    #project-container #new-project-form.broad {\n      width: 68px;\n      margin: 0; }\n    #project-container #new-project-form #new-project {\n      border: 0;\n      border-bottom: 2px solid #6b6b6b;\n      margin-left: 2px;\n      margin-right: auto;\n      padding: 9px 0;\n      outline: 0;\n      font-size: 1em;\n      color: #6b6b6b;\n      background: transparent;\n      font-family: \"Sen\", sans-serif; }\n      #project-container #new-project-form #new-project.broad {\n        display: none; }\n      #project-container #new-project-form #new-project:focus {\n        transition: 0.7s;\n        color: #11998e;\n        border-bottom: 2px solid #38ef7d; }\n        #project-container #new-project-form #new-project:focus::placeholder {\n          transition: 0.7s;\n          color: #11998e; }\n    #project-container #new-project-form #submit-project {\n      background: #fff;\n      display: inline-block;\n      border: none;\n      position: relative;\n      top: 0px;\n      left: 10px;\n      text-decoration: none;\n      font-size: 24px;\n      cursor: pointer;\n      text-align: center;\n      padding: 6px; }\n      #project-container #new-project-form #submit-project.broad {\n        padding: 0;\n        left: 4px;\n        padding: 7px 18px; }\n      #project-container #new-project-form #submit-project ion-icon {\n        --ionicon-stroke-width: 48px;\n        color: #6b6b6b; }\n      #project-container #new-project-form #submit-project:focus {\n        outline: none; }\n      #project-container #new-project-form #submit-project::after {\n        content: \"\";\n        position: absolute;\n        z-index: 0;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: 2px solid #fff;\n        border-radius: 5px;\n        transition: 0.5s; }\n      #project-container #new-project-form #submit-project:hover {\n        color: #11998e; }\n        #project-container #new-project-form #submit-project:hover::after {\n          border: 2px solid #38ef7d;\n          border-radius: 5px; }\n        #project-container #new-project-form #submit-project:hover ion-icon {\n          color: #11998e; }\n\n/* Middle: Project title, todo tasks*/\nmain {\n  grid-area: main;\n  min-width: 377px;\n  background: #fff;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-shadow: 0px 0px 5px 2px #cacaca;\n  -moz-box-shadow: 0px 0px 5px 2px #cacaca;\n  box-shadow: 0px 0px 5px 2px #cacaca;\n  grid-column: 2 / 4;\n  /* User input todo tasks*/ }\n  @media screen and (max-width: 1024px) {\n    main {\n      grid-column: 2 / 4; } }\n  main #project-title {\n    margin-bottom: 20px;\n    font-weight: 900;\n    font-size: 1.4em; }\n  main .todo {\n    position: relative;\n    width: 100%;\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 40px auto 20px;\n    grid-template-areas: \"checkbox todotext btn\";\n    justify-items: start;\n    align-items: center;\n    margin-bottom: 15px;\n    padding: 5px 15px;\n    border: 1px solid lightgrey;\n    border-radius: 5px;\n    cursor: pointer;\n    /* Custom made checkbox with after element */\n    /* Text of the todo task with details */ }\n    main .todo:hover {\n      -webkit-box-shadow: 0px 0px 5px 0px #e4e4e4;\n      -moz-box-shadow: 0px 0px 5px 0px #e4e4e4;\n      box-shadow: 0px 0px 5px 0px #e4e4e4; }\n    main .todo:hover .delete-todo-btn {\n      background: #fff;\n      visibility: visible;\n      animation: appearFromRightProject 0.3s ease-out forwards; }\n    main .todo label {\n      grid-area: checkbox; }\n      main .todo label .todo-icon-container {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 30px;\n        height: 30px;\n        transition: 0.7s; }\n        main .todo label .todo-icon-container::after {\n          visibility: visible;\n          content: \"\";\n          position: absolute;\n          z-index: 0;\n          left: 0;\n          top: 0;\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box;\n          border: 2px solid #c5c5c5;\n          border-radius: 50%;\n          cursor: pointer;\n          transition: 0.7s; }\n        main .todo label .todo-icon-container ion-icon {\n          visibility: hidden;\n          font-size: 24px;\n          --ionicon-stroke-width: 48px; }\n        main .todo label .todo-icon-container:hover::after {\n          border: 2px solid #e2b0e9; }\n        main .todo label .todo-icon-container:hover ion-icon {\n          color: #e2b0e9;\n          visibility: visible;\n          animation: fadeIn 0.5s ease-out; }\n    main .todo .todo-checkbox {\n      display: none; }\n    main .todo .todo-text {\n      grid-area: todotext;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around; }\n      main .todo .todo-text .todo-title {\n        font-size: 1.15em; }\n      main .todo .todo-text .details {\n        font-size: 0.8em; }\n        main .todo .todo-text .details .from-project,\n        main .todo .todo-text .details .due-date,\n        main .todo .todo-text .details .medium-priority,\n        main .todo .todo-text .details .high-priority,\n        main .todo .todo-text .details .note-presence {\n          margin-right: 8px; }\n        main .todo .todo-text .details span img {\n          position: relative;\n          top: 2px;\n          margin-right: 4px; }\n        main .todo .todo-text .details span.overdue-date {\n          color: red; }\n        main .todo .todo-text .details span.high-priority {\n          color: #e100ff; }\n        main .todo .todo-text .details span.medium-priority {\n          color: #3227ce; }\n    main .todo .delete-todo-btn {\n      grid-area: btn;\n      visibility: hidden;\n      position: relative;\n      font-size: 24px;\n      outline: none;\n      border: none;\n      background: #fff;\n      color: #d4d4d4;\n      cursor: pointer;\n      transition: color 0.2s; }\n      main .todo .delete-todo-btn:hover {\n        color: #b8b8b8; }\n      main .todo .delete-todo-btn:focus {\n        color: #929292; }\n  main hr {\n    position: relative;\n    bottom: 20px;\n    margin-top: auto;\n    margin-right: -20px;\n    margin-left: -20px;\n    height: 10px;\n    border: 0;\n    box-shadow: 0 -10px 10px -10px #8c8c8c inset; }\n  main #new-todo-form {\n    display: flex;\n    /* Input */\n    /* Submit button */ }\n    main #new-todo-form #new-todo {\n      width: 100%;\n      border: 0;\n      border-bottom: 2px solid #6b6b6b;\n      margin-left: 2px;\n      margin-right: auto;\n      padding: 9px 0;\n      outline: 0;\n      font-size: 1em;\n      color: #6b6b6b;\n      background: transparent;\n      font-family: \"Sen\", sans-serif; }\n      main #new-todo-form #new-todo:focus {\n        transition: 0.7s;\n        color: #11998e;\n        border-bottom: 2px solid #38ef7d; }\n        main #new-todo-form #new-todo:focus::placeholder {\n          transition: 0.7s;\n          color: #11998e; }\n    main #new-todo-form #submit-todo {\n      background: #fff;\n      display: inline-block;\n      border: none;\n      position: relative;\n      top: 0px;\n      left: 10px;\n      text-decoration: none;\n      font-size: 24px;\n      cursor: pointer;\n      text-align: center;\n      padding: 6px; }\n      main #new-todo-form #submit-todo ion-icon {\n        --ionicon-stroke-width: 48px;\n        color: #6b6b6b; }\n      main #new-todo-form #submit-todo:focus {\n        outline: none; }\n      main #new-todo-form #submit-todo::after {\n        content: \"\";\n        position: absolute;\n        z-index: 0;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: 2px solid #fff;\n        border-radius: 5px;\n        transition: 0.5s; }\n      main #new-todo-form #submit-todo:hover {\n        color: #11998e; }\n        main #new-todo-form #submit-todo:hover::after {\n          border: 2px solid #38ef7d;\n          border-radius: 5px; }\n        main #new-todo-form #submit-todo:hover ion-icon {\n          color: #11998e; }\n\n/* Right side of the page */\n#todo-misc-container {\n  grid-area: todo-misc;\n  background: #e9e9e9;\n  display: none;\n  flex-direction: column;\n  margin-top: 20px;\n  z-index: 1; }\n  @media screen and (max-width: 1024px) {\n    #todo-misc-container {\n      -webkit-box-shadow: -3px 0px 5px -2px #cacaca;\n      -moz-box-shadow: -3px 0px 5px -2px #cacaca;\n      box-shadow: -3px 0px 5px -2px #cacaca; } }\n  #todo-misc-container #todo-name-changer-container,\n  #todo-misc-container #date-changer,\n  #todo-misc-container #priority-container,\n  #todo-misc-container #note-container {\n    background: #fff;\n    margin-right: 0px;\n    margin-top: 0px;\n    border-bottom: 2px solid lightgrey;\n    border-left: 2px solid lightgrey;\n    padding: 15px;\n    -webkit-box-shadow: -3px 0px 5px -2px #cacaca;\n    -moz-box-shadow: -3px 0px 5px -2px #cacaca;\n    box-shadow: -3px 0px 5px -2px #cacaca; }\n    #todo-misc-container #todo-name-changer-container #date,\n    #todo-misc-container #date-changer #date,\n    #todo-misc-container #priority-container #date,\n    #todo-misc-container #note-container #date {\n      color: #6b6b6b; }\n  #todo-misc-container #todo-name-changer-container {\n    height: 60px;\n    border-radius: 5px 0 0 0;\n    -webkit-box-shadow: -2px -2px 5px -1px #cacaca;\n    -moz-box-shadow: -2px -2px 5px -1px #cacaca;\n    box-shadow: -2px -2px 5px -1px #cacaca; }\n    #todo-misc-container #todo-name-changer-container textarea {\n      height: 40px; }\n  #todo-misc-container #note-container {\n    height: 200px;\n    -webkit-box-shadow: -3px 4px 5px -2px #cacaca;\n    -moz-box-shadow: -3px 4px 5px -2px #cacaca;\n    box-shadow: -3px 4px 5px -2px #cacaca; }\n    #todo-misc-container #note-container textarea {\n      height: 160px; }\n  #todo-misc-container #date-changer,\n  #todo-misc-container #priority-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n    #todo-misc-container #date-changer #priority-levels .low-priority:hover,\n    #todo-misc-container #priority-container #priority-levels .low-priority:hover {\n      color: green; }\n    #todo-misc-container #date-changer #priority-levels .medium-priority:hover,\n    #todo-misc-container #priority-container #priority-levels .medium-priority:hover {\n      color: #3227ce; }\n    #todo-misc-container #date-changer #priority-levels .medium-priority:hover ~ .low-priority,\n    #todo-misc-container #priority-container #priority-levels .medium-priority:hover ~ .low-priority {\n      color: #3227ce; }\n    #todo-misc-container #date-changer #priority-levels .high-priority:hover,\n    #todo-misc-container #priority-container #priority-levels .high-priority:hover {\n      color: #e100ff; }\n    #todo-misc-container #date-changer #priority-levels ion-icon,\n    #todo-misc-container #priority-container #priority-levels ion-icon {\n      font-size: 16px;\n      cursor: pointer; }\n    #todo-misc-container #date-changer #date-remover ion-icon,\n    #todo-misc-container #priority-container #date-remover ion-icon {\n      position: relative;\n      top: 4px;\n      color: #6b6b6b;\n      cursor: pointer;\n      --ionicon-stroke-width: 48px; }\n      #todo-misc-container #date-changer #date-remover ion-icon:hover,\n      #todo-misc-container #priority-container #date-remover ion-icon:hover {\n        color: black; }\n  #todo-misc-container .misc-title {\n    font-size: 1.1em;\n    color: #6b6b6b;\n    width: 120px; }\n  #todo-misc-container textarea {\n    background: #fff;\n    outline: none;\n    resize: none;\n    overflow: hidden;\n    width: 100%;\n    border: none;\n    font-family: \"Sen\", sans-serif;\n    font-size: 1.1em; }\n    #todo-misc-container textarea::placeholder {\n      color: #6b6b6b; }\n    #todo-misc-container textarea:focus::placeholder {\n      color: #11998e; }\n  #todo-misc-container input[type=\"date\"] {\n    outline: none;\n    border: none;\n    cursor: pointer; }\n  #todo-misc-container #close-details-btn {\n    font-size: 48px;\n    width: 62px; }\n    #todo-misc-container #close-details-btn ion-icon {\n      --ionicon-stroke-width: 48px;\n      background: #fff;\n      border-radius: 0 0 5px 5px;\n      border-left: 2px solid lightgrey;\n      border-right: 2px solid lightgrey;\n      border-bottom: 2px solid lightgrey;\n      width: 60px;\n      color: #c5c5c5;\n      cursor: pointer;\n      -webkit-box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca;\n      -moz-box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca;\n      box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca; }\n      #todo-misc-container #close-details-btn ion-icon:hover {\n        color: #6e6e6e; }\n", ""]);
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
/* harmony import */ var _tasks_add_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tasks/add.js */ "./src/JS/tasks/add.js");
/* harmony import */ var _tasks_render_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/render.js */ "./src/JS/tasks/render.js");
/* harmony import */ var _tasks_defaults_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks/defaults.js */ "./src/JS/tasks/defaults.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






 // Style

_style_menu_js__WEBPACK_IMPORTED_MODULE_1__["showProjects"]();
_style_resize_js__WEBPACK_IMPORTED_MODULE_2__["responsive"](); // App Logic
// define tasks array which is todolist

var allTasks = _toConsumableArray(_tasks_defaults_js__WEBPACK_IMPORTED_MODULE_5__["get"]()); // Initial render of the default tasks form tasks array


Object(_tasks_render_js__WEBPACK_IMPORTED_MODULE_4__["renderAllTasksFrom"])(allTasks); // Button to add task to a defined array
// Also rerender the array after adding a task

_tasks_add_js__WEBPACK_IMPORTED_MODULE_3__["addTaskTo"](allTasks);

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

    var number = btnId.split("-")[1]; // Before removing an item make sure his details are not shown
    // If they are then hide them
    // remove item from the array by that number

    arr.splice(number, 1); // Rerender array

    Object(_render_js__WEBPACK_IMPORTED_MODULE_0__["renderAllTasksFrom"])(arr); // Avoid firing parent element listener after clicking on the button

    e.stopPropagation();
  });
}



/***/ }),

/***/ "./src/JS/tasks/detailsToggle.js":
/*!***************************************!*\
  !*** ./src/JS/tasks/detailsToggle.js ***!
  \***************************************/
/*! exports provided: tasksToggleDetails, getComputedDisplay, getDetailsContainerIdNumber, hideDetails */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/alexandr/Projects/odin_on_rails/new_beg/src/JS/tasks/detailsToggle.js: `getDetailsContainerIdNumber` has already been exported. Exported identifiers must be unique. (119:2)\n\n\u001b[0m \u001b[90m 117 | \u001b[39m  getDetailsContainerIdNumber\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 118 | \u001b[39m  hideDetails\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 119 | \u001b[39m  getDetailsContainerIdNumber\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m  \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 120 | \u001b[39m}\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 121 | \u001b[39m\u001b[0m\n    at Parser._raise (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:742:17)\n    at Parser.raiseWithData (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.raise (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:729:17)\n    at Parser.checkDuplicateExports (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:12405:12)\n    at Parser.checkExport (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:12344:16)\n    at Parser.parseExport (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:12180:12)\n    at Parser.parseStatementContent (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11185:27)\n    at Parser.parseStatement (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11081:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11656:25)\n    at Parser.parseBlockBody (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11642:10)\n    at Parser.parseTopLevel (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11012:10)\n    at Parser.parse (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:12637:10)\n    at parse (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:12688:38)\n    at parser (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/core/lib/parser/index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/core/lib/transformation/index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/core/lib/transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/gensync/index.js:254:32)\n    at /home/alexandr/Projects/odin_on_rails/new_beg/node_modules/gensync/index.js:266:13\n    at async.call.result.err.err (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/gensync/index.js:216:11)");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUNPTlMvY2FsZW5kYXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9JQ09OUy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZGVsZXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2Nzcz84MTRiIl0sIm5hbWVzIjpbIk1lbnVCdG4iLCJSZXNpemUiLCJhbGxUYXNrcyIsIkRlZmF1bHRzIiwicmVuZGVyQWxsVGFza3NGcm9tIiwiQWRkVGFza0J0biIsInNob3dQcm9qZWN0cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnJvYWRlblByb2plY3RDb250YWluZXIiLCJnZXRFbGVtZW50c1RvQnJvYWQiLCJlbGVtZW50IiwidG9nZ2xlQnJvYWQiLCJtaW5pbWl6ZVByb2plY3RDb250YWluZXIiLCJhZGRCcm9hZCIsImNsYXNzTGlzdCIsImFkZCIsInRvZ2dsZSIsImNvbnRlbnQiLCJwcm9qZWN0TGlzdCIsInByb2plY3QiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwicHJvamVjdEljb24iLCJwcm9qZWN0VGl0bGVDb3VudENvbnRhaW5lciIsImRlbGV0ZVByb2plY3RCdG4iLCJuZXdQcm9qZWN0Rm9ybSIsIm5ld1Byb2plY3QiLCJzdWJtaXRQcm9qZWN0IiwiZWxlbWVudHMiLCJyZXNwb25zaXZlIiwibWFpbiIsImRldGFpbHMiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJzY3JlZW5MZXNzVGhlbjEwMjQiLCJnZXRDb21wdXRlZERpc3BsYXkiLCJzdHlsZSIsImdyaWRDb2x1bW4iLCJtYXRjaGVzIiwiYWRkVGFza1RvIiwiYXJyIiwic3VibWl0VG9kb0J0biIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoVGFza1RvIiwiY29uc29sZSIsInRhYmxlIiwicHVzaCIsImdldFRhc2siLCJ0YXNrIiwidGFza0ZhY3RvcnkiLCJ0aXRsZSIsImdldElucHV0VmFsdWUiLCJjbGVhclRhc2tJbnB1dCIsInZhbHVlIiwiZ2V0IiwiZnJvbSIsImRhdGUiLCJwcmlvcml0eSIsIm5vdGUiLCJkb25lIiwiZGVsZXRlVGFza3NGcm9tIiwiYnV0dG9ucyIsImJ1dHRvbiIsImRlbGV0ZUJ0blJlbW92ZVRhc2siLCJlIiwiYnRuSWQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJudW1iZXIiLCJzcGxpdCIsInNwbGljZSIsInN0b3BQcm9wYWdhdGlvbiIsImNsZWFyQ29udGVudE9mIiwiZW50cmllcyIsImluZGV4IiwiaXRlbSIsInJlbmRlclRhc2siLCJEZWxldGVUYXNrQnRucyIsIkRldGFpbHNUb2dnbGUiLCJjb250ZW50Q29udGFpbmVyIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwiaSIsImFwcGVuZCIsImNyZWF0ZVRhc2siLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVMYWJlbCIsImNyZWF0ZUlucHV0IiwiY3JlYXRlQ29udGVudCIsImNyZWF0ZURlbGV0ZUJ0biIsImxhYmVsIiwiaHRtbEZvciIsImNyZWF0ZURvbmVJY29uIiwiY29udGFpbmVyIiwiaWNvbiIsImFwcGVuZENoaWxkIiwiY2hlY2tib3giLCJjcmVhdGVUaXRsZSIsImNyZWF0ZURldGFpbHMiLCJzdHIiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZUZyb20iLCJjcmVhdGVEdWUiLCJjcmVhdGVQcmlvcml0eSIsImNyZWF0ZU5vdGUiLCJzcGFuIiwiZHVlIiwiY3JlYXRlQ2FsZW5kYXJJbWFnZSIsImNyZWF0ZVNwYW5Gb3JEYXRlIiwiaW1nIiwiQ2FsZW5kYXIiLCJsZXZlbCIsImNyZWF0ZVNwYW5Gb3JQcmlvcml0eSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJub3RlSWNvbiIsIk5vdGUiLCJ0ZXh0IiwiYnRuIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVy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eUJULENBQXpCLEVBQTRCO0FBQzFCLE1BQUl3QyxHQUFHLEdBQUd0SCxRQUFRLENBQUNrRixhQUFULENBQXVCLFFBQXZCLENBQVY7QUFDQW9DLEtBQUcsQ0FBQ25DLFlBQUosQ0FBaUIsTUFBakIsRUFBeUIsUUFBekI7QUFDQW1DLEtBQUcsQ0FBQ25DLFlBQUosQ0FBaUIsT0FBakIsRUFBMEIsaUJBQTFCO0FBQ0FtQyxLQUFHLENBQUNuQyxZQUFKLENBQWlCLElBQWpCLHNCQUFvQ0wsQ0FBcEMsR0FKMEIsQ0FNMUI7O0FBQ0EsTUFBSWMsSUFBSSxHQUFHNUYsUUFBUSxDQUFDa0YsYUFBVCxDQUF1QixVQUF2QixDQUFYO0FBQ0FVLE1BQUksQ0FBQ1QsWUFBTCxDQUFrQixNQUFsQixFQUEwQixjQUExQjtBQUVBbUMsS0FBRyxDQUFDekIsV0FBSixDQUFnQkQsSUFBaEI7QUFFQSxTQUFPMEIsR0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7O0FDbk1ELFVBQVUsbUJBQU8sQ0FBQyxzSkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsOE1BQXFHOztBQUV2STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFJQSwwQiIsImZpbGUiOiJidW5kbGUuZGI0YTk4NDU4OWNlYTAyOTU3YjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9KUy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxuQGtleWZyYW1lcyByb3RhdGlvbiB7XFxuICAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApOyB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XFxuXFxuQGtleWZyYW1lcyBhcHBlYXJGcm9tUmlnaHRQcm9qZWN0IHtcXG4gIDAlIHtcXG4gICAgbGVmdDogMzBweDtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHVzZXItc2VsZWN0OiBub25lOyB9XFxuXFxuYm9keSxcXG5odG1sIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XFxuICBiYWNrZ3JvdW5kOiAjZTllOWU5OyB9XFxuXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNjBweCBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCBhdXRvIDMzMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIiBcXFwicHJvamVjdHMgbWFpbiB0b2RvLW1pc2NcXFwiOyB9XFxuICAjY29udGVudC5icm9hZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjhweCBhdXRvIDMzMHB4OyB9XFxuXFxuLyogLS0tIFRPUCBvZiB0aGUgUEFHRSA6IEhFQURFUiAtLS0gKi9cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMxMDY4Nzc7XFxuICBjb2xvcjogI2Y0ZjRmNDtcXG4gIGZvbnQtc2l6ZTogMS45ZW07XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQZXJtYW5lbnQgTWFya2VyXFxcIiwgY3Vyc2l2ZTtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7IH1cXG4gIGhlYWRlciAjbWVudS1pY29uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7IH1cXG4gICAgaGVhZGVyICNtZW51LWljb246aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6ICMwYjUwNWM7IH1cXG4gIGhlYWRlciAjaGVhZGVyLXRpdGxlIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XFxuICBoZWFkZXIgI3NvY2lhbHMge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLyogTEVGVCBTSURFIE9GIFRIRSBQQUdFOiBQUk9KRUNUUyAqL1xcbiNwcm9qZWN0LWNvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IHByb2plY3RzO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogOHB4IDBweCA1cHggLTRweCAjY2FjYWNhO1xcbiAgLW1vei1ib3gtc2hhZG93OiA4cHggMHB4IDVweCAtNHB4ICNjYWNhY2E7XFxuICBib3gtc2hhZG93OiA4cHggMHB4IDVweCAtNHB4ICNjYWNhY2E7XFxuICAvKiBMRUZULVNJREUgT0YgVEhFIFBBR0U6IFVzZXIgSW5wdXQqLyB9XFxuICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCB7XFxuICAgIHdpZHRoOiAyODBweDtcXG4gICAgbWF4LXdpZHRoOiAyODBweDsgfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdC5icm9hZCB7XFxuICAgICAgd2lkdGg6IDY4cHg7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3Qge1xcbiAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0LmJyb2FkIHtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMjJweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdC5hY3RpdmUge1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7XFxuICAgICAgICBmb250LXdlaWdodDogOTAwOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3Q6aG92ZXIgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgIGFuaW1hdGlvbjogYXBwZWFyRnJvbVJpZ2h0UHJvamVjdCAwLjNzIGVhc2Utb3V0IGZvcndhcmRzOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3Q6bm90KC5hY3RpdmUpOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1pY29uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtaWNvbi5icm9hZCB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWNvdW50LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyLmJyb2FkIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LW5hbWUge1xcbiAgICAgICAgd2lkdGg6IDE1NXB4O1xcbiAgICAgICAgbWF4LXdpZHRoOiAxNTVweDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuY291bnQtdG9kb3Mge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIHdpZHRoOiAyOXB4O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4OyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XFxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgICAgY29sb3I6ICNjNWM1YzU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuLmJyb2FkIHtcXG4gICAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgICAgICAgIGNvbG9yOiAjOTk5OTk5OyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuOmZvY3VzIHtcXG4gICAgICAgICAgY29sb3I6ICM2ZTZlNmU7IH1cXG4gICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgbWF4LXdpZHRoOiAyODBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBJbnB1dCAqL1xcbiAgICAvKiBTdWJtaXQgYnV0dG9uICovIH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtLmJyb2FkIHtcXG4gICAgICB3aWR0aDogNjhweDtcXG4gICAgICBtYXJnaW46IDA7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdCB7XFxuICAgICAgYm9yZGVyOiAwO1xcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNmI2YjZiO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICAgIHBhZGRpbmc6IDlweCAwO1xcbiAgICAgIG91dGxpbmU6IDA7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgY29sb3I6ICM2YjZiNmI7XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJTZW5cXFwiLCBzYW5zLXNlcmlmOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdC5icm9hZCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdDpmb2N1cyB7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM4ZWY3ZDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNuZXctcHJvamVjdDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0IHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogMHB4O1xcbiAgICAgIGxlZnQ6IDEwcHg7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDZweDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3QuYnJvYWQge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGxlZnQ6IDRweDtcXG4gICAgICAgIHBhZGRpbmc6IDdweCAxOHB4OyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdCBpb24taWNvbiB7XFxuICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4O1xcbiAgICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmZvY3VzIHtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmhvdmVyOjphZnRlciB7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzOGVmN2Q7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDpob3ZlciBpb24taWNvbiB7XFxuICAgICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuXFxuLyogTWlkZGxlOiBQcm9qZWN0IHRpdGxlLCB0b2RvIHRhc2tzKi9cXG5tYWluIHtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIG1pbi13aWR0aDogMzc3cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggI2NhY2FjYTtcXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4ICNjYWNhY2E7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggI2NhY2FjYTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIC8qIFVzZXIgaW5wdXQgdG9kbyB0YXNrcyovIH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICBtYWluIHtcXG4gICAgICBncmlkLWNvbHVtbjogMiAvIDQ7IH0gfVxcbiAgbWFpbiAjcHJvamVjdC10aXRsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMS40ZW07IH1cXG4gIG1haW4gLnRvZG8ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCBhdXRvIDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjaGVja2JveCB0b2RvdGV4dCBidG5cXFwiO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC8qIEN1c3RvbSBtYWRlIGNoZWNrYm94IHdpdGggYWZ0ZXIgZWxlbWVudCAqL1xcbiAgICAvKiBUZXh0IG9mIHRoZSB0b2RvIHRhc2sgd2l0aCBkZXRhaWxzICovIH1cXG4gICAgbWFpbiAudG9kbzpob3ZlciB7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggI2U0ZTRlNDtcXG4gICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCAjZTRlNGU0O1xcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCAjZTRlNGU0OyB9XFxuICAgIG1haW4gLnRvZG86aG92ZXIgLmRlbGV0ZS10b2RvLWJ0biB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgIGFuaW1hdGlvbjogYXBwZWFyRnJvbVJpZ2h0UHJvamVjdCAwLjNzIGVhc2Utb3V0IGZvcndhcmRzOyB9XFxuICAgIG1haW4gLnRvZG8gbGFiZWwge1xcbiAgICAgIGdyaWQtYXJlYTogY2hlY2tib3g7IH1cXG4gICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXI6OmFmdGVyIHtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYzVjNWM1O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC43czsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lciBpb24taWNvbiB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4OyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyOmhvdmVyOjphZnRlciB7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMmIwZTk7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXI6aG92ZXIgaW9uLWljb24ge1xcbiAgICAgICAgICBjb2xvcjogI2UyYjBlOTtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMC41cyBlYXNlLW91dDsgfVxcbiAgICBtYWluIC50b2RvIC50b2RvLWNoZWNrYm94IHtcXG4gICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCB7XFxuICAgICAgZ3JpZC1hcmVhOiB0b2RvdGV4dDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG4gICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLnRvZG8tdGl0bGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07IH1cXG4gICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5mcm9tLXByb2plY3QsXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmR1ZS1kYXRlLFxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIC5tZWRpdW0tcHJpb3JpdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmhpZ2gtcHJpb3JpdHksXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLm5vdGUtcHJlc2VuY2Uge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHNwYW4gaW1nIHtcXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICB0b3A6IDJweDtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyBzcGFuLm92ZXJkdWUtZGF0ZSB7XFxuICAgICAgICAgIGNvbG9yOiByZWQ7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyBzcGFuLmhpZ2gtcHJpb3JpdHkge1xcbiAgICAgICAgICBjb2xvcjogI2UxMDBmZjsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHNwYW4ubWVkaXVtLXByaW9yaXR5IHtcXG4gICAgICAgICAgY29sb3I6ICMzMjI3Y2U7IH1cXG4gICAgbWFpbiAudG9kbyAuZGVsZXRlLXRvZG8tYnRuIHtcXG4gICAgICBncmlkLWFyZWE6IGJ0bjtcXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGNvbG9yOiAjZDRkNGQ0O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzOyB9XFxuICAgICAgbWFpbiAudG9kbyAuZGVsZXRlLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjYjhiOGI4OyB9XFxuICAgICAgbWFpbiAudG9kbyAuZGVsZXRlLXRvZG8tYnRuOmZvY3VzIHtcXG4gICAgICAgIGNvbG9yOiAjOTI5MjkyOyB9XFxuICBtYWluIGhyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJveC1zaGFkb3c6IDAgLTEwcHggMTBweCAtMTBweCAjOGM4YzhjIGluc2V0OyB9XFxuICBtYWluICNuZXctdG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogSW5wdXQgKi9cXG4gICAgLyogU3VibWl0IGJ1dHRvbiAqLyB9XFxuICAgIG1haW4gI25ldy10b2RvLWZvcm0gI25ldy10b2RvIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2YjZiNmI7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgcGFkZGluZzogOXB4IDA7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBjb2xvcjogIzZiNmI2YjtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBmb250LWZhbWlseTogXFxcIlNlblxcXCIsIHNhbnMtc2VyaWY7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNuZXctdG9kbzpmb2N1cyB7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM4ZWY3ZDsgfVxcbiAgICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjbmV3LXRvZG86Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXG4gICAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG8ge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiAwcHg7XFxuICAgICAgbGVmdDogMTBweDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogNnB4OyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG8gaW9uLWljb24ge1xcbiAgICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDtcXG4gICAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM4ZWY3ZDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzpob3ZlciBpb24taWNvbiB7XFxuICAgICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuXFxuLyogUmlnaHQgc2lkZSBvZiB0aGUgcGFnZSAqL1xcbiN0b2RvLW1pc2MtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogdG9kby1taXNjO1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHotaW5kZXg6IDE7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciB7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICAgIC1tb3otYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgICBib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhOyB9IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICN0b2RvLW5hbWUtY2hhbmdlci1jb250YWluZXIsXFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyLFxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lcixcXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNub3RlLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgIC1tb3otYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjdG9kby1uYW1lLWNoYW5nZXItY29udGFpbmVyICNkYXRlLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNkYXRlLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNkYXRlLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjbm90ZS1jb250YWluZXIgI2RhdGUge1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjdG9kby1uYW1lLWNoYW5nZXItY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDA7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTJweCAtMnB4IDVweCAtMXB4ICNjYWNhY2E7XFxuICAgIC1tb3otYm94LXNoYWRvdzogLTJweCAtMnB4IDVweCAtMXB4ICNjYWNhY2E7XFxuICAgIGJveC1zaGFkb3c6IC0ycHggLTJweCA1cHggLTFweCAjY2FjYWNhOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICN0b2RvLW5hbWUtY2hhbmdlci1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICAgIGhlaWdodDogNDBweDsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI25vdGUtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtM3B4IDRweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IC0zcHggNHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggNHB4IDVweCAtMnB4ICNjYWNhY2E7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI25vdGUtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgICBoZWlnaHQ6IDE2MHB4OyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyLFxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLmxvdy1wcmlvcml0eTpob3ZlcixcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5sb3ctcHJpb3JpdHk6aG92ZXIge1xcbiAgICAgIGNvbG9yOiBncmVlbjsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eTpob3ZlcixcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHk6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjMzIyN2NlOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5OmhvdmVyIH4gLmxvdy1wcmlvcml0eSxcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHk6aG92ZXIgfiAubG93LXByaW9yaXR5IHtcXG4gICAgICBjb2xvcjogIzMyMjdjZTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLmhpZ2gtcHJpb3JpdHk6aG92ZXIsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAuaGlnaC1wcmlvcml0eTpob3ZlciB7XFxuICAgICAgY29sb3I6ICNlMTAwZmY7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIGlvbi1pY29uLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgaW9uLWljb24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjZGF0ZS1yZW1vdmVyIGlvbi1pY29uLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNkYXRlLXJlbW92ZXIgaW9uLWljb24ge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDRweDtcXG4gICAgICBjb2xvcjogIzZiNmI2YjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI2RhdGUtcmVtb3ZlciBpb24taWNvbjpob3ZlcixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNkYXRlLXJlbW92ZXIgaW9uLWljb246aG92ZXIge1xcbiAgICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAubWlzYy10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcbiAgICB3aWR0aDogMTIwcHg7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlblxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI2Nsb3NlLWRldGFpbHMtYnRuIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB3aWR0aDogNjJweDsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjY2xvc2UtZGV0YWlscy1idG4gaW9uLWljb24ge1xcbiAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICB3aWR0aDogNjBweDtcXG4gICAgICBjb2xvcjogI2M1YzVjNTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCA3cHggLTEzcHggI2NhY2FjYSwgMHB4IDVweCAxMHB4IDBweCAjY2FjYWNhO1xcbiAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggN3B4IC0xM3B4ICNjYWNhY2EsIDBweCA1cHggMTBweCAwcHggI2NhY2FjYTtcXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCA3cHggLTEzcHggI2NhY2FjYSwgMHB4IDVweCAxMHB4IDBweCAjY2FjYWNhOyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2Nsb3NlLWRldGFpbHMtYnRuIGlvbi1pY29uOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjNmU2ZTZlOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9jYWxlbmRhci43NTA0Yzg4OWZjMmQ5ZDRmNTQwMGJhNjk4YjI1NDM3Ny5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvZWRpdC4yOTI3ZjhkZTQyNjhiYWU4ZjExYzRkZmUzYWRjNzJiNS5zdmdcIjsiLCJpbXBvcnQgXCIuLi9TQ1NTL3N0eWxlLnNjc3NcIjtcbmltcG9ydCAqIGFzIE1lbnVCdG4gZnJvbSBcIi4vc3R5bGUvbWVudS5qc1wiO1xuaW1wb3J0ICogYXMgUmVzaXplIGZyb20gXCIuL3N0eWxlL3Jlc2l6ZS5qc1wiO1xuaW1wb3J0ICogYXMgQWRkVGFza0J0biBmcm9tIFwiLi90YXNrcy9hZGQuanNcIjtcbmltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9IGZyb20gXCIuL3Rhc2tzL3JlbmRlci5qc1wiO1xuaW1wb3J0ICogYXMgRGVmYXVsdHMgZnJvbSBcIi4vdGFza3MvZGVmYXVsdHMuanNcIjtcblxuLy8gU3R5bGVcbk1lbnVCdG4uc2hvd1Byb2plY3RzKCk7XG5SZXNpemUucmVzcG9uc2l2ZSgpO1xuXG4vLyBBcHAgTG9naWNcblxuLy8gZGVmaW5lIHRhc2tzIGFycmF5IHdoaWNoIGlzIHRvZG9saXN0XG5sZXQgYWxsVGFza3MgPSBbLi4uRGVmYXVsdHMuZ2V0KCldO1xuXG4vLyBJbml0aWFsIHJlbmRlciBvZiB0aGUgZGVmYXVsdCB0YXNrcyBmb3JtIHRhc2tzIGFycmF5XG5yZW5kZXJBbGxUYXNrc0Zyb20oYWxsVGFza3MpO1xuXG4vLyBCdXR0b24gdG8gYWRkIHRhc2sgdG8gYSBkZWZpbmVkIGFycmF5XG4vLyBBbHNvIHJlcmVuZGVyIHRoZSBhcnJheSBhZnRlciBhZGRpbmcgYSB0YXNrXG5BZGRUYXNrQnRuLmFkZFRhc2tUbyhhbGxUYXNrcyk7XG4iLCJmdW5jdGlvbiBzaG93UHJvamVjdHMoKSB7XG4gIC8vIE1ha2UgbWVudSBidXR0b24gaW4gdGhlIHRvcCBsZWZ0IGNvcm5lciBkbyB3b3JrIChjaGFuZ2UgcHJvamVjdHMgdG8gd2lkZSBvciBuYXJyb3cpXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwibWVudS1pY29uXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBicm9hZGVuUHJvamVjdENvbnRhaW5lcigpKTtcbn1cblxuZnVuY3Rpb24gYnJvYWRlblByb2plY3RDb250YWluZXIoKSB7XG4gIC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgZnJvbSB0aGUgcGFnZSBhbmQgdG9nZ2xlIGEgY2xhc3MgJ2Jyb2FkJyBvbiBlYWNoXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgZ2V0RWxlbWVudHNUb0Jyb2FkKCkpIHtcbiAgICB0b2dnbGVCcm9hZChlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtaW5pbWl6ZVByb2plY3RDb250YWluZXIoKSB7XG4gIC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgZnJvbSB0aGUgcGFnZSBhbmQgdG9nZ2xlIGEgY2xhc3MgJ2Jyb2FkJyBvbiBlYWNoXG4gIGZvciAobGV0IGVsZW1lbnQgb2YgZ2V0RWxlbWVudHNUb0Jyb2FkKCkpIHtcbiAgICBhZGRCcm9hZChlbGVtZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRCcm9hZChlbGVtZW50KSB7XG4gIC8vIFJlbW92ZSBjbGFzcyAnYnJvYWQnIGZyb20gYW4gZWxlbWVudFxuICAvLyB0aGlzIGNsYXNzIGNoYW5nZXMgbGVmdC1zaWRlIHBhZ2UgbWVudSBtYWtpbmcgaXQgc21hbGxlclxuICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJicm9hZFwiKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQnJvYWQoZWxlbWVudCkge1xuICAvLyBBZGQvcmVtb3ZlIGNsYXNzICdicm9hZCcgdG8gYW4gZWxlbWVudFxuICAvLyB0aGlzIGNsYXNzIGNoYW5nZXMgbGVmdC1zaWRlIHBhZ2UgbWVudSBtYWtpbmcgaXQgc21hbGxlclxuICBlbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJicm9hZFwiKTtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudHNUb0Jyb2FkKCkge1xuICAvLyBUYWtlIHNvbWUgRE9NIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2VcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC1saXN0XCIpO1xuICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0XCIpO1xuICBsZXQgcHJvamVjdEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdC1pY29uXCIpO1xuICBsZXQgcHJvamVjdFRpdGxlQ291bnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgIFwicHJvamVjdC10aXRsZS1jb3VudC1jb250YWluZXIgXCJcbiAgKTtcbiAgbGV0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXByb2plY3QtYnRuXCIpO1xuICBsZXQgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWZvcm1cIik7XG4gIGxldCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdFwiKTtcbiAgbGV0IHN1Ym1pdFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1wcm9qZWN0XCIpO1xuXG4gIC8vIFB1dCB0aGVtIGluIHRoZSBhcnJheSBhbmQgcmV0dXJuIGl0XG4gIGxldCBlbGVtZW50cyA9IFtcbiAgICBjb250ZW50LFxuICAgIHByb2plY3RMaXN0LFxuICAgIC4uLnByb2plY3QsXG4gICAgLi4ucHJvamVjdEljb24sXG4gICAgLi4ucHJvamVjdFRpdGxlQ291bnRDb250YWluZXIsXG4gICAgLi4uZGVsZXRlUHJvamVjdEJ0bixcbiAgICBuZXdQcm9qZWN0Rm9ybSxcbiAgICBuZXdQcm9qZWN0LFxuICAgIHN1Ym1pdFByb2plY3QsXG4gIF07XG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IHsgc2hvd1Byb2plY3RzLCBtaW5pbWl6ZVByb2plY3RDb250YWluZXIgfTtcbiIsImltcG9ydCB7IGdldENvbXB1dGVkRGlzcGxheSB9IGZyb20gXCIuLi90YXNrcy9kZXRhaWxzVG9nZ2xlLmpzXCI7XG5pbXBvcnQgeyBtaW5pbWl6ZVByb2plY3RDb250YWluZXIgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbmZ1bmN0aW9uIHJlc3BvbnNpdmUoKSB7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICBsZXQgZGV0YWlscyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1taXNjLWNvbnRhaW5lclwiKTtcbiAgLy8gUmVzaXppbmcgd2luZG93IG1ha2VzIG1pZGRsZSBjb2x1bW4gZml0XG4gIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTAyNHB4KVwiKS5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgLy8gSWYgc2NyZWVuIGlzIG5hcnJvd2VyIHRoYW4gMTAyNHB4IGFuZCBkZXRhaWxzIGFyZSBvcGVuIChyaWdodCBzaWRlIG9mIHRoZSBwYWdlKVxuICAgIC8vIHRoYW4gbWluaW1pemUgbGVmdCBzaWRlIGFuZCBtYWtlIFwibWFpblwiIGZpdCB0aGUgd2hvbGUgc2Vjb25kIGNvbHVtblxuICAgIGlmIChzY3JlZW5MZXNzVGhlbjEwMjQoKSAmJiBnZXRDb21wdXRlZERpc3BsYXkoZGV0YWlscykgPT09IFwiZmxleFwiKSB7XG4gICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvNFwiO1xuICAgICAgbWluaW1pemVQcm9qZWN0Q29udGFpbmVyKCk7XG4gICAgICAvLyBEb2Vzbid0IG1hdHRlciB0aGUgc2l6ZSBvZiB0aGUgc2NyZWVuLFxuICAgICAgLy8gaWYgZGV0YWlscyBhcmUgY2xvc2VkICdtYWluJyBmaXQgdGhlIHdob2xlIHNlY29uZCBjb2x1bW5cbiAgICB9IGVsc2UgaWYgKGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSA9PT0gXCJub25lXCIpIHtcbiAgICAgIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gICAgICAvLyBFbHNlIGZvciBlLmcuIHdoZW4gc2NyZWVuIGFyZSB3aWRlciB0aGVuIDEwMjRweCBhbmRcbiAgICAgIC8vIGRldGFpbHMgYXJlIG9wZW4sIHRoZW4gbWFpbiBpcyB0aGUgY29sdW1uIGluIHRoZSBtaWRkbGVcbiAgICB9IGVsc2Uge1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzNcIjtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzY3JlZW5MZXNzVGhlbjEwMjQoKSB7XG4gIC8vIENoZWNrIGlmIHNjcmVlbiBpcyBsZXNzIHRoZW4gMTAyNHB4IHdpZGVcbiAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTAyNHB4KVwiKS5tYXRjaGVzO1xufVxuXG4vLyBXaGVuIHJlc2l6aW5nIHdpbmRvdyBtaWRkbGUgY29sdW1uIHJlc2l6ZSBpdHNlbGYgdG8gYmUgcmVzcG9uc2l2ZVxuZXhwb3J0IHsgcmVzcG9uc2l2ZSwgc2NyZWVuTGVzc1RoZW4xMDI0IH07XG4iLCJpbXBvcnQgeyB0YXNrRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcbmltcG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9IGZyb20gXCIuL3JlbmRlci5qc1wiO1xuXG5mdW5jdGlvbiBhZGRUYXNrVG8oYXJyKSB7XG4gIGNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC10b2RvXCIpO1xuXG4gIHN1Ym1pdFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIFByZXZlbnQgZGVmYXVsdCBzdWJtaXQgYmVoYXZpb3JcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIEdldCB0YXNrIG5hbWUgZnJvbSBVc2VyIGFuZCBhZGQgaXQgdG8gdGFza3MgYXJyYXlcbiAgICBwdXNoVGFza1RvKGFycik7XG4gICAgY29uc29sZS50YWJsZShhcnIpO1xuICAgIC8vIFJlcmVuZGVyIGFycmF5XG4gICAgcmVuZGVyQWxsVGFza3NGcm9tKGFycik7XG5cbiAgICByZXR1cm4gYXJyO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcHVzaFRhc2tUbyhhcnIpIHtcbiAgLy8gUHVzaCB0YXNrIHRvIGFycmF5XG4gIGFyci5wdXNoKGdldFRhc2soKSk7XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2soKSB7XG4gIC8vIEdldCB1c2VyIGlucHV0IHZhbHVlLCBzYXZlIGl0XG4gIGxldCB0YXNrID0gdGFza0ZhY3RvcnkoeyB0aXRsZTogZ2V0SW5wdXRWYWx1ZSgpIH0pO1xuICAvLyBhbmQgY2xlYXIgaW5wdXRcbiAgY2xlYXJUYXNrSW5wdXQoKTtcbiAgcmV0dXJuIHRhc2s7XG59XG5cbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoKSB7XG4gIC8vIEdldCB1c2VyIGlucHV0IHZhbHVlIGFzIE5ldyBUYXNrIDogU1RSSU5HXG4gIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvXCIpLnZhbHVlO1xufVxuXG5mdW5jdGlvbiBjbGVhclRhc2tJbnB1dCgpIHtcbiAgLy8gQ2xlYXIgdXNlciBpbnB1dFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10b2RvXCIpLnZhbHVlID0gXCJcIjtcbn1cblxuZXhwb3J0IHsgZ2V0VGFzaywgYWRkVGFza1RvIH07XG4iLCJpbXBvcnQgeyB0YXNrRmFjdG9yeSB9IGZyb20gXCIuL2ZhY3RvcnkuanNcIjtcblxuZnVuY3Rpb24gZ2V0KCkge1xuICAvLyBUaGlzIGZ1bmN0aW4gc2ltcGx5IGNyZWF0ZSBhbiBhcnJheSB3aXRoIGRlZmF1bHQgdGFza3MgaW4gaXRcbiAgbGV0IGFsbFRhc2tzID0gW1xuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIHN0dWZmXCIsXG4gICAgICBmcm9tOiBcIlByb2plY3QgMlwiLFxuICAgICAgZGF0ZTogXCIxNS4wMy4yMDIwXCIsXG4gICAgICBwcmlvcml0eTogXCJtZWRpdW1cIixcbiAgICAgIG5vdGU6IFwic29tZXRoaW5nXCIsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTGVhcm4gZW5nbGlzaFwiLFxuICAgICAgZGF0ZTogXCIxMC4wMS4yMDIwXCIsXG4gICAgfSksXG4gICAgdGFza0ZhY3Rvcnkoe1xuICAgICAgdGl0bGU6IFwiTGVhcm4gc3R1ZmZcIixcbiAgICAgIGZyb206IFwiUHJvamVjdCAyXCIsXG4gICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG4gICAgICBub3RlOiBcInNvbWV0aGluZ1wiLFxuICAgICAgZG9uZTogdHJ1ZSxcbiAgICB9KSxcbiAgXTtcblxuICByZXR1cm4gYWxsVGFza3M7XG59XG5cbmV4cG9ydCB7IGdldCB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyQWxsVGFza3NGcm9tIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBEZXRhaWxzVG9nZ2xlIGZyb20gXCIuL2RldGFpbHNUb2dnbGUuanNcIjtcblxuZnVuY3Rpb24gZGVsZXRlVGFza3NGcm9tKGFycikge1xuICAvLyBUYWtlIHRoZSBjb2xsY2V0aW9uIG9mIGFsbCBkZWxldGUgY3Jvc3MgYnV0dG9ucyBmcm9tIHRhc2tzIGJ5IGNsYXNzIG5hbWVcbiAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZGVsZXRlLXRvZG8tYnRuXCIpO1xuICAvLyBMb29wIHRocm91Z2ggY29sbGVjdGlvbiBhbmQgYWRkIGV2ZW50IGxpc3RlbmVyIHRvIGVhY2ggYnV0dG9uXG4gIGZvciAobGV0IGJ1dHRvbiBvZiBidXR0b25zKSB7XG4gICAgZGVsZXRlQnRuUmVtb3ZlVGFzayhidXR0b24sIGFycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVsZXRlQnRuUmVtb3ZlVGFzayhidXR0b24sIGFycikge1xuICAvLyBGdW5jdGlvbiB0byBhc3NpZ24gRXZlbnQgbGlzdGVuZXIgdG8gYnV0dG9uc1xuICAvLyB0byByZW1vdmUgcGFydGljdWxhciB0YXNrcyBmcm9tIHBhZ2VcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIC8vIGdldCBJZCBvZiBhIGJ1dHRvbiB0byB3aGljaCBsaXN0ZW5lciBpcyBhc3NpZ25lZFxuICAgIGxldCBidG5JZCA9IGUuY3VycmVudFRhcmdldC5pZDtcbiAgICAvLyBnZXQgb25seSBudW1iZXIgYWZ0ZXIgdGhlIGh5cGhlbiBmcm9tIElkXG4gICAgbGV0IG51bWJlciA9IGJ0bklkLnNwbGl0KFwiLVwiKVsxXTtcbiAgICAvLyBCZWZvcmUgcmVtb3ZpbmcgYW4gaXRlbSBtYWtlIHN1cmUgaGlzIGRldGFpbHMgYXJlIG5vdCBzaG93blxuICAgIC8vIElmIHRoZXkgYXJlIHRoZW4gaGlkZSB0aGVtXG5cbiAgICAvLyByZW1vdmUgaXRlbSBmcm9tIHRoZSBhcnJheSBieSB0aGF0IG51bWJlclxuICAgIGFyci5zcGxpY2UobnVtYmVyLCAxKTtcbiAgICAvLyBSZXJlbmRlciBhcnJheVxuICAgIHJlbmRlckFsbFRhc2tzRnJvbShhcnIpO1xuICAgIC8vIEF2b2lkIGZpcmluZyBwYXJlbnQgZWxlbWVudCBsaXN0ZW5lciBhZnRlciBjbGlja2luZyBvbiB0aGUgYnV0dG9uXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IGRlbGV0ZVRhc2tzRnJvbSB9O1xuIiwiY29uc3QgdGFza0ZhY3RvcnkgPSBmdW5jdGlvbiAoe1xuICB0aXRsZSA9IFwiXCIsXG4gIGZyb20gPSBcIlwiLFxuICBkYXRlID0gXCJcIixcbiAgcHJpb3JpdHkgPSBcImxvd1wiLFxuICBub3RlID0gXCJcIixcbiAgZG9uZSA9IGZhbHNlLFxufSkge1xuICByZXR1cm4geyB0aXRsZSwgZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUsIGRvbmUgfTtcbn07XG5cbmV4cG9ydCB7IHRhc2tGYWN0b3J5IH07XG4iLCJpbXBvcnQgQ2FsZW5kYXIgZnJvbSBcIi4uLy4uL0lDT05TL2NhbGVuZGFyLnN2Z1wiO1xuaW1wb3J0IE5vdGUgZnJvbSBcIi4uLy4uL0lDT05TL2VkaXQuc3ZnXCI7XG5pbXBvcnQgKiBhcyBEZWxldGVUYXNrQnRucyBmcm9tIFwiLi9kZWxldGUuanNcIjtcbmltcG9ydCAqIGFzIERldGFpbHNUb2dnbGUgZnJvbSBcIi4vZGV0YWlsc1RvZ2dsZS5qc1wiO1xuXG5mdW5jdGlvbiByZW5kZXJBbGxUYXNrc0Zyb20oYXJyKSB7XG4gIC8vIENsZWFyIGFsbCBwcmV2aW91c2x5IHJlbmRlcmVkIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2VcbiAgY2xlYXJDb250ZW50T2YoXCJ0b2Rvc1wiKTtcbiAgLy9SZW5kZXIgZWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSB0byB0aGUgcGFnZVxuICBmb3IgKGxldCBbaW5kZXgsIGl0ZW1dIG9mIGFyci5lbnRyaWVzKCkpIHtcbiAgICByZW5kZXJUYXNrKGluZGV4LCBpdGVtKTtcbiAgfVxuICAvLyBNYWtlIGRlbGV0ZSBidXR0b25zIG9uIGNsaWNrIHJlbW92ZSB0YXNrIHRvIHdoaWNoIHRoZXkgYXJlIGFzc2lnbmVkXG4gIERlbGV0ZVRhc2tCdG5zLmRlbGV0ZVRhc2tzRnJvbShhcnIpO1xuICAvLyBNYWtlIGVhY2ggdGFzayBzaG93IGl0cyBkZXRhaWxzIG9uIGNsaWNrXG4gIERldGFpbHNUb2dnbGUudGFza3NUb2dnbGVEZXRhaWxzKGFycik7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudE9mKGlkKSB7XG4gIC8vIFJlbW92ZSBhbnkgY2hpbGQgb2YgdGhlIGVsZW1lbnQgd2l0aCBpZFxuICBsZXQgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICB3aGlsZSAoY29udGVudENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY29udGVudENvbnRhaW5lci5yZW1vdmVDaGlsZChjb250ZW50Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRhc2soaSwgdGFzaykge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zXCIpLmFwcGVuZChjcmVhdGVUYXNrKGksIHRhc2spKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhpLCB0YXNrKSB7XG4gIC8vIGNyZWF0ZSBsaXN0IGVsZW1lbnQgd2l0aCBhIGNsYXNzICd0b2RvJ1xuICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kb1wiKTtcbiAgbGkuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRhc2stJHtpfWApO1xuICAvLyBBcHBlbmQgbGFiZWwsIGlucHV0LCBkaXYgYW5kIGJ1dHRvbiB0byBpdFxuICBsaS5hcHBlbmQoY3JlYXRlTGFiZWwoaSkpO1xuICBsaS5hcHBlbmQoY3JlYXRlSW5wdXQoaSkpO1xuICBsaS5hcHBlbmQoXG4gICAgY3JlYXRlQ29udGVudCh0YXNrLnRpdGxlLCB0YXNrLmZyb20sIHRhc2suZGF0ZSwgdGFzay5wcmlvcml0eSwgdGFzay5ub3RlKVxuICApO1xuICBsaS5hcHBlbmQoY3JlYXRlRGVsZXRlQnRuKGkpKTtcblxuICByZXR1cm4gbGk7XG59XG5cbi8vIExBQkVMXG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGkpIHtcbiAgLy8gcmV0dXJucyBsYWJlbCBmb3IgXCJ0b2RvY2hlY2tib3hcIiArIGlcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5odG1sRm9yID0gYHRvZG9jaGVja2JveCR7aX1gO1xuICBsYWJlbC5hcHBlbmQoY3JlYXRlRG9uZUljb24oKSk7XG4gIHJldHVybiBsYWJlbDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRG9uZUljb24oKSB7XG4gIC8vIGNyZWF0ZSBpY29uIGNvbnRhaW5lclxuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1pY29uLWNvbnRhaW5lclwiKTtcbiAgLy8gY3JlYXRlIGljb25cbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW9uLWljb25cIik7XG4gIGljb24uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImNoZWNrbWFyay1vdXRsaW5lXCIpO1xuICAvLyBhcHBlbmQgaWNvbiB0byBjb250YWluZXJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBJTlBVVFxuXG5mdW5jdGlvbiBjcmVhdGVJbnB1dChpKSB7XG4gIC8vIENyZWF0ZSBpbnB1dCBjaGVja2JveCBlbGVtZW50IGFmdGVyIHRoZSBsYWJlbFxuICBsZXQgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIC8vIEFkZCBhdHRyaWJ1dGVzXG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLWNoZWNrYm94XCIpO1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdG9kb2NoZWNrYm94LSR7aX1gKTtcbiAgcmV0dXJuIGNoZWNrYm94O1xufVxuXG4vLyBDT05URU5UID0gdGFzayB0aXRsZSBhbmQgZGV0YWlsc1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KHRpdGxlLCBmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLXRleHRcIik7XG4gIC8vIEFwcGVuZCB0aXRsZSBhbmQgZGV0YWlscyB0byBjb250ZW50XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUodGl0bGUpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVEZXRhaWxzKGZyb20sIGRhdGUsIHByaW9yaXR5LCBub3RlKSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHN0cikge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gc3RyO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURldGFpbHMoZnJvbSwgZGF0ZSwgcHJpb3JpdHksIG5vdGUpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGV0YWlsc1wiKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVGcm9tKGZyb20pKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVEdWUoZGF0ZSkpO1xuICBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZVByaW9yaXR5KHByaW9yaXR5KSk7XG4gIGRldGFpbHMuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZShub3RlKSk7XG4gIHJldHVybiBkZXRhaWxzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGcm9tKGZyb20pIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZyb20tcHJvamVjdFwiKTtcbiAgaWYgKGZyb20pIHNwYW4udGV4dENvbnRlbnQgPSBgRnJvbSAke2Zyb219YDtcbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUR1ZShkYXRlKSB7XG4gIGxldCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZHVlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZHVlLWRhdGVcIik7XG4gIGlmIChkYXRlKSB7XG4gICAgZHVlLmFwcGVuZENoaWxkKGNyZWF0ZUNhbGVuZGFySW1hZ2UoKSk7XG4gICAgZHVlLmFwcGVuZENoaWxkKGNyZWF0ZVNwYW5Gb3JEYXRlKGRhdGUpKTtcbiAgfVxuICByZXR1cm4gZHVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDYWxlbmRhckltYWdlKCkge1xuICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBDYWxlbmRhcik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJDYWxlbmRhclwiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMTJweFwiKTtcblxuICByZXR1cm4gaW1nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuRm9yRGF0ZShkYXRlKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBgRHVlICR7ZGF0ZX1gO1xuICByZXR1cm4gc3Bhbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJpb3JpdHkobGV2ZWwpIHtcbiAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHByaW9yaXR5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGAke2xldmVsfS1wcmlvcml0eWApO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChjcmVhdGVTcGFuRm9yUHJpb3JpdHkobGV2ZWwpKTtcbiAgcmV0dXJuIHByaW9yaXR5O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTcGFuRm9yUHJpb3JpdHkobGV2ZWwpIHtcbiAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaWYgKGxldmVsICE9PSBcImxvd1wiKVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBgJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIobGV2ZWwpfSBwcmlvcml0eWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGUobm90ZSkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibm90ZS1wcmVzZW5jZVwiKTtcblxuICBpZiAobm90ZSkge1xuICAgIC8vIGNyZWF0ZSBhbmQgQXBwZW5kIE5vdGUgSWNvblxuICAgIGxldCBub3RlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbm90ZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIE5vdGUpO1xuICAgIG5vdGVJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBlblwiKTtcbiAgICBub3RlSWNvbi5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEycHhcIik7XG5cbiAgICAvLyBjcmVhdGUgYW5kIGFwcGVuZCB0ZXh0XG4gICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCJOb3RlXCI7XG5cbiAgICBzcGFuLmFwcGVuZENoaWxkKG5vdGVJY29uKTtcbiAgICBzcGFuLmFwcGVuZENoaWxkKHRleHQpO1xuICB9XG4gIHJldHVybiBzcGFuO1xufVxuXG4vLyBERUxFVEUgQlVUVE9OXG5mdW5jdGlvbiBjcmVhdGVEZWxldGVCdG4oaSkge1xuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XG4gIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlbGV0ZS10b2RvLWJ0blwiKTtcbiAgYnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGBkZWxldGVidG4tJHtpfWApO1xuXG4gIC8vIGNyZWF0ZSBhbiBpY29uIGFuZCBhcHBlbmQgaXQgdG8gYnV0dG9uXG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlvbi1pY29uXCIpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjbG9zZS1jaXJjbGVcIik7XG5cbiAgYnRuLmFwcGVuZENoaWxkKGljb24pO1xuXG4gIHJldHVybiBidG47XG59XG5cbmV4cG9ydCB7IHJlbmRlckFsbFRhc2tzRnJvbSB9O1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=