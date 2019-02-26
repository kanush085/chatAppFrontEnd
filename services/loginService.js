app.service('loginService', function ($http, $location) {
    try {
        let self = this;
        self.login = function (data, $scope) {
            console.log('in service ',data);
            $http({
                method: 'POST',
                url: 'http://localhost:3000/login',
                data: data
            }).then(function successCallBacl(response) {
                console.log("Login is successfull");
                $location.path('dashBoard');
                console.log(response);
                $scope.loginMessage = "Login successfull";

            },
                function errorCallBack(error) {
                    console.log("Login Failed");
                    console.log(error);
                    $scope.loginMessage = "Login Failed";

                }
            )
        }
    } catch (err) {
        console.log(err.message);
        
    }
})
