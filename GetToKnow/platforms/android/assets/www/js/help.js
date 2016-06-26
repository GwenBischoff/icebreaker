$(document).bind('pageinit', function() {

	$("#nameHelp").click(function () {
	  	if ($("#divTextHelp" ).is(":hidden")) {
	    	$("#divTextHelp").slideDown("slow");
	    	$(".fragezeichenIcons").attr("src","../img/ausrufezeichen.png");
	  	} 
	  	else {
	    	$("#divTextHelp").slideUp("slow");
	    	$(".fragezeichenIcons").attr("src","../img/fragezeichen.png");
	  	}
	});
});