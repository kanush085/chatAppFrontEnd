app.service('registerService', function ($http, $location) {
    try {
        this.register = function (data, $scope) {
            console.log('in service ',data);
            $http({
                method: 'POST',
                url: 'http://localhost:3000/register',
                data: data
            }).then(function successCallBack(response) {
                console.log("Registration successfull");
                $location.path('/login')
                console.log(response);
                $scope.registerMessage = "Registration successfull"

            },
                function errorCallBack(error) {
                    console.log("Registration Failed");
                    console.log(error);
                    $scope.loginMessage = "Registration Failed";
                }
            )
        }
    } catch (err) {
        console.log(err.message);
        
    }
})