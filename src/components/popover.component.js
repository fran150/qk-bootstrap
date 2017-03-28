define([
    'quark',
    'knockout',
    'jquery',
    'text!./popover.component.html'
], function($$, ko, $, template) {

    function PopoverComponent(params, $scope, $imports) {
        var self = this;

        var element;
        var options = {};

        $$.parameters({
            animation: true,
            title: '',
            content: 'Popover component',
            delay: 0,
            html: false,
            placement: 'right',
            trigger: 'click'
        }, params, options);

        $scope.getElement = function(elem) {
            element = elem;

            $(element).popover(options);
        }

        $scope.show = function() {
            $(element).popover('show');
        }

        $scope.hide = function() {
            $(element).popover('hide');
        }

        $scope.dispose = function() {
            $(element).popover('destroy');
        }
    }

    return $$.component(PopoverComponent, template);
});
