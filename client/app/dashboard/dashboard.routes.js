(function() {
    angular
        .module('app.dashboard')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                views: {
                    '': {
                        templateUrl: 'client/app/dashboard/views/dashboard.view.html'
                    }
                },
                data: {
                    requiresLogin: false
                }
            });
    }
})();