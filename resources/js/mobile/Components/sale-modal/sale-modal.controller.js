class SaleModal {
    constructor() {
        console.log(this.sale);
        console.log('modal - sale')
    }


    $onInit() {
    }

    close(){
        console.log(this.sale);
        this.show = !this.show;
    }
}

SaleModal.$inject = ['ngDialog', '$scope'];

export const SaleModalComponent = {
    bindings: {
        sale: '<',
        show: '=',
    },
    template: require('./sale-modal.template.html'),
    controller: SaleModal,
    controllerAs: '$ctrl'
};
