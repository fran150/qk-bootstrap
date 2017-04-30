/**
    @component Shows a Bootstrap alert component.
*/
define([
    'quark',
    'knockout',
    'text!./alert.component.html'
], function($$, ko, template) {

    function AlertComponent(params, $scope, $imports) {
        var self = this;

        var styles = {
            default: 'alert-default',
            primary: 'alert-primary',
            success: 'alert-success',
            warning: 'alert-warning',
            danger: 'alert-danger',
            info: 'alert-info'
        }

        $$.parameters({
            /**
                @parameter string Bootstrap style ('info', 'primary', 'danger' ...) of the component
                @observable @exposed
            */
            style: ko.observable('danger'),
            /**
                @parameter bool Returns if the component is visible. If the hideable option is used
                when click on the hide icon this property changes to false.
                @observable @exposed
            */
            visible: ko.observable(true),
            /**
                @parameter bool If true the component shows an X icon allowing the user to hide the alert.
            */
            hideable: ko.observable(false)
        }, params, this);

        $scope.style = ko.pureComputed(function() {
            var style = self.style();
            if (styles[style]) {
                return styles[style];
            } else {
                return styles['default'];
            }
        }, this);

        /**
            @method Shows the alert component
        */
        this.show = function() {
            self.visible(true);
        }

        /**
            @method Hides the alert component
        */
        this.hide = function() {
            self.visible(false);
        }

        /**
            @method Toggles the visible state of the component.
        */
        this.toggle = function() {
            self.visible(!self.visible());
        }
    }

    return $$.component(AlertComponent, template);
});
