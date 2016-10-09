/**
 * Created by qiusheng on 2016/10/8.
 */
define(['angular','ui-router'],function (angular) {
    angular.module('webapp',['ui-router'])
        .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home',{
                    url: '/home',
                    templateUrl: './components/home/home.html',
                    controller: 'HomeController'
                })
                .state('about', {
                    url:'/about',
                    templateUrl: './components/about/about.html',
                    controller: 'AboutController'
                })
        }])
});