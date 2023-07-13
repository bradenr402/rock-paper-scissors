function getComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computerSelection = 'Rock';
            break;
        case 2:
            computerSelection = 'Paper';
            break;
        case 3: 
            computerSelection = 'Scissors';
            break;
    }
}

function getPlayerSelection() {
    playerSelection = prompt('Rock, paper, or scissors?', '').toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);

    while (playerSelection !== 'Rock' 
    && playerSelection !== 'Paper' 
    && playerSelection !== 'Scissors') {
        console.log('Invalid choice! Please try again.');
        getPlayerSelection();
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(`Your choice: ${playerSelection}.`);
    console.log(`Computer's choice: ${computerSelection}.`);

    if (playerSelection === computerSelection) {
        winner = '';
        return `Draw! You both selected ${playerSelection}!`;
    }
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            winner = 'player';
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else {
            winner = 'computer';
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            winner = 'player';
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else {
            winner = 'computer';
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            winner = 'player';
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        } else {
            winner = 'computer';
            return `You lose! ${computerSelection} beats ${playerSelection}!`;
        }
    }
}

function updateScore() {
    if (winner === 'player') playerScore++;
    else if (winner === 'computer') computerScore++;
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`\nRound ${i}`);

        getComputerSelection();
        getPlayerSelection();

        console.log(playRound(playerSelection, computerSelection));
        updateScore();
    }
    console.log(announceWinner());
}

function announceWinner() {
    if (playerScore > computerScore) {
        return `\nYou won the game! \nYou scored ${playerScore} points, and computer scored ${computerScore}.`;
    } else if (playerScore < computerScore) {
        return `\nYou lost the game! \nYou scored ${playerScore} points, and computer scored ${computerScore}.`;
    } else {
        return `\nIt's a draw! \nYou scored ${playerScore} points, and computer scored ${computerScore}.`;
    }
}

let playerSelection, 
    computerSelection, 
    winner, 
    playerScore = 0, 
    computerScore = 0;

game();