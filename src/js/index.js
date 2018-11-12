import ScrollTrigger from 'scrolltrigger-classes/ScrollTrigger.min'

document.addEventListener('DOMContentLoaded', () => {
    var trigger = new ScrollTrigger({
        toggle: {
            visible: 'reveal-text',
            hidden: 'invisible'
        },
        offset: {
            x: 0,
            y: 20
        },
        addHeight: true,
        once: true
    }, document.body, window);
});