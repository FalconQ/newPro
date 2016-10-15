/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/changePeople/changePeople.css','jquery'],function(app){
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller("ChangeController",["$scope","$rootScope", function ($scope,$rootScope) {
        //返回前一页
        $scope.clk = function() {
            history.back();
        }
        //方法一 获取保存在根作用域的信息
        //if( $rootScope.a){
        //    list = $rootScope.a;
        //    $scope.list =  JSON.parse(list);
        //}
        //方法二 获取
        if(window.localStorage){
            var list =  window.localStorage.getItem(length);
            $scope.list =  JSON.parse(list);
        }


        //创建存储的空对象
        //$scope.saveData = {
        //
        //}
        //保存按钮
        $scope.revamp = function () {
            //判断为空
            var name = $('.name').val();
            var number = $(".number").val();
            var card = $(".card").val();

            //对象存储方式
            var data = {
                saveData:{
                    name: $('.name').val(),
                    phone: $(".number").val(),
                    idCard:$(".card").val()
                }
            }

           //方法一的修改 将修改的信息存到全局根作用域
           // $rootScope.a=JSON.stringify(info);


            //方法二的修改
            if(window.localStorage){
                window.localStorage.clear();
                var length  = window.localStorage.length;
                window.localStorage.setItem(length,JSON.stringify(data));
            }


            if((name == "" && number == "" && card == "")){
                alert("不能为空");
            }else{
                history.back();
            }

        }

        //删除按钮
        $scope.delete = function(){
            //删除当前页面的数据
            $('.name').val(" ");
            $(".number").val(" ");
             $(".card").val(" ");

            //方法一 删除数据 清空根作用域的数据
            //delete $rootScope.a;

            //方法二 删除数据清空缓存
            window.localStorage.clear();

        }
    }])
})