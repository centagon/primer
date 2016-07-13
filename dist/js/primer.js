(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This file is part of the Centagon Primer package.
 *
 * (c) Centagon <contact@centagon.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var _class = function () {
  function _class() {
    _classCallCheck(this, _class);
  }

  _createClass(_class, null, [{
    key: 'registerExternals',


    /**
     * Register the external link handler so that we can
     * use rel[external] instead of target=_blank.
     */
    value: function registerExternals() {
      var anchors = document.querySelectorAll('a[rel~=external]');

      [].forEach.call(anchors, function (el) {
        return el.setAttribute('target', '_blank');
      });
    }
  }]);

  return _class;
}();

exports.default = _class;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global $ */
/* global Foundation */
/**
 * This file is part of the Centagon Primer package.
 *
 * (c) Centagon <contact@centagon.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var _Util = require('./Util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Equalizer = function () {

    /**
     * Equalizer constructor.
     *
     * @param  {string}  selector
     */

    function Equalizer() {
        var selector = arguments.length <= 0 || arguments[0] === undefined ? '.equalized' : arguments[0];

        _classCallCheck(this, Equalizer);

        this.selector = selector;
    }

    /**
     * Register the equalizer events.
     *
     * @returns {Equalizer}
     */


    _createClass(Equalizer, [{
        key: 'register',
        value: function register() {
            var _this = this;

            var element = arguments.length <= 0 || arguments[0] === undefined ? window : arguments[0];

            element.onload = function () {
                return _this.equalize();
            };

            $(element).on('changed.zf.mediaquery', function (e, query) {
                if (query !== 'small') _this.equalize();
            });

            _Util.Orientation.onChange(function () {
                if (Equalizer.shouldEqualize()) {
                    _this.equalize();
                } else {
                    _this.reset();
                }
            });

            return this;
        }

        /**
         * Start equalizing the elements.
         */

    }, {
        key: 'equalize',
        value: function equalize() {
            var elements = this.getElements();
            var groups = {};
            var order = [];

            [].forEach.call(elements, function (element) {
                var group = element.getAttribute('data-equalize') || 'global';

                // Check the visibility of the element. Invisible elements do
                // not consume any space in the document so we cannot
                // reliably calculate the height of this element.
                if (_Util.Visibility.isVisible(element) && Equalizer.shouldEqualize()) {
                    if (!groups[group]) {
                        groups[group] = [];

                        // Append the group to the beginning of the ordering array.
                        // This enables us to walk through the groups and calculate
                        // the maximum heights from the inside out.
                        order.unshift(group);
                    }

                    groups[group].push(element);
                }
            });

            // Calculate the max height of the elements for each group.
            // Then apply that height to every element in the group.
            order.forEach(function (group) {
                var max = Math.max.apply(null, groups[group].map(function (element) {
                    return element.offsetHeight;
                }));

                groups[group].forEach(function (element) {
                    element.style.height = max + 'px';
                });
            });

            $(document).trigger('primer.equalize.done');
        }

        /**
         * Resets the previously equalized elements.
         */

    }, {
        key: 'reset',
        value: function reset() {
            var elements = this.getElements();

            for (var i = 0; i < elements.length; i++) {
                elements[i].style.height = null;
            }
        }
    }, {
        key: 'getElements',
        value: function getElements() {
            return document.querySelectorAll(this.selector);
        }

        /**
         * Determine if the element should be equalized.
         * @returns {boolean}
         */

    }], [{
        key: 'shouldEqualize',
        value: function shouldEqualize() {
            return !(Foundation.MediaQuery.current === 'small');
        }
    }]);

    return Equalizer;
}();

exports.default = Equalizer;

},{"./Util":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This file is part of the Centagon Primer package.
 *
 * (c) Centagon <contact@centagon.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var _class =

/**
 * LazyLoad constructor.
 * @param   {string}  selector
 */
function _class() {
    var selector = arguments.length <= 0 || arguments[0] === undefined ? 'img[data-src]' : arguments[0];

    _classCallCheck(this, _class);

    [].forEach.call(document.querySelectorAll(selector), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));

        img.onload = function () {
            return img.removeAttribute('data-src');
        };
    });
};

