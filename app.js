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
        TripController:'./components/trip/TripController',
        DestController:'./components/trip_destination/DestController',
        ClassicController:'./components/trip_classic/ClassicController',
        C_orderController:'./components/C_order/C_orderController',
        MineController:'./components/mine/MineController',
        MineOrderController:'./components/mineOrder/MineOrderController',
        InformationController:'./components/information/InformationController',
        TouristsController: './components/information_tourists/TouristsController',
        PeopleController: './components/addPeople/PeopleController',
        ChangeController: './components/changePeople/ChangeController',
        SerController:'./components/serOrder/SerController',
        BackController:'./components/orderBack/BackController',
        PayController:'./components/pay/PayController',
        DataSelectController:'./components/dataSelect/DataSelectController',
        submitController:'./components/submitSuccess/submitController',
        orderInfoController:'./components/orderInfo/orderInfoController',
        ProDetailController: './components/proDetail/ProDetailController',
        SeckillController:'./components/seckill/SeckillController',
        index: './js/controllers/index',
        router: './router',
        swiper:'./libs/swiper-3.3.1.jquery.min'
    },
    shim:{
        angular: {
            deps: ['jquery'],
            exports: 'angular'
        },
        'ui-router': {
            deps: ['angular'],
            exports: 'ui-router'
        },
        swiper:{
            deps:['jquery'],
            exports:'swiper'
        }
    }
});

require(['jquery',
        'angular',
        'index',
        'ui-router',
        'HomeController',
        'MineController',
        'SeckillController',
        'MineOrderController',
        'InformationController',
        'TouristsController',
        'PeopleController',
        'ChangeController',
        'SerController',
        'BackController',
        'PayController',
        'SeckillController',
        "targetController",
        "targat_positionController",
        'TripController',
        'ClassicController',
        'DestController',
        'DataSelectController',
        'submitController',
        'orderInfoController',
        'C_orderController',
        'ProDetailController'
    ],
    function (jquery,angular,index) {
        index.index();
        //手动加载模块
        angular.bootstrap(document, ['webapp']);
});