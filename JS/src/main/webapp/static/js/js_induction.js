function openWindow() {
    var con = confirm("打开网址");
    if (con == true) {
        var pro = prompt("输入网址", "http：//www.imooc.com/");
        if (pro != null)
            window.open(pro, 'width=400', 'height=500', 'menubar=no', 'toolbar = no');
        else
            pro.close();
    }
    else {
        con.close();
    }
}