/**
    @component Shows a <a href="http://bootstrapswitch.com/">Bootstrap's Switch</a> component
*/
define([
    'quark',
    'knockout',
    'text!./switch.component.html',
    'loadCss!bootstrap-switch/bt3/css',
    'bootstrap-switch/js'
], function($$, ko, template) {

    function SwitchComponent(params, $scope, $imports) {
        var self = this;

        // Set component parameters
        $$.parameters({
            /**
                @parameter bool True if the switch is on
                @observable @exposed
            */
            value: ko.observable(false),
            /**
                @parameter string Size of the switch (mini, small, normal, large)
                @observable @exposed
            */
            size: ko.observable('mini'),
            /**
                @parameter string Color of the switch when its on
                @observable @exposed
            */
            onColor: ko.observable(),
            /**
                @parameter string Text of the switch when its on
                @observable @exposed
            */
            onText: ko.observable('Si'),
            /**
                @parameter string Color of the switch when its off
                @observable @exposed
            */
            offColor: ko.observable(),
            /**
                @parameter string Text of the switch when its off
                @observable @exposed
            */
            offText: ko.observable('No'),
            /**
                @parameter bool True if the control must be disabled
                @observable @exposed
            */
            disabled: ko.observable(false),
            /**
                @parameter callback Called when the state of the switch changes
                @observable @exposed
            */
            action: function() { }
        }, params, this);

        // Get element
        $scope.getElement = function(element) {
            //Define las opciones para el switch
            var options = {
                state: self.value(),
                disabled: self.disabled(),
                size: self.size(),
                onText: self.onText(),
                offText: self.offText(),
                onColor: self.onColor(),
                offColor: self.offColor(),
                onSwitchChange: function(event, state) {
                    self.value(state);
                    $$.call(self.action, state);
                }
            };

            $(element).bootstrapSwitch(options);
        }
    }

    return $$.component(SwitchComponent, template);
});
