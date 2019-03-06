/************************************************************
 * 
 * Purpose      :   To validate and control the functionality.
 * 
 * @description
 * 
 * @file        :   registerController.js
 * @overview    :   To validate and and passing the control to the service.
 * @author      :   AnushKumar SK <anushk136@gmail.com>
 * @version     :   1.0
 * @since       :   05-03-2019
 * 
 * **********************************************************/
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