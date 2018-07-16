


    var str = ['hly1.com', 'hly2.com', 'hly18.com'];

    /*\w匹配字母数字下划线或汉字(一个)，\d匹配数字,^和$匹配字符串开始和结束,\s匹配空白字符，.匹配除换行外的任意字符，\b匹配单词的开始或结束*/
    /*[^\\]除了\外的其他字符*/
    /*开头结尾需要有/*/
    /*表示匹配多个字符*/
    /*.表示匹配所有字符,\\.表示转义，只匹配一个.,//?同理*/
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

    /*https://blog.csdn.net/jiegeng2233/article/details/53189138：JS特殊符号*/
    var re_li = '<p>asdasd</p>';
    /*.匹配除换行外的任意字符*/
    /*匹配所有内容*/
    var patt_li1 = /<(.*)>/;
    /*只匹配标签*/
    var patt_li2 = /<.*?>/;
    /*只匹配第一个标签*/
    var patt_li3 = /<(\w)+?>/;

    document.write("标签：" + re_li.match(patt_li1) + '<br/>');
    document.write("标签：" + re_li.match(patt_li2) + '<br/>');
    document.write("标签：" + re_li.match(patt_li3) + '<br/>');

    var url = '<a href="asd" title="1213123">qq区块链ppp</a>';
    var re_url = /\bhref="([^"]*)"[^>]*>.*区块链.*/;
//var t=/<a\b[^>]+\bhref="([^"]*)"[^>]*>.*区块链.*</a>/;

    document.write("url:" + url.match(re_url));

    /*https://www.oschina.net/code/snippet_76860_5964:匹配img标签*/
    /*https://zhidao.baidu.com/question/1450431589465139220.html*/
    /*<a\b[^>]+\bhref="([^"]*)"[^>]*>.*区块链.*</a>*/

    /**/

