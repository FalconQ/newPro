/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/changePeople/changePeople.css'],function(app){
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller("ChangeController",["$scope","$rootScope", function ($scope,$rootScope) {
        $scope.clk = function() {
            history.back();
        }

        if( $rootScope.a){
            list = $rootScope.a;
            $scope.list =  JSON.parse(list);
        }
    }])
})