define(['knockout', 'quark', 'text!./modal.html'], function(ko, $$, template) {
  return $$.component(function(params, $scope) {
    var self = this;

    $$.parameters({
      dialog: false
    }, params, [this, $scope]);

    $scope.getElement = function(elem) {
      self.dom = elem;
    };

    this.open = function() {
      $(self.dom).modal({
        backdrop: !self.dialog,
        keyboard: !self.dialog
      });

      //$(self.model).modal('show');
    };

    this.close = function() {
      $(self.dom).modal('hide');
    };

  }, template);
});
