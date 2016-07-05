/**
 * This file is part of the Centagon Primer package.
 *
 * (c) Centagon <contact@centagon.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

export class Array {

    /**
     * Merge two objects.
     *
     * @param   {object}  obj1
     * @param   {object}  obj2
     * @returns {*}
     */
    static merge(obj1, obj2) {
        Object.keys(obj2).forEach((prop) => {
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
}

export class Orientation {

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
    static onChange(callback) {
        const support = 'onorientationchange' in window;
        const event = support ? 'orientation' : 'resize';

        window.addEventListener(event, (e) => callback(e, Orientation.get()));
    }

    /**
     * Get the current device orientation.
     *
     * @returns {string}
     */
    static get() {
        return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';
    }
}

export class Visibility {

    /**
     * Find out if the given element is visibile.
     * Elements are considered visible if they consume space in the document.
     * Visible elements have a width or height that is greater than zero.
     *
     * @param   {object}  element
     * @returns {boolean}
     */
    static isVisible(element) {
        return element.offsetWidth > 0
            || element.offsetHeight > 0
            || element.getClientRects().length > 0;
    }

    /**
     * Determine that an element is not visible (or hidden).
     * This is calculated by the `Visibility.isVisible` method and returns the opposite.
     *
     * @param   {object}  element
     * @returns {boolean}
     */
    static isHidden(element) {
        return !Visibility.isVisible(element);
    }
}
