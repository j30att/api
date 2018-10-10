class SaleController {
    constructor(SalesResourceService) {
        this.SalesResourceService = SalesResourceService;
        this.user = window.__user;
        this._opts = {dataLoad: false, limit:3, openedForm:false};


        this.SalesResourceService.getMySales(this.user.id, this._opts.limit).then(response =>{
            this.sales = response.data.data;
        });
    }

    togglerCreateForm(){
        this._opts.openedForm = !this._opts.openedForm;
    }

};

SaleController.$inject = ['SalesResourceService'];

export {SaleController};



