/**
 * Created by My on 2016/10/10.
 */
define(['router','$css!./components/serOrder/service.css'],function (app) {
    app.directive("orderDetail",function () {
        return {
            restrict: 'E',
            templateUrl: './components/serOrder/orderDetail.html',
            replace: true,
            controller: function ($scope,dataFactory) {
                $scope.order_info = dataFactory.get();
            }
        }
    })
        .factory('dateService',function () {
            Date.prototype.Format = function (fmt) {
                var o = {
                    "M+": this.getMonth() + 1, //月份
                    "d+": this.getDate(), //日
                    "h+": this.getHours(), //小时
                    "m+": this.getMinutes(), //分
                    "s+": this.getSeconds() //秒
                };
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (var k in o)
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
        })
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('SerController',['$scope','$state',function ($scope,$state) {
        $scope.back = function () {
            $state.go('orderBack');
        };

        $scope.pay = function () {
            $state.go('pay');
        };
    }])

});