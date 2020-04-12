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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n@keyframes rotation {\n  0% {\n    transform: rotate(0); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes appearFromRightProject {\n  0% {\n    left: 30px;\n    opacity: 0; }\n  100% {\n    left: 0px;\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  user-select: none; }\n\nbody,\nhtml {\n  height: 100%;\n  margin: 0; }\n\nbody {\n  font-family: \"Sen\", sans-serif;\n  line-height: 1.25;\n  background: #e9e9e9; }\n\n#content {\n  display: grid;\n  height: 100%;\n  grid-template-rows: 60px auto;\n  grid-template-columns: 300px auto 330px;\n  grid-template-areas: \"header header header\" \"projects main todo-misc\"; }\n  #content.broad {\n    grid-template-columns: 68px auto 330px; }\n\n/* --- TOP of the PAGE : HEADER --- */\nheader {\n  grid-area: header;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  justify-content: center;\n  background: #106877;\n  color: #f4f4f4;\n  font-size: 1.9em;\n  font-weight: 900;\n  padding: 0;\n  width: 100%;\n  font-family: \"Permanent Marker\", cursive;\n  letter-spacing: 5px; }\n  header #menu-icon {\n    margin-right: auto;\n    margin-left: 0;\n    font-size: 48px;\n    cursor: pointer;\n    padding: 10px; }\n    header #menu-icon:hover {\n      background: #0b505c; }\n  header #header-title {\n    margin-right: auto; }\n  header #socials {\n    margin-right: 10px;\n    font-size: 48px;\n    cursor: pointer; }\n\n/* LEFT SIDE OF THE PAGE: PROJECTS */\n#project-container {\n  grid-area: projects;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  -webkit-box-shadow: 8px 0px 5px -4px #cacaca;\n  -moz-box-shadow: 8px 0px 5px -4px #cacaca;\n  box-shadow: 8px 0px 5px -4px #cacaca;\n  /* LEFT-SIDE OF THE PAGE: User Input*/ }\n  #project-container #project-list {\n    width: 280px;\n    max-width: 280px; }\n    #project-container #project-list.broad {\n      width: 68px; }\n    #project-container #project-list .project {\n      margin: 10px 0;\n      padding: 10px;\n      border-radius: 5px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      word-wrap: break-word;\n      white-space: normal;\n      overflow: hidden; }\n      #project-container #project-list .project.broad {\n        margin: 10px 0;\n        padding: 10px 10px 10px 22px;\n        border-radius: 0; }\n      #project-container #project-list .project.active {\n        color: #11998e;\n        font-weight: 900; }\n      #project-container #project-list .project:hover .delete-project-btn {\n        background: #f0f0f0;\n        visibility: visible;\n        animation: appearFromRightProject 0.3s ease-out forwards; }\n      #project-container #project-list .project:not(.active):hover {\n        background: #f0f0f0;\n        cursor: pointer; }\n      #project-container #project-list .project .project-icon {\n        font-size: 24px;\n        margin-right: 20px; }\n        #project-container #project-list .project .project-icon.broad {\n          margin-right: 0; }\n      #project-container #project-list .project .project-title-count-container {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start; }\n        #project-container #project-list .project .project-title-count-container.broad {\n          display: none; }\n      #project-container #project-list .project .project-name {\n        width: 155px;\n        max-width: 155px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n      #project-container #project-list .project .count-todos {\n        font-size: 0.8em;\n        font-weight: 900;\n        margin-left: auto;\n        width: 29px;\n        padding-right: 5px; }\n      #project-container #project-list .project .delete-project-btn {\n        visibility: hidden;\n        position: relative;\n        font-size: 24px;\n        margin-left: auto;\n        outline: none;\n        border: none;\n        background: #fff;\n        color: #c5c5c5;\n        cursor: pointer;\n        transition: color 0.2s; }\n        #project-container #project-list .project .delete-project-btn.broad {\n          display: none; }\n        #project-container #project-list .project .delete-project-btn:hover {\n          color: #999999; }\n        #project-container #project-list .project .delete-project-btn:focus {\n          color: #6e6e6e; }\n  #project-container #new-project-form {\n    width: 250px;\n    max-width: 280px;\n    position: relative;\n    margin-left: 15px;\n    margin-right: 0;\n    display: flex;\n    /* Input */\n    /* Submit button */ }\n    #project-container #new-project-form.broad {\n      width: 68px;\n      margin: 0; }\n    #project-container #new-project-form #new-project {\n      border: 0;\n      border-bottom: 2px solid #6b6b6b;\n      margin-left: 2px;\n      margin-right: auto;\n      padding: 9px 0;\n      outline: 0;\n      font-size: 1em;\n      color: #6b6b6b;\n      background: transparent;\n      font-family: \"Sen\", sans-serif; }\n      #project-container #new-project-form #new-project.broad {\n        display: none; }\n      #project-container #new-project-form #new-project:focus {\n        transition: 0.7s;\n        color: #11998e;\n        border-bottom: 2px solid #38ef7d; }\n        #project-container #new-project-form #new-project:focus::placeholder {\n          transition: 0.7s;\n          color: #11998e; }\n    #project-container #new-project-form #submit-project {\n      background: #fff;\n      display: inline-block;\n      border: none;\n      position: relative;\n      top: 0px;\n      left: 10px;\n      text-decoration: none;\n      font-size: 24px;\n      cursor: pointer;\n      text-align: center;\n      padding: 6px; }\n      #project-container #new-project-form #submit-project.broad {\n        padding: 0;\n        left: 4px;\n        padding: 7px 18px; }\n      #project-container #new-project-form #submit-project ion-icon {\n        --ionicon-stroke-width: 48px;\n        color: #6b6b6b; }\n      #project-container #new-project-form #submit-project:focus {\n        outline: none; }\n      #project-container #new-project-form #submit-project::after {\n        content: \"\";\n        position: absolute;\n        z-index: 0;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: 2px solid #fff;\n        border-radius: 5px;\n        transition: 0.5s; }\n      #project-container #new-project-form #submit-project:hover {\n        color: #11998e; }\n        #project-container #new-project-form #submit-project:hover::after {\n          border: 2px solid #38ef7d;\n          border-radius: 5px; }\n        #project-container #new-project-form #submit-project:hover ion-icon {\n          color: #11998e; }\n\n/* Middle: Project title, todo tasks*/\nmain {\n  grid-area: main;\n  min-width: 377px;\n  background: #fff;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-shadow: 0px 0px 5px 2px #cacaca;\n  -moz-box-shadow: 0px 0px 5px 2px #cacaca;\n  box-shadow: 0px 0px 5px 2px #cacaca;\n  /* User input todo tasks*/ }\n  @media screen and (max-width: 1024px) {\n    main {\n      grid-column: 2 / 4; } }\n  main #project-title {\n    margin-bottom: 20px;\n    font-weight: 900;\n    font-size: 1.4em; }\n  main .todo {\n    position: relative;\n    width: 100%;\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 40px auto 20px;\n    grid-template-areas: \"checkbox todotext btn\";\n    justify-items: start;\n    align-items: center;\n    margin-bottom: 15px;\n    padding: 5px 15px;\n    border: 1px solid lightgrey;\n    border-radius: 5px;\n    cursor: pointer;\n    /* Custom made checkbox with after element */\n    /* Text of the todo task with details */ }\n    main .todo:hover {\n      -webkit-box-shadow: 0px 0px 5px 0px #e4e4e4;\n      -moz-box-shadow: 0px 0px 5px 0px #e4e4e4;\n      box-shadow: 0px 0px 5px 0px #e4e4e4; }\n    main .todo:hover .delete-todo-btn {\n      background: #fff;\n      visibility: visible;\n      animation: appearFromRightProject 0.3s ease-out forwards; }\n    main .todo label {\n      grid-area: checkbox; }\n      main .todo label .todo-icon-container {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 30px;\n        height: 30px;\n        transition: 0.7s; }\n        main .todo label .todo-icon-container::after {\n          visibility: visible;\n          content: \"\";\n          position: absolute;\n          z-index: 0;\n          left: 0;\n          top: 0;\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box;\n          border: 2px solid #c5c5c5;\n          border-radius: 50%;\n          cursor: pointer;\n          transition: 0.7s; }\n        main .todo label .todo-icon-container ion-icon {\n          visibility: hidden;\n          font-size: 24px;\n          --ionicon-stroke-width: 48px; }\n        main .todo label .todo-icon-container:hover::after {\n          border: 2px solid #e2b0e9; }\n        main .todo label .todo-icon-container:hover ion-icon {\n          color: #e2b0e9;\n          visibility: visible;\n          animation: fadeIn 0.5s ease-out; }\n    main .todo .todo-checkbox {\n      display: none; }\n    main .todo .todo-text {\n      grid-area: todotext;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around; }\n      main .todo .todo-text .todo-title {\n        font-size: 1.15em; }\n      main .todo .todo-text .details {\n        font-size: 0.8em; }\n        main .todo .todo-text .details .from-project,\n        main .todo .todo-text .details .due-date,\n        main .todo .todo-text .details .medium-priority,\n        main .todo .todo-text .details .high-priority,\n        main .todo .todo-text .details .note-presence {\n          margin-right: 8px; }\n        main .todo .todo-text .details span img {\n          position: relative;\n          top: 2px;\n          margin-right: 4px; }\n        main .todo .todo-text .details span.overdue-date {\n          color: red; }\n        main .todo .todo-text .details span.high-priority {\n          color: #e100ff; }\n        main .todo .todo-text .details span.medium-priority {\n          color: #3227ce; }\n    main .todo .delete-todo-btn {\n      grid-area: btn;\n      visibility: hidden;\n      position: relative;\n      font-size: 24px;\n      outline: none;\n      border: none;\n      background: #fff;\n      color: #d4d4d4;\n      cursor: pointer;\n      transition: color 0.2s; }\n      main .todo .delete-todo-btn:hover {\n        color: #b8b8b8; }\n      main .todo .delete-todo-btn:focus {\n        color: #929292; }\n  main hr {\n    position: relative;\n    bottom: 20px;\n    margin-top: auto;\n    margin-right: -20px;\n    margin-left: -20px;\n    height: 10px;\n    border: 0;\n    box-shadow: 0 -10px 10px -10px #8c8c8c inset; }\n  main #new-todo-form {\n    display: flex;\n    /* Input */\n    /* Submit button */ }\n    main #new-todo-form #new-todo {\n      width: 100%;\n      border: 0;\n      border-bottom: 2px solid #6b6b6b;\n      margin-left: 2px;\n      margin-right: auto;\n      padding: 9px 0;\n      outline: 0;\n      font-size: 1em;\n      color: #6b6b6b;\n      background: transparent;\n      font-family: \"Sen\", sans-serif; }\n      main #new-todo-form #new-todo:focus {\n        transition: 0.7s;\n        color: #11998e;\n        border-bottom: 2px solid #38ef7d; }\n        main #new-todo-form #new-todo:focus::placeholder {\n          transition: 0.7s;\n          color: #11998e; }\n    main #new-todo-form #submit-todo {\n      background: #fff;\n      display: inline-block;\n      border: none;\n      position: relative;\n      top: 0px;\n      left: 10px;\n      text-decoration: none;\n      font-size: 24px;\n      cursor: pointer;\n      text-align: center;\n      padding: 6px; }\n      main #new-todo-form #submit-todo ion-icon {\n        --ionicon-stroke-width: 48px;\n        color: #6b6b6b; }\n      main #new-todo-form #submit-todo:focus {\n        outline: none; }\n      main #new-todo-form #submit-todo::after {\n        content: \"\";\n        position: absolute;\n        z-index: 0;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: 2px solid #fff;\n        border-radius: 5px;\n        transition: 0.5s; }\n      main #new-todo-form #submit-todo:hover {\n        color: #11998e; }\n        main #new-todo-form #submit-todo:hover::after {\n          border: 2px solid #38ef7d;\n          border-radius: 5px; }\n        main #new-todo-form #submit-todo:hover ion-icon {\n          color: #11998e; }\n\n/* Right side of the page */\n#todo-misc-container {\n  grid-area: todo-misc;\n  background: #e9e9e9;\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  z-index: 1; }\n  @media screen and (max-width: 1024px) {\n    #todo-misc-container {\n      -webkit-box-shadow: -3px 0px 5px -2px #cacaca;\n      -moz-box-shadow: -3px 0px 5px -2px #cacaca;\n      box-shadow: -3px 0px 5px -2px #cacaca; } }\n  #todo-misc-container #todo-name-changer-container,\n  #todo-misc-container #date-changer,\n  #todo-misc-container #priority-container,\n  #todo-misc-container #note-container {\n    background: #fff;\n    margin-right: 0px;\n    margin-top: 0px;\n    border-bottom: 2px solid lightgrey;\n    border-left: 2px solid lightgrey;\n    padding: 15px;\n    -webkit-box-shadow: -3px 0px 5px -2px #cacaca;\n    -moz-box-shadow: -3px 0px 5px -2px #cacaca;\n    box-shadow: -3px 0px 5px -2px #cacaca; }\n    #todo-misc-container #todo-name-changer-container #date,\n    #todo-misc-container #date-changer #date,\n    #todo-misc-container #priority-container #date,\n    #todo-misc-container #note-container #date {\n      color: #6b6b6b; }\n  #todo-misc-container #todo-name-changer-container {\n    height: 60px;\n    border-radius: 5px 0 0 0;\n    -webkit-box-shadow: -2px -2px 5px -1px #cacaca;\n    -moz-box-shadow: -2px -2px 5px -1px #cacaca;\n    box-shadow: -2px -2px 5px -1px #cacaca; }\n    #todo-misc-container #todo-name-changer-container textarea {\n      height: 40px; }\n  #todo-misc-container #note-container {\n    height: 200px;\n    -webkit-box-shadow: -3px 4px 5px -2px #cacaca;\n    -moz-box-shadow: -3px 4px 5px -2px #cacaca;\n    box-shadow: -3px 4px 5px -2px #cacaca; }\n    #todo-misc-container #note-container textarea {\n      height: 160px; }\n  #todo-misc-container #date-changer,\n  #todo-misc-container #priority-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n    #todo-misc-container #date-changer #priority-levels .low-priority:hover,\n    #todo-misc-container #priority-container #priority-levels .low-priority:hover {\n      color: green; }\n    #todo-misc-container #date-changer #priority-levels .medium-priority:hover,\n    #todo-misc-container #priority-container #priority-levels .medium-priority:hover {\n      color: #3227ce; }\n    #todo-misc-container #date-changer #priority-levels .medium-priority:hover ~ .low-priority,\n    #todo-misc-container #priority-container #priority-levels .medium-priority:hover ~ .low-priority {\n      color: #3227ce; }\n    #todo-misc-container #date-changer #priority-levels .high-priority:hover,\n    #todo-misc-container #priority-container #priority-levels .high-priority:hover {\n      color: #e100ff; }\n    #todo-misc-container #date-changer #priority-levels ion-icon,\n    #todo-misc-container #priority-container #priority-levels ion-icon {\n      font-size: 16px;\n      cursor: pointer; }\n    #todo-misc-container #date-changer #date-remover ion-icon,\n    #todo-misc-container #priority-container #date-remover ion-icon {\n      position: relative;\n      top: 4px;\n      color: #6b6b6b;\n      cursor: pointer;\n      --ionicon-stroke-width: 48px; }\n      #todo-misc-container #date-changer #date-remover ion-icon:hover,\n      #todo-misc-container #priority-container #date-remover ion-icon:hover {\n        color: black; }\n  #todo-misc-container .misc-title {\n    font-size: 1.1em;\n    color: #6b6b6b;\n    width: 120px; }\n  #todo-misc-container textarea {\n    background: #fff;\n    outline: none;\n    resize: none;\n    overflow: hidden;\n    width: 100%;\n    border: none;\n    font-family: \"Sen\", sans-serif;\n    font-size: 1.1em; }\n    #todo-misc-container textarea::placeholder {\n      color: #6b6b6b; }\n    #todo-misc-container textarea:focus::placeholder {\n      color: #11998e; }\n  #todo-misc-container input[type=\"date\"] {\n    outline: none;\n    border: none;\n    cursor: pointer; }\n  #todo-misc-container #close-details-btn {\n    font-size: 48px;\n    width: 62px; }\n    #todo-misc-container #close-details-btn ion-icon {\n      --ionicon-stroke-width: 48px;\n      background: #fff;\n      border-radius: 0 0 5px 5px;\n      border-left: 2px solid lightgrey;\n      border-right: 2px solid lightgrey;\n      border-bottom: 2px solid lightgrey;\n      width: 60px;\n      color: #c5c5c5;\n      cursor: pointer;\n      -webkit-box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca;\n      -moz-box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca;\n      box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca; }\n      #todo-misc-container #close-details-btn ion-icon:hover {\n        color: #6e6e6e; }\n", ""]);
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

var tasks = _toConsumableArray(_tasks_defaults_js__WEBPACK_IMPORTED_MODULE_7__["get"]()); // Make button New Task add task to a defined array


_tasks_add_js__WEBPACK_IMPORTED_MODULE_5__["addTaskTo"](tasks);
document.getElementById("submit-project").addEventListener("click", function (event) {
  event.preventDefault();
  console.table(tasks);
});

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


function addTaskTo(arr) {
  var submitTodoBtn = document.getElementById("submit-todo");
  submitTodoBtn.addEventListener("click", function (event) {
    // Prevent default submit behavior
    event.preventDefault(); // Get task name from User and add it to tasks array

    pushTaskTo(arr);
    console.table(arr);
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ICONS_calendar_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ICONS/calendar.svg */ "./src/ICONS/calendar.svg");
/* harmony import */ var _ICONS_calendar_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ICONS_calendar_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ICONS_edit_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ICONS/edit.svg */ "./src/ICONS/edit.svg");
/* harmony import */ var _ICONS_edit_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ICONS_edit_svg__WEBPACK_IMPORTED_MODULE_1__);



function createNewTask(_ref) {
  var task = _ref.task;
} // Example of creating a one todo


document.getElementById("todos").append(createTodoLi(12));

function createTodoLi(i) {
  // create list element with a class 'todo'
  var li = document.createElement("li");
  li.setAttribute("class", "todo"); // Append label, input, div and button to it

  li.append(createLabel(i));
  li.append(createInput(i));
  li.append(createContent("Hello", "Project 0", "11.02.2020", "medium"));
  return li;
}

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
}

function createInput(i) {
  // Create input checkbox element after the label
  var checkbox = document.createElement("input"); // Add attributes

  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("class", "todo-checkbox");
  checkbox.setAttribute("id", "todocheckbox".concat(i));
  return checkbox;
}

function createContent(title, from, date, priority) {
  var content = document.createElement("div");
  content.setAttribute("class", "todo-text"); // Append title and details to content

  content.appendChild(createTitle(title));
  content.appendChild(createDetails(from, date, priority));
  return content;
}

function createTitle(str) {
  var title = document.createElement("div");
  title.setAttribute("class", "todo-title");
  title.textContent = str;
  return title;
}

function createDetails(from, date, priority) {
  var details = document.createElement("div");
  details.setAttribute("class", "details");
  details.appendChild(createFrom(from));
  details.appendChild(createDue(date));
  details.appendChild(createPriority(priority));
  details.appendChild(createNote());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSUNPTlMvY2FsZW5kYXIuc3ZnIiwid2VicGFjazovLy8uL3NyYy9JQ09OUy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL2RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9TQ1NTL3N0eWxlLnNjc3M/ODE0YiJdLCJuYW1lcyI6WyJNZW51QnRuIiwiUmVzaXplIiwidGFza3NTaG93RGV0YWlscyIsInRhc2tzIiwiRGVmYXVsdHMiLCJBZGRUYXNrQnRuIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsInRhYmxlIiwidG9kb0xpc3RTaG93RGV0YWlscyIsIkFycm93SGlkZURldGFpbHMiLCJ0b2RvVGFza3MiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidGFzayIsInNob3dEZXRhaWxzIiwiYXJyb3dCdG4iLCJkZXRhaWxzIiwibWFpbiIsImdldENvbXB1dGVkRGlzcGxheSIsImhpZGUiLCJzdHlsZSIsImdyaWRDb2x1bW4iLCJzaG93QXNGbGV4Iiwic2NyZWVuTGVzc1RoZW4xMDI0IiwiZWxlbWVudCIsImNvbXB1dGVkRGlzcGxheSIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZGlzcGxheSIsInNob3dQcm9qZWN0cyIsImJyb2FkZW5Qcm9qZWN0Q29udGFpbmVyIiwiZ2V0RWxlbWVudHNUb0Jyb2FkIiwidG9nZ2xlQnJvYWQiLCJtaW5pbWl6ZVByb2plY3RDb250YWluZXIiLCJhZGRCcm9hZCIsImNsYXNzTGlzdCIsImFkZCIsInRvZ2dsZSIsImNvbnRlbnQiLCJwcm9qZWN0TGlzdCIsInByb2plY3QiLCJwcm9qZWN0SWNvbiIsInByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyIiwiZGVsZXRlUHJvamVjdEJ0biIsIm5ld1Byb2plY3RGb3JtIiwibmV3UHJvamVjdCIsInN1Ym1pdFByb2plY3QiLCJlbGVtZW50cyIsInJlc3BvbnNpdmUiLCJtYXRjaE1lZGlhIiwiYWRkTGlzdGVuZXIiLCJtYXRjaGVzIiwiYWRkVGFza1RvIiwiYXJyIiwic3VibWl0VG9kb0J0biIsInB1c2hUYXNrVG8iLCJwdXNoIiwiZ2V0VGFzayIsInRhc2tGYWN0b3J5IiwidGl0bGUiLCJnZXRJbnB1dFZhbHVlIiwiY2xlYXJUYXNrSW5wdXQiLCJ2YWx1ZSIsImdldCIsImFsbFRhc2tzIiwiZnJvbSIsImRhdGUiLCJwcmlvcml0eSIsIm5vdGUiLCJkb25lIiwiY3JlYXRlTmV3VGFzayIsImFwcGVuZCIsImNyZWF0ZVRvZG9MaSIsImkiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjcmVhdGVMYWJlbCIsImNyZWF0ZUlucHV0IiwiY3JlYXRlQ29udGVudCIsImxhYmVsIiwiaHRtbEZvciIsImNyZWF0ZURvbmVJY29uIiwiY29udGFpbmVyIiwiaWNvbiIsImFwcGVuZENoaWxkIiwiY2hlY2tib3giLCJjcmVhdGVUaXRsZSIsImNyZWF0ZURldGFpbHMiLCJzdHIiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZUZyb20iLCJjcmVhdGVEdWUiLCJjcmVhdGVQcmlvcml0eSIsImNyZWF0ZU5vdGUiLCJzcGFuIiwiZHVlIiwiY3JlYXRlQ2FsZW5kYXJJbWFnZSIsImNyZWF0ZVNwYW5Gb3JEYXRlIiwiaW1nIiwiQ2FsZW5kYXIiLCJsZXZlbCIsImNyZWF0ZVNwYW5Gb3JQcmlvcml0eSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJub3RlSWNvbiIsIk5vdGUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyx3cUJBQXdxQixjQUFj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Q25CLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsZUFBM0IsRUFGb0IsQ0FJcEI7O0FBQ0EsTUFBSStCLFFBQVEsR0FBRzFHLFFBQVEsQ0FBQzBFLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtBQUNBZ0MsVUFBUSxDQUFDL0IsWUFBVCxDQUFzQixLQUF0QixFQUE2QmdDLHNEQUE3QjtBQUNBRCxVQUFRLENBQUMvQixZQUFULENBQXNCLEtBQXRCLEVBQTZCLEtBQTdCO0FBQ0ErQixVQUFRLENBQUMvQixZQUFULENBQXNCLE9BQXRCLEVBQStCLE1BQS9CLEVBUm9CLENBVXBCOztBQUNBLE1BQUlpQyxJQUFJLEdBQUc1RyxRQUFRLENBQUMwRSxhQUFULENBQXVCLE1BQXZCLENBQVg7QUFDQWtDLE1BQUksQ0FBQ25CLFdBQUwsR0FBbUIsTUFBbkI7QUFFQUssTUFBSSxDQUFDVixXQUFMLENBQWlCc0IsUUFBakI7QUFDQVosTUFBSSxDQUFDVixXQUFMLENBQWlCd0IsSUFBakI7QUFDQSxTQUFPZCxJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUM3SUQsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw4TUFBcUc7O0FBRXZJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBLDBCIiwiZmlsZSI6ImJ1bmRsZS40YTg3NWI0MGZlOGYxM2E0YTI1Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0pTL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0aW9uIHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGFwcGVhckZyb21SaWdodFByb2plY3Qge1xcbiAgMCUge1xcbiAgICBsZWZ0OiAzMHB4O1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgbGVmdDogMHB4O1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IH1cXG5cXG5ib2R5LFxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlNlblxcXCIsIHNhbnMtc2VyaWY7XFxuICBsaW5lLWhlaWdodDogMS4yNTtcXG4gIGJhY2tncm91bmQ6ICNlOWU5ZTk7IH1cXG5cXG4jY29udGVudCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2MHB4IGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IGF1dG8gMzMwcHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiIFxcXCJwcm9qZWN0cyBtYWluIHRvZG8tbWlzY1xcXCI7IH1cXG4gICNjb250ZW50LmJyb2FkIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2OHB4IGF1dG8gMzMwcHg7IH1cXG5cXG4vKiAtLS0gVE9QIG9mIHRoZSBQQUdFIDogSEVBREVSIC0tLSAqL1xcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogIzEwNjg3NztcXG4gIGNvbG9yOiAjZjRmNGY0O1xcbiAgZm9udC1zaXplOiAxLjllbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIlBlcm1hbmVudCBNYXJrZXJcXFwiLCBjdXJzaXZlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDsgfVxcbiAgaGVhZGVyICNtZW51LWljb24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMTBweDsgfVxcbiAgICBoZWFkZXIgI21lbnUtaWNvbjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogIzBiNTA1YzsgfVxcbiAgaGVhZGVyICNoZWFkZXItdGl0bGUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87IH1cXG4gIGhlYWRlciAjc29jaWFscyB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4vKiBMRUZUIFNJREUgT0YgVEhFIFBBR0U6IFBST0pFQ1RTICovXFxuI3Byb2plY3QtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogcHJvamVjdHM7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiA4cHggMHB4IDVweCAtNHB4ICNjYWNhY2E7XFxuICAtbW96LWJveC1zaGFkb3c6IDhweCAwcHggNXB4IC00cHggI2NhY2FjYTtcXG4gIGJveC1zaGFkb3c6IDhweCAwcHggNXB4IC00cHggI2NhY2FjYTtcXG4gIC8qIExFRlQtU0lERSBPRiBUSEUgUEFHRTogVXNlciBJbnB1dCovIH1cXG4gICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IHtcXG4gICAgd2lkdGg6IDI4MHB4O1xcbiAgICBtYXgtd2lkdGg6IDI4MHB4OyB9XFxuICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0LmJyb2FkIHtcXG4gICAgICB3aWR0aDogNjhweDsgfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCB7XFxuICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QuYnJvYWQge1xcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAyMnB4O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0LmFjdGl2ZSB7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdDpob3ZlciAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgYW5pbWF0aW9uOiBhcHBlYXJGcm9tUmlnaHRQcm9qZWN0IDAuM3MgZWFzZS1vdXQgZm9yd2FyZHM7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdDpub3QoLmFjdGl2ZSk6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWljb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1pY29uLmJyb2FkIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC10aXRsZS1jb3VudC1jb250YWluZXIuYnJvYWQge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtbmFtZSB7XFxuICAgICAgICB3aWR0aDogMTU1cHg7XFxuICAgICAgICBtYXgtd2lkdGg6IDE1NXB4O1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5jb3VudC10b2RvcyB7XFxuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgd2lkdGg6IDI5cHg7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuIHtcXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgICBjb2xvcjogI2M1YzVjNTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1idG4uYnJvYWQge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAuZGVsZXRlLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgICAgICAgY29sb3I6ICM5OTk5OTk7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1idG46Zm9jdXMge1xcbiAgICAgICAgICBjb2xvcjogIzZlNmU2ZTsgfVxcbiAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtIHtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIElucHV0ICovXFxuICAgIC8qIFN1Ym1pdCBidXR0b24gKi8gfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0uYnJvYWQge1xcbiAgICAgIHdpZHRoOiA2OHB4O1xcbiAgICAgIG1hcmdpbjogMDsgfVxcbiAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI25ldy1wcm9qZWN0IHtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2YjZiNmI7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgcGFkZGluZzogOXB4IDA7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBjb2xvcjogIzZiNmI2YjtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBmb250LWZhbWlseTogXFxcIlNlblxcXCIsIHNhbnMtc2VyaWY7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI25ldy1wcm9qZWN0LmJyb2FkIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI25ldy1wcm9qZWN0OmZvY3VzIHtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzhlZjdkOyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI25ldy1wcm9qZWN0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxuICAgICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Qge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiAwcHg7XFxuICAgICAgbGVmdDogMTBweDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogNnB4OyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdC5icm9hZCB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgbGVmdDogNHB4O1xcbiAgICAgICAgcGFkZGluZzogN3B4IDE4cHg7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0IGlvbi1pY29uIHtcXG4gICAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7XFxuICAgICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC41czsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM4ZWY3ZDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0OmhvdmVyIGlvbi1pY29uIHtcXG4gICAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG5cXG4vKiBNaWRkbGU6IFByb2plY3QgdGl0bGUsIHRvZG8gdGFza3MqL1xcbm1haW4ge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgbWluLXdpZHRoOiAzNzdweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCAjY2FjYWNhO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggI2NhY2FjYTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCAjY2FjYWNhO1xcbiAgLyogVXNlciBpbnB1dCB0b2RvIHRhc2tzKi8gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgIG1haW4ge1xcbiAgICAgIGdyaWQtY29sdW1uOiAyIC8gNDsgfSB9XFxuICBtYWluICNwcm9qZWN0LXRpdGxlIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAxLjRlbTsgfVxcbiAgbWFpbiAudG9kbyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IGF1dG8gMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImNoZWNrYm94IHRvZG90ZXh0IGJ0blxcXCI7XFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLyogQ3VzdG9tIG1hZGUgY2hlY2tib3ggd2l0aCBhZnRlciBlbGVtZW50ICovXFxuICAgIC8qIFRleHQgb2YgdGhlIHRvZG8gdGFzayB3aXRoIGRldGFpbHMgKi8gfVxcbiAgICBtYWluIC50b2RvOmhvdmVyIHtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCAjZTRlNGU0O1xcbiAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICNlNGU0ZTQ7XFxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICNlNGU0ZTQ7IH1cXG4gICAgbWFpbiAudG9kbzpob3ZlciAuZGVsZXRlLXRvZG8tYnRuIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgYW5pbWF0aW9uOiBhcHBlYXJGcm9tUmlnaHRQcm9qZWN0IDAuM3MgZWFzZS1vdXQgZm9yd2FyZHM7IH1cXG4gICAgbWFpbiAudG9kbyBsYWJlbCB7XFxuICAgICAgZ3JpZC1hcmVhOiBjaGVja2JveDsgfVxcbiAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC43czsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNjNWM1YzU7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzOyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyIGlvbi1pY29uIHtcXG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXI6aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2UyYjBlOTsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lcjpob3ZlciBpb24taWNvbiB7XFxuICAgICAgICAgIGNvbG9yOiAjZTJiMGU5O1xcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVJbiAwLjVzIGVhc2Utb3V0OyB9XFxuICAgIG1haW4gLnRvZG8gLnRvZG8tY2hlY2tib3gge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgbWFpbiAudG9kbyAudG9kby10ZXh0IHtcXG4gICAgICBncmlkLWFyZWE6IHRvZG90ZXh0O1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgfVxcbiAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAudG9kby10aXRsZSB7XFxuICAgICAgICBmb250LXNpemU6IDEuMTVlbTsgfVxcbiAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyB7XFxuICAgICAgICBmb250LXNpemU6IDAuOGVtOyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLmZyb20tcHJvamVjdCxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAuZHVlLWRhdGUsXFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgLm1lZGl1bS1wcmlvcml0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAuaGlnaC1wcmlvcml0eSxcXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyAubm90ZS1wcmVzZW5jZSB7XFxuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgc3BhbiBpbWcge1xcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgIHRvcDogMnB4O1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHNwYW4ub3ZlcmR1ZS1kYXRlIHtcXG4gICAgICAgICAgY29sb3I6IHJlZDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHNwYW4uaGlnaC1wcmlvcml0eSB7XFxuICAgICAgICAgIGNvbG9yOiAjZTEwMGZmOyB9XFxuICAgICAgICBtYWluIC50b2RvIC50b2RvLXRleHQgLmRldGFpbHMgc3Bhbi5tZWRpdW0tcHJpb3JpdHkge1xcbiAgICAgICAgICBjb2xvcjogIzMyMjdjZTsgfVxcbiAgICBtYWluIC50b2RvIC5kZWxldGUtdG9kby1idG4ge1xcbiAgICAgIGdyaWQtYXJlYTogYnRuO1xcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgY29sb3I6ICNkNGQ0ZDQ7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7IH1cXG4gICAgICBtYWluIC50b2RvIC5kZWxldGUtdG9kby1idG46aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICNiOGI4Yjg7IH1cXG4gICAgICBtYWluIC50b2RvIC5kZWxldGUtdG9kby1idG46Zm9jdXMge1xcbiAgICAgICAgY29sb3I6ICM5MjkyOTI7IH1cXG4gIG1haW4gaHIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm94LXNoYWRvdzogMCAtMTBweCAxMHB4IC0xMHB4ICM4YzhjOGMgaW5zZXQ7IH1cXG4gIG1haW4gI25ldy10b2RvLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAvKiBJbnB1dCAqL1xcbiAgICAvKiBTdWJtaXQgYnV0dG9uICovIH1cXG4gICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjbmV3LXRvZG8ge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzZiNmI2YjtcXG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICBwYWRkaW5nOiA5cHggMDtcXG4gICAgICBvdXRsaW5lOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI25ldy10b2RvOmZvY3VzIHtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuN3M7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzhlZjdkOyB9XFxuICAgICAgICBtYWluICNuZXctdG9kby1mb3JtICNuZXctdG9kbzpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbyB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiA2cHg7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbyBpb24taWNvbiB7XFxuICAgICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4O1xcbiAgICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86OmFmdGVyIHtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC41czsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAgICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzhlZjdkO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOmhvdmVyIGlvbi1pY29uIHtcXG4gICAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG5cXG4vKiBSaWdodCBzaWRlIG9mIHRoZSBwYWdlICovXFxuI3RvZG8tbWlzYy1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiB0b2RvLW1pc2M7XFxuICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgei1pbmRleDogMTsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyIHtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgICAgLW1vei1ib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7IH0gfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI3RvZG8tbmFtZS1jaGFuZ2VyLWNvbnRhaW5lcixcXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIsXFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyLFxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI25vdGUtY29udGFpbmVyIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDBweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICBib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICN0b2RvLW5hbWUtY2hhbmdlci1jb250YWluZXIgI2RhdGUsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI2RhdGUsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI2RhdGUsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNub3RlLWNvbnRhaW5lciAjZGF0ZSB7XFxuICAgICAgY29sb3I6ICM2YjZiNmI7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICN0b2RvLW5hbWUtY2hhbmdlci1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgMDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMnB4IC0ycHggNXB4IC0xcHggI2NhY2FjYTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAtMnB4IC0ycHggNXB4IC0xcHggI2NhY2FjYTtcXG4gICAgYm94LXNoYWRvdzogLTJweCAtMnB4IDVweCAtMXB4ICNjYWNhY2E7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3RvZG8tbmFtZS1jaGFuZ2VyLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgICAgaGVpZ2h0OiA0MHB4OyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjbm90ZS1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0zcHggNHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgIC1tb3otYm94LXNoYWRvdzogLTNweCA0cHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgYm94LXNoYWRvdzogLTNweCA0cHggNXB4IC0ycHggI2NhY2FjYTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjbm90ZS1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICAgIGhlaWdodDogMTYwcHg7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIsXFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubG93LXByaW9yaXR5OmhvdmVyLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLmxvdy1wcmlvcml0eTpob3ZlciB7XFxuICAgICAgY29sb3I6IGdyZWVuOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5OmhvdmVyLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eTpob3ZlciB7XFxuICAgICAgY29sb3I6ICMzMjI3Y2U7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHk6aG92ZXIgfiAubG93LXByaW9yaXR5LFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eTpob3ZlciB+IC5sb3ctcHJpb3JpdHkge1xcbiAgICAgIGNvbG9yOiAjMzIyN2NlOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAuaGlnaC1wcmlvcml0eTpob3ZlcixcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5oaWdoLXByaW9yaXR5OmhvdmVyIHtcXG4gICAgICBjb2xvcjogI2UxMDBmZjsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgaW9uLWljb24sXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyBpb24taWNvbiB7XFxuICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNkYXRlLXJlbW92ZXIgaW9uLWljb24sXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI2RhdGUtcmVtb3ZlciBpb24taWNvbiB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDogNHB4O1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiA0OHB4OyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjZGF0ZS1yZW1vdmVyIGlvbi1pY29uOmhvdmVyLFxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI2RhdGUtcmVtb3ZlciBpb24taWNvbjpob3ZlciB7XFxuICAgICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyIC5taXNjLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgY29sb3I6ICM2YjZiNmI7XFxuICAgIHdpZHRoOiAxMjBweDsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjFlbTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyIHRleHRhcmVhOmZvY3VzOjpwbGFjZWhvbGRlciB7XFxuICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjY2xvc2UtZGV0YWlscy1idG4ge1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIHdpZHRoOiA2MnB4OyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNjbG9zZS1kZXRhaWxzLWJ0biBpb24taWNvbiB7XFxuICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgIGNvbG9yOiAjYzVjNWM1O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDdweCAtMTNweCAjY2FjYWNhLCAwcHggNXB4IDEwcHggMHB4ICNjYWNhY2E7XFxuICAgICAgLW1vei1ib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCA3cHggLTEzcHggI2NhY2FjYSwgMHB4IDVweCAxMHB4IDBweCAjY2FjYWNhO1xcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAxNXB4IDdweCAtMTNweCAjY2FjYWNhLCAwcHggNXB4IDEwcHggMHB4ICNjYWNhY2E7IH1cXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjY2xvc2UtZGV0YWlscy1idG4gaW9uLWljb246aG92ZXIge1xcbiAgICAgICAgY29sb3I6ICM2ZTZlNmU7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2NhbGVuZGFyLjc1MDRjODg5ZmMyZDlkNGY1NDAwYmE2OThiMjU0Mzc3LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9lZGl0LjI5MjdmOGRlNDI2OGJhZThmMTFjNGRmZTNhZGM3MmI1LnN2Z1wiOyIsImltcG9ydCBcIi4uL1NDU1Mvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0ICogYXMgTWVudUJ0biBmcm9tIFwiLi9zdHlsZS9tZW51LmpzXCI7XG5pbXBvcnQgeyB0YXNrc1Nob3dEZXRhaWxzIH0gZnJvbSBcIi4vc3R5bGUvZGV0YWlscy5qc1wiO1xuaW1wb3J0ICogYXMgUmVzaXplIGZyb20gXCIuL3N0eWxlL3Jlc2l6ZS5qc1wiO1xuaW1wb3J0IHt9IGZyb20gXCIuL3Rhc2tzL2ZhY3RvcnkuanNcIjtcbmltcG9ydCAqIGFzIEFkZFRhc2tCdG4gZnJvbSBcIi4vdGFza3MvYWRkLmpzXCI7XG5pbXBvcnQge30gZnJvbSBcIi4vdGFza3MvcmVuZGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBEZWZhdWx0cyBmcm9tIFwiLi90YXNrcy9kZWZhdWx0cy5qc1wiO1xuXG4vLyBTdHlsZVxuTWVudUJ0bi5zaG93UHJvamVjdHMoKTtcblJlc2l6ZS5yZXNwb25zaXZlKCk7XG50YXNrc1Nob3dEZXRhaWxzKCk7XG5cbi8vIEFwcCBMb2dpY1xuXG4vLyBkZWZpbmUgdGFza3MgYXJyYXkgd2hpY2ggaXMgdG9kb2xpc3RcbmxldCB0YXNrcyA9IFsuLi5EZWZhdWx0cy5nZXQoKV07XG5cbi8vIE1ha2UgYnV0dG9uIE5ldyBUYXNrIGFkZCB0YXNrIHRvIGEgZGVmaW5lZCBhcnJheVxuQWRkVGFza0J0bi5hZGRUYXNrVG8odGFza3MpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1wcm9qZWN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS50YWJsZSh0YXNrcyk7XG59KTtcbiIsImltcG9ydCB7IHNjcmVlbkxlc3NUaGVuMTAyNCB9IGZyb20gXCIuL3Jlc2l6ZS5qc1wiO1xuXG5mdW5jdGlvbiB0YXNrc1Nob3dEZXRhaWxzKCkge1xuICAvLyBNYWtlIHRvZG8gdGFza3Mgc2hvdyBkZXRhaWxzIG9uIGNsaWNrIChmcm9tIHJpZ2h0IHNpZGUpXG4gIHRvZG9MaXN0U2hvd0RldGFpbHMoKTtcbiAgLy8gTWFrZSBidXR0b24gaW4gZGV0YWlscyBpbnRlcmFjdDogaGlkZSBkZXRhaWxzXG4gIEFycm93SGlkZURldGFpbHMoKTtcbn1cblxuZnVuY3Rpb24gdG9kb0xpc3RTaG93RGV0YWlscygpIHtcbiAgLy8gTWFrZSB0b2RvIGxpc3RzIHNob3cgZGV0YWlscyBvbmNsaWNrXG4gIGxldCB0b2RvVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb1wiKTtcbiAgZm9yIChsZXQgdGFzayBvZiB0b2RvVGFza3MpIHtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93RGV0YWlscygpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBBcnJvd0hpZGVEZXRhaWxzKCkge1xuICAvLyBNYWtlIEFycm93IGhpZGUgRGV0YWlscyBvbmNsaWNrXG4gIGxldCBhcnJvd0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZGV0YWlscy1idG5cIik7XG5cbiAgYXJyb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNob3dEZXRhaWxzKCkpO1xufVxuXG5mdW5jdGlvbiBzaG93RGV0YWlscygpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIC8vIElmIGRldGFpbHMgYXJlIHNob3duIHRoZW4gaGlkZSB0aGVtIGFuZCBtYWtlIG1haW4gdGFrZSBhbGwgdGhlIHNwYWNlXG4gIC8vIEVsc2UgU2hvdyBkZXRhaWxzIGFuZCBuYXJyb3cgbWFpbnMgdG8gZml0IHRoZSBtaWRkbGUgY29sdW1uXG4gIGlmIChnZXRDb21wdXRlZERpc3BsYXkoZGV0YWlscykgPT09IFwiZmxleFwiKSB7XG4gICAgaGlkZShkZXRhaWxzKTtcbiAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvNFwiO1xuICB9IGVsc2Uge1xuICAgIHNob3dBc0ZsZXgoZGV0YWlscyk7XG4gICAgLy8gSWYgc2NyZWVuIGlzIGxlc3MgdGhlbiAxMDI0IGxlYXZlIG1pZGRsZSBjb2x1bW4gd2lkZSBhbmQgcmlnaHQgY29sdW1uIG92ZXJsYXBcbiAgICBpZiAoIXNjcmVlbkxlc3NUaGVuMTAyNCgpKSBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvM1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkRGlzcGxheShlbGVtZW50KSB7XG4gIGxldCBjb21wdXRlZERpc3BsYXkgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKTtcbiAgcmV0dXJuIGNvbXB1dGVkRGlzcGxheTtcbn1cblxuZnVuY3Rpb24gc2hvd0FzRmxleChlbGVtZW50KSB7XG4gIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufVxuXG5mdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCB7IHRhc2tzU2hvd0RldGFpbHMsIGdldENvbXB1dGVkRGlzcGxheSB9O1xuIiwiZnVuY3Rpb24gc2hvd1Byb2plY3RzKCkge1xuICAvLyBNYWtlIG1lbnUgYnV0dG9uIGluIHRoZSB0b3AgbGVmdCBjb3JuZXIgZG8gd29yayAoY2hhbmdlIHByb2plY3RzIHRvIHdpZGUgb3IgbmFycm93KVxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYnJvYWRlblByb2plY3RDb250YWluZXIoKSk7XG59XG5cbmZ1bmN0aW9uIGJyb2FkZW5Qcm9qZWN0Q29udGFpbmVyKCkge1xuICAvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2UgYW5kIHRvZ2dsZSBhIGNsYXNzICdicm9hZCcgb24gZWFjaFxuICBmb3IgKGxldCBlbGVtZW50IG9mIGdldEVsZW1lbnRzVG9Ccm9hZCgpKSB7XG4gICAgdG9nZ2xlQnJvYWQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWluaW1pemVQcm9qZWN0Q29udGFpbmVyKCkge1xuICAvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2UgYW5kIHRvZ2dsZSBhIGNsYXNzICdicm9hZCcgb24gZWFjaFxuICBmb3IgKGxldCBlbGVtZW50IG9mIGdldEVsZW1lbnRzVG9Ccm9hZCgpKSB7XG4gICAgYWRkQnJvYWQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQnJvYWQoZWxlbWVudCkge1xuICAvLyBSZW1vdmUgY2xhc3MgJ2Jyb2FkJyBmcm9tIGFuIGVsZW1lbnRcbiAgLy8gdGhpcyBjbGFzcyBjaGFuZ2VzIGxlZnQtc2lkZSBwYWdlIG1lbnUgbWFraW5nIGl0IHNtYWxsZXJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnJvYWRcIik7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJyb2FkKGVsZW1lbnQpIHtcbiAgLy8gQWRkL3JlbW92ZSBjbGFzcyAnYnJvYWQnIHRvIGFuIGVsZW1lbnRcbiAgLy8gdGhpcyBjbGFzcyBjaGFuZ2VzIGxlZnQtc2lkZSBwYWdlIG1lbnUgbWFraW5nIGl0IHNtYWxsZXJcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYnJvYWRcIik7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRzVG9Ccm9hZCgpIHtcbiAgLy8gVGFrZSBzb21lIERPTSBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcbiAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdFwiKTtcbiAgbGV0IHByb2plY3RJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtaWNvblwiKTtcbiAgbGV0IHByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICBcInByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyIFwiXG4gICk7XG4gIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKTtcbiAgbGV0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1mb3JtXCIpO1xuICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3RcIik7XG4gIGxldCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtcHJvamVjdFwiKTtcblxuICAvLyBQdXQgdGhlbSBpbiB0aGUgYXJyYXkgYW5kIHJldHVybiBpdFxuICBsZXQgZWxlbWVudHMgPSBbXG4gICAgY29udGVudCxcbiAgICBwcm9qZWN0TGlzdCxcbiAgICAuLi5wcm9qZWN0LFxuICAgIC4uLnByb2plY3RJY29uLFxuICAgIC4uLnByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyLFxuICAgIC4uLmRlbGV0ZVByb2plY3RCdG4sXG4gICAgbmV3UHJvamVjdEZvcm0sXG4gICAgbmV3UHJvamVjdCxcbiAgICBzdWJtaXRQcm9qZWN0XG4gIF07XG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IHsgc2hvd1Byb2plY3RzLCBtaW5pbWl6ZVByb2plY3RDb250YWluZXIgfTtcbiIsImltcG9ydCB7IGdldENvbXB1dGVkRGlzcGxheSB9IGZyb20gXCIuL2RldGFpbHMuanNcIjtcbmltcG9ydCB7IG1pbmltaXplUHJvamVjdENvbnRhaW5lciB9IGZyb20gXCIuL21lbnUuanNcIjtcblxuZnVuY3Rpb24gcmVzcG9uc2l2ZSgpIHtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICAvLyBSZXNpemluZyB3aW5kb3cgbWFrZXMgbWlkZGxlIGNvbHVtbiBmaXRcbiAgd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDI0cHgpXCIpLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAvLyBJZiBzY3JlZW4gaXMgbmFycm93ZXIgdGhhbiAxMDI0cHggYW5kIGRldGFpbHMgYXJlIG9wZW4gKHJpZ2h0IHNpZGUgb2YgdGhlIHBhZ2UpXG4gICAgLy8gdGhhbiBtaW5pbWl6ZSBsZWZ0IHNpZGUgYW5kIG1ha2UgXCJtYWluXCIgZml0IHRoZSB3aG9sZSBzZWNvbmQgY29sdW1uXG4gICAgaWYgKHNjcmVlbkxlc3NUaGVuMTAyNCgpICYmIGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gICAgICBtaW5pbWl6ZVByb2plY3RDb250YWluZXIoKTtcbiAgICAgIC8vIERvZXNuJ3QgbWF0dGVyIHRoZSBzaXplIG9mIHRoZSBzY3JlZW4sXG4gICAgICAvLyBpZiBkZXRhaWxzIGFyZSBjbG9zZWQgJ21haW4nIGZpdCB0aGUgd2hvbGUgc2Vjb25kIGNvbHVtblxuICAgIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWREaXNwbGF5KGRldGFpbHMpID09PSBcIm5vbmVcIikge1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzRcIjtcbiAgICAgIC8vIEVsc2UgZm9yIGUuZy4gd2hlbiBzY3JlZW4gYXJlIHdpZGVyIHRoZW4gMTAyNHB4IGFuZFxuICAgICAgLy8gZGV0YWlscyBhcmUgb3BlbiwgdGhlbiBtYWluIGlzIHRoZSBjb2x1bW4gaW4gdGhlIG1pZGRsZVxuICAgIH0gZWxzZSB7XG4gICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvM1wiO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNjcmVlbkxlc3NUaGVuMTAyNCgpIHtcbiAgLy8gQ2hlY2sgaWYgc2NyZWVuIGlzIGxlc3MgdGhlbiAxMDI0cHggd2lkZVxuICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDI0cHgpXCIpLm1hdGNoZXM7XG59XG5cbi8vIFdoZW4gcmVzaXppbmcgd2luZG93IG1pZGRsZSBjb2x1bW4gcmVzaXplIGl0c2VsZiB0byBiZSByZXNwb25zaXZlXG5leHBvcnQgeyByZXNwb25zaXZlLCBzY3JlZW5MZXNzVGhlbjEwMjQgfTtcbiIsImltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuXG5mdW5jdGlvbiBhZGRUYXNrVG8oYXJyKSB7XG4gIGNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC10b2RvXCIpO1xuXG4gIHN1Ym1pdFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gUHJldmVudCBkZWZhdWx0IHN1Ym1pdCBiZWhhdmlvclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gR2V0IHRhc2sgbmFtZSBmcm9tIFVzZXIgYW5kIGFkZCBpdCB0byB0YXNrcyBhcnJheVxuICAgIHB1c2hUYXNrVG8oYXJyKTtcbiAgICBjb25zb2xlLnRhYmxlKGFycik7XG4gICAgcmV0dXJuIGFycjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hUYXNrVG8oYXJyKSB7XG4gIC8vIFB1c2ggdGFzayB0byBhcnJheVxuICBhcnIucHVzaChnZXRUYXNrKCkpO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrKCkge1xuICAvLyBHZXQgdXNlciBpbnB1dCB2YWx1ZSwgc2F2ZSBpdFxuICBsZXQgdGFzayA9IHRhc2tGYWN0b3J5KHsgdGl0bGU6IGdldElucHV0VmFsdWUoKSB9KTtcbiAgLy8gYW5kIGNsZWFyIGlucHV0XG4gIGNsZWFyVGFza0lucHV0KCk7XG4gIHJldHVybiB0YXNrO1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAvLyBHZXQgdXNlciBpbnB1dCB2YWx1ZSBhcyBOZXcgVGFzayA6IFNUUklOR1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdG9kb1wiKS52YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrSW5wdXQoKSB7XG4gIC8vIENsZWFyIHVzZXIgaW5wdXRcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdG9kb1wiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmV4cG9ydCB7IGdldFRhc2ssIGFkZFRhc2tUbyB9O1xuIiwiaW1wb3J0IHsgdGFza0ZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5LmpzXCI7XG5cbmZ1bmN0aW9uIGdldCgpIHtcbiAgLy8gVGhpcyBmdW5jdGluIHNpbXBseSBjcmVhdGUgYW4gYXJyYXkgd2l0aCBkZWZhdWx0IHRhc2tzIGluIGl0XG4gIGxldCBhbGxUYXNrcyA9IFtcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJMZWFybiBzdHVmZlwiLFxuICAgICAgZnJvbTogXCJQcm9qZWN0IDJcIixcbiAgICAgIGRhdGU6IFwiMTUuMDMuMjAyMFwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICBub3RlOiB0cnVlLFxuICAgIH0pLFxuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIGVuZ2xpc2hcIixcbiAgICAgIGRhdGU6IFwiMTAuMDEuMjAyMFwiLFxuICAgIH0pLFxuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIHN0dWZmXCIsXG4gICAgICBmcm9tOiBcIlByb2plY3QgMlwiLFxuICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgbm90ZTogdHJ1ZSxcbiAgICAgIGRvbmU6IHRydWUsXG4gICAgfSksXG4gIF07XG5cbiAgcmV0dXJuIGFsbFRhc2tzO1xufVxuXG5leHBvcnQgeyBnZXQgfTtcbiIsImNvbnN0IHRhc2tGYWN0b3J5ID0gZnVuY3Rpb24gKHtcbiAgdGl0bGUgPSBcIlwiLFxuICBmcm9tID0gXCJcIixcbiAgZGF0ZSA9IFwiXCIsXG4gIHByaW9yaXR5ID0gXCJsb3dcIixcbiAgbm90ZSA9IGZhbHNlLFxuICBkb25lID0gZmFsc2UsXG59KSB7XG4gIHJldHVybiB7IHRpdGxlLCBmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSwgZG9uZSB9O1xufTtcblxuZXhwb3J0IHsgdGFza0ZhY3RvcnkgfTtcbiIsImltcG9ydCBDYWxlbmRhciBmcm9tIFwiLi4vLi4vSUNPTlMvY2FsZW5kYXIuc3ZnXCI7XG5pbXBvcnQgTm90ZSBmcm9tIFwiLi4vLi4vSUNPTlMvZWRpdC5zdmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlTmV3VGFzayh7IHRhc2sgfSkge31cblxuLy8gRXhhbXBsZSBvZiBjcmVhdGluZyBhIG9uZSB0b2RvXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG9zXCIpLmFwcGVuZChjcmVhdGVUb2RvTGkoMTIpKTtcblxuZnVuY3Rpb24gY3JlYXRlVG9kb0xpKGkpIHtcbiAgLy8gY3JlYXRlIGxpc3QgZWxlbWVudCB3aXRoIGEgY2xhc3MgJ3RvZG8nXG4gIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvXCIpO1xuICAvLyBBcHBlbmQgbGFiZWwsIGlucHV0LCBkaXYgYW5kIGJ1dHRvbiB0byBpdFxuICBsaS5hcHBlbmQoY3JlYXRlTGFiZWwoaSkpO1xuICBsaS5hcHBlbmQoY3JlYXRlSW5wdXQoaSkpO1xuICBsaS5hcHBlbmQoY3JlYXRlQ29udGVudChcIkhlbGxvXCIsIFwiUHJvamVjdCAwXCIsIFwiMTEuMDIuMjAyMFwiLCBcIm1lZGl1bVwiKSk7XG5cbiAgcmV0dXJuIGxpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChpKSB7XG4gIC8vIHJldHVybnMgbGFiZWwgZm9yIFwidG9kb2NoZWNrYm94XCIgKyBpXG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuaHRtbEZvciA9IGB0b2RvY2hlY2tib3gke2l9YDtcbiAgbGFiZWwuYXBwZW5kKGNyZWF0ZURvbmVJY29uKCkpO1xuICByZXR1cm4gbGFiZWw7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURvbmVJY29uKCkge1xuICAvLyBjcmVhdGUgaWNvbiBjb250YWluZXJcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8taWNvbi1jb250YWluZXJcIik7XG4gIC8vIGNyZWF0ZSBpY29uXG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlvbi1pY29uXCIpO1xuICBpY29uLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjaGVja21hcmstb3V0bGluZVwiKTtcbiAgLy8gYXBwZW5kIGljb24gdG8gY29udGFpbmVyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW5wdXQoaSkge1xuICAvLyBDcmVhdGUgaW5wdXQgY2hlY2tib3ggZWxlbWVudCBhZnRlciB0aGUgbGFiZWxcbiAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAvLyBBZGQgYXR0cmlidXRlc1xuICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidG9kby1jaGVja2JveFwiKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgYHRvZG9jaGVja2JveCR7aX1gKTtcbiAgcmV0dXJuIGNoZWNrYm94O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KHRpdGxlLCBmcm9tLCBkYXRlLCBwcmlvcml0eSkge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0b2RvLXRleHRcIik7XG4gIC8vIEFwcGVuZCB0aXRsZSBhbmQgZGV0YWlscyB0byBjb250ZW50XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUodGl0bGUpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVEZXRhaWxzKGZyb20sIGRhdGUsIHByaW9yaXR5KSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKHN0cikge1xuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRvZG8tdGl0bGVcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gc3RyO1xuICByZXR1cm4gdGl0bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURldGFpbHMoZnJvbSwgZGF0ZSwgcHJpb3JpdHkpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkZXRhaWxzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGV0YWlsc1wiKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVGcm9tKGZyb20pKTtcbiAgZGV0YWlscy5hcHBlbmRDaGlsZChjcmVhdGVEdWUoZGF0ZSkpO1xuICBkZXRhaWxzLmFwcGVuZENoaWxkKGNyZWF0ZVByaW9yaXR5KHByaW9yaXR5KSk7XG4gIGRldGFpbHMuYXBwZW5kQ2hpbGQoY3JlYXRlTm90ZSgpKTtcbiAgcmV0dXJuIGRldGFpbHM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZyb20oZnJvbSkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZnJvbS1wcm9qZWN0XCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gYEZyb20gJHtmcm9tfWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEdWUoZGF0ZSkge1xuICBsZXQgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGR1ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImR1ZS1kYXRlXCIpO1xuICBkdWUuYXBwZW5kQ2hpbGQoY3JlYXRlQ2FsZW5kYXJJbWFnZSgpKTtcbiAgZHVlLmFwcGVuZENoaWxkKGNyZWF0ZVNwYW5Gb3JEYXRlKGRhdGUpKTtcbiAgcmV0dXJuIGR1ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2FsZW5kYXJJbWFnZSgpIHtcbiAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgQ2FsZW5kYXIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiQ2FsZW5kYXJcIik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjEycHhcIik7XG5cbiAgcmV0dXJuIGltZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3BhbkZvckRhdGUoZGF0ZSkge1xuICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gYER1ZSAke2RhdGV9YDtcbiAgcmV0dXJuIHNwYW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByaW9yaXR5KGxldmVsKSB7XG4gIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBgJHtsZXZlbH0tcHJpb3JpdHlgKTtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQoY3JlYXRlU3BhbkZvclByaW9yaXR5KGxldmVsKSk7XG4gIHJldHVybiBwcmlvcml0eTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3BhbkZvclByaW9yaXR5KGxldmVsKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBgJHtjYXBpdGFsaXplRmlyc3RMZXR0ZXIobGV2ZWwpfSBwcmlvcml0eWA7XG4gIHJldHVybiBzcGFuO1xufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyKSB7XG4gIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5vdGUoKSB7XG4gIGxldCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJub3RlLXByZXNlbmNlXCIpO1xuXG4gIC8vIGNyZWF0ZSBhbmQgQXBwZW5kIE5vdGUgSWNvblxuICBsZXQgbm90ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBub3RlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgTm90ZSk7XG4gIG5vdGVJY29uLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlBlblwiKTtcbiAgbm90ZUljb24uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMnB4XCIpO1xuXG4gIC8vIGNyZWF0ZSBhbmQgYXBwZW5kIHRleHRcbiAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IFwiTm90ZVwiO1xuXG4gIHNwYW4uYXBwZW5kQ2hpbGQobm90ZUljb24pO1xuICBzcGFuLmFwcGVuZENoaWxkKHRleHQpO1xuICByZXR1cm4gc3Bhbjtcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9