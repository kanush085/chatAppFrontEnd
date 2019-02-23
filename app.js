var app = angular.module('chatApp', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            // controller: 'controlLogin'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'templates/registration.html',
            // controller: 'controlRegister'
        })
        .state('forgotpassword',{
            url:'/forgotpassword',
            templateUrl:'templates/forgotPassword.html',
        })
        .state('resetpassword',{
            url:'/resetpassword',
            templateUrl:'templates/resetPassword.html',
        })
        $urlRouterProvider.otherwise('/login');
    });