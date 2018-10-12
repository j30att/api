import {ucFirst} from "../common/filters/uc-first";
import {optionFilter} from "../common/filters/option-filter";
import {percent} from "../common/filters/percentage";

let module = angular.module('Filters', []);

module.filter('ucFirst', ucFirst);
module.filter('optionFilter', optionFilter);
module.filter('percent', percent);

export default module.name;
