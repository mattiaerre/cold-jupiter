function RobotDriver(robot) {
    this._robot = robot;
};

RobotDriver.prototype.drive = function (commands) {
    var robot = this._robot;
    commands.split('').forEach(function (command) {
        if (command == 'L')
            robot.turnLeft();
        if (command == 'R')
            robot.turnRight();
        if (command == 'M')
            robot.move();
    });
};

module.exports = RobotDriver;