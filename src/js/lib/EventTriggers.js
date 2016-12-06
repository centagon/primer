/**
 * Handles Event Triggers
 * 
 * [data-trigger-event="eventname"]         Triggers an event
 * [data-state-event],[data-state-toggler]  Swaps the 'state-visible' and 'state-invisible' classes
 * [data-state-enabler]     adds the 'state-visible' class
 * [data-state-disabler]    adds the 'state-invisible' class
 */
export default class
{

    constructor() {
        
        this.selector = '[data-trigger-event],[data-onclick-visibility]';
        
        this.registerEvents();
    }
    
    registerEvents() {
        
        $(this.selector).click( function (e) {
            e.preventDefault();
            
            $(document).trigger('event-trigger',$(this).attr('data-trigger-event') || $(this).attr('data-onclick-visibility'));
        });
        
        $(document).on('event-trigger', (e,p) => {
            var match = false;
            var eventAttr;
                    
            var buffer = [];
            
            eventAttr = 'data-state-event';
            this.getEventListeners(eventAttr, p, buffer, (listener) => {
                this.toggleState(listener);
            });
            
            eventAttr = 'data-state-toggler';
            this.getEventListeners(eventAttr, p, buffer, (listener) => {
                this.toggleState(listener);
            });
            
            eventAttr = 'data-state-enabler';
            this.getEventListeners(eventAttr, p, buffer, (listener) => {
                this.enableState(listener);
            });
            
            eventAttr = 'data-state-disabler';
            this.getEventListeners(eventAttr, p, buffer, (listener) => {
                this.disableState(listener);
            });
            
        });
    }
    
    getEventListeners(eventAttr, match, buffer = [], f = null) {
        $('['+eventAttr+']:not(['+eventAttr+'=""])').each( (i, listener) => {
            if (buffer.indexOf(listener) >= 0) return;
            if (this.matchesTrigger( $(listener).attr(eventAttr), match) ) {
                if (f) {
                    f.call( this, listener, match );
                }
                buffer.push(listener);
            }
        });
        return buffer;
    }
    
    matchesTrigger(query, trigger) {
        var collection = query.split(',');
        for (var tel=0;tel<collection.length;tel++) {
            if (trigger == collection[tel]) {
                return true;
            }
        }
        return false;
    }
    
    toggleState(target) {
        const $target = $(target);
        if ($(target).hasClass('state-invisible')) {
            $(target).removeClass('state-invisible').addClass('state-visible');
        } else {
            $(target).removeClass('state-visible').addClass('state-invisible');
        }
    }

    enableState(target) {
        const $target = $(target);
        $(target).removeClass('state-invisible').addClass('state-visible');
        $(target).removeClass('state-reversed');
    }

    disableState(target) {
        const $target = $(target);
        $(target).removeClass('state-visible').addClass('state-invisible');
        $(target).removeClass('state-reversed');
    }

}