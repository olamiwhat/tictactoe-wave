// play function takes a board and a move(position)
// returns a new board with the new position filled

const { winner } = require('./checkStatus');

function play(board, move) {
  const newBoard = [...board];
  newBoard[move] = 'O';
  // check if that is the winning move
  const gameWinningMove = winner(newBoard);
  if (gameWinningMove.includes('Wins')) return [gameWinningMove, newBoard.join('')];
  return newBoard.join('');
}

module.exports = play;
