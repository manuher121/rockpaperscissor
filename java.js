function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber == 0) {
        return "paper"
    }
    else if (randomNumber == 1) {
        return "rock"
    }
    else if (randomNumber == 2) {
        return "scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return "Its a draw! Nobody wins this round."
        }
        else if (computerSelection == "paper") {
            scoreIa += 1;

            return "You lose! Paper beats Rock."
        }
        else {
            scoreUser += 1;
            return "You win! Rock beats Scissors."
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            scoreUser += 1;
            return "You win! Paper beats Rock."
        }
        else if (computerSelection == "paper") {
            return "Its a draw! Nobody wins this round."
        }
        else {
            scoreIa += 1;

            return "You lose! Scissors beats Paper."
        }
    }
    else {
        if (computerSelection == "rock") {
            scoreIa += 1;

            return "You lose! Rock beats Scissors."
        }
        else if (computerSelection == "paper") {
            scoreUser += 1;
            return "You win! Scissors beats Paper."
        }
        else {
            return "Its a draw! Nobody wins this round."
        }
    }
}

let scoreIa = 0;
let scoreUser = 0;

function game() {


    while (scoreIa < 5 && scoreUser < 5) {
        const playerSelection = prompt("Make your selection(Rock, Paper or Scissor");
        const computerSelection = getComputerChoice();

        let play = (playRound(playerSelection, computerSelection));   
        console.log(play, scoreIa, scoreUser)  
    }
    if (scoreIa == 5) {
        return "The computer wins!"
    }
    else {
        return "The user wins!"
    }
}

console.log(game())