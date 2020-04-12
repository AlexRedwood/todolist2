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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol,\nul {\n  list-style: none; }\n\nblockquote,\nq {\n  quotes: none; }\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n@keyframes rotation {\n  0% {\n    transform: rotate(0); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes appearFromRightProject {\n  0% {\n    left: 30px;\n    opacity: 0; }\n  100% {\n    left: 0px;\n    opacity: 1; } }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  user-select: none; }\n\nbody,\nhtml {\n  height: 100%;\n  margin: 0; }\n\nbody {\n  font-family: \"Sen\", sans-serif;\n  line-height: 1.25;\n  background: #e9e9e9; }\n\n#content {\n  display: grid;\n  height: 100%;\n  grid-template-rows: 60px auto;\n  grid-template-columns: 300px auto 330px;\n  grid-template-areas: \"header header header\" \"projects main todo-misc\"; }\n  #content.broad {\n    grid-template-columns: 68px auto 330px; }\n\n/* --- TOP of the PAGE : HEADER --- */\nheader {\n  grid-area: header;\n  display: flex;\n  -webkit-box-align: center;\n  align-items: center;\n  justify-content: center;\n  background: #106877;\n  color: #f4f4f4;\n  font-size: 1.9em;\n  font-weight: 900;\n  padding: 0;\n  width: 100%;\n  font-family: \"Permanent Marker\", cursive;\n  letter-spacing: 5px; }\n  header #menu-icon {\n    margin-right: auto;\n    margin-left: 0;\n    font-size: 48px;\n    cursor: pointer;\n    padding: 10px; }\n    header #menu-icon:hover {\n      background: #0b505c; }\n  header #header-title {\n    margin-right: auto; }\n  header #socials {\n    margin-right: 10px;\n    font-size: 48px;\n    cursor: pointer; }\n\n/* LEFT SIDE OF THE PAGE: PROJECTS */\n#project-container {\n  grid-area: projects;\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  -webkit-box-shadow: 8px 0px 5px -4px #cacaca;\n  -moz-box-shadow: 8px 0px 5px -4px #cacaca;\n  box-shadow: 8px 0px 5px -4px #cacaca;\n  /* LEFT-SIDE OF THE PAGE: User Input*/ }\n  #project-container #project-list {\n    width: 280px;\n    max-width: 280px; }\n    #project-container #project-list.broad {\n      width: 68px; }\n    #project-container #project-list .project {\n      margin: 10px 0;\n      padding: 10px;\n      border-radius: 5px;\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      word-wrap: break-word;\n      white-space: normal;\n      overflow: hidden; }\n      #project-container #project-list .project.broad {\n        margin: 10px 0;\n        padding: 10px 10px 10px 22px;\n        border-radius: 0; }\n      #project-container #project-list .project.active {\n        color: #11998e;\n        font-weight: 900; }\n      #project-container #project-list .project:hover .delete-project-btn {\n        background: #f0f0f0;\n        visibility: visible;\n        animation: appearFromRightProject 0.3s ease-out forwards; }\n      #project-container #project-list .project:not(.active):hover {\n        background: #f0f0f0;\n        cursor: pointer; }\n      #project-container #project-list .project .project-icon {\n        font-size: 24px;\n        margin-right: 20px; }\n        #project-container #project-list .project .project-icon.broad {\n          margin-right: 0; }\n      #project-container #project-list .project .project-title-count-container {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start; }\n        #project-container #project-list .project .project-title-count-container.broad {\n          display: none; }\n      #project-container #project-list .project .project-name {\n        width: 155px;\n        max-width: 155px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n      #project-container #project-list .project .count-todos {\n        font-size: 0.8em;\n        font-weight: 900;\n        margin-left: auto;\n        width: 29px;\n        padding-right: 5px; }\n      #project-container #project-list .project .delete-project-btn {\n        visibility: hidden;\n        position: relative;\n        font-size: 24px;\n        margin-left: auto;\n        outline: none;\n        border: none;\n        background: #fff;\n        color: #c5c5c5;\n        cursor: pointer;\n        transition: color 0.2s; }\n        #project-container #project-list .project .delete-project-btn.broad {\n          display: none; }\n        #project-container #project-list .project .delete-project-btn:hover {\n          color: #999999; }\n        #project-container #project-list .project .delete-project-btn:focus {\n          color: #6e6e6e; }\n  #project-container #new-project-form {\n    width: 250px;\n    max-width: 280px;\n    position: relative;\n    margin-left: 15px;\n    margin-right: 0;\n    display: flex;\n    /* Input */\n    /* Submit button */ }\n    #project-container #new-project-form.broad {\n      width: 68px;\n      margin: 0; }\n    #project-container #new-project-form #new-project {\n      border: 0;\n      border-bottom: 2px solid #6b6b6b;\n      margin-left: 2px;\n      margin-right: auto;\n      padding: 9px 0;\n      outline: 0;\n      font-size: 1em;\n      color: #6b6b6b;\n      background: transparent;\n      font-family: \"Sen\", sans-serif; }\n      #project-container #new-project-form #new-project.broad {\n        display: none; }\n      #project-container #new-project-form #new-project:focus {\n        transition: 0.7s;\n        color: #11998e;\n        border-bottom: 2px solid #38ef7d; }\n        #project-container #new-project-form #new-project:focus::placeholder {\n          transition: 0.7s;\n          color: #11998e; }\n    #project-container #new-project-form #submit-project {\n      background: #fff;\n      display: inline-block;\n      border: none;\n      position: relative;\n      top: 0px;\n      left: 10px;\n      text-decoration: none;\n      font-size: 24px;\n      cursor: pointer;\n      text-align: center;\n      padding: 6px; }\n      #project-container #new-project-form #submit-project.broad {\n        padding: 0;\n        left: 4px;\n        padding: 7px 18px; }\n      #project-container #new-project-form #submit-project ion-icon {\n        --ionicon-stroke-width: 48px;\n        color: #6b6b6b; }\n      #project-container #new-project-form #submit-project:focus {\n        outline: none; }\n      #project-container #new-project-form #submit-project::after {\n        content: \"\";\n        position: absolute;\n        z-index: 0;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: 2px solid #fff;\n        border-radius: 5px;\n        transition: 0.5s; }\n      #project-container #new-project-form #submit-project:hover {\n        color: #11998e; }\n        #project-container #new-project-form #submit-project:hover::after {\n          border: 2px solid #38ef7d;\n          border-radius: 5px; }\n        #project-container #new-project-form #submit-project:hover ion-icon {\n          color: #11998e; }\n\n/* Middle: Project title, todo tasks*/\nmain {\n  grid-area: main;\n  min-width: 377px;\n  background: #fff;\n  padding: 20px;\n  margin: 20px;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-shadow: 0px 0px 5px 2px #cacaca;\n  -moz-box-shadow: 0px 0px 5px 2px #cacaca;\n  box-shadow: 0px 0px 5px 2px #cacaca;\n  /* User input todo tasks*/ }\n  @media screen and (max-width: 1024px) {\n    main {\n      grid-column: 2 / 4; } }\n  main #project-title {\n    margin-bottom: 20px;\n    font-weight: 900;\n    font-size: 1.4em; }\n  main .todo {\n    position: relative;\n    width: 100%;\n    display: grid;\n    grid-template-rows: auto;\n    grid-template-columns: 40px auto 20px;\n    grid-template-areas: \"checkbox todotext btn\";\n    justify-items: start;\n    align-items: center;\n    margin-bottom: 15px;\n    padding: 5px 15px;\n    border: 1px solid lightgrey;\n    border-radius: 5px;\n    cursor: pointer;\n    /* Custom made checkbox with after element */\n    /* Text of the todo task with details */ }\n    main .todo:hover {\n      -webkit-box-shadow: 0px 0px 5px 0px #e4e4e4;\n      -moz-box-shadow: 0px 0px 5px 0px #e4e4e4;\n      box-shadow: 0px 0px 5px 0px #e4e4e4; }\n    main .todo:hover .delete-todo-btn {\n      background: #fff;\n      visibility: visible;\n      animation: appearFromRightProject 0.3s ease-out forwards; }\n    main .todo label {\n      grid-area: checkbox; }\n      main .todo label .todo-icon-container {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 30px;\n        height: 30px;\n        transition: 0.7s; }\n        main .todo label .todo-icon-container::after {\n          visibility: visible;\n          content: \"\";\n          position: absolute;\n          z-index: 0;\n          left: 0;\n          top: 0;\n          width: 100%;\n          height: 100%;\n          box-sizing: border-box;\n          border: 2px solid #c5c5c5;\n          border-radius: 50%;\n          cursor: pointer;\n          transition: 0.7s; }\n        main .todo label .todo-icon-container ion-icon {\n          visibility: hidden;\n          font-size: 24px;\n          --ionicon-stroke-width: 48px; }\n        main .todo label .todo-icon-container:hover::after {\n          border: 2px solid #e2b0e9; }\n        main .todo label .todo-icon-container:hover ion-icon {\n          color: #e2b0e9;\n          visibility: visible;\n          animation: fadeIn 0.5s ease-out; }\n    main .todo .todo-checkbox {\n      display: none; }\n    main .todo .todo-text {\n      grid-area: todotext;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around; }\n      main .todo .todo-text .todo-title {\n        font-size: 1.15em; }\n      main .todo .todo-text .details {\n        font-size: 0.8em; }\n        main .todo .todo-text .details span {\n          margin-right: 7px; }\n          main .todo .todo-text .details span img {\n            position: relative;\n            top: 2px; }\n          main .todo .todo-text .details span.overdue-date {\n            color: red; }\n          main .todo .todo-text .details span.high-priority {\n            color: #e100ff; }\n          main .todo .todo-text .details span.medium-priority {\n            color: #3227ce; }\n    main .todo .delete-todo-btn {\n      grid-area: btn;\n      visibility: hidden;\n      position: relative;\n      font-size: 24px;\n      outline: none;\n      border: none;\n      background: #fff;\n      color: #d4d4d4;\n      cursor: pointer;\n      transition: color 0.2s; }\n      main .todo .delete-todo-btn:hover {\n        color: #b8b8b8; }\n      main .todo .delete-todo-btn:focus {\n        color: #929292; }\n  main hr {\n    position: relative;\n    bottom: 20px;\n    margin-top: auto;\n    margin-right: -20px;\n    margin-left: -20px;\n    height: 10px;\n    border: 0;\n    box-shadow: 0 -10px 10px -10px #8c8c8c inset; }\n  main #new-todo-form {\n    display: flex;\n    /* Input */\n    /* Submit button */ }\n    main #new-todo-form #new-todo {\n      width: 100%;\n      border: 0;\n      border-bottom: 2px solid #6b6b6b;\n      margin-left: 2px;\n      margin-right: auto;\n      padding: 9px 0;\n      outline: 0;\n      font-size: 1em;\n      color: #6b6b6b;\n      background: transparent;\n      font-family: \"Sen\", sans-serif; }\n      main #new-todo-form #new-todo:focus {\n        transition: 0.7s;\n        color: #11998e;\n        border-bottom: 2px solid #38ef7d; }\n        main #new-todo-form #new-todo:focus::placeholder {\n          transition: 0.7s;\n          color: #11998e; }\n    main #new-todo-form #submit-todo {\n      background: #fff;\n      display: inline-block;\n      border: none;\n      position: relative;\n      top: 0px;\n      left: 10px;\n      text-decoration: none;\n      font-size: 24px;\n      cursor: pointer;\n      text-align: center;\n      padding: 6px; }\n      main #new-todo-form #submit-todo ion-icon {\n        --ionicon-stroke-width: 48px;\n        color: #6b6b6b; }\n      main #new-todo-form #submit-todo:focus {\n        outline: none; }\n      main #new-todo-form #submit-todo::after {\n        content: \"\";\n        position: absolute;\n        z-index: 0;\n        left: 0;\n        top: 0;\n        width: 100%;\n        height: 100%;\n        box-sizing: border-box;\n        border: 2px solid #fff;\n        border-radius: 5px;\n        transition: 0.5s; }\n      main #new-todo-form #submit-todo:hover {\n        color: #11998e; }\n        main #new-todo-form #submit-todo:hover::after {\n          border: 2px solid #38ef7d;\n          border-radius: 5px; }\n        main #new-todo-form #submit-todo:hover ion-icon {\n          color: #11998e; }\n\n/* Right side of the page */\n#todo-misc-container {\n  grid-area: todo-misc;\n  background: #e9e9e9;\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  z-index: 1; }\n  @media screen and (max-width: 1024px) {\n    #todo-misc-container {\n      -webkit-box-shadow: -3px 0px 5px -2px #cacaca;\n      -moz-box-shadow: -3px 0px 5px -2px #cacaca;\n      box-shadow: -3px 0px 5px -2px #cacaca; } }\n  #todo-misc-container #todo-name-changer-container,\n  #todo-misc-container #date-changer,\n  #todo-misc-container #priority-container,\n  #todo-misc-container #note-container {\n    background: #fff;\n    margin-right: 0px;\n    margin-top: 0px;\n    border-bottom: 2px solid lightgrey;\n    border-left: 2px solid lightgrey;\n    padding: 15px;\n    -webkit-box-shadow: -3px 0px 5px -2px #cacaca;\n    -moz-box-shadow: -3px 0px 5px -2px #cacaca;\n    box-shadow: -3px 0px 5px -2px #cacaca; }\n    #todo-misc-container #todo-name-changer-container #date,\n    #todo-misc-container #date-changer #date,\n    #todo-misc-container #priority-container #date,\n    #todo-misc-container #note-container #date {\n      color: #6b6b6b; }\n  #todo-misc-container #todo-name-changer-container {\n    height: 60px;\n    border-radius: 5px 0 0 0;\n    -webkit-box-shadow: -2px -2px 5px -1px #cacaca;\n    -moz-box-shadow: -2px -2px 5px -1px #cacaca;\n    box-shadow: -2px -2px 5px -1px #cacaca; }\n    #todo-misc-container #todo-name-changer-container textarea {\n      height: 40px; }\n  #todo-misc-container #note-container {\n    height: 200px;\n    -webkit-box-shadow: -3px 4px 5px -2px #cacaca;\n    -moz-box-shadow: -3px 4px 5px -2px #cacaca;\n    box-shadow: -3px 4px 5px -2px #cacaca; }\n    #todo-misc-container #note-container textarea {\n      height: 160px; }\n  #todo-misc-container #date-changer,\n  #todo-misc-container #priority-container {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n    #todo-misc-container #date-changer #priority-levels .low-priority:hover,\n    #todo-misc-container #priority-container #priority-levels .low-priority:hover {\n      color: green; }\n    #todo-misc-container #date-changer #priority-levels .medium-priority:hover,\n    #todo-misc-container #priority-container #priority-levels .medium-priority:hover {\n      color: #3227ce; }\n    #todo-misc-container #date-changer #priority-levels .medium-priority:hover ~ .low-priority,\n    #todo-misc-container #priority-container #priority-levels .medium-priority:hover ~ .low-priority {\n      color: #3227ce; }\n    #todo-misc-container #date-changer #priority-levels .high-priority:hover,\n    #todo-misc-container #priority-container #priority-levels .high-priority:hover {\n      color: #e100ff; }\n    #todo-misc-container #date-changer #priority-levels ion-icon,\n    #todo-misc-container #priority-container #priority-levels ion-icon {\n      font-size: 16px;\n      cursor: pointer; }\n    #todo-misc-container #date-changer #date-remover ion-icon,\n    #todo-misc-container #priority-container #date-remover ion-icon {\n      position: relative;\n      top: 4px;\n      color: #6b6b6b;\n      cursor: pointer;\n      --ionicon-stroke-width: 48px; }\n      #todo-misc-container #date-changer #date-remover ion-icon:hover,\n      #todo-misc-container #priority-container #date-remover ion-icon:hover {\n        color: black; }\n  #todo-misc-container .misc-title {\n    font-size: 1.1em;\n    color: #6b6b6b;\n    width: 120px; }\n  #todo-misc-container textarea {\n    background: #fff;\n    outline: none;\n    resize: none;\n    overflow: hidden;\n    width: 100%;\n    border: none;\n    font-family: \"Sen\", sans-serif;\n    font-size: 1.1em; }\n    #todo-misc-container textarea::placeholder {\n      color: #6b6b6b; }\n    #todo-misc-container textarea:focus::placeholder {\n      color: #11998e; }\n  #todo-misc-container input[type=\"date\"] {\n    outline: none;\n    border: none;\n    cursor: pointer; }\n  #todo-misc-container #close-details-btn {\n    font-size: 48px;\n    width: 62px; }\n    #todo-misc-container #close-details-btn ion-icon {\n      --ionicon-stroke-width: 48px;\n      background: #fff;\n      border-radius: 0 0 5px 5px;\n      border-left: 2px solid lightgrey;\n      border-right: 2px solid lightgrey;\n      border-bottom: 2px solid lightgrey;\n      width: 60px;\n      color: #c5c5c5;\n      cursor: pointer;\n      -webkit-box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca;\n      -moz-box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca;\n      box-shadow: inset 0px 15px 7px -13px #cacaca, 0px 5px 10px 0px #cacaca; }\n      #todo-misc-container #close-details-btn ion-icon:hover {\n        color: #6e6e6e; }\n", ""]);
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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/alexandr/Projects/odin_on_rails/new_beg/src/JS/tasks/render.js: Unexpected token (114:30)\n\n\u001b[0m \u001b[90m 112 | \u001b[39m\u001b[36mfunction\u001b[39m createSpanForPriority(level) {\u001b[0m\n\u001b[0m \u001b[90m 113 | \u001b[39m  let span \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mcreateElement(\u001b[32m\"span\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 114 | \u001b[39m  span\u001b[33m.\u001b[39mtextContent \u001b[33m=\u001b[39m \u001b[32m`${level.}`\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m                              \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 115 | \u001b[39m  \u001b[36mreturn\u001b[39m span\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 116 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m 117 | \u001b[39m\u001b[0m\n    at Parser._raise (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:742:17)\n    at Parser.raiseWithData (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:735:17)\n    at Parser.raise (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:729:17)\n    at Parser.unexpected (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:8757:16)\n    at Parser.parseIdentifierName (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10748:18)\n    at Parser.parseIdentifier (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10726:23)\n    at Parser.parseMaybePrivateName (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10079:19)\n    at Parser.parseSubscript (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9660:104)\n    at Parser.parseSubscripts (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9625:19)\n    at Parser.parseExprSubscripts (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9608:17)\n    at Parser.parseMaybeUnary (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9582:21)\n    at Parser.parseExprOps (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9452:23)\n    at Parser.parseMaybeConditional (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9425:23)\n    at Parser.parseMaybeAssign (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9380:21)\n    at Parser.parseExpression (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9332:23)\n    at Parser.parseTemplate (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10345:34)\n    at Parser.parseExprAtom (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10015:21)\n    at Parser.parseExprSubscripts (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9602:23)\n    at Parser.parseMaybeUnary (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9582:21)\n    at Parser.parseExprOps (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9452:23)\n    at Parser.parseMaybeConditional (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9425:23)\n    at Parser.parseMaybeAssign (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9380:21)\n    at Parser.parseMaybeAssign (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9412:25)\n    at Parser.parseExpression (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:9332:23)\n    at Parser.parseStatementContent (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11210:23)\n    at Parser.parseStatement (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11081:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11656:25)\n    at Parser.parseBlockBody (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11642:10)\n    at Parser.parseBlock (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:11626:10)\n    at Parser.parseFunctionBody (/home/alexandr/Projects/odin_on_rails/new_beg/node_modules/@babel/parser/lib/index.js:10634:24)");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NDU1Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL2RldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL21lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTL3N0eWxlL3Jlc2l6ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvYWRkLmpzIiwid2VicGFjazovLy8uL3NyYy9KUy90YXNrcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlMvdGFza3MvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvU0NTUy9zdHlsZS5zY3NzPzgxNGIiXSwibmFtZXMiOlsiTWVudUJ0biIsIlJlc2l6ZSIsInRhc2tzU2hvd0RldGFpbHMiLCJ0YXNrcyIsIkRlZmF1bHRzIiwiQWRkVGFza0J0biIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJ0YWJsZSIsInRvZG9MaXN0U2hvd0RldGFpbHMiLCJBcnJvd0hpZGVEZXRhaWxzIiwidG9kb1Rhc2tzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInRhc2siLCJzaG93RGV0YWlscyIsImFycm93QnRuIiwiZGV0YWlscyIsIm1haW4iLCJnZXRDb21wdXRlZERpc3BsYXkiLCJoaWRlIiwic3R5bGUiLCJncmlkQ29sdW1uIiwic2hvd0FzRmxleCIsInNjcmVlbkxlc3NUaGVuMTAyNCIsImVsZW1lbnQiLCJjb21wdXRlZERpc3BsYXkiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImRpc3BsYXkiLCJzaG93UHJvamVjdHMiLCJicm9hZGVuUHJvamVjdENvbnRhaW5lciIsImdldEVsZW1lbnRzVG9Ccm9hZCIsInRvZ2dsZUJyb2FkIiwibWluaW1pemVQcm9qZWN0Q29udGFpbmVyIiwiYWRkQnJvYWQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b2dnbGUiLCJjb250ZW50IiwicHJvamVjdExpc3QiLCJwcm9qZWN0IiwicHJvamVjdEljb24iLCJwcm9qZWN0VGl0bGVDb3VudENvbnRhaW5lciIsImRlbGV0ZVByb2plY3RCdG4iLCJuZXdQcm9qZWN0Rm9ybSIsIm5ld1Byb2plY3QiLCJzdWJtaXRQcm9qZWN0IiwiZWxlbWVudHMiLCJyZXNwb25zaXZlIiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwibWF0Y2hlcyIsImFkZFRhc2tUbyIsImFyciIsInN1Ym1pdFRvZG9CdG4iLCJwdXNoVGFza1RvIiwicHVzaCIsImdldFRhc2siLCJ0YXNrRmFjdG9yeSIsInRpdGxlIiwiZ2V0SW5wdXRWYWx1ZSIsImNsZWFyVGFza0lucHV0IiwidmFsdWUiLCJnZXQiLCJhbGxUYXNrcyIsImZyb20iLCJkYXRlIiwicHJpb3JpdHkiLCJub3RlIiwiZG9uZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsd0dBQW1EO0FBQzdGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsd3FCQUF3cUIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsRUFBRSwwSkFBMEosbUJBQW1CLEVBQUUsVUFBVSxtQkFBbUIsRUFBRSxhQUFhLHFCQUFxQixFQUFFLG9CQUFvQixpQkFBaUIsRUFBRSwrREFBK0Qsa0JBQWtCLGtCQUFrQixFQUFFLFdBQVcsOEJBQThCLHNCQUFzQixFQUFFLHlCQUF5QixRQUFRLDJCQUEyQixFQUFFLFVBQVUsZ0NBQWdDLEVBQUUsRUFBRSx1Q0FBdUMsUUFBUSxpQkFBaUIsaUJBQWlCLEVBQUUsVUFBVSxnQkFBZ0IsaUJBQWlCLEVBQUUsRUFBRSx1QkFBdUIsUUFBUSxpQkFBaUIsRUFBRSxVQUFVLGlCQUFpQixFQUFFLEVBQUUsT0FBTywyQkFBMkIsZUFBZSxjQUFjLHNCQUFzQixFQUFFLGlCQUFpQixpQkFBaUIsY0FBYyxFQUFFLFVBQVUscUNBQXFDLHNCQUFzQix3QkFBd0IsRUFBRSxjQUFjLGtCQUFrQixpQkFBaUIsa0NBQWtDLDRDQUE0Qyw4RUFBOEUsRUFBRSxvQkFBb0IsNkNBQTZDLEVBQUUsb0RBQW9ELHNCQUFzQixrQkFBa0IsOEJBQThCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLG1CQUFtQixxQkFBcUIscUJBQXFCLGVBQWUsZ0JBQWdCLCtDQUErQyx3QkFBd0IsRUFBRSx1QkFBdUIseUJBQXlCLHFCQUFxQixzQkFBc0Isc0JBQXNCLG9CQUFvQixFQUFFLCtCQUErQiw0QkFBNEIsRUFBRSwwQkFBMEIseUJBQXlCLEVBQUUscUJBQXFCLHlCQUF5QixzQkFBc0Isc0JBQXNCLEVBQUUsK0RBQStELHdCQUF3QixxQkFBcUIsa0JBQWtCLDJCQUEyQixnQ0FBZ0Msd0JBQXdCLGlEQUFpRCw4Q0FBOEMseUNBQXlDLDRDQUE0QyxzQ0FBc0MsbUJBQW1CLHVCQUF1QixFQUFFLDhDQUE4QyxvQkFBb0IsRUFBRSxpREFBaUQsdUJBQXVCLHNCQUFzQiwyQkFBMkIsc0JBQXNCLDRCQUE0QixvQ0FBb0MsOEJBQThCLDRCQUE0Qix5QkFBeUIsRUFBRSx5REFBeUQseUJBQXlCLHVDQUF1QywyQkFBMkIsRUFBRSwwREFBMEQseUJBQXlCLDJCQUEyQixFQUFFLDZFQUE2RSw4QkFBOEIsOEJBQThCLG1FQUFtRSxFQUFFLHNFQUFzRSw4QkFBOEIsMEJBQTBCLEVBQUUsaUVBQWlFLDBCQUEwQiw2QkFBNkIsRUFBRSx5RUFBeUUsNEJBQTRCLEVBQUUsa0ZBQWtGLHdCQUF3Qiw4QkFBOEIsc0NBQXNDLEVBQUUsMEZBQTBGLDBCQUEwQixFQUFFLGlFQUFpRSx1QkFBdUIsMkJBQTJCLDJCQUEyQiw4QkFBOEIsa0NBQWtDLEVBQUUsZ0VBQWdFLDJCQUEyQiwyQkFBMkIsNEJBQTRCLHNCQUFzQiw2QkFBNkIsRUFBRSx1RUFBdUUsNkJBQTZCLDZCQUE2QiwwQkFBMEIsNEJBQTRCLHdCQUF3Qix1QkFBdUIsMkJBQTJCLHlCQUF5QiwwQkFBMEIsaUNBQWlDLEVBQUUsK0VBQStFLDBCQUEwQixFQUFFLCtFQUErRSwyQkFBMkIsRUFBRSwrRUFBK0UsMkJBQTJCLEVBQUUsMENBQTBDLG1CQUFtQix1QkFBdUIseUJBQXlCLHdCQUF3QixzQkFBc0Isb0JBQW9CLDRDQUE0QyxrREFBa0Qsb0JBQW9CLGtCQUFrQixFQUFFLHlEQUF5RCxrQkFBa0IseUNBQXlDLHlCQUF5QiwyQkFBMkIsdUJBQXVCLG1CQUFtQix1QkFBdUIsdUJBQXVCLGdDQUFnQyx5Q0FBeUMsRUFBRSxpRUFBaUUsd0JBQXdCLEVBQUUsaUVBQWlFLDJCQUEyQix5QkFBeUIsMkNBQTJDLEVBQUUsZ0ZBQWdGLDZCQUE2QiwyQkFBMkIsRUFBRSw0REFBNEQseUJBQXlCLDhCQUE4QixxQkFBcUIsMkJBQTJCLGlCQUFpQixtQkFBbUIsOEJBQThCLHdCQUF3Qix3QkFBd0IsMkJBQTJCLHFCQUFxQixFQUFFLG9FQUFvRSxxQkFBcUIsb0JBQW9CLDRCQUE0QixFQUFFLHVFQUF1RSx1Q0FBdUMseUJBQXlCLEVBQUUsb0VBQW9FLHdCQUF3QixFQUFFLHFFQUFxRSx3QkFBd0IsNkJBQTZCLHFCQUFxQixrQkFBa0IsaUJBQWlCLHNCQUFzQix1QkFBdUIsaUNBQWlDLGlDQUFpQyw2QkFBNkIsMkJBQTJCLEVBQUUsb0VBQW9FLHlCQUF5QixFQUFFLDZFQUE2RSxzQ0FBc0MsK0JBQStCLEVBQUUsK0VBQStFLDJCQUEyQixFQUFFLGtEQUFrRCxvQkFBb0IscUJBQXFCLHFCQUFxQixrQkFBa0IsaUJBQWlCLHVCQUF1QixrQkFBa0IsMkJBQTJCLGdEQUFnRCw2Q0FBNkMsd0NBQXdDLGdDQUFnQywyQ0FBMkMsWUFBWSwyQkFBMkIsRUFBRSxFQUFFLHlCQUF5QiwwQkFBMEIsdUJBQXVCLHVCQUF1QixFQUFFLGdCQUFnQix5QkFBeUIsa0JBQWtCLG9CQUFvQiwrQkFBK0IsNENBQTRDLHFEQUFxRCwyQkFBMkIsMEJBQTBCLDBCQUEwQix3QkFBd0Isa0NBQWtDLHlCQUF5QixzQkFBc0IsbUdBQW1HLHdCQUF3QixvREFBb0QsaURBQWlELDRDQUE0QyxFQUFFLHlDQUF5Qyx5QkFBeUIsNEJBQTRCLGlFQUFpRSxFQUFFLHdCQUF3Qiw0QkFBNEIsRUFBRSwrQ0FBK0MsNkJBQTZCLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLHNCQUFzQix1QkFBdUIsMkJBQTJCLEVBQUUsd0RBQXdELGdDQUFnQywwQkFBMEIsK0JBQStCLHVCQUF1QixvQkFBb0IsbUJBQW1CLHdCQUF3Qix5QkFBeUIsbUNBQW1DLHNDQUFzQywrQkFBK0IsNEJBQTRCLDZCQUE2QixFQUFFLDBEQUEwRCwrQkFBK0IsNEJBQTRCLHlDQUF5QyxFQUFFLDhEQUE4RCxzQ0FBc0MsRUFBRSxnRUFBZ0UsMkJBQTJCLGdDQUFnQyw0Q0FBNEMsRUFBRSxpQ0FBaUMsc0JBQXNCLEVBQUUsNkJBQTZCLDRCQUE0QixzQkFBc0IsK0JBQStCLHNDQUFzQyxFQUFFLDJDQUEyQyw0QkFBNEIsRUFBRSx3Q0FBd0MsMkJBQTJCLEVBQUUsK0NBQStDLDhCQUE4QixFQUFFLHFEQUFxRCxpQ0FBaUMsdUJBQXVCLEVBQUUsOERBQThELHlCQUF5QixFQUFFLCtEQUErRCw2QkFBNkIsRUFBRSxpRUFBaUUsNkJBQTZCLEVBQUUsbUNBQW1DLHVCQUF1QiwyQkFBMkIsMkJBQTJCLHdCQUF3QixzQkFBc0IscUJBQXFCLHlCQUF5Qix1QkFBdUIsd0JBQXdCLCtCQUErQixFQUFFLDJDQUEyQyx5QkFBeUIsRUFBRSwyQ0FBMkMseUJBQXlCLEVBQUUsYUFBYSx5QkFBeUIsbUJBQW1CLHVCQUF1QiwwQkFBMEIseUJBQXlCLG1CQUFtQixnQkFBZ0IsbURBQW1ELEVBQUUseUJBQXlCLG9CQUFvQiw0Q0FBNEMscUNBQXFDLG9CQUFvQixrQkFBa0IseUNBQXlDLHlCQUF5QiwyQkFBMkIsdUJBQXVCLG1CQUFtQix1QkFBdUIsdUJBQXVCLGdDQUFnQyx5Q0FBeUMsRUFBRSw2Q0FBNkMsMkJBQTJCLHlCQUF5QiwyQ0FBMkMsRUFBRSw0REFBNEQsNkJBQTZCLDJCQUEyQixFQUFFLHdDQUF3Qyx5QkFBeUIsOEJBQThCLHFCQUFxQiwyQkFBMkIsaUJBQWlCLG1CQUFtQiw4QkFBOEIsd0JBQXdCLHdCQUF3QiwyQkFBMkIscUJBQXFCLEVBQUUsbURBQW1ELHVDQUF1Qyx5QkFBeUIsRUFBRSxnREFBZ0Qsd0JBQXdCLEVBQUUsaURBQWlELHdCQUF3Qiw2QkFBNkIscUJBQXFCLGtCQUFrQixpQkFBaUIsc0JBQXNCLHVCQUF1QixpQ0FBaUMsaUNBQWlDLDZCQUE2QiwyQkFBMkIsRUFBRSxnREFBZ0QseUJBQXlCLEVBQUUseURBQXlELHNDQUFzQywrQkFBK0IsRUFBRSwyREFBMkQsMkJBQTJCLEVBQUUsd0RBQXdELHlCQUF5Qix3QkFBd0Isa0JBQWtCLDJCQUEyQixxQkFBcUIsZUFBZSxFQUFFLDJDQUEyQyw0QkFBNEIsc0RBQXNELG1EQUFtRCw4Q0FBOEMsRUFBRSxFQUFFLG9MQUFvTCx1QkFBdUIsd0JBQXdCLHNCQUFzQix5Q0FBeUMsdUNBQXVDLG9CQUFvQixvREFBb0QsaURBQWlELDRDQUE0QyxFQUFFLG9OQUFvTix1QkFBdUIsRUFBRSx1REFBdUQsbUJBQW1CLCtCQUErQixxREFBcUQsa0RBQWtELDZDQUE2QyxFQUFFLGtFQUFrRSxxQkFBcUIsRUFBRSwwQ0FBMEMsb0JBQW9CLG9EQUFvRCxpREFBaUQsNENBQTRDLEVBQUUscURBQXFELHNCQUFzQixFQUFFLHFGQUFxRixvQkFBb0Isa0NBQWtDLDBCQUEwQixFQUFFLG1LQUFtSyxxQkFBcUIsRUFBRSx5S0FBeUssdUJBQXVCLEVBQUUseU1BQXlNLHVCQUF1QixFQUFFLHFLQUFxSyx1QkFBdUIsRUFBRSw2SUFBNkksd0JBQXdCLHdCQUF3QixFQUFFLHVJQUF1SSwyQkFBMkIsaUJBQWlCLHVCQUF1Qix3QkFBd0IscUNBQXFDLEVBQUUsdUpBQXVKLHVCQUF1QixFQUFFLHNDQUFzQyx1QkFBdUIscUJBQXFCLG1CQUFtQixFQUFFLG1DQUFtQyx1QkFBdUIsb0JBQW9CLG1CQUFtQix1QkFBdUIsa0JBQWtCLG1CQUFtQix1Q0FBdUMsdUJBQXVCLEVBQUUsa0RBQWtELHVCQUF1QixFQUFFLHdEQUF3RCx1QkFBdUIsRUFBRSwrQ0FBK0Msb0JBQW9CLG1CQUFtQixzQkFBc0IsRUFBRSw2Q0FBNkMsc0JBQXNCLGtCQUFrQixFQUFFLHdEQUF3RCxxQ0FBcUMseUJBQXlCLG1DQUFtQyx5Q0FBeUMsMENBQTBDLDJDQUEyQyxvQkFBb0IsdUJBQXVCLHdCQUF3Qix1RkFBdUYsb0ZBQW9GLCtFQUErRSxFQUFFLGdFQUFnRSx5QkFBeUIsRUFBRTtBQUN4MGtCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0FBLDJEQUFBO0FBQ0FDLDJEQUFBO0FBQ0FDLDBFQUFnQixHLENBRWhCO0FBRUE7O0FBQ0EsSUFBSUMsS0FBSyxzQkFBT0Msc0RBQUEsRUFBUCxDQUFULEMsQ0FFQTs7O0FBQ0FDLHVEQUFBLENBQXFCRixLQUFyQjtBQUVBRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLEVBQTBDQyxnQkFBMUMsQ0FBMkQsT0FBM0QsRUFBb0UsVUFBQ0MsS0FBRCxFQUFXO0FBQzdFQSxPQUFLLENBQUNDLGNBQU47QUFDQUMsU0FBTyxDQUFDQyxLQUFSLENBQWNULEtBQWQ7QUFDRCxDQUhELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7O0FBRUEsU0FBU0QsZ0JBQVQsR0FBNEI7QUFDMUI7QUFDQVcscUJBQW1CLEdBRk8sQ0FHMUI7O0FBQ0FDLGtCQUFnQjtBQUNqQjs7QUFFRCxTQUFTRCxtQkFBVCxHQUErQjtBQUM3QjtBQUNBLE1BQUlFLFNBQVMsR0FBR1QsUUFBUSxDQUFDVSxzQkFBVCxDQUFnQyxNQUFoQyxDQUFoQjs7QUFGNkIsNkNBR1pELFNBSFk7QUFBQTs7QUFBQTtBQUc3Qix3REFBNEI7QUFBQSxVQUFuQkUsSUFBbUI7QUFDMUJBLFVBQUksQ0FBQ1QsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0I7QUFBQSxlQUFNVSxXQUFXLEVBQWpCO0FBQUEsT0FBL0I7QUFDRDtBQUw0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTTlCOztBQUVELFNBQVNKLGdCQUFULEdBQTRCO0FBQzFCO0FBQ0EsTUFBSUssUUFBUSxHQUFHYixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsbUJBQXhCLENBQWY7QUFFQVksVUFBUSxDQUFDWCxnQkFBVCxDQUEwQixPQUExQixFQUFtQztBQUFBLFdBQU1VLFdBQVcsRUFBakI7QUFBQSxHQUFuQztBQUNEOztBQUVELFNBQVNBLFdBQVQsR0FBdUI7QUFDckIsTUFBSUUsT0FBTyxHQUFHZCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLENBQWQ7QUFDQSxNQUFJYyxJQUFJLEdBQUdmLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFYLENBRnFCLENBSXJCO0FBQ0E7O0FBQ0EsTUFBSWUsa0JBQWtCLENBQUNGLE9BQUQsQ0FBbEIsS0FBZ0MsTUFBcEMsRUFBNEM7QUFDMUNHLFFBQUksQ0FBQ0gsT0FBRCxDQUFKO0FBQ0FDLFFBQUksQ0FBQ0csS0FBTCxDQUFXQyxVQUFYLEdBQXdCLEtBQXhCO0FBQ0QsR0FIRCxNQUdPO0FBQ0xDLGNBQVUsQ0FBQ04sT0FBRCxDQUFWLENBREssQ0FFTDs7QUFDQSxRQUFJLENBQUNPLHFFQUFrQixFQUF2QixFQUEyQk4sSUFBSSxDQUFDRyxLQUFMLENBQVdDLFVBQVgsR0FBd0IsS0FBeEI7QUFDNUI7QUFDRjs7QUFFRCxTQUFTSCxrQkFBVCxDQUE0Qk0sT0FBNUIsRUFBcUM7QUFDbkMsTUFBSUMsZUFBZSxHQUFHQyxNQUFNLENBQ3pCQyxnQkFEbUIsQ0FDRkgsT0FERSxFQUVuQkksZ0JBRm1CLENBRUYsU0FGRSxDQUF0QjtBQUdBLFNBQU9ILGVBQVA7QUFDRDs7QUFFRCxTQUFTSCxVQUFULENBQW9CRSxPQUFwQixFQUE2QjtBQUMzQkEsU0FBTyxDQUFDSixLQUFSLENBQWNTLE9BQWQsR0FBd0IsTUFBeEI7QUFDRDs7QUFFRCxTQUFTVixJQUFULENBQWNLLE9BQWQsRUFBdUI7QUFDckJBLFNBQU8sQ0FBQ0osS0FBUixDQUFjUyxPQUFkLEdBQXdCLE1BQXhCO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREQsU0FBU0MsWUFBVCxHQUF3QjtBQUN0QjtBQUNBNUIsVUFBUSxDQUNMQyxjQURILENBQ2tCLFdBRGxCLEVBRUdDLGdCQUZILENBRW9CLE9BRnBCLEVBRTZCO0FBQUEsV0FBTTJCLHVCQUF1QixFQUE3QjtBQUFBLEdBRjdCO0FBR0Q7O0FBRUQsU0FBU0EsdUJBQVQsR0FBbUM7QUFDakM7QUFEaUMsNkNBRWJDLGtCQUFrQixFQUZMO0FBQUE7O0FBQUE7QUFFakMsd0RBQTBDO0FBQUEsVUFBakNSLE9BQWlDO0FBQ3hDUyxpQkFBVyxDQUFDVCxPQUFELENBQVg7QUFDRDtBQUpnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS2xDOztBQUVELFNBQVNVLHdCQUFULEdBQW9DO0FBQ2xDO0FBRGtDLDhDQUVkRixrQkFBa0IsRUFGSjtBQUFBOztBQUFBO0FBRWxDLDJEQUEwQztBQUFBLFVBQWpDUixPQUFpQztBQUN4Q1csY0FBUSxDQUFDWCxPQUFELENBQVI7QUFDRDtBQUppQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS25DOztBQUVELFNBQVNXLFFBQVQsQ0FBa0JYLE9BQWxCLEVBQTJCO0FBQ3pCO0FBQ0E7QUFDQUEsU0FBTyxDQUFDWSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixPQUF0QjtBQUNEOztBQUVELFNBQVNKLFdBQVQsQ0FBcUJULE9BQXJCLEVBQThCO0FBQzVCO0FBQ0E7QUFDQUEsU0FBTyxDQUFDWSxTQUFSLENBQWtCRSxNQUFsQixDQUF5QixPQUF6QjtBQUNEOztBQUVELFNBQVNOLGtCQUFULEdBQThCO0FBQzVCO0FBQ0EsTUFBSU8sT0FBTyxHQUFHckMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWQ7QUFDQSxNQUFJcUMsV0FBVyxHQUFHdEMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQWxCO0FBQ0EsTUFBSXNDLE9BQU8sR0FBR3ZDLFFBQVEsQ0FBQ1Usc0JBQVQsQ0FBZ0MsU0FBaEMsQ0FBZDtBQUNBLE1BQUk4QixXQUFXLEdBQUd4QyxRQUFRLENBQUNVLHNCQUFULENBQWdDLGNBQWhDLENBQWxCO0FBQ0EsTUFBSStCLDBCQUEwQixHQUFHekMsUUFBUSxDQUFDVSxzQkFBVCxDQUMvQixnQ0FEK0IsQ0FBakM7QUFHQSxNQUFJZ0MsZ0JBQWdCLEdBQUcxQyxRQUFRLENBQUNVLHNCQUFULENBQWdDLG9CQUFoQyxDQUF2QjtBQUNBLE1BQUlpQyxjQUFjLEdBQUczQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0JBQXhCLENBQXJCO0FBQ0EsTUFBSTJDLFVBQVUsR0FBRzVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFqQjtBQUNBLE1BQUk0QyxhQUFhLEdBQUc3QyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXBCLENBWjRCLENBYzVCOztBQUNBLE1BQUk2QyxRQUFRLElBQ1ZULE9BRFUsRUFFVkMsV0FGVSw0QkFHUEMsT0FITyxzQkFJUEMsV0FKTyxzQkFLUEMsMEJBTE8sc0JBTVBDLGdCQU5PLElBT1ZDLGNBUFUsRUFRVkMsVUFSVSxFQVNWQyxhQVRVLEVBQVo7QUFXQSxTQUFPQyxRQUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0FDNUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLFNBQVNDLFVBQVQsR0FBc0I7QUFDcEIsTUFBSWhDLElBQUksR0FBR2YsUUFBUSxDQUFDQyxjQUFULENBQXdCLE1BQXhCLENBQVg7QUFDQSxNQUFJYSxPQUFPLEdBQUdkLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsQ0FBZCxDQUZvQixDQUdwQjs7QUFDQXVCLFFBQU0sQ0FBQ3dCLFVBQVAsQ0FBa0IscUJBQWxCLEVBQXlDQyxXQUF6QyxDQUFxRCxZQUFNO0FBQ3pEO0FBQ0E7QUFDQSxRQUFJNUIsa0JBQWtCLE1BQU1MLHNFQUFrQixDQUFDRixPQUFELENBQWxCLEtBQWdDLE1BQTVELEVBQW9FO0FBQ2xFQyxVQUFJLENBQUNHLEtBQUwsQ0FBV0MsVUFBWCxHQUF3QixLQUF4QjtBQUNBYSwrRUFBd0IsR0FGMEMsQ0FHbEU7QUFDQTtBQUNELEtBTEQsTUFLTyxJQUFJaEIsc0VBQWtCLENBQUNGLE9BQUQsQ0FBbEIsS0FBZ0MsTUFBcEMsRUFBNEM7QUFDakRDLFVBQUksQ0FBQ0csS0FBTCxDQUFXQyxVQUFYLEdBQXdCLEtBQXhCLENBRGlELENBRWpEO0FBQ0E7QUFDRCxLQUpNLE1BSUE7QUFDTEosVUFBSSxDQUFDRyxLQUFMLENBQVdDLFVBQVgsR0FBd0IsS0FBeEI7QUFDRDtBQUNGLEdBZkQ7QUFnQkQ7O0FBRUQsU0FBU0Usa0JBQVQsR0FBOEI7QUFDNUI7QUFDQSxTQUFPRyxNQUFNLENBQUN3QixVQUFQLENBQWtCLHFCQUFsQixFQUF5Q0UsT0FBaEQ7QUFDRCxDLENBRUQ7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLFNBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCO0FBQ3RCLE1BQU1DLGFBQWEsR0FBR3JELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUF0QjtBQUVBb0QsZUFBYSxDQUFDbkQsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBU0MsS0FBVCxFQUFnQjtBQUN0RDtBQUNBQSxTQUFLLENBQUNDLGNBQU4sR0FGc0QsQ0FHdEQ7O0FBQ0FrRCxjQUFVLENBQUNGLEdBQUQsQ0FBVjtBQUNBL0MsV0FBTyxDQUFDQyxLQUFSLENBQWM4QyxHQUFkO0FBQ0EsV0FBT0EsR0FBUDtBQUNELEdBUEQ7QUFRRDs7QUFFRCxTQUFTRSxVQUFULENBQW9CRixHQUFwQixFQUF5QjtBQUN2QjtBQUNBQSxLQUFHLENBQUNHLElBQUosQ0FBU0MsT0FBTyxFQUFoQjtBQUNBLFNBQU9KLEdBQVA7QUFDRDs7QUFFRCxTQUFTSSxPQUFULEdBQW1CO0FBQ2pCO0FBQ0EsTUFBSTdDLElBQUksR0FBRzhDLCtEQUFXLENBQUM7QUFBRUMsU0FBSyxFQUFFQyxhQUFhO0FBQXRCLEdBQUQsQ0FBdEIsQ0FGaUIsQ0FHakI7O0FBQ0FDLGdCQUFjO0FBQ2QsU0FBT2pELElBQVA7QUFDRDs7QUFFRCxTQUFTZ0QsYUFBVCxHQUF5QjtBQUN2QjtBQUNBLFNBQU8zRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0M0RCxLQUEzQztBQUNEOztBQUVELFNBQVNELGNBQVQsR0FBMEI7QUFDeEI7QUFDQTVELFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixFQUFvQzRELEtBQXBDLEdBQTRDLEVBQTVDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7O0FDckNEO0FBQUE7QUFBQTtBQUFBOztBQUVBLFNBQVNDLEdBQVQsR0FBZTtBQUNiO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLENBQ2JOLCtEQUFXLENBQUM7QUFDVkMsU0FBSyxFQUFFLGFBREc7QUFFVk0sUUFBSSxFQUFFLFdBRkk7QUFHVkMsUUFBSSxFQUFFLFlBSEk7QUFJVkMsWUFBUSxFQUFFLFFBSkE7QUFLVkMsUUFBSSxFQUFFO0FBTEksR0FBRCxDQURFLEVBUWJWLCtEQUFXLENBQUM7QUFDVkMsU0FBSyxFQUFFLGVBREc7QUFFVk8sUUFBSSxFQUFFO0FBRkksR0FBRCxDQVJFLEVBWWJSLCtEQUFXLENBQUM7QUFDVkMsU0FBSyxFQUFFLGFBREc7QUFFVk0sUUFBSSxFQUFFLFdBRkk7QUFHVkUsWUFBUSxFQUFFLE1BSEE7QUFJVkMsUUFBSSxFQUFFLElBSkk7QUFLVkMsUUFBSSxFQUFFO0FBTEksR0FBRCxDQVpFLENBQWY7QUFxQkEsU0FBT0wsUUFBUDtBQUNEOzs7Ozs7Ozs7Ozs7OztBQzFCRDtBQUFBO0FBQUEsSUFBTU4sV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FPakI7QUFBQSx3QkFOREMsS0FNQztBQUFBLE1BTkRBLEtBTUMsMkJBTk8sRUFNUDtBQUFBLHVCQUxETSxJQUtDO0FBQUEsTUFMREEsSUFLQywwQkFMTSxFQUtOO0FBQUEsdUJBSkRDLElBSUM7QUFBQSxNQUpEQSxJQUlDLDBCQUpNLEVBSU47QUFBQSwyQkFIREMsUUFHQztBQUFBLE1BSERBLFFBR0MsOEJBSFUsS0FHVjtBQUFBLHVCQUZEQyxJQUVDO0FBQUEsTUFGREEsSUFFQywwQkFGTSxLQUVOO0FBQUEsdUJBRERDLElBQ0M7QUFBQSxNQUREQSxJQUNDLDBCQURNLEtBQ047QUFDRCxTQUFPO0FBQUVWLFNBQUssRUFBTEEsS0FBRjtBQUFTTSxRQUFJLEVBQUpBLElBQVQ7QUFBZUMsUUFBSSxFQUFKQSxJQUFmO0FBQXFCQyxZQUFRLEVBQVJBLFFBQXJCO0FBQStCQyxRQUFJLEVBQUpBLElBQS9CO0FBQXFDQyxRQUFJLEVBQUpBO0FBQXJDLEdBQVA7QUFDRCxDQVREOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxVQUFVLG1CQUFPLENBQUMsc0pBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDhNQUFxRzs7QUFFdkk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiYnVuZGxlLmUzMGVhZWE4MTllMWY4YmJiZTc4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvSlMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbkBrZXlmcmFtZXMgcm90YXRpb24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH0gfVxcblxcbkBrZXlmcmFtZXMgYXBwZWFyRnJvbVJpZ2h0UHJvamVjdCB7XFxuICAwJSB7XFxuICAgIGxlZnQ6IDMwcHg7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcblxcbmJvZHksXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTsgfVxcblxcbiNjb250ZW50IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDYwcHggYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAwcHggYXV0byAzMzBweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCIgXFxcInByb2plY3RzIG1haW4gdG9kby1taXNjXFxcIjsgfVxcbiAgI2NvbnRlbnQuYnJvYWQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDY4cHggYXV0byAzMzBweDsgfVxcblxcbi8qIC0tLSBUT1Agb2YgdGhlIFBBR0UgOiBIRUFERVIgLS0tICovXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMTA2ODc3O1xcbiAgY29sb3I6ICNmNGY0ZjQ7XFxuICBmb250LXNpemU6IDEuOWVtO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGVybWFuZW50IE1hcmtlclxcXCIsIGN1cnNpdmU7XFxuICBsZXR0ZXItc3BhY2luZzogNXB4OyB9XFxuICBoZWFkZXIgI21lbnUtaWNvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIGZvbnQtc2l6ZTogNDhweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAgIGhlYWRlciAjbWVudS1pY29uOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAjMGI1MDVjOyB9XFxuICBoZWFkZXIgI2hlYWRlci10aXRsZSB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgfVxcbiAgaGVhZGVyICNzb2NpYWxzIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi8qIExFRlQgU0lERSBPRiBUSEUgUEFHRTogUFJPSkVDVFMgKi9cXG4jcHJvamVjdC1jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiBwcm9qZWN0cztcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDhweCAwcHggNXB4IC00cHggI2NhY2FjYTtcXG4gIC1tb3otYm94LXNoYWRvdzogOHB4IDBweCA1cHggLTRweCAjY2FjYWNhO1xcbiAgYm94LXNoYWRvdzogOHB4IDBweCA1cHggLTRweCAjY2FjYWNhO1xcbiAgLyogTEVGVC1TSURFIE9GIFRIRSBQQUdFOiBVc2VyIElucHV0Ki8gfVxcbiAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3Qge1xcbiAgICB3aWR0aDogMjgwcHg7XFxuICAgIG1heC13aWR0aDogMjgwcHg7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QuYnJvYWQge1xcbiAgICAgIHdpZHRoOiA2OHB4OyB9XFxuICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IHtcXG4gICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdC5icm9hZCB7XFxuICAgICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIycHg7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAwOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QuYWN0aXZlIHtcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0OmhvdmVyIC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICAgICAgYmFja2dyb3VuZDogI2YwZjBmMDtcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICBhbmltYXRpb246IGFwcGVhckZyb21SaWdodFByb2plY3QgMC4zcyBlYXNlLW91dCBmb3J3YXJkczsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0Om5vdCguYWN0aXZlKTpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLnByb2plY3QtaWNvbiB7XFxuICAgICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LWljb24uYnJvYWQge1xcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC10aXRsZS1jb3VudC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5wcm9qZWN0LXRpdGxlLWNvdW50LWNvbnRhaW5lci5icm9hZCB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI3Byb2plY3QtbGlzdCAucHJvamVjdCAucHJvamVjdC1uYW1lIHtcXG4gICAgICAgIHdpZHRoOiAxNTVweDtcXG4gICAgICAgIG1heC13aWR0aDogMTU1cHg7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmNvdW50LXRvZG9zIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICB3aWR0aDogMjlweDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1idG4ge1xcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICAgIGNvbG9yOiAjYzVjNWM1O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4yczsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0bi5icm9hZCB7XFxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjcHJvamVjdC1saXN0IC5wcm9qZWN0IC5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xcbiAgICAgICAgICBjb2xvcjogIzk5OTk5OTsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNwcm9qZWN0LWxpc3QgLnByb2plY3QgLmRlbGV0ZS1wcm9qZWN0LWJ0bjpmb2N1cyB7XFxuICAgICAgICAgIGNvbG9yOiAjNmU2ZTZlOyB9XFxuICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0ge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIG1heC13aWR0aDogMjgwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogSW5wdXQgKi9cXG4gICAgLyogU3VibWl0IGJ1dHRvbiAqLyB9XFxuICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybS5icm9hZCB7XFxuICAgICAgd2lkdGg6IDY4cHg7XFxuICAgICAgbWFyZ2luOiAwOyB9XFxuICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjbmV3LXByb2plY3Qge1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzZiNmI2YjtcXG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgICBwYWRkaW5nOiA5cHggMDtcXG4gICAgICBvdXRsaW5lOiAwO1xcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiO1xcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICAgIGZvbnQtZmFtaWx5OiBcXFwiU2VuXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjbmV3LXByb2plY3QuYnJvYWQge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjbmV3LXByb2plY3Q6Zm9jdXMge1xcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXG4gICAgICAgIGNvbG9yOiAjMTE5OThlO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzOGVmN2Q7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjbmV3LXByb2plY3Q6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXG4gICAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdCB7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDBweDtcXG4gICAgICBsZWZ0OiAxMHB4O1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBmb250LXNpemU6IDI0cHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiA2cHg7IH1cXG4gICAgICAjcHJvamVjdC1jb250YWluZXIgI25ldy1wcm9qZWN0LWZvcm0gI3N1Ym1pdC1wcm9qZWN0LmJyb2FkIHtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBsZWZ0OiA0cHg7XFxuICAgICAgICBwYWRkaW5nOiA3cHggMThweDsgfVxcbiAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3QgaW9uLWljb24ge1xcbiAgICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDtcXG4gICAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDpmb2N1cyB7XFxuICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDo6YWZ0ZXIge1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzOyB9XFxuICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgICAgICAgI3Byb2plY3QtY29udGFpbmVyICNuZXctcHJvamVjdC1mb3JtICNzdWJtaXQtcHJvamVjdDpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzhlZjdkO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cXG4gICAgICAgICNwcm9qZWN0LWNvbnRhaW5lciAjbmV3LXByb2plY3QtZm9ybSAjc3VibWl0LXByb2plY3Q6aG92ZXIgaW9uLWljb24ge1xcbiAgICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcblxcbi8qIE1pZGRsZTogUHJvamVjdCB0aXRsZSwgdG9kbyB0YXNrcyovXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBtaW4td2lkdGg6IDM3N3B4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4ICNjYWNhY2E7XFxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCAjY2FjYWNhO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4ICNjYWNhY2E7XFxuICAvKiBVc2VyIGlucHV0IHRvZG8gdGFza3MqLyB9XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gICAgbWFpbiB7XFxuICAgICAgZ3JpZC1jb2x1bW46IDIgLyA0OyB9IH1cXG4gIG1haW4gI3Byb2plY3QtdGl0bGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDEuNGVtOyB9XFxuICBtYWluIC50b2RvIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggYXV0byAyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiY2hlY2tib3ggdG9kb3RleHQgYnRuXFxcIjtcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAvKiBDdXN0b20gbWFkZSBjaGVja2JveCB3aXRoIGFmdGVyIGVsZW1lbnQgKi9cXG4gICAgLyogVGV4dCBvZiB0aGUgdG9kbyB0YXNrIHdpdGggZGV0YWlscyAqLyB9XFxuICAgIG1haW4gLnRvZG86aG92ZXIge1xcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4ICNlNGU0ZTQ7XFxuICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggI2U0ZTRlNDtcXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggI2U0ZTRlNDsgfVxcbiAgICBtYWluIC50b2RvOmhvdmVyIC5kZWxldGUtdG9kby1idG4ge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgICBhbmltYXRpb246IGFwcGVhckZyb21SaWdodFByb2plY3QgMC4zcyBlYXNlLW91dCBmb3J3YXJkczsgfVxcbiAgICBtYWluIC50b2RvIGxhYmVsIHtcXG4gICAgICBncmlkLWFyZWE6IGNoZWNrYm94OyB9XFxuICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzOyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyOjphZnRlciB7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2M1YzVjNTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIHRyYW5zaXRpb246IDAuN3M7IH1cXG4gICAgICAgIG1haW4gLnRvZG8gbGFiZWwgLnRvZG8taWNvbi1jb250YWluZXIgaW9uLWljb24ge1xcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDsgfVxcbiAgICAgICAgbWFpbiAudG9kbyBsYWJlbCAudG9kby1pY29uLWNvbnRhaW5lcjpob3Zlcjo6YWZ0ZXIge1xcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTJiMGU5OyB9XFxuICAgICAgICBtYWluIC50b2RvIGxhYmVsIC50b2RvLWljb24tY29udGFpbmVyOmhvdmVyIGlvbi1pY29uIHtcXG4gICAgICAgICAgY29sb3I6ICNlMmIwZTk7XFxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDAuNXMgZWFzZS1vdXQ7IH1cXG4gICAgbWFpbiAudG9kbyAudG9kby1jaGVja2JveCB7XFxuICAgICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICBtYWluIC50b2RvIC50b2RvLXRleHQge1xcbiAgICAgIGdyaWQtYXJlYTogdG9kb3RleHQ7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC50b2RvLXRpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xNWVtOyB9XFxuICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07IH1cXG4gICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyBzcGFuIHtcXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7IH1cXG4gICAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHNwYW4gaW1nIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgdG9wOiAycHg7IH1cXG4gICAgICAgICAgbWFpbiAudG9kbyAudG9kby10ZXh0IC5kZXRhaWxzIHNwYW4ub3ZlcmR1ZS1kYXRlIHtcXG4gICAgICAgICAgICBjb2xvcjogcmVkOyB9XFxuICAgICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyBzcGFuLmhpZ2gtcHJpb3JpdHkge1xcbiAgICAgICAgICAgIGNvbG9yOiAjZTEwMGZmOyB9XFxuICAgICAgICAgIG1haW4gLnRvZG8gLnRvZG8tdGV4dCAuZGV0YWlscyBzcGFuLm1lZGl1bS1wcmlvcml0eSB7XFxuICAgICAgICAgICAgY29sb3I6ICMzMjI3Y2U7IH1cXG4gICAgbWFpbiAudG9kbyAuZGVsZXRlLXRvZG8tYnRuIHtcXG4gICAgICBncmlkLWFyZWE6IGJ0bjtcXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgICAgIGNvbG9yOiAjZDRkNGQ0O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzOyB9XFxuICAgICAgbWFpbiAudG9kbyAuZGVsZXRlLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjYjhiOGI4OyB9XFxuICAgICAgbWFpbiAudG9kbyAuZGVsZXRlLXRvZG8tYnRuOmZvY3VzIHtcXG4gICAgICAgIGNvbG9yOiAjOTI5MjkyOyB9XFxuICBtYWluIGhyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJveC1zaGFkb3c6IDAgLTEwcHggMTBweCAtMTBweCAjOGM4YzhjIGluc2V0OyB9XFxuICBtYWluICNuZXctdG9kby1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogSW5wdXQgKi9cXG4gICAgLyogU3VibWl0IGJ1dHRvbiAqLyB9XFxuICAgIG1haW4gI25ldy10b2RvLWZvcm0gI25ldy10b2RvIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM2YjZiNmI7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgICAgcGFkZGluZzogOXB4IDA7XFxuICAgICAgb3V0bGluZTogMDtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBjb2xvcjogIzZiNmI2YjtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBmb250LWZhbWlseTogXFxcIlNlblxcXCIsIHNhbnMtc2VyaWY7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNuZXctdG9kbzpmb2N1cyB7XFxuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzO1xcbiAgICAgICAgY29sb3I6ICMxMTk5OGU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM4ZWY3ZDsgfVxcbiAgICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjbmV3LXRvZG86Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgdHJhbnNpdGlvbjogMC43cztcXG4gICAgICAgICAgY29sb3I6ICMxMTk5OGU7IH1cXG4gICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG8ge1xcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiAwcHg7XFxuICAgICAgbGVmdDogMTBweDtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogNnB4OyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG8gaW9uLWljb24ge1xcbiAgICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDtcXG4gICAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86Zm9jdXMge1xcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgIG1haW4gI25ldy10b2RvLWZvcm0gI3N1Ym1pdC10b2RvOjphZnRlciB7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7IH1cXG4gICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzpob3ZlciB7XFxuICAgICAgICBjb2xvcjogIzExOTk4ZTsgfVxcbiAgICAgICAgbWFpbiAjbmV3LXRvZG8tZm9ybSAjc3VibWl0LXRvZG86aG92ZXI6OmFmdGVyIHtcXG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzM4ZWY3ZDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XFxuICAgICAgICBtYWluICNuZXctdG9kby1mb3JtICNzdWJtaXQtdG9kbzpob3ZlciBpb24taWNvbiB7XFxuICAgICAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuXFxuLyogUmlnaHQgc2lkZSBvZiB0aGUgcGFnZSAqL1xcbiN0b2RvLW1pc2MtY29udGFpbmVyIHtcXG4gIGdyaWQtYXJlYTogdG9kby1taXNjO1xcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHotaW5kZXg6IDE7IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciB7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICAgIC1tb3otYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgICBib3gtc2hhZG93OiAtM3B4IDBweCA1cHggLTJweCAjY2FjYWNhOyB9IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICN0b2RvLW5hbWUtY2hhbmdlci1jb250YWluZXIsXFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyLFxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lcixcXG4gICN0b2RvLW1pc2MtY29udGFpbmVyICNub3RlLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwcHg7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgbGlnaHRncmV5O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IC0zcHggMHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgIC1tb3otYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTtcXG4gICAgYm94LXNoYWRvdzogLTNweCAwcHggNXB4IC0ycHggI2NhY2FjYTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjdG9kby1uYW1lLWNoYW5nZXItY29udGFpbmVyICNkYXRlLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNkYXRlLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNkYXRlLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjbm90ZS1jb250YWluZXIgI2RhdGUge1xcbiAgICAgIGNvbG9yOiAjNmI2YjZiOyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjdG9kby1uYW1lLWNoYW5nZXItY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDA7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogLTJweCAtMnB4IDVweCAtMXB4ICNjYWNhY2E7XFxuICAgIC1tb3otYm94LXNoYWRvdzogLTJweCAtMnB4IDVweCAtMXB4ICNjYWNhY2E7XFxuICAgIGJveC1zaGFkb3c6IC0ycHggLTJweCA1cHggLTFweCAjY2FjYWNhOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICN0b2RvLW5hbWUtY2hhbmdlci1jb250YWluZXIgdGV4dGFyZWEge1xcbiAgICAgIGhlaWdodDogNDBweDsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI25vdGUtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAtM3B4IDRweCA1cHggLTJweCAjY2FjYWNhO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IC0zcHggNHB4IDVweCAtMnB4ICNjYWNhY2E7XFxuICAgIGJveC1zaGFkb3c6IC0zcHggNHB4IDVweCAtMnB4ICNjYWNhY2E7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI25vdGUtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgICBoZWlnaHQ6IDE2MHB4OyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyLFxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLmxvdy1wcmlvcml0eTpob3ZlcixcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5sb3ctcHJpb3JpdHk6aG92ZXIge1xcbiAgICAgIGNvbG9yOiBncmVlbjsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLm1lZGl1bS1wcmlvcml0eTpob3ZlcixcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHk6aG92ZXIge1xcbiAgICAgIGNvbG9yOiAjMzIyN2NlOyB9XFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI3ByaW9yaXR5LWxldmVscyAubWVkaXVtLXByaW9yaXR5OmhvdmVyIH4gLmxvdy1wcmlvcml0eSxcXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI3ByaW9yaXR5LWNvbnRhaW5lciAjcHJpb3JpdHktbGV2ZWxzIC5tZWRpdW0tcHJpb3JpdHk6aG92ZXIgfiAubG93LXByaW9yaXR5IHtcXG4gICAgICBjb2xvcjogIzMyMjdjZTsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjZGF0ZS1jaGFuZ2VyICNwcmlvcml0eS1sZXZlbHMgLmhpZ2gtcHJpb3JpdHk6aG92ZXIsXFxuICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNwcmlvcml0eS1jb250YWluZXIgI3ByaW9yaXR5LWxldmVscyAuaGlnaC1wcmlvcml0eTpob3ZlciB7XFxuICAgICAgY29sb3I6ICNlMTAwZmY7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjcHJpb3JpdHktbGV2ZWxzIGlvbi1pY29uLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNwcmlvcml0eS1sZXZlbHMgaW9uLWljb24ge1xcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2RhdGUtY2hhbmdlciAjZGF0ZS1yZW1vdmVyIGlvbi1pY29uLFxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNkYXRlLXJlbW92ZXIgaW9uLWljb24ge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDRweDtcXG4gICAgICBjb2xvcjogIzZiNmI2YjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgLS1pb25pY29uLXN0cm9rZS13aWR0aDogNDhweDsgfVxcbiAgICAgICN0b2RvLW1pc2MtY29udGFpbmVyICNkYXRlLWNoYW5nZXIgI2RhdGUtcmVtb3ZlciBpb24taWNvbjpob3ZlcixcXG4gICAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjcHJpb3JpdHktY29udGFpbmVyICNkYXRlLXJlbW92ZXIgaW9uLWljb246aG92ZXIge1xcbiAgICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciAubWlzYy10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07XFxuICAgIGNvbG9yOiAjNmI2YjZiO1xcbiAgICB3aWR0aDogMTIwcHg7IH1cXG4gICN0b2RvLW1pc2MtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNlblxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMS4xZW07IH1cXG4gICAgI3RvZG8tbWlzYy1jb250YWluZXIgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gICAgICBjb2xvcjogIzZiNmI2YjsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgICAgIGNvbG9yOiAjMTE5OThlOyB9XFxuICAjdG9kby1taXNjLWNvbnRhaW5lciBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgI3RvZG8tbWlzYy1jb250YWluZXIgI2Nsb3NlLWRldGFpbHMtYnRuIHtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB3aWR0aDogNjJweDsgfVxcbiAgICAjdG9kby1taXNjLWNvbnRhaW5lciAjY2xvc2UtZGV0YWlscy1idG4gaW9uLWljb24ge1xcbiAgICAgIC0taW9uaWNvbi1zdHJva2Utd2lkdGg6IDQ4cHg7XFxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG4gICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBsaWdodGdyZXk7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcXG4gICAgICB3aWR0aDogNjBweDtcXG4gICAgICBjb2xvcjogI2M1YzVjNTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCA3cHggLTEzcHggI2NhY2FjYSwgMHB4IDVweCAxMHB4IDBweCAjY2FjYWNhO1xcbiAgICAgIC1tb3otYm94LXNoYWRvdzogaW5zZXQgMHB4IDE1cHggN3B4IC0xM3B4ICNjYWNhY2EsIDBweCA1cHggMTBweCAwcHggI2NhY2FjYTtcXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMTVweCA3cHggLTEzcHggI2NhY2FjYSwgMHB4IDVweCAxMHB4IDBweCAjY2FjYWNhOyB9XFxuICAgICAgI3RvZG8tbWlzYy1jb250YWluZXIgI2Nsb3NlLWRldGFpbHMtYnRuIGlvbi1pY29uOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiAjNmU2ZTZlOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBcIi4uL1NDU1Mvc3R5bGUuc2Nzc1wiO1xuaW1wb3J0ICogYXMgTWVudUJ0biBmcm9tIFwiLi9zdHlsZS9tZW51LmpzXCI7XG5pbXBvcnQgeyB0YXNrc1Nob3dEZXRhaWxzIH0gZnJvbSBcIi4vc3R5bGUvZGV0YWlscy5qc1wiO1xuaW1wb3J0ICogYXMgUmVzaXplIGZyb20gXCIuL3N0eWxlL3Jlc2l6ZS5qc1wiO1xuaW1wb3J0IHt9IGZyb20gXCIuL3Rhc2tzL2ZhY3RvcnkuanNcIjtcbmltcG9ydCAqIGFzIEFkZFRhc2tCdG4gZnJvbSBcIi4vdGFza3MvYWRkLmpzXCI7XG5pbXBvcnQge30gZnJvbSBcIi4vdGFza3MvcmVuZGVyLmpzXCI7XG5pbXBvcnQgKiBhcyBEZWZhdWx0cyBmcm9tIFwiLi90YXNrcy9kZWZhdWx0cy5qc1wiO1xuXG4vLyBTdHlsZVxuTWVudUJ0bi5zaG93UHJvamVjdHMoKTtcblJlc2l6ZS5yZXNwb25zaXZlKCk7XG50YXNrc1Nob3dEZXRhaWxzKCk7XG5cbi8vIEFwcCBMb2dpY1xuXG4vLyBkZWZpbmUgdGFza3MgYXJyYXkgd2hpY2ggaXMgdG9kb2xpc3RcbmxldCB0YXNrcyA9IFsuLi5EZWZhdWx0cy5nZXQoKV07XG5cbi8vIE1ha2UgYnV0dG9uIE5ldyBUYXNrIGFkZCB0YXNrIHRvIGEgZGVmaW5lZCBhcnJheVxuQWRkVGFza0J0bi5hZGRUYXNrVG8odGFza3MpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC1wcm9qZWN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS50YWJsZSh0YXNrcyk7XG59KTtcbiIsImltcG9ydCB7IHNjcmVlbkxlc3NUaGVuMTAyNCB9IGZyb20gXCIuL3Jlc2l6ZS5qc1wiO1xuXG5mdW5jdGlvbiB0YXNrc1Nob3dEZXRhaWxzKCkge1xuICAvLyBNYWtlIHRvZG8gdGFza3Mgc2hvdyBkZXRhaWxzIG9uIGNsaWNrIChmcm9tIHJpZ2h0IHNpZGUpXG4gIHRvZG9MaXN0U2hvd0RldGFpbHMoKTtcbiAgLy8gTWFrZSBidXR0b24gaW4gZGV0YWlscyBpbnRlcmFjdDogaGlkZSBkZXRhaWxzXG4gIEFycm93SGlkZURldGFpbHMoKTtcbn1cblxuZnVuY3Rpb24gdG9kb0xpc3RTaG93RGV0YWlscygpIHtcbiAgLy8gTWFrZSB0b2RvIGxpc3RzIHNob3cgZGV0YWlscyBvbmNsaWNrXG4gIGxldCB0b2RvVGFza3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb1wiKTtcbiAgZm9yIChsZXQgdGFzayBvZiB0b2RvVGFza3MpIHtcbiAgICB0YXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93RGV0YWlscygpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBBcnJvd0hpZGVEZXRhaWxzKCkge1xuICAvLyBNYWtlIEFycm93IGhpZGUgRGV0YWlscyBvbmNsaWNrXG4gIGxldCBhcnJvd0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2UtZGV0YWlscy1idG5cIik7XG5cbiAgYXJyb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNob3dEZXRhaWxzKCkpO1xufVxuXG5mdW5jdGlvbiBzaG93RGV0YWlscygpIHtcbiAgbGV0IGRldGFpbHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tbWlzYy1jb250YWluZXJcIik7XG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIC8vIElmIGRldGFpbHMgYXJlIHNob3duIHRoZW4gaGlkZSB0aGVtIGFuZCBtYWtlIG1haW4gdGFrZSBhbGwgdGhlIHNwYWNlXG4gIC8vIEVsc2UgU2hvdyBkZXRhaWxzIGFuZCBuYXJyb3cgbWFpbnMgdG8gZml0IHRoZSBtaWRkbGUgY29sdW1uXG4gIGlmIChnZXRDb21wdXRlZERpc3BsYXkoZGV0YWlscykgPT09IFwiZmxleFwiKSB7XG4gICAgaGlkZShkZXRhaWxzKTtcbiAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvNFwiO1xuICB9IGVsc2Uge1xuICAgIHNob3dBc0ZsZXgoZGV0YWlscyk7XG4gICAgLy8gSWYgc2NyZWVuIGlzIGxlc3MgdGhlbiAxMDI0IGxlYXZlIG1pZGRsZSBjb2x1bW4gd2lkZSBhbmQgcmlnaHQgY29sdW1uIG92ZXJsYXBcbiAgICBpZiAoIXNjcmVlbkxlc3NUaGVuMTAyNCgpKSBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvM1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkRGlzcGxheShlbGVtZW50KSB7XG4gIGxldCBjb21wdXRlZERpc3BsYXkgPSB3aW5kb3dcbiAgICAuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KVxuICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwiZGlzcGxheVwiKTtcbiAgcmV0dXJuIGNvbXB1dGVkRGlzcGxheTtcbn1cblxuZnVuY3Rpb24gc2hvd0FzRmxleChlbGVtZW50KSB7XG4gIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xufVxuXG5mdW5jdGlvbiBoaWRlKGVsZW1lbnQpIHtcbiAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCB7IHRhc2tzU2hvd0RldGFpbHMsIGdldENvbXB1dGVkRGlzcGxheSB9O1xuIiwiZnVuY3Rpb24gc2hvd1Byb2plY3RzKCkge1xuICAvLyBNYWtlIG1lbnUgYnV0dG9uIGluIHRoZSB0b3AgbGVmdCBjb3JuZXIgZG8gd29yayAoY2hhbmdlIHByb2plY3RzIHRvIHdpZGUgb3IgbmFycm93KVxuICBkb2N1bWVudFxuICAgIC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvblwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYnJvYWRlblByb2plY3RDb250YWluZXIoKSk7XG59XG5cbmZ1bmN0aW9uIGJyb2FkZW5Qcm9qZWN0Q29udGFpbmVyKCkge1xuICAvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2UgYW5kIHRvZ2dsZSBhIGNsYXNzICdicm9hZCcgb24gZWFjaFxuICBmb3IgKGxldCBlbGVtZW50IG9mIGdldEVsZW1lbnRzVG9Ccm9hZCgpKSB7XG4gICAgdG9nZ2xlQnJvYWQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWluaW1pemVQcm9qZWN0Q29udGFpbmVyKCkge1xuICAvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGZyb20gdGhlIHBhZ2UgYW5kIHRvZ2dsZSBhIGNsYXNzICdicm9hZCcgb24gZWFjaFxuICBmb3IgKGxldCBlbGVtZW50IG9mIGdldEVsZW1lbnRzVG9Ccm9hZCgpKSB7XG4gICAgYWRkQnJvYWQoZWxlbWVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQnJvYWQoZWxlbWVudCkge1xuICAvLyBSZW1vdmUgY2xhc3MgJ2Jyb2FkJyBmcm9tIGFuIGVsZW1lbnRcbiAgLy8gdGhpcyBjbGFzcyBjaGFuZ2VzIGxlZnQtc2lkZSBwYWdlIG1lbnUgbWFraW5nIGl0IHNtYWxsZXJcbiAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYnJvYWRcIik7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUJyb2FkKGVsZW1lbnQpIHtcbiAgLy8gQWRkL3JlbW92ZSBjbGFzcyAnYnJvYWQnIHRvIGFuIGVsZW1lbnRcbiAgLy8gdGhpcyBjbGFzcyBjaGFuZ2VzIGxlZnQtc2lkZSBwYWdlIG1lbnUgbWFraW5nIGl0IHNtYWxsZXJcbiAgZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYnJvYWRcIik7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRzVG9Ccm9hZCgpIHtcbiAgLy8gVGFrZSBzb21lIERPTSBlbGVtZW50cyBmcm9tIHRoZSBwYWdlXG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbGlzdFwiKTtcbiAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdFwiKTtcbiAgbGV0IHByb2plY3RJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtaWNvblwiKTtcbiAgbGV0IHByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICBcInByb2plY3QtdGl0bGUtY291bnQtY29udGFpbmVyIFwiXG4gICk7XG4gIGxldCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRlbGV0ZS1wcm9qZWN0LWJ0blwiKTtcbiAgbGV0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1mb3JtXCIpO1xuICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3RcIik7XG4gIGxldCBzdWJtaXRQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXQtcHJvamVjdFwiKTtcblxuICAvLyBQdXQgdGhlbSBpbiB0aGUgYXJyYXkgYW5kIHJldHVybiBpdFxuICBsZXQgZWxlbWVudHMgPSBbXG4gICAgY29udGVudCxcbiAgICBwcm9qZWN0TGlzdCxcbiAgICAuLi5wcm9qZWN0LFxuICAgIC4uLnByb2plY3RJY29uLFxuICAgIC4uLnByb2plY3RUaXRsZUNvdW50Q29udGFpbmVyLFxuICAgIC4uLmRlbGV0ZVByb2plY3RCdG4sXG4gICAgbmV3UHJvamVjdEZvcm0sXG4gICAgbmV3UHJvamVjdCxcbiAgICBzdWJtaXRQcm9qZWN0XG4gIF07XG4gIHJldHVybiBlbGVtZW50cztcbn1cblxuZXhwb3J0IHsgc2hvd1Byb2plY3RzLCBtaW5pbWl6ZVByb2plY3RDb250YWluZXIgfTtcbiIsImltcG9ydCB7IGdldENvbXB1dGVkRGlzcGxheSB9IGZyb20gXCIuL2RldGFpbHMuanNcIjtcbmltcG9ydCB7IG1pbmltaXplUHJvamVjdENvbnRhaW5lciB9IGZyb20gXCIuL21lbnUuanNcIjtcblxuZnVuY3Rpb24gcmVzcG9uc2l2ZSgpIHtcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIGxldCBkZXRhaWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLW1pc2MtY29udGFpbmVyXCIpO1xuICAvLyBSZXNpemluZyB3aW5kb3cgbWFrZXMgbWlkZGxlIGNvbHVtbiBmaXRcbiAgd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDI0cHgpXCIpLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAvLyBJZiBzY3JlZW4gaXMgbmFycm93ZXIgdGhhbiAxMDI0cHggYW5kIGRldGFpbHMgYXJlIG9wZW4gKHJpZ2h0IHNpZGUgb2YgdGhlIHBhZ2UpXG4gICAgLy8gdGhhbiBtaW5pbWl6ZSBsZWZ0IHNpZGUgYW5kIG1ha2UgXCJtYWluXCIgZml0IHRoZSB3aG9sZSBzZWNvbmQgY29sdW1uXG4gICAgaWYgKHNjcmVlbkxlc3NUaGVuMTAyNCgpICYmIGdldENvbXB1dGVkRGlzcGxheShkZXRhaWxzKSA9PT0gXCJmbGV4XCIpIHtcbiAgICAgIG1haW4uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMi80XCI7XG4gICAgICBtaW5pbWl6ZVByb2plY3RDb250YWluZXIoKTtcbiAgICAgIC8vIERvZXNuJ3QgbWF0dGVyIHRoZSBzaXplIG9mIHRoZSBzY3JlZW4sXG4gICAgICAvLyBpZiBkZXRhaWxzIGFyZSBjbG9zZWQgJ21haW4nIGZpdCB0aGUgd2hvbGUgc2Vjb25kIGNvbHVtblxuICAgIH0gZWxzZSBpZiAoZ2V0Q29tcHV0ZWREaXNwbGF5KGRldGFpbHMpID09PSBcIm5vbmVcIikge1xuICAgICAgbWFpbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIyLzRcIjtcbiAgICAgIC8vIEVsc2UgZm9yIGUuZy4gd2hlbiBzY3JlZW4gYXJlIHdpZGVyIHRoZW4gMTAyNHB4IGFuZFxuICAgICAgLy8gZGV0YWlscyBhcmUgb3BlbiwgdGhlbiBtYWluIGlzIHRoZSBjb2x1bW4gaW4gdGhlIG1pZGRsZVxuICAgIH0gZWxzZSB7XG4gICAgICBtYWluLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjIvM1wiO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNjcmVlbkxlc3NUaGVuMTAyNCgpIHtcbiAgLy8gQ2hlY2sgaWYgc2NyZWVuIGlzIGxlc3MgdGhlbiAxMDI0cHggd2lkZVxuICByZXR1cm4gd2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMDI0cHgpXCIpLm1hdGNoZXM7XG59XG5cbi8vIFdoZW4gcmVzaXppbmcgd2luZG93IG1pZGRsZSBjb2x1bW4gcmVzaXplIGl0c2VsZiB0byBiZSByZXNwb25zaXZlXG5leHBvcnQgeyByZXNwb25zaXZlLCBzY3JlZW5MZXNzVGhlbjEwMjQgfTtcbiIsImltcG9ydCB7IHRhc2tGYWN0b3J5IH0gZnJvbSBcIi4vZmFjdG9yeS5qc1wiO1xuXG5mdW5jdGlvbiBhZGRUYXNrVG8oYXJyKSB7XG4gIGNvbnN0IHN1Ym1pdFRvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdC10b2RvXCIpO1xuXG4gIHN1Ym1pdFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gUHJldmVudCBkZWZhdWx0IHN1Ym1pdCBiZWhhdmlvclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gR2V0IHRhc2sgbmFtZSBmcm9tIFVzZXIgYW5kIGFkZCBpdCB0byB0YXNrcyBhcnJheVxuICAgIHB1c2hUYXNrVG8oYXJyKTtcbiAgICBjb25zb2xlLnRhYmxlKGFycik7XG4gICAgcmV0dXJuIGFycjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHB1c2hUYXNrVG8oYXJyKSB7XG4gIC8vIFB1c2ggdGFzayB0byBhcnJheVxuICBhcnIucHVzaChnZXRUYXNrKCkpO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrKCkge1xuICAvLyBHZXQgdXNlciBpbnB1dCB2YWx1ZSwgc2F2ZSBpdFxuICBsZXQgdGFzayA9IHRhc2tGYWN0b3J5KHsgdGl0bGU6IGdldElucHV0VmFsdWUoKSB9KTtcbiAgLy8gYW5kIGNsZWFyIGlucHV0XG4gIGNsZWFyVGFza0lucHV0KCk7XG4gIHJldHVybiB0YXNrO1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAvLyBHZXQgdXNlciBpbnB1dCB2YWx1ZSBhcyBOZXcgVGFzayA6IFNUUklOR1xuICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdG9kb1wiKS52YWx1ZTtcbn1cblxuZnVuY3Rpb24gY2xlYXJUYXNrSW5wdXQoKSB7XG4gIC8vIENsZWFyIHVzZXIgaW5wdXRcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdG9kb1wiKS52YWx1ZSA9IFwiXCI7XG59XG5cbmV4cG9ydCB7IGdldFRhc2ssIGFkZFRhc2tUbyB9O1xuIiwiaW1wb3J0IHsgdGFza0ZhY3RvcnkgfSBmcm9tIFwiLi9mYWN0b3J5LmpzXCI7XG5cbmZ1bmN0aW9uIGdldCgpIHtcbiAgLy8gVGhpcyBmdW5jdGluIHNpbXBseSBjcmVhdGUgYW4gYXJyYXkgd2l0aCBkZWZhdWx0IHRhc2tzIGluIGl0XG4gIGxldCBhbGxUYXNrcyA9IFtcbiAgICB0YXNrRmFjdG9yeSh7XG4gICAgICB0aXRsZTogXCJMZWFybiBzdHVmZlwiLFxuICAgICAgZnJvbTogXCJQcm9qZWN0IDJcIixcbiAgICAgIGRhdGU6IFwiMTUuMDMuMjAyMFwiLFxuICAgICAgcHJpb3JpdHk6IFwibWVkaXVtXCIsXG4gICAgICBub3RlOiB0cnVlLFxuICAgIH0pLFxuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIGVuZ2xpc2hcIixcbiAgICAgIGRhdGU6IFwiMTAuMDEuMjAyMFwiLFxuICAgIH0pLFxuICAgIHRhc2tGYWN0b3J5KHtcbiAgICAgIHRpdGxlOiBcIkxlYXJuIHN0dWZmXCIsXG4gICAgICBmcm9tOiBcIlByb2plY3QgMlwiLFxuICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuICAgICAgbm90ZTogdHJ1ZSxcbiAgICAgIGRvbmU6IHRydWUsXG4gICAgfSksXG4gIF07XG5cbiAgcmV0dXJuIGFsbFRhc2tzO1xufVxuXG5leHBvcnQgeyBnZXQgfTtcbiIsImNvbnN0IHRhc2tGYWN0b3J5ID0gZnVuY3Rpb24gKHtcbiAgdGl0bGUgPSBcIlwiLFxuICBmcm9tID0gXCJcIixcbiAgZGF0ZSA9IFwiXCIsXG4gIHByaW9yaXR5ID0gXCJsb3dcIixcbiAgbm90ZSA9IGZhbHNlLFxuICBkb25lID0gZmFsc2UsXG59KSB7XG4gIHJldHVybiB7IHRpdGxlLCBmcm9tLCBkYXRlLCBwcmlvcml0eSwgbm90ZSwgZG9uZSB9O1xufTtcblxuZXhwb3J0IHsgdGFza0ZhY3RvcnkgfTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9