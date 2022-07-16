let playerSelection;
let computerSelection;
let pcScore = 0;
let score = 0;
let randomArray = ['rock', 'paper', 'scissors']
    function computerPlay() {
        let random = randomArray[Math.floor(Math.random() * randomArray.length)]
        return random;
    }
function playRound(computerSelection, playerSelection) {
    score = score;
    pcScore = pcScore;
     playerSelection = prompt("Rock,paper,scissors?");
     computerSelection = computerPlay();

if (computerSelection == playerSelection) {
    alert("Tie");
    }
 else if (computerSelection == "rock" && playerSelection == "scissors") {
        (computerSelection == "paper" && playerSelection == "rock") &&
        (computerSelection == "scissors" && playerSelection == "paper") 
        pcScore = pcScore + 1;
        alert("PC wins");
}
else if (computerSelection == "rock" && playerSelection == "paper")  {
(computerSelection == "paper" && playerSelection == "scissors") &&
(computerSelection == "scissors" && playerSelection == "rock")
     score = score + 1;
    alert("You win");
}


}
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerPlay());
        console.log("Your score is : " + score)
        console.log("Computer score is : " + pcScore);
     }


    }
    
     function results() {
        if (score === pcScore) {
            console.log("You guys are tied!");
        }
        else if (score > pcScore) {
            console.log("You won more rounds! Nice!")
        }
        else if(pcScore > score) {
            console.log("Crap! AI is taking over!")
        }
     }
console.log(computerPlay());
game();
results();;
