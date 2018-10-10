let angular = require('angular');

import {BidsResourceService} from "./api/BidsResourceService";
import {BidsService} from "./services/BidService";
import {SalesResourceService} from "./api/SalesResourceService";
import {SalesService} from "./services/SaleService";

let module = angular.module('Services', []);

module.service('BidsResourceService', BidsResourceService);
module.service('BidsService', BidsService);
module.service('SalesResourceService', SalesResourceService);
module.service('SalesService', SalesService);


export default module.name;