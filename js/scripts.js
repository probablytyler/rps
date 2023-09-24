const choices = ["rock", "paper", "scissors"];
let outcome = null
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function getPlayerChoice() {
    choice = prompt("Rock, Paper, or Scissors?");
    if (choice === null) {
        return playerSelection = null;
    } else {
        choice = choice.toLowerCase();
        if (!(choice === "rock" || choice === "paper" || choice === "scissors")) {
            alert("Incorrect, try again.");
            getPlayerChoice();
        }
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return outcome = "It's a tie!";
    } else if ((computerSelection === "rock" && playerSelection === "paper") || 
    (computerSelection === "paper" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "rock")) {
        playerScore++
        return outcome = "Player wins! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + "!";
    } else if ((computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")) {
        computerScore++
        return outcome = "Computer wins! " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection + "!";
    } else {
        return outcome = "oops";
    }
}

function game() {
    playerScore = 0;
    computerScore = 0;
    let i = 0
    while (i < 5) {
        const computerSelection = getComputerChoice()
        const playerSelection = getPlayerChoice()
        if (playerSelection === null) {
            alert("Game cancelled by Player.");
            return;
        } else {
            console.clear();
            playRound(playerSelection, computerSelection);
            outcomeCheck(playerSelection, computerSelection, outcome);
            scoreCheck();
        }
    }
}

function outcomeCheck(playerSelection, computerSelection, outcome) {
    console.log("Player chose " + playerSelection);
    console.log("Computer chose " + computerSelection);
    console.log("")
    console.log(outcome);
    console.log("")
    console.log("Player score is " + playerScore);
    console.log("Computer score is " + computerScore);
}


function scoreCheck() {
    if (playerScore >= 3) {
        alert("Player wins the game! Final score " + playerScore + " - " + computerScore);
        playAgain();
    } else if (computerScore >=3) {
        alert("Computer wins the game! Final score " + computerScore + " - " + playerScore);
        playAgain();
    } else if (playerScore > computerScore) {
        console.log("Player is winning!");
        return;
    } else if (playerScore < computerScore) {
        console.log("Computer is winning!");
        return;
    } else {
        console.log("Player and Computer are tied!");
        return;
    }
}

function playAgain() {
    alert("Play again");
    game();
}

game();