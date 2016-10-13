/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/dataSelect/dataSelect.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('DataSelectController',['$scope','$state','dataFactory',
        function ($scope,$state,dataFactory) {
        //切换日历
            $scope.flag1 = true;
            $scope.flag2 = false;
            $scope.cancler = function(){
                console.log("123")
                $scope.flag1 = !$scope.flag1;
                $scope.flag2 = !$scope.flag2;
            }
            //对上页点击得到的日期加上颜色
            function clickChange(){
                console.log(dataFactory.get())
                var getDate = dataFactory.get().oriDate;
                console.log(getDate);
                var mm = getDate.substr(5,2);
                console.log(mm);
                var day = getDate.substr(8);
                var selectSpan = angular.element("td").find("span");
                var length = angular.element("td").find("span").length;
                if(parseInt(mm) == 11){
                    console.log(true);
                    $scope.flag1 = false;
                    $scope.flag2 = true;
                    $scope.cancler();
                }

                for(var i=0;i<length;i++){
                   if(parseInt($(selectSpan).eq(i).text())==parseInt(day)){
                       $(selectSpan).eq(i).parent().parent().css("backgroundColor","#68d2c7");
                       $scope.oldItem=$(selectSpan).eq(i).parent().parent();
                       break;
                   }
                }
                //在日历中点击改变日期颜色
                angular.element("td").find("span").parent().parent().on("click",function(){
                    $($scope.oldItem).css("backgroundColor","#fff");
                    $(this).css("backgroundColor","#68d2c7");
                    $scope.oldItem = $(this);
                    var month=10;
                    var dd = $(this).find("span").text();
                    $scope.flag1?month:month=11;
                    console.log(month);
                    console.log(dd);
                    //记录选择的日期
                    dataFactory.set("2016-"+month+"-"+dd);
                    console.log(dataFactory.get())
                });
            }
            clickChange();




            //加号绑定事件
        $scope.addNum = function(e){
            var cutrItem = $(event.target).prev()
            var cutrNum = parseInt(cutrItem.text())+1;
            cutrItem.text(cutrNum);
            if(cutrNum>0){
                $(event.target).prev().prev().css({"borderColor":"#23bdad","color":"#23bdad"});
                cutrItem.css({"color":"black"});
            }
        }
            //减号绑定事件
        $scope.minuNum = function(){
           // if(){}
            console.log(dataFactory.get());
            var cutrItem = $(event.target).next();
            var cutrNum = parseInt(cutrItem.text())-1;
            cutrItem.text(cutrNum);
            if(cutrNum==0){
                $(event.target).css({"borderColor":"#e5e5e5","color":"#e5e5e5"});
                cutrItem.css({"borderColor":"#e5e5e5","color":"#e5e5e5"});

            }
        }

    }]);

})