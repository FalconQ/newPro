/**
 * Created by My on 2016/10/11.
 */
define(['router','$css!./components/dataSelect/dataSelect.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('DataSelectController',['$scope','$state',function ($scope,$state) {
        //切换日历
            $scope.flag1 = true;
            $scope.flag2 = false;
            $scope.cancler = function(){
                $scope.flag1 = !$scope.flag1;
                $scope.flag2 = !$scope.flag2;
            }
        //改变选中日期颜色
        var oldItem;
        angular.element("td").find("span").parent().parent().on("click",function(){
            $(oldItem).css("backgroundColor","#fff");
            $(this).css("backgroundColor","#68d2c7");
            oldItem = $(this);
        });
        $scope.addNum = function(e){
            var cutrItem = $(event.target).prev()
            var cutrNum = parseInt(cutrItem.text())+1;
            cutrItem.text(cutrNum);
            if(cutrNum>0){
                $(event.target).prev().prev().css({"borderColor":"#23bdad","color":"#23bdad"});
                cutrItem.css({"color":"black"});
            }
        }
        $scope.minuNum = function(){
           // if(){}
            var cutrItem = $(event.target).next();
            var cutrNum = parseInt(cutrItem.text())-1;
            cutrItem.text(cutrNum);
            if(cutrNum==0){
                $(event.target).css({"borderColor":"#e5e5e5","color":"#e5e5e5"});
                cutrItem.css({"borderColor":"#e5e5e5","color":"#e5e5e5"});

            }
           
        }
       /* angular.element(".add").on("click",function(){
            console.log($(this));
            $(this).prev().text(parseInt($(this).prev().text())+1);
            if(parseInt($(this).prev().text())>0){
                $(this).prev().css("disabled","disabled");
                $(this).prev().prev().css({"borderColor":"#23bdad","color":"#23bdad"})
            }
        })
        angular.element(".minu").on("click",function(){
            $(this).next().text(parseInt($(this).next().text())-1);
            if(parseInt($(this).next().text())==0){
                $(this).css({"borderColor":"#e5e5e5","color":"#e5e5e5"});
            }
        })*/
    }]);

})