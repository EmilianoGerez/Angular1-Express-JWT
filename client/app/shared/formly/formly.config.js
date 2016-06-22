(function() {
    angular
        .module('app.shared')
        .run(FormlyConfig);

    FormlyConfig.$inject = ['formlyConfig', 'formlyValidationMessages', 'formlyApiCheck'];

    function FormlyConfig(formlyConfig, formlyValidationMessages, formlyApiCheck) {

        // formlyConfigProvider.setType({
        //     overwriteOk: true,
        //     name: 'input',
        //     templateUrl: 'client/app/shared/formly/template/form-input.template.html',
        //     defaultOptions: {
        //         templateOptions: {
        //             minlength: 3,
        //             maxlength: 50,
        //             required: true
        //         }
        //     },
        //     wrapper: ['bootstrapLabel', 'ngMessages']
        // });

        // formlyConfigProvider.setWrapper({
        //     overwriteOk: true,
        //     name: 'ngMessages',
        //     templateUrl: 'client/app/shared/formly/template/form-wrapper.template.html'
        // });
        formlyConfig.setWrapper({
            name: 'validation',
            types: ['input', 'customInput'],
            templateUrl: 'client/app/shared/formly/template/form-wrapper.template.html'
        });

        formlyConfig.setType({
            name: 'customInput',
            extends: 'input',
            apiCheck: function(check) {
                return {
                    templateOptions: {
                        foo: check.string.optional
                    }
                };
            }
        });

        formlyValidationMessages.addStringMessage('required', '{{to.label}} This field is required');
        formlyValidationMessages.addStringMessage('minlength', 'Too short');
        formlyValidationMessages.addStringMessage('maxlength', 'Too large');
    }
})();