/**
 * Created by My on 2016/10/10.
 */
define(["router","$css!./components/seckill/seckill.css"],function(app){
    return app.controller('SeckillController',['$scope','$http','$state','$interval',function ($scope,$http,$state,$interval) {
        //按钮跳转事件
        $scope.jumpToDetail = function () {
            $state.go('proDetail');
        };
        //获取主题页面 数据
        $http.get("./data/qianggou.json")
            .success(function(data){
                $scope.objs=data.Product;
                $scope.name=data.Product[2].PITitle;
                $scope.a={'backgroundImage':'url('+data.Product[2].ImgUrl+')'};
                $scope.progress = data.Product[2].PIProductNum + '%';
                $scope.ShelfTime = $scope.get_unix_time(data.Product[2].PIShelfTime.replace(/T/g," "));
                $scope.ShelfTime = $scope.get_unix_time(data.Product[2].TimeNow);
                //计算两个时间差
                $scope.time= ($scope.ShelfTime-$scope.ShelfTime);
                $interval(function(){
                    $scope.time -=1000;
                },1000)
            });
        //获取轮播图数据
        $http.get("data/qianggou.json")
            .success(function(data){
                $scope.objs2=data.Product;
            });
        $scope.goBack=function goHistory(temp){
                //temp  正值就是向前走， 负数返回
            window.history.go(temp);
        };
        //给首页NAV添加事件
        $(".nav_ul").delegate("li","click",function(){
            $(this).css({"borderBottom":"0.05rem solid #2ebd59"}).siblings().css({"border":"none"}).find("a").css("color", "black");
            $(this).find("a").css("color","#2ebd59")
        });
        //seckill_main_div 的滑动事件
        function move(confin){
            var winW = document.documentElement.clientWidth || document.body.clientWidth;
            var element= document.querySelector(confin);
            //获得元素开始的左边距
            var num= parseFloat(getComputedStyle(element).marginLeft)

            var totalWidth=parseFloat($(element).css('width'))
            var oldTouch=null
            // 物体运动起来
            element.addEventListener("touchstart",function(e){
                oldTouch = e.targetTouches[0];
            });
            //判断边际值
                element.addEventListener("touchmove",function (e) {
                    var touch = e.targetTouches[0];
                    var width=touch.clientX - oldTouch.clientX;
                    var left = parseFloat(getComputedStyle(element).marginLeft);
                    oldTouch=touch;
                    if(left>=num&&width>0){
                        $(element).css('marginLeft',num+"px")
                        return
                    }

                    if(left<=-(num+totalWidth-winW-1)&&width<0){
                        $(element).css('marginLeft',-(num+totalWidth-winW)+'px')
                        return
                    };
                    var  newleft= left+width
                    $(element).css('marginLeft',newleft+'px')

            })

        }
        move(".seckill_main_div");
        //移动事件
         angular.element(".seckill_main2_ul").find("li").on("click",function(){
               //因为函数有初始值
              var left= $(this).offset().left-12;
              $(".li").css("transform","translateX("+left+"px)")
         })
        //日期字符串转时间戳
        $scope.get_unix_time = function (dateStr) {
            var newstr = dateStr.replace(/-/g,'/');
            var date =  new Date(newstr);
            var time_str = date.getTime().toString();
            return time_str.substr(0, 10);
        };
    }]);

})


