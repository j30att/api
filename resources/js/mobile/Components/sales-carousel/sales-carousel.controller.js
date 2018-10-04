class SalesCarousel {

    constructor(ngDialog) {
        this.ngDialog = ngDialog
        console.log(ngDialog);
    }

    $onInit() {
    }

}



export const SalesCarouselComponent = {
    bindings: {
        sales: '<',
        state:  '<',
    },
    template: require('./sales-carousel.template.html'),
    controller: SalesCarousel,
    controllerAs: '$ctrl'
};
