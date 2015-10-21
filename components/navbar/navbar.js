define(['knockout', 'quark', 'text!./navbar.html'], function(ko, $$, template) {
    return $$.component(function(params, $scope) {
        var self = this;

        $$.parameters({
            url: ko.observable('#'),
            html: ko.observable('Brand'),
            icon: ko.observable()
        }, params, [this, $scope]);

        $scope.visibleIcon = ko.pureComputed(function() {
            return $$.isString(self.icon());
        }, $scope);

        $scope.iconType = ko.pureComputed(function() {
            if ($$.isString(self.icon())) {
                if (self.icon().substring(0, 4) == 'url:') {
                    return "image";
                } else if (self.icon().substring(0, 5) == 'font:') {
                    return "font";
                }
            }

            return "unknown";
        }, $scope);

        $scope.iconUrl = ko.pureComputed(function() {
            if ($scope.iconType() == "image") {
                return self.icon().substring(4);
            } if ($scope.iconType() == "font") {
                return self.icon().substring(5);
            } else {
                return self.icon();
            }
        }, $scope);
    }, template);
});
