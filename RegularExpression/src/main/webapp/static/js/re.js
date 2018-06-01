var str = ['hly1.com', 'hly2.com', 'hly18.com'];

/*\w匹配字母数字下划线或汉字，\d匹配数字,^和$匹配字符串开始和结束,\s匹配空白字符，.匹配除换行外的任意字符*/
/*开头结尾需要有/*/
/*表示匹配多个字符*/
var patt1 = /hly(\w)*.com/;
/*?表示匹配0-1个字符*/
var patt2 = /hly(\w)?.com/;
for (var i in str)
    document.write("*匹配多个字符:" + str[i].match(patt1) + '<br/>');

for (var i in str)
    document.write("?匹配0-1个字符:" + str[i].match(patt2) + '<br/>');

var str_num = ['hly123com', 'hl123com', 'hlyco', 'hlyccccom'];
/*$表示以com结尾,^表示以什么开始，+表示前面的字符至少出现一次*/
var re_num = /^hly[0-9]+com$/;
var re_num_end = /\w*com$/;
/*加括号就会输出都好里面的内容，以逗号隔开*/
var re_add = /hly+(\w)*/;

for (var i in str_num)
    document.write("^表示以什么开头:" + str_num[i].match(re_num) + '<br/>');

for (var i in str_num)
    document.write("+表示前面的字符至少出现一次：" + str_num[i].match(re_add) + '<br/>');

for (var i in str_num)
    document.write("$表示以什么结尾：" + str_num[i].match(re_num_end) + '<br/>');


/*
document.write(str_num.match(re_num2)+'<br/>');*/
