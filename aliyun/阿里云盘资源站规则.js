######首页1
{"data":[{
    "title":"阿里大站",
    "rule":{
        "分类":'var a="影视$https://pan.3636360.com/api/v3/thread.list?perPage=10&page=#PN#&filter[categoryids][0]=1&filter[essence]=$$动漫$https://pan.3636360.com/api/v3/thread.list?perPage=10&page=#PN#&filter[categoryids][0]=7&filter[essence]=$$音乐$https://pan.3636360.com/api/v3/thread.list?perPage=10&page=#PN#&filter[categoryids][0]=2&filter[essence]=";var b="全部$0&filter[attention]=0&filter[sort]=1&scope=0$$推荐$0&filter[attention]=0&filter[sort]=1&scope=1$$精华$1&filter[attention]=0&filter[sort]=1&scope=0$$评论时间$0&filter[attention]=0&filter[sort]=2&scope=0$$热门内容$0&filter[attention]=0&filter[sort]=3&scope=0";a=a.split("$$");b=b.split("$$");var items=[];for(var i in a){var az=a[i].split("$")[0];var ay=a[i].split("$")[1];for(var j in b){var bz=b[j].split("$")[0];var by=b[j].split("$")[1];items.push({title:az+"-"+bz,url:ay+by});}}JSON.stringify(items);',
        "列表规则":'var 列表=e2Arr(getCode(),".json(Data).json(pageData)");var 地址规则=".json(threadId)";var 标题规则=".c(更新时间:).json(updatedAt).c(标题:).json(title)";var 图片规则=".json(user).json(avatar)";var 简介规则=".json(content).json(text)";if(Number(getVar("PN"))==-1){var page=Number(getVar("PN"))+3;var NEXTPAGE=getVar("前")+page+getVar("后");var PREPAGE="";}else{var page=Number(getVar("PN"))+1;var NEXTPAGE=getVar("前")+page+getVar("后");var PREPAGE="";}',
        "详情规则":'var 正文=e2Rex(getVar("CODE"),".json(detail).t()");'
    }
},{
    "title":"阿里小纸条",
    "rule":{
        "分类":'var a=JSON.parse(getHttp(JSON.stringify({url:"https://yunluo.oss-cn-shanghai.aliyuncs.com/alipaper/data.json"}))).data;for(var i in a){a[i].title=a[i].info.name+a[i].info.cat_num;a[i].url="http://ip111.cn/?pg=#PN#";}JSON.stringify(a);',
        "列表规则":'var 列表=e2Arr(getVar("CODE"),".json(data)");var 地址规则=".json(key)";var 标题规则=".json(title)";var 图片规则=".json(tok)";var 简介规则=".json(des)";var NEXTPAGE="";var PREPAGE="";',
        "详情规则":'var 正文=e2Rex(getVar("CODE"),".json(title).c(链接:https://www.aliyundrive.com/s/).json(url).c().json(detail)");'
    }
},{
    "title":"TG频道订阅",
    "rule":{
        "分类":'var a="云盘资源发布$https://tx.me/s/sharealiyun#PN#$$云盘盘$https://tx.me/s/yunpanpan#PN#$$云盘影视共享$https://tx.me/s/alypysgx#PN#$$V云盘$https://tx.me/s/aliyun69#PN#$$云盘资源共享$https://tx.me/s/aliyunziyuanfenxiang#PN#$$WAYOU资源每日更新$https://tx.me/s/WaYouZiYuan#PN#$$影视必应阁$https://tx.me/s/moviebyg#PN#";var a=a.split("$$");var items=[];for(var i in a){var title=a[i].split("$")[0];var url=a[i].split("$")[1];items.push({title:title,url:url});}JSON.stringify(items);',
        "列表规则":'var 列表=e2Arr(getCode(),".get(div.tgme_widget_message_bubble)");var 地址规则=".get(a.tgme_widget_message_photo_wrap).a(href)";var 标题规则=".c(发表时间:).get(time).a(datetime).c( 标题:).get(div.tgme_widget_message_text).t().z([\\\\s\\\\S]{40})";var 图片规则=".get(a.tgme_widget_message_photo_wrap).a(style).ty(\').tz(\')";var 简介规则=".get(div.tgme_widget_message_text).t()";var NEXTPAGE="https://tx.me"+getCode().match(/rel="prev" href="(.+?)"/)[1];var PREPAGE="https://tx.me"+getCode().match(/rel="canonical" href="(.+?)"/)[1];',
        "详情规则":'var 正文=getVar("msg");'
    }
},{
    "title":"星火资源[qq文档]",
    "rule":{
        "分类":'var a="影视音乐$tab=ppx5bp&subId=ppx5bp&startrow=33#PN#$$电视剧,纪录片$tab=qvnx1e&subId=qvnx1e&startrow=33#PN#$$动漫漫画$tab=kwi9g7&subId=kwi9g7&startrow=33#PN#$$小说.电子书.图片$tab=1nylx9&subId=1nylx9&startrow=33#PN#$$教程.课程.软件$tab=BB08J2&subId=BB08J2&startrow=33#PN#";var a=a.split("$$");var padId="300000000$TzIVdaOubWOP";var items=[];for(var i in a){var title=a[i].split("$")[0];var url="https://docs.qq.com/dop-api/get/sheet?"+a[i].split("$")[1]+"&padId="+padId+"&outformat=1";items.push({title:title,url:url});}JSON.stringify(items);',
        "列表规则":'var 原始=JSON.parse(getCode().replace(/"(\\d+)"/g, \'"qq_$1"\')).data.initialAttributedText.text[0][0][0].c[1];var list=[];for(var key in 原始){if(原始[key].qq_2&&原始[key].qq_2[1].length>1){list.push(原始[key].qq_2);}};var 列表=[];for(var i=0;i<list.length;i=i+3){var title="["+list[i][1]+"]"+list[i+1][1];var url=list[i][1];var detail=title+" 链接:"+list[i+2][1];列表.push(JSON.stringify({title:title,url:url,detail:detail}));}var 地址规则=".json(url)";var 标题规则=".json(title)";var 图片规则=".json(url)";var 简介规则=".json(detail)";var NEXTPAGE="";var PREPAGE="";',
        "详情规则":'var 正文=getVar("msg");'
    }
}
]
}
######普通列表
function 通用列表(){
    var res={};var items=[];
    var LIMIT=列表.length;
    for(var j=0;j<LIMIT;j++){
        var CODE=列表[j];
        var 地址=e2Rex(CODE,地址规则);
        var 标题=e2Rex(CODE,标题规则);
        var 图片=e2Rex(CODE,图片规则);
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
eval(getVar("列表规则"));通用列表();
######详情列表
function 正文处理(){
    var list=正文.match(/[\s\S]*?https:\/\/www\.aliyundrive\.com\/s\/.*/g);
var items=[];
for(var i in list){
    var title=list[i].replace(/\s/g,"").replace(/<.+?>/g,"").split("https://")[0]||"没获取到标题，去看原文吧";
    if(title.length>40){
        title=title.substr(title.length-40);
    }
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
return JSON.stringify(items);
}
eval(getVar("详情规则"));正文处理();
