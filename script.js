function getComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
/*
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
*/
    switch (randomNumber) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3: 
            return 'Scissors';
    }
}
/*
function getPlayerSelection(buttonPressed) {
    playerInput = buttonPressed;
    playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

    while (playerSelection !== 'Rock' 
    && playerSelection !== 'Paper' 
    && playerSelection !== 'Scissors') {
        console.log('Invalid choice! Please try again.');
        getPlayerSelection();
    }
}
*/
function playRound(playerSelection, computerSelection) {

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

function announceWinner() {
    if (playerScore > computerScore) {
        return `\nYou won the game! \nYou scored ${playerScore} points, and computer scored ${computerScore}.`;
    } else if (playerScore < computerScore) {
        return `\nYou lost the game! \nYou scored ${playerScore} points, and computer scored ${computerScore}.`;
    } else {
        return `\nIt's a draw! \nYou scored ${playerScore} points, and computer scored ${computerScore}.`;
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        console.log(`\nRound ${i}`);

        getPlayerSelection();
        console.log(`Your choice: ${playerSelection}.`);

        getComputerSelection();
        console.log(`Computer's choice: ${computerSelection}.`);

        console.log(playRound(playerSelection, computerSelection));
        updateScore();
    }
    console.log(announceWinner());
}

let playerSelection, 
    computerSelection, 
    winner, 
    playerScore = 0, 
    computerScore = 0;
    // game();

const rockButton = document.querySelector('#rock');
rockButton.addEventListener('click', () => {
    playRound('Rock', getComputerSelection())
    if (winner === '') {
        divResults.textContent = "Its a draw! You both chose rock!"
        updateScore();
    } else if (winner === 'player') {
        divResults.textContent = 'You win! Rock beats scissors.'
        updateScore();
    } else {
        divResults.textContent = 'You lose! Paper beats rock.'
        updateScore();
    }

    if (playerScore === 5 || computerScore === 5) {
        divWinner.textContent = announceWinner();
        playerScore = 0;
        computerScore = 0;
    }
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => playRound('Paper', getComputerSelection()));

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => playRound('Scissors', getComputerSelection()))

const body = document.querySelector('body');

const divResults = document.createElement('div');
divResults.style.backgroundColor = 'green';
body.appendChild(divResults);

const divWinner = document.createElement('div');
divWinner.style.backgroundColor = 'lightblue';
body.appendChild(divWinner);