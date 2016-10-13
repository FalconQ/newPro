/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/addPeople/addPeople.css'],function(app){
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller("PeopleController",["$scope","$rootScope", function ($scope,$rootScope) {
        $scope.clk = function () {
            history.back();
        }
        //创建存储的空对象
        $scope.messageData = {

        }

        //数组存储方法
        //$scope.messageData = [
        //
        //]

        //获取用户信息
        $scope.getData = function(){
            //判断为空
            var name = $('.name').val();
            var number = $(".number").val();
            var card = $(".card").val();
            //数组存储方法
            //$scope.messageData.push({name:$scope.name,phone:$scope.phone,idCard: $scope.idCard})
            //$rootScope.a=JSON.stringify($scope.messageData);

            //对象存储方式
            var data = {
                messageData:{
                    name: $scope.name,
                    phone: $scope.phone,
                    idCard: $scope.idCard
                }
            }


            $rootScope.a=JSON.stringify(data);


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
            //判断值不能为空
            if((name == "" && number == "" && card == "")){
               alert("不能为空");
            }else{
                history.back();
            }

        }


    }])
})