(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellCtrl', ShellCtrl);

    ShellCtrl.$inject = [];

    function ShellCtrl() {
        var vm = this;
        vm.isLoggedIn = false;
        vm.isToggled = false;
        vm.toggle = toggle;

        activate();

        function activate() {
            vm.isLoggedIn = false;
        }

        function toggle() {
            vm.isToggled = !vm.isToggled;
        }
    }
})();