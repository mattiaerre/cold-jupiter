var express = require('express');
var router = express.Router();

var RobotWarsApplicationService = require('../app/domain/robot-wars-application-service');

router.get('/', function (req, res) {
    res.send({ title: 'robot-wars', now: new Date() });
});

router.post('/', function (req, res) {
    var data = JSON.parse(req.body.data);
    
    var application = new RobotWarsApplicationService(data);
    var result = application.process();
    
    res.send(result);
});

module.exports = router;