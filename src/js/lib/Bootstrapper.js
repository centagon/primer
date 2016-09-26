/* eslint-disable no-console */

export default class {

    /**
     * Primer constructor.
     */
    constructor() {
        this.debug = false;

        // Stash console for later use.
        this.console = global.console;
    }

    /**
     * Get the Primer version.
     *
     * @returns {string}
     */
    get version() {
        return '0.1.1';
    }

    /**
     * Boot Primer.
     *
     * @param {bool} debug
     *
     * @returns {object}
     */
    boot(debug = false) {
        this.debug = debug;

        // Suppress console loging when debugging is disabled.
        if (! debug) {
            global.console = {};

            console.log
                = console.info
                = console.warm
                = console.error = () => {};
        } else {
            // Restore console loging.
            global.console = this.console;

            global.console.warn(`Centagon Primer ${this.version} debug mode enabled!
Please disable logging on production by calling (new Primer).boot(false);`);
        }

        return this;
    }
}
