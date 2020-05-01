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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  var itemMenu = $('.menu li');
  var scrolldocument = $(document).scrollTop();
  var scrollContainerModal = $('.modal-container').scrollTop();
  var html = $('body').html();
  $('.chat').click(function () {
    $('.msg').toggle();
    $('.close2').toggle();
    $('.modal-chat').slideToggle();
    $('.modal-container').scroll(function () {
      var currentScrollContainer = $('.modal-container').scrollTop();
      $('.header').css({
        'top': '-' + currentScrollContainer / 2 + 'px',
        'opacity': 1 - currentScrollContainer / 120
      });
      scrollContainerModal = currentScrollContainer;
    });
  });
  itemMenu.mouseenter(function () {
    $(this).find('.menu-tendina').fadeIn('fast');
  });
  itemMenu.mouseleave(function () {
    $(this).find('.menu-tendina').fadeOut();
  });
  $('.hamburger').click(function () {
    $('.hamburger-bars').toggle();
    $('.close').toggle();
    $('.hamburger-menu').toggleClass('active');
  });
  $(document).scroll(function () {
    var currentScroll = $(document).scrollTop();

    if (scrolldocument > currentScroll) {
      $('header').css('top', 0);
    } else {
      $('header').css('top', '-100px');
    }

    scrolldocument = currentScroll;

    if (!scrolldocument == 0) {
      $('header nav .menu li.sign-up ').css({
        'background-color': '#2F478F'
      });
      $('header nav .menu li.sign-up a ').css({
        'color': '#fff'
      });
    } else {
      $('header nav .menu li.sign-up ').css({
        'background-color': '#fff'
      });
      $('header nav .menu li.sign-up a ').css({
        'color': '#2F478F'
      });
    }
  });
  $('header nav .menu li.sign-up').mouseenter(function () {
    $(this).css({
      'background-color': '#2F478F'
    });
    $(this).find('a').css({
      'color': '#fff'
    });
  });
  $('header nav .menu li.sign-up').mouseleave(function () {
    $(this).css({
      'background-color': '#fff'
    });
    $(this).find('a').css({
      'color': '#2F478F'
    });
  });
});

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Pep/Desktop/Esercizi Boolean/sass-teambit/src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! /Users/Pep/Desktop/Esercizi Boolean/sass-teambit/src/scss/app.scss */"./src/scss/app.scss");


/***/ })

/******/ });