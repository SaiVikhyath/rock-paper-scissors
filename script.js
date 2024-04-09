
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
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper";
    } else if(playerSelection == "scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection == "scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors";
    } else {
        return "Deuce!!!"
    }
}

function playGame() {
    let playerWon = 0;
    let computerWon = 0;
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Game: " + (i + 1).toString() + " Enter your move (Rock/Paper/Scissors): ").toLowerCase();
        const computerSelection = getComputerChoice();
        const winner = playRound(playerSelection, computerSelection);
        alert(winner);
        if (winner.slice(4, 7) == "Win") {
            playerWon += 1;
        } else if (winner.slice(4, 8) == "Lose") {
            computerWon += 1;
        }
    }
    if (playerWon > computerWon) {
        return "Hurray!! You win the game over computer with a score of " + playerWon.toString() + "-" + computerWon.toString();
    } else if (playerWon < computerWon) {
        return "Tough luck!! Computer wins the game with a score of " + computerWon.toString() + "-" + playerWon.toString(); 
    }
    return "Game ends in draw with both you and computer winning " + playerWon.toString() + " games";
}

alert(playGame());

