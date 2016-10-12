
define(['router','$css!./components/information/information.css'],function(app){
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller("InformationController",["$scope", function ($scope) {
        $scope.clk = function () {
            history.back();
        }
    }])
})
