class MainController {
    constructor($state, $scope) {
        this.$scope = $scope;
        this.$state = $state;
    };

    toggleSidenavLogin() {
        this.$scope.$broadcast('sidenav-login-open', () =>{
        });
    }

    toggleSidenavRegistration(state) {
        this.$scope.$broadcast('sidenav-registration-open', {state});
    }

}

MainController.$inject = ['$state', '$scope'];

export {MainController};
