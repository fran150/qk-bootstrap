/**
    @component <a href="http://bootstrap-datepicker.readthedocs.io/en/latest/">Bootstrap's datepicker</a>
    component. Shows the user a calendar allowing to select a date.
*/
define([
    'quark',
    'knockout',
    'jquery',
    'text!./datepicker.component.html',
    'adminLTE/datepicker/js',
    'loadCss!adminLTE/datepicker/css',
    'adminLTE/datepicker/locales/es'
], function($$, ko, $, template) {

    function DatepickerComponent(params, $scope, $imports) {
        var self = this;

        var element;

        $$.parameters({
            /**
                @parameter date Selected date
            */
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

        $scope.dispose = function() {
            subscriptions.value.dispose();
            $(element).datepicker('destroy');
        }
    }

    return $$.component(DatepickerComponent, template);
});
