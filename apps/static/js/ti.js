/* ajax */
function XMLHttp(url) {
	var XMLHttpReq;
	var response;
	try{
		XMLHttpReq=new XMLHttpRequest();
	}
	catch(E){
		XMLHttpReq=new ActiveXObject("Microsoft.XMLHTTP");
	}
	if (XMLHttpReq!=null){
		XMLHttpReq.open("get", url, false);
		XMLHttpReq.send(null);
		if (XMLHttpReq.readyState == 4 && XMLHttpReq.status == 200) {
			return XMLHttpReq.responseText;
		}else{
			return null;
		}
	}
}
/* more */
function getmore(){
	if (typeof(max)!="undefined" && max>1){
		loading('block');
		var page = Math.ceil(Math.random()*max);
		var url = dir+"/"+ch+"-"+page+".html";
		var data = XMLHttp(url);
	    var start = data.indexOf("<section id=\"main\">") + 19;
	    var length = data.indexOf("</section>") - start;
	    var content = data.substr(start,length).replace(/_src/g,'src');
		if(document.body.clientWidth>480) {
			content = content.replace(/\/thumb\/|\/thumb180\/|\/bmiddle\//g,'/mw600/');
		}
	    var node = document.createElement("div");
		node.innerHTML = content; 
	    document.getElementById('main').appendChild(node);
	    loading('none');
	}
}
/* scroll nav */
var startX = 0, startY = 0;
function touchSatrtFunc(evt) {
    var touch = evt.touches[0];
    var x = Number(touch.pageX);
    var y = Number(touch.pageY);
    startX = x;
    startY = y;
}
function touchMoveFunc(evt) {
    var touch = evt.touches[0];
    var x = Number(touch.pageX);
    var y = Number(touch.pageY);
    var topnav = document.getElementById('topnav');
    if (x - startX != 0) {}
    if (y - startY < 0) {
        topnav.style.position = "static";
        topnav.style.top = "auto";
        topnav.style.left = "auto";
    }else{
        topnav.style.position = "fixed";
        topnav.style.top = "0";
        topnav.style.left = "0";
    }
}
function touchEndFunc(evt) {
    try {}
    catch (e) {}
}
function bindEvent() {
    document.addEventListener('touchstart', touchSatrtFunc, false);
    document.addEventListener('touchmove', touchMoveFunc, false);
    document.addEventListener('touchend', touchEndFunc, false);
}
function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        bindEvent();
    }
    catch (e) {}
}
window.onload = isTouchDevice;
/* shake more */
var status = 0;
if(window.DeviceMotionEvent) {
	var speed = 15;
	var x = y = z = lastX = lastY = lastZ = 0;
	window.addEventListener('devicemotion', function(){
		var acceleration =event.accelerationIncludingGravity;
		x = acceleration.x;
		y = acceleration.y;
		z = acceleration.z;
		if(Math.abs(x-lastX)>speed || Math.abs(y-lastY)>speed || Math.abs(z-lastZ)>speed){
			loading('fixed');
			getmore();
			setTimeout(loading('none'),2000);
		}
		lastX = x;
		lastY = y;
		lastZ = z;
	}, false);
}
function loading(display){
	if (display == 'blcok' || display == 'none'){
		try{
			document.getElementById('loading').style.display = display;
		}
		catch(E){
			var node = document.createElement("div");
			node.innerHTML = '&#x6B63;&#x5728;&#x52A0;&#x8F7D;...'; 
			node.id = 'loading';
			document.getElementById('bnav').appendChild(node);
		}
	}
}

var path = window.document.location.pathname;
var dir = path.substring(0,path.substr(1).indexOf('/')+1);

