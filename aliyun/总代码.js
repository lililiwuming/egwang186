######share_token1
if(getVar("url").length>1&&getVar("url")!="null"){
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
    alert("ce请输入完整的阿里云盘分享链接,比如https://www.aliyundrive.com/s/wUFXj7116uS");
}
}else{
  "";
}
######目录重组数据root2
if(getVar("url").length>1&&getVar("url")!="null"){
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
if(ALICOOKIE&&ALICOOKIE!="null"&&ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
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
if(ALICOOKIE&&ALICOOKIE!="null"&&ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
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
if(getVar("QJS")&&getVar("QJS")!="null"){
    eval(getVar("QJS"));
}else{
    eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
}
var filename='阿里云历史记录.txt';
var 记录=[];
if(getVar("name")!='null'&&getVar("url").indexOf("$$root")==-1){
var title=getVar("name");
var url=getVar("url");
记录.push({title:title,url:url});
if(_.read(filename)){
var 新记录=记录.concat(JSON.parse(_.read(filename)).filter(d=>d.url!=记录[0].url));
}else{
var 新记录=记录;
}
_.write(JSON.stringify(新记录),filename);
}
######读取历史4
if(getVar("QJS")&&getVar("QJS")!="null"){
    eval(getVar("QJS"));
}else{
    eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
}
var filename='阿里云历史记录.txt';
_.read(filename);
######alicookie5
alert("快去首页安装新版吧");
######过滤非视频6
function 过滤非视频(item) {
    if(item.mime_type){
        return item.mime_type.indexOf("video")!=-1||item.category=="video"||item.category=="audio";
    }else{
        return item.category=="video"||item.category=="audio";
    }
}
var 过滤=JSON.parse(getVar("目录重组数据")).filter(过滤非视频);
for(var i in 过滤){
if(过滤[i].download_url){
    过滤[i].url="http://ip111.cn/?wd="+过滤[i].download_url+"###"+过滤[i].drive_id+"###"+过滤[i].file_id;
}else{
    过滤[i].url="http://ip111.cn/?wd="+过滤[i].thumbnail+"$$"+过滤[i].share_id+"$$"+过滤[i].file_id+"$$"+过滤[i].file_extension+"$$"+过滤[i].category+"$$"+getVar("url").split("$$")[2]+"$$"+getVar("url").split("$$")[3]+"$$"+过滤[i].parent_file_id+"$$"+过滤[i].name;
}
}
JSON.stringify(过滤);
######视频地址7
if(getVar("QJS")&&getVar("QJS")!="null"){
    eval(getVar("QJS"));
}else{
    eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
}
if(getVar("url").indexOf("$$")!=-1){
    var cm=android.webkit.CookieManager.getInstance();
    var ALICOOKIE=cm.getCookie("www.aliyundrive.com");
    if(ALICOOKIE&&ALICOOKIE!="null"&&ALICOOKIE.indexOf("access_token")!=-1&&ALICOOKIE.indexOf("refresh_token")!=-1){
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
            var 转码1080='http://116.85.31.19:4000/apis/yun-play/'+_d+'/'+access_token+'/'+share_token+'/FHD/index.m3u8';
            var 转码720='http://116.85.31.19:4000/apis/yun-play/'+_d+'/'+access_token+'/'+share_token+'/HD/index.m3u8';
        JSON.stringify([{name:"原始文件播放",url:JSON.parse(code).download_url,head:{"Referer":"https://www.aliyundrive.com/"}},{name:"转码1080P可投屏",url:转码1080},{name:"转码720P可投屏",url:转码720}]);
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
    var 转码1080='http://116.85.31.19:4000/apis/my-yun-play/'+file_id+'/'+drive_id+'/'+access_token+'/FHD/index.m3u8';
    var 转码720='http://116.85.31.19:4000/apis/my-yun-play/'+file_id+'/'+drive_id+'/'+access_token+'/HD/index.m3u8';
    JSON.stringify([{name:"原始文件播放",url:u,head:{"Referer":"https://www.aliyundrive.com/"}},{name:"转码1080P可投屏",url:转码1080},{name:"转码720P可投屏",url:转码720}]);
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
    {"title":"TG_4K影视资源","url":"https://tx.me/s/remux_2160p?q="},
    {"title":"TG_蓝光影音","url":"https://tx.me/s/voidrss?q="},
    {"title":"TG_阿里云影视","url":"https://tx.me/s/aliyunys?q="},
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
######QJS12
ZXZhbChmdW5jdGlvbihwLGEsYyxrLGUscil7ZT1mdW5jdGlvbihjKXtyZXR1cm4oYzw2Mj8nJzplKHBhcnNlSW50KGMvNjIpKSkrKChjPWMlNjIpPjM1P1N0cmluZy5mcm9tQ2hhckNvZGUoYysyOSk6Yy50b1N0cmluZygzNikpfTtpZignMCcucmVwbGFjZSgwLGUpPT0wKXt3aGlsZShjLS0pcltlKGMpXT1rW2NdO2s9W2Z1bmN0aW9uKGUpe3JldHVybiByW2VdfHxlfV07ZT1mdW5jdGlvbigpe3JldHVybicoWzM1LTlELVpdfFsxMl1cXHcpJ307Yz0xfTt3aGlsZShjLS0paWYoa1tjXSlwPXAucmVwbGFjZShuZXcgUmVnRXhwKCdcXGInK2UoYykrJ1xcYicsJ2cnKSxrW2NdKTtyZXR1cm4gcH0oJyg1KCl7MyBfPXt9OzMgbT0xLjA7MyBxPVEuY24uMXcuMXguMXk7MyByPVEuY24uMXcuMXguMXkoKS5jLmFwcGxpY2F0aW9uQ29udGV4dDszIHM9MXoud2Via2l0Lk1pbWVUeXBlTWFwLmdldFNpbmdsZXRvbigpOzMgdD1SLmlvOzMgdT1SLjFBOzMgdj10LlMuc2VwYXJhdG9yOzMgdz0xQigpK3YrXCdxbVwnK3YrRCgpLlQuVSgwLDQpK1wnJCQkXCcrRCgpLjE3K3Y7Rz0oMUMpPT4xRCAxQz09PVwnc3RyaW5nXCc7NSAxOChhKXtjb25zdCAxOT0xRCBhOzYgYSE9SCYmKDE5PT1cJ29iamVjdFwnfHwxOT09XCc1XCcpfTMgeT1SLnV0aWwuY29uY3VycmVudDszIHo9NyB5LkV4ZWN1dG9ycy5uZXdDYWNoZWRUaHJlYWRQb29sKCk7NSBWKGEpezFFPXsxRjo1KCl7NiBhKCl9LH07MyBiPTcgeS5GdXR1cmVUYXNrKDFFKTt6LlcoYik7NiBifTUgWChhLGIpe0kgSj0wO0kgMWE9W107SyhKPGEuOSl7MWEuMWIoYS5zbGljZShKLEorYikpO0orPWJ9NiAxYS5maWx0ZXIoKG8pPT5vLjk+MCl9NSBXKGwsbil7Yz1bXTtZPVgobCxsLjkvbik7MyBuPTA7SyhuPFkuOSl7NSBsKHgpezYgNSBvKCl7MyBhPVtdOzFjKEkgaT0wO2k8WVt4XS45O2krKyl7YS4xYihZW3hdW2ldKCkpfTYgYX19Yy4xYihWKGwobikpKTtuKyt9NiBjfTUgWihmKXszIGE9Zi5nZXRQYXJlbnRGaWxlKCk7OCghYS4xRygpKWEuWigpfTUgRShhLGIpezMgYz03IHQuUyh3K1wn5pWw5o2uXCcrditiKTtaKGMpOzMgZD03IHQuRmlsZVdyaXRlcihjLDFkKTtkLkUoYSk7ZC5MKCl9NSBNKGEpezMgYj03IHQuUyh3K1wn5pWw5o2uXCcrdithKTszIGM9MDs4KCFiLjFHKCl8fChjPWIuOSgpKT09MCk2XCdcJzszIGQ9dS4xSC4xSS4xSih1LjFLLjFMLGMpOzMgZT03IHQuRmlsZUlucHV0U3RyZWFtKGIpO2UuTShkKTtlLkwoKTs2IDcgdS5TdHJpbmcoZCl9MyBBPVEub3JnLmpzb3VwOzMgQj1BLkNvbm5lY3Rpb24uTWV0aG9kOzUgMTAobyl7SXsxZSxGLE4sMWYsMWcsMTEscmV9PW87MyBhPUEuSnNvdXAuY29ubmVjdCgxZSk7YS5pZ25vcmVDb250ZW50VHlwZSgxMik7YS5wb3N0RGF0YUNoYXJzZXQoMWcpO2EubWF4Qm9keVNpemUoMTA0ODU3NjAwMCk7cmU9PT0xZD9hLjFNKHJlKTphLjFNKDEyKTs4KDE4KEYpKTFjKHggaW4gRilhLkYoeCxGW3hdKTs4KDE4KE4pKXs4KDFmPT09MTIpYS5yZXF1ZXN0Qm9keShOKTsxTyAxYyhwIGluIE4pYS5kYXRhKHAsTltwXSl9MyBiOzgoMWY9PT0xMnx8MTE9PVwncG9zdFwnKWI9YS4xMShCLlBPU1QpLjFQKCk7MU8gYj1hLjExKEIuR0VUKS4xUCgpOzYgYn01IDFRKGEsYil7YS4xZyhiKTs2IGEuYm9keSgpfTUgMVIoYSxiKXs2IGIrXCc9XCcrYS5jb29raWUoYil9NSAxUyhhKXszIGI9XCdcJzszIGM9YS5jb29raWVzKCkuMVQoKS4xVSgpO0soYy4xVigpKXszIGQ9Yy4xVygpO2IrPWQuMVgoKStcJz1cJytkLjFZKCkrXCc7XCd9NiBifTUgMVooYSxiKXs2IGEuRihiKX01IDIwKGEpezMgYj1cJ1wnOzMgYz1hLmhlYWRlcnMoKS4xVCgpLjFVKCk7SyhjLjFWKCkpezMgZD1jLjFXKCk7Yis9ZC4xWCgpK1wnPVwnK2QuMVkoKStcJztcJ302IGJ9NSAxaShhKXszIGI9YS4xaihcJy9cJyk7OChhLjkoKT09YisxKXthPWEuVSgwLGIpOzYgMWkoYSl9NiBhLlUoMCxhLjFqKFwnLlwnKSl9NSAxayhvKXt0cnl7SXsxbCwyMX09bzszIGE9MTAobyk7MyBiPTFpKGEuMWUoKS4yMigpKTszIGM9cy5nZXRFeHRlbnNpb25Gcm9tTWltZVR5cGUoYS5jb250ZW50VHlwZSgpLnNwbGl0KFwnO1wnKVswXSk7MyBkPWIuVShiLjFqKFwnL1wnKSsxKStcJy5cJytjO089RygxbCk/MWwrditkOncrXCfkuIvovb1cJyt2K2Q7MyBmPWEuYm9keVN0cmVhbSgpOzMgZz03IHUuMUguMUkuMUoodS4xSy4xTCw0MDk2KTszIGg9MDszIGk9NyB0LkJ5dGVBcnJheU91dHB1dFN0cmVhbSgpO0soKGg9Zi5NKGcpKSE9LTEpe2kuRShnLDAsaCl9MyBqPTcgdC5TKE8pO1ooaik7MyBrPTcgdC5GaWxlT3V0cHV0U3RyZWFtKGopO2suRShpLnRvQnl0ZUFycmF5KCkpOzgoMjE9PT0xZCk2IE87UChcJ+S4i+i9veaIkOWKn++8jOi3r+W+hDpcJytPKTs2IE99Y2F0Y2goZSl7MTMoZSk7UChcJ+S4i+i9veWksei0pSzor7fmiZPlvIDosIPor5Xlj7Dmn6XnnIvlhbfkvZPlvILluLjkv6Hmga9cJyl9ZmluYWxseXs4KGkhPUgpaS5MKCk7OChrIT1IKWsuTCgpOzgoZiE9SClmLkwoKX19MyBDPXIuZ2V0U2hhcmVkUHJlZmVyZW5jZXMoRCgpLlQsci5NT0RFX1BSSVZBVEUpOzUgMW0oYSxiKXszIGM9Qy4xbigpO2MucHV0U3RyaW5nKGEsYik7Yy4xbygpfTUgMXAoYSxiKXs2IEMuZ2V0U3RyaW5nKGEsYil9NSAxcShhKXszIGM9Qy4xbigpO2MucmVtb3ZlKGEpO2MuMW8oKX01IDIzKCl7MyBjPUMuMW4oKTtjLmNsZWFyKCk7Yy4xbygpfTUgJCgpezMgYT0xNC45O3N3aXRjaChhKXsyNCAxOjYgMTUoMTRbMF0pOzI0IDI6NiBwdXRWYXIoMTRbMF0sMTRbMV0pO2RlZmF1bHQ6NiBnZXRDb2RlKCl9fTUgMTMoZSl7RyhlKT/miqXplJkoZSk65oql6ZSZKGUuMjIoKSl9NSBQKGEpe3EuaC5iKGEpfTUgMXIoKXs3IFEuMXouYXBwLkluc3RydW1lbnRhdGlvbigpLnNlbmRLZXlEb3duVXBTeW5jKDQpfTUgMUIoKXs2IHIuZ2V0RXh0ZXJuYWxGaWxlc0RpcihIKS5nZXRQYXRoKCl9NSAxNihhKXtSLjFBLlRocmVhZC4xNihhKX01IEQoKXtvPXt9O28uVD0xcygxNShcJzF0XCcpLFwnLjF1KFQpLnQoKVwnKTtvLjI1PTFzKDE1KFwnMXRcJyksXCcuMXUoMjUpLnQoKVwnKTtvLjE3PTFzKDE1KFwnMXRcJyksXCcuMXUoMTcpLnQoKVwnKTs2IG99Xy5WRVJTSU9OPW07Xy5NPU07Xy5FPUU7Xy4xNj0xNjtfLlY9VjtfLlc9VztfLlg9WDtfLjFyPTFyO18uRz1HO18uMTA9MTA7Xy5iZD0xUTtfLmNrPTFSO18uY2tzPTFTO18uaGQ9MVo7Xy5oZHM9MjA7Xy4xaz0xaztfLkQ9RDtfLlA9UDtfLjEzPTEzO18uMW09MW07Xy4xcD0xcDtfLjFxPTFxO18uZGVsU3A9MjM7Xy4kPSQ7MjYuXz1ffS4xRigyNikpOycsW10sMTMxLCd8fHx2YXJ8fGZ1bmN0aW9ufHJldHVybnxuZXd8aWZ8bGVuZ3RofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8aW5mb3x3cml0ZXxoZWFkZXJ8aXNTdHJpbmd8bnVsbHxsZXR8aW5kZXh8d2hpbGV8Y2xvc2V8cmVhZHxwYXJhbXN8c2F2ZXBhdGh8dG9hc3R8UGFja2FnZXN8amF2YXxGaWxlfHNpZ258c3Vic3RyaW5nfHRocmVhZHxzdWJtaXR8Y2h1bmt8bGlzdHxta2RpcnN8aHR0cHxtZXRob2R8dHJ1ZXxlcnJvcnxhcmd1bWVudHN8Z2V0VmFyfHNsZWVwfG5hbWV8aXNPYmplY3R8dHlwZXxyZXN8cHVzaHxmb3J8ZmFsc2V8dXJsfGpzb258Y2hhcnNldHx8dHJpbVV8bGFzdEluZGV4T2Z8ZG93bmxvYWR8c2V0cGF0aHxwdXRTcHxlZGl0fGNvbW1pdHxnZXRTcHxjbGVhclNwfGJhY2t8ZTJSZXh8UU1JTkZPfGdldHx8bWJyb3dzZXJ8Y29uZmlnfEFwcHxhbmRyb2lkfGxhbmd8cGF0aHx2YWx8dHlwZW9mfG9ianxjYWxsfGV4aXN0c3xyZWZsZWN0fEFycmF5fG5ld0luc3RhbmNlfEJ5dGV8VFlQRXxmb2xsb3dSZWRpcmVjdHN8fGVsc2V8ZXhlY3V0ZXxodHRwQm9keXxodHRwQ29va2llfGh0dHBDb29raWVzfGVudHJ5U2V0fGl0ZXJhdG9yfGhhc05leHR8bmV4dHxnZXRLZXl8Z2V0VmFsdWV8aHR0cEhlYWRlcnxodHRwSGVhZGVyc3x0aXBzfHRvU3RyaW5nfHJlbW92ZVNwfGNhc2V8dmVyc2lvbnx0aGlzJy5zcGxpdCgnfCcpLDAse30pKQ==
