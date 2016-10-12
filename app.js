/**
 * Created by qiusheng on 2016/10/8.
 */
require.config({
    paths: {
        jquery: './libs/jquery',
        angular: './libs/bower_components/angular/angular.min',
        'ui-router': './libs/bower_components/angular-ui-router/release/angular-ui-router',
        $css: './libs/css',
        HomeController: './components/home/HomeController',
        targetController: './components/target/targetController',
        targat_positionController: './components/targat_position/targat_positionController',
        index: './js/controllers/index',
        router: './router',
        TripController:'./components/trip/TripController',
        DestController:'./components/trip_destination/DestController',
        ClassicController:'./components/trip_classic/ClassicController',
        MineController:'./components/mine/MineController',
        SerController:'./components/serOrder/SerController',
        BackController:'./components/orderBack/BackController',
        PayController:'./components/pay/PayController',
        SeckillController:'./components/seckill/SeckillController',
        index: './js/controllers/index',
        router: './router'


    },
    shim:{
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        'ui-router': {
            deps: ['angular'],
            exports: 'ui-router'
        }
    }
});

require(['jquery',
        'angular',
        'index',
        'ui-router',
        'HomeController',
        'MineController',
        'SerController',
        'BackController',
        'PayController',
        'SeckillController',
        "targetController",
        "targat_positionController",
        'TripController',
        'DestController',
        'ClassicController'
    ],
    function (jquery,angular,index) {
        index.index();
        //手动加载模块
        angular.bootstrap(document, ['webapp']);
});