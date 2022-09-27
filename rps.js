function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)]; // randomizes a choice in the array
    return cpuChoice;
}
let cpu = getComputerChoice();
console.log(cpu); // checking computer choice for debugging


function playerChoice(){ //passed on to playGame function for user input
    let choice = prompt("Choose your weapon: Rock, Paper, Scissors").toLowerCase(); // makes everything lowercase
    choice = choice[0].toUpperCase() + choice.slice(1); // capitalizes first letter of user input
    console.log(choice); // to check user input case
    return choice;
}

function playGame(playerSelection = playerChoice(), computerSelection = cpu){
    
    if (playerSelection === computerSelection) {
        return ("Tied");
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"){
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else {
        return(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let newGame;

    for (let i = 0; i < 5; i++) {
        newGame = playGame();
        console.log(newGame)
    }
}
game();