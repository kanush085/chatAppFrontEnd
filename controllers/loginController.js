app.controller('loginctrl', function ($scope, loginService) {

    $scope.login = function () {
        let data = {
            'email': $scope.email,
            'password': $scope.psw
        }
        console.log('data in controller',data);
        return loginService.login(data, $scope)
    }


})
