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
        alert("Invalid choice, try again!");
        humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoise);
    }

    else {
        if (humanChoice == computerChoise) {
            alert("Draw!");
        }

        else if (humanChoice == "rock"){
            if (computerChoise == "scissors") {
                alert("You win, "  + humanChoice + " beats " + computerChoise);
                humanScore += 1;
            }

            else if (computerChoise == "paper"){
                alert("You lose, " + computerChoise +" beats " + humanChoice);
                computerScore += 1;
            }
        }
        
        else if (humanChoice == "paper") {
            if (computerChoise == "rock") {
                alert("You win, "  + humanChoice + " beats " + computerChoise);
                humanScore += 1;
            }
            
            else if (computerChoise == "scissors") {
                alert("You lose, " + humanChoice +" beats " + computerChoise);
                computerScore += 1;
            }
        }

        else if (humanChoice == "scissors") {
            if (computerChoise == "paper") {
                alert("You win, "  + humanChoice + " beats " + computerChoise);
                humanScore += 1;
            }

            else if (computerChoise == "rock") {
                alert("You lose, " + computerChoise +" beats " + computerChoise);
                computerScore += 1;
            }
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
        playRound(human, computer);
    }
    alert("Human score is: " + humanScore + " Computer score is: " + computerScore);
}

rounds();