/**
 * Created by My on 2016/10/10.
 */
define(['router','$css!./components/serOrder/service.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('SerController',['$scope','dataFactory',function ($scope,dataFactory) {
        console.log(dataFactory.get())
    }])
})