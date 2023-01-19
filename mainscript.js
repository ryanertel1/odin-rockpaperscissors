//add div to display results with DOM methods
//display running score and announce winner when 5 points reached
const buttonRock = document.querySelector('.rock');
const buttonPaper = document.querySelector('.paper');
const buttonScissors = document.querySelector('.scissors');
let score = [0,0];

buttonRock.addEventListener('click', () => {
    playRound('rock');
    checkWin();
});
buttonPaper.addEventListener('click', () => {
    playRound('paper');
    checkWin();
});
buttonScissors.addEventListener('click', () => {
    playRound('scissors');
    checkWin();
});

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    computerSelection = 'rock';
    if (computerSelection == 'rock' && playerSelection == 'rock') {
        return('draw');
    }
    else if (computerSelection == 'rock' && playerSelection == 'paper') {
        score[0]++;
        return('player');
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors') {
        score[1]++;
        return('computer');
    }
    else if (computerSelection == 'paper' && playerSelection == 'paper') {
        return('draw');
    }
    else if (computerSelection == 'paper' && playerSelection == 'scissors') {
        score[0]++;
        return('player');
    }
    else if (computerSelection == 'paper' && playerSelection == 'rock') {
        score[1]++;
        return('computer');
    }
    else if (computerSelection == 'scissors' && playerSelection == 'scissors') {
        return('draw');
    }
    else if (computerSelection == 'scissors' && playerSelection == 'rock') {
        score[0]++;
        return('player');
    }
    else if (computerSelection == 'scissors' && playerSelection == 'paper') {
        score[1]++;
        return('computer');
    }
}

function getComputerChoice() {
    let computerOptions = ['rock','paper','scissors'];
    let computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
    return(computerChoice);
}

function checkWin() {
    if (score[0] === 5) {
        console.log('You Win!');
        score = [0,0];
    } else if (score[1] === 5) {
        console.log('Computer Wins!');
        score = [0,0];
    }
}