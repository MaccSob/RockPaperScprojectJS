const paper = document.getElementById("paper");
let score = 0;
let pcScore = 0;
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const scoreMess = document.getElementById("result"); 
rock.addEventListener('click', function() {
playRound("rock", computerPlay());
});
paper.addEventListener('click', function() {
    playRound("paper", computerPlay());
    });
scissors.addEventListener('click', function() {
        playRound("scissors", computerPlay());
        });
        
    function computerPlay() {
        let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
    }
function playRound(playerSelection, computerSelection) {
    score = score;
    pcScore = pcScore;
    let winner = ""
     computerSelection = computerPlay();

if (computerSelection === playerSelection) {
    winner = "It's a tie!";
    }
 else if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "scissors" && computerSelection == "rock") ||
    (playerSelection == "paper" && computerSelection == "scissors")
  ) {
        pcScore = pcScore + 1;
        winner  = "computer";
}
else {
     score = score + 1;
    winner = "player";
}
console.log("Computer: " + computerSelection + ", Player: " + playerSelection + ", Winner: " + winner);
showResults(playerSelection,computerSelection,winner,score, pcScore);
declareWinner(winner,score,pcScore)
console.log(score);
console.log(pcScore);
}
function showResults(playerSelection,computerSelection,winner,score, pcScore) {
    if (winner === 'player') {
        scoreMess.textContent = " You won! " + ( playerSelection ) + " beats " + ( computerSelection ) + " Current score: " + score;
    } 
    else if (winner === 'computer') {
        scoreMess.textContent = " You lost! " + (computerSelection) + " beats " + (playerSelection) + " Current score: " + pcScore;

    }
    else if (playerSelection === computerSelection) {
        scoreMess.textContent = "No winners here!";
    }
}
function declareWinner(winner,score,pcScore) {
    if (winner === 'player' && score === 5) {
        alert("Great job! U won!");
    }
    else if (winner === 'computer' && pcScore === 5) {
        alert("Dang! u Lost!");
    }
}