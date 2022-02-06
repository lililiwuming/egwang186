######share_token1
if(getVar("url").split(".com/s/")[1].length>3||getVar("url").split("$$")[0].indexOf("share_id")!=-1){
    var share_id=getVar("url").split(".com/s/")[1]||getVar("url").split("$$")[0].split("-")[1];
    JSON.parse(getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/share_link/get_share_token",postJson:JSON.stringify({share_pwd:"",share_id:share_id})}))).share_token;
}else if(getVar("url").indexOf("$$")!=-1){
    "";
}else{
    alert("请输入完整的阿里云盘分享链接,比如https://www.aliyundrive.com/s/wUFXj7116uS");
}
######目录重组数据root2
if(getVar("url").split(".com/s/")[1].length>3){
    var xxx_id="share_id-"+getVar("url").split(".com/s/")[1];
    var file_id="root";
}else if(getVar("url").indexOf("share_id")!=-1){
    var xxx_id=getVar("url").split("$$")[0];
    var file_id=getVar("url").split("$$")[1];
}else{
    var cm=android.webkit.CookieManager.getInstance();
    var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
    if(ALICOOKIE.indexOf("access_token")!=-1){
    var access_token=ALICOOKIE.match(/access_token=(.*?)[\s;]/)[1];
    var xxx_id="drive_id-"+ALICOOKIE.match(/drive_id=(.*?)[\s;]/)[1];
    }else{
    alert("请登陆阿里云盘网页获取COOKIE");
    } 
}
if(xxx_id.indexOf("share_id")!=-1){
    var HEAD=JSON.stringify({"X-Share-Token":getVar("share_token")});
    var data=JSON.stringify({share_id:xxx_id.split("-")[1],parent_file_id:file_id,limit: 100,image_thumbnail_process:"image/resize,w_160/format,jpeg",image_url_process:"image/resize,w_1920/format,jpeg",video_thumbnail_process:"video/snapshot,t_1000,f_jpg,ar_auto,w_300",order_by:"name",order_direction:"ASC"});
}else if(xxx_id.indexOf("drive_id")!=-1){
    var HEAD=JSON.stringify({"Authorization":access_token});
    var data=JSON.stringify({drive_id:xxx_id.split("-")[1],parent_file_id:file_id,limit: 100,image_thumbnail_process:"image/resize,w_160/format,jpeg",image_url_process:"image/resize,w_1920/format,jpeg",video_thumbnail_process:"video/snapshot,t_1000,f_jpg,ar_auto,w_300",order_by:"name",order_direction:"ASC"});
}
var 目录数据=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/adrive/v3/file/list",head:JSON.parse(HEAD),postJson:data}));
var items=JSON.parse(目录数据).items;
if(xxx_id.indexOf("share_id")!=-1){
    for(var i in items){
       if(items[i].category=="video"||items[i].category=="doc"){
       items[i].url="q:"+items[i].category+"?url=share_id-"+items[i].share_id+"$$"+items[i].file_id;
       items[i].name="["+items[i].file_extension+"资源文件]"+items[i].name;
       }else if(items[i].type=="folder"){
        items[i].url="q:root?url=share_id-"+items[i].share_id+"$$"+items[i].file_id;
        items[i].name="["+items[i].file_extension+"资源文件]"+items[i].name;
       }else{
       items[i].url="q:video?url=share_id-"+items[i].share_id+"$$"+items[i].file_id;
       items[i].name="["+items[i].file_extension+"资源文件]"+items[i].name;
    }
    }
}else if(xxx_id.indexOf("drive_id")!=-1){
    for(var i in items){
        if(items[i].category=="video"||items[i].category=="doc"){
        items[i].url="q:"+items[i].category+"?url=drive_id-"+items[i].drive_id+"$$"+items[i].file_id;
        items[i].name="["+items[i].file_extension+"资源文件]"+items[i].name;
        }else if(items[i].type=="folder"){
            items[i].url="q:root?url=drive_id-"+items[i].drive_id+"$$"+items[i].file_id;
            items[i].name="["+items[i].file_extension+"资源文件]"+items[i].name;
        }else{
        items[i].url="q:video?url=drive_id-"+items[i].drive_id+"$$"+items[i].file_id;
        items[i].name="["+items[i].file_extension+"资源文件]"+items[i].name;
        }
    }
}
JSON.stringify(items);
######历史记录3
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='阿里云历史记录.txt';
var 记录=[];
var title=getVar("name");
var url="q:root?url="+getVar("url");
记录.push({title:title,url:url});
if(_.read(filename)){
var 新记录=记录.concat(JSON.parse(_.read(filename)||[]));
}else{
var 新记录=记录;
}
_.write(JSON.stringify(新记录),filename);
######读取历史4
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='阿里云历史记录.txt';
_.read(filename);
######alicookie5
var cm=android.webkit.CookieManager.getInstance();
var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
if(ALICOOKIE.indexOf("access_token")!=-1){
var access_token=ALICOOKIE.match(/access_token=(.*?)[\s;]/)[1];
var refresh_token=ALICOOKIE.match(/refresh_token=(.*?)[\s;]/)[1];
var Alicookie={};
Alicookie.access_token=access_token;
Alicookie.refresh_token=refresh_token;
JSON.stringify(Alicookie);
}else{
alert("请重新登陆阿里云盘网页");
}
######过滤非视频6
var 过滤=JSON.parse(getVar("目录重组数据")).filter(item=>item.category=="video");
for(var i in 过滤){
if(过滤.download_url){
    过滤[i].url="https://www.baidu.com/s?wd="+过滤[i].download_url;
}else{
    过滤[i].url="https://www.baidu.com/s?wd="+过滤[i].thumbnail+"$$"+过滤[i].share_id+"$$"+过滤[i].file_id;
}
}
JSON.stringify(过滤);
######视频地址7
if(getVar("url").indexOf("$$")!=-1){
    var access_token=JSON.parse(getVar("alicookie")).access_token;
    var share_id=getVar("url").split("?wd=")[1].split("$$")[1];
    var file_id=getVar("url").split("?wd=")[1].split("$$")[2];
    var type=getVar("url").split("?wd=")[1].split("$$")[3];
    var u=getVar("url").split("?wd=")[1].split("$$")[0];
    var code=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/file/get_share_link_download_url",head:{"Authorization":access_token,"X-Share-Token":getVar("share_token")},postJson:JSON.stringify({share_id:share_id,file_id:file_id,expire_sec:600})}));
    if(JSON.parse(code).code){
        alert("登陆已过期，请重新在m浏览器登陆");
    }
    var resp=JZ(JSON.stringify({url:JSON.parse(code).download_url,redirect:false,head:{"Referer":"https://www.aliyundrive.com/"}}));
    JSON.stringify({url:resp.head.location,head:{"Referer":"https://www.aliyundrive.com/"}});
}else{
    var u=getVar("url").split("?wd=")[1];
    JSON.stringify({url:u,head:{"Referer":"https://www.aliyundrive.com/"}});
}
######文档预览8
var cm=android.webkit.CookieManager.getInstance();
var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
if(ALICOOKIE.indexOf("access_token")!=-1){
var access_token=ALICOOKIE.match(/access_token=(.*?)[\s;]/)[1];
}else{
alert("请重新登陆阿里云盘网页");
}
var xxx_id=getVar("url").split("$$")[0];
var file_id=getVar("url").split("$$")[1];
var code=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/file/get_office_preview_url",head:{"Authorization":access_token,"X-Share-Token":getVar("share_token")},postJson:JSON.stringify({xxx_id.split("-")[0]:xxx_id.split("-")[1],file_id:file_id})}));
if(JSON.parse(code).code){
alert("登陆已过期，请重新在m浏览器登陆")
}
var url=JSON.parse(code).preview_url+"??"+JSON.parse(code).access_token;
var name=getVar("name");
JSON.stringify([{name:name,url:url}]);