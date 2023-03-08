function do_count_lines()
{
	var str = $('#source').val();
	
	lines = 0;
	try {
	   lines = ((str.match(/[^\n]*\n[^\n]*/gi).length));
	} catch(e) {
        lines = 0;
	}

	lines++;

    $('#linecount').val(lines);
	
	return false;
}

function do_strlen()
{
    var str = $('#source').val();

    result = strlen(str);

    $('#strlen').val(result);
	
	do_count_lines();
    return false;
}

function strlen (string) {
  var str = string + '';
  var i = 0,
    chr = '',
    lgth = 0;

  if (!this.php_js || !this.php_js.ini || !this.php_js.ini['unicode.semantics'] || this.php_js.ini['unicode.semantics'].local_value.toLowerCase() !== 'on') {
    return string.length;
  }

  var getWholeChar = function (str, i) {
    var code = str.charCodeAt(i);
    var next = '',
      prev = '';
    if (0xD800 <= code && code <= 0xDBFF) { // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
      if (str.length <= (i + 1)) {
        throw 'High surrogate without following low surrogate';
      }
      next = str.charCodeAt(i + 1);
      if (0xDC00 > next || next > 0xDFFF) {
        throw 'High surrogate without following low surrogate';
      }
      return str.charAt(i) + str.charAt(i + 1);
    } else if (0xDC00 <= code && code <= 0xDFFF) { // Low surrogate
      if (i === 0) {
        throw 'Low surrogate without preceding high surrogate';
      }
      prev = str.charCodeAt(i - 1);
      if (0xD800 > prev || prev > 0xDBFF) { //(could change last hex to 0xDB7F to treat high private surrogates as single characters)
        throw 'Low surrogate without preceding high surrogate';
      }
      return false; // We can pass over low surrogates now as the second component in a pair which we have already processed
    }
    return str.charAt(i);
  };

  for (i = 0, lgth = 0; i < str.length; i++) {
    if ((chr = getWholeChar(str, i)) === false) {
      continue;
    } // Adapt this line at the top of any loop, passing in the whole string and the current iteration and returning a variable to represent the individual character; purpose is to treat the first part of a surrogate pair as the whole character and then ignore the second part
    lgth++;
  }
  return lgth;
}
