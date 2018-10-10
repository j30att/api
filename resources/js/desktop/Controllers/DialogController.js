import {EVENTS_API, SUBEVENTS_INDEX} from "../../common/Constants";

class DialogController {
    constructor($mdDialog,$http, SalesService) {
        this.$mdDialog = $mdDialog;
        this.SalesService = SalesService;
        this.$http = $http;
        this.getEvents();
        this.sale={
            event_id:null,
            subevent_id:null,
            share:null,
            markup: null,
            amount: null,
        }
    };

    hide () {
        this.$mdDialog.hide();
    };

    cancel () {
        this.$mdDialog.cancel();
    };

    getEvents() {
        this.$http.get(EVENTS_API)
            .then(response => {
                this.events = response.data.data;
            });
    }

    getSubevents(){
        this.$http.get(SUBEVENTS_INDEX, {params: {event_id: this.sale.event_id}})
            .then(response => {
                this.subevents = response.data.data;
            });

    }

    calcAmount(){
        console.log(this.sale.share, 'this.sale.share');
        console.log(this.sale.markup, 'this.sale.share');
        this.sale.amount = this.SalesService.calcAmount(this.sale.share, this.sale.markup, 1000);
    }

}

DialogController.$inject = ['$mdDialog', '$http', 'SalesService'];

export {DialogController};