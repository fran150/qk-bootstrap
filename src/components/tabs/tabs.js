define(['knockout', 'quark', 'text!./tabs.html'], function(ko, $$, template) {
    return $$.component(function(params, $scope) {
        var self = this;

        $$.parameters({
            selectedId: ko.observable()
        }, params, this);

        this.tabs = ko.observableArray();

        $scope.init = function(element, model, context) {
            var nodes = context.$componentTemplateNodes;
            var first = true;

            $(nodes).filter('tab').each(function(index, item) {
                var id = $(item).attr('data-id');
                var name = $(item).attr('data-name');

                if (!self.selectedId() && first) {
                    self.selectedId(id);
                }

                first = false;

                self.tabs.push({ id: id, name: name });
            });
        }

        this.select = function(tab) {
            self.selectedId(tab.id);
        }
    }, template);
});
