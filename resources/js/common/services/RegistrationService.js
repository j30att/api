import {REGISTRATION_URL} from "../Constants";

class RegistrationService {
    constructor($http){
        this.$http = $http;
    }

    createUser(data){
        return this.$http.post(REGISTRATION_URL,data)
    }

}
RegistrationService.$inject = ['$http'];
export {RegistrationService};
