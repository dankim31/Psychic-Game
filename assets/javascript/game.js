
var choices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 'u', "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var letterGuess = [];

var computerChoice = choices[Math.floor(Math.random() * choices.length)];


document.onkeyup= function(event) {
    var myGuess = event.key;

    if(myGuess === computerChoice){
        wins++;
        guessesLeft = 9;
        letterGuess = [];
    }
    if(myGuess != computerChoice) {
        guessesLeft--;
        letterGuess.push(myGuess);
    }
    if(guessesLeft === 0) {
        guessesLeft = 9;
        losses++;
    }

    

    document.getElementById("wins").textContent = ("Wins: " + wins);
    document.getElementById("losses").textContent = ("Losses: " + losses);
    document.getElementById("guesses-left").textContent = ("Guesses left: " + guessesLeft);
    document.getElementById("my-guesses").textContent = ("Your guesses so far: " + letterGuess);
}

