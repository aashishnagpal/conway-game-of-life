var app = angular.module('app');
app.factory('boardFactory', ['cellFactory', function (cell) {
  function createBoard(rows, columns) {
    var newBoard = [], y = 0, x = 0;
    for (y = 0; y < rows; y++) {
      newBoard[y] = [];
      for (x = 0; x < columns; x++) {
        newBoard[y][x] = cell.createNew({y: y, x: x});
      }
    }
    return newBoard;
  }
  return {
    createNew: createBoard
  };
}]);