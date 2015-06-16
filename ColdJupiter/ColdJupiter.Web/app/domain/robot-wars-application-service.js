var RobotDriver = require('./robot-driver');
var RobotFactory = require('./robot-factory');

function RobotWarsApplicationService(data) {
    this._data = data;
};

RobotWarsApplicationService.prototype.process = function () {
    var result = [];
    
    var robotFactory = new RobotFactory();
    var areaUpperRightCoordinates = this._data.areaUpperRightCoordinates;
    
    this._data.robots.forEach(function (item) {
        var robot = robotFactory.make(areaUpperRightCoordinates, item.position);
        var robotDriver = new RobotDriver(robot);
        robotDriver.drive(item.commands);
        result.push({ position: robot.position() });
    });
    
    return { robots: result };
};

module.exports = RobotWarsApplicationService;