import {LOGIN_URL} from "../Constants";

class LoginController {
    constructor($window, $http){
        this.$window = $window;
        this.$http = $http;
        this.firstName ='';

    }

    showLoginForm(){

        window.location.href = '/login/personal-information';
    }
    showRegisterForm(){

        window.location.href = '/login/register';
    }

    sendAuthData(){
        let data = {
            email : this.userEmail,
            password : this.userPassword
        };

        this.$http.post(LOGIN_URL, data).then(function (response) {
            if (response.status == 200){
                window.location.href = '/'
            }
        })

    }

    dataCheck(){
        let email = this.userEmail;
        let password = this.userPassword;
    }


};

LoginController.$inject = ['$window', '$http'];

export {LoginController};
