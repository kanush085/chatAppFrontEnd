/************************************************************
 * 
 * Purpose      :   To validate and control the functionality.
 * 
 * @description
 * 
 * @file        :   loginController.js
 * @overview    :   To validate and and passing the control to the service.
 * @author      :   AnushKumar SK <anushk136@gmail.com>
 * @version     :   1.0
 * @since       :   05-03-2019
 * 
 * **********************************************************/
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
