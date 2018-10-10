import {SALE_ACTIVE, SALE_CLOSED} from "../../../common/Constants";

class SaleFilterController {
    constructor(SalesResourceService, $stateParams) {
        this.SalesResourceService = SalesResourceService;
        this.$stateParams = $stateParams;
        this.user = window.__user;
        this.menu = [
            {status: SALE_ACTIVE, name: 'active'},
            {status: SALE_CLOSED, name: 'closed'},
        ];
        this._opts = {dataLoad: false, limit:3, openedForm:false};
        this.getList();
    }


    getList() {
        if(this.$stateParams.type === 'active'){
            this.SalesResourceService.getMySalesActive(this.user.id, this._opts.limit).then(response => {
                this.sales = response.data.data;
                this._opts.dataLoad = true;
            })
        }
        if(this.$stateParams.type === 'closed'){
            this.SalesResourceService.getMySalesClosed(this.user.id, this._opts.limit).then(response => {
                this.sales = response.data.data;
                this._opts.dataLoad = true;
            })
        }
    }

    togglerCreateForm(){
        this._opts.openedForm = !this._opts.openedForm;
    }


};

SaleFilterController.$inject = ['SalesResourceService', '$stateParams'];

export {SaleFilterController};
