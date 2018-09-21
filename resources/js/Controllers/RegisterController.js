import {REGISTER_URL} from "../Constants";

class RegisterController {
    constructor($window, $http){
        this.$window = $window;
        this.$http = $http;
        this.userName ='';
        this.userEmail ='';
        this.userPassword ='';
        this.passwordConfirmation ='';
        this.userAge ='';


        console.log('hui2');
    }



    sendRegisterForm(){
        let data ={
            name:this.userName,
            email: this.userEmail,
            password: this.userPassword,
            password_confirmation : this.passwordConfirmation,
            age: this.userAge
        };
        this.$http.post(REGISTER_URL, data).then(function (response) {

            console.log(response.data.status);

            if (response.data.status == 0){
                console.log('валидация не прошла')
            } else {
                // window.location.href = response.data.url;
                window.location.href = '/profile'
            }

        })

    }


};

RegisterController.$inject = ['$window', '$http'];

export {RegisterController};
