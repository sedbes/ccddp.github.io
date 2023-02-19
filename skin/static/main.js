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
    if (id && classid) {
        var hit = document.createElement("script");
        hit.src = 'http://47.102.105.15/e/public/onclick/?enews=donews&classid=' + classid + '&id=' + id + '&timstamp=' + Date.now();
        var s = document.getElementsByTagName("body")[0];
        s.appendChild(hit, s);
    }
}
//阅读更多
function readmore() {
    var cnt = document.getElementsByClassName('pull-yuedu')[0];
    var cntheight = cnt.clientHeight * 0.2;
    cnt.style.height = cntheight.toString() + 'px';
    var rmo = document.getElementsByClassName('rmo')[0];
    rmo.classList.add('readmore');
    var rdm = document.getElementsByClassName('rmo')[0];
    rdm.innerHTML = '<div class="rmo-btn">展开剩余 &darr;&darr;&darr;</div>';
    rdm.onclick = function () {
        cnt.style.height = "auto";
        cnt.style.display = "block";
        rdm.style.display = 'none';
    };
}
//樊登读书7天免费
function gg_fandeng() {
    var img = document.createElement("img");
    img.setAttribute("class", "fd-wd-h");
    img.setAttribute("src", "/skin/static/fandeng.jpg");
    var c = document.getElementsByClassName("_fsr2")[0];
    c.appendChild(img, c);
}
/* tongji */
function tongji() {
    window._hmt = window._hmt || [];
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?7dfbd278984a2fe97d0e11a4791fe4b5";
    var s = document.getElementsByTagName("body")[0];
    s.appendChild(hm, s);
}
/* onloaded do */
function init() {
    readmore();
    gg_fandeng();
    tongji();
    asnc_hit();
}

document.addEventListener && document.addEventListener("DOMContentLoaded", init, false);
