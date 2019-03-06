/************************************************************
 * @description
 * 
 * @file        :   app.js
 * @overview    :   To call the resetPassword templates as on the request .
 * @author      :   AnushKumar SK <anushk136@gmail.com>
 * @version     :   1.0
 * @since       :   06-03-2019
 * 
 * **********************************************************/
app.service('resetPasswordService', function ($http, $location) {
    this.resetPassword = function (data, $scope) {
        console.log(data);
        $http({
            method: 'POST',
            url: 'http://localhost:3000/resetpassword',
            data: data
        }).then(function successCallBack(response) {
            console.log("resetpassword is successfull");
            $location.path('/login');
            console.log(response);
            $scope.loginMessage = "resetpassword updated successfull";

        },
            function errorCallBack(error) {
                console.log("Resetpassword Failed");
                console.log(error);
                $scope.loginMessage = "Resetpassword Failed";

            }
        )
    }
})