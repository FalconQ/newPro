/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/dataSelect/dataSelect.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('DataSelectController',['$scope','$state','dataFactory','$window',
        function ($scope,$state,dataFactory,$window) {
            $scope.growupNum=dataFactory.get().growupNum;
            $scope.childNum=dataFactory.get().childNum;
            console.log($scope.growupNum);
            //切换日历
            $scope.flag1 = true;
            $scope.flag2 = false;
            $scope.cancler = function(){
                $scope.flag1 = !$scope.flag1;
                $scope.flag2 = !$scope.flag2;
            }
            //旅行价钱
            $scope.price = dataFactory.get().price
            //对上页点击得到的日期加上颜色
            function clickChange(){
                var getDate = dataFactory.get().oriDate;
                if(getDate){
                    var mm = getDate.substr(5,2);
                    var day = getDate.substr(8);
                    var selectSpan = angular.element("td").find("span");
                    var length = angular.element("td").find("span").length;
                    if(parseInt(mm) == 11){
                        $scope.cancler();
                    }
                    for(var i=0;i<length;i++){
                        if(parseInt($(selectSpan).eq(i).text())==parseInt(day)){
                            $(selectSpan).eq(i).parent().parent().css("backgroundColor","#68d2c7");
                            $scope.oldItem=$(selectSpan).eq(i).parent().parent();
                            break;
                        }
                    }
                    $scope.startDate = dataFactory.get().oriDate.substr(5);
                    just();
                    canclerClick();
                }else{
                //在日历中点击改变日期颜色
                    canclerClick();
                }
            }
            //点击日历生成函数
            function canclerClick(){
                angular.element("td").find("span").parent().parent().on("click",function() {
                    $($scope.oldItem).css("backgroundColor", "#fff");
                    $(this).css("backgroundColor", "#68d2c7");
                    $scope.oldItem = $(this);
                    var month = 10;
                    var dd = $(this).find("span").text();
                    $scope.flag1 ? month : month = 11;
                    //记录选择的日期
                    dataFactory.set({"oriDate": "2016-" + month + "-" + dd});
                    $scope.startDate = dataFactory.get().oriDate.substr(5);
                    just()
                });
            }
            //判断有没有得到日期
            function just(){
                if($scope.startDate){
                    dataFactory.set({"growupNum":$scope.growupNum});
                    dataFactory.set({"childNum":$scope.childNum});
                    $(".riqi").css("display","block");
                    angular.element(".please").css("display","none");
                    $scope.growupNum = dataFactory.get().growupNum;
                    $scope.childNum = dataFactory.get().childNum;
                    if(parseInt($scope.growupNum)>0){
                        angular.element(".growupNum").css("display","block");
                    }
                    if(parseInt($scope.childNum)>0){
                        angular.element(".childNum").css("display","block");
                    }
                    if(parseInt($scope.childNum)>0||parseInt($scope.growupNum)>0){
                        angular.element(".next_shadow").css("display","none");
                    }
                }else{
                    angular.element(".next_shadow").css("display","block");
                }
            }
            clickChange();
            //加号绑定事件
            $scope.addNum = function(e){
                var cutrItem = $(event.target).prev()
                var cutrNum = parseInt(cutrItem.text())+1;
                //cutrItem.text(cutrNum);
                if(cutrItem.parent().attr("class")=="growup"){
                    dataFactory.set({"growupNum":cutrNum});
                    $scope.growupNum = dataFactory.get().growupNum;
                    if($scope.startDate){
                        $(".growupNum").css("display","block");
                    }
                }else{
                    dataFactory.set({"childNum":cutrNum});
                    if($scope.startDate){
                        $(".childNum").css("display","block");
                    }
                }
                $scope.growupNum = dataFactory.get().growupNum;
                $scope.childNum = dataFactory.get().childNum;
                var amount = parseInt($scope.growupNum)*parseFloat($scope.price)+
                    parseInt($scope.childNum)*parseFloat($scope.price)/2;
                dataFactory.set({"amount":amount});
                if(cutrNum>0){
                    $(event.target).prev().prev().css({"borderColor":"#23bdad","color":"#23bdad"});
                    cutrItem.css({"color":"black"});
                    if($scope.startDate){
                        angular.element(".next_shadow").css("display","none");
                    }
                }
            }
            //减号绑定事件
            $scope.minuNum = function(){
                var cutrItem = $(event.target).next();
                var cutrNum = parseInt(cutrItem.text());
                if(cutrItem.parent().attr("class")=="growup"){
                    if(cutrNum>=2){
                        cutrNum = cutrNum-1;
                        dataFactory.set({"growupNum":cutrNum});
                        $scope.growupNum = dataFactory.get().growupNum;
                        if(!$scope.childNum){
                            $scope.childNum=0;
<<<<<<< HEAD
                            dataFactory.set({"childNum":0});
=======
                            dataFactory.set({"childNum":0})
>>>>>>> c25174a446e9d5294950f3f19ca4592bf066e293
                        }
                        var amount = parseInt($scope.growupNum)*parseFloat($scope.price)+
                            parseInt($scope.childNum)*parseFloat($scope.price)/2;
                        dataFactory.set({"amount":amount});

                    }else{
                        if(cutrNum==0){
                            return;
                        }
                        dataFactory.set({"growupNum":0});
                        $scope.growupNum = dataFactory.get().growupNum;
                        $(".growupNum").css("display","none");
                        var amount = parseInt($scope.growupNum)*parseFloat($scope.price)+
                            parseInt($scope.childNum)*parseFloat($scope.price)/2;
                        dataFactory.set({"amount":amount});
                        $(event.target).css({"borderColor":"#e5e5e5","color":"#e5e5e5"});
                        cutrItem.css({"borderColor":"#e5e5e5"});
                        angular.element(".next_shadow").css("display","block");

                    }
                }else{
                    if(cutrNum>=2){
                        cutrNum = cutrNum-1;
                        dataFactory.set({"childNum":cutrNum});
                        $scope.childNum = dataFactory.get().childNum;
                        if(!$scope.growupNum){
                            $scope.growupNum=0;
                        }
                        var amount = parseInt($scope.growupNum)*parseFloat($scope.price)+
                            parseInt($scope.childNum)*parseFloat($scope.price)/2;
                        dataFactory.set({"amount":amount});
                    }else{
                        if(cutrNum==0){
                            return
                        }
                        dataFactory.set({"childNum":0});
                        $scope.childNum = dataFactory.get().childNum;
                        $(".childNum").css("display","none");
                        var amount = parseInt($scope.growupNum)*parseFloat($scope.price)+
                            parseInt($scope.childNum)*parseFloat($scope.price)/2;
                        dataFactory.set({"amount":amount});
                        $(event.target).css({"borderColor":"#e5e5e5","color":"#e5e5e5"});
                        cutrItem.css({"borderColor":"#e5e5e5"});
                        angular.element(".next_shadow").css("display","block");
                    }
                }
            }
            $scope.back = function(){
                $window.history.back();
            }


    }]);

})