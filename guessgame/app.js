var start = document.querySelector("#start");
start.addEventListener("click",reset);


var reset = function(){
    document.querySelector(".start").innerHTML="Start again...";
    var player1name = prompt("Enter the name of player 1 -: ");
    document.querySelector(".player-1-name").innerHTML=player1name;
    var player2name = prompt("Enter the name of player 2 -: ");
    document.querySelector(".player-2-name").innerHTML=player2name;

    var p1score=0;
    document.querySelector(".player-1-score").innerHTML=p1score;
    var p2score=0;
    document.querySelector(".player-2-score").innerHTML=p2score;

    document.querySelector(".actual-number").innerHTML="";
}

// reset();

function roundplay(){
    var p1input;
    var p2input;
}

function randomnumbergenerator(){
    var x= parseInt(Math.random()*25)+1;
    return x;
}