(function() {
    angular
        .module('app.shared')
        .service('ValidatorsService', ValidatorsService);

    ValidatorsService.$inject = ['$http'];

    function ValidatorsService($http) {

        var searchEmailUrl = 'http://localhost:3000/api/users/search/';

        var service = {
            email: email,
            isUnique: isUnique
        }

        return service;

        /////////////
        // Methods

        function email(value) {
            var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

            return re.test(value);
        }

        function isUnique(value) {
            return $http.get(searchEmailUrl + value);
        }
    }
})();