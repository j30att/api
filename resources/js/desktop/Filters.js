import {ucFirst} from "../common/filters/uc-first";
import {optionFilter} from "../common/filters/option-filter";

let module = angular.module('Filters', []);

module.filter('ucFirst', ucFirst);
module.filter('optionFilter', optionFilter);

export default module.name;
