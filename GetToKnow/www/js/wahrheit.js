var stopDeg, stopRounds, roundsCount;
var stop;
var loop;
var degreesCount = 0;
function run(){
    stopDeg = Math.floor((Math.random() * 360) + 1);
    stopRounds = Math.floor((Math.random() * 4) + 2);
    stop = false;
    roundsCount = 0;
    degreesCount = 0;
    rotateArrow();
}
function rotateArrow(){
    while(!stop){ 
        document.getElementById("arrow").style.transform = "rotate("+degreesCount+"deg)";
        loop = setTimeout('rotateArrow()', 10);
        degreesCount++;
        if(degreesCount > 359){
            degreesCount = 1;
            roundsCount++;
        }
        if (degreesCount == stopDeg && roundsCount == stopRounds){
            stop =true;
        }
    } 
}

