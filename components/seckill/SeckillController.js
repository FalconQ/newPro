/**
 * Created by My on 2016/10/10.
 */
define(["router","$css!./components/seckill/seckill.css"],function(app){
    return app.controller('SeckillController',['$scope','$http',function ($scope,$http) {
        //获取主题页面 数据
        $http.get("./data/qianggou.json")
            .success(function(data){
                $scope.objs=data.Product
                $scope.name=data.Product[2].PITitle
                $scope.a={'backgroundImage':'url('+data.Product[2].ImgUrl+')'}
            });
        //获取轮播图数据
        $http.get("data/qianggou.json")
            .success(function(data){
                $scope.objs2=data.Product
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
        //seckill_main_div 的滑动事件
        function move(confin){
            var winW = document.documentElement.clientWidth || document.body.clientWidth;
            var element= document.querySelector(confin);
            //获得元素开始的左边距
            var num= parseFloat(getComputedStyle(element).marginLeft)

            var totalWidth=parseFloat($(element).css('width'))
            console.log(totalWidth)
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

                    if(left<=-(num+totalWidth-winW)&&width<0){
                        $(element).css('marginLeft',-(num+totalWidth-winW)+'px')
                        console.log(num,totalWidth,winW)
                        console.log(num+totalWidth-winW)
                        return
                    };
                    var  newleft= left+width
                    $(element).css('marginLeft',newleft+'px')

            })







        };
        move(".seckill_main_div");
        //移动事件
         angular.element(".seckill_main2_ul").find("li").on("click",function(){
               var left= $(this).offset().left;
              console.log(left)
              $(".li").css("transform","translateX ("+left+"px)")
               console.log($(".li").css("transform"))
         })
    }]);

})


