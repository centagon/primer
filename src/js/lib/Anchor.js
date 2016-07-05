/**
 * This file is part of the Centagon Primer package.
 *
 * (c) Centagon <contact@centagon.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export default class {

    /**
     *
     */
    static registerExternals() {
        const anchors = document.querySelectorAll('a[rel~=external]');

        [].forEach.call(anchors, (el) => el.setAttribute('target', '_blank'));
    }
}
