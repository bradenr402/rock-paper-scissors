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
    divComputerChoice.textContent = `Computer chose: ${computerSelection}`;

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
        updateScore();
        divResults.textContent = 'Its a draw! You both chose rock!';
        divScore.textContent = `\nYour score: ${playerScore} \nComputer score: ${computerScore}`;
    } else if (winner === 'player') {
        updateScore();
        divResults.textContent = 'You win! Rock beats scissors.';
        divScore.textContent = `\nYour score: ${playerScore} \nComputer score: ${computerScore}`;
    } else {
        updateScore();
        divResults.textContent = 'You lose! Paper beats rock.';
        divScore.textContent = `\nYour score: ${playerScore} \nComputer score: ${computerScore}`;
    }

    if (playerScore === 5 || computerScore === 5) {
        divWinner.textContent = announceWinner();
        playerScore = 0;
        computerScore = 0;
    } else {
        divWinner.textContent = 'winner';
    }
});

const paperButton = document.querySelector('#paper');
paperButton.addEventListener('click', () => {
    playRound('Paper', getComputerSelection());
    if (winner === '') {
        updateScore();
        divResults.textContent = 'Its a draw! You both chose paper!';
        divScore.textContent = `\nYour score: ${playerScore} \nComputer score: ${computerScore}`;
    } else if (winner === 'player') {
        updateScore();
        divResults.textContent = 'You win! Paper beats rock.';
        divScore.textContent = `\nYour score: ${playerScore} \nComputer score: ${computerScore}`;
    } else {
        updateScore();
        divResults.textContent = 'You lose! Scissors beats paper.';
        divScore.textContent = `\nYour score: ${playerScore} \nComputer score: ${computerScore}`;
    }

    if (playerScore === 5 || computerScore === 5) {
        divWinner.textContent = announceWinner();
        playerScore = 0;
        computerScore = 0;
    } else {
        divWinner.textContent = 'winner';
    }
});

const scissorsButton = document.querySelector('#scissors');
scissorsButton.addEventListener('click', () => {
    playRound('Scissors', getComputerSelection());
    if (winner === '') {
        updateScore();
        divResults.textContent = 'Its a draw! You both chose scissors!';
        divScore.textContent = `\nYour score: ${playerScore} \nComputer score: ${computerScore}`;
    } else if (winner === 'player') {
        updateScore();
        divResults.textContent = 'You win! Scissors beats paper.';
        divScore.textContent = `\nYour score: ${playerScore} \nComputer score: ${computerScore}`;
    } else {
        updateScore();
        divResults.textContent = 'You lose! Rock beats scissors.';
        divScore.textContent = `\nYour score: ${playerScore} \nComputer score: ${computerScore}`;
    }

    if (playerScore === 5 || computerScore === 5) {
        divWinner.textContent = announceWinner();
        playerScore = 0;
        computerScore = 0;
    } else {
        divWinner.textContent = 'winner';
    }
});

const content = document.querySelector('.content');

const divComputerChoice = document.createElement('div');
divComputerChoice.classList.add('gameContent');
divComputerChoice.id = 'computerChoice';
divComputerChoice.textContent = 'computer'
content.appendChild(divComputerChoice);

const divResults = document.createElement('div');
divResults.classList.add('gameContent');
divResults.id = 'results';
divResults.textContent = 'results';
content.appendChild(divResults);

const divScore = document.createElement('div');
divScore.classList.add('gameContent');
divScore.id = 'score';
divScore.textContent = 'score';
content.appendChild(divScore);

const winnerParent = document.querySelector('.winnerParent');
const divWinner = document.createElement('div');
divWinner.classList.add('gameContent');
divWinner.id = 'winner';
divWinner.textContent = 'winner';
winnerParent.appendChild(divWinner);