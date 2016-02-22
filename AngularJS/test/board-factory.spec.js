describe('boardFactory', function () {
  var cellFactory, boardFactory;
  beforeEach(function () {
    module('app');
    inject(function ($injector) {
      cellFactory = $injector.get('cellFactory');
      boardFactory = $injector.get('boardFactory');
    });
  });

  it('should be defined', function () {
    expect(boardFactory).toBeDefined();
  });
  describe('boardFactory: createNew(3,3)', function () {
    it('should create a new board with 3 rows and 3 columns', function () {
      var board = boardFactory.createNew(3, 3);

      expect(board.length).toEqual(3);
      expect(board[0].length).toEqual(3);
    });
  });
  describe('boardFactory: createNew(6,8)', function () {
    it('should create a new board with 6 rows and 8 columns', function () {
      var board = boardFactory.createNew(6, 8);

      expect(board.length).toEqual(6);
      expect(board[0].length).toEqual(8);
    });
  });
  
  describe('boardFactory: cell.getAliveNeighbors', function () {
    it('should return 0 if there are no other cells', function () {
      var board = boardFactory.createNew(1, 1);
      expect(board[0][0].getAliveNeighbors(board)).toEqual(0);
    });
  });
  
  describe('boardFactory: cell.getAliveNeighbors', function () {
    it('should return 0 if there are no neighbouring cells are alive', function () {
      var board = boardFactory.createNew(3, 3);
      expect(board[0][0].getAliveNeighbors(board)).toEqual(0);
      expect(board[1][1].getAliveNeighbors(board)).toEqual(0);
      expect(board[2][2].getAliveNeighbors(board)).toEqual(0);
    });
  });
  
  describe('boardFactory: cell.getAliveNeighbors', function () {
    it('should return correct number of neighbouring cells alive', function () {
      var board = boardFactory.createNew(3, 3);
      board[0][0].toggle();
      board[1][1].toggle();
      board[2][2].toggle();
     
      expect(board[0][0].getAliveNeighbors(board)).toEqual(1);
      expect(board[1][1].getAliveNeighbors(board)).toEqual(2);
      expect(board[2][2].getAliveNeighbors(board)).toEqual(1);
     
      var x = 0, y = 0;
      for (y = 0; y < board.length; y++) {
        for (x = 0; x < board[0].length; x++) {
          board[y][x].lives();
        }
      }
      expect(board[1][1].getAliveNeighbors(board)).toEqual(8);
    });
  });
});