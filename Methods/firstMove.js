/** *
 * first move function returns the position for the server to play its first move
 * position is dependent on if opposition has played its first move or an empty board is passed in
 */

function firstMove(board) {
  return (board.indexOf('X') === 4 || board.indexOf('X') === -1 ? 0 : 4);
}

module.exports = firstMove;
