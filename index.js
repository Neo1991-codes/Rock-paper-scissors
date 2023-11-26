
const options = ["rock","paper","scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
       if(playerSelection == computerSelection) {
        return "Tie";
       } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
       ) {
        return "player";
       } else {
        return "computer";
       }
     
        
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection,computerSelection);
     if(result == "Tie"){
        return "It's a Tie!"
     }
     else if(result == "player"){
        return "you win!" + playerSelection + "beats" + computerSelection;
     } else {
        return "You lose!" + computerSelection + "beats" + playerSelection;
     }

}



function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        const playerSelection = prompt("Enter your choice: rock, paper, or scissors").toLowerCase();
        const computerSelection = getComputerChoice();

        console.log(`Round ${round + 1}:`);
        console.log(`Player chooses ${playerSelection}`);
        console.log(`Computer chooses ${computerSelection}`);

        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.includes("win")) {
            playerScore++;

        } else if (roundResult.includes("lose")) {
            computerScore++;
        }
    }

    console.log("\nGame Over!");

    if(playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie game!");
    }

    console.log(`final score - player: ${playerScore}, computer: ${computerScore}`);

}

game();


