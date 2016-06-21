$(document).bind('pageinit', function() {
	var zufallSortieren;
	var arraySortieren =["Schuhgr&ouml;&szlig;e", "Alter", "Vorname",
						"Nachname", "Haarl&auml;nge", "K&ouml;rpergr&ouml;&szlig;e",
						"Farbe des Oberteils", "Geburtsort alphabetisch"];

	$("#begriffSortieren").click(function() {
		zufall = Math.floor(Math.random() * arraySortieren.length);  //Zahl zwischen 1 und 8
		$("#anzeigeSortieren").html(arraySortieren[i]);
		};
	});

	$("#gameNameSortieren").click(function () {
	  	if ($("#divTextSortieren" ).is(":hidden")) {
	    	$("#divTextSortieren").slideDown("slow");
	  	} 
	  	else {
	    	$("#divTextSortieren").slideUp("slow");
	  	}
	});
});