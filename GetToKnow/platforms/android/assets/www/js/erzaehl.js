$(document).bind('pageinit', function() {
	var zaehlerErzaehl = 1;
	var unterZehn = true;

	$("#hochzaehlenErzaehl").click(function() {
		if(unterZehn == true){
			for (var i = 0; i <= 10; i++) {
				if (zaehlerErzaehl == i){
					$("#hochzaehlenErzaehl").html(i+1);
				}
				if (zaehlerErzaehl == 9){
					unterZehn = false;
				}
			};
			zaehlerErzaehl += 1;
		}
	});

	$("#bestaetigenErzaehl").click(function() {
		$("#anzeigeErzaehl").text(zaehlerErzaehl);
		unterZehn = true;
		zaehlerErzaehl = 1;
	});

	$("#gameNameErzaehl").click(function () {
	  	if ($("#divTextErzaehl" ).is(":hidden")) {
	    	$("#divTextErzaehl").slideDown("slow");
	  	} 
	  	else {
	    	$("#divTextErzaehl").slideUp("slow");
	  	}
	});
});