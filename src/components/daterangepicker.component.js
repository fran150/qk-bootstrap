/**
    @component <a href="http://bootstrap-datepicker.readthedocs.io/en/latest/">Bootstrap's DateRangePicker</a>
    component. Allows the user to select a range of dates.
*/
define([
    'quark',
    'knockout',
    'jquery',
    '../lib/daterangepicker-es',
    'text!./daterangepicker.component.html',
    'loadCss!adminLTE/daterangepicker/css',
    'adminLTE/daterangepicker/js'
], function($$, ko, $, locale, template) {

    function DaterangepickerComponent(params, $scope, $imports) {
        var self = this;

        var element;

        $$.parameters({
            /**
                @parameter date Start date of the selected period
                @observable @exposed
            */
            startDate: ko.observable(),
            /**
                @parameter date End date of the selected period
                @observable @exposed
            */
            endDate: ko.observable()
        }, params, this);

        function updateDates(picker) {
            var start = picker.startDate.toDate();
            var end = picker.endDate.toDate();

            if (start != self.startDate()) {
                self.startDate(start)
            }

            if (end != self.endDate()) {
                self.endDate(end);
            }
        }


        $scope.getElement = function(elem) {
            element = elem;

            $(element).daterangepicker({
                "locale": locale,
                autoApply: true
            });

            $(element).on('apply.daterangepicker', function(ev, picker) {
                updateDates(picker);
            });

            $(element).on('hide.daterangepicker', function(ev, picker) {
                updateDates(picker);
            });
        }

        var subscriptions = {
            startDate: self.startDate.subscribe(function(start) {
               $(element).data('daterangepicker').setStartDate(start);
            }),
            endDate: self.endDate.subscribe(function(end) {
               $(element).data('daterangepicker').setEndDate(end);
            })
        }

        this.dispose = function() {
            subscriptions.startDate.dispose();
            subscriptions.endDate.dispose();
            $(element).off('apply.daterangepicker');
            $(element).off('apply.daterangepicker');
        }
    }

    return $$.component(DaterangepickerComponent, template);
});
