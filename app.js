/************************************************************
 * @description
 * 
 * @file        :   app.js
 * @overview    :   To call the templates.
 * @author      :   AnushKumar SK <anushk136@gmail.com>
 * @version     :   1.0
 * @since       :   06-03-2019
 * 
 * **********************************************************/
var app = angular.module('chatApp', ['ui.router','btford.socket-io']);
app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginctrl'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'templates/registration.html',
            controller: 'registerCtrl'
        })
        .state('dashBoard',{
            url:'/dashBoard',
            templateUrl:'templates/dashBoard.html',
            controller:'chatController'
        })
        .state('forgotpassword',{
            url:'/forgotpassword',
            templateUrl:'templates/forgotPassword.html',
            controller: 'forgotPasswordctrl'
        })
        .state('resetpassword',{
            url:'/resetpassword',
            templateUrl:'templates/resetPassword.html',
            controller:'resetPasswordCtrl'
        })
        $urlRouterProvider.otherwise('/login');
    });

    app.service('SocketService', ['socketFactory', function SocketService(socketFactory){
        return socketFactory({
            ioSocket: io.connect('http://localhost:3000')  
            /**
             * connecting socket io
             */
        })
    }])