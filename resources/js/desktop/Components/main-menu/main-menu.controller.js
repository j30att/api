class MainMenuController {
    constructor($state) {
        this.url = $state.current.url;
    }

    isActive(string) {
        if (this.url.indexOf(string) === 1) {
            return {active: true}
        }
        return null
    }

}

MainMenuController.$inject = ['$state'];

export const MainMenuComponent = {
    bindings: {
        state: '<',
    },
    template: require('./main-menu.template.html'),
    controller: MainMenuController,
    controllerAs: '$ctrl'
};
