[
    {
        "title":"网页类",
        "data":[
            {
                "title":"骚火电影",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/saohuotv.png",
                "分类地址":'getVar("baseURL")+"/list/分类-翻页.html";',
                "首页地址":'getVar("baseURL")+"/";',
                "baseURL":'"https://saohuo.vip";',
                "rule":{
                    "首页规则":'var 列表=getVar("源码").match(/<li>[\\s]*?<div class="v_img"[\\s\\S]*?<\\/li>/g);var 标题规则=".get(.v_title a).t()";var 地址规则=".get(.v_title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(div.v_note).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'var a="分类+电影=1+电视剧=2+动漫=4+喜剧片=6+爱情片=7+恐怖片=8+动作片=9+科幻片=10+大陆剧=20+TVB=21+韩剧=22+美剧=23+日剧=24";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\\n"+b;',
                    "分类规则":'var 列表=getVar("源码").match(/<li>[\\s]*?<div class="v_img"[\\s\\S]*?<\\/li>/g);var 标题规则=".get(.v_title a).t()";var 地址规则=".get(.v_title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(div.v_note).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE=baseURL+e2Rex(getVar("源码"),".get(section.page).byt(下一页).a(href)");var PREPAGE="";',
                    "选集规则":'var 分类=e2Rex(getVar("源码"),".get(ul#play_link)").match(/<li[\\s\\S]*?\\/li>/g);var 线路=e2Rex(getVar("源码"),".get(ul.from_list)").match(/<li[\\s\\S]*?\\/li>/g);var 简介=e2Rex(getVar("源码"),".get(p.p_txt)");var 列表规则=".get(a)";var 标题规则=".get(li).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/search.php?searchword="+getVar("KEY");var 源码=getHttp(URL);var 列表=源码.match(/<li>[\\s]*?<div class="v_img[\\s\\S]*?<\\/li>/g);var 标题规则=".get(.v_title a).t()";var 地址规则=".get(.v_title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(div.v_note).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'"web="+getVar("url");'
                }
            },
            {
                "title":"555电影",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/555dy.png",
                "分类地址":'getVar("baseURL")+"/vodshow/分类-----翻页---.html";',
                "首页地址":'getVar("baseURL")+"/";',
                "baseURL":'"https://www.555dy1.com";',
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(ul.myui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'var a="分类+电影=1---+电视剧=2---+福利=124---+动漫=4---+Netflix电影=1---Netflix+Netflix剧=2---Netflix+剧情片=1---剧情+科幻片=1---科幻+动作片=1---动作+喜剧片=1---喜剧+爱情片=1---爱情+大陆剧=2-大陆--+香港剧=2-香港--+韩剧=2-韩国--+美剧=2-美国--+日剧=2-日本--";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\\n"+b;',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(ul.myui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE=baseURL+e2Rex(getVar("源码"),".get(ul.myui-page).byt(下一页).a(href)");var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(ul[class~=.*?ui-content__.*?list])");var 线路=e2Arr(getVar("源码"),".get(ul.nav.nav-tabs li)");var 简介=e2Rex(getVar("源码"),".get(div[class~=.*?ui-content__detail]).t().c().get(div.col-pd.text-collapse.content).t()");var 列表规则=".get(li)";var 标题规则=".get(a).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/index.php/ajax/suggest?mid=1&limit=10&wd="+getVar("KEY");var 源码=getHttp(URL);var 列表=e2Arr(源码,".json(list)");var 标题规则=".json(name)";var 地址规则=".c(/voddetail/).json(id).ct(.html)";var 图片规则=".json(pic)";var 简介规则=".json(name)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'"web="+getVar("url");'
                }
            },
            {
                "title":"1080迷",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/1080mi.png",
                "分类地址":'getVar("baseURL")+"/v_type/分类-翻页.html";',
                "首页地址":'getVar("baseURL")+"/";',
                "baseURL":'"https://www.1080mi.com";',
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(div.module-items a.module-item)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'var a="分类+电影=1+电视剧=2+综艺=3+动漫=4+动作片=6+喜剧片=7+爱情片=8+科幻片=9+恐怖片=10+剧情片=11+国产剧=13+港台剧=14+日韩剧=15+欧美剧=16";var b="翻页+第1页=1";a+"\\n"+b;',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(div.module-items a.module-item)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(div.module-play-list)");var 简介=e2Rex(getVar("源码"),".get(div.module-info-main)");var 线路=e2Arr(getVar("源码"),".get(.module-tab-item.tab-item)");var 列表规则=".get(a)";var 标题规则=".t()";var 选集规则=".t()";var 选集地址规则=".a(href)";',
                    "搜索规则":'var URL=baseURL+"/v_search/-------------.html?wd="+getVar("KEY");var 源码=getHttp(URL);var 列表=e2Arr(源码,".get(div.module-card-item)");var 标题规则=".get(div.module-card-item-title a).t()";var 地址规则=".get(div.module-card-item-title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'"web="+getVar("url");'
                }
            },
            {
                "title":"哔嘀影视",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/bidiys.png",
                "分类地址":'getVar("baseURL")+"/vodshow-分类--------翻页---.html";',
                "首页地址":'getVar("baseURL")+"/";',
                "baseURL":'"https://bidiys.cc";',
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(div.module-item)");var 标题规则=".get(div.video-name a).t()";var 地址规则=".get(div.video-name a).a(href)";var 图片规则=".get(img).a(data-src)";var 简介规则=".get(div.module-item-text).t().c().get(span).st().t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'var a="分类+南瓜电影=nanguady+4K专区=huiyuanzhuanqu+电影=dianying+连续剧=lianxuju+动漫=dongman+综艺=zongyi+剧情片=juqingpian+科幻片=kehuanpian+动作片=dongzuopian+喜剧片=xijupian+爱情片=aiqingpian+国产剧=guochanju+日韩剧=rihanju+港台剧=gangtaiju+欧美剧=oumeiju";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\\n"+b;',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(div.module-item)");var 标题规则=".get(div.video-name a).t()";var 地址规则=".get(div.video-name a).a(href)";var 图片规则=".get(img).a(data-src)";var 简介规则=".get(div.module-item-text).t().c().get(span).st().t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE=baseURL+e2Rex(getVar("源码"),".get(div#page).byt(下一页).a(href)");var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(div.sort-item)");var 线路=e2Arr(getVar("源码"),".get(.module-tab-item.tab-item)");var 简介=e2Rex(getVar("源码"),".get(div.video-info-main).t()");var 列表规则=".get(a)";var 标题规则=".t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/vodsearch--------------.html?wd="+getVar("KEY");var 源码=getHttp(URL);var 列表=e2Arr(源码,".get(div.module-search-item)");var 标题规则=".get(h3 a).t()";var 地址规则=".get(h3 a).a(href)";var 图片规则=".get(img).a(data-src)";var 简介规则=".get(div.video-info-header).t().c().get(div.video-info-main).t().c().get(div.video-info-items).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'"web="+getVar("url");'
                }
            },
            {
                "title":"剧迷TV",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/gimytv.png",
                "分类地址":'getVar("baseURL")+"/genre/分类---翻页.html";',
                "首页地址":'getVar("baseURL")+"/";',
                "baseURL":'"https://gimytv.app";',
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(ul.myui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'var a="分类+电影=movies+电视剧=tvseries+综艺=tv_show+动漫=anime+剧情片=drama+科幻片=scifi+动作片=action+喜剧片=comedymovie+爱情片=romance+大陆剧=cn+香港剧=hk+韩剧=kr+美剧=us+日剧=jp+台剧=tw";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\\n"+b;',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(ul.myui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE=baseURL+e2Rex(getVar("源码"),".get(ul.myui-page).byt(下一).a(href)");var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(ul[class~=.*?ui-content__.*?list])");var 线路=getVar("源码").match(/<a class="more sort-[\\s\\S]*?\\/h3>/g);;var 简介=e2Rex(getVar("源码"),".get(div[class~=.*?ui-content__detail]).t().c().get(div.col-pd.text-collapse.content).t()");var 列表规则=".get(li)";var 标题规则=".get(h3).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/search/-------------.html?wd="+getVar("KEY");var 源码=getHttp(URL);var 列表=e2Arr(源码,".get(ul.myui-vodlist__media li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'"web="+getVar("url");'
                }
            },
            {
                "title":"在线之家",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/zxzj.png",
                "分类地址":'getVar("baseURL")+"/list/分类-翻页.html";',
                "首页地址":'getVar("baseURL")+"/";',
                "baseURL":'"https://www.zxzjtv.com";',
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(ul.stui-vodlist li)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(a).a(data-original).ct(@{\\"Referer\\":\\"https://www.zxzjtv.com/\\"})";var 简介规则=".get(span).st().t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'var a="分类+电影=1+动漫=6+韩剧=3+美剧=2+日剧=4+泰剧=5";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\\n"+b;',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(ul.stui-vodlist li)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(a).a(data-original).ct(@{\\"Referer\\":\\"https://www.zxzjtv.com/\\"})";var 简介规则=".get(span).st().t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE=baseURL+e2Rex(getVar("源码"),".get(ul.stui-page__item).byt(下一页).a(href)");var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(ul.stui-content__playlist)");var 线路=e2Arr(getVar("源码"),".get(div.stui-vodlist__head)");var 简介=e2Rex(getVar("源码"),".get(div.stui-content__detail).t()");var 列表规则=".get(li)";var 标题规则=".get(h3).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/vodsearch/-------------.html?wd="+getVar("KEY");var 源码=getHttp(URL);var 列表=e2Arr(源码,".get(ul.stui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'var uu=getVar("url");var resp=JZ(uu);var DATA=e2Rex(resp.code,".ty(player_data=).json(url)");if(DATA.indexOf(".m3u8")!=-1||DATA.indexOf(".mp4")!=-1){JSON.stringify({url:DATA})}else if(DATA.indexOf("zxh.la/zxzj.php?vid=")!=-1){var code=JZ(JSON.stringify({url:DATA,redirect:false}));JSON.stringify({url:code.head.location})}else if(DATA.indexOf("http")!=-1){var code=JZ(JSON.stringify({url:DATA,head:{"Referer":uu}})).code.match(/var url.*?\'(.*?)\'/)[1];code=code.split(\'\').reverse().join(\'\');let temp="";for(let i=0x0;i<code.length;i=i+0x2){temp+=String.fromCharCode(parseInt(code[i]+code[i+0x1],0x10))}var playurl=temp.substring(0x0,(temp.length-0x6)/0x2)+temp.substring((temp.length-0x6)/0x2+0x6);JSON.stringify({url:playurl,head:{"User-Agent":"Mozilla/5.0"}})}else{"web="+uu}'
                }
            },
            {
                "title":"剧白白",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/jubaibai.png",
                "分类地址":'getVar("baseURL")+"/vodshow/id/分类/page/翻页.html";',
                "首页地址":'getVar("baseURL")+"/";',
                "baseURL":'"https://www.jubaibai.cc";',
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(ul.stui-vodlist li)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'var a="分类+电影=dianying+连续剧=dianshiju+动漫=dongman+综艺=zongyi+剧情片=juqingpian+恐怖片=kongbupian+科幻片=kehuanpian+动作片=dongzuopian+喜剧片=xijupian+爱情片=aiqingpian+国产剧=guochanju+日韩剧=rihanju+港台剧=gangtaiju+欧美剧=oumeiju";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\\n"+b;',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(ul.stui-vodlist li)");var 标题规则=".get(a).a(title)";var 地址规则=".get(a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE=baseURL+e2Rex(getVar("源码"),".get(ul.stui-page__item).byt(下一页).a(href)");var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(ul.stui-content__playlist)");var 线路=getVar("源码").match(/<a class="sort-button[\\s\\S]*?\\/h3>/g);;var 简介=e2Rex(getVar("源码"),".get(div.stui-content__detail).t()");var 列表规则=".get(li)";var 标题规则=".get(h3).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/rss?wd="+getVar("KEY");var 源码=getHttp(URL);var 列表=e2Arr(源码,".xml(item)");var 标题规则=".xml(title).t()";var 地址规则=".xml(link).t().z(\\S+)";var 图片规则=".get(a).a(data-original)";var 简介规则=".xml(pubDate).t().c().xml(author).t().xml(description).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'"web="+getVar("url");'
                }
            },
            {
                "title":"Auete影视",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/auete.png",
                "分类地址":'getVar("baseURL")+"/分类/翻页.html";',
                "首页地址":'getVar("baseURL")+"/";',
                "baseURL":'"https://auete.com";',
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(ul.threadlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(img).a(src)";var 简介规则=".get(button).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'var a="分类+电影=Movie+电视剧=Tv+综艺=Zy+动漫=Dm+动作片=Movie/dzp+喜剧片=Movie/xjp+爱情片=Movie/aqp+科幻片=Movie/khp+恐怖片=Movie/kbp+剧情片=Movie/jqp+战争片=Movie/zzp+大陆剧=Tv/neidi+香港剧=Tv/tvbgj+台湾剧=Tv/taiju+日本剧=Tv/riju+韩国剧=Tv/hanju+欧美剧=Tv/oumei";var b="第1页=index";for(var i=2;i<50;i++){b=b+"+第"+i+"页=index"+i;}var b="翻页+"+b;a+"\\n"+b;',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(ul.threadlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(img).a(src)";var 简介规则=".get(button).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(div#player_list)");var 简介=e2Rex(getVar("源码"),".get(div.message).t()");var 线路="";var 列表规则=".get(ul li)";var 标题规则=".get(h2).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/search.php?searchword="+getVar("KEY");var 源码=getHttp(JSON.stringify({url:URL}));var 列表=e2Arr(源码,".get(ul.threadlist li)");var 标题规则=".get(a).t()";var 地址规则=".get(a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(span).st().t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'var uu=getVar("url");var resp=JZ(uu);var script=e2Rex(resp.code,".get(div#video script).t().or().get(div#player script).t()");function base64decode(str){return e2Rex(str,".dn64()")}eval(script);if(pn=="i8i"){JSON.stringify({url:now,head:{"referer":"https://auete.com/js/player/i8i.html","user-agent":"Mozilla/5.0"}})}else if(pn=="m3u8hd"){if(now.indexOf("9yun")!=-1){var b="https://auete.com/api/9yun.php?url="+now.split("9yun")[0];var a=JZ(JSON.stringify({url:b,redirect:false,head:{"User-Agent":"Mozilla/5.0"}}));while(a.head.location||a.head.Location){var finalurl=a.head.location||a.head.Location;if(finalurl.indexOf(".mp4")>40){var a={"head":{"cookie":"ccccc"}}}else{var a=JZ(JSON.stringify({url:finalurl,redirect:false,head:{"User-Agent":"Mozilla/5.0 Android"}}))}}JSON.stringify({url:finalurl})}else{"web="+uu}}else{if(now.indexOf("http")!=-1){JSON.stringify({url:now,head:{"referer":"https://auete.com/js/player/i8i.html","user-agent":"Mozilla/5.0"}})}else{"web="+uu}}'
                }
            },
            {
                "title":"九州影院",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/unss.png",
                "分类地址":'getVar("baseURL")+"/vodtype/分类-翻页.html";',
                "首页地址":'getVar("baseURL")+"/";',
                "baseURL":'"http://www.unss.net";',
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(ul.stui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'var a="分类+电影=1+电视剧=2+综艺=3+动漫=4+动作片=6+喜剧片=7+爱情片=8+科幻片=9+恐怖片=10+剧情片=11+国产剧=13+港台剧=14+日韩剧=15+欧美剧=16";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\\n"+b;',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(ul.stui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(ul[class~=.*?ui-content__.*?list])");var 线路=e2Arr(getVar("源码"),".get(ul.nav.nav-tabs li)");var 简介=e2Rex(getVar("源码"),".get(div[class~=.*?ui-content__detail]).t().c().get(div.col-pd.text-collapse.content).t()");var 列表规则=".get(li)";var 标题规则=".get(a).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/vodsearch/-------------.html?wd="+getVar("KEY");var 源码=getHttp(URL);var 列表=e2Arr(源码,".get(ul.myui-vodlist__media li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'"web="+getVar("url");'
                }
            },
            {
                "title":"影视工场",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/ysgc.png",
                "分类地址":'getVar("baseURL")+"/vodtype/分类-翻页.html";',
                "首页地址":'getVar("baseURL")+"/";',
                "baseURL":'"https://www.ysgc.tv";',
                "rule":{
                    "首页规则":'var 列表=e2Arr(getVar("源码"),".get(ul.myui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'var a="分类+电影=1+电视剧=2+综艺=3+动漫=4+动作片=6+喜剧片=7+爱情片=8+科幻片=9+恐怖片=10+剧情片=11+国产剧=13+港台剧=14+日韩剧=15+欧美剧=16";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\\n"+b;',
                    "分类规则":'var 列表=e2Arr(getVar("源码"),".get(ul.myui-vodlist li)");var 标题规则=".get(.title a).t()";var 地址规则=".get(.title a).a(href)";var 图片规则=".get(a).a(data-original)";var 简介规则=".get(span).st().t().c().get(p).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "选集规则":'var 分类=e2Arr(getVar("源码"),".get(ul[class~=.*?ui-content__.*?list])");var 线路=e2Arr(getVar("源码"),".get(ul.nav.nav-tabs li)");var 简介=e2Rex(getVar("源码"),".get(div[class~=.*?ui-content__detail]).t().c().get(div.col-pd.text-collapse.content).t()");var 列表规则=".get(li)";var 标题规则=".get(a).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "搜索规则":'var URL=baseURL+"/rss.xml?wd="+getVar("KEY");var 源码=getHttp(URL);var 列表=e2Arr(源码,".xml(item)");var 标题规则=".xml(title).t()";var 地址规则=".xml(link).t().z(\\S+)";var 图片规则=".get(a).a(data-original)";var 简介规则=".xml(pubDate).t().c().xml(author).t().xml(description).t()";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'"web="+getVar("url");'
                }
            },
            {
                "title":"虎牙直播",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/huya.png",
                "分类地址":'"https://www.huya.com/cache.php?m=LiveList&do=getLiveListByPage&gameId=分类&tagAll=0&callback=getLiveListJsonpCallback&page=翻页";',
                "首页地址":'"https://live.cdn.huya.com/liveHttpUI/getHomeLiveRecommend?iType=1&ePlatform=1";',
                "baseURL":'"https://m.huya.com";',
                "rule":{
                    "首页规则":'var 列表=getVar("源码").replace(/\\s+/g,"").match(/\\{"lUid"[^\\{]+?sRoomName.+?sRecommendTagName.+?\\}/g);var 标题规则=".json(sRoomName)";var 地址规则=".c(/).json(lProfileRoom)";var 图片规则=".json(sScreenshot)";var 简介规则=".json(sIntroduction)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'var a="分类+全部=+一起看=2135+原神=5489+英雄联盟手游=6203+英雄联盟=1+王者荣耀=2336+和平精英=3203+天天吃鸡=2793+穿越火线=4+棋牌桌游=100036+颜值=2168+交友=4079+放映厅=6245+互动点播=5907+音乐=3793+体育=2356";var b="";for(var i=1;i<50;i++){b=b+"+第"+i+"页="+i;}var b="翻页+"+b;a+"\\n"+b;',
                    "分类规则":'var 列表=e2Arr(getVar("源码").replace(/\\s+/g,""),".z(\\\\{.+).json(data).json(datas)");var 标题规则=".json(roomName)";var 地址规则=".c(/).json(profileRoom)";var 图片规则=".json(screenshot)";var 简介规则=".json(introduction)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "选集规则":'var 标识=e2Rex(getVar("源码"),".ty(HNF_GLOBAL_INIT)").match(/"sStreamName":"(.+?)"/)[1];var 分类=[];var a={};var data=[];data.push({name:"P2p线路",url:"http://txtest-xp2p.p2p.huya.com/src/"+标识+".xs"},{name:"Hw.flv线路",url:"https://hw.flv.huya.com/src/"+标识+".m3u8"},{name:"Txdirect.hls线路",url:"http://36.101.206.161/txdirect.hls.huya.com/src/"+标识+".m3u8"},{name:"Tx.hls线路",url:"http://121.51.249.48/tx.hls.huya.com/src/"+标识+".m3u8"});a.data=data;a.title="线路";分类.push(a);var 分类=e2Arr(JSON.stringify(分类),".json()");var 线路="";var 简介=e2Rex(getVar("name"),".t()");var 列表规则=".json(data)";var 标题规则=".json(title)";var 选集规则=".json(name)";var 选集地址规则=".json(url)";',
                    "搜索规则":'var URL="https://search.cdn.huya.com/?m=Search&do=getSearchContent&q="+getVar("KEY")+"&uid=0&v=4&typ=-5&livestate=0&rows=40";var 源码=getHttp(URL);var 列表=e2Arr(源码,".json(response).json(3).json(docs)");var 标题规则=".json(game_roomName)";var 地址规则=".c(/).json(room_id)";var 图片规则=".json(game_screenshot)";var 简介规则=".json(game_introduction)";var 图片底部规则="";var 左上规则="";var 右上规则="";var NEXTPAGE="";var PREPAGE="";',
                    "免嗅探规则":'JSON.stringify({url:getVar("url")});'
                }
            }
        ]
    },
    {
        "title":"APP类",
        "data":[
            {
                "title":"HG影视",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/HGyingshi.png",
                "分类地址":'getVar("baseURL")+"?ac=list&class=分类&page=翻页";',
                "首页地址":'getVar("baseURL")+"?ac=list&class=&start=&area=&type=&page=1";',
                "baseURL":'"http://api.hgyx.vip/api.php/iptv/vod/";',
                "rule":""
            },
            {
                "title":"聚多影视",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/juduo.png",
                "分类地址":'getVar("baseURL")+"?ac=list&class=分类&page=翻页";',
                "首页地址":'getVar("baseURL")+"?ac=list&class=&start=&area=&type=&page=1";',
                "baseURL":'"http://jdys.weetai.cn/api.php/iptv/vod/";',
                "rule":""
            },
            {
                "title":"大师兄TV",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/dashixiong.png",
                "分类地址":'getVar("baseURL")+"?ac=list&class=分类&page=翻页";',
                "首页地址":'getVar("baseURL")+"?ac=list&class=&start=&area=&type=&page=1";',
                "baseURL":'"http://dsxtv.tv.ci/api.php/dsx/vod/";',
                "rule":""
            },
            {
                "title":"飓风影院",
                "img":"https://inmemory.coding.net/p/InMemory/d/MBrowser/git/raw/master/AppFile/AppIcon/飓风影院.png",
                "分类地址":'getVar("baseURL")+"?type=分类&lang=&year=&page=翻页";',
                "首页地址":'getVar("baseURL")+"/vodPhbAll";',
                "baseURL":'"http://yidayy.top/lehailb_api.php/v1.vod";',
                "rule":""
            },
            {
                "title":"奈菲迷",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/naifeimi.png",
                "分类地址":'getVar("baseURL")+"?type=分类&lang=&year=&page=翻页";',
                "首页地址":'getVar("baseURL")+"/vodPhbAll";',
                "baseURL":'"https://app.netflixmi.com/api.php/tv.vod";',
                "rule":""
            },
            {
                "title":"大熊追剧",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/daxiongzhuiju.png",
                "分类地址":'getVar("baseURL")+"?type=分类&lang=&year=&page=翻页";',
                "首页地址":'getVar("baseURL")+"/vodPhbAll";',
                "baseURL":'"https://dxys2233.com/mogai_api.php/v1.vod";',
                "rule":""
            },
            {
                "title":"益达影院",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/yss6080.png",
                "分类地址":'getVar("baseURL")+"?type=分类&lang=&year=&page=翻页";',
                "首页地址":'getVar("baseURL")+"/vodPhbAll";',
                "baseURL":'"http://luobu.yss6080.com/mogai_api.php/v1.vod";',
                "rule":""
            },
            {
                "title":"片多儿影视",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/meinaikang.png",
                "分类地址":'getVar("baseURL")+"?type=分类&lang=&year=&page=翻页";',
                "首页地址":'getVar("baseURL")+"/vodPhbAll";',
                "baseURL":'"http://221.236.18.12:665/api.php/v1.vod";',
                "rule":""
            },
            {
                "title":"苍蓝4K",
                "url":"https://vip.ruifenglb.com:4433/api.php/app/index_video?token=",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/ruifeng.png",
                "分类地址":'getVar("baseURL")+"video?tid=分类&lang=&year=&pg=翻页";',
                "首页地址":'getVar("baseURL")+"index_video?token=";',
                "baseURL":'"https://vip.ruifenglb.com:4433/api.php/app/";',
                "rule":""
            },
            {
                "title":"天空影视",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/tkys.png",
                "分类地址":'getVar("baseURL")+"video?tid=分类&lang=&year=&pg=翻页";',
                "首页地址":'getVar("baseURL")+"index_video?token=";',
                "baseURL":'"https://www.tkys.tv/xgapp.php/v2/";',
                "rule":""
            },
            {
                "title":"影视达人",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/vipmv.png",
                "分类地址":'getVar("baseURL")+"?type=分类&lang=&year=&page=翻页";',
                "首页地址":'getVar("baseURL")+"/vodPhbAll";',
                "baseURL":'"http://www.ysdr.vip/api.php/v1.vod";',
                "rule":""
            }
        ]
    }
]
