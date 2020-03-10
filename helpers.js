/**
 * Helper functions
 */

// dependencies
const { winner } = require('./Methods/checkStatus');

// Declare helper object
const helpers = {};

// check if the board is a valid board
helpers.validateBoard = function (board) {
  if (board && typeof board === 'string' && board.length === 9) {
    const newBoard = Array.from(board.toUpperCase());

    for (let i = 0; i < newBoard.length; i += 1) {
      // if board contains anything other than 'X', 'O' or space return false
      if (newBoard[i] !== 'X' && newBoard[i] !== 'O' && newBoard[i] !== ' ') return false;
    }
    // return newBoard as board is valid
    return newBoard;
  }

  return false;
};

// check if it is the server turn
helpers.isServerTurn = function (board) {
  let X = 0;
  let O = 0;
  let empty = 0;

  for (let i = 0; i < board.length; i += 1) {
    if (board[i] === 'X') X += 1;
    else if (board[i] === 'O') O += 1;
    else empty += 1;
  }

  console.log('X: ', X);
  console.log('O: ', O);
  console.log('empty: ', empty);

  return (empty === 9 || X >= O);
};

helpers.boardStatus = function (board) {
  if (!Array.isArray(board)) return -1;
  return winner(board);
};

module.exports = helpers;
