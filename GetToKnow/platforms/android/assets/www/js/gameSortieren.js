$(document).bind('pageinit', function() {
	var zaehlerWasWenn;
	var arrayWasWenn = ["Schuhgr&ouml;&szlig;e", 
						"Alter", 
						"Vorname",
						"Nachname", 
						"Haarl&auml;nge", 
						"K&ouml;rpergr&ouml;&szlig;e",
						"Farbe des Oberteils", 
						"Geburtsort alphabetisch"];

	$("#begriffSortieren").click(function(){ 
		zaehlerWasWenn = Math.floor(Math.random() * arrayWasWenn.length);
		$("#anzeigeSortieren").html(innerHTML=arrayWasWenn[zaehlerWasWenn]);
	});
	
	$("#gameNameSortieren").click(function () {
	  	if ($("#divTextSortieren" ).is(":hidden")) {
	    	$("#divTextSortieren").slideDown("slow");
	    	$(".fragezeichenIcons").attr("src","../img/ausrufezeichen.png");
	  	} 
	  	else {
	    	$("#divTextSortieren").slideUp("slow");
	    	$(".fragezeichenIcons").attr("src","../img/fragezeichen.png");
	  	}
	});
});