define(['knockout', 'quark', 'text!./progress-page.html'], function(ko, $$, template) {
  return $$.component(function(params, $scope) {
    var self = this;

    $$.parameters({
      avance: ko.observable(20),
      rayas: ko.observable(false),
      animado: ko.observable(false),
      contexto: ko.observable('default')
    }, params, [this, $scope]);

  }, template);
});
