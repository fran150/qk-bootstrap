define(['knockout', 'quark', 'text!./progress-page.html'], function(ko, $$, templateMarkup) {

    function ProgressPage(params) {
      var self = this;

      this.avance;
      this.rayas;
      this.animado;
      this.default;

      $$.components({
        avance: ko.observable(20),
        rayas: ko.observable(false),
        animado: ko.observable(false),
        contexto: ko.observable('default')
      }, this);
    }

    ProgressPage.prototype.dispose = function() { };

    return { viewModel: ProgressPage, template: templateMarkup };

});
