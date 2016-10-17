/**
 * Created by My on 2016/10/10.
 */
define(['router','$css!./components/trip_destination/trip_destination.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('DestController',['$scope','$window',function ($scope,$window) {
        $scope.back = function (){
            $window.history.back();
        }
        //切换境内境外
        $scope.oldItem =$(".ul li").eq(0);
        $scope.touch = function (){
            $($scope.oldItem).css({"borderBottom": "none","color"
                :"#3f3f3f"})
            $(event.target).css({"borderBottom": "0.01rem solid #68d2c7","color"
            :"#68d2c7"});
            $scope.oldItem = $(event.target)
        }
        $scope.oldlist =$(".list li").eq(0);
        $scope.listClick = function(){
            $($scope.oldlist).css({"backgroundColor":"#edf0f5"})
            $(event.target).css({"backgroundColor":"#fff"});
            $scope.oldlist = $(event.target)
        }
    }])
})