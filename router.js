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
                    .state('mine', {
                        url: '/mine',
                        templateUrl: './components/mine/mine.html',
                        controller: 'MineController'
                    })
                    .state('serviceOrder', {
                        url: '/serOrder',
                        templateUrl: 'components/serOrder/service.html',
                        controller: 'SerController'
                    })
                    .state('orderBack', {
                        url: '/orderBack',
                        templateUrl: 'components/orderBack/orderBack.html',
                        controller: 'BackController'
                    })
                    .state('pay', {
                        url: '/pay',
                        templateUrl: 'components/pay/pay.html',
                        controller: 'PayController'
                    })

            }]);

});
