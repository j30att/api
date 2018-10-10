import {EVENTS_FILTER, EVENTS_MAIN, EVENTS_RESOURCE} from "../Constants";

class EventsResourceService {
    constructor($http) {
        this.$http = $http;
    }

    getMainEvents() {
        return this.$http.get(EVENTS_MAIN);
    }

    getEvents(filter) {
        return this.$http.post(EVENTS_FILTER, {filter: filter});

    };

    getEventById(id) {
        return this.$http.get(EVENTS_RESOURCE + '/' + id);
    };
}

EventsResourceService.$inject = ['$http'];

export {EventsResourceService};