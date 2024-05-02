

let roundsWonByPlayer = 0;
let roundsWonByComputer = 0;
let roundWonBy = "";


const whoWon = document.querySelector(".who-won");
const howWon = document.querySelector(".how-won");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const playerScoreboard = document.querySelector(".player-scoreboard");
const computerScoreboard = document.querySelector(".computer-scoreboard");
const scoreboard = document.querySelector(".scoreboard");
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");
const winnerMessage = document.createElement("p");
const restartButton = document.createElement("button");


rockButton.addEventListener("click", () => playGame("rock"));
paperButton.addEventListener("click", () => playGame("paper"));
scissorsButton.addEventListener("click", () => playGame("scissors"));


function restartGame() {
    roundsWonByPlayer = 0;
    roundsWonByComputer = 0;
    roundWonBy = "";
    whoWon.textContent = "Shoot your option wisely";
    howWon.textContent = "First to reach 5 points wins";
    playerScore.textContent = "Player: 0";
    computerScore.textContent = "Computer: 0";
    playerScoreboard.textContent = "Last Round";
    computerScoreboard.textContent = "Last Round";
    playerScoreboard.setAttribute("style", "font-size: 24px");
    computerScoreboard.setAttribute("style", "font-size: 24px");
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    restartButton.remove();
    winnerMessage.remove();
}


function actionsOnEndOfGame() {
    const gamestatus = roundsWonByPlayer > roundsWonByComputer ? "You won the game!!!" : "You lost the game!!!";
    winnerMessage.textContent = gamestatus + "          ";
    winnerMessage.setAttribute("style", "color: #22223b; font-size: 24px; padding: 20px; text-align: center; justify-content: center;");
    content.insertBefore(winnerMessage, footer);
    restartButton.textContent = "Restart Game"
    restartButton.setAttribute("type", "button");
    restartButton.setAttribute("style", "font-weight: bold; font-size: 18px; border-radius: 10px; background-color: #e76f51; width: 150px; height: 40px; padding: 5px 10px 5px 10px; text-align: center; justify-content: center;");
    winnerMessage.appendChild(restartButton);
    restartButton.addEventListener("click", () => restartGame());
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}


function playGame(playerSelection) {

    if (isGameEnded()) {
        actionsOnEndOfGame();
    }
    
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
}


function getComputerChoice() {

    let choice = Math.floor(Math.random() * 3 + 1);

    if (choice == 1) {
        return "Rock";
    } else if (choice == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "Scissors") {
        roundsWonByPlayer += 1;
        roundWonBy = "player";
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        roundsWonByComputer += 1;
        roundWonBy = "computer"
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        roundsWonByPlayer += 1;
        roundWonBy = "player";
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        roundsWonByComputer += 1;
        roundWonBy = "computer";
    } else if(playerSelection == "scissors" && computerSelection == "Paper") {
        roundsWonByPlayer += 1;
        roundWonBy = "player";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        roundsWonByComputer += 1;
        roundWonBy = "computer";
    } else {
        roundWonBy = "deuce"
    }
    updateScores(playerSelection, computerSelection, roundWonBy);
}

function getEmoji(selection) {
    if (selection.toLowerCase() === "rock") {
        return "🪨";
    } else if (selection.toLowerCase() === "paper") {
        return "📜";
    } else if (selection.toLowerCase() === "scissors") {
        return "✂️";
    } else {
        alert("Unable to get emoji");
    }
}


function isGameEnded() {
    return roundsWonByPlayer === 5 || roundsWonByComputer === 5;
}


function updateScores(playerSelection, computerSelection, roundWonBy) {
    const playerEmoji = getEmoji(playerSelection);
    const computerEmoji = getEmoji(computerSelection);
    playerScoreboard.setAttribute("style", "font-size: 60px");
    computerScoreboard.setAttribute("style", "font-size: 60px");
    playerScoreboard.textContent = playerEmoji;
    computerScoreboard.textContent = computerEmoji;
    if (roundWonBy == "player") {
        whoWon.textContent = "You Win this round!!!";
        howWon.textContent = playerSelection[0].toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection[0].toUpperCase() + computerSelection.slice(1);
        playerScore.textContent = "Player: " + String(roundsWonByPlayer);
        computerScore.textContent = "Computer: " + String(roundsWonByComputer);
    } else if (roundWonBy == "computer") {
        whoWon.textContent = "You Lose this round!!!";
        howWon.textContent = playerSelection[0].toUpperCase() + playerSelection.slice(1) + " is beaten by " + computerSelection[0].toUpperCase() + computerSelection.slice(1);
        playerScore.textContent = "Player: " + String(roundsWonByPlayer);
        computerScore.textContent = "Computer: " + String(roundsWonByComputer);
    } else if (roundWonBy == "deuce") {
        whoWon.textContent = "Round ends in draw!!!";
        howWon.textContent = playerSelection[0].toUpperCase() + playerSelection.slice(1) + " draws " + computerSelection[0].toUpperCase() + computerSelection.slice(1);
        playerScore.textContent = "Player: " + String(roundsWonByPlayer);
        computerScore.textContent = "Computer: " + String(roundsWonByComputer);
    } else {
        alert("Invalid...Error!!!")
    }

    if (isGameEnded()) {
        actionsOnEndOfGame();
    }
}