exports.default = _class;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This file is part of the Centagon Primer package.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * (c) Centagon <contact@centagon.com>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * For the full copyright and license information, please view the LICENSE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * file that was distributed with this source code.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _Util = require('./Util');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scroll = function () {

    /**
     * OnScroll constructor.
     *
     * @param  {object}  options
     */

    function Scroll(options) {
        var _this = this;

        _classCallCheck(this, Scroll);

        this.settings = _Util.Array.merge({
            threshold: window.innerHeight / 2,
            onBeforeThreshold: function onBeforeThreshold() {},
            onAfterThreshold: function onAfterThreshold() {}
        }, options);

        window.addEventListener('scroll', function () {
            return _this.onScrollCallback();
        });
    }

    /**
     * The callback that gets executed on every scroll event.
     */


    _createClass(Scroll, [{
        key: 'onScrollCallback',
        value: function onScrollCallback() {
            if (this.scrolledPastThreshold()) {
                this.settings.onAfterThreshold();
            } else {
                this.settings.onBeforeThreshold();
            }
        }

        /**
         * Determine that we scrolled passed the given threshold.
         *
         * @returns {boolean}
         */

    }, {
        key: 'scrolledPastThreshold',
        value: function scrolledPastThreshold() {
            var threshold = this.settings.threshold;

            return Scroll.getPosition() > threshold;
        }

        /**
         * Get the current scroll position.
         *
         * @returns {number}
         */

    }], [{
        key: 'getPosition',
        value: function getPosition() {
            return document.body.scrollTop || document.documentElement.scrollTop;
        }
    }]);

    return Scroll;
}();

exports.default = Scroll;

},{"./Util":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This file is part of the Centagon Primer package.
 *
 * (c) Centagon <contact@centagon.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var Array = exports.Array = function () {
    function Array() {
        _classCallCheck(this, Array);
    }

    _createClass(Array, null, [{
        key: 'merge',


        /**
         * Merge two objects.
         *
         * @param   {object}  obj1
         * @param   {object}  obj2
         * @returns {*}
         */
        value: function merge(obj1, obj2) {
            Object.keys(obj2).forEach(function (prop) {
                try {
                    if (obj2[prop].constructor === Object) {
                        obj1[prop] = Array.merge(obj1[prop], obj2[prop]);
                    } else {
                        obj1[prop] = obj2[prop];
                    }
                } catch (e) {
                    obj1[prop] = obj2[prop];
                }
            });

            return obj1;
        }
    }]);

    return Array;
}();

var Orientation = exports.Orientation = function () {
    function Orientation() {
        _classCallCheck(this, Orientation);
    }

    _createClass(Orientation, null, [{
        key: 'onChange',


        /**
         * @callback Orientation~OnChange
         * @param    {Event}   event
         * @param    {string}  orientation
         */
        /**
         * Listen to an orientation change event and
         * execute the supplied callback.
         *
         * @param  {Orientation~OnChange}  callback
         */
        value: function onChange(callback) {
            var support = 'onorientationchange' in window;
            var event = support ? 'orientation' : 'resize';

            window.addEventListener(event, function (e) {
                return callback(e, Orientation.get());
            });
        }

        /**
         * Get the current device orientation.
         *
         * @returns {string}
         */

    }, {
        key: 'get',
        value: function get() {
            return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
        }
    }]);

    return Orientation;
}();

var Visibility = exports.Visibility = function () {
    function Visibility() {
        _classCallCheck(this, Visibility);
    }

    _createClass(Visibility, null, [{
        key: 'isVisible',


        /**
         * Find out if the given element is visibile.
         * Elements are considered visible if they consume space in the document.
         * Visible elements have a width or height that is greater than zero.
         *
         * @param   {object}  element
         * @returns {boolean}
         */
        value: function isVisible(element) {
            return element.offsetWidth > 0 || element.offsetHeight > 0 || element.getClientRects().length > 0;
        }

        /**
         * Determine that an element is not visible (or hidden).
         * This is calculated by the `Visibility.isVisible` method and returns the opposite.
         *
         * @param   {object}  element
         * @returns {boolean}
         */

    }, {
        key: 'isHidden',
        value: function isHidden(element) {
            return !Visibility.isVisible(element);
        }
    }]);

    return Visibility;
}();

},{}],6:[function(require,module,exports){
(function (global){
'use strict';

var _Anchor = require('./lib/Anchor');

var _Anchor2 = _interopRequireDefault(_Anchor);

var _Equalizer = require('./lib/Equalizer');

var _Equalizer2 = _interopRequireDefault(_Equalizer);

var _LazyLoader = require('./lib/LazyLoader');

var _LazyLoader2 = _interopRequireDefault(_LazyLoader);

var _Scroll = require('./lib/Scroll');

var _Scroll2 = _interopRequireDefault(_Scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This file is part of the Centagon Primer package.
 *
 * (c) Centagon <contact@centagon.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

global.Primer = { Anchor: _Anchor2.default, Equalizer: _Equalizer2.default, LazyLoader: _LazyLoader2.default, Scroll: _Scroll2.default };

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./lib/Anchor":1,"./lib/Equalizer":2,"./lib/LazyLoader":3,"./lib/Scroll":4}]},{},[6])


//# sourceMappingURL=primer.js.map
