/**
 * Created by qiusheng on 2016/10/8.
 */
require.config({
    paths: {
        jquery: './libs/jquery',
        angular: './libs/bower_components/angular/angular.min',
        'ui-router': './libs/bower_components/angular-ui-router/release/angular-ui-router',
        $css: './libs/css',
<<<<<<< HEAD
        HomeController: './components/home/HomeController',
        targetController: './components/target/targetController',
        targat_positionController: './components/targat_position/targat_positionController',
=======
>>>>>>> 2557bbde87ef29efe9d612a984086fec2194ab8b
        index: './js/controllers/index',
        router: './router',
        HomeController: './components/home/HomeController',
        MineController:'./components/mine/MineController',
        SerController:'./components/serOrder/SerController',
        BackController:'./components/orderBack/BackController',
        PayController:'./components/pay/PayController'
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


<<<<<<< HEAD
require(['jquery','angular','index','ui-router','HomeController',"targetController","targat_positionController"],function (jquery,angular,index) {
    index.index();
    //手动加载模块
    angular.bootstrap(document, ['webapp']);

=======
require(['jquery',
        'angular',
        'index',
        'ui-router',
        'HomeController',
        'MineController',
        'SerController',
        'BackController',
        'PayController'
    ],
    function (jquery,angular,index) {
        index.index();
        //手动加载模块
        angular.bootstrap(document, ['webapp']);
>>>>>>> 2557bbde87ef29efe9d612a984086fec2194ab8b
});