######首页1
{"data":[{
    "title":"阿里大站",
    "img":"",
    "rule":{
        "分类":"影视,https://pan.3636360.com/api/v3/thread.list?perPage=10&page=#PN#&filter[categoryids][0]=1&filter[essence]=#排序#$$动漫,https://pan.3636360.com/api/v3/thread.list?perPage=10&page=#PN#&filter[categoryids][0]=7&filter[essence]=#排序#$$音乐,https://pan.3636360.com/api/v3/thread.list?perPage=10&page=#PN#&filter[categoryids][0]=2&filter[essence]=#排序#",
        "筛选":"排序+全部=0&filter[attention]=0&filter[sort]=1&scope=0+推荐=0&filter[attention]=0&filter[sort]=1&scope=1+精华=1&filter[attention]=0&filter[sort]=1&scope=0+评论时间=0&filter[attention]=0&filter[sort]=2&scope=0+热门内容=0&filter[attention]=0&filter[sort]=3&scope=0",
        "列表规则":'var 列表=e2Arr(getVar("源码"),".json(Data).json(pageData)");var 地址规则=".json(threadId)";var 图片规则=".json(user).json(avatar)";var 简介规则=".json(content).json(text)"',
        "详情规则":'var 列表'
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
    return JSON.stringify(res);
}
eval(getVar("列表规则"));通用列表();
######详情
function 通用列表(){
    var res={};var items=[];
    var LIMIT=列表.length;
    for(var j=0;j<LIMIT;j++){
        var CODE=列表[j];
        var 地址=e2Rex(CODE,地址规则);
        var 标题=e2Rex(CODE,标题规则);
        var 图片=e2Rex(CODE,图片规则);
       items.push({title:标题,url:地址,img:图片});
    }
    res.data=items;
    return JSON.stringify(res);
}
eval(getVar("列表规则"));通用列表();
