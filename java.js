function getComputerChoise() {
    let randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber == 0) {
        return "Paper"
    }
    else if (randomNumber == 1) {
        return "Rock"
    }
    else {
        return "Scissors"
    }
}
