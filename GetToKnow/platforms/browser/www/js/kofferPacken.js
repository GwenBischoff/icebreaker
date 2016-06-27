$(document).bind('pageinit', function() {
	var zaehlerKoffer;
	var openKoffer = false;
	var arrayKoffer = ["ein Handtuch", 
				  "Sonnencreme", 
				  "einen Hut", 
				  "ein Chemiebuch",
				  "meinen Dienstschlüssel",
				  "meinen Hund",
				  "einen netten Kerl",
				  "eine Fliegenklatsche",
				  "einen Staubsauger",
				  "ein weisses Schaf",
				  "ein schwarzes Schaf",
				  "eine Taschenlampe",
				  "Tabletten gegen Reisekrankheit",
				  "Vanilleeis",
				  "Sagrotan Desinfektionstücher",
				  "eine Bauchweghose",
				  "ein paar Hanteln",
				  "meine Heino Schallplattensammlung",
				  "Kühlschrankmagneten",
				  "einen Volleyball"];

	$("#begriffKofferPacken").click(function() {
		zaehlerKoffer = Math.floor(Math.random() * arrayKoffer.length);
		$("#anzeigeKoffer").html(arrayKoffer[zaehlerKoffer]);
	});

	$("#gameNameKoffer").click(function () {
	  	if ($("#divTextKoffer" ).is(":hidden") && !openKoffer) {
	  		openKoffer = true;
	    	$("#divTextKoffer").slideDown("slow");
	    	$(".fragezeichenIcons").attr("src","../img/ausrufezeichen.png");
	  	} 
	  	else if ($("#divTextKoffer" ).is(":visible") && openKoffer){
	  		openKoffer = false;
	    	$("#divTextKoffer").slideUp("slow");
	    	$(".fragezeichenIcons").attr("src","../img/fragezeichen.png");
	  	}
	});
});