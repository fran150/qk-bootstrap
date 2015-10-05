define(['knockout', 'quark', 'text!./alert.html'], function(ko, $$, template) {

    return $$.component(function(params, $scope) {
        var self = this;

        $$.parameters({
            type: ko.observable('danger'),
            visible: ko.observable(true),
        }, params, [this, $scope]);

        $scope._style = ko.pureComputed(function() {
            return 'alert alert-' + self.type();
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
