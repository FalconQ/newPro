/**
 * Created by qiusheng on 2016/10/8.
 */
require.config({
    paths: {
        jquery: './libs/jquery',
        angular: './libs/bower_components/angular/angular.min',
        'ui-router': './libs/bower_components/angular-ui-router/release/angular-ui-router',
        HomeController: './components/home/HomeController',
        MineController:'./components/mine/MineController',
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


require(['jquery','angular','index','ui-router','HomeController'],function (jquery,angular,index) {
    index.index();
    //手动加载模块
    angular.bootstrap(document, ['webapp']);
});