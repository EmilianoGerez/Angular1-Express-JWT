(function() {
    angular
        .module('app.auth')
        .controller('AuthCtrl', AuthCtrl);

    AuthCtrl.$inject = [];

    function AuthCtrl() {
        var vm = this;
        vm.newUser = {};
        vm.credential = {};

        // Signup Form
        vm.userFields = [{
            key: 'firstName',
            type: 'input',
            templateOptions: {
                label: 'First Name',
                placeholder: 'Your Name',
                required: true
            }
        }, {
            key: 'lastName',
            type: 'input',
            templateOptions: {
                label: 'Last Name',
                placeholder: 'Your Last Name',
                required: true
            }
        }, {
            key: 'email',
            type: 'input',
            templateOptions: {
                type: 'email',
                label: 'Email',
                placeholder: 'Your Email',
                required: true
            }
        }];
    }
})();