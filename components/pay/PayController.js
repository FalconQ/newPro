/**
 * Created by My on 2016/10/10.
 */
define(['router','$css!./components/pay/pay.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('PayController',['$scope','$state',function ($scope,$state) {

            $scope.return = function () {
                $state.go('serviceOrder')
            };

        }])
        .directive('orderInfo',function () {
            return{
                restrict: 'E',
                templateUrl: './components/pay/pay_info.html',
                replace:true,
                controller: function ($scope,dataFactory) {
                    $scope.data = dataFactory.get();
                }
            }
        })
        .directive('payList',function () {
            return{
                restrict:'E',
                templateUrl: './components/pay/pay_list.html',
                replace:true,
                controller: function ($scope,$element) {
                    $element.find('li').on('click','input',function () {
                        $(this).closest('label').attr('class','checked')
                            .closest('li').siblings('li').find('label').attr('class','uncheck');
                    })
                }
            }
        })
        .directive('toPay',function () {
            return {
                restrict:'E',
                templateUrl: './components/pay/to_Pay.html',
                replace:true,
                controller: function ($scope,dataFactory) {
                    $scope.data = dataFactory.get();
                    $scope.click = function () {
                        alert('支付成功');
                    }
                }
            }
        })
});