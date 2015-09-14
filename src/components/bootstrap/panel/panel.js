define(['knockout', 'quark', 'text!./panel.html'], function(ko, $$, templateMarkup) {

  function Panel(params) {
    var self = this;

    this.encabezado;
    this.cuerpo;
    this.pie;

    this.color;
    this.expansible;
    this.expanded;

    $$.parameters({
        color: ko.observable('default'),
        expansible: ko.observable(false),
        expanded: ko.observable(true)
    }, params, this);

    this._css_ = ko.pureComputed(function() {
        return 'panel panel-' + self.color();
    }, this);

    this._expand_css_ = ko.pureComputed(function() {
        return 'glyphicon ' + ( self.expanded() ? 'glyphicon-menu-up' : 'glyphicon-menu-down' );
    }, this);

    this.expand_toggle = function() {
      self.expanded(!self.expanded());
    };

  }

  Panel.prototype.dispose = function() {
  };

  return { viewModel: Panel, template: templateMarkup };
});
