[
    {
        "title":"网页类",
        "data":[
            {
                "title":"骚火电影",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/saohuotv.png",
                "分类地址":"https://saohuotv.com/list/分类-1.html",
                "首页地址":"https://saohuotv.com/",
                "baseURL":"https://saohuotv.com",
                "rule":{
                    "首页规则":'var 列表=getVar("源码").match(/<li>[\\s]*?<div class="v_img"[\\s\\S]*?<\\/li>/g);var 标题规则=".get(.v_title a).t()";var 地址规则=".get(.v_title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(div.v_note).t()";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'分类+电影=1+电视剧=2+动漫=4+喜剧片=6+爱情片=7+恐怖片=8+动作片=9+科幻片=10+大陆剧=20+TVB=21+韩剧=22+美剧=23+日剧=24',
                    "分类规则":'var 列表=getVar("源码").match(/<li>[\\s]*?<div class="v_img"[\\s\\S]*?<\\/li>/g);var 标题规则=".get(.v_title a).t()";var 地址规则=".get(.v_title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(div.v_note).t()";var NEXTPAGE=baseURL+e2Rex(getVar("源码"),".get(section.page).byt(下一页).a(href)");var PREPAGE="";',
                    "选集规则":'var 分类=e2Rex(getVar("源码"),".get(ul#play_link)").match(/<li[\\s\\S]*?\\/li>/g);var 线路=e2Rex(getVar("源码"),".get(ul.from_list)").match(/<li[\\s\\S]*?\\/li>/g);var 简介=e2Rex(getVar("源码"),".get(p.p_txt)");var 列表规则=".get(a)";var 标题规则=".get(li).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/search.php?searchword="+getVar("KEY");var 源码=getHttp(URL);var 列表=源码.match(/<li>[\\s]*?<div class="v_img[\\s\\S]*?<\\/li>/g);var 标题规则=".get(.v_title a).t()";var 地址规则=".get(.v_title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(div.v_note).t()";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'"web="+getVar("url");'
                }
            },
            {
                "title":"555电影",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/555dy.png",
                "分类地址":"https://www.555dy1.com/vodshow/分类-----1---.html",
                "首页地址":"https://www.555dy1.com/",
                "baseURL":"https://www.555dy1.com",
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(ul.myui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'分类+电影=1---+电视剧=2---+福利=124---+动漫=4---+Netflix电影=1---Netflix+Netflix剧=2---Netflix+剧情片=1---剧情+科幻片=1---科幻+动作片=1---动作+喜剧片=1---喜剧+爱情片=1---爱情+大陆剧=2-大陆--+香港剧=2-香港--+韩剧=2-韩国--+美剧=2-美国--+日剧=2-日本--',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(ul.myui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var NEXTPAGE=baseURL+e2Rex(getVar("源码"),".get(ul.myui-page).byt(下一页).a(href)");var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(ul[class~=.*?ui-content__.*?list])");var 线路=e2Arr(getVar("源码"),".get(ul.nav.nav-tabs li)");var 简介=e2Rex(getVar("源码"),".get(div[class~=.*?ui-content__detail]).t().c().get(div.col-pd.text-collapse.content).t()");var 列表规则=".get(li)";var 标题规则=".get(a).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/index.php/ajax/suggest?mid=1&limit=10&wd="+getVar("KEY");var 源码=getHttp(URL);var 列表=e2Arr(源码,".json(list)");var 标题规则=".json(name)";var 地址规则=".c(/voddetail/).json(id).ct(.html)";var 图片规则=".json(pic)";var 简介规则=".json(name)";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'"web="+getVar("url");'
                }
            },
            {
                "title":"哔嘀影视",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/bidiys.png",
                "分类地址":"https://bidiys.cc/vodshow-分类--------1---.html",
                "首页地址":"https://bidiys.cc/",
                "baseURL":"https://bidiys.cc",
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(div.module-item)");var 标题规则=".get(div.video-name a).t()";var 地址规则=".get(div.video-name a).a(href)";var 图片规则=".get(img).a(data-src)";var 简介规则=".get(div.module-item-text).t().c().get(span).st().t()";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'分类+南瓜电影=nanguady+4K专区=huiyuanzhuanqu+电影=dianying+连续剧=lianxuju+动漫=dongman+综艺=zongyi+剧情片=juqingpian+科幻片=kehuanpian+动作片=dongzuopian+喜剧片=xijupian+爱情片=aiqingpian+国产剧=guochanju+日韩剧=rihanju+港台剧=gangtaiju+欧美剧=oumeiju',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(div.module-item)");var 标题规则=".get(div.video-name a).t()";var 地址规则=".get(div.video-name a).a(href)";var 图片规则=".get(img).a(data-src)";var 简介规则=".get(div.module-item-text).t().c().get(span).st().t()";var NEXTPAGE=baseURL+e2Rex(getVar("源码"),".get(div#page).byt(下一页).a(href)");var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(ul[class~=.*?ui-content__.*?list])");var 线路=e2Arr(getVar("源码"),".get(ul.nav.nav-tabs li)");var 简介=e2Rex(getVar("源码"),".get(div[class~=.*?ui-content__detail]).t().c().get(div.col-pd.text-collapse.content).t()");var 列表规则=".get(li)";var 标题规则=".get(a).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/vodsearch--------------.html?wd="+getVar("KEY");var 源码=getHttp(URL);var 列表=e2Arr(源码,".get(div.module-search-item)");var 标题规则=".get(h3 a).t()";var 地址规则=".get(h3 a).a(href)";var 图片规则=".get(img).a(data-src)";var 简介规则=".get(div.video-info-header).t().c().get(div.video-info-main).t().c().get(div.video-info-items).t()";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'"web="+getVar("url");'
                }
            },
            {
                "title":"1080迷",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/1080mi.png",
                "分类地址":"https://www.1080mi.com/v_type/分类-1.html",
                "首页地址":"https://www.1080mi.com/",
                "baseURL":"https://www.1080mi.com",
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(div.module-items a.module-item)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'分类+电影=1+电视剧=2+综艺=3+动漫=4+动作片=6+喜剧片=7+爱情片=8+科幻片=9+恐怖片=10+剧情片=11+国产剧=13+港台剧=14+日韩剧=15+欧美剧=16',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(div.module-items a.module-item)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var NEXTPAGE="";var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(div.module-play-list)");var 简介=e2Rex(getVar("源码"),".get(div.module-info-main)");var 线路=e2Arr(getVar("源码"),".get(.module-tab-item.tab-item)");var 列表规则=".get(a)";var 标题规则=".t()";var 选集规则=".t()";var 选集地址规则=".a(href)";',
                    "搜索规则":'var URL=baseURL+"/v_search/-------------.html?wd="+getVar("KEY");var 源码=getHttp(URL);var 列表=e2Arr(源码,".get(div.module-card-item)");var 标题规则=".get(div.module-card-item-title a).t()";var 地址规则=".get(div.module-card-item-title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'"web="+getVar("url");'
                }
            },
            {
                "title":"剧迷TV",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/gimytv.png",
                "分类地址":"https://gimytv.com/genre/分类---1.html",
                "首页地址":"https://gimytv.com/",
                "baseURL":"https://gimytv.com",
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(ul.myui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'分类+电影=movies---+电视剧=tvseries---+综艺=tv_show---+动漫=anime---+剧情片=drama+科幻片=scifi+动作片=action+喜剧片=comedymovie+爱情片=romance+大陆剧=cn+香港剧=hk+韩剧=kr+美剧=us+日剧=jp+台剧=tw',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(ul.myui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var NEXTPAGE=baseURL+e2Rex(getVar("源码"),".get(ul.myui-page).byt(下一).a(href)");var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(ul[class~=.*?ui-content__.*?list])");var 线路=getVar("源码").match(/<a class="more sort-[\\s\\S]*?\\/h3>/g);;var 简介=e2Rex(getVar("源码"),".get(div[class~=.*?ui-content__detail]).t().c().get(div.col-pd.text-collapse.content).t()");var 列表规则=".get(li)";var 标题规则=".get(h3).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/search/-------------.html?wd="+getVar("KEY");var 源码=getHttp(URL);var 列表=e2Arr(源码,".get(ul.myui-vodlist__media li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'"web="+getVar("url");'
                }
            },
            {
                "title":"在线之家",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/zxzj.png",
                "分类地址":"https://www.zxzjtv.com/list/分类-1.html",
                "首页地址":"https://www.zxzjtv.com/",
                "baseURL":"https://www.zxzjtv.com",
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(ul.stui-vodlist li)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t()";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'分类+电影=1+动漫=6+韩剧=3+美剧=2+日剧=4+泰剧=5',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(ul.stui-vodlist li)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t()";var NEXTPAGE=baseURL+e2Rex(getVar("源码"),".get(ul.stui-page__item).byt(下一页).a(href)");var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(ul.stui-content__playlist)");var 线路=e2Arr(getVar("源码"),".get(div.stui-vodlist__head)");var 简介=e2Rex(getVar("源码"),".get(div.stui-content__detail).t()");var 列表规则=".get(li)";var 标题规则=".get(h3).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/vodsearch/-------------.html?wd="+getVar("KEY");var 源码=getHttp(URL);var 列表=e2Arr(源码,".get(ul.stui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t()";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'var uu=getVar("url");var resp=JZ(uu);var DATA=e2Rex(resp.code,".ty(player_data=).json(url)");if(DATA.indexOf(".m3u8")!=-1||DATA.indexOf(".mp4")!=-1){JSON.stringify({url:DATA})}else if(DATA.indexOf("zxh.la/zxzj.php?vid=")!=-1){var code=JZ(JSON.stringify({url:DATA,redirect:false}));JSON.stringify({url:code.head.location})}else if(DATA.indexOf("http")!=-1){var code=JZ(JSON.stringify({url:DATA,head:{"Referer":uu}})).code.match(/var url.*?\'(.*?)\'/)[1];code=code.split(\'\').reverse().join(\'\');let temp="";for(let i=0x0;i<code.length;i=i+0x2){temp+=String.fromCharCode(parseInt(code[i]+code[i+0x1],0x10))}var playurl=temp.substring(0x0,(temp.length-0x6)/0x2)+temp.substring((temp.length-0x6)/0x2+0x6);JSON.stringify({url:playurl,head:{"User-Agent":"Mozilla/5.0"}})}else{"web="+uu}'
                }
            },
            {
                "title":"剧白白",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/jubaibai.png",
                "分类地址":"https://www.jubaibai.cc/vodshow/id/分类/page/1.html",
                "首页地址":"https://www.jubaibai.cc/",
                "baseURL":"https://www.jubaibai.cc",
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(ul.stui-vodlist li)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t()";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'分类+电影=dianying+连续剧=dianshiju+动漫=dongman+综艺=zongyi+剧情片=juqingpian+恐怖片=kongbupian+科幻片=kehuanpian+动作片=dongzuopian+喜剧片=xijupian+爱情片=aiqingpian+国产剧=guochanju+日韩剧=rihanju+港台剧=gangtaiju+欧美剧=oumeiju',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(ul.stui-vodlist li)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t()";var NEXTPAGE=baseURL+e2Rex(getVar("源码"),".get(ul.stui-page__item).byt(下一页).a(href)");var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(ul.stui-content__playlist)");var 线路=e2Arr(getVar("源码"),".get(ul.nav.nav-tabs li)");var 简介=e2Rex(getVar("源码"),".get(div.stui-content__detail).t()");var 列表规则=".get(li)";var 标题规则=".get(a).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/rss?wd="+getVar("KEY");var 源码=getHttp(URL);var 列表=e2Arr(源码,".xml(item)");var 标题规则=".xml(title).t()";var 地址规则=".xml(link).t().z(\\S+)";var 图片规则=".get(a).a(data-original)";var 简介规则=".xml(pubDate).t().c().xml(author).t().xml(description).t()";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'"web="+getVar("url");'
                }
            },
        ]
    },
    {
        "title":"APP类",
        "data":[
            {
                "title":"HG影视",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/HGyingshi.png",
                "分类地址":"",
                "首页地址":"",
                "baseURL":"",
                "rule":{
                    "首页规则":'',
                    "筛选数据":'',
                    "分类规则":'',
                    "选集规则":'',
                    "搜索规则":'',
                    "免嗅探规则":''
                }
            }
        ]
    }
]