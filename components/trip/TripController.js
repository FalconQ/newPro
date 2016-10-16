/**
 * Created by My on 2016/10/10.
 */
define(['router','$css!./components/trip/trip.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('TripController',['$scope','$state',function ($scope,$state) {
        $scope.xianshi = function (){
            $state.go("seckill");
        };
    }])
})