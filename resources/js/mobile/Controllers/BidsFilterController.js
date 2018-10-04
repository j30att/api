import {BID_CANCELED, BID_MATCHED, BID_SETTLED, BID_UNMATCHED, SALE_MY} from "../Constants"
import {BIDS_MY_CANCELED, BIDS_MY_SETTLED, BIDS_MY_UNMATCHED, BIDS_MY_MATCHED} from "../Constants";


class BidsFilterController {
    constructor($http, $stateParams) {
        this.$http = $http;
        this.$stateParams = $stateParams;
        this.bids = [];
        this.user = window.__user;
        this.menu = [
            {status: BID_MATCHED, name: 'matched'},
            {status: BID_UNMATCHED, name: 'unmatched'},
            {status: BID_SETTLED, name: 'settled'},
            {status: BID_CANCELED, name: 'canceled'}
        ];
        this._opts = {dataLoad: false};
        this.getList();

    }


    getList() {
        let url = null;
        let filter = null;

        if (this.$stateParams.filter === 'matched') {
            url = BIDS_MY_MATCHED;
            filter = 1;
        }
        if (this.$stateParams.filter === 'unmatched') {
            url = BIDS_MY_UNMATCHED;
            filter = 2;
        }
        if (this.$stateParams.filter === 'settled') {
            url = BIDS_MY_SETTLED;
            filter = 3;
        }
        if (this.$stateParams.filter === 'canceled') {
            url = BIDS_MY_CANCELED;
            filter = 4;
        }

        this.$http.post(url, {status: filter, user_id: this.user.id})
            .then(response =>{
                this.bids = response.data.data;
                this._opts.dataLoad = true;
            });
    }



};

BidsFilterController.$inject = ['$http',  '$stateParams'];

export {BidsFilterController};
