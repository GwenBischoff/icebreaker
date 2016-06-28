$(document).bind('pageinit', function() {
	var zaehlerWasWenn;
	var openSortieren = false;
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
		$(this).css("border-color", "#FFF1E6");
		setTimeout(function(){
			$('#begriffSortieren').css('border-color','#FFC999');}, 100);
	});
	
	$("#gameNameSortieren").click(function () {
	  	if ($("#divTextSortieren" ).is(":hidden") && !openSortieren) {
	    	openSortieren = true;
	    	$("#divTextSortieren").slideDown("slow");
	    	$(".fragezeichenIcons").attr("src","../img/ausrufezeichen.png");
	  	} 
	  	else if ($("#divTextSortieren" ).is(":visible") && openSortieren){
	  		openSortieren = false;
	    	$("#divTextSortieren").slideUp("slow");
	    	$(".fragezeichenIcons").attr("src","../img/fragezeichen.png");
	  	}
	});
});