import {PROFILE_URL} from "../Constants";

class ProfileController {
    constructor($window, $http){
        this.user = window.user;
        this.$window = $window;
        this.$http = $http;
        this.opened = false;



        console.log(this.user);
    }

    showProfile(){

        this.opened = !this.opened;
        console.log(this.opened);
    };




    changeProfile(){
        let data ={
            name:this.user.name,
            age: this.user.age,
            id: this.user.id
        };
        this.$http.post(PROFILE_URL, data).then(function (response) {

            console.log(response.data);
      })
    };
}


ProfileController.$inject = ['$window', '$http'];

export {ProfileController};
