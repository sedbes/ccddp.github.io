// 长度
var l_a_count=19;
var l_a=new Array();
l_a[0]="公里(km)";
l_a[1]="米(m)";
l_a[2]="分米(dm)";
l_a[3]="厘米(cm)";
l_a[4]="毫米(mm)";
l_a[5]="微米(um)";
l_a[6]="里";
l_a[7]="丈";
l_a[8]="尺";
l_a[9]="寸";
l_a[10]="分";
l_a[11]="厘";
l_a[12]="海里(nmi)";
l_a[13]="英寻";
l_a[14]="英里(mi)";
l_a[15]="弗隆(fur)";
l_a[16]="码(yd)";
l_a[17]="英尺(ft)";
l_a[18]="英寸(in)";

var l_c=new Array();
l_c[0]=1000;
l_c[1]=1;
l_c[2]=0.1;
l_c[3]=0.01;
l_c[4]=0.001;
l_c[5]=0.000001;
l_c[6]=500;
l_c[7]=10 / 3;
l_c[8]=1 / 3;
l_c[9]=1 / 30;
l_c[10]=1 / 300;
l_c[11]=1 / 3000;
l_c[12]=1852;
l_c[13]=1.8288;
l_c[14]=1609.344;
l_c[15]=201.168;
l_c[16]=0.9144;
l_c[17]=0.3048;
l_c[18]=0.0254;

// 面积
var m_a_count=13;
var m_a=new Array();
m_a[0]="平方公里";
m_a[1]="公顷(ha)";
m_a[2]="市亩";
m_a[3]="平方米";
m_a[4]="平方分米";
m_a[5]="平方厘米";
m_a[6]="平方毫米";
m_a[7]="平方英里";
m_a[8]="英亩";
m_a[9]="平方竿";
m_a[10]="平方码";
m_a[11]="平方英尺";
m_a[12]="平方英寸";

var m_c=new Array();
m_c[0]=1000000;
m_c[1]=10000;
m_c[2]=10000 / 15;
m_c[3]=1;
m_c[4]=0.01;
m_c[5]=0.0001;
m_c[6]=0.000001;
m_c[7]=2589988.110336;
m_c[8]=4046.8564224;
m_c[9]=25.29285264;
m_c[10]=0.83612736;
m_c[11]=0.09290304;
m_c[12]=0.00064516;

// 温度
var w_a_count=5;
var w_a=new Array();
w_a[0]="摄氏度(C)";
w_a[1]="华氏度(F)";
w_a[2]="开氏度(K)";
w_a[3]="兰氏度(Ra)";
w_a[4]="列氏度(Re)";

// 功率
var g_a_count=10;
var g_a=new Array();
g_a[0]="瓦(W)";
g_a[1]="千瓦(kW)";
g_a[2]="英制马力";
g_a[3]="米制马力";
g_a[4]="公斤*米/秒";
g_a[5]="千卡/秒";
g_a[6]="英热单位/秒";
g_a[7]="英尺*磅/秒";
g_a[8]="焦耳/秒";
g_a[9]="牛顿*米/秒";

var g_c=new Array();
g_c[0]=0.001;
g_c[1]=1;
g_c[2]=0.745712172;
g_c[3]=0.7352941;
g_c[4]=0.0098039215;
g_c[5]=4.1841004;
g_c[6]=1.05507491;
g_c[7]=0.0013557483731;
g_c[8]=0.001;
g_c[9]=0.001;

// 热量
var r_a_count=8;
var r_a=new Array();
r_a[0]="焦耳(J)";
r_a[1]="公斤*米";
r_a[2]="米制马力*时";
r_a[3]="英制马力*时";
r_a[4]="千瓦*时";
r_a[5]="千卡(kcal)";
r_a[6]="英热单位";
r_a[7]="英尺*磅";

var r_c=new Array();
r_c[0]=1;
r_c[1]=9.80392157;
r_c[2]=2647603.9184538;
r_c[3]=2684563.7583893;
r_c[4]=3599712.023038157;
r_c[5]=4185.851820846;
r_c[6]=1055.0749103;
r_c[7]=1.3557483731;

// 重量
var z_a_count=21;
var z_a=new Array();
z_a[0]="吨";
z_a[1]="公斤(kg)";
z_a[2]="克(g)";
z_a[3]="毫克(mg)";
z_a[4]="市斤";
z_a[5]="担";
z_a[6]="两";
z_a[7]="钱";
z_a[8]="金衡磅";
z_a[9]="金衡盎司";
z_a[10]="英钱(dwt)";
z_a[11]="金衡格令";
z_a[12]="(英制)长吨";
z_a[13]="(美制)短吨";
z_a[14]="英担";
z_a[15]="美担";
z_a[16]="英石";
z_a[17]="磅(lb)";
z_a[18]="盎司(oz)";
z_a[19]="打兰(dr)";
z_a[20]="格令";

var z_c=new Array();
z_c[0]=1000;
z_c[1]=1;
z_c[2]=0.001;
z_c[3]=0.000001;
z_c[4]=0.5;
z_c[5]=50;
z_c[6]=0.05;
z_c[7]=0.005;
z_c[8]=0.3265865064;
z_c[9]=0.0272155422;
z_c[10]=0.00136077711;
z_c[11]=0.00005669904625;
z_c[12]=1016.0469088;
z_c[13]=907.18474;
z_c[14]=50.80234544;
z_c[15]=45.359237;
z_c[16]=6.35029318;
z_c[17]=0.45359237;
z_c[18]=0.028349523125;
z_c[19]=0.0017718451953125;
z_c[20]=0.00005669904625;

