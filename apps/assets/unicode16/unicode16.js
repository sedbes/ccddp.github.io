/* function $(o){ return document.getElementById(o); } */
$(document).ready(changebtn());
//替换全角或半角空格为空.
function tihuan(obj){
var b=obj.value;
var r=/\s|　|\n|\r|http:\/\//gi;
b=b.replace(r,"");
obj.value=b;
}
function rep(str){return str.replace(/\s|　|\n|\r|http:\/\//gi,"");}
function blu(obj){
var str=obj.value;
var j=0;
if(str==''){obj.value='0'}
if(str.length>1){
for(var i=0;i<str.length;i++){ if(str.charAt(i)<= 0 ){j=j+1;}else{ break;} }
if(j==str.length){ obj.value='0'; }else{ obj.value=str.substring(j); }
  }
}
//只能是英文,匹配成功返回True,否则返回False.
function onlyE(obj){
	var str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for(var i=0;i<obj.length;i++){
		if(str.indexOf(obj.charAt(i))==-1)
		return false;
	}
	return true;
}
//只能是数字,匹配成功返回True,否则返回False.
function onlyN(obj){
	var str="0123456789";
	for(var i=0;i<obj.length;i++){
		if(str.indexOf(obj.charAt(i))==-1)
		return false;
	}
	return true;
}
//只能是英文或数字,匹配成功返回True,否则返回False.
function onlyEorN(obj){
	var str="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	for(var i=0;i<obj.length;i++){
		if(str.indexOf(obj.charAt(i))==-1)
		return false;
	}
	return true;
}
//只能是英文加数字,匹配成功返回True,否则返回False.
function onlyEandN(obj){
	var str1="0123456789";
	var str2="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var key1=0;
	var key2=0;
	for(var i=0;i<obj.length;i++){
		if(str1.indexOf(obj.charAt(i))!=-1)
		key1=1;
	}
	for(var j=0;j<obj.length;j++){
		if(str2.indexOf(obj.charAt(j))!=-1)
		key2=1;
	}
	if(key1+key2==2 && onlyEorN(obj)){return true;}else{return false;}
}

//按钮边框颜色变换
function changebtn(){
var a=document.body;
a.onmouseover=function(e){
var event =  window.event || e;
if(event.srcElement.tagName=="INPUT" && (event.srcElement.type=="button"||event.srcElement.type=="submit"||event.srcElement.type=="reset"))
event.srcElement.style.borderColor="red";
}
a.onmouseout=function(){
if(event.srcElement.tagName=="INPUT" && (event.srcElement.type=="button"||event.srcElement.type=="submit"||event.srcElement.type=="reset"))
event.srcElement.style.borderColor="";
}
}
//禁止用Ctrl+N新打开窗口.
document.onkeydown=function(){
if(event.ctrlKey && event.keyCode == 78){
    event.returnValue = false;
}
}
//禁止右键.
/*
function Click(){
window.event.returnValue=false;
}
document.oncontextmenu=Click;
*/
//iframe自适应高度
var iframe = new Object(); 
iframe.resizeToInnerHeight = function(objiframe){
var hh=objiframe
if (!hh) return;
hh.style.height = hh.contentWindow.document.body.scrollHeight+"px";
}
//只能输入数字.
function onlynum(){
if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105)||(event.keyCode==8)||(event.keyCode==13)))
event.returnValue=false;
}
//根据屏幕调整窗口大小.
function resiz(){
window.moveTo(0,0);
window.resizeTo(window.screen.availWidth,window.screen.availHeight);
}
//去掉点击链接后的虚线。
/*
function bluring(){
if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG")
document.body.focus();
}
document.onfocusin=bluring;
*/
//弹出窗口
function openwin(u,winid,w,h){
var l = (screen.width - w) / 2;
var t = (screen.height - h) / 2;
var s = 'width=' + w + ', height=' + h + ', top=' + t + ',left='+ l + ',toolbar=no,scrollbars=no,menubar=no,location=no,resizable=no,status=no';
window.open(u,winid,s);
}
//登录检测
function CheckForm(){
if(document.form1.name.value=="")
	{
		alert("用户名不能为空!");
		document.form1.name.focus();
		return false;
	}
	if(document.form1.password.value=="")
	{
		alert("密码不能为空!");
		document.form1.password.focus();
		return false;
	}
	if(document.form1.yanzenma.value=="")
	{
		alert("验证码不能为空!");
		document.form1.yanzenma.focus();
		return false;
	}
	if(form1.yanzenma.value.length != 4 )
	{
		alert("请输入正确的验证码!");
		document.form1.yanzenma.focus();
		return false;
	}
}
function nobiaodian(str){
var pattern=/^([\u4e00-\u9fa5]|\w)+$/;
if(pattern.test(str)){return true;}else{return false;}
}
function isURL(obj){
var reghttp=/^\w+(\.\w+)*(\/\w+)*(\?\w+=\w*(&\w+=\w*)*)?$/g;
if(reghttp.test(obj)){return true;}else{return false;}
}
function IsURL1(strUrl){
var regular=/^\b(((https?|ftp):\/\/)?[-a-z0-9]+(\.[-a-z0-9]+)*\.(?:com|edu|gov|int|mil|net|org|biz|info|name|museum|coop|asia|aero|[a-z][a-z]|((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]\d)|\d))\b(\/[-a-z0-9_:\@&?=+,.!\/~%\$]*)?)$/i
if(regular.test(strUrl)){/*alert("正确");*/return true;}else{/*alert("错误");*/return false;}
}
function isEmail(obj){
var regmail=/^\w+@\w+(\.\w+)*$/g;
if(regmail.test(obj)){return true;}else{return false;}
}
function openwin(u,winid,w,h){
var l = (screen.width - w) / 2;
var t = (screen.height - h) / 2;
var s = 'width=' + w + ', height=' + h + ', top=' + t + ',left='+ l + ',toolbar=no,scrollbars=no,menubar=no,location=no,resizable=no,status=no';
window.open(u,winid,s);
}
function insertFlash(elm, url, w, h){
if (!document.getElementById(elm)) return;
var str = '';
str += '<object width="'+ w +'" height="'+ h +'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0">';
str += '<param name="movie" value="'+ url +'">';
str += '<param name="wmode" value="transparent">';
str += '<param name="quality" value="high">';
str += '<param name="bgcolor" value="#FFFFFF">';
str += '<embed width="'+ w +'" height="'+ h +'" src="'+ url +'" quality="high" wmode="transparent" bgcolor="#FFFFFF" type="application/x-shockwave-flash" plugspace="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></embed>';
str += '</object>';
document.getElementById(elm).innerHTML = str;
}
//transparent: 隐藏flash
//opaque: 显示flash
function copyText(obj){  //复制
	if(obj.value.length>0){
	obj.select(); 
	//js=obj.createTextRange(); 
	//js.execCommand("Copy");
	document.execCommand("Copy");
	alert('已经复制到剪贴板！');
	return false;
	}
}
function copy(ob){
	var obj=findObj(ob);
	if(obj){
	obj.select();
	js=obj.createTextRange();
	js.execCommand("Copy");
	}
}
function paste(ob){  //粘贴
	var obj=findObj(ob);
	if(obj){ 
	obj.select();
	js=obj.createTextRange();
	js.execCommand("Paste");
	}
}
function cut(ob){  //剪切
	var obj=findObj(ob);
	if(obj){ 
	obj.select();
	js=obj.createTextRange();
	js.execCommand("Cut");
	}
}
function findObj(n,d){
	var p,i,x;
	if(!d) d=document;
	if((p=n.indexOf("?"))>0&&parent.frames.length){
	d=parent.frames[n.substring(p+1)].document;
	n=n.substring(0,p);
	}
	if(!(x=d[n])&&d.all) x=d.all[n];
	for(i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
	for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=findObj(n,d.layers[i].document);
	if(!x && document.getElementById) x=document.getElementById(n);
	return x;
}
//代码预览
function run_code(obj){
  var winname = window.open('','','');
  winname.document.open('text/html','replace');
  winname.document.write(obj.value);
  winname.document.close();
}
//另存代码
function doSave(obj){
if(document.all){
	var winname = window.open('', '', '');
	winname.document.open('text/html', 'replace');
	winname.document.writeln(obj.value);
	winname.document.execCommand('saveas','',winname.document.title+'.htm');
	winname.close();}else{alert("此功能只能在IE上有效");}
}
function form1_onsubmit(){
var keyword=rep(form1.keyword.value);
var key=rep(form1.key.value);
if(keyword=="" || keyword=="请输入查询关键字"){
      alert("请输入查询关键字！");
      form1.keyword.value="";
      form1.keyword.focus();
      return false;
     }
if(keyword.length < 2 ){ 
      alert("查询关键字不能少于2个字符！");
      form1.keyword.focus();
      return false;
     }
form1.action="search.asp?keyword="+keyword+"&key="+key;
form1.submit();
}
//标题加上随机数.
/*
var mr=Math.floor(Math.random()*90)+1;
var tit=document.title;
document.title=tit+"-"+mr;
*/
//设为主页
function setHome(obj,url){
    try{obj.style.behavior='url(#default#homepage)';obj.setHomePage(url);}catch(e){
            if(window.netscape){
                try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");}  
                   catch(e){alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");}
                   var prefs=Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
                   prefs.setCharPref('browser.startup.homepage',url);
             }
      }
}
//加入收藏
function addSave(sURL,sTitle){try{window.external.addFavorite(sURL,sTitle);}catch(e){try{window.sidebar.addPanel(sTitle,sURL,"");}catch(e){alert("加入收藏失败，请使用Ctrl+D进行添加");}}}
//回到页面顶部
function sTop(){if(document.body.scrollTop){document.body.scrollTop=0;}else{document.documentElement.scrollTop=0;}}
//添加cookie
function addCookie(objName,objValue,objHours){
     var str = objName + "=" + escape(objValue);
     if(objHours > 0){ //为0时不设定过期时间，浏览器关闭时cookie自动消失
     var date = new Date();
     var ms = objHours*3600*1000;
     date.setTime(date.getTime() + ms);
     str += "; expires=" + date.toGMTString();
     }
     document.cookie = str;
}
//获取cookie
function getCookie(objName){
     var arrStr = document.cookie.split("; ");
     for(var i = 0;i < arrStr.length;i ++){
     var temp = arrStr[i].split("=");
     if(temp[0] == objName) return unescape(temp[1]);
     }
     return "";
}
//删除cookie
function delCookie(objName){
     var str = getCookie(objName);
     if(str != ""){
     document.cookie = objName+"="+"; expires=Thu, 1 Dec 2000 16:00:00 GMT";
     }
}

function uz(){
    var v = $("#txt1").val();
	var r = v.match(/\\u[0-9a-fA-F]{4}/g);
	if(r == null) {
		$("#txt2").val(v);
		return false;
	}
	for(var i = 0; i < r.length; i++){
		v = v.replace(r[i],unescape(r[i].replace("\\u","%u")));
	}
    $("#txt2").val(v);
}
function zu(){
    var v = $("#txt1").val().split("");
    var ascii = "";
    for (var i = 0; i < v.length; i++) {
        var code = Number(v[i].charCodeAt(0));
        if (!$("#onlyzw").attr("checked") || code > 127) {
            var charAscii = code.toString(16);
            charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
            ascii += "\\u" + charAscii;
        } else {
            ascii += v[i];
        }
    }
    $("#txt2").val(ascii);
}