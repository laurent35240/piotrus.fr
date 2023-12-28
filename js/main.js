var userLang = navigator.language || navigator.userLanguage; 

$(window).load(function() {
    $('.flexslider').flexslider();
});

$(document).ready(function() {

	/**
	 *	languages
	 *
	 */
	var changeLang = function(lang) {
		if( lang === 'pl-PL') {
			$("[data-lang='en-US']").hide();
			$("[data-lang='fr-FR']").hide();
			$("[data-lang='pl-PL']").css('display', 'block');
		}
		else if(lang === 'fr-FR') {
			$("[data-lang='en-US']").hide();
			$("[data-lang='pl-PL']").hide();
			$("[data-lang='fr-FR']").css('display', 'block');
		}
		else {
			$("[data-lang='pl-PL']").hide();
			$("[data-lang='fr-FR']").hide();
			$("[data-lang='en-US']").css('display', 'block');
		}

		createCookie('lang', lang, 30);
	};

	if(readCookie('lang') !== null) {
		userLang = readCookie('lang');
	}
	changeLang(userLang);

	$("ul.lang a").click( function(e) {
		e.preventDefault();

		var lang = $(this).data('language');
		changeLang(lang);
	});

	$.stellar({
	  verticalOffset: 250,
	  horizontalOffset: 0,
	  responsive: false
	});

});


/**
 * Cookies management
 */

function createCookie(name, value, days) {
	var expires;
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = "; expires=" + date.toGMTString();
	} else {
		expires = "";
	}
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1, c.length);
		}
		if (c.indexOf(nameEQ) === 0) {
			return c.substring(nameEQ.length, c.length);
		}
	}
	return null;
}