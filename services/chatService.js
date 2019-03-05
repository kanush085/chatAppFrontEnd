app.service('chatServices', function ($http) {
    this.getAllUsers = function ($scope, userToken) {
        try {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/auth/getAllUser',
                headers: {
                    'token': userToken,
                }
            }).then(function successCallBack(response) {
                $scope.allUser = response.data.result;
                console.log(response.data.result);

            },
                function errorCallBack(response) {
                    console.log("Registration unsuccessfull");
                    console.log(response);
                }

            );
        } catch (err) {
            console.log('Error in getting users');

        }
    }
    this.getUserMsg = function ($scope) {
        try {
            let arr = [];
            let userToken = localStorage.getItem('token');
            $http({
                method: 'GET',
                url: 'http://localhost:3000/auth/getUserMsg',
                headers: {
                    'token': userToken,
                }
            }).then(
                function successCallBack(response) {
            
                    for (let i = 0; i < response.data.result.length; i++) {
                        a = response.data.result[i];
 
                        if (((localStorage.getItem('userid') == a.senderUserId) &&
                            (localStorage.getItem('ruserId') == a.recieverUserId)) ||
                            ((localStorage.getItem('userid') == a.recieverUserId &&
                                localStorage.getItem('ruserId') == a.senderUserId))) {
                            console.log("Local user is", localStorage.getItem('userid'), "a user is", a.senderUserId,
                                "local recieverid is", localStorage.getItem('ruserId'), "receiver is", a.recieverUserId);

                            arr.push(a);
                            /**
                            * pushing the message to the array
                            */       
                        }

                    }
                    $scope.allUserArr = arr;
                    console.log("Users msg successfull ", arr);
                },
                function errorCallBack(response) {
                    console.log("Unsuccessfull");
                    console.log(response);
                }
            )
        }
        catch (err) {
            console.log("Error in getting message");
        }
    }
})
