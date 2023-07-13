function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3: 
            return 'scissors';
    }
}

// Create a function to play one round of 'Rock, Paper, Scissors'
function playRound(playerSelection, computerSelection) {
    // Print the computer's and player's choices to the console
    console.log(`Computer choice: ${computerSelection}.`);
    console.log(`Your choice: ${playerSelection}.`);

    // Compare the computer's choice with the player's choice
    if (playerSelection === computerSelection) {
        //draw
        winner = 'draw';
        return `Draw! You both selected ${playerSelection}!`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        // player wins with rock
        winner = 'player';
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        // player loses with rock
        winner = 'computer';
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        // player wins with paper
        winner = 'player';
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        // player loses with paper
        winner = 'computer';
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        // player wins with scissors
        winner = 'player';
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        // player loses with scissors
        winner = 'computer';
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

// Create a function to update the score each round
function updateScore() {
    if (winner === 'player') {
        // increment player score by 1
        playerScore++;
    } else if (winner === 'computer') {
        // increment computer score by 1
        computerScore++;
    }
}

// Create a function to ensure the player's selection is valid
function validatePlayerSelection() {
    while (playerSelection !== 'Rock' && playerSelection !== 'Paper' && playerSelection !== 'Scissors') {
        console.log('Invalid choice! Please try again.');
        playerSelection = prompt('Rock, paper, or scissors?', '');
    }
}

// Create a function to play a game of 5 rounds
function game() {
    for (let i = 1; i <= 5; i++) {
        // Print round number
        console.log('\n');
        console.log(`Round ${i}`);

        // Get computer selection
        computerSelection = getComputerChoice().toLowerCase();
        computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

        // Get player selection and validate it
        playerSelection = prompt('Rock, paper, or scissors?', '').toLowerCase();
        playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        validatePlayerSelection(playerSelection);

        // Print results of the round
        console.log(playRound(playerSelection, computerSelection));

        // Update the score
        updateScore();
    }

    // Announce the winner when teh game is done
    console.log('\n');
    console.log(announceWinner());
}

// Create a function to return the winner
function announceWinner() {
    if (playerScore > computerScore) {
        return `You won the game! \nYou scored ${playerScore} points, and computer scored ${computerScore}.`;
    } else if (computerScore > playerScore) {
        return `You lost the game! \nYou scored ${playerScore} points, and computer scored ${computerScore}.`;
    } else {
        return `It's a draw! \nYou scored ${playerScore} points, and computer scored ${computerScore}.`;
    }
}

// Initialize variables
let playerSelection;
let computerSelection;

let winner;

let playerScore = 0;
let computerScore = 0;

// Call game function to start game
game();