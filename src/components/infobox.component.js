/**
    @component Show's an <a href="https://almsaeedstudio.com/themes/AdminLTE/pages/widgets.html">AdminLTE's
    Infobox</a>. It can be used, for example, to show quantities in a dashboard
*/
define([
    'quark',
    'knockout',
    '../lib/colors',
    'text!./infobox.component.html'
], function($$, ko, colors, template) {

    function InfoboxComponent(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            /**
                @parameter string Infobox Title.
                @observable @exposed
            */
            title: ko.observable('Some Info'),
            /**
                @parameter string Text to show inside the infobox
                @observable @exposed
            */
            text: ko.observable('6000'),
            /**
                @parameter string Fonticon class to show in the infobox.
                @observable @exposed
            */
            fontIcon: ko.observable('fa fa-envelope-o'),
            /**
                @parameter string Color class of the infobox background
            */
            color: ko.observable('blue')
        }, params, this);

        $scope.boxIconClass = ko.pureComputed(function() {
            var color = self.color();

            if (colors[color]) {
                return colors[color];
            } else {
                return colors['blue'];
            }
        });
    }

    return $$.component(InfoboxComponent, template);
});
