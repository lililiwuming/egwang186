######备用数据1
{"data":[
    {
       "title":"六维TV",
       "rule":{
            "分类":'var a=e2Arr(getHttp(JSON.stringify({url:"http://www.liuweidianshi.ml/m.php"})),".get(section.module-boxA)");var items=[];for(var i in a){var title=e2Rex(a[i],".get(h3).t()");var ul=a[i];var url="q:播放器?url="+title;items.push({title:title,ul:ul,url:url});}JSON.stringify(items);',
            "选集规则":'var 分类=e2Arr(getVar("CODE"),".json(ul).get(section)");var 列表规则=".get(ul li)";var 线路="";var 标题规则=".get(h3).t()";var 选集规则=".get(a).t()";var 选集地址规则=".c(http://ip111.cn/?wd=http://www.liuweidianshi.ml/).get(a).a(href)";',
            "免嗅探规则":'var u=e2Rex(getHttp(getVar("url").split("?wd=")[1]),".get(video).a(src)");if(u.indexOf("huya.php")!=-1){u=JZ(JSON.stringify({url:u,redirect:false})).head.Location;}JSON.stringify({url:u});'
       }
    },
    {
        "title":"BiubiuTV(42.193.55.242)",
        "rule":{
            "分类":'var a=e2Arr(getHttp(JSON.stringify({url:"http://42.193.55.242/tv/ds.php"})),".z(#[^,#]+?头#[\\\\s\\\\S]+?#[^,#]+?尾#)");var items=[];for(var i in a){var title=e2Rex(a[i],".z2(#\\\\([^,#]+?\\\\)头#)");var ul=a[i];var url="q:播放器?url="+title;items.push({title:title,ul:ul,url:url});}JSON.stringify(items);',
            "选集规则":'var 分类=e2Arr(getVar("CODE"),".json(ul)");var 列表规则=".z(.+?,.+)";var 线路="";var 标题规则=".ty(#).tz(头)";var 选集规则=".tz(,)";var 选集地址规则=".c(http://ip111.cn/?wd=).ty(,)";',
            "免嗅探规则":'var urls=getVar("url").split("?wd=")[1].split("#").filter(Boolean);var items=[];for(var i in urls){if(urls[i].indexOf("huya.php")!=-1){var u=JZ(JSON.stringify({url:urls[i],redirect:false})).head.Location;}else if(urls[i].indexOf(".m3u8")==-1&&urls[i].indexOf("?")==-1){var u=urls[i]+"?type=.m3u8";}else{var u=urls[i];}items.push({url:u});}JSON.stringify(items);'
        }
    }
]
}
######选集列表
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
eval(getVar("选集规则"));选集列表();
