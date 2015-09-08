define(['knockout', 'quark', 'text!./panel-page.html'], function(ko, $$, templateMarkup) {

    function PanelPage(params) {
      var self = this;

      this.context;

      $$.components({
        context: ko.observable()
      }, this);
    }

    Panel.prototype.dispose = function() { };

    return { viewModel: Panel, template: templateMarkup };

});
