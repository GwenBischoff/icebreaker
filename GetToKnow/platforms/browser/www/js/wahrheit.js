var stopDeg;
var stopRounds;
var elem;
var roundsCount = 0;
var degreesCount = 0;
var stop;
var loop;
function run(){
    stopDeg = Math.floor((Math.random() * 360) + 1);
    stopRounds = Math.floor((Math.random() * 4) + 2);
    stop = false;

    while(!stop){
        setTimeout(rotateArrow, 100);  
        if (degreesCount == stopDeg && roundsCount == stopRounds){
            stop =true;
        } 
    };
}
function rotateArrow(){
    degreesCount++;
    if(degreesCount > 359){
        degreesCount = 1;
        roundsCount++;
    }
    document.getElementById("arrow").style.transform = "rotate("+degreesCount+"deg)";
}

