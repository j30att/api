import {SALE_MY} from "../Constants";

class SaleController {
    constructor($http) {
        this.$http = $http;
        this.user = window.__user;
        this.sales = null;
        this._opts = {dataLoad: false};
        this.showList();
    }


    showList() {
        this.$http.post(SALE_MY, {user_id:this.user.id})
            .then(response => {
                this.sales = response.data.data;
                this._opts.dataLoad = true;
            });
    }


};

SaleController.$inject = ['$http'];

export {SaleController};



