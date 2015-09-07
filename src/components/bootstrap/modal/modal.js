define(['knockout', 'quark', 'text!./modal.html'], function(ko, $$, templateMarkup) {

  function Modal(params) {
    var self = this;

    $$.parameters({
      dialog: ko.observable(false)
    }, params, this);

    this.dom;
    this.dialog;

    this.encabezado;
    this.cuerpo;
    this.pie;

    this.getElement = function(elem) {
      self.dom = elem;
    };

    this.open = function() {
      $(self.dom).modal({
        backdrop: !self.dialog(),
        keyboard: !self.dialog()
      });

      //$(self.model).modal('show');
    };

    this.close = function() {
      $(self.dom).modal('hide');
    };
  }

  Modal.prototype.dispose = function() {
  };

  return { viewModel: Modal, template: templateMarkup };
});
