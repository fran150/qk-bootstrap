define(['knockout', 'quark', 'text!./alert-page.html'], function(ko, $$, templateMarkup) {

  function AlertPage(params) {
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

  AlertPage.prototype.dispose = function() { };

  return { viewModel: AlertPage, template: templateMarkup };
});
