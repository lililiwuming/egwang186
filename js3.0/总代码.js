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
               if(选集地址.indexOf(".m3u8")>15||选集地址.indexOf(".mp4")>15){
                   if(选集地址.indexOf(".ruifenglb.com")!=-1){
                       var 选集地址="http://ip111.cn/?wd="+接口+选集地址;
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
                   if(选集地址.indexOf("=")!=-1||选集地址.indexOf(".m3u8")>15||选集地址.indexOf(".mp4")>15){
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
选集列表();
######UA3
var baseURL=getVar("baseURL");
if(baseURL.indexOf(".php/")!=-1){
    if(baseURL.indexOf("api.php/app")!=-1||baseURL.indexOf("xgapp")!=-1||baseURL.indexOf("freekan")!=-1){
        "Dart/2.14 (dart:io)";
    }else if(baseURL.indexOf("zsb")!=-1||baseURL.indexOf("fkxs")!=-1||baseURL.indexOf("xays")!=-1||baseURL.indexOf("xcys")!=-1||baseURL.indexOf("szys")!=-1||baseURL.indexOf("dxys")!=-1||baseURL.indexOf("ytys")!=-1||baseURL.indexOf("qnys")!=-1){
        "Dart/2.15 (dart:io)";
    }else if(baseURL.indexOf(".vod")!=-1){
        "okhttp/4.1.0";
    }else{
        "Dalvik/2.1.0";
    }
}else{
"Mozilla/5.0 Android";
}

######通用免嗅探4
var uu=getVar("url");
if(uu.indexOf("ip111.cn/?wd=")!=-1){
var playurl=uu.split("ip111.cn/?wd=")[1];
    if(playurl.indexOf("duoduozy.com")!=-1||playurl.indexOf("m3u8.cache.suoyo.cc")!=-1){
    /*var uuu="https://bo.movie06.com/ddplay/play.php?url="+playurl;
    var resp=getHttp(JSON.stringify({url:uuu,head:{"referer":"https://www.duoduozy.com/"}}));
    var uuuu=resp.match(/var urls.+?"(.+?)"/)[1];
    JSON.stringify({url:uuuu});*/
    "web=https://jhpc.manduhu.com/duoduo/?url="+playurl+'@{"Referer":"https://555dy3.com"}';
    }else if(playurl.indexOf("1080p.one/mogai_api.php/v1.api/Index?list=")!=-1){
        uu="https://zy.youhuima.vip/?url="+playurl.split("url=")[1];
        "web="+uu;
    }else if(playurl.indexOf("cat.wkfile.com")!=-1){
        JSON.stringify({url:playurl,head:{"User-Agent":"Lavf/58.12.100","Referer":"wkfile.com"}});
    }else if(playurl.indexOf("=")==-1&&playurl.indexOf(".m3u8")>15||playurl.indexOf(".mp4")>15||playurl.indexOf("/obj/tos")!=-1){
        if(playurl.indexOf("hsl.ysgc.xyz")!=-1){
        var cccc=JZ(JSON.stringify({url:"https://play.dushe520.com/m3u8.php?url="+playurl}));
        JSON.stringify({url:JSON.parse(cccc.code).url,head:{"Referer":"https://ysgc.cc"}});
        }else{
        JSON.stringify({url:playurl.match(/.*(http.*)/)[1]});
        }
    }else if(playurl.indexOf("=")!=-1){
            var resp=JZ(JSON.stringify({url:playurl,redirect:false}));
            if(resp.head.location||resp.head.Location){
                   var a=resp;
                   while(a.head.location||a.head.Location){
                    var finalurl=a.head.location||a.head.Location;
                    if(finalurl.indexOf(".mp4")>30){
                        var a={"head":{"cookie":"ccccc"}};
                    }else{
                        var a=JZ(JSON.stringify({url:finalurl,redirect:false,head:{"User-Agent":"Mozilla/5.0 Android"}}));
                    }
                   }
                   var realurl=finalurl;
                if(realurl.indexOf("=http")!=-1||realurl.indexOf("url=")!=-1){
                    if(a.code.indexOf("<html")!=-1){
                        "web="+realurl;
                    }else{
                        var ppurl=JSON.parse(a.code).url;
                        if(realurl.indexOf("mgtv.com")!=-1){
                            JSON.stringify({url:ppurl,head:{"User-Agent":"Mozilla/5.0","Referer":""}});
                        }else if(realurl.indexOf("bilibili.com")!=-1){
                            JSON.stringify({url:ppurl});
                        }else{
                            JSON.stringify({url:ppurl});
                        }
                    }
                }else{
                    if(playurl.indexOf("www.mgtv.com")!=-1){
                    JSON.stringify({url:realurl,head:{"User-Agent":"Mozilla/5.0","Referer":""}}); 
                    }else{
                    JSON.stringify({url:realurl});
                    }
                }
            }else{
                function 切换解析(data){
                        if(data.split("url=")[1].indexOf("http")!=-1){
                            return "web=http://1.117.152.239:39000/?url="+data.split("url=")[1];
                        }else if(data.split("url=")[1].indexOf("renrenmi")!=-1){
                            return "web=https://jx.blbo.cc:4433/?url="+data.split("url=")[1];
                        }else if(data.split("url=")[1].indexOf("LT-")!=-1){
                            return "web=https://analysis.yikan.one/analysis/player/?uid=8&my=fjkmoqFJLORTVZ1359&url="+data.split("url=")[1];
                        }else{
                            return "web=http://1.117.152.239:39000/?url="+data.split("url=")[1];
                        }
                }
                if(resp.code.indexOf("<html")!=-1){
                    if(resp.code.search(/player=new/)!=-1||resp.code.search(/<div id="video"/)!=-1||resp.code.search(/<div id="[^"]*?player"/)!=-1||resp.code.search(/\/\/视频链接/)!=-1||resp.code.search(/<iframe[\s\S]*?src="[^"]+?"/)!=-1||resp.code.search(/<video[\s\S]*?src="[^"]+?"/)!=-1){
                       "web="+playurl;
                    }else{
                       切换解析(playurl);
                    }
                }else{
                    if(e2Rex(resp.code,".json(url).or().json(data).json(url)").length>1){
                        var realurl=JSON.parse(resp.code).url||JSON.parse(resp.code).data.url;
                        if(playurl.indexOf("mgtv.com")!=-1){
                            JSON.stringify({url:realurl,head:{"User-Agent":"Mozilla/5.0","Referer":""}});
                        }else if(playurl.indexOf("bilibili.com")!=-1){
                            JSON.stringify({url:realurl});
                        }else{
                            JSON.stringify({url:realurl});
                        }
                    }else{
                        切换解析(playurl);
                    }
                }
            }
        
    }
}else{
"web="+uu;
}
######模板规则5
var 模板库=[
    {
        "title":"iptv/vod",
        "匹配":"api\\.php\\/.+?\\/vod\\/",
        "rule":{
            "首页规则":'var 列表=e2Arr(getVar("源码"),".json(data)");var 标题规则=".json(title)";var 地址规则=".json(nextlink)";var 图片规则=".json(pic)";var 简介规则=".json(state).c().json(type)";var NEXTPAGE="";var PREPAGE="";',
            "筛选数据":'var a="分类+电影=movie&start=&area=&type=+电视剧=tvplay&start=&area=&type=+综艺=tvshow&start=&area=&type=+动漫=comic&start=&area=&type=+动作片=movie&start=&area=&type=动作+喜剧片=movie&start=&area=&type=喜剧+爱情片=movie&start=&area=&type=爱情+科幻片=movie&start=&area=&type=科幻+恐怖片=movie&start=&area=&type=恐怖+剧情片=movie&start=&area=&type=剧情+大陆剧=tvplay&start=&area=大陆&type=+香港剧=tvplay&start=&area=香港&type=+台湾剧=tvplay&start=&area=台湾&type=+美国剧=tvplay&start=&area=美国&type=+日本剧=tvplay&start=&area=日本&type=+韩国剧=tvplay&start=&area=韩国&type=";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\\n"+b;',
            "分类规则":'var 列表=e2Arr(getVar("源码"),".json(data)");var 标题规则=".json(title)";var 地址规则=".json(nextlink)";var 图片规则=".json(pic)";var 简介规则=".json(state).c().json(type)";var NEXTPAGE="";var PREPAGE="";',
            "选集规则":'var 分类=e2Arr(getVar("源码"),".json(videolist).z(\\".*?\\\\])");var 线路="";var 简介=e2Arr(getVar("源码"),".json(intro)");var 列表规则=".z(\\\\{.*?\\\\})";var 标题规则=".z2(\\"\\\\(.*?\\\\)\\")";var 选集规则=".json(title)";var 选集地址规则=".json(url)";',
            "搜索规则":'var URL=baseURL+"?ac=list&page=1&wd="+getVar("KEY");if(baseURL.indexOf("api.php/app")!=-1||baseURL.indexOf("xgapp")!=-1||baseURL.indexOf("freekan")!=-1){var UA="Dart/2.14 (dart:io)"}else if(baseURL.indexOf("zsb")!=-1||baseURL.indexOf("fkxs")!=-1||baseURL.indexOf("xays")!=-1||baseURL.indexOf("xcys")!=-1||baseURL.indexOf("szys")!=-1||baseURL.indexOf("dxys")!=-1||baseURL.indexOf("ytys")!=-1||baseURL.indexOf("qnys")!=-1){var UA="Dart/2.15 (dart:io)"}else if(baseURL.indexOf(".vod")!=-1){var UA="okhttp/4.1.0"}else{var UA="Dalvik/2.1.0"}var 源码=getHttp(JSON.stringify({url:URL,head:{"User-Agent":UA}}));var 列表=e2Arr(源码,".json(data)");var 标题规则=".json(title)";var 地址规则=".json(nextlink)";var 图片规则=".json(pic)";var 简介规则=".json(state).c().json(type)";var NEXTPAGE="";var PREPAGE="";',
            "免嗅探规则":'eval(getVar("通用免嗅探"))'
        }
    },
    {
        "title":"v1.vod",
        "匹配":"\\.php\\/.+?\\.vod",
        "rule":{
            "首页规则":'var 列表=getVar("源码").replace(/<.*?>/g,"").replace(/[\\s]*/g,"").match(/\\{[^\\{]*"vod_id".*?"type_1".*?\\}/g);var 标题规则=".json(vod_name)";var 地址规则=".c(/detail?vod_id=).json(vod_id)";var 图片规则=".json(vod_pic)";var 简介规则=".json(vod_remarks).c().json(vod_actor).c().json(vod_blurb)";var NEXTPAGE="";var PREPAGE="";',
            "筛选数据":'var a="分类+电影=1&class=&area=+电视剧=2&class=&area=+综艺=3&class=&area=+动漫=4&class=&area=+纪录片=31&class=&area=+电视直播=33&class=&area=+动作片=1&class=动作&area=+喜剧片=1&class=喜剧&area=+爱情片=1&class=爱情&area=+科幻片=1&class=科幻&area=+恐怖片=1&class=恐怖&area=+剧情片=1&class=剧情&area=+战争片=1&class=战争&area=+大陆剧=2&class=&area=大陆+香港剧=2&class=&area=香港+台湾剧=2&class=&area=台湾+日本剧=2&class=&area=日本+韩国剧=2&class=&area=韩国+美国剧=2&class=&area=美国";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\\n"+b;',
            "分类规则":'var 列表=e2Arr(getVar("源码"),".json(data).json(list)");var 标题规则=".json(vod_name)";var 地址规则=".c(/detail?vod_id=).json(vod_id)";var 图片规则=".json(vod_pic)";var 简介规则=".json(vod_remarks).c().json(vod_actor).c().json(vod_blurb)";var NEXTPAGE="";var PREPAGE="";',
            "选集规则":'var 分类=e2Arr(getVar("源码"),".json(data).json(vod_play_list)");var 线路="";var 简介=e2Rex(getVar("源码"),".json(data).json(vod_content)");var 列表规则=".json(url).ct(#).z(.*?\\\\$.*?#)";var 标题规则=".json(player_info).json(show)";var 选集规则=".z2(\\\\(.+?\\\\)\\\\$)";var 选集地址规则=".z2(\\\\$\\\\(.+?\\\\)[#|\\"])";',
            "搜索规则":'var URL=baseURL+"?page=1&limit=10&wd="+getVar("KEY");if(baseURL.indexOf("api.php/app")!=-1||baseURL.indexOf("xgapp")!=-1||baseURL.indexOf("freekan")!=-1){var UA="Dart/2.14 (dart:io)"}else if(baseURL.indexOf("zsb")!=-1||baseURL.indexOf("fkxs")!=-1||baseURL.indexOf("xays")!=-1||baseURL.indexOf("xcys")!=-1||baseURL.indexOf("szys")!=-1||baseURL.indexOf("dxys")!=-1||baseURL.indexOf("ytys")!=-1||baseURL.indexOf("qnys")!=-1){var UA="Dart/2.15 (dart:io)"}else if(baseURL.indexOf(".vod")!=-1){var UA="okhttp/4.1.0"}else{var UA="Dalvik/2.1.0"}var 源码=getHttp(JSON.stringify({url:URL,head:{"User-Agent":UA}}));var 列表=e2Arr(源码,".json(data).json(list)");var 标题规则=".json(vod_name)";var 地址规则=".c(/detail?vod_id=).json(vod_id)";var 图片规则=".json(vod_pic)";var 简介规则=".json(vod_remarks).c().json(vod_actor).c().json(vod_blurb)";var NEXTPAGE="";var PREPAGE="";',
            "免嗅探规则":'eval(getVar("通用免嗅探"))'
        }
    },
    {
        "title":"xgapp.php/v",
        "匹配":"xgapp\\.php\\/v",
        "rule":{
            "首页规则":'var 列表=getVar("源码").replace(/<.*?>/g,"").replace(/[\\s]*/g,"").match(/\\{"vod_id".*?\\}/g);var 标题规则=".json(vod_name)";var 地址规则=".c(video_detail?id=).json(vod_id)";var 图片规则=".json(vod_pic)";var 简介规则=".json(vod_remarks).c().json(vod_time_add)";var NEXTPAGE="";var PREPAGE="";',
            "筛选数据":'var a="分类+电影=1&class=&area=+电视剧=2&class=&area=+综艺=3&class=&area=+动漫=4&class=&area=+纪录片=31&class=&area=+电视直播=33&class=&area=+动作片=1&class=动作&area=+喜剧片=1&class=喜剧&area=+爱情片=1&class=爱情&area=+科幻片=1&class=科幻&area=+恐怖片=1&class=恐怖&area=+剧情片=1&class=剧情&area=+战争片=1&class=战争&area=+大陆剧=2&class=&area=内地+香港剧=2&class=&area=香港+台湾剧=2&class=&area=台湾+日本剧=2&class=&area=日本+韩国剧=2&class=&area=韩国+美国剧=2&class=&area=美国";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\\n"+b;',
            "分类规则":'var 列表=e2Arr(getVar("源码"),".json(data)");var 标题规则=".json(vod_name)";var 地址规则=".c(video_detail?id=).json(vod_id)";var 图片规则=".json(vod_pic)";var 简介规则=".json(vod_remarks).c().json(vod_time_add)";var NEXTPAGE="";var PREPAGE="";',
            "选集规则":'var 分类=e2Arr(getVar("源码"),".json(data).json(vod_info).json(vod_url_with_player)");var 线路="";var 简介=e2Rex(getVar("源码"),".json(data).json(vod_info).json(vod_content)");var 列表规则=".json(url).ct(#).z(.*?\\\\$.*?#)";var 标题规则=".json(name)";var 选集规则=".z2(\\\\(.+?\\\\)\\\\$)";var 选集地址规则=".z2(\\\\$\\\\(.+?\\\\)[#|\\"])";',
            "搜索规则":'var URL=baseURL+"search?pg=1&text="+getVar("KEY");if(baseURL.indexOf("api.php/app")!=-1||baseURL.indexOf("xgapp")!=-1||baseURL.indexOf("freekan")!=-1){var UA="Dart/2.14 (dart:io)"}else if(baseURL.indexOf("zsb")!=-1||baseURL.indexOf("fkxs")!=-1||baseURL.indexOf("xays")!=-1||baseURL.indexOf("xcys")!=-1||baseURL.indexOf("szys")!=-1||baseURL.indexOf("dxys")!=-1||baseURL.indexOf("ytys")!=-1||baseURL.indexOf("qnys")!=-1){var UA="Dart/2.15 (dart:io)"}else if(baseURL.indexOf(".vod")!=-1){var UA="okhttp/4.1.0"}else{var UA="Dalvik/2.1.0"}var 源码=getHttp(JSON.stringify({url:URL,head:{"User-Agent":UA}}));var 列表=e2Arr(源码,".json(data)");var 标题规则=".json(vod_name)";var 地址规则=".c(video_detail?id=).json(vod_id)";var 图片规则=".json(vod_pic)";var 简介规则=".json(vod_remarks).c().json(vod_time_add)";var NEXTPAGE="";var PREPAGE="";',
            "免嗅探规则":'eval(getVar("通用免嗅探"))'
        }
    },
    {
        "title":"api.php/app",
        "匹配":"api\\.php\\/app\\/",
        "rule":{
            "首页规则":'var 列表=getVar("源码").replace(/<.*?>/g,"").replace(/[\\s]*/g,"").match(/\\{"vod_id".*?\\}/g);var 标题规则=".json(vod_name)";var 地址规则=".c(video_detail?id=).json(vod_id)";var 图片规则=".json(vod_pic)";var 简介规则=".json(vod_remarks).c().json(vod_time_add)";var NEXTPAGE="";var PREPAGE="";',
            "筛选数据":'var a="分类+电影=1&class=&area=+电视剧=2&class=&area=+综艺=3&class=&area=+动漫=4&class=&area=+纪录片=31&class=&area=+电视直播=33&class=&area=+动作片=1&class=动作&area=+喜剧片=1&class=喜剧&area=+爱情片=1&class=爱情&area=+科幻片=1&class=科幻&area=+恐怖片=1&class=恐怖&area=+剧情片=1&class=剧情&area=+战争片=1&class=战争&area=+大陆剧=2&class=&area=内地+香港剧=2&class=&area=香港+台湾剧=2&class=&area=台湾+日本剧=2&class=&area=日本+韩国剧=2&class=&area=韩国+美国剧=2&class=&area=美国";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\\n"+b;',
            "分类规则":'var 列表=e2Arr(getVar("源码"),".json(list)");var 标题规则=".json(vod_name)";var 地址规则=".c(video_detail?id=).json(vod_id)";var 图片规则=".json(vod_pic)";var 简介规则=".json(vod_remarks).c().json(vod_time_add)";var NEXTPAGE="";var PREPAGE="";',
            "选集规则":'var 分类=e2Arr(getVar("源码"),".json(data).json(vod_url_with_player)");var 线路="";var 简介=e2Rex(getVar("源码"),".json(data).json(vod_content)");var 列表规则=".json(url).ct(#).z(.*?\\\\$.*?#)";var 标题规则=".json(name)";var 选集规则=".z2(\\\\(.+?\\\\)\\\\$)";var 选集地址规则=".z2(\\\\$\\\\(.+?\\\\)[#|\\"])";',
            "搜索规则":'var URL=baseURL+"search?pg=1&text="+getVar("KEY");if(baseURL.indexOf("api.php/app")!=-1||baseURL.indexOf("xgapp")!=-1||baseURL.indexOf("freekan")!=-1){var UA="Dart/2.14 (dart:io)"}else if(baseURL.indexOf("zsb")!=-1||baseURL.indexOf("fkxs")!=-1||baseURL.indexOf("xays")!=-1||baseURL.indexOf("xcys")!=-1||baseURL.indexOf("szys")!=-1||baseURL.indexOf("dxys")!=-1||baseURL.indexOf("ytys")!=-1||baseURL.indexOf("qnys")!=-1){var UA="Dart/2.15 (dart:io)"}else if(baseURL.indexOf(".vod")!=-1){var UA="okhttp/4.1.0"}else{var UA="Dalvik/2.1.0"}var 源码=getHttp(JSON.stringify({url:URL,head:{"User-Agent":UA}}));var 列表=e2Arr(源码,".json(list)");var 标题规则=".json(vod_name)";var 地址规则=".c(video_detail?id=).json(vod_id)";var 图片规则=".json(vod_pic)";var 简介规则=".json(vod_remarks).c().json(vod_time_add)";var NEXTPAGE="";var PREPAGE="";',
            "免嗅探规则":'eval(getVar("通用免嗅探"))'
        }
    }
];
function 匹配模板(item){
    var rex=new RegExp(item.匹配);
    return baseURL.search(rex)!=-1;
}
var baseURL=getVar("baseURL");
JSON.stringify(模板库.find(匹配模板).rule);
######读取本地规则6
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='一个影视本地规则.txt';
_.read(filename);
######写入本地规则7
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='一个影视本地规则.txt';
var 记录=[];
if(getVar("KEY").length>10){
var rule=e2Rex(getVar("KEY"),".json(rule)")||e2Rex(getVar("KEY"),".dn64().json(rule)");
if(rule){
var title=e2Rex(getVar("KEY"),".json(title)")||e2Rex(getVar("KEY"),".dn64().json(title)");
var img=e2Rex(getVar("KEY"),".json(img)")||e2Rex(getVar("KEY"),".dn64().json(img)");
var baseURL=e2Rex(getVar("KEY"),".json(baseURL)")||e2Rex(getVar("KEY"),".dn64().json(baseURL)");
var 分类地址=e2Rex(getVar("KEY"),".json(分类地址)")||e2Rex(getVar("KEY"),".dn64().json(分类地址)");
var 首页地址=e2Rex(getVar("KEY"),".json(首页地址)")||e2Rex(getVar("KEY"),".dn64().json(首页地址)");
记录.push({title:title,img:img,baseURL:baseURL,分类地址:分类地址,首页地址:首页地址,rule:rule});
}else{
if(e2Rex(getVar("KEY"),".json(title)")&&e2Rex(getVar("KEY"),".json(url)")&&e2Rex(getVar("KEY"),".json(img)")){
var title=e2Rex(getVar("KEY"),".json(title)");var baseURL=e2Rex(getVar("KEY"),".json(url)");var img=e2Rex(getVar("KEY"),".json(img)");
if(baseURL.search(/api\.php\/app\//)!=-1||baseURL.search(/xgapp\.php\/v/)!=-1){
var 分类地址=baseURL+"video?tid=分类&lang=&year=&pg=翻页";
var 首页地址=baseURL+"index_video?token=";
}else if(baseURL.search(/\.php\/.+?\.vod/)!=-1){
var 分类地址=baseURL+"?type=分类&lang=&year=&page=翻页";
var 首页地址=baseURL+"/vodPhbAll";
}else if(baseURL.search(/api\.php\/.+?\/vod\//)!=-1){
var 分类地址=baseURL+"?ac=list&class=分类&page=翻页";
var 首页地址=baseURL+"?ac=list&class=&start=&area=&type=&page=1";
}else{
    alert("暂未适配");
}
记录.push({title:title,img:img,baseURL:baseURL,分类地址:分类地址,首页地址:首页地址});
}else{
    alert("请输入正确规则格式：{\"title\":\"播放呀\",\"url\":\"https:\/\/www.bofangya.com\/xgapp.php\/v1\/\",\"img\":\"https:\/\/inmemory.coding.net\/p\/InMemory\/d\/MBrowser\/git\/raw\/master\/AppFile\/AppIcon\/播放呀.png\"}");
}
}
if(_.read(filename)){
var 新记录=[];
var 记录=记录.concat(JSON.parse(_.read(filename))[0].data);
新记录.push({title:"本地规则",data:记录});
}else{
var 新记录=[];
新记录.push({title:"本地规则",data:记录});
}
_.write(JSON.stringify(新记录),filename);
_.read(filename);
}else{
alert("请输入正确规则格式：{\"title\":\"播放呀\",\"url\":\"https:\/\/www.bofangya.com\/xgapp.php\/v1\/\",\"img\":\"https:\/\/inmemory.coding.net\/p\/InMemory\/d\/MBrowser\/git\/raw\/master\/AppFile\/AppIcon\/播放呀.png\"}");
}
