import {DialogController} from "../DialogController";
import {SALE_CLOSED, SALE_INDEX, SALE_MARKUP} from "../../Constants"

class InvestController {
    constructor($window, $http, $mdDialog, EventsResourceService, SalesResourceService) {
        this.$window = $window;
        this.$mdDialog = $mdDialog;
        this.EventsResourceService = EventsResourceService;
        this.SalesResourceService = SalesResourceService;
        this.$http = $http;

        this._opts = {dataLoad: false};

        this.events = [];
        this.sales = [];
        this.filter = SALE_CLOSED;

        this.getEvents();
        this.getSales();
    }

    setFilter(param) {
        if (param === 'closed') {
            this.filter = SALE_CLOSED;
            this.getSales()
        }
        if (param === 'markup') {
            this.filter = SALE_MARKUP;
            this.getSales()
        }
    }

    getEvents() {
        this.EventsResourceService.getMainEvents()
            .then(response => {
                this.events = response.data.data;
                this._opts.dataLoad = true;
            });
    }

    getSales() {
        this.SalesResourceService.getClosingSoonSales()
            .then(response => {
                this.sales = response.data.data;
                this._opts.dataLoad = true;
            });
    }

    showCreateForm(ev) {
        let vm = this;
        let elementWrapper ={};
        elementWrapper.target = document.getElementById('right');

        this.$mdDialog.show({
            controller: DialogController,
            controllerAs: 'vm',
            template: require('../../views/bids/place.template.html'),
            parent: angular.element(document.body),
            targetEvent: elementWrapper,

            clickOutsideToClose: true,

        })
            .then(function (answer) {

            }, function () {

            });
    };

}

InvestController.$inject = ['$window', '$http', '$mdDialog','EventsResourceService','SalesResourceService'];

export {InvestController};
