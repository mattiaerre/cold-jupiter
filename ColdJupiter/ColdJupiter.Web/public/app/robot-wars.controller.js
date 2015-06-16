function RobotWarsController($http, $log) {
    var vm = this;
    vm.$http = $http;
    vm.$log = $log;
    
    vm.apiUrl = '/api/v0/robot-wars';
    
    vm.request = '{"areaUpperRightCoordinates":{"x":5,"y":5},"robots":[{"position":{"coordinates":{"x":1,"y":2},"orientation":"N"},"commands":"LMLMLMLMM"},{"position":{"coordinates":{"x":3,"y":3},"orientation":"E"},"commands":"MMRMMRMRRM"}]}';
    
    vm.$http.get(vm.apiUrl).success(function (data, status, headers, config) {
        vm.title = data.title;
        vm.now = data.now;
    });
}

RobotWarsController.prototype.engage = function () {
    var vm = this;
    vm.$http.post(vm.apiUrl, { data: vm.request }).success(function (data, status, headers, config) {
        vm.response = data;
    });
};