(function(){
	try{
		if (cp==1){
			document.getElementById('main').innerHTML = '';
			loading('fixed');
			getmore();
			setTimeout(loading('none'),2000);
		}
	}
	catch(E){}
	try{
		var page = Math.ceil(Math.random()*max);
		var next = dir+"/"+ch+"-"+page+".html";
		document.getElementById('nextpage').href = next;
	}
	catch(E){}
	try{
		document.getElementById('rnav').innerHTML = '<a href="/h/?from=t">&#x6027;&#x611F;&#x5A5A;&#x7EB1;</a>';
		document.getElementById('footer').innerHTML = '<div id="more"><div id="shake">&#x6447;&#x4E00;&#x6447;&#x6362;&#x4E00;&#x6279;</div></div></div>';
		var nav = document.getElementById('topnav');
		document.getElementById('bnav').innerHTML = nav.innerHTML;
	}
	catch(E){}
})();
/* badu ads */
(function() {
var _cpro = document.createElement("script");
_cpro.src = "http://cpro.baidustatic.com/cpro/ui/cm.js";
var s = document.getElementsByTagName("script")[0]; 
s.parentNode.insertBefore(_cpro, s);
})();
/* 广告位：悬浮-‎2018‎年‎2月5‎日 */
(function() {
    var s = "_" + Math.random().toString(36).slice(2);
    document.write('<div style="" id="' + s + '"></div>');
    (window.slotbydup = window.slotbydup || []).push({
        id: "u3202246",
        container:  s
    });
})();
/* 图+ 创建于 2019/2/20 */
(function() {
    var s = "_" + Math.random().toString(36).slice(2);
    document.write('<div style="" id="' + s + '"></div>');
    (window.slotbydup = window.slotbydup || []).push({
        id: "u3652974",
        container:  s
    });
})();
/* tongji */
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?395715449795994f234bb0f7bc36a605";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
/* lazy load */
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('(4($){$.L.H=4(t){8 1={d:0,s:0,9:"i",q:"P",3:5};6(t){$.C(1,t)}8 n=c;6("i"==1.9){$(1.3).u("i",4(9){8 K=0;n.G(4(){6(!$.g(c,1)&&!$.l(c,1)){$(c).z("o")}k{6(K++>1.s){h w}}});8 F=$.N(n,4(e){h!e.f});n=$(F)})}h c.G(4(){8 2=c;$(2).b("r",$(2).b("j"));6("i"!=1.9||$.g(2,1)||$.l(2,1)){6(1.B){$(2).b("j",1.B)}k{$(2).O("j")}2.f=w}k{2.f=y}$(2).M("o",4(){6(!c.f){$("<x />").u("Q",4(){$(2).X().b("j",$(2).b("r"))[1.q](1.Z);2.f=y}).b("j",$(2).b("r"))}});6("i"!=1.9){$(2).u(1.9,4(9){6(!2.f){$(2).z("o")}})}})};$.g=4(e,1){6(1.3===I||1.3===5){8 7=$(5).v()+$(5).Y()}k{8 7=$(1.3).m().A+$(1.3).v()}h 7<=$(e).m().A-1.d};$.l=4(e,1){6(1.3===I||1.3===5){8 7=$(5).J()+$(5).11()}k{8 7=$(1.3).m().p+$(1.3).J()}h 7<=$(e).m().p-1.d};$.C($.10[\':\'],{"W-E-7":"$.g(a, {d : 0, 3: 5})","S-E-7":"!$.g(a, {d : 0, 3: 5})","R-D-7":"$.l(a, {d : 0, 3: 5})","p-D-7":"!$.l(a, {d : 0, 3: 5})"})})(T);$(4(){$("x").H({q:"V",s:U})});',62,64,'|settings|self|container|function|window|if|fold|var|event||attr|this|threshold|element|loaded|belowthefold|return|scroll|src|else|rightoffold|offset|elements|appear|left|effect|original|failurelimit|options|bind|height|false|img|true|trigger|top|placeholder|extend|of|the|temp|each|lazyload|undefined|width|counter|fn|one|grep|removeAttr|show|load|right|above|jQuery|30|fadeIn|below|hide|scrollTop|effectspeed|expr|scrollLeft'.split('|'),0,{}));
/* instantclick */
var InstantClick=function(d,e){function w(a){var b=a.indexOf("#");return 0>b?a:a.substr(0,b)}function z(a){for(;a&&"A"!=a.nodeName;)a=a.parentNode;return a}function A(a){var b=e.protocol+"//"+e.host;if(!(b=a.target||a.hasAttribute("download")||0!=a.href.indexOf(b+"/")||-1<a.href.indexOf("#")&&w(a.href)==k)){if(J){a:{do{if(!a.hasAttribute)break;if(a.hasAttribute("data-no-instant"))break;if(a.hasAttribute("data-instant")){a=!0;break a}}while(a=a.parentNode);a=!1}a=!a}else a:{do{if(!a.hasAttribute)break;if(a.hasAttribute("data-instant"))break;if(a.hasAttribute("data-no-instant")){a=!0;break a}}while(a=a.parentNode);a=!1}b=a}return b?!1:!0}function t(a,b,c,g){for(var d=!1,e=0;e<B[a].length;e++)if("receive"==a){var f=B[a][e](b,c,g);f&&("body"in f&&(c=f.body),"title"in f&&(g=f.title),d=f)}else B[a][e](b,c,g);return d}function K(a,b,c,g){d.documentElement.replaceChild(b,d.body);if(c){history.pushState(null,null,c);b=c.indexOf("#");b=-1<b&&d.getElementById(c.substr(b+1));g=0;if(b)for(;b.offsetParent;)g+=b.offsetTop,b=b.offsetParent;scrollTo(0,g);k=w(c)}else scrollTo(0,g);d.title=S&&d.title==a?a+String.fromCharCode(160):a;L();C.done();t("change",!1);a=d.createEvent("HTMLEvents");a.initEvent("instantclick:newpage",!0,!0);dispatchEvent(a)}function M(a){G>+new Date-500||(a=z(a.target))&&A(a)&&x(a.href)}function N(a){G>+new Date-500||(a=z(a.target))&&A(a)&&(a.addEventListener("mouseout",T),H?(O=a.href,l=setTimeout(x,H)):x(a.href))}function U(a){G=+new Date;(a=z(a.target))&&A(a)&&(D?a.removeEventListener("mousedown",M):a.removeEventListener("mouseover",N),x(a.href))}function V(a){var b=z(a.target);!b||!A(b)||1<a.which||a.metaKey||a.ctrlKey||(a.preventDefault(),P(b.href))}function T(){l?(clearTimeout(l),l=!1):v&&!m&&(p.abort(),m=v=!1)}function W(){if(!(4>p.readyState)&&0!=p.status){q.ready=+new Date-q.start;if(p.getResponseHeader("Content-Type").match(/\/(x|ht|xht)ml/)){var a=d.implementation.createHTMLDocument("");a.documentElement.innerHTML=p.responseText.replace(/<noscript[\s\S]+<\/noscript>/gi,"");y=a.title;u=a.body;var b=t("receive",r,u,y);b&&("body"in b&&(u=b.body),"title"in b&&(y=b.title));b=w(r);h[b]={body:u,title:y,scrollY:b in h?h[b].scrollY:0};for(var a=a.head.children,b=0,c,g=a.length-1;0<=g;g--)if(c=a[g],c.hasAttribute("data-instant-track")){c=c.getAttribute("href")||c.getAttribute("src")||c.innerHTML;for(var e=E.length-1;0<=e;e--)E[e]==c&&b++}b!=E.length&&(F=!0)}else F=!0;m&&(m=!1,P(r))}}function L(a){d.body.addEventListener("touchstart",U,!0);D?d.body.addEventListener("mousedown",M,!0):d.body.addEventListener("mouseover",N,!0);d.body.addEventListener("click",V,!0);if(!a){a=d.body.getElementsByTagName("script");var b,c,g,e;i=0;for(j=a.length;i<j;i++)b=a[i],b.hasAttribute("data-no-instant")||(c=d.createElement("script"),b.src&&(c.src=b.src),b.innerHTML&&(c.innerHTML=b.innerHTML),g=b.parentNode,e=b.nextSibling,g.removeChild(b),g.insertBefore(c,e))}}function x(a){!D&&"display"in q&&100>+new Date-(q.start+q.display)||(l&&(clearTimeout(l),l=!1),a||(a=O),v&&(a==r||m))||(v=!0,m=!1,r=a,F=u=!1,q={start:+new Date},t("fetch"),p.open("GET",a),p.send())}function P(a){"display"in q||(q.display=+new Date-q.start);l||!v?l&&r&&r!=a?e.href=a:(x(a),C.start(0,!0),t("wait"),m=!0):m?e.href=a:F?e.href=r:u?(h[k].scrollY=pageYOffset,m=v=!1,K(y,u,r)):(C.start(0,!0),t("wait"),m=!0)}var I=navigator.userAgent,S=-1<I.indexOf(" CriOS/"),Q="createTouch"in d,k,O,l,G,h={},p,r=!1,y=!1,F=!1,u=!1,q={},v=!1,m=!1,E=[],J,D,H,B={fetch:[],receive:[],wait:[],change:[]},C=function(){function a(a,e){n=a;d.getElementById(f.id)&&d.body.removeChild(f);f.style.opacity="1";d.getElementById(f.id)&&d.body.removeChild(f);g();e&&setTimeout(b,0);clearTimeout(l);l=setTimeout(c,500)}function b(){n=10;g()}function c(){n+=1+2*Math.random();98<=n?n=98:l=setTimeout(c,500);g()}function g(){h.style[k]="translate("+n+"%)";d.getElementById(f.id)||d.body.appendChild(f)}function e(){d.getElementById(f.id)?(clearTimeout(l),n=100,g(),f.style.opacity="0"):(a(100==n?0:n),setTimeout(e,0))}function m(){f.style.left=pageXOffset+"px";f.style.width=innerWidth+"px";f.style.top=pageYOffset+"px";var a="orientation"in window&&90==Math.abs(orientation);f.style[k]="scaleY("+innerWidth/screen[a?"height":"width"]*2+")"}var f,h,k,n,l;return{init:function(){f=d.createElement("div");f.id="instantclick";h=d.createElement("div");h.id="instantclick-bar";h.className="instantclick-bar";f.appendChild(h);var a=["Webkit","Moz","O"];k="transform";if(!(k in h.style))for(var b=0;3>b;b++)a[b]+"Transform" in h.style&&(k=a[b]+"Transform");var c="transition";if(!(c in h.style))for(b=0;3>b;b++)a[b]+"Transition"in h.style&&(c="-"+a[b].toLowerCase()+"-"+c);a=d.createElement("style");a.innerHTML="#instantclick{position:"+(Q?"absolute":"fixed")+";top:0;left:0;width:100%;pointer-events:none;z-index:2147483647;"+c+":opacity .25s .1s}.instantclick-bar{background:#29d;width:100%;margin-left:-100%;height:2px;"+c+":all .25s}";d.head.appendChild(a);Q&&(m(),addEventListener("resize",m),addEventListener("scroll",m))},start:a,done:e}}(),R="pushState"in history&&(!I.match("Android")||I.match("Chrome/"))&&"file:"!=e.protocol;return{supported:R,init:function(){if(!k)if(R){for(var a=arguments.length-1;0<=a;a--){var b=arguments[a];!0===b?J=!0:"mousedown"==b?D=!0:"number"==typeof b&&(H=b)}k=w(e.href);h[k]={body:d.body,title:d.title,scrollY:pageYOffset};for(var b=d.head.children,c,a=b.length-1;0<=a;a--)c=b[a],c.hasAttribute("data-instant-track")&&(c=c.getAttribute("href")||c.getAttribute("src")||c.innerHTML,E.push(c));p=new XMLHttpRequest;p.addEventListener("readystatechange",W);L(!0);C.init();t("change",!0);addEventListener("popstate",function(){var a=w(e.href);a!=k&&(a in h?(h[k].scrollY=pageYOffset,k=a,K(h[a].title,h[a].body,!1,h[a].scrollY)):e.href=e.href)})}else t("change",!0)},on:function(a,b){B[a].push(b)}}}(document,location);InstantClick.init('mousedown');
