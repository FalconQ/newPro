/**
 * Created by My on 2016/10/10.
 */
define(['router','$css!./components/serOrder/service.css'],function (app) {
    app.directive("orderDetail",function () {
        return {
            restrict: 'E',
            templateUrl: './components/serOrder/orderDetail.html',
            replace: true,
            contorller: function ($scope,orderFactory) {
                $scope.order_info = orderFactory.get();
            }
        }
    })
    
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('SerController',['$scope','$state',function ($scope,$state) {
        $scope.back = function () {
            $state.go('orderBack');
        };

        $scope.pay = function () {
            $state.go('pay');
        }
        
    }])

})