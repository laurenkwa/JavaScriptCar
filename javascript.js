var shapes = document.getElementById("car");
var contextShapes = shapes.getContext("2d");

//smoke dimensions
var basexStart = 816; 
var basexEnd = 900;
var baseyStart= 100;
var baseyEnd = 200;

var increment=5;
var currentInterval;
var elem = document.querySelector('input[type="range"]'); 
var timer = null;

var rangeValue = function(){ //clears interval as setsInterval according to input range value
    
    clearInterval(timer);
    var delay = elem.value;

    if(delay==1) {
        clearInterval(timer);
        timer = setInterval(draw, 3000);
        currentInterval=true;
    }

    if(delay==2) {
        clearInterval(timer);
        timer = setInterval(draw, 1000);
        currentInterval=true;
    }

    if(delay==3) {
        clearInterval(timer);
        timer = setInterval(draw, 3);
        currentInterval=true;
    }


}

elem.addEventListener("input", rangeValue);

function car() { //draws the car onto html webpage
            contextShapes.rect(800,50,400,200); //white rectangle for smoke
            contextShapes.beginPath();
            contextShapes.strokeStyle = "white";
            contextShapes.stroke();
            contextShapes.closePath();

            contextShapes.strokeStyle = "black";
            contextShapes.moveTo(250,450);
            contextShapes.lineTo(550,450);
            contextShapes.lineTo(550,250);
            contextShapes.lineTo(250,250);
            contextShapes.fillStyle = "silver";
            contextShapes.lineWidth = 3;
            contextShapes.fill();
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(255,345);
            contextShapes.lineTo(395,345);
            contextShapes.lineTo(395,255);
            contextShapes.lineTo(255,255);
            contextShapes.fillStyle = "aqua";
            contextShapes.lineWidth = 1;
            contextShapes.fill();
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(405,345);
            contextShapes.lineTo(545,345);
            contextShapes.lineTo(545,255);
            contextShapes.lineTo(405,255);
            contextShapes.fillStyle = "aqua";
            contextShapes.lineWidth = 1;
            contextShapes.fill();
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(250,250);
            contextShapes.lineTo(450,050);
            contextShapes.lineTo(750,050);
            contextShapes.lineTo(550,250);
            contextShapes.fillStyle = "silver";
            contextShapes.lineWidth = 3;
            contextShapes.fill();
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(550,250);
            contextShapes.lineTo(550,450);
            contextShapes.lineTo(750,250);
            contextShapes.lineTo(750,050);
            contextShapes.fillStyle = "silver";
            contextShapes.lineWidth = 3;
            contextShapes.fill();
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(555,340);
            contextShapes.lineTo(595,300);
            contextShapes.lineTo(595,208);
            contextShapes.lineTo(555,251);
            contextShapes.fillStyle = "aqua";
            contextShapes.lineWidth = 1;
            contextShapes.fill();
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(605,290);
            contextShapes.lineTo(645,250);
            contextShapes.lineTo(645,156);
            contextShapes.lineTo(605,199);
            contextShapes.fillStyle = "aqua";
            contextShapes.lineWidth = 1;
            contextShapes.fill();
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(655,240);
            contextShapes.lineTo(695,200);
            contextShapes.lineTo(695,104);
            contextShapes.lineTo(655,147);
            contextShapes.fillStyle = "aqua";
            contextShapes.lineWidth = 1;
            contextShapes.fill();
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(705,190);
            contextShapes.lineTo(745,150);
            contextShapes.lineTo(745,52);
            contextShapes.lineTo(705,95);
            contextShapes.fillStyle = "aqua";
            contextShapes.lineWidth = 1;
            contextShapes.fill();
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(250,350);
            contextShapes.lineTo(550,350);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();
            
            contextShapes.beginPath();
            contextShapes.moveTo(400,350);
            contextShapes.lineTo(400,250);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(550,350);
            contextShapes.lineTo(750,150);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(650,250);
            contextShapes.lineTo(650,150);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(600,300);
            contextShapes.lineTo(600,200);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(700,200);
            contextShapes.lineTo(700,100);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(390,340);
            contextShapes.lineTo(390,260);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(390,300);
            contextShapes.lineTo(370,350);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(410,340);
            contextShapes.lineTo(410,260);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(410,300);
            contextShapes.lineTo(430,350);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(320,440);
            contextShapes.lineTo(480,440);
            contextShapes.lineTo(480,360);
            contextShapes.lineTo(320,360);
            contextShapes.fillStyle = "grey";
            contextShapes.lineWidth = 3;
            contextShapes.fill();
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(320,430);
            contextShapes.lineTo(480,430);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(320,420);
            contextShapes.lineTo(480,420);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(320,410);
            contextShapes.lineTo(480,410);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(320,400);
            contextShapes.lineTo(480,400);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(320,390);
            contextShapes.lineTo(480,390);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(320,380);
            contextShapes.lineTo(480,380);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(320,370);
            contextShapes.lineTo(480,370);
            contextShapes.lineWidth = 3;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.arc(300, 400, 20, 0, Math.PI * 2, false);
            contextShapes.closePath();
            contextShapes.fillStyle = "yellow";
            contextShapes.fill();
            contextShapes.lineWidth = 3;
            contextShapes.stroke();
            contextShapes.beginPath();
            contextShapes.arc(500, 400, 20, 0, Math.PI * 2, false);
            contextShapes.closePath();
            contextShapes.fillStyle = "yellow";
            contextShapes.fill();
            contextShapes.lineWidth = 3;
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(250,249);
            contextShapes.lineTo(450,050);
            contextShapes.lineTo(750,050);
            contextShapes.lineTo(550,250);
            contextShapes.fillStyle = "silver";
            contextShapes.lineWidth = 3;
            contextShapes.fill();
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath(); //exhaust pipe
            contextShapes.moveTo(750,250);
            contextShapes.lineTo(780,220);
            contextShapes.lineTo(770,210);
            contextShapes.lineTo(750,230);
            contextShapes.fillStyle = "grey";
            contextShapes.lineWidth = 2;
            contextShapes.fill();
            contextShapes.closePath();
            contextShapes.stroke();
    
            contextShapes.beginPath(); //exhause pipe
            contextShapes.arc(776,213.5,7,10,Math.PI/3.4);
            contextShapes.lineWidth = 2;
            contextShapes.strokeStyle="black";
            contextShapes.fill();
            contextShapes.stroke();
            
            contextShapes.beginPath();
            contextShapes.moveTo(450,150);
            contextShapes.lineTo(550,150);
            contextShapes.lineTo(580,120);
            contextShapes.lineTo(480,120);
            contextShapes.fillStyle = "grey";
            contextShapes.lineWidth = 5;
            contextShapes.fill();
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(450,150);
            contextShapes.lineTo(550,150);
            contextShapes.lineTo(520,180);
            contextShapes.lineTo(420,180);
            contextShapes.fillStyle = "aqua";
            contextShapes.lineWidth = 5;
            contextShapes.fill();
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(520,187);
            contextShapes.lineTo(415,187);
            contextShapes.lineWidth = 10;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(518,188);
            contextShapes.lineTo(575,130);
            contextShapes.lineWidth = 10;
            contextShapes.closePath();
            contextShapes.stroke();

            contextShapes.beginPath();
            contextShapes.moveTo(580,128);
            contextShapes.lineTo(575,128);
            contextShapes.lineWidth = 10;
            contextShapes.closePath();
            contextShapes.stroke();
            
            //wheels
            contextShapes.lineWidth = 1;
            contextShapes.beginPath();
            contextShapes.moveTo(714,248);
            contextShapes.bezierCurveTo(733,248,749,268,749,293);
            contextShapes.bezierCurveTo(749,318,733,338,714,338);
            contextShapes.bezierCurveTo(695,338,679,318,679,293);
            contextShapes.bezierCurveTo(679,268,695,248,714,248);
            contextShapes.closePath();
            contextShapes.stroke();
            contextShapes.shadowOffsetX = 15;
            contextShapes.shadowOffsetY = 15;
            contextShapes.shadowBlur = 0;
            contextShapes.shadowColor = "rgba(0,0,0,0)";
            contextShapes.fillStyle = "rgba(0,0,0,1)";
            contextShapes.fill();

            contextShapes.lineWidth = 1;
            contextShapes.beginPath();
            contextShapes.moveTo(625,337);
            contextShapes.bezierCurveTo(644,337,660,357,660,382);
            contextShapes.bezierCurveTo(660,407,644,427,625,427);
            contextShapes.bezierCurveTo(606,427,590,407,590,382);
            contextShapes.bezierCurveTo(590,357,606,337,625,337);
            contextShapes.closePath();
            contextShapes.stroke();
            contextShapes.shadowOffsetX = 15;
            contextShapes.shadowOffsetY = 15;
            contextShapes.shadowBlur = 0;
            contextShapes.shadowColor = "rgba(0,0,0,0)";
            contextShapes.fillStyle = "rgba(0,0,0,1)";
            contextShapes.fill();

            contextShapes.lineWidth = 1;
            contextShapes.beginPath();
            contextShapes.moveTo(713,272);
            contextShapes.bezierCurveTo(722,272,730,282,730,295);
            contextShapes.bezierCurveTo(730,307,722,317,713,317);
            contextShapes.bezierCurveTo(703,317,695,307,695,295);
            contextShapes.bezierCurveTo(695,282,703,272,713,272);
            contextShapes.closePath();
            contextShapes.stroke();
            contextShapes.shadowOffsetX = 15;
            contextShapes.shadowOffsetY = 15;
            contextShapes.shadowBlur = 0;
            contextShapes.shadowColor = "rgba(0,0,0,0)";
            contextShapes.fillStyle = "rgba(205,205,205,1)";
            contextShapes.fill();

            contextShapes.lineWidth = 1;
            contextShapes.beginPath();
            contextShapes.moveTo(626,359);
            contextShapes.bezierCurveTo(635,359,643,369,643,382);
            contextShapes.bezierCurveTo(643,394,635,404,626,404);
            contextShapes.bezierCurveTo(616,404,608,394,608,382);
            contextShapes.bezierCurveTo(608,369,616,359,626,359);
            contextShapes.closePath();
            contextShapes.stroke();
            contextShapes.shadowOffsetX = 15;
            contextShapes.shadowOffsetY = 15;
            contextShapes.shadowBlur = 0;
            contextShapes.shadowColor = "rgba(0,0,0,0)";
            contextShapes.fillStyle = "rgba(205,205,205,1)";
            contextShapes.fill();

            contextShapes.lineWidth = 1;
            contextShapes.beginPath();
            contextShapes.moveTo(711,272);
            contextShapes.lineTo(710,316);
            contextShapes.stroke();

            contextShapes.lineWidth = 1;
            contextShapes.beginPath();
            contextShapes.moveTo(696,293);
            contextShapes.lineTo(733,294);
            contextShapes.stroke();

            contextShapes.lineWidth = 1;
            contextShapes.beginPath();
            contextShapes.moveTo(726,275);
            contextShapes.lineTo(696,311);
            contextShapes.stroke();

            contextShapes.lineWidth = 1;
            contextShapes.beginPath();
            contextShapes.moveTo(695,274);
            contextShapes.lineTo(731,320);
            contextShapes.stroke();

            contextShapes.lineWidth = 1;
            contextShapes.beginPath();
            contextShapes.moveTo(623,358);
            contextShapes.lineTo(625,417);
            contextShapes.stroke();

            contextShapes.lineWidth = 1;
            contextShapes.beginPath();
            contextShapes.moveTo(598,385);
            contextShapes.lineTo(656,386);
            contextShapes.stroke();

            contextShapes.lineWidth = 1;
            contextShapes.beginPath();
            contextShapes.moveTo(601,357);
            contextShapes.lineTo(644,410);
            contextShapes.stroke();

            contextShapes.lineWidth = 1;
            contextShapes.beginPath();
            contextShapes.moveTo(639,361);
            contextShapes.lineTo(608,406);
            contextShapes.stroke();
        
            contextShapes.lineWidth = 1;
            contextShapes.beginPath();
            contextShapes.moveTo(620,426);
            contextShapes.lineTo(596,426);
            contextShapes.lineTo(598,425);
            contextShapes.lineTo(598,425);
            contextShapes.lineTo(598,425);
            contextShapes.bezierCurveTo(591,425,584,422,579,416);
            contextShapes.lineTo(595,407);
            contextShapes.fillStyle = "rgba(0,0,0,1)";
            contextShapes.fill();
            contextShapes.stroke();

            contextShapes.lineWidth = 1;
            contextShapes.beginPath();
            contextShapes.moveTo(712,337);
            contextShapes.lineTo(688,337);
            contextShapes.lineTo(690,336);
            contextShapes.lineTo(690,336);
            contextShapes.lineTo(690,336);
            contextShapes.bezierCurveTo(683,336,676,333,670,327);
            contextShapes.lineTo(684,318);
            contextShapes.fillStyle = "rgba(0,0,0,1)";
            contextShapes.fill();
            contextShapes.stroke();
    
            contextShapes.beginPath();
            contextShapes.fillStyle = "black";
            contextShapes.arc(290,450,10, 6.3, Math.PI);
            contextShapes.fill();
    
            

            timer = setInterval(draw, 3000); //sets interval of smoke upon loading of webpage
    
            draw(); //draws random smoke
           
         
}

function draw() { // draw random smoke shape
        shapes = document.getElementById("car");
        contextShapes = shapes.getContext("2d");
        contextShapes.clearRect(785,50,300,200);
         for (var i = 0; i <30; i++) {
        
                contextShapes.beginPath();
                contextShapes.fillStyle = "rgba(128,128,128,0.4)";
                contextShapes.arc(getRandomx(), getRandomy(), 20, 10, Math.PI/2,false);
                contextShapes.fill();
        
            }
    
            for (var i = 0; i < 30; i++) {
        
                contextShapes.beginPath();
                contextShapes.fillStyle = "rgb(128,128,128,0.2)";
                contextShapes.arc(getRandomx(), getRandomy(), 30, 6, Math.PI/2,1,false);
                contextShapes.fill();

              }
     }

function getRandomx() { //uses getRandomInt function as x coordinate of smoke
    var randomIntx = getRandomInt(basexStart, basexEnd);
    
    return randomIntx; 
    
}

function getRandomy() { //uses getRandomInt function as y coordinate of smoke
    var randomInty = getRandomInt(baseyStart, baseyEnd);
    
    return randomInty; 
    
}

function getRandomInt(min, max) { //gets a random integer in a range
  return Math.floor(Math.random() * (max - min + 1) + min);
}