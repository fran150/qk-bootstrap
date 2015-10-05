define(['knockout', 'quark', 'text!./alert.html'], function(ko, $$, template) {
  return $$.component(function(params, $scope) {
    var self = this;

    $$.parameters({
        color: ko.observable('info'),
        visible: ko.observable(true),
        dismissible: false
    }, params, [this, $scope]);

    $scope._css_ = ko.pureComputed(function() {
        return 'alert alert-' + self.color() + (self.dismissible ? ' alert-dismissible' : '');
    }, this);

    $scope.show = function() {
        self.visible(true);
    }

    $scope.hide = function() {
        self.visible(false);
    }

    $scope.toggle = function() {
        self.visible(!self.visible());
    }
  }, template);
});
