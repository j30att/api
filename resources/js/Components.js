let angular = require('angular');

import {BidsComponent} from "./Components/bids/bids.controller";
import {BidsCarouselComponent} from "./Components/bids-carousel/bids-carousel.controller";
import {EventsComponent} from "./Components/events/events.controller";
import {EventsCarouselComponent} from "./Components/events-carousel/events-carousel.controller";

let module = angular.module('Components', []);
module.component('bids', BidsComponent);
module.component('bidsCarousel', BidsCarouselComponent);
module.component('events', EventsComponent);
module.component('eventsCarousel', EventsCarouselComponent);

export default module.name;

