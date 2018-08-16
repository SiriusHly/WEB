
/*@author :hly
@github :github.com/SiriusHly
@blog :blog.csdn.net/Sirius_hly
@date :2018/8/14*/


var handleSlimScroll = function () {
    "use strict";
    $('#my-scrollbar,#article_edit').slimScroll({
        height: '100%'
    });
};

var handleSidebarMenu = function () {
    "use strict";
    $(".sidebar .nav > .has-sub > a").click(function () {
        /*查找下一个为sub-menu的同胞元素*/
        var e = $(this).next(".sub-menu");
        /*var t = ".sidebar .nav > li.has-sub > .sub-menu";
        $(t).not(e).slideUp(250);*/
        /*在显示和隐藏状态之间切换，0.25秒*/
        $(e).slideToggle(250)
    });

};

var App = function () {
    "use strict";
    return {
        init: function () {
            handleSidebarMenu();
            handleSlimScroll();
        }
    }
}()