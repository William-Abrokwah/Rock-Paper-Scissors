let computerMove = '';
let playerMove = '';

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  ties: 0,
  losses: 0
};

document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}`;

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

function updateResults() {
  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = `Player chose ${playerMove} and computer chose ${computerMove}. ${result}`;

  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}`;
}

function playGame() {
  chooseComputerMove();
  
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie!';
      score.ties++;
    } else if (computerMove === 'paper') {
      result = 'You lose!';
      score.losses++;
    } else if (computerMove === 'scissors') {
      result = 'You win!';
      score.wins++;
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win!';
      score.wins++;
    } else if (computerMove === 'paper') {
      result = 'Tie!';
      score.ties++;
    } else if (computerMove === 'scissors') {
      result = 'You lose!';
      score.losses++;
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose!';
      score.losses++;
    } else if (computerMove === 'paper') {
      result = 'You win!';
      score.wins++;
    } else if (computerMove === 'scissors') {
      result = 'Tie!';
      score.ties++;
    }   
  }

  updateResults();
}
