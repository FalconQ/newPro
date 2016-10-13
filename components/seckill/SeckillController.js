/**
 * Created by My on 2016/10/10.
 */
define(["router","$css!./components/seckill/seckill.css"],function(app){
    return app.controller('SeckillController',['$scope','$http',function ($scope,$http) {
        //获取主题页面 数据
        $http.get("./data/qianggou.json")
            .success(function(data){
                console.log(data)
                $scope.objs=data.Product
                $scope.name=data.Product[2].PITitle
                $scope.a={'backgroundImage':'url('+data.Product[2].ImgUrl+')'}
            });
        //获取轮播图数据
        $http.get("data/qianggou.json")
            .success(function(data){
                $scope.objs2=data.Product
                console.log($scope.objs2)
            });
        $scope.goBack=function goHistory(temp){
                //temp  正值就是向前走， 负数返回
            window.history.go(temp);
        };
        $(".banner")
        //给首页NAV添加事件
        $(".nav_ul").delegate("li","click",function(){
            $(this).css({"borderBottom":"0.05rem solid #2ebd59"}).siblings().css({"border":"none"}).find("a").css("color", "black");
            $(this).find("a").css("color","#2ebd59")
        });


    }]);

})


