var zaehler;
var fragen = ["Wann gehst du normalerweise ins Bett?", 
			  "Was ist f�r dich typisch?", 
			  "Hast du Geschwister?", 
			  "Wie w�rdest du dich selbst beschreiben?",
			  "Neigst du zum Aberglauben?",
			  "Welche Eigenschaften magst du nicht an dir?",
			  "Was befindet sich unter deinem Bett?",
			  "Was kannst du gar nicht gut?",
			  "Was sind deine Hobbys?",
			  "Wer hat dich zuletzt richtig �berrascht?",
			  "Was isst du am liebsten?",
			  "Was ist dein liebstes Salatdressing?",
			  "Was trinkst du am liebsten?",
			  "Was empfiehlst du als sehenswert in deiner Stadt?",
			  "Bist du eher ein Gef�hlsmensch oder ein Verstandesmensch?",
			  "W�rst du gerne noch einmal j�nger?",
			  "Bist du gerne in der Natur?",
			  "Welche Zahnpasta benutzt du?",
			  "Welchen Prominenten w�rdest du gerne einmal treffen?",
			  "Nach was bist du s�chtig?",
			  "W�rdest du gerne einmal im Weltall sein?",
			  "Was ist zur Zeit dein Lieblingssong?",
			  "Welches ist dein Lieblingsbuch?",
			  "Welche Farbe hat die Tapete in deinem Schlafzimmer?",
			  "Wer ist dein Lieblingsautor?",
			  "Was ist dein Lieblingsfilm?",
			  "Welche Hobbys hattest du als Kind?",
			  "F�hrst du ein Tagebuch?",
			  "Bist du ein Tag- oder Nachtmensch?",
			  "Kochst du gerne?",
			  "Was ist dein Lieblings-Wochentag?",
			  "Wie wachst du morgens auf?",
			  "Wo machst du am liebsten Urlaub?",
			  "Was war der letzte Film, den du im Kino gesehen hast?",
			  "Was ist deine Lieblingssportart?",
			  "Was machst du, wenn du Langeweile hast?",
			  "Wovor hast du Angst?",
			  "Wie h�ltst du dich fit?"];

function neueFragen(){
	zaehler = Math.floor((Math.random() * fragen.length));
	document.getElementById("anzeige1").innerHTML=fragen[zaehler];
	zaehler = Math.floor((Math.random() * fragen.length));
	document.getElementById("anzeige2").innerHTML=fragen[zaehler];
	zaehler = Math.floor((Math.random() * fragen.length));
	document.getElementById("anzeige3").innerHTML=fragen[zaehler];
}