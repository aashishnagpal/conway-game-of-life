describe('lifeFactory', function () {
  var cellFactory, boardFactory, lifeFactory;
  beforeEach(function () {
    module('app');
    inject(function ($injector) {
      cellFactory = $injector.get('cellFactory');
      boardFactory = $injector.get('boardFactory');
      lifeFactory = $injector.get('lifeFactory');
    });
  });

  it('should be defined', function () {
    expect(lifeFactory).toBeDefined();
  });
  describe('lifeFactory: createNew(board(3,3))', function () {
    it('should create a new \'life\' grid with 3 rows and 3 columns', function () {
      var board = boardFactory.createNew(3, 3);
      var life = lifeFactory.createNew(board);
      expect(life.board).toEqual(board);
      expect(life.board.length).toEqual(3);
      expect(life.board[0].length).toEqual(3);
    });
  });
  
  describe('lifeFactory: createNew(board(6,8))', function () {
    it('should create a new \'life\' grid with 6 rows and 8 columns', function () {
      var board = boardFactory.createNew(3, 3);
      var life = lifeFactory.createNew(board);
      expect(life.board).toEqual(board);
      expect(life.board.length).toEqual(3);
      expect(life.board[0].length).toEqual(3);
    });
  });
  
  describe('lifeFactory: next generation', function () {
    it('still life - "Block" - should remain still/intact', function () {
      var board = boardFactory.createNew(4, 4);
      board[1][1].toggle();
      board[1][2].toggle();
      board[2][1].toggle();
      board[2][2].toggle();
      
      var life = lifeFactory.createNew(board);
      expect(life.board).toEqual(board);
      life.next();
      expect(life.board[1][1].isAlive).toBe(true);
      expect(life.board[1][2].isAlive).toBe(true);
      expect(life.board[2][1].isAlive).toBe(true);
      expect(life.board[2][2].isAlive).toBe(true);
    });
    
    it('still life - "Beehive" - should remain still/intact', function () {
      var board = boardFactory.createNew(5, 6);
      board[1][2].toggle();
      board[2][1].toggle();
      board[2][3].toggle();
      board[3][1].toggle();
      board[3][3].toggle();
      board[4][2].toggle();
      
      var life = lifeFactory.createNew(board);
      expect(life.board).toEqual(board);
      life.next();
      expect(life.board[1][2].isAlive).toBe(true);
      expect(life.board[2][1].isAlive).toBe(true);
      expect(life.board[2][3].isAlive).toBe(true);
      expect(life.board[3][1].isAlive).toBe(true);
      expect(life.board[3][3].isAlive).toBe(true);
      expect(life.board[4][2].isAlive).toBe(true);
    });
    
    it('oscillator - "Blinker" - should oscillate with period 2', function () {
      var board = boardFactory.createNew(3, 3);
      board[0][1].toggle();
      board[1][1].toggle();
      board[2][1].toggle();
      
      var life = lifeFactory.createNew(board);
      expect(life.board).toEqual(board);
      life.next();
      expect(life.board[0][1].isAlive).not.toBe(true);
      expect(life.board[1][0].isAlive).toBe(true);
      expect(life.board[1][1].isAlive).toBe(true);
      expect(life.board[1][2].isAlive).toBe(true);
      expect(life.board[2][1].isAlive).not.toBe(true);
      
      life.next();
      expect(life.board[0][1].isAlive).toBe(true);
      expect(life.board[1][0].isAlive).not.toBe(true);
      expect(life.board[1][1].isAlive).toBe(true);
      expect(life.board[1][2].isAlive).not.toBe(true);
      expect(life.board[2][1].isAlive).toBe(true);
      
    });
    
    it('oscillator - "Beacon " - should oscillate with period 2', function () {
      var board = boardFactory.createNew(6, 6);
      board[1][1].toggle();
      board[1][2].toggle();
      board[2][1].toggle();
      board[2][2].toggle();
      board[3][3].toggle();
      board[3][4].toggle();
      board[4][3].toggle();
      board[4][4].toggle();
      
      var life = lifeFactory.createNew(board);
      expect(life.board).toEqual(board);
      life.next();
      expect(life.board[1][1].isAlive).toBe(true);
      expect(life.board[1][2].isAlive).toBe(true);
      expect(life.board[2][1].isAlive).toBe(true);
      expect(life.board[2][2].isAlive).not.toBe(true);
      expect(life.board[3][3].isAlive).not.toBe(true);
      expect(life.board[3][4].isAlive).toBe(true);
      expect(life.board[4][3].isAlive).toBe(true);
      expect(life.board[4][4].isAlive).toBe(true);
      
      life.next();
      expect(life.board[1][1].isAlive).toBe(true);
      expect(life.board[1][2].isAlive).toBe(true);
      expect(life.board[2][1].isAlive).toBe(true);
      expect(life.board[2][2].isAlive).toBe(true);
      expect(life.board[3][3].isAlive).toBe(true);
      expect(life.board[3][4].isAlive).toBe(true);
      expect(life.board[4][3].isAlive).toBe(true);
      expect(life.board[4][4].isAlive).toBe(true);
      
    });
  });
});