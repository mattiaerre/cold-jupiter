var Robot = require('./robot');

function RobotFactory() {
};

RobotFactory.prototype.make = function (maxCoordinates, position) {
    return new Robot(maxCoordinates, position);
}

module.exports = RobotFactory;