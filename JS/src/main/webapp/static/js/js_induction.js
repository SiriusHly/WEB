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
function cancelAllTag() {
    document.getElementById('input1').removeAttribute('style');
    var l= document.getElementsByTagName("input");
    for(var i =0;i<l.length;i++){
        var j = l[i];
        j.removeAttribute('style');
    }
}

function openn(){
    alert("欢迎来到慕课网");
    //没有px
    window.open('https://www.imooc.com','_blank','width=600' ,'height=400');
}
