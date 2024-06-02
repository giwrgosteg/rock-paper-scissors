let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let jajanken = ["rock", "paper", "scissors"];
    let janken = jajanken[Math.floor(Math.random() * jajanken.length)];
    return janken
}

function getHumanChoice() {
    let choice = prompt("Enter a choice: (rock, paper, scissors)");
    return choice;
}

function checkHumanChoice(humanChoice) {
    if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
        return 1
    }
    else {
        return 0
    }
}

function playRound(humanChoice, computerChoise) {
    if (checkHumanChoice(humanChoice) == 0) {
        console.log("Invalid choice, try again!");
        humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoise);
    }
    else {
        if (humanChoice == computerChoise) {
            alert("Draw!");
            return 0;
        }
        else if (humanChoice == "rock" && computerChoise == "scissors") {
            console.log("You win, "  + humanChoice + " beats " + computerChoise);
            return 1;
        }
        else if (humanChoice == "paper" && computerChoise == "rock") {
            console.log("You win, "  + humanChoice + " beats " + computerChoise);
            return 1;
        }
        else if (humanChoice == "scissors" && computerChoise == "paper") {
            console.log("You win, "  + humanChoice + " beats " + computerChoise);
            return 1;
        }
        else if (humanChoice == "rock" && computerChoise == "paper") {
            console.log("You lose, " + computerChoise +" beats " + computerChoise);
            return -1;
        }
        else if (humanChoice == "scissors" && computerChoise == "rock") {
            console.log("You lose, " + computerChoise +" beats " + computerChoise);
            return -1;
        }
        else if (humanChoice == "paper" && computerChoise == "scissors") {
            console.lot("You lose, " + computerChoise +" beats " + computerChoise);
            return -1;
        }
    }
    
}

function rounds() {
    let human;
    let computer;
    num = prompt("GIve number of rounds: ");
    for (let i = 1; i <= num; i++) {
        human = getHumanChoice();
        computer = getComputerChoice();
        humanScore += playRound(human, computer);
    }
    if (humanScore >= 0){
        alert("Your score is: " + humanScore);
    }
    else {
        alert("Your score is: 0");
    }
}

rounds();