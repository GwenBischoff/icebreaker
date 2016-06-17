$( document ).ready(function() {
	var zaehler;
	var action = ["ein Handtuch", 
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

	function kofferPacken(){
		zaehler = Math.floor((Math.random() * 20));
		document.getElementById("anzeige").innerHTML=action[zaehler];
	}
});