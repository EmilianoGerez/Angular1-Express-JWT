(function() {
    angular
        .module('app.users')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {

        $stateProvider
            .state('users', {
                url: '/users',
                views: {
                    '': {
                        templateUrl: 'client/app/users/views/users.view.html'
                    }
                },
                data: {
                    requiresLogin: false
                }
            });
    }


})();