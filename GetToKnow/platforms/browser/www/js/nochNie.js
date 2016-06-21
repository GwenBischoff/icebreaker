$(document).bind('pageinit', function() {
	var zaehlerNochNie;
	var arrayNochNie  = ["Arme hochheben", "Einmal im Kreis tanzen", "Laut lachen", "Auf die Nase fassen", //4
				"Den linken Nachbar anstupsen", "Beide Hände auf den Boden", "Die Zunge raus strecken", //3
				"Auf einem Bein stehen", "Im Kreis hüpfen", "Die Augen rollen", "In die Hände klatschen", //4
				"Auf einem Bein hüpfen", "Den rechten Nachbar anstupsen", "Laut husten", "Sich räuspern", //4
				"Am Ohr zupfen", "Hampelmann", "Eine Kniebeuge"]; //3

	$("#nochNie").click(function() {
		zaehlerNochNie = Math.floor(Math.random() * arrayNochNie.length);
		$("#anzeigeNochNie").html(arrayNochNie[zaehlerNochNie]);
	});

	$("#gameNameNochNie").click(function () {
	  	if ($("#divTextNochNie" ).is(":hidden")) {
	    	$("#divTextNochNie").slideDown("slow");
	  	} 
	  	else {
	    	$("#divTextNochNie").slideUp("slow");
	  	}
	});
});