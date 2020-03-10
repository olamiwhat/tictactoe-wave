
/*
gameCounter function counts the number of moves in a tic-tac-toe array
*/

function moveCounter(board) {
  let counter = 0;

  board.forEach((element) => {
    if (element !== ' ') counter += 1;
  });
  console.log('counter: ', counter);
  return counter;
}

module.exports = moveCounter;
