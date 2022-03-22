######远程订阅写入本地1
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='一个直播远程索引.txt';
var 记录="";
if(getVar("rurl")!='null'&&getVar("rurl").indexOf(",http")>1){
记录=getVar("rurl").match(/.+?,http.+/g);
if(_.read(filename)){
var 旧记录=_.read(filename).match(/.+?,http.+/g);
var 新记录=记录.concat(旧记录);
}else{
var 新记录=记录;
}
_.write(新记录.join("\n"),filename);
_.read(filename);
}else{
"请输入正确格式(支持批量):名称,地址";
}
######源文本写入本地2
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var indexname='一个直播本地索引.txt';
if(getVar("text")!='null'&&getVar("text").indexOf(",")>1&&getVar("sort")!='null'&&getVar("sort").length>1){
var filename=getVar("sort")+'.txt';
var 记录=getVar("text").match(/.+?,.+/g);
if(_.read(filename)){
var 旧记录=_.read(filename).match(/.+?,.+/g);
var 新记录=记录.concat(旧记录);
}else{
var 新记录=记录;
}
var a=getVar("sort")+","+getVar("sort")+'.txt';
var item=[];item.push(a);
if(_.read(indexname)){
var 旧索引=_.read(indexname).match(/.+?,.+/g);
var 新索引=item.concat(旧索引.filter(u=>u!=a));
_.write(新索引.join("\n"),indexname);
}else{
_.write(item.join("\n"),indexname);
}
_.write(新记录.join("\n"),filename);
_.read(indexname)+_.read(filename);
}else{
"请输入正确格式(支持批量):名称,地址";
}
######读取远程订阅3
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='一个直播远程索引.txt';
var code=_.read(filename).match(/.+?,.+/g);
var items=[];
for(var i in code){
var title=code[i].split(",")[0];
var url="q:自定义播放器?url=远程$$"+code[i].split(",")[1];
items.push({title:title,url:url});
}
JSON.stringify(items);
######读取本地文本4
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='一个直播本地索引.txt';
var code=_.read(filename).match(/.+?,.+/g);
var items=[];
for(var i in code){
var title=code[i].split(",")[0];
var url="q:自定义播放器?url=本地$$"+code[i].split(",")[1];
items.push({title:title,url:url});
}
JSON.stringify(items);
######选集地址5
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var type=getVar("url").split("$$")[0];
var u=getVar("url").split("$$")[1];
if(type=="远程"){
    var code=getHttp(u);
}else if(type=="本地"){
    var code=_.read(u);
}
function 选集列表(){
    var res={};var items=[];
    for(var i=0;i<分类.length;i++){
        var 分类CODE=分类[i];
        var 列表=e2Arr(分类CODE,列表规则).filter(Boolean);
        if(线路){
        var 标题=e2Rex(线路[i],标题规则);
        }else{
        var 标题=e2Rex(分类CODE,标题规则);
        }
        var LIST=[];
        for(var j=0;j<列表.length;j++){
            var 选集=e2Rex(列表[j],选集规则);
            var 选集地址=e2Rex(列表[j],选集地址规则);
            LIST.push({title:选集,url:选集地址});
        }
    var play_={};
    play_.title=标题;
    play_.list=LIST;
    items.push(play_);
    }
    res.data=items;
    return JSON.stringify(res);
}
if(code.indexOf("#genre#")!=-1){
    var 分类=code.split(/.+?#genre#.*/).filter(item=>item.indexOf("://")!=-1);
    var 线路=code.match(/.+?#genre#.*/g);
    var 列表规则=".z(.+?,.+)";
    var 标题规则=".tz(#genre#)";
    var 选集地址规则=".c(http://ip111.cn/?wd=).ty(,)";
    var 选集规则=".tz(,)";选集列表();
}else if(code.indexOf("#EXTINF:")!=-1){
    var code=code.match(/#EXTINF:.+[\s]+?.+/g);
    var head=[];head.push(getVar("name")+"#genre#");
    code=head.concat(code).join("\n");
    var 分类=code.split(/.+?#genre#.*/).filter(Boolean);
    var 线路=code.match(/.+?#genre#.*/g);
    var 列表规则=".z(#EXTINF:.+[\\s]+?.+)";
    var 标题规则=".tz(#genre#)";
    var 选集规则=".z(.+).ty(,)";
    var 选集地址规则=".c(http://ip111.cn/?wd=).z2(,.+[\\s]+?\\(.+\\))";选集列表();
}else if(code.search(/\$c_start.+?\$c_end/)!=-1){
    var 分类=code.split(/\$c_start.+?\$c_end/).filter(item=>item.indexOf("://")!=-1);
    var 线路=code.match(/\$c_start.+?\$c_end/g);
    var 列表规则=".z(.+?,.+)";
    var 标题规则=".ty(c_start).tz($c_end)";
    var 选集地址规则=".c(http://ip111.cn/?wd=).ty(,)";
    var 选集规则=".tz(,)";选集列表();
}else{
    var code=code.match(/.+?,.+/g);
    var head=[];head.push(getVar("name")+"#genre#");
    code=head.concat(code).join("\n");
    var 分类=code.split(/.+?#genre#.*/).filter(Boolean);
    var 线路=code.match(/.+?#genre#.*/g);
    var 列表规则=".z(.+?,.+)";
    var 标题规则=".tz(#genre#)";
    var 选集规则=".tz(,)";
    var 选集地址规则=".c(http://ip111.cn/?wd=).ty(,)";选集列表();
}
######免嗅探6
var uu=getVar("url").split("/?wd=")[1];
if(uu.indexOf("#")!=-1){
var urls=uu.split("#");
var items=[];
for(var i=0;i<urls.length;i++){
    if(urls[i].indexOf(".php")!=-1){
        var resp = JZ(JSON.stringify({ url: urls[i], redirect: false }));
        var u = resp.head.Location || resp.head.location;
    }else if(urls[i].indexOf("mitv://")!=-1){
        var u=urls[i].replace("mitv://","P2p://").replace(".ts","");
    }else{
        var u=urls[i];
    }
    items.push({url:u}); 
}
JSON.stringify(items);
}else{
    if(uu.indexOf(".php")!=-1){
        var resp=JZ(JSON.stringify({url:uu,redirect:false}));
        var u=resp.head.Location||resp.head.location;
    }else if(uu.indexOf("mitv://")!=-1){
        var u=uu.replace("mitv://","P2p://").replace(".ts","");
    }else{
        var u=uu;
    }
JSON.stringify({url:u});
}
######管理订阅7
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='一个直播远程索引.txt';
var code=_.read(filename).match(/.+?,.+/g);
var items=[];
for(var i in code){
var title=code[i].split(",")[0];
var url="q:管理订阅按钮?url="+code[i];
items.push({title:title,url:url});
}
JSON.stringify(items);
######管理本地8
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='一个直播本地索引.txt';
var code=_.read(filename).match(/.+?,.+/g);
var items=[];
for(var i in code){
var title=code[i].split(",")[0];
var url="q:展示本地内容?url="+code[i];
items.push({title:title,url:url});
}
JSON.stringify(items);
######展示本地内容9
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename=getVar("url").split(",")[1];
var code=_.read(filename).match(/.+?,.+/g);
var items=[];
for(var i in code){
var title=code[i].split(",")[0];
var url="q:管理本地按钮?url="+code[i];
items.push({title:title,url:url});
}
JSON.stringify(items);
