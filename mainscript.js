playGame();

function getComputerChoice() {
    let computerOptions = ['rock','paper','scissors'];
    let computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return(computerChoice);
}

function getPlayerChoice() {
    let choice;
    playerInput = prompt('Type Rock/Paper/Scissors');
    let playerChoice = playerInput.toLowerCase();
    return(playerChoice);
}

function playRound(computerSelection, playerSelection) {
    if (computerSelection == 'rock' && playerSelection == 'rock') {
        return('draw');
    }
    else if (computerSelection == 'rock' && playerSelection == 'paper') {
        return('player');
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        return('computer');
    }
    else if (computerSelection == 'paper' && playerSelection == 'paper') {
        return('draw');
    }
    else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        return('player');
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        return('computer');
    }
    else if (computerSelection == 'scissors' && playerSelection == 'scissors') {
        return('draw');
    }
    else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        return('player');
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        return('computer');
    }
    else {
        return('computer');
    }
}

function playGame() {
    let score = [0,0];
    let winner;
    
    for (let i = 0; i < 5; i++) {
        winner = playRound(getComputerChoice(), getPlayerChoice());
        if (winner == 'player') {
            score[0]++;
            console.log('Player won that round');
            console.log('score is now: ' + score);
        }
        else if (winner == 'computer') {
            score[1]++;
            console.log('Computer won that round');
            console.log('score is now: ' + score);
        }
        else {
            i--;
            console.log('That round was a draw, redo');
            console.log('Score is still: ' + score);
        }
    }

    if (score[0] > score[1]) {
        console.log('Player wins the game');
    }
    else if (score[0] < score[1]) {
        console.log('Computer wins the game');
    }
}