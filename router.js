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
<<<<<<< HEAD
                    .state('target', {
                        url: '/target',
                        templateUrl: './components/target/target.html',
                        controller: 'targetController'
                    })
                    .state('targat_position', {
                        url: '/targat_position',
                        templateUrl: './components/targat_position/targat_position.html',
                        controller: 'targat_positionController'
                    })

=======
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
>>>>>>> 2557bbde87ef29efe9d612a984086fec2194ab8b

            }]);

});
