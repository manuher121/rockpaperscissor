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

let scoreIa = 0;
let scoreUser = 0;

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    playerSelection = this.textContent;
    console.log(playerSelection);

    if (playerSelection == "Rock") {
        if (computerSelection == "rock") {
            tie();
        }
        else if (computerSelection == "paper") {
            scoreIa += 1;
            iaWinsRound();
            winner();
        }
        else {
            scoreUser += 1;
            userWinsRound();
            winner();
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "rock") {
            scoreUser += 1;
            userWinsRound();
            winner();
        }
        else if (computerSelection == "paper") {
            tie();
        }
        else {
            scoreIa += 1;
            iaWinsRound();
            winner();
        }
    }
    else {
        if (computerSelection == "rock") {
            scoreIa += 1;
            iaWinsRound();
            winner()
        }
        else if (computerSelection == "paper") {
            scoreUser += 1;
            userWinsRound();
            winner();
        }
        else {
            tie();
        }
    }

}

function winner() {
    if (scoreIa < 5 && scoreUser < 5) {
        var element = document.getElementById("score");
        element.innerHTML = `The score is ${scoreUser} for the User and ${scoreIa} for the IA!`;
    }
    else if (scoreIa == 5) {
        var element = document.getElementById("score");
        element.innerHTML = `The score is ${scoreUser} for the user and ${scoreIa} for the IA`;
        var winner = document.getElementById("winner");
        winner.innerHTML = "The IA wins this game! Better luck next time.";
        scoreIa = 0;
        scoreUser = 0;
    }

    else {
        var element = document.getElementById("score");
        element.innerHTML = `The score is ${scoreUser} for the user and ${scoreIa} for the IA`;
        var winner = document.getElementById("winner");
        winner.innerHTML = "The User wins this game! I am proud of you!";
        scoreIa = 0;
        scoreUser = 0;
    }
}

var btn = document.querySelectorAll('button');

btn.forEach((btn) => {
    btn.addEventListener('click',playRound);
  });

function tie() {
    var winner = document.getElementById("winner");
    winner.innerHTML = "Its a tie!";
}

function userWinsRound() {
    var winner = document.getElementById("winner");
    winner.innerHTML = "The user wins this round!";
}

function iaWinsRound() {
    var winner = document.getElementById("winner");
    winner.innerHTML = "The IA wins this round!";
}