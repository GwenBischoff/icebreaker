var stopDeg, stopRounds, roundsCount;
var stop, loop; 
var start = true;
var degreesCount = 0;
var openWahrheit = false;
    
function rotateArrow(){
    console.log("rotate");
    if(!stop){
        /*Roatate image*/ 
        document.getElementById("arrow").style.transform = "rotate("+degreesCount+"deg)";
        
        /*Self calling funtion*/
        loop = setTimeout('rotateArrow()', 0.05);
        
        /*Increases degrees & rounds*/
        degreesCount++;
        if(degreesCount > 359){
            degreesCount = 1;
            roundsCount++;
        } 

        /*Stop numbers reached?*/
        if(roundsCount >= stopRounds && degreesCount >= stopDeg){
            stop =true;  
            start = true;  
        }
    } 
}

$(document).bind('pageinit', function() {

    $("#arrow").click(function(){

        if (start){
            /*Creats random degree and amount of rounds*/
            stopDeg = Math.floor((Math.random() * 360) + 1);
            stopRounds = Math.floor((Math.random() * 4) + 1);
            
            /*Boolean to stop when random created numbers are reached*/
            stop = false;

            /*Sets rounds to zero when new round started*/
            roundsCount = 0;

            rotateArrow();
            
            /*Prevents from starting again before action is performed*/
            start = false;
        }
    });

    $("#gameNameWahrheit").click(function () {
        if ($("#divTextWahrheit" ).is(":hidden") && !openWahrheit) {
            openWahrheit = true;
            $("#divTextWahrheit").slideDown("slow");
            $(".fragezeichenIcons").attr("src","../img/ausrufezeichen.png");
        } 
        else if ($("#divTextWahrheit" ).is(":visible") && openWahrheit){
            openWahrheit = false;
            $("#divTextWahrheit").slideUp("slow");
            $(".fragezeichenIcons").attr("src","../img/fragezeichen.png");
        }
    });
});