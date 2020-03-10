const moveCounter = require('../Methods/moveCounter');

describe('move counter function test', () => {
  it('should count the number of moves made', () => {
    const board = ['X', 'O', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    expect(moveCounter(board)).toEqual(2);
  });
});
