$(document).bind('pageinit', function() {
	
	var runningSpeed = false;
	console.log("abc");
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
	  	if ($("#divTextSpeed" ).is(":hidden")) {
	    	$("#divTextSpeed").slideDown("slow");
	    	$(".fragezeichenIcons").attr("src","../img/ausrufezeichen.png");
	  	} 
	  	else {
	    	$("#divTextSpeed").slideUp("slow");
	    	$(".fragezeichenIcons").attr("src","../img/fragezeichen.png");
	  	}
	});
});