define(['knockout', 'quark', 'text!./progress.html'], function(ko, $$, template) {
    return $$.component(function(params, $scope) {
        var self = this;

        $$.parameters({
            progress: ko.observable(),
            label: ko.observable(),
            type: ko.observable(),
            striped: ko.observable(true),
            active: ko.observable(true)
        }, params, this);

        $scope._progress = ko.pureComputed(function() {
            var valor = self.progress();
            valor = valor < 0 ? 0 : valor;
            valor = valor > 100 ? 100 : valor;

            return valor + '%';
        }, this);

        $scope._style = ko.pureComputed(function() {
            var style = '';

            style += 'progress-bar-' + self.type();

            if (self.striped()) {
                style += ' progress-bar-striped';
            }

            if (self.active()) {
                style += ' active';
            }

            return style;

        }, this);

     }, template);
});
