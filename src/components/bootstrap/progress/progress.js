define(['knockout', 'quark', 'text!./progress.html'], function(ko, $$, templateMarkup) {

    function Progress(params) {
        var self = this;

        this.percent;
        this.indicator;
        this.color;
        this.striped;
        this.animated;

        $$.parameters({
            percent: ko.observable(10),
            indicator: ko.observable(false),
            color: ko.observable('default'),
            striped: ko.observable(false),
            animated: ko.observable(false)
        }, params, this);

        this._css_ = ko.pureComputed(function() {
            return 'progress-bar progress-bar-' + self.color() + (self.striped() ? ' progress-bar-striped' : '') + (self.animated() ? ' active' : '');
        }, this);
    }

  // Esto corre cuando el componente se destruye. Pon aqui cualquier logica necesaria
  // para limpiar. Por ejemplo cancelar setTimeouts o llamar a dispose de cualquier
  Progress.prototype.dispose = function() { };

  return { viewModel: Progress, template: templateMarkup };

});