// 压力
var y_a_count=13;
var y_a=new Array();
y_a[0]="巴(bar)";
y_a[1]="千帕(kPa)";
y_a[2]="百帕(hPa)";
y_a[3]="毫巴(mbar)";
y_a[4]="帕斯卡";
y_a[5]="标准大气压";
y_a[6]="毫米汞柱(托)";
y_a[7]="磅力/英尺<SUP>2</SUP>";
y_a[8]="磅力/英寸<SUP>2</SUP>";
y_a[9]="英吋汞柱";
y_a[10]="公斤力/厘米<SUP>2</SUP>";
y_a[11]="公斤力/米<SUP>2</SUP>";
y_a[12]="毫米水柱";

var y_c=new Array();
y_c[0]=100000;
y_c[1]=1000;
y_c[2]=100;
y_c[3]=100;
y_c[4]=1;
y_c[5]=101325;
y_c[6]=y_c[5] / 760;
y_c[7]=47.880256944444444444444444444444;
y_c[8]=6894.757;
y_c[9]=25.4 * y_c[6];
y_c[10]=98066.5;
y_c[11]=9.80665;
y_c[12]=9.80665;

// 体积
var t_a_count=20;
var t_a=new Array();
t_a[0]='立方米(m<SUP>3</SUP>)';
t_a[1]='公石(hl)';
t_a[2]='十升(dal)';
t_a[3]='升(立方分米)';
t_a[4]='分升(dl)';
t_a[5]='厘升(cl)';
t_a[6]='毫升';
t_a[7]='立方毫米';
t_a[8]='桶[42加仑]';
t_a[9]='加仑(gal)';
t_a[10]='夸脱(qt)';
t_a[11]='品脱(pt)';
t_a[12]='及耳(gi)';
t_a[13]='液量盎司';
t_a[14]='液量打兰';
t_a[15]='量滴(min)';
t_a[16]='亩英尺';
t_a[17]='立方码';
t_a[18]='立方英尺';
t_a[19]='立方英寸';

var t_c=new Array();
t_c[0]=1000;
t_c[1]=100;
t_c[2]=10;
t_c[3]=1;
t_c[4]=0.1;
t_c[5]=0.01;
t_c[6]=0.001;
t_c[7]=0.000001;
t_c[8]=158.987294928;
t_c[9]=3.785411784;
t_c[10]=0.946352946;
t_c[11]=0.473176473;
t_c[12]=0.11829411825;
t_c[13]=0.02365882365;
t_c[14]=0.0036966911953125;
t_c[15]=0.0000004813399993896484375;
t_c[16]=1233481.83754752;
t_c[17]=764.554857984;
t_c[18]=28.316846592;
t_c[19]=0.016387064;



function echo(count, a, type, ctype){
	var hasdiv=true;
	for(var i=0;i<count;i++){
		if(i%2==0){document.write('<div class="box">');hasdiv=true;}
		if(''!=a[i]){
		document.write('<div class="i">'+a[i]+'</div>');
		document.write('<div class="data"><input id="'+type+'_id_'+i+'"></div>');
		document.write('<div class="butt"><input onclick="change('+i+',\''+type+'\')" type="button" value="换算" title="把“'+a[i]+'”换算成其他'+ctype+'单位"></div>');
		}
		if(i%2!=0){document.write('</div>');hasdiv=false;}
	}
	if(true==hasdiv)document.write('</div>');
}

function $$(n){ return document.getElementById(n); }

// 转换
function change(id,type){
 var val=parseFloat($$(type+'_id_'+id).value);
 if(isNaN(val)){alert("请输入有效数字！");return;}
 switch(type){
  case 'l' : reset_data(val*l_c[id],l_a_count,l_c,type); break; // 长度
  case 'm' : reset_data(val*m_c[id],m_a_count,m_c,type); break; // 面积
  case 'w' : // 温度
   var v=Array();
   for(var i=0;i<w_a_count;i++){v[i]='ERROR';}
   v[id]=val;
   switch(id){
    case 0 : if(val>=-273.15)v=set_data_wd(val);break;
    case 1 : if(val>=-459.666666)v=set_data_wd((val-32)*5/9);break;
    case 2 : if(val>=0)v=set_data_wd(val-273.15);break;
    case 3 : if(val>=0)v=set_data_wd(val/1.8-273.15);break;
    case 4 : if(val>=-218.5199999999)v=set_data_wd(val*1.25);break;
   }
   reset_data_array(w_a_count,v,type);
   break;
  case 'g' : reset_data(val*g_c[id],g_a_count,g_c,type); break; // 功率
  case 'r' : reset_data(val*r_c[id],r_a_count,r_c,type); break; // 热量
  case 'z' : reset_data(val*z_c[id],z_a_count,z_c,type); break; // 重量
  case 'y' : reset_data(val*y_c[id],y_a_count,y_c,type); break; // 压力
  case 't' : reset_data(val*t_c[id],t_a_count,t_c,type); break; // 体积
 }
}
function reset_data(val,count,c,type){for(var i=0;i<count;i++){var v=val/c[i];var id=$$(type+'_id_'+i);if(id)id.value=parseFloat(v.toFixed(8));}}
function reset_data_array(count, c, type){
 for(var i=0;i<count;i++){var id=$$(type+'_id_'+i);if(id)id.value=parseFloat(c[i].toFixed(8));}}
function set_data_wd(c){var v=Array();v[0]=c;v[1]=32+(c*9/5);v[2]=c+273.15;v[3]=v[2]*1.8;v[4]=v[0]/1.25;return v;}
