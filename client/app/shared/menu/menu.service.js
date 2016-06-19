(function() {
    angular
        .module('app.shared')
        .factory('MenuService', MenuService);

    function MenuService() {
        var service = {
            items: [], // {name: 'Dashboard', route:'/dashboard', faClass: fa-tachometer (font awesome class)}
            getMenu: getMenu,
            setMenu: setMenu
        };

        return service;

        //// Implement

        function setMenu(item) {
            service.items.push(item);
        }

        function getMenu() {
            return service.items;
        }

    }

})();