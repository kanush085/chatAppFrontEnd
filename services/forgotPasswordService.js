/************************************************************
 * @description
 * 
 * @file        :   app.js
 * @overview    :   To call the forgotPassword templates as on the request .
 * @author      :   AnushKumar SK <anushk136@gmail.com>
 * @version     :   1.0
 * @since       :   06-03-2019
 * 
 * **********************************************************/
app.service('forgotPasswordService', function ($http, $location) {
    this.forgotPassword = function (data, $scope) {
        console.log(data);

        $http({
            method: 'POST',
            url: 'http://localhost:3000/forgotpassword',
            data: data
        }).then(function successCallBack(response) {
            console.log("forgotpassword is successfull");
            var userid = response.data.message[0]._id;
            var name = response.data.message[0].firstname;
            var token = response.data.token;
            localStorage.setItem("userid", userid);
            localStorage.setItem("name", name);
            localStorage.setItem("token", token);
            $location.path('dashboard');
            // $location.path('dashBoard');
            console.log(response);
            $scope.loginMessage = "login successfull";

        },
            function errorCallBack(error) {
                console.log("register Unsuccessfull");
                console.log(error);
                $scope.loginMessage = "EmailId Incorrect ";

            }
        )
    }
})