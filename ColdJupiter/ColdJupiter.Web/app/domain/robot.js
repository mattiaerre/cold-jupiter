var cardinalPoints = require('./cardinal-points');

function Robot(maxCoordinates, position) {
    this._maxCoordinates = maxCoordinates;
    this._position = position;
};

Robot.prototype.position = function () {
    return this._position;
};

Robot.prototype.turnRight = function () {
    if (this._position.orientation == cardinalPoints.North)
        this._position.orientation = cardinalPoints.East;
    else if (this._position.orientation == cardinalPoints.East)
        this._position.orientation = cardinalPoints.South;
    else if (this._position.orientation == cardinalPoints.South)
        this._position.orientation = cardinalPoints.West;
    else if (this._position.orientation == cardinalPoints.West)
        this._position.orientation = cardinalPoints.North;
};

Robot.prototype.turnLeft = function () {
    if (this._position.orientation == cardinalPoints.North)
        this._position.orientation = cardinalPoints.West;
    else if (this._position.orientation == cardinalPoints.West)
        this._position.orientation = cardinalPoints.South;
    else if (this._position.orientation == cardinalPoints.South)
        this._position.orientation = cardinalPoints.East;
    else if (this._position.orientation == cardinalPoints.East)
        this._position.orientation = cardinalPoints.North;
};

Robot.prototype.move = function () {
    var x, y;
    if (this._position.orientation == cardinalPoints.North) {
        y = this._position.coordinates.y + 1;
        if (y <= this._maxCoordinates.y)
            this._position.coordinates.y = y;
    }    
    else if (this._position.orientation == cardinalPoints.East) {
        x = this._position.coordinates.x + 1;
        if (x <= this._maxCoordinates.x)
            this._position.coordinates.x = x;
    }
    else if (this._position.orientation == cardinalPoints.South) {
        y = this._position.coordinates.y - 1;
        if (y >= 0)
            this._position.coordinates.y = y;
    }
    else if (this._position.orientation == cardinalPoints.West) {
        x = this._position.coordinates.x - 1;
        if (x >= 0)
            this._position.coordinates.x = x;
    }
}

module.exports = Robot;