$(document).bind('pageinit', function() {
	var zaehlerKoffer;
	var openKoffer = false;
	var arrayKoffer = ["ein Handtuch", 
				  "Sonnencreme", 
				  "einen Hut", 
				  "Lockenwickler",
				  "meinen PC",
				  "meinen Hund",
				  "einen netten Kerl",
				  "ein Kleid",
				  "Strohhalme",
				  "ein weisses Schaf",
				  "B&uuml;cher",
				  "eine Taschenlampe",
				  "ein Kopfkissen",
				  "Vanilleeis",
				  "ein Klavier",
				  "Schuhe",
				  "ein paar Hanteln",
				  "einen MP3 Player",
				  "einen Grill",
				  "einen Volleyball"];

	$("#begriffKofferPacken").click(function() {
		zaehlerKoffer = Math.floor(Math.random() * arrayKoffer.length);
		$("#begriffKofferPacken").html(arrayKoffer[zaehlerKoffer]);
		$(this).css("border-color", "#F8FBE9");
			setTimeout(function(){
		$('#begriffKofferPacken').css('border-color','#E2EFA9');}, 100);
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