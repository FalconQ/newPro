/**
 * Created by caohefei on 2016/10/10.
 */
/**
 * Created by caohefei on 2016/10/10.
 */
define(['router',"$css!./components/targat_position/targat_position.css"],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
return app.controller('targat_positionController',['$scope','$http',function ($scope,$http) {
           $http.get('./data/beijing.json')
                .success(function(data){
                    //console.log(data.response.resultList.record)
                   $scope.objs_1=data.response.resultList.record;
                   $scope.CityName=data.response.ipLoc.CityName;
                   //给NAV绑定事件
                   angular.element(".modl_PositionNav").find("li").on("click",function(){
                       move($(this),".modl_PositionNav ul");
                       var elem= $(this);
                       var num= $(this).index()
                       var  eleSpan=$('.hideDiv span ').eq(num)
                       spanBrackgc(eleSpan)
                   })
               });
         //给img添加事件
            angular.element('.modl_PositionNav img').on("click",function(){
                var div=$(".hideDiv")
                if(this.attr){
                    this.style.transform="rotate(0deg)"
                    div.hide(500)
                }else{
                    this.style.transform="rotate(180deg)"
                    div.show(500)
                }
                this.attr=!this.attr
            });
         // 给相应的的span添加功能
            angular.element(".hideDiv").find("span").on("click",function(){

                 var elem= $(this);
                 var num= $(this).index()
                 var  elemLi=$('.modl_PositionNav ul li').eq(num)
                 move(elemLi,".modl_PositionNav ul");
                 spanBrackgc(elem)
            })

        }])
          //   截取价格的字符串
         .filter("tr",function(){
                    return function(ele){
                           var  num=ele.length
                        return   ele.substring(0,num-2)
                    }
           })
         // 根据等级循环出多个a
         .filter("grade",function(){
             return function(ele){
                 var str="";
                  var  length=Number(ele)
                  for(var i =0; i<length; i++){
                       str+="A"
                  }
                 return str
             }
         })
         //将价格按1.5倍 获得
         .filter("trL",function(){
            return function(ele){
                var  num=ele.length
                 var prc=Number(ele.substring(0,num-2))
                return  prc*1.5
            }
        })
})
//移动模块
function move(juqeryElem,partentId){
    ulEle=$(partentId);
    //屏幕的宽度获得
    var winW = document.documentElement.clientWidth || document.body.clientWidth;
    juqeryElem.css({"borderBottom":"0.05rem solid #23beae","color":" #23beae"});
    juqeryElem.siblings().css({"borderBottom":"none","color":"black"});
    //获得该li 的宽度 包括有  inner padding
    var  width=  juqeryElem.outerWidth();
    //获得相对于父亲的位置 父级必须定位
    var father_positon=juqeryElem.position().left
    //当大于屏幕的一半时启用
    if(juqeryElem.is(".modl_PositionNav ul li:last-child")){
        var ele=$(".modl_PositionNav ul li:nth-last-of-type(2)")
        move(ele,partentId);
        juqeryElem.css({"borderBottom":"0.05rem solid #23beae","color":" #23beae"});
        juqeryElem.siblings().css({"borderBottom":"none","color":"black"});
    }else if(father_positon>winW/2){
        ulEle.css("marginLeft",-father_positon+winW/2-width/2+"px");
    }else if(father_positon<winW/2){
        ulEle.css("marginLeft","0px");
    }

}
//隐藏的span 背景改变
function spanBrackgc(juqeryElem){
    juqeryElem.css("background",'#23beae').siblings().css("background",'rgba(241,240,223,0.7)')

}