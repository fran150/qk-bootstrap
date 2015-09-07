define(['knockout', 'quark', 'text!./modal-page.html'], function(ko, $$, templateMarkup) {

  function ModalPage(params) {
    var self = this;

    $$.components({
      modal: ko.observable(),
      dialog: ko.observable()
    }, this);

    this.ready = function() {

    };

    this.show_modal = function() {
      self.modal().open();
    };

    this.show_dialog = function() {
      self.dialog().open();
    };
  }

  ModalPage.prototype.dispose = function() { };

  return { viewModel: ModalPage, template: templateMarkup };
});
