/**
 * Created by caohefei on 2016/10/10.
 */
define(['router',"$css!./components/target/target.css"],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('targetController',['$scope','$http',function ($scope, $http) {
              // pag1获取右边内容的数据生成
              $http.get('./data/hot.json')
                     .success(function(data){
                         $scope.obj1=data.response.groupList[1].cellItem;
                     });
               //page2 获取右边数据内容生成
               $http.get("./data/zhoubian.json")
                   .success(function(data){
                       console.log(data.response.body.groupList[0].cellItem)
                       $scope.obj2=data.response.body.groupList[0].cellItem
                       $scope.nearby=data.response.body.groupList[1].cellItem
                       $scope.main_hotbuy=data.response.body.groupList[2].cellItem
                   })
              //获取左边tabar数据生成tabar
              $http.get('./data/tabdata.json')
                    .success(function(data){
                        $scope.obj3=data.categoryList;
                    });

              //开始页面配置
              $scope.page='./components/target/page_remen.html'
              //点击事件的设置
              var num=false
              $scope.set=function(e){
                         //数据假象 实现页面跳转
                        if(num){
                            $scope.page='./components/target/page_remen.html'
                        }else{
                            $scope.page='./components/target/page_zhoubian.html';
                        }

                       num=!num
                      $(event.target).css({"background":"white","color":"#6ad3c8"}).siblings().css({"background":"none","color":"black"})
              }
             }])


})
