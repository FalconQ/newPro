/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/information_tourists/information_tourists.css','jquery'], function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller("TouristsController",["$scope","$rootScope",function($scope,$rootScope){
        //点击返回前一页
        $scope.clk = function () {
            history.back();
        }
        //方法一
        //获取根作用域的信息
        //if( $rootScope.a){
        //    list = $rootScope.a;
        //    $scope.list =  JSON.parse(list);
        //}
        //方法二
        if(window.localStorage){
            var list =  window.localStorage.getItem(length);
            $scope.list =  JSON.parse(list);
        }




    }])
})