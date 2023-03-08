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
    tongji();
}

document.addEventListener && document.addEventListener("DOMContentLoaded", init, false);
