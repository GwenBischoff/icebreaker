$(document).bind('pageinit', function() {	
	var runningSpeed = false;
	var openSpeed = false;

	$( "#speedName" ).click(function() {
		if (runningSpeed == false){
			runningSpeed = true;
			var sec = 45;
			var timer = setInterval(function() {
			   	$('#speedName').text(sec--);
			   	if (sec == -1) {
			   		//Alarm oä
			    	runningSpeed = false;
			      	clearInterval(timer);
		   		} 
			}, 1000);
		}
	});

	$("#gameNameSpeeddating").click(function () {
	  	if ($("#divTextSpeed" ).is(":hidden") && !openSpeed) {
	  		openSpeed = true;
	    	$("#divTextSpeed").slideDown("slow");
	    	$(".fragezeichenIcons").attr("src","../img/ausrufezeichen.png");
	  	} 
	  	else if ($("#divTextSpeed" ).is(":visible") && openSpeed){
	  		openSpeed = false;
	    	$("#divTextSpeed").slideUp("slow");
	    	$(".fragezeichenIcons").attr("src","../img/fragezeichen.png");
	  	}
	});
});