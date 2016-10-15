/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/submitSuccess/submitSuccess.css'],function (app) {
    app.directive('successOrder',function () {
        return {
            restrict: 'E',
            templateUrl: './components/submitSuccess/orderInfo.html',
            replace: true,
            controller: function ($scope,dataFactory) {
                $scope.successData = dataFactory.get();
            }
        }
    });
    
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('SubmitSuccessController',['$scope','$state',function ($scope,$state) {
        $scope.return = function () {
            history.back();
        }

        $scope.jumpToMore = function () {
            $state.go('orderInfo');
        }
        console.log(1)
    }])
});