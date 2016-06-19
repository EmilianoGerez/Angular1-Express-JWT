(function() {
    angular
        .module('app.core')
        .config(routeConfig);

    routeConfig.$inject = ['$locationProvider', '$urlRouterProvider'];

    function routeConfig($locationProvider, $urlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    }
})();