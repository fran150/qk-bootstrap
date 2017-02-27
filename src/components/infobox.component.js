define([
    'quark',
    'knockout',
    '../lib/colors',
    'text!./infobox.component.html'
], function($$, ko, colors, template) {

    function InfoboxComponent(params, $scope, $imports) {
        var self = this;                

        $$.parameters({
            title: ko.observable('Some Info'),
            text: ko.observable('6000'),
            fontIcon: ko.observable('fa fa-envelope-o'),
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
