

$(document).ready(function () {
    /*双加事件*/
    $('p').dblclick(function () {
        $('p.hide').hide();
    });

    $('button').click(function () {
        alert("警告");
    });

    $('p').mouseenter(function () {
        $('p.mouse').css('background-color','red');
    });

    $('p').mouseover(function () {
        $('p.mouse').css('background-color','yellow');
    });

    $('p').mouseleave(function () {
        $('p').css('background-color','');
    });

    $('#keypress').keypress(function () {
        $('#keypress').css('background-color','yellow');
    });

    $('#key_down_up').keydown(function () {
        $('#key_down_up').css('background-color','blue');
    });

    $('#key_down_up').keyup(function () {
        $('#key_down_up').css('background-color','');
    });

    $('form').submit(function () {
       alert('提交表单');
    });

    $('change').change(function () {
       alert('文本被修改');
    });

    $('#focus').focus(function () {
       $('span').css('display','inline').fadeOut(2000);
    });

    $('#focus').blur(function () {
        $('#focus').css('background-color','pink');
    });

    $('img').load(function () {
       alert('加载图片完成');
    });



});






/*
$(function () {
    $('p').click(function () {
        $(this).hide();
    });
});
*/

