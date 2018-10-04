import {SALE_MY_ACTIVE} from "../Constants";
import {SALE_MY_CLOSED} from "../Constants";
import {SALE_ACTIVE} from "../Constants";
import {SALE_CLOSED} from "../Constants";


class SaleFilterController {
    constructor($http, $stateParams) {
        this.$http = $http;
        this.sales = null;
        this.user = window.__user;
        this.menu = [
            {status: SALE_ACTIVE, name: 'active'},
            {status: SALE_CLOSED, name: 'closed'},
        ];
        this.$stateParams = $stateParams;
        this._opts = {dataLoad: false};
        this.getList();
    }


    getList() {
        let url = null;
        let filter = null;
        if(this.$stateParams.filter === 'active'){
            url = SALE_MY_ACTIVE;
            filter = SALE_ACTIVE;

        }
        if(this.$stateParams.filter === 'closed'){
            url = SALE_MY_CLOSED;
            filter = SALE_CLOSED
        }
        this.$http.post(url, {status: filter, user_id: this.user.id})
            .then(response => {
                this.sales = response.data.data;
                this._opts.dataLoad = true;
            });
    }


};

SaleFilterController.$inject = ['$http', '$stateParams'];

export {SaleFilterController};
