$(document).bind('pageinit', function() {
	var zaehlerNochNie;
	var openNochNie = false;
	var arrayNochNie  = ["Arme hochheben", "Einmal im Kreis tanzen", "Laut lachen", "Auf die Nase fassen", //4
				"Den linken Nachbar anstupsen", "Beide Hände auf den Boden", "Die Zunge raus strecken", //3
				"Auf einem Bein stehen", "Im Kreis hüpfen", "Die Augen rollen", "In die Hände klatschen", //4
				"Auf einem Bein h&uuml;pfen", "Den rechten Nachbar anstupsen", "Laut husten", "Sich r&auml;uspern", //4
				"Am Ohr zupfen", "Hampelmann", "Eine Kniebeuge"]; //3

	$("#nochNie").click(function() {
		zaehlerNochNie = Math.floor(Math.random() * arrayNochNie.length);
		$("#anzeigeNochNie").hide();
        $("#anzeigeNochNie").html(arrayNochNie[zaehlerNochNie]).fadeIn();
		$(this).css("border-color", "#FFF5B3");
		setTimeout(function(){
			$('#nochNie').css('border-color','#FFEB66');}, 100);
	});

	$("#gameNameNochNie").click(function () {
	  	if ($("#divTextNochNie" ).is(":hidden") && !openNochNie) {
	  		openNochNie = true;
	    	$("#divTextNochNie").slideDown("slow");
	    	$(".fragezeichenIcons").attr("src","../img/ausrufezeichen.png");
	  	} 
	  	else if ($("#divTextNochNie" ).is(":visible") && openNochNie){
	  		openNochNie = false;
	    	$("#divTextNochNie").slideUp("slow");
	    	$(".fragezeichenIcons").attr("src","../img/fragezeichen.png");
	  	}
	});
});