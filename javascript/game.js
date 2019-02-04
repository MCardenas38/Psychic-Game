var letters= "abcdefghijklmnopqrstuvwxyz";
var finished = false;
var Wins = 0;
var Losses = 0;
var Guesses = 9;
var randomindex= Math.floor(Math.random() * 26);;
var target= letters[randomindex];
var userAns;
var userguesses= [];

var wintext= document.getElementById("countWins");
var losetext= document.getElementById("countLoses");
var guesstext= document.getElementById("countGuesses");
var userguesstext= document.getElementById("uguess");

guesstext.textContent= Guesses;

document.onkeyup = function(event){
    console.log(target);
    userAns= event.key;
    play(userAns);
}

function reset(){
    finished= false;
    Guesses = 9;
    randomindex= Math.floor(Math.random() * 26); 
    target= letters[randomindex];
    userguesses=[];
}

function play(input){
    if(input===target){
        ++Wins;
        alert("Correct!");
        reset();
    }
    else{
        alert("Wrong!");
        Guesses--;
        userguesses.push(input);
    }

    if(Guesses===-1){
        ++Losses;
        reset();
    }
    wintext.textContent= Wins;
    losetext.textContent= Losses;
    guesstext.textContent= Guesses;
    userguesstext.textContent = userguesses;
}