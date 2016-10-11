/**
 * Created by qiusheng on 2016/10/8.
 */
define(['angular'],function (angular) {
    return angular.module('webapp',['ui.router'])
            .config(['$stateProvider','$urlRouterProvider',
                function ($stateProvider,$urlRouterProvider) {
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
                    .state('targat_position', {
                        url: '/targat_position',
                        templateUrl: './components/targat_position/targat_position.html',
                        controller: 'targat_positionController'
                    })
                    .state('mine', {
                        url: '/mine',
                        templateUrl: './components/mine/mine.html',
                        controller: 'MineController'
                    })
                    .state('trip', {
                        url: '/trip',
                        templateUrl: './components/trip/trip.html',
                        controller: 'TripController'
                    })
                    .state('trip_destination', {
                        url: '/trip_destination',
                        templateUrl: './components/trip_destination/trip_destination.html',
                        controller: 'DestController'
                    })
                    .state('trip_classic', {
                        url: '/trip_classic',
                        templateUrl: './components/trip_classic/trip_classic.html',
                        controller: 'ClassicController'
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
                    .state('C_order', {
                        url: '/C_order',
                        templateUrl: 'components/C_order/C_order.html',
                        controller: 'C_orderController'
                    })

                    }])
})
