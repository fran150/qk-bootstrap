/**
    @component Shows a popover when the user performs an action on the component's content.
    @allowContent
*/
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
            /**
                @parameter bool Animate the popover on show / hide
            */
            animation: true,
            /**
                @parameter string Popover title
            */
            title: '',
            /**
                @parameter string Popover content
            */
            content: 'Popover component',
            /**
                @parameter int Delay to show the popover
            */
            delay: 0,
            /**
                @parameter bool True if the content parameter is HTML
            */
            html: false,
            /**
                @parameter string Placemenent of the popover in relation to the content
            */
            placement: 'right',
            /**
                @parameter string Event that makes the popover to show
            */
            trigger: 'click'
        }, params, options);

        $scope.getElement = function(elem) {
            element = elem;

            $(element).popover(options);
        }

        $scope.dispose = function() {
            $(element).popover('destroy');
        }
    }

    return $$.component(PopoverComponent, template);
});
