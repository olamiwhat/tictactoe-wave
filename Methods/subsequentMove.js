const winningMove = require('./winningMove');
const moveCounter = require('./moveCounter');

/*
subsequentMove function returns the optimal move given opponents position choice.
*/

function subsequentMove(board) {
  if (typeof winningMove(board) === 'number') {
    return winningMove(board);
  }

  switch (moveCounter(board)) {
    case 3:
      if (board[0] === 'X' && board[5] === 'X') return 7;
      if (board[0] === 'X' && board[7] === 'X') return 5;
      if (board[0] === 'X' && board[8] === 'X') return 1;
      if (board[1] === 'X' && board[3] === 'X') return 2;
      if (board[1] === 'X' && board[5] === 'X') return 0;
      if (board[1] === 'X' && board[6] === 'X') return 5;
      if (board[1] === 'X' && board[7] === 'X') return 0;
      if (board[1] === 'X' && board[8] === 'X') return 3;
      if (board[2] === 'X' && board[3] === 'X') return 7;
      if (board[2] === 'X' && board[6] === 'X') return 1;
      if (board[2] === 'X' && board[7] === 'X') return 3;
      if (board[3] === 'X' && board[5] === 'X') return 0;
      if (board[3] === 'X' && board[7] === 'X') return 0;
      if (board[3] === 'X' && board[8] === 'X') return 1;
      if (board[4] === 'X' && board[8] === 'X') return 2;
      if (board[5] === 'X' && board[6] === 'X') return 1;
      if (board[5] === 'X' && board[7] === 'X') return 2;
      break;
    case 4:
      if (board[1] === 'O' && board[6] === 'O') return 4;
      if (board[2] === 'O' && board[3] === 'O') return 4;
      if (board[1] === 'O' && board[8] === 'O') return 6;
      break;
    default:
      return board.indexOf('');
  }
}

module.exports = subsequentMove;
