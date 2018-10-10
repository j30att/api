class PopupController {
    constructor($mdDialog){
        this.$mdDialog = $mdDialog;
    }

    cancel(answer) {
        this.$mdDialog.cancel(answer);
    };

}

PopupController.$inject = ['$mdDialog'];

export {PopupController};