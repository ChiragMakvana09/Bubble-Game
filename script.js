var timer = 60;
var score = 0;
var hitValue = 0; // Declare hitValue globally
var totalScore = 0; // if value store krke store krani h to...

function increaseScore(){
    score += 10;
    totalScore = document.querySelector("#scoreval").textContent = score;
    // console.log("totalScore")
}

function getNewHit(){
    hitValue = Math.floor(Math.random() * 10); // Modify the global hitValue
    document.querySelector("#hitval").textContent = hitValue; 
    console.log("hitValue: " + hitValue);
}

function makeBubble(){
    var clutter = "";
    for(var i = 1; i <= 144; i++){
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector('.pbottom').innerHTML = clutter;
}

function runTimer(){
    var timerint = setInterval(function(){ 
        if(timer > 0){
            timer--;
            document.querySelector('#timerval').textContent = timer;
        }else{
            clearInterval(timerint);
            // document.querySelector('.pbottom').innerHTML = `<h1> ${totalScore}</h1>`
            document.querySelector('.pbottom').innerHTML = `<h1>&#128526; Game Over &#128526;</h1>`
        }},1000);
}

document.querySelector(".pbottom").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    console.log("clickedNum: " + clickedNum);
    if(clickedNum === hitValue){ // Compare clicked number with the global hitValue
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();
