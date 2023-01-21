//add div to display results with DOM methods
//display running score and announce winner when 5 points reached
const buttonRock = document.querySelector('.rock');
const rockLeft = buttonRock.querySelector('.rockLeft');
const rockRight = buttonRock.querySelector('.rockRight');
const buttonPaper = document.querySelector('.paper');
const paperLeft = buttonPaper.querySelector('.paperLeft');
const paperRight = buttonPaper.querySelector('.paperRight');
const buttonScissors = document.querySelector('.scissors');
const scissorsLeft = buttonScissors.querySelector('.scissorsLeft');
const scissorsRight = buttonScissors.querySelector('.scissorsRight');
const divScore = document.querySelector('.score');
const divWinner = document.querySelector('.winner');

let score = [0,0];
divScore.textContent = `Score: ${score}`;

buttonRock.addEventListener('click', () => {
    playRound('rock');
    rockLeft.classList.add('playerSelect');
    checkWin(); 
});
buttonPaper.addEventListener('click', () => {
    playRound('paper');
    paperLeft.classList.add('playerSelect');
    checkWin();
});
buttonScissors.addEventListener('click', () => {
    playRound('scissors');
    scissorsLeft.classList.add('playerSelect');
    checkWin();
});

function playRound(playerSelection) {
    rockLeft.classList.remove('playerSelect');
    rockRight.classList.remove('computerSelect');
    paperLeft.classList.remove('playerSelect');
    paperRight.classList.remove('computerSelect');
    scissorsLeft.classList.remove('playerSelect');
    scissorsRight.classList.remove('computerSelect');
    let computerSelection = getComputerChoice();

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
    if (computerChoice === 'rock') {
        rockRight.classList.add('computerSelect');
    } else if (computerChoice === 'paper') {
        paperRight.classList.add('computerSelect');
    } else {
        scissorsRight.classList.add('computerSelect');
    }

    return(computerChoice);
}

function checkWin() {
    if (score[0] === 5) {
        divWinner.textContent = 'Winner last round: Player';
        score = [0,0];
    } else if (score[1] === 5) {
        divWinner.textContent = 'Winner last round: Computer';
        score = [0,0];
    }
    divScore.textContent = `Score: ${score}`;
}