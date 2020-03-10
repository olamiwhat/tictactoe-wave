
/*
winningMove function accepts an array as a parameter and
returns 'false' if there is no winning spot on the board.
If there is a winning tic-tac-toe position,
the function will return the index position on the board.
*/

function winningMove(board) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let winningIndex = false;

  const move = winningCombinations.find((combo) => {
    let xCount = 0;
    let yCount = 0;
    let emptyCount = 0;
    let emptyIndex;

    combo.reduce((n, val) => {
      if (board[val] === 'X') xCount += 1;
      if (board[val] === 'O') yCount += 1;
      if (board[val] === ' ') {
        emptyCount += 1;
        emptyIndex = val;
      }
    }, 0);

    if ((xCount || yCount) === 2 && emptyCount === 1) winningIndex = emptyIndex;

    return (xCount || yCount) === 2 && emptyCount === 1;
  });

  return winningIndex;
}


module.exports = winningMove;
