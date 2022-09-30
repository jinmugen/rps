function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    const cpuChoice = choices[Math.floor(Math.random() * choices.length)]; // randomizes a choice in the array
    return cpuChoice;
}


function playerChoice(){ //passed on to playGame function for user input
    let choice = prompt("Choose your weapon: Rock, Paper, Scissors").toLowerCase(); // makes everything lowercase
    choice = choice[0].toUpperCase() + choice.slice(1); // capitalizes first letter of user input
    // console.log(choice); // to check user input case
    return choice;
}

function playGame(playerSelection = playerChoice(), computerSelection = getComputerChoice()){
    
    if (playerSelection === computerSelection) {
        return ("Tied");
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
        playerSelection === "Paper" && computerSelection === "Rock" ||
        playerSelection === "Scissors" && computerSelection === "Paper"){
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        return(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() { // needs output fix!!
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const outcome =  playGame();
        console.log(outcome);
        let outcomeStr = String(outcome);
        if (outcomeStr.includes("win")) {
            playerScore += 1;
            console.log(`player score: ${playerScore} | computer score ${computerScore}`);
        }
        else if (outcomeStr.includes("lose")) {
            computerScore += 1;
            console.log(`player score: ${playerScore} | computer score ${computerScore}`);
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("Tied game.")
    }
}
game();