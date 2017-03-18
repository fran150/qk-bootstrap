define([
    'quark',
    'knockout',
    'jquery',
    '../lib/daterangepicker-es',
    'text!./daterangepicker.component.html',
    'loadCss!$bootstrap-daterangepicker/daterangepicker.css',
    '$bootstrap-daterangepicker/daterangepicker'
], function($$, ko, $, locale, template) {

    function DaterangepickerComponent(params, $scope, $imports) {
        var self = this;

        var element;

        $$.parameters({
            startDate: ko.observable(),
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
