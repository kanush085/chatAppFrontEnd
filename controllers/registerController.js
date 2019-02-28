app.controller('registerCtrl', function ($scope, registerService) {
    $scope.register = function () {
        
     if($scope.firstname!=undefined)
     {
        let data = {
            'firstname': $scope.firstname,
            'lastname': $scope.lastname,
            'email': $scope.email,
            'password': $scope.psw,
            'repeatpassword': $scope.repsw
        }
        if ($scope.psw != $scope.repsw) {
            $scope.message = 'password and confirm-password does not match';
        } else {
            console.log('data in controller',data);
            registerService.register(data, $scope);
        }
     }
     else{
        return $scope.firstname= "invalid name";
     }
    }
})