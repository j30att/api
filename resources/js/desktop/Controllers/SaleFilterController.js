import {SALE_INDEX} from "../Constants";
import {SALE_ACTIVE} from "../Constants";
import {SALE_CLOSED} from "../Constants";


class SaleFilterController {
    constructor($window, $http, $stateParams) {
        this.$window = $window;
        this.$http = $http;
        this.sales = null;
        this._opts = {dataLoad: false};
        this.filter = null;
        this.menu = [
            {status: SALE_ACTIVE, name: 'active'},
            {status: SALE_CLOSED, name: 'closed'},
        ];
        this.$stateParams = $stateParams;

        this.showList();
    }


    showList() {
        self = this;
        this.menu.forEach(function (value, key) {
            if (value.name == self.$stateParams.filter) self.filter = value.status;
        });


        this.$http.get(SALE_INDEX, {params: {status: this.filter}})
            .then(response => {
                this.sales = response.data.data;
                console.log(this.sales, 'this.sales');
                this._opts.dataLoad = true;
            });
    }


};

SaleFilterController.$inject = ['$window', '$http', '$stateParams'];

export {SaleFilterController};
