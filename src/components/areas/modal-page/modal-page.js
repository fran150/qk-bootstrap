define(['knockout', 'quark', 'text!./modal-page.html'], function(ko, $$, templateMarkup) {

    function ModalPage(params) {
        var self = this;

        $$.components({
            modal: ko.observable(),
            modal2: ko.observable()
        }, this);

        this.ready = function() {
        }

        this.mostrar1 = function() {
            self.modal().show();
        }

        this.mostrar2 = function() {
            self.modal2().show();
        }
    }

    ModalPage.prototype.dispose = function() { };

    return { viewModel: ModalPage, template: templateMarkup };

});
