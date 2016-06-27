$(document).bind('pageinit', function() {

	$("#nameHelp").click(function () {
	  	if ($("#divTextHelp" ).is(":hidden")) {
	    	$("#divTextHelp").slideDown("slow");
	    	$(".fragezeichenIcons").attr("src","../img/ausrufezeichen.png");
	  	} 
	  	else if ($("#divTextHelp" ).is(":visible")){
	    	$("#divTextHelp").slideUp("slow");
	    	$(".fragezeichenIcons").attr("src","../img/fragezeichen.png");
	  	}
	});
});