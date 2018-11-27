class MainController {
    constructor($state, $scope, $stateParams) {
        this.$scope = $scope;
        this.$state = $state;
        this.$stateParams = $stateParams;
    };

    toggleSidenavLogin() {
        this.$scope.$broadcast('sidenav-login-open', () =>{
        });
    }

    toggleSidenavRegistration(state) {
        this.$scope.$broadcast('sidenav-registration-open', {state});
    }

}

MainController.$inject = ['$state', '$scope', '$stateParams'];

export {MainController};
