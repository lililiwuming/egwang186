[
    {
        "title":"网页类",
        "data":[
            {
                "title":"骚火电影",
                "img":"https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/js3.0/saohuotv.png",
                "分类地址":"https://saohuotv.com/list/#分类#-#PN#.html",
                "首页地址":"https://saohuotv.com/",
                "baseURL":"https://saohuotv.com",
                "rule":{
                    "首页规则":'var 列表=getVar("源码").match(/<li>[\\s]*?<div class="v_img"[\\s\\S]*?<\\/li>/g);var 标题规则=".get(.v_title a).t()";var 地址规则=".get(.v_title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(div.v_note).t()";var NEXTPAGE="";var PREPAGE="";',
                    "筛选数据":'分类+电影=1+电视剧=2+动漫=4+喜剧片=6+爱情片=7+恐怖片=8+动作片=9+科幻片=10+大陆剧=20+TVB=21+韩剧=22+美剧=23+日剧=24',
                    "分类规则":'var 列表=getVar("源码").match(/<li>[\\s]*?<div class="v_img"[\\s\\S]*?<\\/li>/g);var 标题规则=".get(.v_title a).t()";var 地址规则=".get(.v_title a).a(href)";var 图片规则=".get(img).a(data-original)";var 简介规则=".get(div.v_note).t()";if(Number(getVar("PN"))==-1){var page=Number(getVar("PN"))+3;var NEXTPAGE=getVar("前")+page+getVar("后");var PREPAGE="";}else{var page=Number(getVar("PN"))+1;var NEXTPAGE=getVar("前")+page+getVar("后");var PREPAGE="";}',
                    "选集规则":'var 分类=e2Rex(getVar("源码"),".get(ul#play_link)").match(/<li[\\s\\S]*?\\/li>/g);var 线路=e2Rex(getVar("源码"),".get(ul.from_list)").match(/<li[\\s\\S]*?\\/li>/g);var 简介=e2Rex(getVar("源码"),".get(p.p_txt)");var 列表规则=".get(a)";var 标题规则=".get(li).t()";var 选集规则=".get(a).t()";var 选集地址规则=".get(a).a(href)";',
                    "免嗅探规则":'js="web="+getVar("url");'
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
                "分类地址":"",
                "首页地址":"",
                "rule":{
                    "首页规则":'',
                    "筛选数据":'',
                    "分类规则":'',
                    "选集规则":'',
                    "免嗅探规则":''
                }

            }
        ]
    }
]