/**
    @component Shows a Bootstrap progress bar component.
*/
define([
    'quark',
    'knockout',
    '../lib/colors',
    'text!./progress.component.html'
], function($$, ko, colors, template) {

    function ProgressComponent(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            /**
                @parameter int Number 0 to 100 indicating the progress status
                @observable @exposed
            */
            progress: ko.observable(),
            /**
                @parameter string Label to show inside the bar
                @observable @exposed
            */
            label: ko.observable(),
            /**
                @parameter string AdminLTE2 color of the progress bar or bootstrap style
                @observable @exposed
            */
            color: ko.observable(),
            /**
                @parameter string A bootstrap size and xxs for extra small height
                @observable @exposed
            */            
            size: ko.observable(),
            /**
                @parameter bool Shows stripes on the bar
                @observable @exposed
            */
            striped: ko.observable(true),
            /**
                @parameter bool If the bar is striped animate the stripes
                @observable @exposed
            */
            active: ko.observable(true)
        }, params, this);

        $scope.width = ko.pureComputed(function() {
            var valor = self.progress();
            valor = valor < 0 ? 0 : valor;
            valor = valor > 100 ? 100 : valor;

            return valor + '%';
        });
        
        var sizes = {
            "xxs": "xxs",
            "xs": "xs",
            "sm": "sm",
            "md": "md",
            "lg": "lg"
        }
        
        $scope.containerClass = ko.pureComputed(function() {
            if (sizes[self.size()]) {
                return "progress-" + sizes[self.size()];
            }
        });

        $scope.barClass = ko.pureComputed(function() {
            var style = '';
            
            if (colors[self.color()]) {
                style += 'progress-bar-' + colors[self.color()];
            } else {
                style += 'progress-bar-' + colors["primary"];
            }
            
            if (self.striped()) {
                style += ' progress-bar-striped';
            }

            if (self.active()) {
                style += ' active';
            }

            return style;
        });
    }

    return $$.component(ProgressComponent, template);
});
