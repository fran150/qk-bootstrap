define(['knockout', 'quark', 'text!./alert.html'], function(ko, $$, template) {
    return $$.component(function(params, $scope) {
        var self = this;

        $$.parameters({
            icon: ko.observable('glyphicon glyphicon-bell'),
            text: ko.observable('Alerts'),
            alerts: ko.observableArray([
                {
                    icon: '',
                    routeName: '',
                    routeOptions: '',
                    text: 'Alert 1'
                },
                {
                    icon: '',
                    routeName: '',
                    routeOptions: '',
                    text: 'Alert 2'
                }
            ])
        }, params, [this, $scope]);

        $scope.url = function(routeName, routeOptions) {
            if (routeName) {
                return $$.routing.link(routeName, routeOptions);
            }
        };

        $scope.isActive = function(routeName) {
            var current = $$.routing.current().route.fullName;

            if (current == routeName) {
                return true;
            }

            return false;
        }
    }, template);
});
