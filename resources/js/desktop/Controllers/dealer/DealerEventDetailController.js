
class DealerEventDetailController {
    constructor(DealerResourceService, $state, $scope){
        this.DealerResourceService = DealerResourceService;
        this.$state = $state;
        this.$scope = $scope;
        this.getEvent(this.$state.params.id);
    }

    toggleSidenav(sale){
        this.$scope.$broadcast('sidenav-saleDetails-open', sale);
    }



    getEvent(id){
        this.DealerResourceService.getEvent(id).then(response => {
            this.event = response.data.data;
            this.activeEvent = this.event.subevents[0];
        })
    }



    toggleEvent(event){
        this.activeEvent = event;
    }

    status(status){
        if (status == 1){
            return 'Open'
        }else{
            return 'Closing'
        }
    }
}

DealerEventDetailController.$inject = ['DealerResourceService', '$state', '$scope'];

export {DealerEventDetailController};
