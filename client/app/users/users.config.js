(function() {
    angular
        .module('app.users')
        .run(UsersConfig);

    UsersConfig.$inject = ['MenuService'];
    /* @ngInject */
    function UsersConfig(MenuService) {
        var newItem = {
            name: 'Users',
            route: '/users',
            order: 2,
            faClass: 'fa-user'
        };

        MenuService.setMenu(newItem);
    }
})();