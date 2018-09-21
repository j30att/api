let angular = require('angular');

import Controllers from './Controllers';


//let uibootstrap = require('ui-bootstrap4');
/*
let datetimepicker = require('angularjs-datetime-picker');
let ngDialog = require('ng-dialog');
let ngSanitize = require('angular-sanitize');
*/


let app = angular.module('poker', [
   /* //uibootstrap,
    'angularjs-datetime-picker',
    ngDialog,
    ngSanitize,*/
    Controllers
]);

app.config(['$interpolateProvider', ($interpolateProvider) => {
    $interpolateProvider.startSymbol('{%');
    $interpolateProvider.endSymbol('%}');
}]);



