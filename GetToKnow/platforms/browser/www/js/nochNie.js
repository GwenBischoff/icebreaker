$( document ).ready(function() {
	var zaehler;
	var action  = ["Arme hochheben", "Einmal im Kreis tanzen", "Laut lachen", "Auf die Nase fassen", //4
				"Den linken Nachbar anstupsen", "Beide Hände auf den Boden", "Die Zunge raus strecken", //3
				"Auf einem Bein stehen", "Im Kreis hüpfen", "Die Augen rollen", "In die Hände klatschen", //4
				"Auf einem Bein hüpfen", "Den rechten Nachbar anstupsen", "Laut husten", "Sich räuspern", //4
				"Am Ohr zupfen", "Hampelmann", "Eine Kniebeuge"]; //3

	function nochNie(){
		zaehler = Math.floor((Math.random() * 18));
		document.getElementById("anzeige").innerHTML=action[zaehler];
	}
}