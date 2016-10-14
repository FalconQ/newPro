/**
 * Created by My on 2016/10/10.
 */
define(['router','$css!./components/orderBack/orderBack.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('BackController',['$scope','$state',function ($scope,$state) {
        $scope.return = function () {
            history.back();
        };
        
        $scope.focus = function (e) {
            if(e.currentTarget.value){
                e.currentTarget.value = "";
            }
        };
        $scope.blur = function (e) {
            if(!e.currentTarget.value){
                e.currentTarget.value = "可以申请修改订单的团期、出游人信息等或申请退款，至少写够3个字哦~";
            }
        };
        $scope.submit = function () {

            $state.go('serviceOrder');
        }
    }])
});