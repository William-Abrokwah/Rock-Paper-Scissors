let computerMove = '';

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
