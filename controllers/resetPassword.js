app.controller('resetPasswordCtrl', function ($scope, resetPasswordService) {
    $scope.resetPassword = function () {
        let data = {
            'newPassword': $scope.psw,
            'confirmPassword': $scope.npsw
        }
        if ($scope.psw != $scope.npsw) {
            $scope.message = "password and confirm password is wrong";

        }
        else {
            resetPasswordService.resetPassword(data, $scope);
        }
    }
})