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
     * LazyLoad constructor.
     * @param   {string}  selector
     */
    constructor(selector = 'img[data-src]') {
        [].forEach.call(document.querySelectorAll(selector), (img) => {
            img.setAttribute('src', img.getAttribute('data-src'));

            img.onload = () => img.removeAttribute('data-src');
        });
    }
}
