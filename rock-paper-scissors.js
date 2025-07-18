let computerMove = '';
let playerMove = '';

let wins = 0;
let ties = 0;
let losses = 0;

function chooseComputerMove() {
  let randNum = Math.random();

  if (0 <= randNum && randNum < 0.33) {
    computerMove = 'rock';
  } else if (0.33 <= randNum && randNum < 0.66) {
    computerMove = 'paper';
  } else if (0.66 <= randNum && randNum < 1) {
    computerMove = 'scissors';
  }
}

function playGame() {
  chooseComputerMove();
  
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie!';
      ties++;
    } else if (computerMove === 'paper') {
      result = 'You lose!';
      losses++;
    } else if (computerMove === 'scissors') {
      result = 'You win!';
      wins++;
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win!';
      wins++;
    } else if (computerMove === 'paper') {
      result = 'Tie!';
      ties++;
    } else if (computerMove === 'scissors') {
      result = 'You lose!';
      losses++;
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose!';
      losses++;
    } else if (computerMove === 'paper') {
      result = 'You win!';
      wins++;
    } else if (computerMove === 'scissors') {
      result = 'Tie!';
      ties++;
    }   
  }

  document.querySelector('.js-result').innerHTML = `Player chose ${playerMove} and computer chose ${computerMove}. ${result}`;

  document.querySelector('.js-score').innerHTML = `Wins: ${wins} Ties: ${ties} Losses: ${losses}`;
}