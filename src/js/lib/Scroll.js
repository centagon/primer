/**
 * This file is part of the Centagon Primer package.
 *
 * (c) Centagon <contact@centagon.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Array } from './Util';

export default class Scroll {

    /**
     * OnScroll constructor.
     *
     * @param  {object}  options
     */
    constructor(options) {
        this.settings = Array.merge({
            threshold: window.innerHeight / 2,
            onBeforeThreshold: () => {},
            onAfterThreshold: () => {}
        }, options);

        window.onscroll = () => this.onScrollCallback();
    }

    /**
     * The callback that gets executed on every scroll event.
     */
    onScrollCallback() {
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
    scrolledPastThreshold() {
        const threshold = this.settings.threshold;

        return Scroll.getPosition() > threshold;
    }

    /**
     * Get the current scroll position.
     *
     * @returns {number}
     */
    static getPosition() {
        return document.body.scrollTop || document.documentElement.scrollTop;
    }
}
