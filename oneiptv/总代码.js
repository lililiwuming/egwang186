######远程订阅写入本地1
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='一个直播远程索引.txt';
var 记录="";
if(getVar("rurl")!='null'&&getVar("rurl").indexOf(",http")>1){
记录=getVar("rurl").match(/.+?,http.+/g);
if(_.read(filename).length>1){
var 旧记录=_.read(filename).match(/.+?,http.+/g);
var 新记录=记录.concat(旧记录);
}else{
var 新记录=记录;
}
_.write(新记录.join("\n"),filename);
"保存成功!";
}else{
"请输入正确格式(支持批量):名称,地址";
}
######文本写入本地2
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var indexname='一个直播本地索引.txt';
var 记录=[];
if(getVar("text")!='null'&&getVar("text").indexOf(",")>1&&getVar("sort")!='null'&&getVar("sort").length>1){
var filename=getVar("sort")+'.txt';
记录=getVar("text").match(/.+?,http.+/g);
if(_.read(filename).length>1){
var 旧记录=_.read(filename).match(/.+?,http.+/g);
var 新记录=记录.concat(旧记录);
}else{
var 新记录=记录;
}
var a=getVar("sort")+","+getVar("sort")+'.txt';
var item=[];item.push(a);
if(_.read(indexname).length>1){
var 旧索引=_.read(indexname).match(/.+?,.+/g);
新索引=item.concat(旧索引.filter(u=>u!=a));
_.write(新索引.join("\n"),indexname);
}else{
_.write(item.join("\n"),indexname);
}
_.write(新记录.join("\n"),filename);
"保存成功!";
}else{
    "请输入正确格式(支持批量):名称,地址";
}
######读取本地订阅3
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='一个直播本地索引.txt';
_.read(filename);
######读取本地文本4
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='一个直播远程索引.txt';
_.read(filename);
######选集地址5

######免嗅探6