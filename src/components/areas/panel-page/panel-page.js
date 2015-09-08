define(['knockout', 'quark', 'text!./panel-page.html'], function(ko, $$, templateMarkup) {

    function PanelPage(params) {
      var self = this;

      this.context;

      $$.components({
        context: ko.observable()
      }, this);
    }

    PanelPage.prototype.dispose = function() { };

    return { viewModel: PanelPage, template: templateMarkup };

});
