import {BID_RESPONSE_MATCHED} from "../Constants"
import {BID_RESPONSE_UNMATCHED} from "../Constants"
import {BID_RESPONSE_SETTLED} from "../Constants"
import {BID_RESPONSE_CANCELED} from "../Constants"


import {BID_RESPONSE_INDEX} from "../Constants"


class FilterBidResponsesController {
    constructor($window, $http, $stateParams) {
        this.$window = $window;
        this.$http = $http;
        this.filter = BID_RESPONSE_MATCHED;
        this.bids = [];
        this.$stateParams = $stateParams;
        this.menu = [
            {status: BID_RESPONSE_MATCHED, name: 'matched'},
            {status: BID_RESPONSE_UNMATCHED, name: 'unmatched'},
            {status: BID_RESPONSE_SETTLED, name: 'settled'},
            {status: BID_RESPONSE_CANCELED, name: 'canceled'}
        ];
        this.showListFiltred();

    }






    showListFiltred() {
        let self = this;
        this.menu.forEach(function (value, key) {
            console.log(value.name);
            if (value.name === self.$stateParams.filter) self.filter = value.status;
        });

        this.$http.get(BID_RESPONSE_INDEX, {
            params: {filter: this.filter}
        }).then(response => {

            this.bids = response.data.data;

        });
    }


};

FilterBidResponsesController.$inject = ['$window', '$http', '$stateParams'];

export {FilterBidResponsesController};
