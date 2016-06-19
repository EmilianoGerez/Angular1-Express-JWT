(function() {
    angular
        .module('app.layout')
        .controller('SidebarCtrl', SidebarCtrl);

    SidebarCtrl.$inject = ['MenuService', '$location'];

    function SidebarCtrl(MenuService, $location) {
        var vm = this;
        vm.menuItems = [];
        vm.isActive = isActive;

        (function getMenu() {
            vm.menuItems = MenuService.getMenu();
        })();

        function isActive(viewLocation) {
            console.log($location.path())
            return viewLocation === $location.path();
        };
    }
})();