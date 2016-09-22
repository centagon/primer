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

export class Window {

    /**
     * Open a new popup window.
     *
     * @param   {string}   url
     * @param   {int}      width
     * @param   {int}      height
     * @param   {boolean}  center
     */
    static open(url, width = 600, height = 450, center = true) {
        const top = center ? (screen.height / 2) - (height / 2) : 0;
        const left = center ? (screen.width / 2) - (width / 2) : 0;

        window.open(url, '', `width=${width},height=${height},top=${top},left=${left}`);
    }
}