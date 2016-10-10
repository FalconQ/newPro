/**
 * Created by qiusheng on 2016/10/8.
 */
define(['angular'],function (angular) {
    return angular.module('webapp',['ui.router'])
            .config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                    .state('home', {
                        url: '/home',
                        templateUrl: './components/home/home.html',
                        controller: 'HomeController'
                    })
                    .state('target', {
                        url: '/target',
                        templateUrl: './components/target/target.html',
                        controller: 'targetController'
                    })

            }]);

});
