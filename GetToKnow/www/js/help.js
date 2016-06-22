$(document).bind('pageinit', function() {

	$("#nameHelp").click(function () {
	  	if ($("#divTextHelp" ).is(":hidden")) {
	    	$("#divTextHelp").slideDown("slow");
	  	} 
	  	else {
	    	$("#divTextHelp").slideUp("slow");
	  	}
	});
});