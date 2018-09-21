import {PROFILE_URL} from "../Constants";

class ProfileController {
    constructor($window, $http){
        this.user = window.user;
        this.$window = $window;
        this.$http = $http;




        console.log(this.user);
    }

    // changeProfile(){
    //     //console.log(this.userName.value(););
    //     console.log('change value');
    //
    // };
    changeProfile(){
        let data ={
            name:this.user.name,
            age: this.user.age,
            id: this.user.id
        };
        this.$http.post(PROFILE_URL, data).then(function (response) {

            // console.log(response.data.status);
            console.log(response.data);

            // if (response.data.status == 0){
            //     console.log('валидация не прошла')
            // } else {
            //     window.location.href = response.data.url;
            // }

        })
    };
}


ProfileController.$inject = ['$window', '$http'];

export {ProfileController};
