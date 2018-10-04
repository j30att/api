class ModalController {
    constructor($interval, ngDialog, $scope) {
        this.$interval = $interval;
        this.active = 0;
        this.flag = true;
        console.log(ngDialog);

    };

    closeModal(){
        this.flag = !this.flag;

    }

};

ModalController.$inject = ['$interval', 'ngDialog', '$scope'];

export {ModalController};