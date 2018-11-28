class EventsListController {
    constructor($window, $scope, EventsResourceService){
        this.$window = $window;
        this.$scope = $scope;
        this.EventsResourceService = EventsResourceService;
        this.opened = [] ;
        this._opts = {dataLoad: false};
        this.showList()
    }

    showList() {
        this.EventsResourceService.getEvents().then(response => {
            this.events = response.data.data;
            this._opts.dataLoad = true;
        });
    }

    emptyResult(){
        return (this._opts.dataLoad && !this.events.length);
    }

    clearFilter() {
        this.$scope.$broadcast('clear-filter')
    }
}

EventsListController.$inject = ['$window', '$scope', 'EventsResourceService'];

export {EventsListController};
