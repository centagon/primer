import _each from 'lodash/each';

export default class {

    /**
     *
     * @param  {string}  selector
     */
    static registerSwapHandler(selector = 'data-state-event') {
        $(document).on('state-toggle', (_, data) => {
            let elements = document.querySelectorAll(`[${selector}="${data.event}"]`);

            _each(elements, el => el.classList.toggle('state-inversed'));
        });
    }
}