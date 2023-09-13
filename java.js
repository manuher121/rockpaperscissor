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

function round(playerSelection, ComputerSelection) {
    if (playerSelection == "rock") {
        if (ComputerSelection == "rock") {
            return "Its a draw! Nobody wins this round."
        }
        else if (ComputerSelection == "paper") {
            return "You lose! Paper beats Rock."
        }
        else {
            return "You win! Rock beats Scissors."
        }
    }
    else if (playerSelection == "paper") {
        if (ComputerSelection == "rock") {
            return "You win! Paper beats Rock."
        }
        else if (ComputerSelection == "paper") {
            return "Its a draw! Nobody wins this round."
        }
        else {
            return "You lose! Scissors beats Paper."
        }
    }
    else {
        if (ComputerSelection == "rock") {
            return "You lose! Rock beats Scissors."
        }
        else if (ComputerSelection == "paper") {
            return "You Win! Scissors beats Paper."
        }
        else {
            return "Its a draw! Nobody wins this round."
        }
    }
}
console.log(round("paper", getComputerChoice()))