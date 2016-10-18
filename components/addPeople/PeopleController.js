/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/addPeople/addPeople.css'],function(app){
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller("PeopleController",["$scope","$rootScope",function ($scope,$rootScope) {
        $scope.clk = function () {
            history.back();
        }

        //创建存储的空对象
        $scope.messageData = {

        }

        //获取用户信息
        $scope.getData = function(){
            //判断为空
            var name = $('.name');
            var number = $(".number");
            var card = $(".card");
            //数组存储方法
            //$scope.messageData.push({name:$scope.name,phone:$scope.phone,idCard: $scope.idCard})
            //$rootScope.a=JS
            //
            // ON.stringify($scope.messageData);

            //对象存储方式
            var data = {
                messageData:{
                    name: $scope.name,
                    phone: $scope.phone,
                    idCard: $scope.idCard
                }
            }


            //方法一：  存到根作用域
            //$rootScope.a=JSON.stringify(data);

            //方法二
            //localStorage存储
            if(window.localStorage){
                window.localStorage.clear();
                var length  = window.localStorage.length;
                window.localStorage.setItem(length,JSON.stringify(data));
            }

            //方法三
            //创建全局对象方法
            //messageData={
            //    name: $scope.name,
            //    telephoneNum: $scope.phone,
            //    idCard:$scope.idCard
            //}
            //$scope.messageData ={
            //    name: $scope.name,
            //    telephoneNum: $scope.phone,
            //    idCard:$scope.idCard
            //}



            //判断输入的值不能为空值不能为空
            if(!(name.val() == "" || number.val() == "" || card.val() == "") ){

                /*if( uesrName() && ID() &&num()){
                    history.back();
                }*/
                history.back();
            }else{
                alert("不能为空");
            }

            //判断输入的用户名
             function uesrName() {
                var reg =/^[a-zA-z][a-zA-Z0-9_]{2,9}$/;
                if(reg.test(name.val())){
                   return true;
                }else{
                    alert("请输入合法用户名:3-10位的字母下划线和数字组成");
                    $('.name').val("");
                    $(".number").val("");
                    $(".card").val("");
                    return false;
                }
            }

            //身份证好验证
            function ID(){
                var reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
                if(reg.test(card.val())){
                    return true;
                }else{
                    alert("请输入15-18位身份证号");
                }
            }

            //手机号码验证
            function num(){
                var reg  = /^1[3|4|5|8][0-9]\d{4,8}$/;
                if(reg.test(number.val())){
                    return true;
                }else{
                    alert("请输入11为手机号码");
                }
            }
        }


    }])
    //app.directive("myDir",function(){
    //    return {
    //        restrict: 'ECMA',
    //        temlpate: 'inner.html',
    //        controller: ["scope", function ($scope) {
    //
    //        }]
    //    }
    //})
    //app.factory("publishData", function () {
    //   var server = {};
    //    var info = {};
    //    service.setInfo = function (key) {
    //
    //    }
    //    server.getInfo = function(){
    //        return info;
    //    }
    //
    //    return server;
    //})
})