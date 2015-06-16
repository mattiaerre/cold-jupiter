var assert = require('assert');
var Robot = require('../../app/domain/robot');
var cardinalPoints = require('../../app/domain/cardinal-points');

describe('given a robot', function () {
    var maxCoordinates = null;
    var initialPosition = null;
    var robot = null;
    
    beforeEach(function () {
        maxCoordinates = { x: 5, y: 5 };
        initialPosition = { coordinates: { x: 0, y: 0 }, orientation: cardinalPoints.North };
        robot = new Robot(maxCoordinates, initialPosition);
    });
    
    it('it should be possible to get its position', function () {
        var position = robot.position();
        
        assert.equal(0, position.coordinates.x);
        assert.equal(0, position.coordinates.y);
        assert.equal(cardinalPoints.North, position.orientation);
    });
    
    it('it should be possible to turn it left', function () {
        robot.turnLeft();
        var position = robot.position();
        
        assert.equal(0, position.coordinates.x);
        assert.equal(0, position.coordinates.y);
        assert.equal(cardinalPoints.West, position.orientation);
    });
    
    it('it should be possible to turn it right', function () {
        robot.turnRight();
        var position = robot.position();
        
        assert.equal(0, position.coordinates.x);
        assert.equal(0, position.coordinates.y);
        assert.equal(cardinalPoints.East, position.orientation);
    });
    
    it('it should be possible to turn it left 2 times', function () {
        robot.turnLeft();
        robot.turnLeft();
        var position = robot.position();
        
        assert.equal(0, position.coordinates.x);
        assert.equal(0, position.coordinates.y);
        assert.equal(cardinalPoints.South, position.orientation);
    });
    
    it('it should be possible to turn it right 2 times', function () {
        robot.turnRight();
        robot.turnRight();
        var position = robot.position();
        
        assert.equal(0, position.coordinates.x);
        assert.equal(0, position.coordinates.y);
        assert.equal(cardinalPoints.South, position.orientation);
    });
    
    it('it should be possible to turn it left 3 times', function () {
        robot.turnLeft();
        robot.turnLeft();
        robot.turnLeft();
        var position = robot.position();
        
        assert.equal(0, position.coordinates.x);
        assert.equal(0, position.coordinates.y);
        assert.equal(cardinalPoints.East, position.orientation);
    });
    
    it('it should be possible to turn it right 3 times', function () {
        robot.turnRight();
        robot.turnRight();
        robot.turnRight();
        var position = robot.position();
        
        assert.equal(0, position.coordinates.x);
        assert.equal(0, position.coordinates.y);
        assert.equal(cardinalPoints.West, position.orientation);
    });
    
    it('it should be possible to turn it left 4 times', function () {
        robot.turnLeft();
        robot.turnLeft();
        robot.turnLeft();
        robot.turnLeft();
        var position = robot.position();
        
        assert.equal(0, position.coordinates.x);
        assert.equal(0, position.coordinates.y);
        assert.equal(cardinalPoints.North, position.orientation);
    });
    
    it('it should be possible to turn it right 4 times', function () {
        robot.turnRight();
        robot.turnRight();
        robot.turnRight();
        robot.turnRight();
        var position = robot.position();
        
        assert.equal(0, position.coordinates.x);
        assert.equal(0, position.coordinates.y);
        assert.equal(cardinalPoints.North, position.orientation);
    });
    
    it('it should be possible to move it forward', function () {
        robot.move();
        var position = robot.position();
        
        assert.equal(0, position.coordinates.x);
        assert.equal(1, position.coordinates.y);
        assert.equal(cardinalPoints.North, position.orientation);
    });
    
    it('it should be possible to move, turn right and move', function () {
        robot.move();
        robot.turnRight();
        robot.move();
        var position = robot.position();
        
        assert.equal(1, position.coordinates.x);
        assert.equal(1, position.coordinates.y);
        assert.equal(cardinalPoints.East, position.orientation);
    });
    
    it('it should be possible to move, turn right, move, turn right and move', function () {
        robot.move();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.move();
        var position = robot.position();
        
        assert.equal(1, position.coordinates.x);
        assert.equal(0, position.coordinates.y);
        assert.equal(cardinalPoints.South, position.orientation);
    });
    
    it('it should be possible to move, turn right, move, turn right, move, turn right and move', function () {
        robot.move();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.move();
        var position = robot.position();
        
        assert.equal(0, position.coordinates.x);
        assert.equal(0, position.coordinates.y);
        assert.equal(cardinalPoints.West, position.orientation);
    });
    
    it('it should be possible to turn right, move, turn left and move', function () {
        robot.turnRight();
        robot.move();
        robot.turnLeft();
        robot.move();
        var position = robot.position();
        
        assert.equal(1, position.coordinates.x);
        assert.equal(1, position.coordinates.y);
        assert.equal(cardinalPoints.North, position.orientation);
    });
    
    it('it should be possible to turn left and move', function () {
        robot.turnLeft();
        robot.move();
        var position = robot.position();
        
        assert.equal(0, position.coordinates.x);
        assert.equal(0, position.coordinates.y);
        assert.equal(cardinalPoints.West, position.orientation);
    });
    
    it('it should be possible to turn right, turn righ and move', function () {
        robot.turnRight();
        robot.turnRight();
        robot.move();
        var position = robot.position();
        
        assert.equal(0, position.coordinates.x);
        assert.equal(0, position.coordinates.y);
        assert.equal(cardinalPoints.South, position.orientation);
    });
    
    it('it should be possible to move 6 times', function () {
        robot.move();
        robot.move();
        robot.move();
        robot.move();
        robot.move();
        robot.move();
        var position = robot.position();
        
        assert.equal(0, position.coordinates.x);
        assert.equal(5, position.coordinates.y);
        assert.equal(cardinalPoints.North, position.orientation);
    });
    
    it('it should be possible to turn right and move 6 times', function () {
        robot.turnRight();
        robot.move();
        robot.move();
        robot.move();
        robot.move();
        robot.move();
        robot.move();
        var position = robot.position();
        
        assert.equal(5, position.coordinates.x);
        assert.equal(0, position.coordinates.y);
        assert.equal(cardinalPoints.East, position.orientation);
    });
    
    // 1st acceptance criteria
    it('given "1 2 N" when "LMLMLMLMM" then "1 3 N"', function () {
        robot = new Robot(maxCoordinates, { coordinates: { x: 1, y: 2 }, orientation: cardinalPoints.North });
        
        robot.turnLeft();
        robot.move();
        robot.turnLeft();
        robot.move();
        robot.turnLeft();
        robot.move();
        robot.turnLeft();
        robot.move();
        robot.move();
        var position = robot.position();
        
        assert.equal(1, position.coordinates.x);
        assert.equal(3, position.coordinates.y);
        assert.equal(cardinalPoints.North, position.orientation);
    });
    
    // 2nd acceptance criteria
    it('given "3 3 E" when "MMRMMRMRRM" then "5 1 E"', function () {
        robot = new Robot(maxCoordinates, { coordinates: { x: 3, y: 3 }, orientation: cardinalPoints.East });
        
        robot.move();
        robot.move();
        robot.turnRight();
        robot.move();
        robot.move();
        robot.turnRight();
        robot.move();
        robot.turnRight();
        robot.turnRight();
        robot.move();
        var position = robot.position();
        
        assert.equal(5, position.coordinates.x);
        assert.equal(1, position.coordinates.y);
        assert.equal(cardinalPoints.East, position.orientation);
    });
});
