var app = angular.module('app');
app.controller('gameController', ['$scope', '$interval', 'boardFactory', 'lifeFactory', function ($scope, $interval, board, life) {
  var gc = this;
    
  gc.interval = 150;
  gc.defaultRows = 6;
  gc.defaultColumns = 8;
  gc.rows = gc.defaultRows;
  gc.columns = gc.defaultColumns;
  
  gc.reset = function () {
    if (gc.isStarted) {
      gc.togglePlay();
    }
    var seed = board.createNew(+gc.rows || gc.defaultRows, +gc.columns || gc.defaultColumnse);
    gc.life = life.createNew(seed);
    gc.board = gc.life.board;
    gc.isStarted = false;
  };
  
  gc.toggleAutoAdvance = function () {
    if (!gc.isStarted && gc.timer) {
      $interval.cancel(gc.timer);
      gc.isStarted = false;
      return;
    }
    gc.isStarted = true;
    gc.timer = $interval(gc.life.next, gc.interval);
  };
}]);
               
               

    
    
    
