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
     * Register the external link handler so that we can
     * use rel[external] instead of target=_blank.
     */
    static registerExternals() {
        const anchors = document.querySelectorAll('a[rel~=external]');

        [].forEach.call(anchors, (el) => el.setAttribute('target', '_blank'));
    }
}
