/**
 * This file is part of the Centagon Primer package.
 *
 * (c) Centagon <contact@centagon.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { Window } from '../Util';

export default class Share {

    /**
     * Share Constructor.
     *
     * @param   {String}  selector
     */
    constructor(selector = 'data-social') {
        this.networks = new Map;
        this.selector = selector;
    }

    /**
     * Register a (or multiple) new network.
     *
     * @param   {String}  network
     * @param   {Object}  instance
     */
    register(network, instance) {
        if (typeof network === 'object') {
            return network.forEach((n, i) => this.register(n, i));
        }

        this.networks.set(network, instance);

        return this;
    }

    /**
     * Boot the map of social media networks.
     */
    boot() {
        for (const [network, Instance] of this.networks.entries()) {
            this.networks[network] = new Instance(this);
        }

        this.registerEvents();
    }

    /**
     * Register the click event.
     */
    registerEvents() {
        const elements = document.querySelectorAll(`[${this.selector}]`);

        [].forEach.call(elements, (element) => {
            element.addEventListener('click', () => this.onClick(element));
        });
    }

    /**
     * Open the sharing window.
     *
     * @param   {String}  element
     */
    onClick(element) {
        const network = this.networks[element.getAttribute(this.selector)];

        Window.open(network.url);
    }
}