var huaci_url = "//open.iciba.com/huaci_new/";
var HUAYI_Str = '';
var HUAYI_ALLOW = 1;
HUAYI_Str += '<link type="text/css" rel="stylesheet" href="' + huaci_url + 'huaci.css" />';
HUAYI_Str += '<div id="icIBahyI-main_box" style="display:none">';
HUAYI_Str += '	<div class="icIBahyI-main_title" id="icIBahyI-main_title">';
HUAYI_Str += '    	<a href="javascript:;" id="icIBahyI-gb" class="icIBahyI-gb" title="关闭"></a>';
HUAYI_Str += '		<i class="icIBahyI-logo"></i>';
HUAYI_Str += '    </div>';
HUAYI_Str += '    <div class="icIBahyI-search" id="HUAYI_input">';
HUAYI_Str += '    </div>';
HUAYI_Str += '    <div class="icIBahyI-loading" id="loading"></div>';
HUAYI_Str += '    <div class="icIBahyI-main_cont" id="icIBahyI-main_cont">';
HUAYI_Str += '    </div>';
HUAYI_Str += '<div class="icIBahyI-CB" id="icIBahyI-scbiframe" style="display:none;">';
HUAYI_Str += '</div>';
HUAYI_Str += '<div id="TOO_LONG" style="height:150px" class="icIBahyI-footer">您划取的内容太长，建议您去爱词霸<a href="//fy.iciba.com">翻译</a>页面。</div>';
HUAYI_Str += '<div class="icIBahyI-options">';
HUAYI_Str += '	<div class="icIBahyI-morebtn" id="icIBahyI-morebtn">划词功能使用爱词霸 | <a id="more_info" href="#" target="_blank">查看更多释义</a><i class="more-icon"></i></div>';
HUAYI_Str += '</div>';
HUAYI_Str += '</div>';
HUAYI_Str += '<script src="' + huaci_url + 'dict.php" charset="utf-8"></script>';
if (!$('<div>').tinyscrollbar) {
    HUAYI_Str += '<script src="//www.iciba.com/static/scripts/jquery.tinyscrollbar.js" charset="utf-8" ></script>';
}
document.write(HUAYI_Str);