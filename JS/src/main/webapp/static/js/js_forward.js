//二维数组
//方法1
// var column = 3; //定义3行
// var line = 6; //定义6列
// var myarr[column][line] = new Array();
// for (var i = 0; i < column; i++){
//     for (var j = 0; j < line; j++){
//         myarr[i][j] = i * j;
//         document.write(marry[i][j]);
//     }
//     document.write("<br>");
// }

//方法二
var column = 3; //定义3行
var line = 6; //定义6列
var myarr = new Array();
for (var i = 0; i < column; i++){
    myarr[i] = new Array();
    for (var j = 0; j < line; j++){
        myarr[i][j] = i * j;
        document.write(myarr[i][j] + "&nbsp");
    }
    document.write("<br>");
}