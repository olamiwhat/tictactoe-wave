// require dependencies
const moveCounter = require('./moveCounter');
const firstMove = require('./firstMove');
const secondMove = require('./secondMove');
const subsequentMove = require('./subsequentMove');

// function for getting position to play
// accepts board and returns index position for the next move
function getPosition(board) {
  // get the numbers of move that has occurred
  const num = moveCounter(board);
  if (num === 0 || num === 1) return firstMove(board);
  if (num === 2) return secondMove(board);
  return subsequentMove(board);
}

module.exports = getPosition;
