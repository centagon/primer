/* global Primer */
/* eslint-disable no-console */
/**
 * This file is part of the Centagon Primer package.
 *
 * (c) Centagon <contact@centagon.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import LazyLoader from './lib/LazyLoader';
import Equalizer from './lib/Equalizer';
import Anchor from './lib/Anchor';
import Scroll from './lib/Scroll';

const VERSION = '0.0.5';

(global.Primer = global.Primer || {}).boot = (debug = false) => {
    // Suppress console logging when debugging is disabled.
    if (!debug) {
        global.console = {};
        console.log
            = console.info
            = console.warm
            = console.error = () => {};
    } else {
        console.warn(`Centagon Primer ${VERSION} debug mode enabled!
Please disable logging on production by calling Primer.boot(false);`);
    }

    // Expose common libraries.
    Primer.LazyLoader = LazyLoader;
    Primer.Equalizer = Equalizer;
    Primer.Anchor = Anchor;
    Primer.Scroll = Scroll;
};
