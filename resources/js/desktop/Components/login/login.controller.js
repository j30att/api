import {LOGIN_URL, FORGOT_URL, RESET_URL} from "../../../common/Constants";

class Login {
    constructor($scope, SalesResourceService, $mdSidenav, $http, SalesService, $timeout, $state) {
        this.$mdSidenav = $mdSidenav;
        this.$timeout = $timeout;
        this.$state = $state;
        this.$scope = $scope;
        this.$http = $http;

        this.user = window.__user;
        this._opts = {fixed: false};
        this.isSidenavOpen = false;
        this.state = 1;

        this.userEmail = null;
        this.userPassword = null;

        this.msgErrorr = {email: '', password:''};
        this.msgErrorrList = {
            incorrectEmail:'Your email must be between 6 and 100 characters long and look like an e-mail address.',
            invalidEmail:'Invalid email or password.',
            emptyPassword:'Password field can not be empty.'
        };
        this.errorEmail = false;
        this.errorPassword = false;
    }
    down(event){
        if(event.keyCode === 13){
            this.sendAuthData(event);
        }
    }



    $onInit() {
        this.$scope.$on('sidenav-login-open', (event, data) => {

            this.buildToggler('right_login');
        });

        this.$scope.$watch('isSidenavOpen', (fixed) => {
            this.$state.modalOpened = fixed
        });

    }

    buildToggler(componentId) {
        this.$mdSidenav(componentId).toggle();
    }


    close(componentId) {
        this.$mdSidenav(componentId).close();
    }

    forgotPassword() {
        this.state = 2;
    }

    resetMail() {
        //console.log(this.forgotPasswordEmail);
        let email = this.forgotPasswordEmail;
            this.$http.post(FORGOT_URL, {email:email}).then((response) => {
                if(response.data.status == 1){
                    this.state = 3;
                }
            });
    }

    resetPassword(){
        if (this.codeOfEmail.length > 10 && this.createNewPassword === this.createNewPasswordConfirm){
            let password =  this.createNewPassword;
            let token    = this.codeOfEmail;
            let email    = this.forgotPasswordEmail;
            let password_confirmation = this.createNewPasswordConfirm;

            this.$http.post(RESET_URL, {token:token, email:email, password:password, password_confirmation:password_confirmation}).then((response) =>{
               if(response.data.status == 1){
                   this.state = 5;
               }
                if(response.data.status == 0){
                    this.state = 6;
                }
            });
        }
    }

    createNewPass(){
        this.state = 4;
    }


    backToLogin() {
        this.state = 1;
    }

    validateEmail(){
        if (this.userEmail){
            let valid_email = /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,4}|museum|travel)$/.test(this.userEmail);
            if (valid_email){
                this.errorEmail = false;
                return true;
            }
        }
        this.msgErrorr.email = this.msgErrorrList.incorrectEmail;
        this.errorEmail = true;
        return false;
    }

    validatePassword(){
        if (this.userPassword){
            this.errorPassword = false;
            return true;
        }
        this.msgErrorr.password = this.msgErrorrList.emptyPassword;
        this.errorPassword = true;
        return false;
    }

    sendAuthData(e) {
        e.stopPropagation();
        e.preventDefault();
        if ((this.validateEmail() || !this.validatePassword()) && !this.validateEmail())return false;


        console.log(12);
        let data = {
            email: this.userEmail,
            password: this.userPassword
        };
        this.$http.get('/').finally(() => {
            this.$http.post(LOGIN_URL, data)
                .then(function (response) {
                    if (response.status === 200) {
                        window.location.href = '/'
                    }
                })
        })
    }
}

Login.$inject = ['$scope', 'SalesResourceService', '$mdSidenav', '$http', 'SalesService', '$timeout', '$state'];

export const LoginComponent = {
    bindings: {},
    template: require('./login.template.html'),
    controller: Login,
    controllerAs: '$ctrl'
};
