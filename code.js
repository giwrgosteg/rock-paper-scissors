const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
const results = document.getElementById("results");
const score = document.getElementById("score");
const rematch = document.getElementById("rematch");

rematch.style.visibility = "hidden";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let jajanken = ["rock", "paper", "scissors"];
    let janken = jajanken[Math.floor(Math.random() * jajanken.length)];
    return janken
}

function playRound(humanChoice) {
    let computerChoise = getComputerChoice();
    let result;

    if (humanChoice == computerChoise) {
        result = "Draw!";
    }

    else if (humanChoice == "rock"){
        if (computerChoise == "scissors") {
            result = "You win, "  + humanChoice + " beats " + computerChoise;
            humanScore += 1;
        }

        else if (computerChoise == "paper"){
            result = "You lose, " + computerChoise +" beats " + humanChoice;
            computerScore += 1;
        }
    }
    
    else if (humanChoice == "paper") {
        if (computerChoise == "rock") {
            result = "You win, "  + humanChoice + " beats " + computerChoise;
            humanScore += 1;
        }
        
        else if (computerChoise == "scissors") {
            result = "You lose, " + humanChoice +" beats " + computerChoise;
            computerScore += 1;
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoise == "paper") {
            result = "You win, "  + humanChoice + " beats " + computerChoise;
            humanScore += 1;
        }

        else if (computerChoise == "rock") {
            result = "You lose, " + computerChoise +" beats " + computerChoise;
            computerScore += 1;
        }
    }

    if (humanScore == 5) {
        score.textContent = "Player wins!";
        results.textContent = "";
        rockButton.style.visibility = "hidden";
        paperButton.style.visibility = "hidden";
        scissorsButton.style.visibility = "hidden";
        rematch.style.visibility = "visible";
    }
    else if (computerScore == 5) {
        score.textContent = "Computer wins!";
        results.textContent = "";
        rockButton.style.visibility = "hidden";
        paperButton.style.visibility = "hidden";
        scissorsButton.style.visibility = "hidden";
        rematch.style.visibility = "visible";
    }
    else {
        score.textContent = "Player: " + humanScore + "| Computer: " + computerScore;
        results.textContent = result;
    }
}

rockButton.onclick = () => playRound("rock");
paperButton.onclick = () => playRound("paper");
scissorsButton.onclick = () => playRound("scissors");
rematch.onclick = function() {
    rockButton.style.visibility = "visible";
    paperButton.style.visibility = "visible";
    scissorsButton.style.visibility = "visible";
    rematch.style.visibility = "hidden";
    humanScore = 0;
    computerScore = 0;
}