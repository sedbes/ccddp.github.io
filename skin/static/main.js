/* common vars 
 * post in body
 */
var prefix = '';
var currurl = window.location.href;
var currhost = window.location.host;
var prefixs = ["/en_tc_dict/", "/en_cn_exam/", "/en_cn_blog/", "/en_tc_blog/"];
if (currurl.substr(currurl.lastIndexOf('/')) != '/') {
    var uriarr = window.location.href.replace(/.+\/([^/]+)\.html.*/, "$1").split("-");
    var post = uriarr[0];
    var category = uriarr[1];
}
var post = post ? post : 0;
var category = category ? category : 0;
var hostDefaultPrefixs = {
    "www.ppbbu.com": "/en_cn_dict/"
};
for (var i in prefixs) {
    if (currurl.indexOf(prefixs[i]) !== -1) {
        prefix = prefixs[i];
        break;
    }
}
if (prefix == '' &&
    hostDefaultPrefixs.hasOwnProperty(currhost)) {
    prefix = hostDefaultPrefixs[currhost];
}
/* mobile nav hide or open */
function hide_open() {
    var sp = document.getElementsByClassName("nav")[0].classList;
    var dw = document.body.clientWidth;
    if (dw < 720) {
        if (!sp.contains("fixed")) {
            sp.add("fixed");
        } else {
            sp.remove("fixed");
        }
    }
}
function hide_open_init() {
    var dw = document.body.clientWidth;
    if (dw <= 720) {
        var lm = document.createElement("div");
        lm.className = "module";
        lm.addEventListener("click", function (e) {
            hide_open();
        });
        document.body.appendChild(lm);
    }
    return 1;
}
/* h2 navigator in part */
function h_nav_float() {
    var nav = document.createElement("div");
    nav.className = "nav";
    nav.innerHTML = '<a href="#">回到顶部</a>';
    var h = 0;
    var hs = 0;

    var parts = document.getElementsByTagName("article");
    for (var i = 0; i < parts.length; i++) {
        var h2 = parts[i].getElementsByTagName("h2");
        for (var j = 0; j < h2.length; j++) {
            var content = h2[j].innerText;
            var markid = "mark-" + i.toString() + "-" + j.toString();
            h2[j].id = markid;
            var a = document.createElement("a");
            a.innerText = content;
            a.href = "#" + markid;
            nav.appendChild(a);
            h++;
            hs = 1;
        }
    }
    nav.style.maxHeight = (h * 23 + 10).toString() + "px";
    document.getElementsByTagName("article")[0].before(nav);
    return hs;
}
/* mob nav ico fixed */
function fixed(nav, fixed) {
    var fixedClassList = document.getElementsByClassName(nav)[0].classList;
    var title = document.getElementsByClassName("page-title")[0];
    var titleClientRect = title.getBoundingClientRect();
    if ((titleClientRect.top - titleClientRect.height) < -400) {
        if (!fixedClassList.contains(fixed)) {
            fixedClassList.add(fixed);
            document.querySelector('article').style.marginTop = '5em';
        }
    } else {
        if (fixedClassList.contains(fixed)) {
            fixedClassList.remove(fixed);
            document.querySelector('article').style.marginTop = '0';
        }
    }
}
function nav_ico_fixed() {
    var dw = document.body.clientWidth;
    if (dw > 720) {
        fixed("nav", "fixed");
    } else {
        fixed("module", "fixed2");
        var fixedClassList = document.getElementsByClassName("nav")[0].classList;
        if (fixedClassList.contains("fixed")) {
            fixedClassList.remove("fixed");
        }
    }
    return 1;
}
function fixed_init() {
    nav_ico_fixed();
    //监听滚动事件
    window.onscroll = function () {
        nav_ico_fixed();
    }
    return 1;
}
/* search */
function so() {
    var a = document.getElementById("s").value;
    if (a == '输入一个搜索词')
        return;
    a = a.replace(/^\s+|\s+$/g, "");
    var newuri = prefix + '--' + encodeURI(a) + '-.html';
    if (prefix == "")
        newuri = 'https://www.baidu.com/s?ie=utf-8&wd=' + a;
    window.location.href = newuri;
    window.event.returnValue = false;
}
/* record views */
function asnc_hit() {
    var xhr;
    if (post && prefix) {
        var url = '/static/click.php?host=' + currhost + '&prefix=' + prefix + '&post=' + post;
        try {
            xhr = new XMLHttpRequest();
        }
        catch (E) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.open("get", url, true);
        xhr.send(null);
    }
}
function zh_btn_init() {
    var zh_st = document.getElementById('zh_st');
    var children = zh_st.getElementsByTagName('a');
    if (['/en_cn_dict/', '/en_cn_blog/'].includes(prefix)) children[0].classList.add('current');
    if (['/en_tc_dict/', '/en_tc_blog/'].includes(prefix)) children[1].classList.add('current');
}
//创建ajax函数
function ajax(options) {
    options = options || {};
    options.type = (options.type || 'GET').toUpperCase();
    options.dataType = options.dataType || 'json';
    params = formatParams(options.data);

    //创建-第一步
    var xhr;
    //非IE6
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        //ie6及其以下版本浏览器
        xhr = ActiveXObject('Microsoft.XMLHTTP');
    }

    //接收-第三步
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.error && options.error(status);
            }
        }
    }

    //连接和发送-第二步
    if (options.type == 'GET') {
        xhr.open('GET', options.url + '?' + params, true);
        xhr.send(null);
    } else if (options.type == 'POST') {
        xhr.open('POST', options.url, true);
        //设置表单提交时的内容类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
}
//格式化POST参数
function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
    }
    arr.push('v=' + Date.now());
    return arr.join('&');
}
//广告轮播
function gg_lunbo_init() {
    var imgobj = document.createElement("img");
    imgobj.setAttribute("class", "fd-wd-h");
    imgobj.setAttribute("width", "480px");
    var g_lunbo = document.getElementsByClassName("_lunbo")[0];
    g_lunbo.insertBefore(imgobj, g_lunbo.childNodes[0]);
    var g_lb_index = 0;
    var g_lb_imgs = [];
    var g_lb_href = [];
    var gg_lunbo = function () {
        if (g_lb_index == g_lb_imgs.length) {
            g_lb_index = 0;
        }
        imgobj.setAttribute("src", g_lb_imgs[g_lb_index]);
        imgobj.setAttribute('onclick', 'javascript:window.location.href="' + g_lb_href[g_lb_index] + '"');
        setTimeout(gg_lunbo, 5000);
        g_lb_index++;
    }
    //get ad data
    ajax({
        url: '/static/acd/acdata.json',
        type: 'GET',
        dataType: 'json',
        data: null,
        success: function (response, xml) {
            //请求成功后执行的代码
            var jsn2arr = JSON.parse(response);
            g_lb_imgs = jsn2arr['imgs'];
            g_lb_href = jsn2arr['href'];
            gg_lunbo();
        },
        error: function (status) { }
    });
    return 1;
}
/* 广告 */
function gg_baidu() {
    (window.slotbydup = window.slotbydup || []).push({ id: "u6511481", container: "_rl1", async: true });//left
    (window.slotbydup = window.slotbydup || []).push({ id: "u6511481", container: "_rbil2", async: true });//left
    (window.slotbydup = window.slotbydup || []).push({ id: "u6742196", container: "_rl2", async: true });//right
    (window.slotbydup = window.slotbydup || []).push({ id: "u6765195", container: "_rl3", async: true });//left
    (window.slotbydup = window.slotbydup || []).push({ id: "u6765199", container: "_rl4", async: true });//right
    (window.slotbydup = window.slotbydup || []).push({ id: "u6742196", container: "_kpe9", async: true });//right

    var hm = document.createElement("script");
    hm.setAttribute("type", "text/javascript");
    hm.setAttribute("async", "async");
    hm.setAttribute("defer", "defer");
    hm.src = "//cpro.baidustatic.com/cpro/ui/cm.js";
    var s = document.getElementsByTagName("body")[0];
    s.appendChild(hm, s);
}
/* tongji */
function tongji() {
    window._hmt = window._hmt || [];
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?3253aca5f815849b185d7a95b6c357b4";
    var s = document.getElementsByTagName("body")[0];
    s.appendChild(hm, s);
}
/* onloaded do */
function init() {
    post && (currhost == "www.ppbbu.com") && h_nav_float() && hide_open_init() && fixed_init();
    zh_btn_init();
    // gg_baidu();
    tongji();
    asnc_hit();
}

document.addEventListener && document.addEventListener("DOMContentLoaded", init, false);
