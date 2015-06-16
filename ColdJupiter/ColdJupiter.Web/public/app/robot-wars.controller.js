function RobotWarsController($http) {
    var vm = this;
    
    $http.get('/api/v0/robot-wars').success(function (data, status, headers, config) {
        vm.title = data.title;
        vm.now = data.now;
    });
}