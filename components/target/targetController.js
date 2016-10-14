/**
 * Created by caohefei on 2016/10/10.
 */
define(['router',"$css!./components/target/target.css"],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('targetController',['$scope','$http',function ($scope, $http) {
                $http.get('./data/quanguo.json')
                     .success(function(data){
                         console.log(data)
                    })
    }])
})