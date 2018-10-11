class EventsController {
    constructor($scope, $element, EventsResourceService) {
        this.$scope = $scope;
        this.$element = $element;
        this.EventsResourceService = EventsResourceService;

        this._opts = {dataLoad: false};

        this.events = [];
        this.filters = {};
        this.activeFilter = [];

        this.getEvents();
        this.getFilters();
    }

    $onInit() {
        this.$element.find('input').on('keydown', function (ev) {
            ev.stopPropagation();
        });
    }

    setFilter(param) {

    }

    disableFilter(type, index) {
        if (type) {
            if (this.activeFilter[type][index]) {
                this.activeFilter[type].splice(index, 1);
            }
        } else {
            this.activeFilter = [];
        }
    }

    isSetActiveFilters() {
        let date, event, country, venue;

        if (this.activeFilter.date) {
            date = true;
        }

        if (this.activeFilter.event && this.activeFilter.event.length > 0) {
            event = true;
        }

        if (this.activeFilter.country && this.activeFilter.country.length > 0) {
            country = true;
        }

        if (this.activeFilter.venue) {
            venue = true;
        }

        return date || event || country || venue;
    }

    getFilters() {
        this.EventsResourceService.getFilters(this.activeFilter)
            .then(response => {
                this.filters = response.data.data;
                this._opts.dataLoad = true;
            });
    }

    getEvents() {
        this.EventsResourceService.getFilteredEvents(this.activeFilter)
            .then(response => {
                this.events = response.data.data;
                this._opts.dataLoad = true;
            });
    }


}

EventsController.$inject = ['$scope', '$element', 'EventsResourceService'];

export {EventsController};
