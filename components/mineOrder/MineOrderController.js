/**
 * Created by qiusheng on 2016/10/9.
 */
define(['router','$css!./components/mineOrder/mineOrder.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('MineOrderController',['$scope',function ($scope) {
        $scope.info = '我的';
    }])
})