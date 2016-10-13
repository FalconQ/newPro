/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/information_tourists/information_tourists.css','jquery'], function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller("TouristsController",["$scope","$rootScope",function($scope,$rootScope){
        $scope.clk = function () {
            history.back();
        }
       var localStorage = function () {
            //var data = window.localStorage.getItem()
            for(var key in window.localStorage){
                console.log(window.localStorage.getItem(key));
            }
        }
        localStorage();

        window.localStorage.clear();


    }])
})