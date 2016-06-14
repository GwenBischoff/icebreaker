var zaehler;
var fragen = ["Wann gehst du normalerweise ins Bett?", 
			  "Was ist für dich typisch?", 
			  "Hast du Geschwister?", 
			  "Wie würdest du dich selbst beschreiben?",
			  "Neigst du zum Aberglauben?",
			  "Welche Eigenschaften magst du nicht an dir?",
			  "Was befindet sich unter deinem Bett?",
			  "Was kannst du gar nicht gut?",
			  "Was sind deine Hobbys?",
			  "Wer hat dich zuletzt richtig überrascht?",
			  "Was isst du am liebsten?",
			  "Was ist dein liebstes Salatdressing?",
			  "Was trinkst du am liebsten?",
			  "Was empfiehlst du als sehenswert in deiner Stadt?",
			  "Bist du eher ein Gefühlsmensch oder ein Verstandesmensch?",
			  "Wärst du gerne noch einmal jünger?",
			  "Bist du gerne in der Natur?",
			  "Welche Zahnpasta benutzt du?",
			  "Welchen Prominenten würdest du gerne einmal treffen?",
			  "Nach was bist du süchtig?",
			  "Würdest du gerne einmal im Weltall sein?",
			  "Was ist zur Zeit dein Lieblingssong?",
			  "Welches ist dein Lieblingsbuch?",
			  "Welche Farbe hat die Tapete in deinem Schlafzimmer?",
			  "Wer ist dein Lieblingsautor?",
			  "Was ist dein Lieblingsfilm?",
			  "Welche Hobbys hattest du als Kind?",
			  "Führst du ein Tagebuch?",
			  "Bist du ein Tag- oder Nachtmensch?",
			  "Kochst du gerne?",
			  "Was ist dein Lieblings-Wochentag?",
			  "Wie wachst du morgens auf?",
			  "Wo machst du am liebsten Urlaub?",
			  "Was war der letzte Film, den du im Kino gesehen hast?",
			  "Was ist deine Lieblingssportart?",
			  "Was machst du, wenn du Langeweile hast?",
			  "Wovor hast du Angst?",
			  "Wie hältst du dich fit?"];

function neueFragen(){
	zaehler = Math.floor((Math.random() * fragen.length));
	document.getElementById("anzeige1").innerHTML=fragen[zaehler];
	zaehler = Math.floor((Math.random() * fragen.length));
	document.getElementById("anzeige2").innerHTML=fragen[zaehler];
	zaehler = Math.floor((Math.random() * fragen.length));
	document.getElementById("anzeige3").innerHTML=fragen[zaehler];
}