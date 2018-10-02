class EventsCarousel {

    constructor() {
    }

    $onInit() {

    }

}

export const EventsCarouselComponent = {
    bindings: {
        events: '<',
        state:  '<',
    },
    template: require('./events-carousel.template.html'),
    controller: EventsCarousel,
    controllerAs: '$ctrl'
};
