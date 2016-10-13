/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/information_tourists/information_tourists.css','jquery'], function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller("TouristsController",["$scope","$rootScope",function($scope,$rootScope){
        $scope.clk = function () {
            history.back();
        }
        if( $rootScope.a){
            list = $rootScope.a;
            $scope.list =  JSON.parse(list);
        }
        //点击进入修改页面事件
        //$scope.change = function(){
        //    if( $rootScope.a){
        //        data = $rootScope.a;
        //        console.log(data);
        //        $scope.data =  JSON.parse(data);
        //    }
        //}
    }])
})