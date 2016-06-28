$(document).bind('pageinit', function() {
	var zaehlerWasWenn;
	var openWasWenn = false;
	var arrayWasWenn = ["... du 1 Million Euro im Lotto gewinnst?", 
				  "... du nie mehr arbeiten m&uuml;sstest?", 
				  "... du f&uuml;r einen Tag unsichtbar sein k&ouml;nntest?", 
				  "... es eine Zombieinvasion g&auml;be?", 
				  "... du nie wieder schlafen m&uuml;sstest?", 
				  "... du pl&ouml;tzlich eine Allergie gegen Papier h&auml;ttest?", 
				  "... es Minions wirklich g&auml;be?", 
				  "... du einmalig die Zeit zurück drehen k&ouml;nntest?", 
				  "... du die Welt regieren w&uuml;rdest?", 
				  "... du auf jede nur denkbare Frage die Antwort w&uuml;sstest?",
				  "... du in die Zukunft reisen k&ouml;nntest?", 		
				  "... der Mond aus K&auml;se w&auml;re?", 
				  "... einen Klon von deiner Gestalt treffen w&uuml;rdest?", 
				  "... du eine Woche lang ganz alleine auf der Welt w&auml;rst?", 
				  "... du einen Tag lang in der Welt deines Lieblingsfilmes gefangen w&auml;rst?", 
				  "... du fliegen k&ouml;nntest?"];

	$("#begriffWasWenn").click(function(){ 
		zaehlerWasWenn = Math.floor(Math.random() * arrayWasWenn.length);
		$("#anzeigeWasWenn").hide();
        $("#anzeigeWasWenn").html(innerHTML=arrayWasWenn[zaehlerWasWenn]).fadeIn();
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
	