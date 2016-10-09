/**
 * Created by qiusheng on 2016/10/8.
 */
require.config({
    paths: {
        'jquery': './libs/jquery',
        'angular': './libs/angular.min',
        'ui-router': './libs/angular-ui-router'
    },
    shim:{
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'ui-router': {
            deps: ['angular'],
            exports: 'ui-router'
        }
    }
});


require(['jquery','angular'],function ($,angular) {
    angular.bootstrap(document, ['webApp']);
});