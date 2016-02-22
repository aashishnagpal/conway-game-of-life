describe('cellFactory', function () {
  var cellFactory;
  beforeEach(function () {
    module('app');
    inject(function ($injector) {
      cellFactory = $injector.get('cellFactory');
    });
  });

  it('should be defined', function () {
    expect(cellFactory).toBeDefined();
  });
  describe('cellFactory: createNew', function () {
    it('should create a new cell', function () {
      var position = {x: 0, y: 0};
      var options = {isAlive: true};
      var cell = cellFactory.createNew(position, options);

      expect(cell.getAliveNeighbors).toEqual(jasmine.any(Function));
    });
  });
});
