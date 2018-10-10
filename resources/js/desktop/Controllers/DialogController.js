import {EVENTS_API} from "../../common/Constants";

class DialogController {
    constructor($mdDialog,$http) {
        this.$mdDialog = $mdDialog;
        this.$http = $http;
        this.getEvents();
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
                console.log(this.events);

            });
    }


}

DialogController.$inject = ['$mdDialog', '$http'];

export {DialogController};