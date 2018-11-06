
class Registration {
    constructor($scope,SalesResourceService, $mdSidenav, $http,
                SalesService, $timeout, $state, CountriesResourceService) {
        this.$mdSidenav = $mdSidenav;
        this.$timeout=$timeout;
        this.$state = $state;
        this.$scope = $scope;
        this.$http = $http;
        this._opts = {fixed: false};
        this.isSidenavOpen =false;
        this.user = null;
        this.prevState = null;
        this.CountriesResourceService = CountriesResourceService;
        this.getCountries();

    }

    $onInit(){
        this.$scope.$on('sidenav-registration-open', (event, data) => {
            this.state = data.state;
            this.buildToggler('right_registration');
        });

        this.$scope.$watch('isSidenavOpen', (fixed) => {
            this.$state.modalOpened = fixed
        });
    }

    click(){
        console.log(this.user);
    }

    getCountries(){
        this.CountriesResourceService.getCountries().then((response)=>{
            this.countries = response.data.data;
        });
    }


    changeState(state){
        this.prevState = this.state;
        this.state = state;
    }

    goBack(){
        if (this.prevState == null) this.buildToggler('right_registration');
        this.state = this.prevState;
    }

    buildToggler(componentId) {
        this.$mdSidenav(componentId).toggle();
    }

    close(componentId){
        this.$mdSidenav(componentId).close();
    }

    secondStep(){
        console.log(this.user);
        let name = this.user.firstName;
        console.log(typeof name);
        console.log(name.length);

        //if (this.firstStepValidate()) this.state = 'register_password';
    }
    thirdStep(){
        this.state = 'confirm_privacy';
    }



    // firstStepValidate(){
    //     console.log(this.user.firstName.length, 'user length');
    //     if(this.user.firstName.length < 2
    //         || this.user.lastName.length < 2
    //         || this.user.dateOfBirth == null
    //         || this.user.dateOfBirth == undefined
    //         || this.user.country_id == null
    //         || this.user.country_id == undefined
    //     ){
    //         console.log('not valid');
    //         return false
    //     }
    //     return true;
    //
    // }
    //
    // validateFirstName(){
    //     if(this.user == null) return true;
    //     if(this.user.firstName.length < 2) return false;
    //     return true;
    // }
    // validateLastName(){
    //     if(this.user == null) return true;
    //     if(this.user.lastName.length < 2) return false;
    //     return true;
    // }
    // validatedateOfBirth(){
    //     if(this.user == null) return true;
    //     if(this.user.dateOfBirth == null) return false;
    //     return true;
    // }

    // validateLocation(){
    //     if(this.user == null) return true;
    //     if(this.user.country_id == null || this.user.country_id == undefined) return false;
    //     return true;
    // }

};

Registration.$inject = ['$scope', 'SalesResourceService', '$mdSidenav',
    '$http', 'SalesService', '$timeout', '$state', 'CountriesResourceService'];

export const RegistrationComponent = {
    bindings: {

    },
    template: require('./registration.template.html'),
    controller: Registration,
    controllerAs: '$ctrl'
};
