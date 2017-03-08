define([
    'quark',
    'knockout',
    'jquery',
    'text!./select2.component.html',
    'select2/js/select2.min',
    'loadCss!select2/css/select2.min'
], function($$, ko, $, template) {

    function Select2Component(params, $scope, $imports) {
        var self = this;

        var element;
        var options = {};

        $$.parameters({
            placeholder: '',
            multiple: false,
            maximumSelectionLength: undefined,
            minimumResultsForSearch: 2,
            selectOnClose: false,
            closeOnSelect: true,
            tags: false,
            tokenSeparators: undefined,
            dropdownParent: undefined
        }, params, options);

        $$.parameters({
            disabled: ko.observable(),
            value: ko.observable(),
            options: ko.observableArray(),
            optionsText: ko.observable(),
            optionsValue: ko.observable(),
            onOpen: function() { },
            onOpening: function() { return true; },
            onClose: function() { },
            onClosing: function() { return true; },
            onSelect: function() { },
            onUnselect: function() { },
            onSelecting: function() {  return true; },
            onUnselecting: function() { return true; }
        }, params, this);

        function element2Observable() {
            var value = $(element).val();
            self.value(value);
        }

        function observable2Element() {
            var newValue = self.value();
            $(element).val(newValue);
            $(element).trigger('change.select2');
        }

        var data = ko.pureComputed(function() {
            var items = self.options();
            var optionsValue = self.optionsValue();
            var optionsText = self.optionsText();

            if ($$.isArray(items) && $$.isDefined(optionsValue) && $$.isDefined(optionsText)) {
                var result = new Array();

                for (var i = 0; i <= items.length; i++) {
                    var item = items[i];

                    if (item) {
                        result.push({
                            id: item[optionsValue],
                            text: item[optionsText]
                        });
                    }
                }

                return result;
            } else {
                return self.options();
            }
        });

        function initSelect2() {
            var params = {
                disabled: self.disabled(),
                data: data()
            };

            var final = $.extend(params, options);

            $(element).select2(final);

            observable2Element();

            $(element).on('change.select2', element2Observable);

            $(element).on('select2:close', function() { $$.call(self.onClose); });
            $(element).on('select2:closing', function() { $$.call(self.onClosing); });
            $(element).on('select2:open', function() { $$.call(self.onOpen); });
            $(element).on('select2:opening', function() { $$.call(self.onOpening); });
            $(element).on('select2:select', function() { $$.call(self.onSelect); });
            $(element).on('select2:unselect', function() { $$.call(self.onUnselect); });
            $(element).on('select2:selecting', function() { $$.call(self.onSelecting); });
            $(element).on('select2:unselecting', function() { $$.call(self.onUnselecting); });
        }

        function destroySelect2() {
            $(element).off();
            $(element).select2("destroy");
        }

        $scope.getElement = function(elem) {
            element = elem;

            initSelect2();
        }

        var subscriptions = {
            disabled: self.disabled.subscribe(function(newValue) {
                $(element).prop("disabled", newValue);
            }),
            value: self.value.subscribe(function(newValue) {
                var value = $(element).val();

                if (JSON.stringify(value) !== JSON.stringify(newValue)) {
                    observable2Element();
                }
            }),
            data: data.subscribe(function(newValue) {
                // La unica forma de actualizar el data del select2 es destruyendolo
                // y volviendolo a crear
                destroySelect2();
                initSelect2();
            })
        }

        $scope.dispose = function() {
            subscriptions.disabled.dispose();
            subscriptions.value.dispose();
            subscriptions.data.dispose();
            destroySelect2();
        }
    }

    return $$.component(Select2Component, template);
});
