######share_token1
if(getVar("url")!="null"){
if(getVar("url").indexOf("aliyundrive.com/s/")!=-1||getVar("url").indexOf("share_id-")!=-1){
    if(getVar("url").indexOf("aliyundrive.com/s/")!=-1){
    var share_id=getVar("url").match(/\.com\/s\/([0-9a-zA-Z]+)/)[1];
    }else if(getVar("url").indexOf("share_id-")!=-1){
    var share_id=getVar("url").split("$$")[0].split("share_id-")[1];
    }
    if(getVar("pwd")!="null"&&getVar("pwd").length>1){
        var pwd=getVar("pwd");
    }else{
        if(getVar("url").split("$$")[2]){
            var pwd=getVar("url").split("$$")[2];
        }else{
        var pwd="";
        }
    }
    if(getVar("share_token")!="null"){
    getVar("share_token");
    }else{
    JSON.parse(getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/share_link/get_share_token",postJson:JSON.stringify({share_pwd:pwd,share_id:share_id})}))).share_token;
    }
}else if(getVar("url").indexOf("$$")!=-1){
    "";
}else{
    alert("请输入完整的阿里云盘分享链接,比如https://www.aliyundrive.com/s/wUFXj7116uS");
}
}else{
  "";
}
######目录重组数据root2
if(getVar("url")!="null"){
if(getVar("url").indexOf("aliyundrive.com/s/")!=-1){
    var xxx_id="share_id-"+getVar("url").match(/\.com\/s\/([0-9a-zA-Z]+)/)[1];
    var file_id="root";
}else if(getVar("url").indexOf("$$")!=-1){
    var xxx_id=getVar("url").split("$$")[0];
    var file_id=getVar("url").split("$$")[1];
}
if(getVar("pwd")!="null"&&getVar("pwd").length>1){
    var pwd=getVar("pwd");
}else{
    if(getVar("url").split("$$")[2]){
        var pwd=getVar("url").split("$$")[2];
    }else{
    var pwd="";
    }
}
}else{
    //我的云盘
var cm=android.webkit.CookieManager.getInstance();
var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
if(ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
var refresh_token=ALICOOKIE.match(/refresh_token=(.*?)[\s;]/)[1];
var code=getHttp(JSON.stringify({url:"https://auth.aliyundrive.com/v2/account/token",postJson:JSON.stringify({refresh_token:refresh_token,grant_type:"refresh_token"})}));
if(JSON.parse(code).access_token){
var access_token=JSON.parse(code).access_token;
var xxx_id="drive_id-"+ALICOOKIE.match(/drive_id=(.*?)[\s;]/)[1];
var file_id="root";
}else{
    alert("登陆已过期，请重新在m浏览器登陆");
}
}else{
alert("请重新登陆阿里云盘网页");
}
}
if(xxx_id.indexOf("share_id")!=-1){
    var HEAD=JSON.stringify({"X-Share-Token":getVar("share_token")});
    var data=JSON.stringify({share_id:xxx_id.split("-")[1],parent_file_id:file_id,limit: 100,image_thumbnail_process:"image/resize,w_160/format,jpeg",image_url_process:"image/resize,w_1920/format,jpeg",video_thumbnail_process:"video/snapshot,t_1000,f_jpg,ar_auto,w_300",order_by:"name",order_direction:"ASC"});
}else if(xxx_id.indexOf("drive_id")!=-1){
    var cm=android.webkit.CookieManager.getInstance();
var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
if(ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
var refresh_token=ALICOOKIE.match(/refresh_token=(.*?)[\s;]/)[1];
var code=getHttp(JSON.stringify({url:"https://auth.aliyundrive.com/v2/account/token",postJson:JSON.stringify({refresh_token:refresh_token,grant_type:"refresh_token"})}));
if(JSON.parse(code).access_token){
var access_token=JSON.parse(code).access_token;
}else{
    alert("登陆已过期，请重新在m浏览器登陆");
}
}else{
alert("请重新登陆阿里云盘网页");
}
    var HEAD=JSON.stringify({"Authorization":access_token});
    var data=JSON.stringify({drive_id:xxx_id.split("-")[1],parent_file_id:file_id,limit: 100,image_thumbnail_process:"image/resize,w_160/format,jpeg",image_url_process:"image/resize,w_1920/format,jpeg",video_thumbnail_process:"video/snapshot,t_1000,f_jpg,ar_auto,w_300",order_by:"name",order_direction:"ASC"});
}
var 目录数据=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/adrive/v3/file/list",head:JSON.parse(HEAD),postJson:data}));
var items=JSON.parse(目录数据).items;
if(JSON.parse(目录数据).items){
    if(xxx_id.indexOf("share_id")!=-1){
        for(var i in items){
           if(items[i].category=="video"||items[i].category=="doc"||items[i].category=="image"){
           items[i].url="q:"+items[i].category+"?url=share_id-"+items[i].share_id+"$$"+items[i].file_id+"$$"+pwd+"$$"+getVar("url").split("$$")[3];
           items[i].文件类型="<font color='red'><b>["+items[i].file_extension+"文件]</b></font>";
           }else if(items[i].type=="folder"){
            if(file_id=="root"){
                FNAME=";";
            }else{
                FNAME=getVar("url").split("$$")[3];
            }
            items[i].url="q:root?url=share_id-"+items[i].share_id+"$$"+items[i].file_id+"$$"+pwd+"$$"+FNAME+items[i].name+";";
            items[i].文件类型="<font color='red'><b>[文件夹]</b></font>";
           }else{
           items[i].url="q:video?url=share_id-"+items[i].share_id+"$$"+items[i].file_id+"$$"+pwd;
           items[i].文件类型="<font color='red'><b>["+items[i].file_extension+"文件]</b></font>";
        }
        }
    }else if(xxx_id.indexOf("drive_id")!=-1){
        for(var i in items){
            if(items[i].category=="video"||items[i].category=="doc"||items[i].category=="image"){
            items[i].url="q:"+items[i].category+"?url=drive_id-"+items[i].drive_id+"$$"+items[i].file_id+"$$"+getVar("url").split("$$")[2];
            items[i].文件类型="<font color='red'><b>["+items[i].file_extension+"文件]</b></font>";
            }else if(items[i].type=="folder"){
                if(file_id=="root"){
                    FNAME=";";
                }else{
                    FNAME=getVar("url").split("$$")[2];
                }
            items[i].url="q:root?url=drive_id-"+items[i].drive_id+"$$"+items[i].file_id+"$$"+FNAME+items[i].name+";";
            items[i].文件类型="<font color='red'><b>[文件夹]</b></font>";
            }else{
            items[i].url="q:video?url=drive_id-"+items[i].drive_id+"$$"+items[i].file_id;
            items[i].文件类型="<font color='red'><b>["+items[i].file_extension+"文件]</b></font>";
            }
        }
    }
    JSON.stringify(items);
}else if(JSON.parse(目录数据).code=="ShareLinkTokenInvalid"){
    alert("来晚了，该分享已失效");
}
######历史记录3
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='阿里云历史记录.txt';
var 记录=[];
if(getVar("name")!='null'){
var title=getVar("name");
var url="q:root?url="+getVar("url");
记录.push({title:title,url:url});
if(_.read(filename)){
var 新记录=记录.concat(JSON.parse(_.read(filename)||[]));
}else{
var 新记录=记录;
}
_.write(JSON.stringify(新记录),filename);
}
######读取历史4
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='阿里云历史记录.txt';
_.read(filename);
######alicookie5
alert("快去首页安装新版吧");
######过滤非视频6
var 过滤=JSON.parse(getVar("目录重组数据")).filter(item=>item.category=="video"||item.category=="audio");
for(var i in 过滤){
if(过滤[i].download_url){
    过滤[i].url="http://ip111.cn/?wd="+过滤[i].download_url+"###"+过滤[i].drive_id+"###"+过滤[i].file_id;
}else{
    过滤[i].url="http://ip111.cn/?wd="+过滤[i].thumbnail+"$$"+过滤[i].share_id+"$$"+过滤[i].file_id+"$$"+过滤[i].file_extension+"$$"+过滤[i].category+"$$"+getVar("url").split("$$")[2]+"$$"+getVar("url").split("$$")[3]+"$$"+过滤[i].parent_file_id+"$$"+过滤[i].name;
}
}
JSON.stringify(过滤);
######视频地址7
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
if(getVar("url").indexOf("$$")!=-1){
    var cm=android.webkit.CookieManager.getInstance();
    var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
    if(ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
        //
        var pwd=getVar("url").split("?wd=")[1].split("$$")[5];
        var share_id=getVar("url").split("?wd=")[1].split("$$")[1];
        var refresh_token=ALICOOKIE.match(/refresh_token=(.*?)[\s;]/)[1];
        var d = [];
        var A=JSON.stringify({url:"https://auth.aliyundrive.com/v2/account/token",postJson:JSON.stringify({refresh_token:refresh_token,grant_type:"refresh_token"})});
        var S=JSON.stringify({url:"https://api.aliyundrive.com/v2/share_link/get_share_token",postJson:JSON.stringify({share_pwd:pwd,share_id:share_id})});
        var urls = []; //网址列表
        urls[0]=A;urls[1]=S;
        for (let index = 0; index < urls.length; index++) {
          function fn(i) {
            return function () {
                 //这里改成你想要进行的操作
               var code = getHttp(urls[i]);
               return code //这里改成你自己想要的返回 没有返回删掉这行就行
            };
          }
          d.push(fn(index));
        }
        var result = []; //result为每个线程运行后返回的结果集
        var s = _.submit(d, 2); //n 改为你想开启的线程数
        for (let i = 0; i < s.length; i++) {
          for (let z of s[i].get()) {
            result.push(z);
          }
        }
        //
        var Acode=result[0];var Scode=result[1];
        var share_token=JSON.parse(Scode).share_token;
        if(JSON.parse(Acode).access_token){
           var access_token=JSON.parse(Acode).access_token;
        }else{
            alert("登陆已过期，请重新在m浏览器登陆");
        }
    }else{
        alert("COOKIE被清除了,请重新登陆阿里云盘网页");
    }
    var file_id=getVar("url").split("?wd=")[1].split("$$")[2];
    var 后缀=getVar("url").split("?wd=")[1].split("$$")[3];
    var 类型=getVar("url").split("?wd=")[1].split("$$")[4];
    var u=getVar("url").split("?wd=")[1].split("$$")[0];
    if(类型=="audio"){
    var code=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/file/get_share_link_download_url",head:{"Authorization":access_token,"X-Share-Token":share_token},postJson:JSON.stringify({share_id:share_id,get_audio_play_info:true,file_id:file_id})}));
    }else{
    var code=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/file/get_share_link_download_url",head:{"Authorization":access_token,"X-Share-Token":share_token},postJson:JSON.stringify({share_id:share_id,file_id:file_id,expire_sec:600})}));
    }
    if(JSON.parse(code).code){
        alert("登陆已过期，请重新在m浏览器登陆");
    }else{
    if(JSON.parse(code).audio_template_list){
        var resp=JZ(JSON.stringify({url:JSON.parse(code).audio_template_list[JSON.parse(code).audio_template_list.length-1].url,redirect:false,head:{"Referer":"https://www.aliyundrive.com/"}}));
        JSON.stringify({url:resp.head.location,head:{"User-Agent":"Lavf/58.12.100","Connection":"keep-alive","Referer":"https://www.aliyundrive.com/"}});
    }else{
    //var resp=JZ(JSON.stringify({url:JSON.parse(code).download_url,redirect:false,head:{"Referer":"https://www.aliyundrive.com/"}}));
            var file_data={};
            var 路径=getVar("url").split("?wd=")[1].split("$$")[6];
            var 最后文件夹名=路径.split(";")[路径.split(';').length-2];
            file_data.parent_name=路径+最后文件夹名;
            file_data.folder_id=getVar("url").split("?wd=")[1].split("$$")[7];
            file_data.file_id=file_id;file_data.share_id=share_id;file_data.share_pwd=pwd;file_data.expiration="";
            file_data.file_name=getVar("url").split("?wd=")[1].split("$$")[8];
            var _d=e2Rex(encodeURI(JSON.stringify(file_data)),".en64()").replace(/\//g,"$");
            var 转码1080='http://116.85.31.19:3000/apis/yun-play/'+_d+'/'+access_token+'/'+share_token+'/FHD/index.m3u8';
            var 转码720='http://116.85.31.19:3000/apis/yun-play/'+_d+'/'+access_token+'/'+share_token+'/HD/index.m3u8';
        JSON.stringify([{name:"原始文件播放",url:JSON.parse(code).download_url,head:{"Referer":"https://www.aliyundrive.com/"}},{name:"转码1080P可投屏",url:转码1080,head:{"Referer":"https://www.aliyundrive.com/"}},{name:"转码720P可投屏",url:转码720,head:{"Referer":"https://www.aliyundrive.com/"}}]);
    }
    }
}else{
var cm=android.webkit.CookieManager.getInstance();
var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
if(ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
var refresh_token=ALICOOKIE.match(/refresh_token=(.*?)[\s;]/)[1];
var code=getHttp(JSON.stringify({url:"https://auth.aliyundrive.com/v2/account/token",postJson:JSON.stringify({refresh_token:refresh_token,grant_type:"refresh_token"})}));
if(JSON.parse(code).access_token){
var access_token=JSON.parse(code).access_token;
}else{
    alert("登陆已过期，请重新在m浏览器登陆");
}
}else{
alert("请重新登陆阿里云盘网页");
}
    var file_id=getVar("url").split("?wd=")[1].split("###")[2];
    var drive_id=getVar("url").split("?wd=")[1].split("###")[1];
    var u=getVar("url").split("?wd=")[1].split("###")[0];
    var 转码1080='http://116.85.31.19:3000/apis/my-yun-play/'+file_id+'/'+drive_id+'/'+access_token+'/FHD/index.m3u8';
    var 转码720='http://116.85.31.19:3000/apis/my-yun-play/'+file_id+'/'+drive_id+'/'+access_token+'/HD/index.m3u8';
    JSON.stringify([{name:"原始文件播放",url:u,head:{"Referer":"https://www.aliyundrive.com/"}},{name:"转码1080P可投屏",url:转码1080,head:{"Referer":"https://www.aliyundrive.com/"}},{name:"转码720P可投屏",url:转码720,head:{"Referer":"https://www.aliyundrive.com/"}}]);
}
######文档预览8
var cm=android.webkit.CookieManager.getInstance();
    var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
    if(ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
        var refresh_token=ALICOOKIE.match(/refresh_token=(.*?)[\s;]/)[1];
        var Acode=getHttp(JSON.stringify({url:"https://auth.aliyundrive.com/v2/account/token",postJson:JSON.stringify({refresh_token:refresh_token,grant_type:"refresh_token"})}));
        if(JSON.parse(Acode).access_token){
           var access_token=JSON.parse(Acode).access_token;
        }else{
            alert("登陆已过期，请重新在m浏览器登陆");
        }
    }else{
        alert("请重新登陆阿里云盘网页");
    }
var xxx_id=getVar("url").split("$$")[0];
var file_id=getVar("url").split("$$")[1];
if(xxx_id.indexOf("share_id")!=-1){
    var HEAD=JSON.stringify({"Authorization":access_token,"X-Share-Token":getVar("share_token")});
    var data=JSON.stringify({share_id:xxx_id.split("-")[1],file_id:file_id});
}else if(xxx_id.indexOf("drive_id")!=-1){
    var HEAD=JSON.stringify({"Authorization":access_token});
    var data=JSON.stringify({drive_id:xxx_id.split("-")[1],file_id:file_id});
}
var code=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/file/get_office_preview_url",head:JSON.parse(HEAD),postJson:data}));
if(JSON.parse(code).code){
  if(JSON.parse(code).code=="NotSupportedFileType"){
    alert("此文档格式不支持预览");
  }else{
    alert("登陆已过期，请重新在m浏览器登陆");
  }
}else{
var url=JSON.parse(code).preview_url+"??"+JSON.parse(code).access_token;
var name=getVar("name");
JSON.stringify([{name:name,url:url}]);
}
######搜索链接9
[
    {"title":"阿里盘搜","url":"https://www.alipansou.com/search?k="},
    {"title":"奈斯搜索","url":"https://www.niceso.fun/search/?q="},
    {"title":"阿里云搜","url":"https://aliyunso.cn/search?page=1&type=&keyword="},
    {"title":"UP云搜","url":"https://www.upyunso.com/search.html?page=1&keyword="},
    {"title":"云盘资源网","url":"https://www.yunpanziyuan.com/fontsearch.htm?fontname="},
    {"title":"云盘资源分享社区","url":"https://alyunpan.com/?q="},
    {"title":"阿里小站","url":"https://www.pan666.cn/?q="},
    {"title":"霸王龙影库","url":"https://t-rex.tzfile.com/?s="},
    {"title":"TG_云盘资源发布","url":"https://tx.me/s/sharealiyun?q="},
    {"title":"TG_云盘盘","url":"https://tx.me/s/yunpanpan?q="},
    {"title":"TG_云盘影视共享","url":"https://tx.me/s/alypysgx?q="},
    {"title":"TG_V云盘","url":"https://tx.me/s/aliyun69?q="},
    {"title":"TG_云盘资源共享","url":"https://tx.me/s/aliyunziyuanfenxiang?q="},
    {"title":"TG_WAYOU资源","url":"https://tx.me/s/wayouziyuan?q="},
    {"title":"TG_影视必应阁","url":"https://tx.me/s/moviebyg?q="},
    {"title":"小纸条","url":"https://u.gitcafe.net/?wd="}
]
######多链接10
if(getVar("url")!="null"){
if(getVar("url").indexOf("aliyundrive.com/s/")!=-1){
var list=getVar("url").match(/[\s\S]*?https:\/\/www\.aliyundrive\.com\/s\/.*/g);
var items=[];
for(var i in list){
    var title=list[i].replace(/\s/g,"").replace(/<.+?>/g,"").split("https://")[0]||"加个标题吧，能从历史记录找到我";
    var share_id=list[i].match(/aliyundrive\.com\/s\/([0-9a-zA-Z]+)/)[1];
    if(list[i].indexOf("提取码")!=-1){
        var pwd=list[i].match(/提取码.*?([0-9a-zA-Z]+)/)[1];
    }else if(list[i].indexOf("密码")!=-1){
        var pwd=list[i].match(/密码.*?([0-9a-zA-Z]+)/)[1];
    }else{
        var pwd="";
    }
    var url="q:root?url=share_id-"+share_id+"$$root$$"+pwd;
    items.push({name:title,url:url,detail:url});
}
JSON.stringify(items);
}else{
    alert("请输入完整阿里云盘分享链接");
}
}else{
    alert("请输入阿里云盘分享链接");
}
######图片预览11
var cm=android.webkit.CookieManager.getInstance();
    var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
    if(ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
        var refresh_token=ALICOOKIE.match(/refresh_token=(.*?)[\s;]/)[1];
        var Acode=getHttp(JSON.stringify({url:"https://auth.aliyundrive.com/v2/account/token",postJson:JSON.stringify({refresh_token:refresh_token,grant_type:"refresh_token"})}));
        if(JSON.parse(Acode).access_token){
           var access_token=JSON.parse(Acode).access_token;
        }else{
            alert("登陆已过期，请重新在m浏览器登陆");
        }
    }else{
        alert("请重新登陆阿里云盘网页");
    }
var xxx_id=getVar("url").split("$$")[0];
var file_id=getVar("url").split("$$")[1];
if(xxx_id.indexOf("share_id")!=-1){
    var HEAD=JSON.stringify({"Authorization":access_token,"X-Share-Token":getVar("share_token")});
    var data=JSON.stringify({share_id:xxx_id.split("-")[1],file_id:file_id,expire_sec:600});
    var code=getHttp(JSON.stringify({url:"https://api.aliyundrive.com/v2/file/get_share_link_download_url",head:JSON.parse(HEAD),postJson:data}));
if(JSON.parse(code).code){
alert(JSON.parse(code).code)
}else{
var resp=JZ(JSON.stringify({url:JSON.parse(code).download_url,redirect:false,head:{"Referer":"https://www.aliyundrive.com/"}}));
var url=resp.head.location+'@{"Referer":"https://www.aliyundrive.com/"}';
JSON.stringify([{url:url}]);
}
}else if(xxx_id.indexOf("drive_id")!=-1){
    var 过滤=JSON.parse(getVar("目录重组数据")).filter(item=>item.category=="image");
    var items=[];
for(var i in 过滤){
    var url=过滤[i].download_url+'@{"Referer":"https://www.aliyundrive.com/"}';
    items.push({url:url});
}
JSON.stringify(items);
}
