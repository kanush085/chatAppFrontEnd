/************************************************************
 * 
 * Purpose      :   To validate and control the functionality.
 * 
 * @description
 * 
 * @file        :   resetController.js
 * @overview    :   To validate and and passing the control to the service.
 * @author      :   AnushKumar SK <anushk136@gmail.com>
 * @version     :   1.0
 * @since       :   05-03-2019
 * 
 * **********************************************************/
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