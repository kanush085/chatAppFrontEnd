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