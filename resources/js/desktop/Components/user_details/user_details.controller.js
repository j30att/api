
class UserDetails {
    constructor($scope,SalesResourceService, $mdSidenav, $http, SalesService,
                $timeout, $state, DealerResourceService, $mdDialog)
    {
        this.SalesResourceService = SalesResourceService;
        this.DealerResourceService = DealerResourceService;
        this.SalesService = SalesService;
        this.$mdSidenav = $mdSidenav;
        this.$mdDialog = $mdDialog;
        this.$timeout=$timeout;
        this.$state = $state;
        this.$scope = $scope;
        this.$http = $http;
        this.user = window.__user;
        this._opts = {fixed: false};
        this.isSidenavOpen =false;


    }

    getSales(id){
        this.DealerResourceService.getSales(id).then(response => {
            this.events = response.data.data;
            this.key = 0;
            this.sales = this.events[this.key].sales;
        })
    }

    $onInit(){
        this.$scope.$on('sidenav-userDetails-open', (event, data) => {
            this.getSales(data);
            this.buildToggler('right_user_details');
        });

        this.$scope.$watch('isSidenavOpen', (fixed) => {
            this.$state.modalOpened = fixed
        });
    }

    buildToggler(componentId) {
        this.$mdSidenav(componentId).toggle();
    }

    close(componentId){
        this.$mdSidenav(componentId).close();
    }

    showSales(key){
        this.key = key;
        this.sales = this.events[this.key].sales;
    }
    eventTitle(){
        let eventTitle = this.events[this.key].title;
        return eventTitle;
    }
    showLosePopUp(){
        let confirm = this.$mdDialog.confirm()
            .parent(angular.element(document.querySelector('[md-component-id="right_user_details"]')))
            .title('Confirm your action')
            .textContent('Are you sure that ' + this.user.name +' lose this game?\n' +
                'You can’t be able to change this action later!')
            .ok('Confirm')
            .cancel('Cancel');
        this.$mdDialog.show(confirm).then(() => {

        }, () => {
        });

        setTimeout(function () {
            let buttonConf = document.getElementsByClassName('md-confirm-button')[0];
            buttonConf.setAttribute('style', 'background-color:#ff3700 !important');
        }, 10);


    }


    showLeftPopUp(){
        let confirm = this.$mdDialog.confirm()
            .parent(angular.element(document.querySelector('[md-component-id="right_user_details"]')))
            .title('Confirm your action')
            .textContent('Are you sure that ' + this.user.name +' left this game?\n' +
                'You can’t be able to change this action later!')
            .ok('Confirm')
            .cancel('Cancel');

        this.$mdDialog.show(confirm).then(() => {

        }, () => {
        });

        setTimeout(function () {
            let buttonConf = document.getElementsByClassName('md-confirm-button')[0];
            buttonConf.setAttribute('style', 'background-color:#999999 !important');
        }, 10);
    }
    showWonPopUp(){
        let confirm = this.$mdDialog.confirm()
            .parent(angular.element(document.querySelector('[md-component-id="right_user_details"]')))
            .title('Confirm your action')
            .textContent('Are you sure that ' + this.user.name +' Won this game?\n' +
                'You can’t be able to change this action later!')
            .ok('Confirm')
            .cancel('Cancel');

        this.$mdDialog.show(confirm).then(() => {

        }, () => {
        });

        setTimeout(function () {
            let buttonConf = document.getElementsByClassName('md-confirm-button')[0];
            buttonConf.setAttribute('style', 'background-color:#00c811 !important');
        }, 10);
    }


};

UserDetails.$inject = ['$scope', 'SalesResourceService',
    '$mdSidenav', '$http', 'SalesService', '$timeout', '$state', 'DealerResourceService', '$mdDialog'];

export const UserDetailsComponent = {
    bindings: {

    },
    template: require('./user_details.template.html'),
    controller: UserDetails,
    controllerAs: '$ctrl'
};
