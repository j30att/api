import {COUNTRIES_URL} from "../Constants";

class CountriesResourceService {
    constructor($http){
        this.$http = $http;
    }

    getCountries(){
        return this.$http.post(COUNTRIES_URL,{})
    }

}
CountriesResourceService.$inject = ['$http'];
export {CountriesResourceService};
