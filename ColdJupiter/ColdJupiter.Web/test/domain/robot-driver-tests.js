var assert = require('assert');
var Robot = require('../../app/domain/robot');
var RobotDriver = require('../../app/domain/robot-driver');
var cardinalPoints = require('../../app/domain/cardinal-points');

describe('given a robot driver', function () {
    var maxCoordinates = null;
    var initialPosition = null;
    var robot = null;
    var robotDriver = null;
    
    beforeEach(function () {
        maxCoordinates = { x: 5, y: 5 };
        initialPosition = { coordinates: { x: 0, y: 0 }, orientation: cardinalPoints.North };
        robot = new Robot(maxCoordinates, initialPosition);
        robotDriver = new RobotDriver(robot);
    });

    it('it should be able to turn the robot left', function () {
        robotDriver.drive('L');

        assert.equal(cardinalPoints.West, robot.position().orientation);
    });

    it('it should be able to turn the robot right', function () {
        robotDriver.drive('R');
        
        assert.equal(cardinalPoints.East, robot.position().orientation);
    });

    it('it should be able to move the robot forward', function () {
        robotDriver.drive('M');

        var position = robot.position();

        assert.equal(0, position.coordinates.x);
        assert.equal(1, position.coordinates.y);
        assert.equal(cardinalPoints.North, position.orientation);
    });
});
