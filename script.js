let playerSelection = prompt("Choose your weapon!")
let computerSelection;
let pcScore = 0;
let score = 0;
    function computerPlay() {
        var random = ["rock", "paper", "scissors"];
        return random = [Math.floor(Math.random()* random.length)];
}
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection;
    score = score;
    pcScore = pcScore;

if (computerSelection === playerSelection) {
    return "Tie";
    }
 else if (computerSelection == "rock" && playerSelection == "scissors") {
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock") 
        pcScore =+ 1;
        return "PC wins";
}
else if (computerSelection == "rock" && playerSelection == "paper")  {
(computerSelection == "paper" && playerSelection == "scissors") ||
(computerSelection == "rock" && playerSelection == "paper")
score =+ 1;
 return "You win";
}


}
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log("Your score is : " + score);
        console.log("Computer score is : " + pcScore);
     }
     
}
game();