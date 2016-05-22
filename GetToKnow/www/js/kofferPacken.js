var zaehler;
var action = ["Handtuch", 
			  "Sonnencreme", 
			  "Hut", 
			  "Chemiebuch", 
			  "Volleyball"];

function kofferPacken(){
	zaehler = Math.floor((Math.random() * 5));
	document.getElementById("anzeige").innerHTML=action[zaehler];
}