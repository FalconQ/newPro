/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/information_tourists/information_tourists.css'], function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller("TouristsController",["$scope",function($scope){
        $scope.name = "lala";
    }])
})