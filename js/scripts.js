const options = ["rock", "paper", "scissors"];
let outcome = null
let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    return options[random];
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

function game(e) {
    const computerSelection = getComputerChoice();
    const playerSelection = e.target.className;
    if (playerSelection === null) {
        alert("Game cancelled by Player.");
        return;
    } else {
        playRound(playerSelection, computerSelection);
        outcomeCheck(playerSelection, computerSelection, outcome);
        scoreCheck();
    }
}

function outcomeCheck(playerSelection, computerSelection, outcome) {
    const outcomeDiv = document.querySelector('.outcomeDiv');
    const playerDiv = document.querySelector('.playerDiv');
    const playerSpan = document.querySelector('.playerSpan');
    const computerDiv = document.querySelector('.computerDiv');
    const computerSpan = document.querySelector('.computerSpan');
    const results = document.querySelector('.results');
    outcomeDiv.textContent = outcome;
    playerDiv.textContent = "Player chose ";
    playerSpan.textContent = playerSelection;
    computerDiv.textContent = "Computer chose ";
    computerSpan.textContent = computerSelection;
}


function scoreCheck() {
    cs.textContent = computerScore;
    ps.textContent = playerScore;
    if (playerScore >= 5) {
        showWinner("player");
    } else if (computerScore >=5) {
        showWinner("computer");
    } else if (playerScore > computerScore) {
        winner.textContent = "Player is winning!";
        return;
    } else if (playerScore < computerScore) {
        winner.textContent = "Computer is winning!";
        return;
    } else {
        winner.textContent = "Player and Computer are tied!";
        return;
    }
}

function showWinner(wins) {
    btns.forEach((button) => button.remove());
    const endGame = document.createElement('p');
    endGame.setAttribute('style', 'font-size: 48px; text-align: center; font-weight: bolder;');
    if (wins === "player") {
        endGame.textContent = "The player has won, humanity is saved!";
        endGame.style.color = 'green';
    } else if (wins === "computer") {
        endGame.textContent = "The computer has won, humanity has been enslaved :(";
        endGame.style.color = 'rgb(128, 10, 10)';
    } else {
        endGame.textContent = "oops";
    }
    choices.appendChild(endGame);
    const playAgain = document.createElement('button');
    winner.textContent = "Game Over"
    playAgain.textContent = "Play Again";
    winner.appendChild(playAgain);
    playAgain.addEventListener('click', () => location.reload());
}

const btns = document.querySelectorAll('div.choices > button');
const winner = document.querySelector('.winner');
const choices = document.querySelector('.choices');
const cs = document.querySelector('.cs');
const ps = document.querySelector('.ps');

btns.forEach((button) => {
    button.addEventListener('click', game);
})