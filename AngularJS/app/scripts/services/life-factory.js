var app = angular.module('app');
app.factory('lifeFactory', ['cellFactory', function (cell) {
  function createLife(seed) {
    var height = seed.length;
    var width = seed[0].length;
    var previousBoard = [];
    var board = angular.copy(seed);

    function newCellState(previousBoard, x, y) {
      var oldCell = previousBoard[y][x];
      var newCell = cell.createNew(oldCell.position, {isAlive: oldCell.isAlive});
      var neighbors = newCell.getAliveNeighbors(previousBoard);
      newCell.isAlive = newCell.isAlive
        ? neighbors >= 2 && neighbors <= 3
        : neighbors === 3;

      return newCell;
    }

    function next() {
      previousBoard = angular.copy(board);
      var y = 0, x = 0;
      for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
          board[y][x] = newCellState(previousBoard, x, y);
        }
      }
    }
    
    return {
      next: next,
      board: board
    };
  }
  return {
    createNew: createLife
  };
}]);