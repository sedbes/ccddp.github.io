var evalA = 62;
$("#lockJavascript").click(function() {
    evalEncode()
}),
$("#unlockJavascript").click(function() {
    evalDecode()
}),
$("#clearCodeD").click(function() {
    $('#code4').val(""),
    $('#code6').val("");
}),
$("#goFormat").click(function() {
    goFormat()
});
function evalEncode() {
    var e = $('#code4').val();
    if (e) {
        e = e.replace(/[\r\n]+/g, ""),
        e = e.replace(/'/g, "\\'");
        var t = e.match(/\b(\w+)\b/g);
        t.sort();
        for (var n, i = [], o = "", n = 0; n < t.length; n++)
            t[n] != o && i.push(o = t[n]);
        var r, a = i.length;
        for (n = 0; a > n; n++)
            r = evalNum(n),
            e = e.replace(new RegExp("\\b" + i[n] + "\\b","g"), r),
            r == i[n] && (i[n] = "");
        $("#evalHidden").val("eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c]);return p}('" + e + "'," + evalA + "," + a + ",'" + i.join("|") + "'.split('|'),0,{}))"),
        $('#code6').val($("#evalHidden").val());
    }
}
function evalNum(e) {
    return (evalA > e ? "" : evalNum(parseInt(e / evalA))) + ((e %= evalA) > 35 ? String.fromCharCode(e + 29) : e.toString(36))
}
function evalDecode() {
    var code = $('#code4').val();
    code && (code = code.replace(/^eval/, ""),
    $("#evalHidden").val(eval(code)),
    $('#code6').val($("#evalHidden").val()))
}