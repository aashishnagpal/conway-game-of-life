var app = angular.module('app');
app.factory('cellFactory', [function () {
  function createCell(position, options) {
    var defaults = {
      isAlive: false
    };
    return {
      position: position,
      isAlive: !!(options && options.isAlive),
      toggle: function () {
        this.isAlive = !this.isAlive;
      },
      lives: function () {
        this.isAlive = true;
      },
      dies: function () {
        this.isAlive = false;
      },
      getAliveNeighbors: function (board) {
        var y = this.position.y;
        var x = this.position.x;
        var getNeighbour = function (x, y) {
          return board[y] && board[y][x];
        };
        var neighbors = [
          getNeighbour(x - 1, y - 1),
          getNeighbour(x - 1, y),
          getNeighbour(x - 1, y + 1),
          getNeighbour(x, y - 1),
          getNeighbour(x, y + 1),
          getNeighbour(x + 1, y - 1),
          getNeighbour(x + 1, y),
          getNeighbour(x + 1, y + 1)
        ];
        return neighbors.reduce(function (previous, current) {
          if (current) {
            return (previous += +!!current.isAlive);
          }
          return (previous += 0);
        }, 0);
      }
    };
  }
  return {
    createNew: createCell
  };
}]);