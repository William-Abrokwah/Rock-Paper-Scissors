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

function chooseWinner(playerMove, computerMove) {
  console.log(`Player chose ${playerMove} and computer chose ${computerMove}`);
  
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      console.log('Tie!');
    } else if (computerMove === 'paper') {
      console.log('You lose!');
    } else if (computerMove === 'scissors') {
      console.log('You win!');
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      console.log('You win!');
    } else if (computerMove === 'paper') {
      console.log('Tie!');
    } else if (computerMove === 'scissors') {
      console.log('You lose!');
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      console.log('You lose!');
    } else if (computerMove === 'paper') {
      console.log('You win!');
    } else if (computerMove === 'scissors') {
      console.log('Tie!');
    }   
  }
}