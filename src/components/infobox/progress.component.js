define([
    'quark',
    'knockout',
    '../../lib/colors',
    'text!./progress.component.html'
], function($$, ko, colors, template) {

    function InfoboxProgressComponent(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            title: ko.observable('Some Info'),
            text: ko.observable('6000'),
            progress: ko.observable(50),
            progressDescription: ko.observable('50 % More than last month'),
            fontIcon: ko.observable('fa fa-envelope-o'),
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
