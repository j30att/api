import {MainMenuComponent} from "./Components/main-menu/main-menu.controller";
import {SaleCreateComponent} from "./Components/sale-create/sale-create.controller"

let angular = require('angular');

let module = angular.module('Components', []);

module.component('mainMenu', MainMenuComponent);
module.component('saleCreate', SaleCreateComponent);

export default module.name;

