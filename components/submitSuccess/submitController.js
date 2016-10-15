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
                $scope.name = $scope.successData.title.substr(0,$scope.successData.title.indexOf("日")+1);

            }
        }
    });
    
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('SubmitSuccessController',['$scope','$state',function ($scope,$state) {
        $scope.return = function () {
            $state.go('orderInfo');
        }

        $scope.jumpToMore = function () {
            $state.go('orderInfo');
        }
    }])
});