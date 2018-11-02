
class SaleDetails {
    constructor($scope,SalesResourceService, $mdSidenav, $http, SalesService, $timeout, $state) {
        this.SalesResourceService = SalesResourceService;
        this.SalesService = SalesService;
        this.$mdSidenav = $mdSidenav;
        this.$timeout=$timeout;
        this.$state = $state;
        this.$scope = $scope;
        this.$http = $http;
        this.user = window.__user;
        this._opts = {fixed: false};
        this.isSidenavOpen =false;

    }

    toggleUserDetails(){
        this.$scope.$broadcast('sidenav-userDetails-open', this.sale.creator.id);
    }

    $onInit(){
        this.$scope.$on('sidenav-saleDetails-open', (event, data) => {
            if (data){
                this.sale = data;
            }

            this.buildToggler('right_sale_details');
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



};

SaleDetails.$inject = ['$scope', 'SalesResourceService', '$mdSidenav', '$http', 'SalesService', '$timeout', '$state'];

export const SaleDetailsComponent = {
    bindings: {

    },
    template: require('./sale_details.template.html'),
    controller: SaleDetails,
    controllerAs: '$ctrl'
};
