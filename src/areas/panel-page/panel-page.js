define(['knockout', 'quark', 'text!./panel-page.html'], function(ko, $$, template) {
  return $$.component(function(params, $scope) {
    var self = this;

    $$.parameters({
      context: ko.observable()
    }, params, [this, $scope]);

  }, template);
});
