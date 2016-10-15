/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/orderInfo/orderInfo.css'],function (app) {
    app.directive('orderTpl',function () {
        return {
            restrict: 'E',
            templateUrl: './components/orderInfo/orderInfo_tpl.html',
            replace: true,
            controller: function ($scope,dataFactory) {
                $scope.orderData = dataFactory.get();
            }
        }
    })
    
    
    
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('orderInfoController',['$scope','$state',function ($scope,$state) {
        $scope.orderBack = function () {
            $state.go('orderBack')
        }
        $scope.toPay = function () {
            $state.go('pay');
        }
        $scope.jumpToSer = function () {
            $state.go('serviceOrder')
        }
    }])
})