/**
 * Created by My on 2016/10/10.
 */
define(['router','$css!./components/orderBack/orderBack.css'],function (app) {
    // angular会自动根据controller函数的参数名，导入相应的服务
    return app.controller('BackController',['$scope','$state',function ($scope,$state) {
        $scope.return = function () {
            history.back();
        };
        
        $scope.focus = function (e) {
            if(e.currentTarget.value){
                e.currentTarget.value = "";
            }
        };
        $scope.blur = function (e) {
            if(!e.currentTarget.value){
                e.currentTarget.value = "可以申请修改订单的团期、出游人信息等或申请退款，至少写够3个字哦~";
            }
        };
        $scope.submit = function () {

            $state.go('serviceOrder');
        }
        $.post('http://tcmobileapi.17usoft.com/destination/destinationhandler.ashx',{
            "request" : {
                "header" : {
                    "digitalSign" : "6ff2fb69c016c26f4c6d2030b5cff490",
                    "encryptEffort" : "0",
                    "reqTime" : "1476354044666",
                    "serviceName" : "getdestinationlistnew",
                    "version" : "20110303090115",
                    "accountID" : "5ee7b429-b8c6-400f-8b87-3c384c4ea68a"
                },
                "body" : {
                    "categoryId" : "18",
                    "startCity" : "53",
                    "clientInfo" : {
                        "refId" : "5866741",
                        "mac" : "f22389f7abc0bca3cb52f9e48fa3827f",
                        "device" : "7D63F6E4-5211-474F-ADEA-563FA3FD2EF6|320*480|iPhone4,1",
                        "networkType" : "wifi",
                        "versionNumber" : "8.1.7",
                        "versionType" : "iPhone",
                        "extend" : "2^com.tongcheng.iphone,4^7.1.2,5^iPhone4_1",
                        "tag" : "|^^53^1^53^0^|",
                        "clientId" : "65fd18016f45a9a468dbfe5c88177702610fbdea0100",
                        "clientIp" : "192.168.23.3",
                        "systemCode" : "tc",
                        "deviceId" : "7D63F6E4-5211-474F-ADEA-563FA3FD2EF6"
                    }
                }
            }
        })
    }])
});