(function() {
    angular
        .module('app.dashboard')
        .run(DashboardConfig);

    DashboardConfig.$inject = ['MenuService'];

    function DashboardConfig(MenuService) {
        var newItem = {
            name: "Dashboard",
            route: '/dashboard',
            order: 1,
            faClass: 'fa-tachometer'
        }

        MenuService.setMenu(newItem);
    }
})();