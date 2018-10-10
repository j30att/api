let angular = require('angular');

import {BidsResourceService} from "./api/BidsResourceService";
import {SalesResourceService} from "./api/SalesResourceService";
import {EventsResourceService} from "./api/EventsResourceService";

let module = angular.module('Services', []);

module.service('BidsResourceService', BidsResourceService);
module.service('SalesResourceService', SalesResourceService);
module.service('EventsResourceService', EventsResourceService);

export default module.name;