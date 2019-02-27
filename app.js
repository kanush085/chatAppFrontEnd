var app = angular.module('chatApp', ['ui.router']);
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
            templateUrl:'templates/dashBoard.html'
        })
        .state('forgotpassword',{
            url:'/forgotpassword',
            templateUrl:'templates/forgotPassword.html',
            controller: 'forgotPasswordctrl'
        })
        .state('resetpassword/:token',{
            url:'/resetpassword',
            templateUrl:'templates/resetPassword.html',
            controller:'resetPasswordCtrl'
        })
        $urlRouterProvider.otherwise('/login');
    });