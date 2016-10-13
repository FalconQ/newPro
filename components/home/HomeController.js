/**
 * Created by qiusheng on 2016/10/9.
 */
define(['router','$css!./components/home/home.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('HomeController',['$scope',"$http",function ($scope,$http) {

        lb();
        data();
        function data(){
            $http.get("./data/xianShi.json").success(function(data){
                console.log(data);
                $scope.data = data
            })
        }

    }])
    //return app.controller("HomeController",["$scope",function($scope){
    //    $scope.infor = "测试";
    //}])


    //轮播图
    function lb(){
        var mySwiper = new Swiper('.slider', {
            autoplay: 2000,//可选选项，自动滑动
            loop:true,
            pagination : '.swiper-pagination',
            paginationClickable :true,
            onAutoplayStop: function(swiper){
                swiper.startAutoplay();
            }
        })
    }


//    倒计时

})





