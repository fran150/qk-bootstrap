define(['knockout', 'quark', 'text!./modal-page.html'], function(ko, $$, template) {
  return $$.component(function(params, $scope) {
    var self = this;

myself = self;
myscope = $scope;

    $scope.ready = function() {

    };

    $scope.show_modal = function() {
      this.modal.open();
    };

    $scope.show_dialog = function() {
      this.dialog.open();
    };

  }, template);
});
