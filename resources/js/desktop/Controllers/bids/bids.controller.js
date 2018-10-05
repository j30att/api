import {BIDS_TYPES} from "./constants";

class BidsController {
    constructor($window, $http) {
        this.$window = $window;
        this.$http = $http;
        this.filter = null;
        this.bids = [];

        //this.showListFiltered();
    }

    showListFiltered() {
        this.$http.get(BIDS_INDEX, {
            params: {filter: this.filter}
        }).then(response => {
            console.log(response.data.data);
            this.bids = response.data.data;
        });
    }
}

BidsController.$inject = ['$window', '$http'];

export {BidsController}
