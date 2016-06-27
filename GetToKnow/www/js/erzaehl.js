$(document).bind('pageinit', function() {
	var zaehlerErzaehl = 1;
	var unterZehn = true;
	var openErzaehl = false;

	$("#erzaehlLogo").hide()
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
		$("#anzeigeErzaehl").text("Erzähle " + zaehlerErzaehl + " Dinge über dich");
		unterZehn = true;
		zaehlerErzaehl = 1;
		$( "#hochzaehlenErzaehl" ).hide();
		$( "#bestaetigenErzaehl" ).hide();
		$("#erzaehlLogo").show()
	});

	$("#gameNameErzaehl").click(function () {
	  	if ($("#divTextErzaehl" ).is(":hidden") && !openErzaehl) {
	  		openErzaehl = true;
	    	$("#divTextErzaehl").slideDown("slow");
	    	$(".fragezeichenIcons").attr("src","../img/ausrufezeichen.png");
	  	} 
	  	else if ($("#divTextErzaehl").is(":visible") && openErzaehl){
	    	openErzaehl = false;
	    	$("#divTextErzaehl").slideUp("slow");
	    	$(".fragezeichenIcons").attr("src","../img/fragezeichen.png");
	  	}
	});
});