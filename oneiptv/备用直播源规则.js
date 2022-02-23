######备用数据1
{"data":[{
    "title":"六维TV",
    "rule":{
        "分类":'var a=getHttp(JSON.stringify({url:"http://www.liuweidianshi.ml/m.php"}));for(var i in a){a[i].title=a[i].info.name+a[i].info.cat_num;a[i].url="http://ip111.cn/?pg=#PN#";}JSON.stringify(a);',
        "选集规则":'var 列表=e2Arr(getVar("CODE"),".json(data)");var 地址规则=".json(key)";var 标题规则=".json(title)";var 图片规则=".json(tok)";var 简介规则=".json(des)";var NEXTPAGE="";var PREPAGE="";',
        "免嗅探规则":'var 正文=e2Rex(getVar("CODE"),".json(title).c(链接:https://www.aliyundrive.com/s/).json(url).c().json(detail)");'
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
