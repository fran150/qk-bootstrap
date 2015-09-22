define(['knockout', 'quark', 'text!./progress.html'], function(ko, $$, template) {
  return $$.component(function(params, $scope) {
    var self = this;

    $$.parameters({
        percent: ko.observable(10),
        indicator: ko.observable(false),
        color: ko.observable('default'),
        striped: ko.observable(false),
        animated: ko.observable(false)
    }, params, [this, $scope]);

    $scope._css_ = ko.pureComputed(function() {
        return 'progress-bar progress-bar-' + this.color() + (this.striped() ? ' progress-bar-striped' : '') + (this.animated() ? ' active' : '');
    }, $scope);

  }, template);
});
