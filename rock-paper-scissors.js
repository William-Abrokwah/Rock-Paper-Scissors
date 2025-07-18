let computerMove = '';
let playerMove = '';

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
    } else if (computerMove === 'paper') {
      result = 'You lose!';
    } else if (computerMove === 'scissors') {
      result = 'You win!'; 
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win!'; 
    } else if (computerMove === 'paper') {
      result = 'Tie!';
    } else if (computerMove === 'scissors') {
      result = 'You lose!';
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose!';
    } else if (computerMove === 'paper') {
      result = 'You win!'; 
    } else if (computerMove === 'scissors') {
      result = 'Tie!';
    }   
  }

  console.log(`Player chose ${playerMove} and computer chose ${computerMove}`);
  console.log(`${result}`);
}