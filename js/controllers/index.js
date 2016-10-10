/**
 * Created by My on 2016/10/9.
 */
define(['jquery'],function ($) {
    function index() {
        var winW = document.documentElement.clientWidth || document.body.clientWidth;
        document.documentElement.style.fontSize = winW / 7.5 + "px";
        window.onresize = function () {
            var winW = document.documentElement.clientWidth || document.body.clientWidth;
            document.documentElement.style.fontSize = winW / 7.5 + "px";
        };
    }
    return {
        index:index
    }
});