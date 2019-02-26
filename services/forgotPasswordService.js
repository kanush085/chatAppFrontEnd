app.service('forgotPasswordService',function($http,$location){
    this.forgotPassword=function(data,$scope){
        console.log(data);
        
        $http({
            method:'POST',
            url:'http://localhost:3000/forgotpassword',
            data:data
        }).then(function successCallBacl(response) {
            console.log("forgotpassword is successfull");
            // $location.path('dashBoard');
            console.log(response);
            $scope.loginMessage = "forgotpassword successfull";

        },
            function errorCallBack(error) {
                console.log("forgotpassword");
                console.log(error);
                $scope.loginMessage = "forgotpassword Failed";

            }
        )
    }
})