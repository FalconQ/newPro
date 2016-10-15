/**
 * Created by caohefei on 2016/10/11.
 */
define(['router',"$css!./components/C_order/C_order.css"],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('C_orderController',['$scope','dataFactory','$state',function ($scope,dataFactory,$state) {

        $scope.growupPrice = dataFactory.get().price;
        $scope.childPrice = parseInt(dataFactory.get().price)/2;
        //添加意外险和取订单的默认选择，将金额放入service
        $scope.selected = true;
       // dataFactory.set({"accdidentMoney":"48"});
        dataFactory.set({"amount":parseFloat(dataFactory.get().amount)+68});
        $scope.amount = dataFactory.get().amount;
        //得到上页的成人数和儿童数
       $scope.growupNum = dataFactory.get().growupNum;
       $scope.childNum = dataFactory.get().childNum;
        $(".growup").find(".cont").text($scope.growupNum);
        $(".child").find(".cont").text($scope.childNum);
        if(parseInt($scope.childNum)){
            $(".child").parent().parent().css("display","block");
        }else{
            $scope.childNum=0;
        }
        //减号事件，减少成人数和儿童数
        $scope.minuCount=function (){
            var cutrItem = $(event.target).next();
            var cutrNum = parseInt(cutrItem.text());
            if(cutrItem.parent().attr("class")=="growup"){
                if(cutrNum>=2){
                    cutrNum = cutrNum-1;
                    cutrItem.text(cutrNum);
                    dataFactory.set({"growupNum":cutrNum});
                    var amount = parseFloat(dataFactory.get().amount)-parseFloat($scope.growupPrice);
                    dataFactory.set({"amount":amount});
                    $scope.amount = dataFactory.get().amount;
                }else{
                    dataFactory.set({"growupNum":0});
                    cutrItem.text(0);
                    var amount = parseFloat(dataFactory.get().amount)-parseFloat($scope.growupPrice);
                    dataFactory.set({"amount":amount});
                    $scope.amount = dataFactory.get().amount;
                    $(event.target).css({"backgroundImage":"url('./components/C_order/img/numberbtn_minus_disable.png')"
                        ,"backgroundSize":"0.68rem 0.65rem"});
                    cutrItem.css({"borderColor":"#e5e5e5"});
                    $scope.cancelSelect();
                    return;
                }
            }else{
                if(cutrNum>=2){
                    cutrNum = cutrNum-1
                    dataFactory.set({"childNum":cutrNum});
                    cutrItem.text(cutrNum);
                    var amount = parseFloat(dataFactory.get().amount)-parseFloat($scope.childPrice);
                    dataFactory.set({"amount":amount});
                    $scope.amount = dataFactory.get().amount;
                }else{
                    dataFactory.set({"childNum":0});
                    cutrItem.text(0);
                    dataFactory.set({"childNum":0});
                    var amount = parseFloat(dataFactory.get().amount)-parseFloat($scope.childPrice);
                    dataFactory.set({"amount":amount});
                    $scope.amount = dataFactory.get().amount;
                    $(event.target).css({"backgroundImage":"url('./components/C_order/img/numberbtn_minus_disable.png')"
                        ,"backgroundSize":"0.68rem 0.65rem"});
                    cutrItem.css({"borderColor":"#e5e5e5"});
                    $scope.cancelSelect()
                    return;

                }
            }
        }
        //加号事件，添加成人数和儿童数
        $scope.addCount=function (){
            var cutrItem = $(event.target).prev()
            var cutrNum = parseInt(cutrItem.text())+1;
            cutrItem.text(cutrNum);
            if(cutrItem.parent().attr("class")=="growup"){
                dataFactory.set({"growupNum":cutrNum});
                $(".growupNum").css("display","block");
                var amount = parseFloat(dataFactory.get().amount)+parseFloat($scope.growupPrice);

            }else{
                dataFactory.set({"childNum":cutrNum});
                $(".childNum").css("display","block");
                var amount = parseFloat(dataFactory.get().amount)+parseFloat($scope.childPrice);
            }
            dataFactory.set({"amount":amount});
            $scope.amount = dataFactory.get().amount;
            if(cutrNum>0){
                if($scope.changeText()){
                    $(".sub").css("backgroundColor","red");
                }
                $(event.target).prev().prev().css({"backgroundImage":"url('./components/C_order/img/add.png')"
                    ,"backgroundSize":"0.5rem 0.5rem"});
                cutrItem.css({"color":"black"});
            }
        }
        $scope.cancelSelect=function (){
            if(parseFloat($scope.amount)<=68){
                alert("总人数不能少于1人！");
                $(".sub").css("background","#ffbab5");
                $scope.amount = dataFactory.get().amount;
            }
        }
        //选项框的选中和取消选中
        $scope.show = function(){
            if($scope.selected){
                $(event.target).css("backgroundColor","#e4e4e4");
                $scope.selected = false;
                if($(event.target).next().attr("class")=="accident"){
                    dataFactory.set({"accdidentMoney":"48"});
                    dataFactory.set({"amount":parseInt(dataFactory.get().amount-48)});
                    $scope.amount = dataFactory.get().amount;
                }else{
                    dataFactory.set({"cancleMoney":"20"});
                    dataFactory.set({"amount":parseInt(dataFactory.get().amount-20)});
                    $scope.amount = dataFactory.get().amount;
                }
            }else{
                $scope.selected=true;
                $(event.target).css("backgroundColor","#23beae");
                if($(event.target).next().attr("class")=="accident"){
                    dataFactory.set({"accdidentMoney":"48"});
                    dataFactory.set({"amount":parseInt(dataFactory.get().amount+48)});
                    $scope.amount = dataFactory.get().amount;
                }else{
                    dataFactory.set({"cancleMoney":"20"});
                    dataFactory.set({"amount":parseInt(dataFactory.get().amount+20)});
                    $scope.amount = dataFactory.get().amount;
                }
            }

        }

        //查看联系人、电话、电子邮有没有填写
        $scope.changeText = function(){
            if($scope.linkMan&&$scope.phoneNum&&$scope.email){
                if((parseInt(dataFactory.get().growupNum)+parseInt(dataFactory.get().childNum))>0){
                    $(".sub").css("backgroundColor","red");
                    return true;
                }
                return false;
            }else {
                $(".sub").css("backgroundColor", "#ffbab5");
                return false;
            }
        }
        //提交订单事件
        $scope.submit = function (){
            dataFactory.set({"linkMan":$scope.linkMan});
            dataFactory.set({"phoneNum":$scope.phoneNum});
            dataFactory.set({"email":$scope.email});
            dataFactory.set({'isPay':0});
            dataFactory.set({'orderId':new Date()});
            if(!dataFactory.get().linkMan){
                alert("请填写姓名");
                $(".sub").css("background","#ffbab5");
            }else if(!dataFactory.get().phoneNum){
                alert("请填写手机号");
                $(".sub").css("background","#ffbab5");
            }else if(!dataFactory.get().email){
                alert("请填写邮箱");
                $(".sub").css("background","#ffbab5");
            }else if(!((parseInt(dataFactory.get().growupNum)+parseInt(dataFactory.get().childNum))>1)){
                alert("总人数不能少于1人！");
                $(".sub").css("background","#ffbab5");
            }else{
                $(".sub").css("background","red");
                $state.go("submitSuccess");
            }
        }
    }]);
})