######远程订阅写入本地1
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'), '.dn64()'));
var filename = '资源采集远程索引.txt';
var 记录 = "";
if (getVar("rurl") != 'null' && getVar("rurl").indexOf(",http") > 1) {
  记录 = getVar("rurl").match(/.+?,http.+/g);
  if (_.read(filename)) {
    var 旧记录 = _.read(filename).match(/.+?,http.+/g);
    var 新记录 = 记录.concat(旧记录);
  } else {
    var 新记录 = 记录;
  }
  _.write(新记录.join("\n"), filename);
  _.read(filename);
} else {
  "请输入正确格式(支持批量):名称,地址";
}
######读取远程订阅2
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'), '.dn64()'));
var filename = '资源采集远程索引.txt';
if (_.read(filename)) {
  var code = _.read(filename).match(/.+?,.+/g);
} else {
  var data = "内置,https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/zywcj/资源网采集.txt";
  _.write(data, filename);
  var code = _.read(filename).match(/.+?,.+/g);
}
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:资源采集首页?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######单一搜索读取远程订阅3
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'), '.dn64()'));
var filename = '资源采集远程索引.txt';
var code = _.read(filename).match(/.+?,.+/g);
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:单一搜索?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######侧边栏搜索读取远程订阅4
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'), '.dn64()'));
var filename = '资源采集远程索引.txt';
var code = _.read(filename).match(/.+?,.+/g);
var items = [];
for (var i in code) {
  var title = code[i].split(",")[0];
  var url = "q:侧边栏引导?url=远程$$" + code[i].split(",")[1];
  items.push({ title: title, url: url });
}
JSON.stringify(items);
######管理订阅5
eval(e2Rex(getHttp('https://egwang186.coding.net/p/egwang186/d/iptv/git/raw/master/aliyun/QJS.js'),'.dn64()'));
var filename='资源采集远程索引.txt';
var code=_.read(filename).match(/.+?,.+/g);
var items=[];
for(var i in code){
var title=code[i].split(",")[0];
var url="q:管理订阅按钮?url="+code[i];
items.push({title:title,url:url});
}
JSON.stringify(items);
