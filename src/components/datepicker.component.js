define([
    'quark',
    'knockout',
    'jquery',
    'text!./datepicker.component.html',
    '$bootstrap-datepicker/js/bootstrap-datepicker',
    'loadCss!$bootstrap-datepicker/css/bootstrap-datepicker3.css',
    '$bootstrap-datepicker/locales/bootstrap-datepicker.es.min'
], function($$, ko, $, template) {

    function DatepickerComponent(params, $scope, $imports) {
        var self = this;

        var element;

        $$.parameters({
            value: ko.observable()
        }, params, this);

        $scope.getElement = function(elem) {
            element = elem;

            $(element).datepicker({
                language: 'es',
                format: 'dd/mm/yyyy'
            }).on('changeDate', function(e) {
                var obs = self.value();
                var val = $(element).datepicker('getDate');

                if (obs) {
                    if (obs.getTime() != val.getTime()) {
                        self.value(val);
                    }
                }
            });

            $(element).datepicker('setDate', self.value());
        }

        var subscriptions = {
            value: self.value.subscribe(function(newValue) {
                $(element).datepicker('setDate', newValue);
            })
        }

        this.dispose = function() {
            subscriptions.value.dispose();
            $(element).datepicker('destroy');
        }
    }

    return $$.component(DatepickerComponent, template);
});
