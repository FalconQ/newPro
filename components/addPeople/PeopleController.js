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
            name: '',
            telephoneNum: '',
            idCard:''
        }
        //添加函数
        $scope.add = function(){
            window.localStorage.clear();
            var data = {
                messageData:{
                    name: $scope.name,
                    phone: $scope.phone,
                    idCard: $scope.idCard
                }
            }
            console.log($scope.name);
            console.log(data);
            if(localStorage){
                if($scope.name == ""){
                   return false;
                }else{
                    var length = window.localStorage.length;
                    window.localStorage.setItem(length,JSON.stringify(data.messageData))
                }
            }else{
                alert("您的浏览器不支持");
            }


            //$rootScope.message.push({name:$scope.userName,telephoneNum:$scope.telephone,ID:$scope.idCard})
            //$rootScope.userName = "";
            //$rootScope.telephone = "";
            //$rootScope.idCard = "";
            //console.log($scope.message[i]);
            //console.log($scope.message[i].name);
        }
    }])
     app.service('MyService', function(){
        var name;
        var phone;
        var idCard;
        this.setName = function(name){
            name = name;
        };
        this.getName = function(){
            return name;
        };
        this.setPhone = function(telephoneNum){
            phone = phone;
        };
        this.getPhone = function(){
            return phone;
        };
        this.setIdCard = function(idCard){
            idCard = idCard;
        };
        this.getIdCard= function(){
            return idCard;
        };
    });

})