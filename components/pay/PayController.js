/**
 * Created by My on 2016/10/10.
 */
define(['router','$css!./components/pay/pay.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('PayController',['$scope','dataFactory',function ($scope) {

            $scope.return = function () {
                history.back()
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
                    $element.find('li').on('click','label',function () {
                        console.log(this)
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
                        dataFactory.set({'oriDate':'123'})
                        alert('支付成功')
                        console.log(dataFactory.get())
                    }
                }
            }
        })
});