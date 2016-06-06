var zaehler;
var action = ["... du 1 Million Euro im Lotto gewinnst?", 
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

function wasWenn(){
	zaehler = Math.floor((Math.random() * 16));
	document.getElementById("anzeige").innerHTML=action[zaehler];
}	
	