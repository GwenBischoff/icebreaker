$( document ).ready(function() {
	init();

	var zufall = 0;

	function init()
	{
		zufall = 0;
	}

	function neuerBegriff()
	{
		zufall = Math.floor((Math.random() * 8) + 1);  //Zahl zwischen 1 und 8
		
		if(zufall == 1){
			document.getElementById("anzeige").innerHTML="Schuhgr&ouml;&szlig;e";
		}
		if(zufall == 2){
			document.getElementById("anzeige").innerHTML="Alter";
		}
		if(zufall == 3){
			document.getElementById("anzeige").innerHTML="Vorname";
		}
		if(zufall == 4){
			document.getElementById("anzeige").innerHTML="Nachname";
		}
		if(zufall == 5){
			document.getElementById("anzeige").innerHTML="Haarl&auml;nge";
		}
		if(zufall == 6){
			document.getElementById("anzeige").innerHTML="K&ouml;rpergr&ouml;&szlig;e";
		}
		if(zufall == 7){
			document.getElementById("anzeige").innerHTML="Farbe des Oberteils";
		}
		if(zufall == 8){
			document.getElementById("anzeige").innerHTML="Geburtsort alphabetisch";
		}
	}
}