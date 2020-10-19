let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r","p","s"];
    return choices[Math.floor(Math.random()*3)];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + ", u win";
    document.getElementById(user).classList.add("green-glow");
    setTimeout(function() {document.getElementById(user).classList.remove("green-glow"),1000});
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(user) + " loses to " + convertToWord(computer) + ", u lose";
    document.getElementById(user).classList.add("red-glow");
    setTimeout(function() {document.getElementById(user).classList.remove("red-glow"),1000});
}

function tie(user, computer) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "You both pick " + convertToWord(user) + ", u tie";
    document.getElementById(user).classList.add("grey-glow");
    setTimeout(function() {document.getElementById(user).classList.remove("grey-glow"),1000});
}

function game(choice) {
    const computerChoice = getComputerChoice();
    switch (choice+computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(choice,computerChoice)
            break
        case "rp":
        case "ps":
        case "sr":
            lose(choice,computerChoice)
            break
        case "rr":
        case "pp":
        case "ss":
            tie(choice,computerChoice)
            break
    }
}

function main(){
    rock_div.addEventListener("click", function() {
        game("r");
    })

    paper_div.addEventListener("click", function() {
        game("p");
    })

    scissors_div.addEventListener("click", function() {
        game("s");
    })
}

main();