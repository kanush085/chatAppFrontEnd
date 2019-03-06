/************************************************************
 * 
 * Purpose      :   To validate and control the functionality.
 * 
 * @description
 * 
 * @file        :   forgotpasswordController.js
 * @overview    :   To validate and and passing the control to the service.
 * @author      :   AnushKumar SK <anushk136@gmail.com>
 * @version     :   1.0
 * @since       :   05-03-2019
 * 
 * **********************************************************/
app.controller('forgotPasswordctrl',function($scope,forgotPasswordService){
console.log('in control');

    $scope.forgotPassword=function(){
        let data={
            'email':$scope.email
        }
        console.log($scope.email)
        forgotPasswordService.forgotPassword(data,$scope)
        
    }



})