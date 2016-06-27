$(document).bind('pageinit', function() {
	var openHelp = false;
	$("#nameHelp").click(function () {
	  	if ($("#divTextHelp" ).is(":hidden") && !openHelp) {
	    	openHelp = true;
	    	$("#divTextHelp").slideDown("slow");
	    	$(".fragezeichenIcons").attr("src","img/ausrufezeichen.png");
	  	} 
	  	else if ($("#divTextHelp" ).is(":visible") && openHelp){
	    	openHelp = false;
	    	$("#divTextHelp").slideUp("slow");
	    	$(".fragezeichenIcons").attr("src","img/fragezeichen.png");
	  	}
	});
});