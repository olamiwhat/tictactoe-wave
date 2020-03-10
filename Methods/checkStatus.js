
const checkStatus = {
  /*
winningCombination takes an array as a parameter,
returns undefined if there is no winning combination.
If there is a winning combination,
the function will return an array containing the winning combination
*/
  winningCombo(board) {
    if (board === undefined) return undefined;
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

    const winner = winningCombinations.find((combo) => board[combo[0]] !== ' '
      && board[combo[0]] === board[combo[1]]
      && board[combo[1]] === board[combo[2]]);

    return winner;
  },
  /**
 * winner function accepts tic-tac-toe board array as a parameter and
 * determines if the game has a winner.
 * Returns 'Tie', 'In Progress', 'X wins', 'O wins'
 */
  winner(board) {
    if (!checkStatus.winningCombo(board) && board.indexOf(' ') > -1) return 'In Progress';
    if (!checkStatus.winningCombo(board) && board.indexOf(' ') === -1) return 'Tie';
    if (checkStatus.winningCombo(board)) return `${board[checkStatus.winningCombo(board)[0]]} Wins`;
  },
};

module.exports = checkStatus;
