######普通列表1
function 通用列表(){
    var res={};var items=[];
    var LIMIT=列表.length;
    for(var j=0;j<LIMIT;j++){
        var CODE=列表[j];
        var 预地址=e2Rex(CODE,地址规则);
        var 地址=预地址.indexOf("http")!=-1?预地址:baseURL+预地址;
        if(地址.search(/\.php\/.+?\.vod/)!=-1){
            var 日期=e2Rex(getVar("TIME_"),".time(MMdd)");
            var 地址=地址+"&key="+日期;
        }
        var 标题=e2Rex(CODE,标题规则);
        var 预图片=e2Rex(CODE,图片规则);
        if(预图片.indexOf("/mac:")!=-1){
            var 图片="http:"+预图片.split("/mac:")[1];
        }else if(预图片.indexOf("=http")!=-1){
            var 图片=预图片.match(/.*(http.*)/)[1];
        }else if(预图片.indexOf("http")==0){
            var 图片=预图片;
        }else if(预图片==""){
            var 图片="https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/kongbai.gif";
        }else{
            var 图片=baseURL+预图片;
            if(baseURL.indexOf("1090ys2.com")!=-1){
            var 图片=图片+'@{"user-agent":"Mozilla/5.0","referer":"http://1090ys2.com/"}';
            }
        }
        var 简介=e2Rex(CODE,简介规则);
        items.push({title:标题,url:地址,img:图片,detail:简介});
    }
    res.data=items;
    if(NEXTPAGE){
        res.nextpage=NEXTPAGE;
    }
    if(PREPAGE){
        res.prepage=PREPAGE;
    }
    return JSON.stringify(res);
}
var baseURL=getVar("baseURL");
eval(getVar("列表规则"));通用列表();
######选集列表2
function 选集列表(){
    var res={};var items=[];var detail=[];
    for(var i=0;i<分类.length;i++){
        var 分类CODE=分类[i];
        var 列表=e2Arr(分类CODE,列表规则);
        if(线路){
        var 标题=e2Rex(线路[i],标题规则);
        }else{
        var 标题=e2Rex(分类CODE,标题规则);
        }
        if(baseURL.search(/\.php\/.+?\.vod/)!=-1){
           var PARSE=e2Rex(分类CODE,".json(player_info).json(parse)").split(",");
           var PARSE2=e2Rex(分类CODE,".json(player_info).json(parse2)").split(",");
           var 总接口=PARSE.concat(PARSE2).filter(item => item.search(/\/.+?\?.+?=/)!=-1);
           var 过滤规则=[
    /jx\.+huimaojia\.+com\/player/,/py\.+789pan\.+cn\/player\/tm\.php\?url=/,/ztys\.+waruanzy\.+com\/player\/\?url=/,/yingshi\.+waruanzy\.+com\/789pan\/\?url=/,/vip\.+parwix\.+com:4433\/player\/\?url=/,/api\.+cxitco\.+cn/,/\/vip\.+renrenmi.cc/,/yanbing\.+parwix\.+com:4433\/player/,/json\.+cantin\.+cc\/apijson\.php/,/ffdm\.+miaoletv\.+com\/\?url=/,/vip\.+sylwl\.+cn\/api\/\?key=/,/jx\.+dikotv\.+com\/\?url=/,/zly\.+xjqxz\.+top\/player\/\?url=/,/5znn\.+xyz\/m3u8\.+php/,/uid=1735&my=/,/api\.+xkvideo\.+design\/m3u8\.+php\?url=/,/play\.+szbodankyy\.+com\/xxoocnmb/,/vip\.+fj6080\.+xyz\/player\/\?url=/,/a\.+dxzj88\.+com\/jiexi/,/host\.+q-q\.+wang\/api/,/qpsvipr\.+naifeimi\.+com/,/保佑/
    ];
           var 可用接口=总接口.filter(function (text) {return !过滤规则.some(function (regex) {return regex.test(text);});});
           if(JSON.stringify(可用接口).indexOf("=")!=-1){
              if(可用接口[0].indexOf("http")!=-1){
              var 接口=可用接口[0].match(/.+(url|v|vid|php\?id)=/)[0].replace("..",".");
              }else if(可用接口[0].indexOf("//")==0){
              var 接口=baseURL.split(":")[0]+可用接口[0].match(/\/\/.+(url|v|vid|php\?id)=/)[0].replace("..",".");
              }else{
              var 接口=baseURL.match(/https?:\/\/[^\/]*/)[0]+可用接口[0].match(/\/.+(url|v|vid|php\?id)=/)[0].replace("..",".");
              }
           }else{
           var 接口="http://1.117.152.239:39000/jiexi.php?url=";
           }
        }else if(baseURL.indexOf("api.php/app/")!=-1||baseURL.indexOf("xgapp.php/v")!=-1){
          var 接口=e2Rex(分类CODE,".json(parse_api)");
        }else{
        var 接口=baseURL;
        }
        var LIST=[];
        for(var j=0;j<列表.length;j++){
            var 选集=e2Rex(列表[j],选集规则);
            var 选集地址=e2Rex(列表[j],选集地址规则);
            if(baseURL.indexOf("xgapp.php/v")!=-1||baseURL.indexOf("api.php/app/")!=-1||baseURL.search(/\.php\/.+?\.vod/)!=-1){
               if(选集地址.indexOf(".m3u8")>15||选集地址.indexOf(".mp4")>15||选集地址.indexOf("/obj/tos")!=-1){
                   if(选集地址.indexOf(".ruifenglb.com")!=-1){
                       var 选集地址="http://ip111.cn/?wd=https://tv.yjhan.com:4433/CL4K/?url="+选集地址;
                   }else{
                       var 选集地址="http://ip111.cn/?wd="+选集地址;
                   }
               }else{
               var 选集地址="http://ip111.cn/?wd="+接口+选集地址;
               }
            }else if(baseURL.search(/api\.php\/.*?\/vod/)!=-1){
                if(baseURL.indexOf("ppzhu.vip")!=-1||baseURL.indexOf("api.8d8q.com")!=-1){
                    var 选集地址="http://ip111.cn/?wd="+选集地址+"&app=10003&account=272775028&password=qq272775028";
                }else{
                   if(选集地址.indexOf("=")!=-1||选集地址.indexOf(".m3u8")>15||选集地址.indexOf(".mp4")>15||选集地址.indexOf("/obj/tos")!=-1){
                        var 选集地址="http://ip111.cn/?wd="+选集地址;
                   }else if(选集地址.indexOf("html")||选集地址.indexOf("www.bilibili.com")){
                        var 选集地址="http://ip111.cn/?wd=https://api.m3u8.tv:5678/home/api?type=ys&uid=233711&key=bgjnopvDHPUY035689&url="+选集地址;
                   }else{
                        var 选集地址=选集地址;
                   }
                }
            }else if(选集地址.indexOf("http")!=-1){
                var 选集地址=选集地址;
            }else{
                if(baseURL.indexOf("gimytv.com")!=-1){
                    var 选集地址=接口+选集地址+'@{"user-agent":"Mozilla/5.0 Windows10","Referer":"'+接口+'"}';
                }else{
                    var 选集地址=接口+选集地址;
                }
            }
            LIST.push({title:选集,url:选集地址});
        }
    var play_={};
    play_.title=标题;
    play_.list=LIST;
    items.push(play_);
    }
    detail.push({desc:简介});
    res.data=items;
    res.desc=detail;
    return JSON.stringify(res);
}
var baseURL=getVar("baseURL");
eval(getVar("选集规则"));选集列表();
######UA3
var u=getVar("baseURL");
if(u.indexOf("hou.lu")!=-1||u.indexOf("dxys2233.com")!=-1){
"Dart/2.13(dart:io)";
}else if(u.indexOf("18mv.club")!=-1){
"okhttp/4.1.0";
}else{
"Mozilla/5.0 Android";
}
