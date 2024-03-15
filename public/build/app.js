"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scss/main.scss */ "./assets/scss/main.scss");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);








__webpack_require__(/*! waypoints/lib/noframework.waypoints.js */ "./node_modules/waypoints/lib/noframework.waypoints.js");
var general = {
  "mqBreakpoints": {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1156,
    sxl: 1399,
    xxl: 1580
  },
  "animationHandler": function animationHandler() {
    var windowHeight = window.innerHeight;
    var yPxTrigger, yPercentTrigger;

    // Triggering on scroll
    var triggerAnimation = [
    // {
    //     id: 'home-intro',
    //     offsetTop: (1 * window.innerHeight),
    //     revert: false,
    //     handler: function (direction) {
    //         if (direction === 'down') {
    //             document.getElementById('home-intro').classList.add('-active');
    //             document.getElementById('home-intro').classList.add('animate__animated');
    //             document.getElementById('home-intro').classList.add('animate__fadeIn');
    //         }
    //     }
    // },
    {
      id: 'home-search-bar',
      offsetTop: 1 * window.innerHeight,
      revert: false,
      handler: function handler(direction) {
        if (direction === 'down') {
          document.getElementById('home-search-bar').classList.add('-active');
          document.getElementById('home-search-bar').classList.add('animate__animated');
          document.getElementById('home-search-bar').classList.add('animate__fadeInUp');
        }
      }
    }, {
      id: 'home-training-list',
      offsetTop: 1 * window.innerHeight,
      revert: false,
      handler: function handler(direction) {
        if (direction === 'down') {
          document.getElementById('home-training-list').classList.add('-active');
          document.getElementById('home-training-list').classList.add('animate__animated');
          document.getElementById('home-training-list').classList.add('animate__fadeInUp');
        }
      }
    }, {
      id: 'home-training-content',
      offsetTop: 1 * window.innerHeight,
      revert: false,
      handler: function handler(direction) {
        if (direction === 'down') {
          document.getElementById('home-training-content').classList.add('-active');
          document.getElementById('home-training-content').classList.add('animate__animated');
          document.getElementById('home-training-content').classList.add('animate__fadeInUp');
        }
      }
    }, {
      id: 'home-offer-content',
      offsetTop: 0.8 * window.innerHeight,
      revert: false,
      handler: function handler(direction) {
        if (direction === 'down') {
          document.getElementById('home-offer-content').classList.add('-active');
          document.getElementById('home-offer-content').classList.add('animate__animated');
          document.getElementById('home-offer-content').classList.add('animate__fadeInUp');
        }
      }
    }, {
      id: 'home-offer-listing',
      offsetTop: 0.85 * window.innerHeight,
      revert: false,
      handler: function handler(direction) {
        if (direction === 'down') {
          document.getElementById('home-offer-listing').classList.add('-active');
          document.getElementById('home-offer-listing').classList.add('animate__animated');
          document.getElementById('home-offer-listing').classList.add('animate__fadeInRight');
        }
      }
    }, {
      id: 'home-newsletter',
      offsetTop: 0.75 * window.innerHeight,
      revert: false,
      handler: function handler(direction) {
        if (direction === 'down') {
          document.getElementById('home-newsletter').classList.add('-active');
          document.getElementById('home-newsletter').classList.add('animate__animated');
          document.getElementById('home-newsletter').classList.add('animate__fadeIn');
        }
      }
    }, {
      id: 'home-newsletter-img',
      offsetTop: 0.75 * window.innerHeight,
      revert: false,
      handler: function handler(direction) {
        if (direction === 'down') {
          document.getElementById('home-newsletter-img').classList.add('-active');
          document.getElementById('home-newsletter-img').classList.add('animate__animated');
          document.getElementById('home-newsletter-img').classList.add('animate__fadeInLeft');
        }
      }
    }];
    jquery__WEBPACK_IMPORTED_MODULE_7___default().each(triggerAnimation, function (key, animation) {
      if (jquery__WEBPACK_IMPORTED_MODULE_7___default()('#' + animation.id).length) {
        if (animation.revert === false) {
          // Triggering with offset
          yPxTrigger = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#' + animation.id).offset().top - animation.offsetTop;
          yPercentTrigger = '-' + Math.round(yPxTrigger / windowHeight * 100) + '%';
        } else {
          // Triggering when scroll up and element hidden from screen
          yPxTrigger = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#' + animation.id).offset().top - windowHeight + jquery__WEBPACK_IMPORTED_MODULE_7___default()('#' + animation.id).height();
          yPercentTrigger = '-' + Math.round(yPxTrigger / windowHeight * 100) + '%';
        }
        window['spyscroll-animation-' + key] = new Waypoint({
          element: document.getElementById('js-main'),
          handler: animation.handler,
          offset: yPercentTrigger
        });
      }
    });
    if (window.pageYOffset === 0) {
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(window).scroll();
    }
  },
  "buttonHoverHandler": function buttonHoverHandler() {
    var buttons = jquery__WEBPACK_IMPORTED_MODULE_7___default()('.btn');
    buttons.mouseenter(function (e) {
      var parentOffset = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).offset();
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).prev(".btn-fx-circle").css({
        "left": relX,
        "top": relY
      });
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).prev(".btn-fx-circle").removeClass("desplode-circle");
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).prev(".btn-fx-circle").addClass("explode-circle");
    });
    buttons.mouseleave(function (e) {
      var parentOffset = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).offset();
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).prev(".btn-fx-circle").css({
        "left": relX,
        "top": relY
      });
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).prev(".btn-fx-circle").removeClass("explode-circle");
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).prev(".btn-fx-circle").addClass("desplode-circle");
    });
    var stretchedLink = jquery__WEBPACK_IMPORTED_MODULE_7___default()('.js-btn-fx-a');
    stretchedLink.mouseenter(function (e) {
      var parentOffset = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).offset();
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).prev(".btn-fx-circle").css({
        "left": relX,
        "top": relY
      });
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).prev(".btn-fx-circle").removeClass("desplode-circle");
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).prev(".btn-fx-circle").addClass("explode-circle");
    });
    stretchedLink.mouseleave(function (e) {
      var parentOffset = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).offset();
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).prev(".btn-fx-circle").css({
        "left": relX,
        "top": relY
      });
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).prev(".btn-fx-circle").removeClass("explode-circle");
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).prev(".btn-fx-circle").addClass("desplode-circle");
    });
  },
  "offersHandler": function offersHandler() {
    var offers = jquery__WEBPACK_IMPORTED_MODULE_7___default()('.js-offer-expandable');
    var button = null;
    if (offers.length) {
      offers.each(function (k, v) {
        var $this = jquery__WEBPACK_IMPORTED_MODULE_7___default()(this);
        $this.on('click', function (e) {
          if (e.target.matches('svg') || e.target.matches('use')) {
            $this.removeClass('-center');
            $this.removeClass('-expand');
            offers.removeClass('-resized');
            $this.parent().removeClass('-open');
          } else {
            if (!$this.hasClass('-center')) {
              offers.addClass('-resized');
              offers.removeClass('-center');
              offers.removeClass('-expand');
              $this.removeClass('-resized');
              $this.addClass('-center');
              $this.parent().addClass('-open');
              setTimeout(function () {
                $this.addClass('-expand');
              }, 400);
            }
          }
        });
      });
    }
  },
  "menuHandler": function menuHandler() {
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('.navbar-toggler').on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_7___default()('body').toggleClass('menu-open');
    });

    // if ( !document.getElementById('js-body').classList.contains('js-menu-fixed')){
    //     let waypointText = new Waypoint({
    //         element: document.getElementById('js-main'),
    //         handler: function handler(direction) {
    //             if (direction === 'down') {
    //                 document.getElementById('js-body').classList.add('js-menu-fixed');
    //             } else {
    //                 document.getElementById('js-body').classList.remove('js-menu-fixed');
    //             }
    //         },
    //         // offset: '-10'
    //     });
    // }

    if (document.getElementById('js-body').classList.contains('-transparent')) {
      var waypointText = new Waypoint({
        element: document.getElementById('js-main'),
        handler: function handler(direction) {
          if (direction === 'down') {
            document.getElementById('js-body').classList.remove('-transparent');
          } else {
            document.getElementById('js-body').classList.add('-transparent');
          }
        },
        offset: '-10'
      });
    }
    var waypointTMobile = new Waypoint({
      element: document.getElementById('js-main'),
      handler: function handler(direction) {
        if (direction === 'down') {
          document.getElementById('js-body').classList.add('js-menu-mobile-fixed');
        } else {
          document.getElementById('js-body').classList.remove('js-menu-mobile-fixed');
        }
      },
      offset: '-5%'
    });
  },
  "trainingHandler": function trainingHandler() {
    if (window.innerWidth >= general.mqBreakpoints.sxl) {
      var form = document.getElementById('contact');
      var menu = document.getElementById('js-training-menu');
      var hasScrollAnim = false;
      var hasScroll = false;
      if (form && menu) {
        window.onscroll = function () {
          var height = form.offsetTop;
          if (window.scrollY + menu.offsetHeight + 80 >= height) {
            // change target to number

            if (!hasScroll) {
              hasScrollAnim = false;
            }
            if (hasScrollAnim) {
              document.getElementById('js-training-menu').style.position = 'absolute';
              document.getElementById('js-training-menu').style.bottom = '16px';
              document.getElementById('js-training-menu').style.top = 'auto';
            }
          } else {
            document.getElementById('js-training-menu').style.position = 'fixed';
            document.getElementById('js-training-menu').style.bottom = 'unset';
            document.getElementById('js-training-menu').style.top = 'unset';
          }
          hasScroll = true;
        };
        var trigger = new Event('scroll');
        window.dispatchEvent(trigger);
      } else if (menu) {
        var footer = document.getElementById('footer');
        window.onscroll = function () {
          var height = footer.offsetTop;
          if (window.scrollY + menu.offsetHeight + 230 >= height) {
            // change target to number

            if (!hasScroll) {
              hasScrollAnim = false;
            }
            if (hasScrollAnim) {
              document.getElementById('js-training-menu').style.position = 'absolute';
              document.getElementById('js-training-menu').style.bottom = '0';
              document.getElementById('js-training-menu').style.top = 'auto';
            }
          } else {
            document.getElementById('js-training-menu').style.position = 'fixed';
            document.getElementById('js-training-menu').style.bottom = 'unset';
            document.getElementById('js-training-menu').style.top = 'unset';
          }
          hasScroll = true;
        };
        var _trigger = new Event('scroll');
        window.dispatchEvent(_trigger);
      }
    }
  },
  "searchBarHandler": function searchBarHandler() {
    var buttonsOpen = document.querySelectorAll('.js-searchbar-opening');
    var buttonClose = document.querySelector('.js-searchbar-closing');
    buttonsOpen.forEach(function ($button) {
      return $button.addEventListener('click', function (event) {
        var panel = document.querySelector('#searchbar');
        panel.classList.remove('animate__animated', 'animate__fadeOutRight', 'animate__fadeInRight');
        panel.classList.add('animate__animated', 'animate__fadeInRight');
      });
    });
    buttonClose.addEventListener('click', function () {
      var panel = document.querySelector('#searchbar');
      panel.classList.add('animate__animated', 'animate__fadeOutRight');
      panel.classList.remove('animate__animated');
    });
  },
  "contactHandler": function contactHandler() {
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('.js-select-change').on('click', function () {
      var select = jquery__WEBPACK_IMPORTED_MODULE_7___default()('#' + jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).data('select-id'));
      select.find('option[value=' + jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).data('select-option') + ']').attr('selected', 'selected');
    });
  },
  "sessionSlotHandler": function sessionSlotHandler() {
    jquery__WEBPACK_IMPORTED_MODULE_7___default()('.js-training-slot-btn').on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_7___default()(this).toggleClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_7___default()('.js-training-slot-wrapper').toggleClass('active');
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (general);
(function ($) {
  $(document).ready(function () {
    general.buttonHoverHandler();
    general.animationHandler();
    general.offersHandler();
    general.trainingHandler();
    general.searchBarHandler();
    general.contactHandler();
    general.menuHandler();
    general.sessionSlotHandler();
  });
})((jquery__WEBPACK_IMPORTED_MODULE_7___default()));

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_jquery_dist_jquery_js-no-5e286e"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7SUFDeEJsRyxPQUFPLENBQUNpRSxXQUFXLENBQUMsQ0FBQztJQUNyQmpFLE9BQU8sQ0FBQ3VHLGtCQUFrQixDQUFDLENBQUM7RUFDaEMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxFQUFFekcsK0NBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUN2WEwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL21haW4uc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcCc7XG5pbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbnJlcXVpcmUoJ3dheXBvaW50cy9saWIvbm9mcmFtZXdvcmsud2F5cG9pbnRzLmpzJyk7XG5cbmNvbnN0IGdlbmVyYWwgPSB7XG4gICAgXCJtcUJyZWFrcG9pbnRzXCI6IHtcbiAgICAgICAgeHM6IDAsXG4gICAgICAgIHNtOiA1NzYsXG4gICAgICAgIG1kOiA3NjgsXG4gICAgICAgIGxnOiA5OTIsXG4gICAgICAgIHhsOiAxMTU2LFxuICAgICAgICBzeGw6IDEzOTksXG4gICAgICAgIHh4bDogMTU4MCxcbiAgICB9LFxuXG4gICAgXCJhbmltYXRpb25IYW5kbGVyXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIGxldCB5UHhUcmlnZ2VyLCB5UGVyY2VudFRyaWdnZXI7XG5cbiAgICAgICAgLy8gVHJpZ2dlcmluZyBvbiBzY3JvbGxcbiAgICAgICAgY29uc3QgdHJpZ2dlckFuaW1hdGlvbiA9IFtcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICBpZDogJ2hvbWUtaW50cm8nLFxuICAgICAgICAgICAgLy8gICAgIG9mZnNldFRvcDogKDEgKiB3aW5kb3cuaW5uZXJIZWlnaHQpLFxuICAgICAgICAgICAgLy8gICAgIHJldmVydDogZmFsc2UsXG4gICAgICAgICAgICAvLyAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgLy8gICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLWludHJvJykuY2xhc3NMaXN0LmFkZCgnLWFjdGl2ZScpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtaW50cm8nKS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcpO1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtaW50cm8nKS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19mYWRlSW4nKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdob21lLXNlYXJjaC1iYXInLFxuICAgICAgICAgICAgICAgIG9mZnNldFRvcDogKDEgKiB3aW5kb3cuaW5uZXJIZWlnaHQpLFxuICAgICAgICAgICAgICAgIHJldmVydDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXNlYXJjaC1iYXInKS5jbGFzc0xpc3QuYWRkKCctYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1zZWFyY2gtYmFyJykuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXNlYXJjaC1iYXInKS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19mYWRlSW5VcCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogJ2hvbWUtdHJhaW5pbmctbGlzdCcsXG4gICAgICAgICAgICAgICAgb2Zmc2V0VG9wOiAoMSAqIHdpbmRvdy5pbm5lckhlaWdodCksXG4gICAgICAgICAgICAgICAgcmV2ZXJ0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtdHJhaW5pbmctbGlzdCcpLmNsYXNzTGlzdC5hZGQoJy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLXRyYWluaW5nLWxpc3QnKS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtdHJhaW5pbmctbGlzdCcpLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2ZhZGVJblVwJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnaG9tZS10cmFpbmluZy1jb250ZW50JyxcbiAgICAgICAgICAgICAgICBvZmZzZXRUb3A6ICgxICogd2luZG93LmlubmVySGVpZ2h0KSxcbiAgICAgICAgICAgICAgICByZXZlcnQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS10cmFpbmluZy1jb250ZW50JykuY2xhc3NMaXN0LmFkZCgnLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtdHJhaW5pbmctY29udGVudCcpLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS10cmFpbmluZy1jb250ZW50JykuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fZmFkZUluVXAnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdob21lLW9mZmVyLWNvbnRlbnQnLFxuICAgICAgICAgICAgICAgIG9mZnNldFRvcDogKDAuOCAqIHdpbmRvdy5pbm5lckhlaWdodCksXG4gICAgICAgICAgICAgICAgcmV2ZXJ0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtb2ZmZXItY29udGVudCcpLmNsYXNzTGlzdC5hZGQoJy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLW9mZmVyLWNvbnRlbnQnKS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtb2ZmZXItY29udGVudCcpLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2ZhZGVJblVwJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAnaG9tZS1vZmZlci1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBvZmZzZXRUb3A6ICgwLjg1ICogd2luZG93LmlubmVySGVpZ2h0KSxcbiAgICAgICAgICAgICAgICByZXZlcnQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1vZmZlci1saXN0aW5nJykuY2xhc3NMaXN0LmFkZCgnLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUtb2ZmZXItbGlzdGluZycpLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1vZmZlci1saXN0aW5nJykuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fZmFkZUluUmlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdob21lLW5ld3NsZXR0ZXInLFxuICAgICAgICAgICAgICAgIG9mZnNldFRvcDogKDAuNzUgKiB3aW5kb3cuaW5uZXJIZWlnaHQpLFxuICAgICAgICAgICAgICAgIHJldmVydDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLW5ld3NsZXR0ZXInKS5jbGFzc0xpc3QuYWRkKCctYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1uZXdzbGV0dGVyJykuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLW5ld3NsZXR0ZXInKS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19mYWRlSW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6ICdob21lLW5ld3NsZXR0ZXItaW1nJyxcbiAgICAgICAgICAgICAgICBvZmZzZXRUb3A6ICgwLjc1ICogd2luZG93LmlubmVySGVpZ2h0KSxcbiAgICAgICAgICAgICAgICByZXZlcnQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1uZXdzbGV0dGVyLWltZycpLmNsYXNzTGlzdC5hZGQoJy1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLW5ld3NsZXR0ZXItaW1nJykuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fYW5pbWF0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lLW5ld3NsZXR0ZXItaW1nJykuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZV9fZmFkZUluTGVmdCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICAkLmVhY2godHJpZ2dlckFuaW1hdGlvbiwgZnVuY3Rpb24gKGtleSwgYW5pbWF0aW9uKSB7XG4gICAgICAgICAgICBpZiAoJCgnIycgKyBhbmltYXRpb24uaWQpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbi5yZXZlcnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXJpbmcgd2l0aCBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgeVB4VHJpZ2dlciA9ICQoJyMnICsgYW5pbWF0aW9uLmlkKS5vZmZzZXQoKS50b3AgLSBhbmltYXRpb24ub2Zmc2V0VG9wO1xuICAgICAgICAgICAgICAgICAgICB5UGVyY2VudFRyaWdnZXIgPSAnLScgKyBNYXRoLnJvdW5kKHlQeFRyaWdnZXIgLyB3aW5kb3dIZWlnaHQgKiAxMDApICsgJyUnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXJpbmcgd2hlbiBzY3JvbGwgdXAgYW5kIGVsZW1lbnQgaGlkZGVuIGZyb20gc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgIHlQeFRyaWdnZXIgPSAkKCcjJyArIGFuaW1hdGlvbi5pZCkub2Zmc2V0KCkudG9wIC0gd2luZG93SGVpZ2h0ICsgJCgnIycgKyBhbmltYXRpb24uaWQpLmhlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICB5UGVyY2VudFRyaWdnZXIgPSAnLScgKyBNYXRoLnJvdW5kKHlQeFRyaWdnZXIgLyB3aW5kb3dIZWlnaHQgKiAxMDApICsgJyUnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpbmRvd1snc3B5c2Nyb2xsLWFuaW1hdGlvbi0nICsga2V5XSA9IG5ldyBXYXlwb2ludCh7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1tYWluJyksXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFuaW1hdGlvbi5oYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IHlQZXJjZW50VHJpZ2dlclxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuXG4gICAgICAgIGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPT09IDApIHtcbiAgICAgICAgICAgICQod2luZG93KS5zY3JvbGwoKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIFwiYnV0dG9uSG92ZXJIYW5kbGVyXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYnV0dG9ucyA9ICQoJy5idG4nKTtcblxuICAgICAgICBidXR0b25zLm1vdXNlZW50ZXIoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50T2Zmc2V0ID0gJCh0aGlzKS5vZmZzZXQoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbFggPSBlLnBhZ2VYIC0gcGFyZW50T2Zmc2V0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCByZWxZID0gZS5wYWdlWSAtIHBhcmVudE9mZnNldC50b3A7XG4gICAgICAgICAgICAkKHRoaXMpLnByZXYoXCIuYnRuLWZ4LWNpcmNsZVwiKS5jc3Moe1wibGVmdFwiOiByZWxYLCBcInRvcFwiOiByZWxZIH0pO1xuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KFwiLmJ0bi1meC1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoXCJkZXNwbG9kZS1jaXJjbGVcIik7XG4gICAgICAgICAgICAkKHRoaXMpLnByZXYoXCIuYnRuLWZ4LWNpcmNsZVwiKS5hZGRDbGFzcyhcImV4cGxvZGUtY2lyY2xlXCIpO1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJ1dHRvbnMubW91c2VsZWF2ZShmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRPZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpO1xuICAgICAgICAgICAgY29uc3QgcmVsWCA9IGUucGFnZVggLSBwYXJlbnRPZmZzZXQubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHJlbFkgPSBlLnBhZ2VZIC0gcGFyZW50T2Zmc2V0LnRvcDtcbiAgICAgICAgICAgICQodGhpcykucHJldihcIi5idG4tZngtY2lyY2xlXCIpLmNzcyh7XCJsZWZ0XCI6IHJlbFgsIFwidG9wXCI6IHJlbFkgfSk7XG4gICAgICAgICAgICAkKHRoaXMpLnByZXYoXCIuYnRuLWZ4LWNpcmNsZVwiKS5yZW1vdmVDbGFzcyhcImV4cGxvZGUtY2lyY2xlXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KFwiLmJ0bi1meC1jaXJjbGVcIikuYWRkQ2xhc3MoXCJkZXNwbG9kZS1jaXJjbGVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBzdHJldGNoZWRMaW5rID0gJCgnLmpzLWJ0bi1meC1hJyk7XG5cbiAgICAgICAgc3RyZXRjaGVkTGluay5tb3VzZWVudGVyKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudE9mZnNldCA9ICQodGhpcykub2Zmc2V0KCk7XG4gICAgICAgICAgICBjb25zdCByZWxYID0gZS5wYWdlWCAtIHBhcmVudE9mZnNldC5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgcmVsWSA9IGUucGFnZVkgLSBwYXJlbnRPZmZzZXQudG9wO1xuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KFwiLmJ0bi1meC1jaXJjbGVcIikuY3NzKHtcImxlZnRcIjogcmVsWCwgXCJ0b3BcIjogcmVsWSB9KTtcbiAgICAgICAgICAgICQodGhpcykucHJldihcIi5idG4tZngtY2lyY2xlXCIpLnJlbW92ZUNsYXNzKFwiZGVzcGxvZGUtY2lyY2xlXCIpO1xuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KFwiLmJ0bi1meC1jaXJjbGVcIikuYWRkQ2xhc3MoXCJleHBsb2RlLWNpcmNsZVwiKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICBzdHJldGNoZWRMaW5rLm1vdXNlbGVhdmUoZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50T2Zmc2V0ID0gJCh0aGlzKS5vZmZzZXQoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlbFggPSBlLnBhZ2VYIC0gcGFyZW50T2Zmc2V0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCByZWxZID0gZS5wYWdlWSAtIHBhcmVudE9mZnNldC50b3A7XG4gICAgICAgICAgICAkKHRoaXMpLnByZXYoXCIuYnRuLWZ4LWNpcmNsZVwiKS5jc3Moe1wibGVmdFwiOiByZWxYLCBcInRvcFwiOiByZWxZIH0pO1xuICAgICAgICAgICAgJCh0aGlzKS5wcmV2KFwiLmJ0bi1meC1jaXJjbGVcIikucmVtb3ZlQ2xhc3MoXCJleHBsb2RlLWNpcmNsZVwiKTtcbiAgICAgICAgICAgICQodGhpcykucHJldihcIi5idG4tZngtY2lyY2xlXCIpLmFkZENsYXNzKFwiZGVzcGxvZGUtY2lyY2xlXCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgXCJvZmZlcnNIYW5kbGVyXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgb2ZmZXJzID0gJCgnLmpzLW9mZmVyLWV4cGFuZGFibGUnKTtcbiAgICAgICAgbGV0IGJ1dHRvbiA9IG51bGw7XG5cbiAgICAgICAgaWYgKG9mZmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG9mZmVycy5lYWNoKGZ1bmN0aW9uKGssIHYpIHtcbiAgICAgICAgICAgICAgICBsZXQgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgICR0aGlzLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoJ3N2ZycpIHx8IGUudGFyZ2V0Lm1hdGNoZXMoJ3VzZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcygnLWNlbnRlcicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJy1leHBhbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZmVycy5yZW1vdmVDbGFzcygnLXJlc2l6ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnBhcmVudCgpLnJlbW92ZUNsYXNzKCctb3BlbicpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISR0aGlzLmhhc0NsYXNzKCctY2VudGVyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZlcnMuYWRkQ2xhc3MoJy1yZXNpemVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2ZmZXJzLnJlbW92ZUNsYXNzKCctY2VudGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2ZmZXJzLnJlbW92ZUNsYXNzKCctZXhwYW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMucmVtb3ZlQ2xhc3MoJy1yZXNpemVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJy1jZW50ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5wYXJlbnQoKS5hZGRDbGFzcygnLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnLWV4cGFuZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBcIm1lbnVIYW5kbGVyXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcubmF2YmFyLXRvZ2dsZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbWVudS1vcGVuJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGlmICggIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1ib2R5JykuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1tZW51LWZpeGVkJykpe1xuICAgICAgICAvLyAgICAgbGV0IHdheXBvaW50VGV4dCA9IG5ldyBXYXlwb2ludCh7XG4gICAgICAgIC8vICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLW1haW4nKSxcbiAgICAgICAgLy8gICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiBoYW5kbGVyKGRpcmVjdGlvbikge1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1ib2R5JykuY2xhc3NMaXN0LmFkZCgnanMtbWVudS1maXhlZCcpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWJvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdqcy1tZW51LWZpeGVkJyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIC8vIG9mZnNldDogJy0xMCdcbiAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1ib2R5JykuY2xhc3NMaXN0LmNvbnRhaW5zKCctdHJhbnNwYXJlbnQnKSl7XG4gICAgICAgICAgICBsZXQgd2F5cG9pbnRUZXh0ID0gbmV3IFdheXBvaW50KHtcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbWFpbicpLFxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIGhhbmRsZXIoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWJvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCctdHJhbnNwYXJlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1ib2R5JykuY2xhc3NMaXN0LmFkZCgnLXRyYW5zcGFyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9mZnNldDogJy0xMCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHdheXBvaW50VE1vYmlsZSA9IG5ldyBXYXlwb2ludCh7XG4gICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbWFpbicpLFxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gaGFuZGxlcihkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnZG93bicpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWJvZHknKS5jbGFzc0xpc3QuYWRkKCdqcy1tZW51LW1vYmlsZS1maXhlZCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1ib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnanMtbWVudS1tb2JpbGUtZml4ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb2Zmc2V0OiAnLTUlJ1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgXCJ0cmFpbmluZ0hhbmRsZXJcIjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+PSBnZW5lcmFsLm1xQnJlYWtwb2ludHMuc3hsKSB7XG4gICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XG4gICAgICAgICAgICBsZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy10cmFpbmluZy1tZW51Jyk7XG5cbiAgICAgICAgICAgIGxldCBoYXNTY3JvbGxBbmltID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgaGFzU2Nyb2xsID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChmb3JtICYmIG1lbnUpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gZm9ybS5vZmZzZXRUb3BcbiAgICAgICAgICAgICAgICAgICAgaWYoKHdpbmRvdy5zY3JvbGxZICsgbWVudS5vZmZzZXRIZWlnaHQgKyA4MCkgID49IGhlaWdodCkgeyAvLyBjaGFuZ2UgdGFyZ2V0IHRvIG51bWJlclxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc1Njcm9sbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc1Njcm9sbEFuaW0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1Njcm9sbEFuaW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtdHJhaW5pbmctbWVudScpLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtdHJhaW5pbmctbWVudScpLnN0eWxlLmJvdHRvbSA9ICcxNnB4JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtdHJhaW5pbmctbWVudScpLnN0eWxlLnRvcCA9ICdhdXRvJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy10cmFpbmluZy1tZW51Jykuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXRyYWluaW5nLW1lbnUnKS5zdHlsZS5ib3R0b20gPSAndW5zZXQnO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXRyYWluaW5nLW1lbnUnKS5zdHlsZS50b3AgPSAndW5zZXQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaGFzU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdHJpZ2dlciA9IG5ldyBFdmVudCgnc2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQodHJpZ2dlcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1lbnUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm9vdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvb3RlcicpO1xuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IGZvb3Rlci5vZmZzZXRUb3BcbiAgICAgICAgICAgICAgICAgICAgaWYoKHdpbmRvdy5zY3JvbGxZICsgbWVudS5vZmZzZXRIZWlnaHQgKyAyMzApICA+PSBoZWlnaHQpIHsgLy8gY2hhbmdlIHRhcmdldCB0byBudW1iZXJcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNTY3JvbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNTY3JvbGxBbmltID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNTY3JvbGxBbmltKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXRyYWluaW5nLW1lbnUnKS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXRyYWluaW5nLW1lbnUnKS5zdHlsZS5ib3R0b20gPSAnMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLXRyYWluaW5nLW1lbnUnKS5zdHlsZS50b3AgPSAnYXV0byc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtdHJhaW5pbmctbWVudScpLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy10cmFpbmluZy1tZW51Jykuc3R5bGUuYm90dG9tID0gJ3Vuc2V0JztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy10cmFpbmluZy1tZW51Jykuc3R5bGUudG9wID0gJ3Vuc2V0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhhc1Njcm9sbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRyaWdnZXIgPSBuZXcgRXZlbnQoJ3Njcm9sbCcpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KHRyaWdnZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIFwic2VhcmNoQmFySGFuZGxlclwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uc09wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtc2VhcmNoYmFyLW9wZW5pbmcnKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtc2VhcmNoYmFyLWNsb3NpbmcnKTtcblxuICAgICAgICBidXR0b25zT3Blbi5mb3JFYWNoKCRidXR0b24gPT4gJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoYmFyJyk7XG4gICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19mYWRlT3V0UmlnaHQnLCAnYW5pbWF0ZV9fZmFkZUluUmlnaHQnKTtcbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVfX2FuaW1hdGVkJywgJ2FuaW1hdGVfX2ZhZGVJblJpZ2h0Jyk7XG5cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGJ1dHRvbkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoYmFyJyk7XG4gICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKCdhbmltYXRlX19hbmltYXRlZCcsICdhbmltYXRlX19mYWRlT3V0UmlnaHQnKTtcbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVfX2FuaW1hdGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBcImNvbnRhY3RIYW5kbGVyXCI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuanMtc2VsZWN0LWNoYW5nZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IHNlbGVjdCA9ICQoJyMnKyQodGhpcykuZGF0YSgnc2VsZWN0LWlkJykpO1xuICAgICAgICAgICAgc2VsZWN0LmZpbmQoJ29wdGlvblt2YWx1ZT0nKyQodGhpcykuZGF0YSgnc2VsZWN0LW9wdGlvbicpKyddJykuYXR0cignc2VsZWN0ZWQnLCdzZWxlY3RlZCcpO1xuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBcInNlc3Npb25TbG90SGFuZGxlclwiOiBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLmpzLXRyYWluaW5nLXNsb3QtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQoJy5qcy10cmFpbmluZy1zbG90LXdyYXBwZXInKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGdlbmVyYWw7XG5cbihmdW5jdGlvbigkKXtcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdlbmVyYWwuYnV0dG9uSG92ZXJIYW5kbGVyKCk7XG4gICAgICAgIGdlbmVyYWwuYW5pbWF0aW9uSGFuZGxlcigpO1xuICAgICAgICBnZW5lcmFsLm9mZmVyc0hhbmRsZXIoKTtcbiAgICAgICAgZ2VuZXJhbC50cmFpbmluZ0hhbmRsZXIoKTtcbiAgICAgICAgZ2VuZXJhbC5zZWFyY2hCYXJIYW5kbGVyKCk7XG4gICAgICAgIGdlbmVyYWwuY29udGFjdEhhbmRsZXIoKTtcbiAgICAgICAgZ2VuZXJhbC5tZW51SGFuZGxlcigpO1xuICAgICAgICBnZW5lcmFsLnNlc3Npb25TbG90SGFuZGxlcigpO1xuICAgIH0pO1xufSkoJCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJnZW5lcmFsIiwieHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInN4bCIsInh4bCIsImFuaW1hdGlvbkhhbmRsZXIiLCJ3aW5kb3dIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInlQeFRyaWdnZXIiLCJ5UGVyY2VudFRyaWdnZXIiLCJ0cmlnZ2VyQW5pbWF0aW9uIiwiaWQiLCJvZmZzZXRUb3AiLCJyZXZlcnQiLCJoYW5kbGVyIiwiZGlyZWN0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsImVhY2giLCJrZXkiLCJhbmltYXRpb24iLCJsZW5ndGgiLCJvZmZzZXQiLCJ0b3AiLCJNYXRoIiwicm91bmQiLCJoZWlnaHQiLCJXYXlwb2ludCIsImVsZW1lbnQiLCJwYWdlWU9mZnNldCIsInNjcm9sbCIsImJ1dHRvbkhvdmVySGFuZGxlciIsImJ1dHRvbnMiLCJtb3VzZWVudGVyIiwiZSIsInBhcmVudE9mZnNldCIsInJlbFgiLCJwYWdlWCIsImxlZnQiLCJyZWxZIiwicGFnZVkiLCJwcmV2IiwiY3NzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIm1vdXNlbGVhdmUiLCJzdHJldGNoZWRMaW5rIiwib2ZmZXJzSGFuZGxlciIsIm9mZmVycyIsImJ1dHRvbiIsImsiLCJ2IiwiJHRoaXMiLCJvbiIsInRhcmdldCIsIm1hdGNoZXMiLCJwYXJlbnQiLCJoYXNDbGFzcyIsInNldFRpbWVvdXQiLCJtZW51SGFuZGxlciIsInRvZ2dsZUNsYXNzIiwiY29udGFpbnMiLCJ3YXlwb2ludFRleHQiLCJyZW1vdmUiLCJ3YXlwb2ludFRNb2JpbGUiLCJ0cmFpbmluZ0hhbmRsZXIiLCJpbm5lcldpZHRoIiwibXFCcmVha3BvaW50cyIsImZvcm0iLCJtZW51IiwiaGFzU2Nyb2xsQW5pbSIsImhhc1Njcm9sbCIsIm9uc2Nyb2xsIiwic2Nyb2xsWSIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwicG9zaXRpb24iLCJib3R0b20iLCJ0cmlnZ2VyIiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiZm9vdGVyIiwic2VhcmNoQmFySGFuZGxlciIsImJ1dHRvbnNPcGVuIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbkNsb3NlIiwicXVlcnlTZWxlY3RvciIsImZvckVhY2giLCIkYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwicGFuZWwiLCJjb250YWN0SGFuZGxlciIsInNlbGVjdCIsImRhdGEiLCJmaW5kIiwiYXR0ciIsInNlc3Npb25TbG90SGFuZGxlciIsInJlYWR5Il0sInNvdXJjZVJvb3QiOiIifQ==