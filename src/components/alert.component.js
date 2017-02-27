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
            style: ko.observable('danger'),
            visible: ko.observable(true),
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

        this.show = function() {
            self.visible(true);
        }

        this.hide = function() {
            self.visible(false);
        }

        this.toggle = function() {
            self.visible(!self.visible());
        }
    }

    return $$.component(AlertComponent, template);
});
