define(['knockout', 'quark', 'text!./link.html'], function(ko, $$, template) {
    return $$.component(function(params, $scope) {
        var self = this;

        $$.parameters({
            routeName: ko.observable(),
        }, params, this);

        $$.parameters({
            text: ko.observable('Link')
        }, params, [this, $scope]);

        $scope.url = ko.pureComputed(function() {
            return $$.routing.link(self.routeName());
        }, $scope);

        $scope.isActive = ko.pureComputed(function() {
            var current = $$.routing.current();

            if (current.route.fullName == self.routeName()) {
                return true;
            }

            return false;
        }, $scope);

    }, template);
});
