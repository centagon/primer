(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-console */
/**
 * This file is part of the Centagon Primer package.
 *
 * (c) Centagon <contact@centagon.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

var _class = function () {

    /**
     * Primer constructor.
     */
    function _class() {
        _classCallCheck(this, _class);

        this.debug = false;

        // Stash console for later use.
        this.console = global.console;
    }

    /**
     * Get the Primer version.
     *
     * @returns {string}
     */


    _createClass(_class, [{
        key: 'boot',


        /**
         * Boot Primer.
         *
         * @param {bool} debug
         *
         * @returns {object}
         */
        value: function boot() {
            var debug = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

            this.debug = debug;

            // Suppress console loging when debugging is disabled.
            if (!debug) {
                global.console = {};
                console.log = console.info = console.warm = console.error = function () {};
            } else {
                // Restore console loging.
                global.console = this.console;

                console.warn('Centagon Primer ' + this.version + ' debug mode enabled!\nPlease disable logging on production by calling (new Primer).boot(false);');
            }

            return this;
        }
    }, {
        key: 'version',
        get: function get() {
            return '0.1.1';
        }
    }]);

    return _class;
}();

exports.default = _class;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

var _Bootstrapper = require('./lib/Bootstrapper');

var _Bootstrapper2 = _interopRequireDefault(_Bootstrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export Primer.
global.Primer = _Bootstrapper2.default; /**
                                         * This file is part of the Centagon Primer package.
                                         *
                                         * (c) Centagon <contact@centagon.com>
                                         *
                                         * For the full copyright and license information, please view the LICENSE
                                         * file that was distributed with this source code.
                                         */

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./lib/Bootstrapper":1}]},{},[2])


//# sourceMappingURL=primer.js.map
