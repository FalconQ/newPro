/**
 * Created by caohefei on 2016/10/10.
 */
define(['router',"$css!./components/target/target.css"],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('targetController',['$scope','$http',function ($scope, $http) {
                $http.get('./data/hot.json')
                     .success(function(data){
                         $scope.obj1=data.response.groupList[1].cellItem
                    });
                $http.get('./data/tabdata.json')
                    .success(function(data){
                        $scope.obj2=data.categoryList;
                    });
        angular.element(".modlTargat_left ul").find("li").on("click",function(){
            var eleLIi=event.target;
            $(eleLIi).css({"background":"white","color":"#6ad3c8"}).siblings().css({"background":"none","color":"black"})
        })

    }])

})
