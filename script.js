var random = ["rock", "paper", "scissors"];
var playerSelection = prompt("Choose your weapon!")
var computerSelection =  [Math.floor(Math.random()* random.length)];
    function computerPlay() {
        return random = [Math.floor(Math.random()* random.length)];
}
function playRound(playerSelection, computerSelection) {
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
console.log(computerSelection);
playRound();
