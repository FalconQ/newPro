/**
 * Created by My on 2016/10/9.
 */
define(['jquery','router'],function ($) {
    function index() {
        var winW = document.documentElement.clientWidth || document.body.clientWidth;
        document.documentElement.style.fontSize = winW / 7.5 + "px";
        window.onresize = function () {
            var winW = document.documentElement.clientWidth || document.body.clientWidth;
            document.documentElement.style.fontSize = winW / 7.5 + "px";
        };
        $("#tabBar").on("click","li",function () {
            $("#tabBar").find("div").attr("class","icon");
            $(this).find("div").attr("class","icon1");
        });
        setTimeout(function () {
            $('#boot').fadeOut();
        },1000);
    }
    return {
        index:index
    }
});



