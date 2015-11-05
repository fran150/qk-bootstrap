define(['knockout', 'quark', 'text!./alert.html'], function(ko, $$, template) {

    return $$.component(function(params, $scope) {
        var self = this;

        $$.parameters({
            type: ko.observable('danger'),
            visible: ko.observable(true),
            hideable: ko.observable(false)
        }, params, this);

        $scope.style = ko.pureComputed(function() {
            return 'alert alert-' + self.type();
        }, this);

        this.show = function() {
            self.visible(true);
        }

        this.hide = function() {
            self.visible(false);
        }

        this.toggle = function() {
            self.visible(!self.visible());
        }
    }, template);
});
