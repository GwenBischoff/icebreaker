$(document).bind('pageinit', function() {	
	var runningSpeed = false;
	var openSpeed = false;
	var count = 0;

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
			      	var blink = setInterval(function() {  
				        if(count == 10){
				        	clearInterval(blink);
				        	count = 0;
				        }
				        else if ($('#speedName').css('visibility') == 'hidden') {
				            $('#speedName').css('visibility', 'visible');
				            count++;
				        } 
				        else {
				            $('#speedName').css('visibility', 'hidden'); 
				        } 
				    }, 500);
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