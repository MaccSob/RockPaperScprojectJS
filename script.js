const random = ["rock", "paper", "scissors"];
let pcScore = 0;
let score = 0;
const playerSelection = prompt("Rock,paper,scissors?");
const computerSelection = computerPlay();
    function computerPlay() {
        return random[~~(Math.random() * random.length)];
    }
function playRound(computerSelection, playerSelection) {
    score = score;
    pcScore = pcScore;

if (computerSelection === playerSelection) {
    alert("Tie");
    }
 else if (computerSelection == "rock" && playerSelection == "scissors") {
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock") 
        pcScore =+ 1;
        alert("PC wins");
}
else if (computerSelection == "rock" && playerSelection == "paper")  {
(computerSelection == "paper" && playerSelection == "scissors") ||
(computerSelection == "rock" && playerSelection == "paper")
     score =+ 1;
    alert("You win");
}


}
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerPlay());
        console.log("Your score is : " + score);
        console.log("Computer score is : " + pcScore);
     }
     
}
console.log(computerPlay());
console.log(playRound(playerSelection, computerSelection));
game();

