/**
    @component Shows a <a href="https://select2.github.io/"> Bootstrap select2 element</a>
*/
define([
    'quark',
    'knockout',
    'jquery',
    'text!./select2.component.html',
    'adminLTE/select2/js',
    'loadCss!adminLTE/select2/css'
], function($$, ko, $, template) {

    function Select2Component(params, $scope, $imports) {
        var self = this;

        var element;
        var options = {};

        $$.parameters({
            /**
                @parameter string Placeholder text to show
            */
            placeholder: '',
            /**
                @parameter bool Allow multiple item selection
            */
            multiple: false,
            /**
                @parameter int Maximun number of allowed selected items.
            */
            maximumSelectionLength: undefined,
            /**
                @parameter int Minimun item number for the control to show a search textbox
            */
            minimumResultsForSearch: 2,
            /**
                @parameter bool Selected the highlighted item on select close
            */
            selectOnClose: false,
            /**
                @parameter bool Close selector on item select
            */
            closeOnSelect: true,
            /**
                @parameter bool Use the tag mode. When in tag mode the user can select from pre-existing
                options or create a new tag by writing the value directly on the control
            */
            tags: false,
            /**
                @parameter array When in tag mode use this characters as token separators
            */
            tokenSeparators: undefined,
            /**
                @parameter object Allows to specify the dropdown parent when in a modal
            */
            dropdownParent: undefined
        }, params, options);

        $$.parameters({
            /**
                @parameter bool True if the component must be disabled
                @observable @exposed
            */
            disabled: ko.observable(),
            /**
                @parameter string Selected value or array of selected values
                @observable @exposed
            */
            value: ko.observable(),
            /**
                @parameter array Array of objects to show on the component
                @observable @exposed
            */
            options: ko.observableArray(),
            /**
                @parameter string Name of the object property to show as text. It can be a function
                that receives the item and returns the text to show.
                @observable @exposed
            */
            optionsText: ko.observable(),
            /**
                @parameter string Name of the object property to set as selected value. It can be a function
                that receives the item and returns the selected value.
                @observable @exposed
            */
            optionsValue: ko.observable(),
            /**
                @parameter callback Called when the select finished opening
            */
            onOpen: function() { },
            /**
                @parameter callback Called when the select is opening. It can return false to cancel
                opening of the element.
            */
            onOpening: function() { return true; },
            /**
                @parameter callback Called when the select finished closing
            */
            onClose: function() { },
            /**
                @parameter callback Called when the select is closing. It can return false to cancel
                closing of the element.
            */
            onClosing: function() { return true; },
            /**
                @parameter callback Called when the user selects an item
            */
            onSelect: function() { },
            /**
                @parameter callback Called when the user unselects an item
            */
            onUnselect: function() { },
            /**
                @parameter callback Called when the user is selecting an item. It can return false to cancel
                the event.
            */
            onSelecting: function() {  return true; },
            /**
                @parameter callback Called when the user is unselecting an item. It can return false to cancel
                the event.
            */
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
