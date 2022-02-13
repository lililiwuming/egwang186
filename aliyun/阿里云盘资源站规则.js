######首页1
{"data":[{
    "title":"阿里大站",
    "rule":{
        "分类":'var a="影视$https://pan.3636360.com/api/v3/thread.list?perPage=10&page=#PN#&filter[categoryids][0]=1&filter[essence]=$$动漫$https://pan.3636360.com/api/v3/thread.list?perPage=10&page=#PN#&filter[categoryids][0]=7&filter[essence]=$$音乐$https://pan.3636360.com/api/v3/thread.list?perPage=10&page=#PN#&filter[categoryids][0]=2&filter[essence]=";var b="全部$0&filter[attention]=0&filter[sort]=1&scope=0$$推荐$0&filter[attention]=0&filter[sort]=1&scope=1$$精华$1&filter[attention]=0&filter[sort]=1&scope=0$$评论时间$0&filter[attention]=0&filter[sort]=2&scope=0$$热门内容$0&filter[attention]=0&filter[sort]=3&scope=0";a=a.split("$$");b=b.split("$$");var items=[];for(var i in a){var az=a[i].split("$")[0];var ay=a[i].split("$")[1];for(var j in b){var bz=b[j].split("$")[0];var by=b[j].split("$")[1];items.push({title:az+"-"+bz,url:ay+by});}}JSON.stringify(items);',
        "列表规则":'var 列表=e2Arr(getCode(),".json(Data).json(pageData)");var 地址规则=".json(threadId)";var 标题规则=".json(updatedAt).c(更新于).json(diffTime).c(标题:).json(title)";var 图片规则=".json(user).json(avatar)";var 简介规则=".json(content).json(text)";',
        "详情规则":'var 正文=e2Rex(getVar("CODE"),".json(detail)");'
    }
},{
    "title":"阿里小纸条",
    "rule":{
        "分类":'var a=JSON.parse(getHttp(JSON.stringify({url:"https://yunluo.oss-cn-shanghai.aliyuncs.com/alipaper/data.json"})));for(var i in a){var a[i].title=a[i].info.name+a[i].info.cat_num;var a[i].url=a[i].info.code;}JSON.stringify(a);',
        "列表规则":'var 列表=e2Arr(getVar("CODE"),".json(data)");var 地址规则=".json(key)";var 标题规则=".json(title)";var 图片规则=".json(tok)";var 简介规则=".json(des)";',
        "详情规则":'var 正文=e2Rex(getVar("CODE"),".json(title).c(链接:https://www.aliyundrive.com/s/).json(key)");'
    }
}
]
}
######普通列表
var NEXTPAGE=Number(getVar("PN"))+1;
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
    res.nextpage=getVar("前")+NEXTPAGE+getVar("后");
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
    var url="q:ROOT?url=share_id-"+share_id+"$$root$$"+pwd;
    items.push({name:title,url:url,detail:url});
}
return JSON.stringify(items);
}
eval(getVar("详情规则"));正文处理();
