class SaleModal {
    constructor() {
        this._opts = {
            stateCreate: false
        }
    }


    $onInit() {
    }

    setState(){
        this._opts.stateCreate = !this._opts.stateCreate;
    }
    close(){
        this.show = !this.show;
    }
}

SaleModal.$inject = ['$scope'];

export const SaleModalComponent = {
    bindings: {
        sale: '<',
        show: '=',
    },
    template: require('./sale-modal.template.html'),
    controller: SaleModal,
    controllerAs: '$ctrl'
};
