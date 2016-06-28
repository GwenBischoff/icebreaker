$(document).bind('pageinit', function() {
	var zaehlerWasWenn;
	var openWasWenn = false;
	var arrayWasWenn = ["... du 1 Million Euro im Lotto gewinnst?", 
				  "... du nie mehr arbeiten müsstest?", 
				  "... du für einen Tag unsichtbar sein könntest?", 
				  "... es eine Zombieinvasion gäbe?", 
				  "... du nie wieder schlafen müsstest?", 
				  "... du plötzlich eine Allergie gegen Papier hättest?", 
				  "... es Minions wirklich gäbe?", 
				  "... du einmalig die Zeit zurück drehen könntest?", 
				  "... du die Welt regieren würdest?", 
				  "... du auf jede nur denkbare Frage die Antwort wüsstest?",
				  "... du in die Zukunft reisen könntest?", 		
				  "... der Mond aus Käse wäre?", 
				  "... einen Klon von deiner Gestalt treffen würdest?", 
				  "... du eine Woche lang ganz alleine auf der Welt wärst?", 
				  "... du einen Tag lang in der Welt deines Lieblingsfilmes gefangen wärst?", 
				  "... du fliegen könntest?"];

	$("#begriffWasWenn").click(function(){ 
		zaehlerWasWenn = Math.floor(Math.random() * arrayWasWenn.length);
		$("#anzeigeWasWenn").html(innerHTML=arrayWasWenn[zaehlerWasWenn]);
		$(this).css("border-color", "#F8FBE9");
			setTimeout(function(){
		$('#begriffWasWenn').css('border-color','#E2EFA9');}, 100);
	});
	
	$("#gameNameWasWenn").click(function () {
	  	if ($("#divTextWasWenn" ).is(":hidden") && !openWasWenn) {
	  		openWasWenn = true;
	    	$("#divTextWasWenn").slideDown("slow");
	    	$(".fragezeichenIcons").attr("src","../img/ausrufezeichen.png");
	  	} 
	  	else if ($("#divTextWasWenn" ).is(":visible") && openWasWenn){
	  		openWasWenn = false;
	    	$("#divTextWasWenn").slideUp("slow");
	    	$(".fragezeichenIcons").attr("src","../img/fragezeichen.png");
	  	}
	});
});	
	