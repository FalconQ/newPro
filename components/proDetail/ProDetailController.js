/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/ProDetail/ProDetail.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('ProDetailController',['$scope','dataFactory','Service','$interval','$state',
        function ($scope,dataFactory,Service,$interval,$state) {
        //返回上一页面
        $scope.return = function () {
            history.back();
        };
        $scope.click = function (date) {
            if(date){
                date = new Date().getFullYear() +'-'+ date ;
                var orderInfo = {
                    oriDate:date,
                    price:$scope.data.ActualPrice,
                    title:$scope.data.PITitle,
                    growupNum:0,
                    childNum:0,
                    orgCity:$scope.data.OrgCity
                }
            }else {
                var orderInfo = {
                    oriDate:'',
                    price:$scope.data.ActualPrice,
                    title:$scope.data.PITitle,
                    growupNum:0,
                    childNum:0,
                    orgCity:$scope.data.OrgCity
                }
            }
            dataFactory.set(orderInfo);
            $state.go('dataSelect');
        };
        //头部隐藏显示规则
        angular.element('.container_proDetail').scroll(function () {
            if(this.scrollTop <= 0){
                angular.element('header').css({'display':'none','opacity':0})
            }else if(this.scrollTop < 90 ){
                angular.element('header').css({'display':'block','opacity':0.5})
            }else{
                angular.element('header').css({'display':'block','opacity':1})
            }
        });

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
        .service('Service',['$http',function ($http) {
            this.get = function (url) {
                return $http.get(url)
            };
        }])

        .factory('dataFactory',function () {
            var myServices = {};
            var Object = {};

            var _setter = function (data) {
                for(var i in data){
                    Object[i] = data[i]
                }

            };
            var _getter = function () {
                return Object;
            };

            myServices.set = _setter;
            myServices.get = _getter;

            return myServices
        })
});