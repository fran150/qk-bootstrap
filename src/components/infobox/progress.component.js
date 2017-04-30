/**
    @component Show's an <a href="https://almsaeedstudio.com/themes/AdminLTE/pages/widgets.html">AdminLTE's
    Infobox With Progress baB</a>. It can be used, for example, to show progress of some kind in a dashboard
*/
define([
    'quark',
    'knockout',
    '../../lib/colors',
    'text!./progress.component.html'
], function($$, ko, colors, template) {

    function InfoboxProgressComponent(params, $scope, $imports) {
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
                @parameter int Percent of the progress bar full (0 - 100)
                @observable @exposed
            */
            progress: ko.observable(50),
            /**
                @parameter string Description explaining the percentage shown on the progress bar.
                @observable @exposed
            */
            progressDescription: ko.observable('50 % More than last month'),
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

        $scope.infoBoxClass = ko.pureComputed(function() {
            var color = self.color();

            if (colors[color]) {
                return colors[color];
            } else {
                return colors['blue'];
            }
        });

        $scope.progressStyle = ko.pureComputed(function() {
            var progress = self.progress();

            if (!$$.isInt(progress)) {
                progress = 0;
            }

            if (progress < 0) {
                progress = 0;
            }

            if (progress > 100) {
                progress = 100;
            }

            return { width: progress + "%" };
        });
    }

    return $$.component(InfoboxProgressComponent, template);
});
