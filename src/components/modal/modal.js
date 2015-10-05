define(['knockout', 'quark', 'text!./modal.html'], function(ko, $$, template) {
    return $$.component(function(params, $scope) {
        var self = this;

        var element;

        $scope.getElement = function(elem) {
            element = elem;
        }

        this.show = $scope.show = function() {
            $(element).modal('show');
        }

        this.hide = $scope.hide = function() {
            $(element).modal('hide');
        }

        this.toggle = $scope.toggle = function() {
            $(element).modal('toggle')
        }
    }, template);
});
