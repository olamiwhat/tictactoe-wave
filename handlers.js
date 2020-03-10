// require helpers
const { validateBoard, boardStatus, isServerTurn } = require('./helpers');
const getPosition = require('./Methods/getPosition');
const play = require('./Methods/play');

// define the route handlers
const handlers = {};
// since game is only played by sending a get request,
// this allows only a GET request
handlers.acceptableMethod = function (data) {
  const { method } = data;
  if (method === 'GET') return true;

  return false;
};
// ping handler => just to ping the api to find out it's still alive
handlers.ping = (data, callback) => {
  // callback a http status code and a payload => no payload required here
  callback(200, 'API is still alive');
};
// game handler to play tic-tac-toe
handlers.game = (data, callback) => {
  if (handlers.acceptableMethod(data)) {
    const { board } = data.queryStringObject;
    // check if board exist
    if (board) {
      const validBoard = validateBoard(board);
      // check if board is valid
      if (validBoard) {
        // check the status of the game i.e winner, tie, in progress
        const gameStatus = boardStatus(validBoard);
        if (gameStatus && gameStatus.includes('Wins')) {
          callback(200, gameStatus);
        } else if (gameStatus && gameStatus === 'Tie') {
          callback(200, `The game ${validBoard} has ended in a tie`);
        } else if (gameStatus && gameStatus === 'In Progress') {
          // check if it is the server's turn to play
          const serverTurn = isServerTurn(validBoard);
          console.log(serverTurn);
          if (serverTurn) {
            // get the move to play
            const move = getPosition(validBoard);
            console.log('move: ', move);
            // play with the move and return the new board
            const newBoard = play(validBoard, move);
            console.log(newBoard);
            if (Array.isArray(newBoard)) callback(200, `${newBoard[1]}`);
            else callback(200, `${newBoard}`);
          } else {
            callback(400, 'It is not the server\'s turn to play');
          }
        } else {
          callback(400, 'Not a valid board');
        }
      } else {
        callback(400, 'The board is not a valid tic-tac-toe board');
      }
    } else {
      callback(400, 'Missing required field!');
    }
  } else {
    callback(405, 'Sorry, not an acceptable method for this API!');
  }
};

// Not found handler
handlers.notFound = (data, callback) => {
  callback(404, 'can\'t find what you\'re looking for');
};


// Export modules
module.exports = handlers;
