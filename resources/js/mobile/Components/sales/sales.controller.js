class Sales {
    constructor($state, $scope, SalesService, SalesResourceService) {
        this.SalesResourceService = SalesResourceService;
        this.SalesService = SalesService;
        this.$state = $state;
        this.$scope = $scope;
        this.showPlace = false;
        this.showManage = false;
        this.item = null;
    }

    togglePlace(index) {
        this.sale = this.sales[index];
        this.$scope.$broadcast('sidenavPlace-open', () =>{
            console.log('open sidenav')
        });
    }

    toggleManage(index) {

        this.sale = this.sales[index];
        this.$scope.$broadcast('sidenavManage-open', this.sale);
    }
    showAmountRaised(key){
        return this.SalesService.calcAmountRaised(this.sales[key]);
    }
    showShareSold(key){
        return this.SalesService.calcShareSold(this.sales[key]);
    }
}

Sales.$inject = ['$state', '$scope', 'SalesService', 'SalesResourceService'];

export {Sales}
