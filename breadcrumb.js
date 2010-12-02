/**
 * jimdo-breadcrumb
 *     add breadcrumb navigation plugin widget for jimdo website.
 * 
 * Author: hiromitz - http://hiromitz.jimdo.com
 */
(function(w, d, undefined) {

var jQuery;

/**
 * Main script
 */
function main() {
    jQuery(function($) {
		if(0 < $('ul#mainNav1>li:first>a.current').length || 0 == $('a.current').length) return;
		
		var $breadcrumb = $('<div id="jimdo-breadcrumb"/>').append($('ul#mainNav1>li:first').html());
		if(0 < $('ul#mainNav1>li>a.parent').length) {
			$breadcrumb.append(' &gt; ').append($('ul#mainNav1>li>a.parent').clone());
		}
		if(0 < $('ul#mainNav2>li>a.parent').length) {
			$breadcrumb.append(' &gt; ').append($('ul#mainNav2>li>a.parent').clone());
		}
		$breadcrumb.append(' &gt; ').append($('a.current').html());
		$('#content_area').prepend($breadcrumb);
    });
}

/**
 * jQuery onLoad
 */
function scriptLoadHandler() {
    jQuery = w.jQuery.noConflict(true);
    main(); 
}

if (w.jQuery === undefined) {
	// load jQuery
    var js = d.createElement('script');
    js.setAttribute("type","text/javascript");
    js.setAttribute("src","http://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js");
    js.onload = scriptLoadHandler;
	// onload for IE
    js.onreadystatechange = function () {
        if (this.readyState == 'complete' || this.readyState == 'loaded') {
            scriptLoadHandler();
        }
    };
    (d.getElementsByTagName("head")[0] || d.documentElement).appendChild(js);
} else {
    jQuery = w.jQuery;
    main();
}
})(window, document);