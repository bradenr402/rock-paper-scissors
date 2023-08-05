function getComputerSelection() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    // divComputerChoice.textContent = `Computer chose: ${computerSelection}`;

    if (computerSelection == 'Rock') {
        computerChoice.textContent = '🪨';
    } else if (computerSelection == 'Paper') {
        computerChoice.textContent = '📃';
    } else {
        computerChoice.textContent = '✂️'
    }

    if (playerSelection === computerSelection) {
        winner = '';
        return;
    }
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            winner = 'player';
            return;
        } else {
            winner = 'computer';
            return;
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            winner = 'player';
            return;
        } else {
            winner = 'computer';
            return;
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            winner = 'player';
            return;
        } else {
            winner = 'computer';
            return;
        }
    }

}

function updateScore() {
    if (winner === 'player') playerScore++;
    else if (winner === 'computer') computerScore++;
}

function announceWinner() {
    if (playerScore > computerScore) {
        return "You win!"
    } else if (playerScore < computerScore) {
        return "Computer wins!"
    } else {
        return "Draw!"
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
    playerChoice.textContent = '🪨'

    if (winner === '') {
        updateScore();
        divScore.textContent = `\nScore: ${playerScore} - ${computerScore}`;
    } else if (winner === 'player') {
        updateScore();
        divScore.textContent = `\nScore: ${playerScore} - ${computerScore}`;
    } else {
        updateScore();
        divScore.textContent = `\nScore: ${playerScore} - ${computerScore}`;
    }

    if (playerScore === 5 || computerScore === 5) {
        divWinner.textContent = announceWinner();
        playerScore = 0;
        computerScore = 0;
    } else {
        divWinner.visibility = 'hidden';
        divWinner.textContent = '';
    }
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    playRound('Paper', getComputerSelection());
    playerChoice.textContent = '📃'

    if (winner === '') {
        updateScore();
        divScore.textContent = `\nScore: ${playerScore} - ${computerScore}`;
    } else if (winner === 'player') {
        updateScore();
        divScore.textContent = `\nScore: ${playerScore} - ${computerScore}`;
    } else {
        updateScore();
        divScore.textContent = `\nScore: ${playerScore} - ${computerScore}`;
    }

    if (playerScore === 5 || computerScore === 5) {
        divWinner.textContent = announceWinner();
        playerScore = 0;
        computerScore = 0;
    } else {
        divWinner.visibility = 'hidden';
        divWinner.textContent = '';
    }
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    playRound('Scissors', getComputerSelection());
    playerChoice.textContent = '✂️'

    if (winner === '') {
        updateScore();
        divScore.textContent = `\nScore: ${playerScore} - ${computerScore}`;
    } else if (winner === 'player') {
        updateScore();
        divScore.textContent = `\nScore: ${playerScore} - ${computerScore}`;
    } else {
        updateScore();
        divScore.textContent = `\nScore: ${playerScore} - ${computerScore}`;
    }

    if (playerScore === 5 || computerScore === 5) {
        divWinner.textContent = announceWinner();
        playerScore = 0;
        computerScore = 0;
    } else {
        divWinner.visibility = 'hidden';
        divWinner.textContent = '';
    }
});

const divChoices = document.querySelector('.choices');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice');
const scoreParent = document.querySelector('.score');
const winnerParent = document.querySelector('.winnerParent');

const divScore = document.createElement('div');
divScore.classList.add('gameContent');
divScore.id = 'score';
divScore.textContent = 'Score: 0 - 0';
scoreParent.appendChild(divScore);

const divWinner = document.createElement('div');
divWinner.classList.add('gameContent');
divWinner.id = 'winner';
divWinner.visibility = 'hidden';
winnerParent.appendChild(divWinner);