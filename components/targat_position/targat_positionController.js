/**
 * Created by caohefei on 2016/10/10.
 */
/**
 * Created by caohefei on 2016/10/10.
 */
define(['router',"$css!./components/targat_position/targat_position.css"],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
        return app.controller('targat_positionController',['$scope','$http',function ($scope,$http) {
                       $http.get('./data/beijing.json')
                           .success(function(data){
                                console.log(data.response.resultList.record)
                               $scope.objs_1=data.response.resultList.record;
                               $scope.CityName=data.response.ipLoc.CityName;
                           })

                            }])
                     .filter("tr",function(){
                                return function(ele){
                                       var  num=ele.length
                                    return   ele.substring(0,num-2)
                                }
                       })
})