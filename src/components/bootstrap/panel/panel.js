define(['knockout', 'quark', 'text!./panel.html'], function(ko, $$, templateMarkup) {

  function Panel(params) {
    var self = this;

    this.encabezado;
    this.cuerpo;
    this.pie;

    this.color;

    $$.parameters({
        color: ko.observable('default')
    }, params, this);

    this._style_ = ko.pureComputed(function() {
        return 'panel panel-' + self.color();
    }, this);

  }

  Panel.prototype.dispose = function() {
  };

  return { viewModel: Panel, template: templateMarkup };
});
