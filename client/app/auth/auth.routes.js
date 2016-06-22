(function() {
    angular
        .module('app.auth')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    'public': {
                        templateUrl: 'client/app/auth/views/signup.view.html',
                        controller: 'AuthCtrl',
                        controllerAs: 'vm'
                    }
                },
                data: {
                    requiresLogin: false
                }
            });
    }
})();