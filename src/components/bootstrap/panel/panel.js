define(['knockout', 'quark', 'text!./panel.html'], function(ko, $$, template) {
  return $$.component(function(params, $scope) {
    var self = this;

    $$.parameters({
        color: ko.observable('default'),
        expansible: ko.observable(false),
        expanded: ko.observable(true)
    }, params, [this, $scope]);

    $scope._css_ = ko.pureComputed(function() {
        return 'panel panel-' + self.color();
    }, this);

    $scope._expand_css_ = ko.pureComputed(function() {
        return 'glyphicon ' + ( self.expanded() ? 'glyphicon-menu-up' : 'glyphicon-menu-down' );
    }, this);

    $scope.expand_toggle = function() {
      self.expanded(!self.expanded());
    };

  }, template);
});
