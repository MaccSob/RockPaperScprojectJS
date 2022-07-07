let computerSelection = ["Rock", "Paper", "Scissors"];
let random = [Math.floor(Math.random()* computerSelection.length)]

    function computerPlay() {
     return random;
}
function playRound(playerSelection, computerSelection) {
playerSelection = prompt("Choose");
computerSelection = computerPlay();
if(playerSelection === computerSelection) {
    alert("Tie!")
}
else if (computerSelection == "rock" && playerSelection == "scissors") {
(computerSelection == "scissors" && playerSelection == "paper") ||
(computerSelection == "paper" && playerSelection == "rock") 
alert("PC Wins!")
}
else if (computerSelection == "rock" && playerSelection == "paper")  {
(computerSelection == "paper" && playerSelection == "scissors") ||
(computerSelection == "rock" && playerSelection == "paper") 
alert("You win!");
}
}

console.log(random);