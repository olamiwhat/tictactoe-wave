# Tic-Tac-Toe API

The API was built mainly with vanilla Node.js
No external dependencies except for testing
Jest and supertest was installed for testing

API is currently deployed on Heroku https://tictactoe-wave-api.herokuapp.com/

Please interact with the game at https://tictactoe-wave-api.herokuapp.com/game

## Interacting with the API

You can interact with the API by making GET request to the API

To get started:

- The API only accepts query strings.
- An empty TicTacToe board format is represented by 9 empty spaces "+++++++++" (encoded)
- The board is indexed 0 - 8
- The server always plays as 'O'
- Anyone can play first
- The game is designed such that the server never loses a game therefore it always make the optimal move

## To play a game
Send a GEt request with the board as a query string to the API as such
 - https://tictactoe-wave-api.herokuapp.com/game?board=x++++++++
 - the server will respond with the board as a string including the server's move
 - if there's a winner the server responds with whoever wins as such 'O Wins'
 - If there is a tie, the server responds as such 'Tie'
