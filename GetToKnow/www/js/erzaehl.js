init();

var zaehler = 1;
var unterZehn = true;

function init()
{
	zaehler = 1;
	unterZehn = true;
}


function zaehlen()
{
	if(unterZehn == true){
		if (zaehler == 1){
			$('#hochzaehlen').val('2');
		}
		if (zaehler == 2){
			$('#hochzaehlen').val('3');
		}
		if (zaehler == 3){
			$('input[id=hochzaehlen]').val('4');
		}
		if (zaehler == 4){
			document.getElementById("hochzaehlen").value="5";
		}
		if (zaehler == 5){
			document.getElementById("hochzaehlen").value="6";
		}
		if (zaehler == 6){
			document.getElementById("hochzaehlen").value="7";
		}
		if (zaehler == 7){
			document.getElementById("hochzaehlen").value="8";
		}
		if (zaehler == 8){
			document.getElementById("hochzaehlen").value="9";
		}
		if (zaehler == 9){
			document.getElementById("hochzaehlen").value="10";
			unterZehn = false;
		}
		zaehler = zaehler + 1;
	}
}

function bestaetigen()
{

	document.getElementById("hochzaehlen").style.display="none";
	document.getElementById("ok").style.display="none";
	document.getElementById("anzeige").innerHTML=zaehler;
}