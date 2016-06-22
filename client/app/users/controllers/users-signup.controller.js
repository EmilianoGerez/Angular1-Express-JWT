(function() {
    angular
        .module('app.users')
        .controller('UsersSignupCtrl', UsersSignupCtrl);

    UsersSignupCtrl.$inject = ['ValidatorsService', 'lodash'];

    function UsersSignupCtrl(ValidatorsService, lodash) {
        var vm = this;
        vm.newUser = {};

        // Signup Form
        vm.userFields = [{
            key: 'firstName',
            type: 'input',
            templateOptions: {
                label: 'First Name',
                placeholder: 'Your Name',
                required: true,
                minlength: 3
            }
        }, {
            key: 'lastName',
            type: 'input',
            templateOptions: {
                label: 'Last Name',
                placeholder: 'Your Last Name',
                required: true,
                minlength: 3
            }
        }, {
            key: 'email',
            type: 'input',
            templateOptions: {
                type: 'email',
                label: 'Email',
                placeholder: 'Your Email',
                required: true
            },
            validators: {
                email: {
                    expression: function($viewValue, $modelValue, scope) {
                        var value = $modelValue || $viewValue;
                        if (value) {
                            return ValidatorsService.email(value);
                        }
                    },
                    message: '$viewValue + " is not a valid Email"'
                }

            },
            asyncValidators: {
                unique: function($viewValue, $modelValue, scope) {
                    var value = $modelValue || $viewValue;
                    if (value) {
                        return ValidatorsService.isUnique(value)
                            .then(function(res) {
                                var available = res.data.available;
                                if (!available) {
                                    throw new Error('Is taken');
                                }
                            });
                    }
                }
            }
        }, {
            type: "input",
            key: "password",
            model: vm.newUser,
            templateOptions: {
                type: "password",
                label: "Password",
                placeholder: "Password",
                required: true,
                minlength: 8,
                onChange: function onChangeF(viewValue, modelValue, fieldScope) {
                    var fieldToMatch = lodash.find(fieldScope.fields, {
                        key: fieldScope.options.data.fieldToMatch
                    }).name;
                    fieldScope.form[fieldToMatch].$validate();
                }
            },
            data: {
                fieldToMatch: "confirm_password"
            }
        }, {
            type: "input",
            model: vm.newUser,
            key: "confirm_password",
            templateOptions: {
                type: "password",
                label: "Confirm Password",
                placeholder: "Confirm Password",
                minlength: 8
            },
            validators: {
                fieldMatch: {
                    expression: function fieldMatchExpression(viewValue, modelValue, fieldScope) {
                        return (modelValue || viewValue) === vm.newUser[fieldScope.options.data.fieldToMatch];
                    }
                }
            },
            data: {
                fieldToMatch: "password"
            }
        }];
    }
})();