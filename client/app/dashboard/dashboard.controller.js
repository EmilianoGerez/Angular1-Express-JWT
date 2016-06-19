(function () {
    angular
        .module('app.dashboard')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = [];

    function DashboardCtrl() {
        var vm = this;
    }
})();