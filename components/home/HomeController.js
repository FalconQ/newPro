/**
 * Created by qiusheng on 2016/10/9.
 */
define(['router','$css!./components/home/home.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('HomeController',['$scope','Service','$interval',function ($scope,Service,$interval) {
        Service.get('./data/detail.json').success(function (res) {
            $scope.data = res.Product[0];
            //倒计时处理
            $scope.ShelfTime = $scope.get_unix_time($scope.data.PIShelfTime.replace(/T/g," "));
            $scope.ShelfTime = $scope.get_unix_time($scope.data.TimeNow);
            //计算两个时间差
            $scope.time= ($scope.ShelfTime-$scope.ShelfTime);
            $interval(function(){
                $scope.time -=1000;
            },1000)
        });
        //日期字符串转时间戳
        $scope.get_unix_time = function (dateStr) {
            var newstr = dateStr.replace(/-/g,'/');
            var date =  new Date(newstr);
            var time_str = date.getTime().toString();
            return time_str.substr(0, 10);
        };

    }])
        .directive('homeSlider',function () {
            return {
                restrict:'E',
                templateUrl: './components/home/slider.html',
                replace: true,
                controller: function (Service,$scope) {
                    Service.get('./data/slider.json').success(function (res){
                        $scope.data = res;
                        var mySwiper = new Swiper('.slider', {
                            autoplay: 2000,//可选选项，自动滑动
                            loop:true,
                            pagination : '.swiper-pagination',
                        })
                    })

                }
            }
        })
        .directive('timeLimit',function () {
            return {
                restrict: 'E',
                templateUrl: './components/home/time_limit.html',
                replace: true,
                controller: function () {
                    
                }
            }
        })
});





