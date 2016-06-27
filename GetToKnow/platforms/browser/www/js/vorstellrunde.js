$(document).bind('pageinit', function() {
	var zaehlerVorstell;
	var openVorstell = false;
	var arrayVorstell = ["Wann gehst du normalerweise ins Bett?", 
				  "Was ist f&uuml;r dich typisch?", 
				  "Hast du Geschwister?", 
				  "Wie w&uuml;rdest du dich selbst beschreiben?",
				  "Neigst du zum Aberglauben?",
				  "Welche Eigenschaften magst du nicht an dir?",
				  "Was befindet sich unter deinem Bett?",
				  "Was kannst du gar nicht gut?",
				  "Was sind deine Hobbys?",
				  "Wer hat dich zuletzt richtig &uuml;berrascht?",
				  "Was isst du am liebsten?",
				  "Was ist dein liebstes Salatdressing?",
				  "Was trinkst du am liebsten?",
				  "Was empfiehlst du als sehenswert in deiner Stadt?",
				  "Bist du eher ein Gef&uuml;hlsmensch oder ein Verstandesmensch?",
				  "W&auml;rst du gerne noch einmal j&uuml;nger?",
				  "Bist du gerne in der Natur?",
				  "Welche Zahnpasta benutzt du?",
				  "Welchen Prominenten w&uuml;rdest du gerne einmal treffen?",
				  "Nach was bist du s&uuml;chtig?",
				  "W&uuml;rdest du gerne einmal im Weltall sein?",
				  "Was ist zur Zeit dein Lieblingssong?",
				  "Welches ist dein Lieblingsbuch?",
				  "Welche Farbe hat die Tapete in deinem Schlafzimmer?",
				  "Wer ist dein Lieblingsautor?",
				  "Was ist dein Lieblingsfilm?",
				  "Welche Hobbys hattest du als Kind?",
				  "F&uuml;hrst du ein Tagebuch?",
				  "Bist du ein Tag- oder Nachtmensch?",
				  "Kochst du gerne?",
				  "Was ist dein Lieblings-Wochentag?",
				  "Wie wachst du morgens auf?",
				  "Wo machst du am liebsten Urlaub?",
				  "Was war der letzte Film, den du im Kino gesehen hast?",
				  "Was ist deine Lieblingssportart?",
				  "Was machst du, wenn du Langeweile hast?",
				  "Wovor hast du Angst?",
				  "Wie h&auml;ltst du dich fit?"];

	$("#begriffVorstell").click(function() {
		zaehlerVorstell = Math.floor((Math.random() * arrayVorstell.length));
		$("#anzeigeVorstell1").html(arrayVorstell[zaehlerVorstell]);	
	});

	$("#gameNameVorstell").click(function () {
	  	if ($("#divTextVorstell" ).is(":hidden") && !openVorstell) {
	    	openVorstell = true;
	    	$("#divTextVorstell").slideDown("slow");
	    	$(".fragezeichenIcons").attr("src","../img/ausrufezeichen.png");
	  	} 
	  	else if ($("#divTextVorstell" ).is(":visible") && openVorstell){
	    	openVorstell = false;
	    	$("#divTextVorstell").slideUp("slow");
	    	$(".fragezeichenIcons").attr("src","../img/fragezeichen.png");
	  	}
	});
});