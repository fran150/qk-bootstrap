define(['knockout', 'quark', 'text!./modal.html'], function(ko, $$, templateMarkup) {

    function Modal(params) {
        var self = this;

        var element;

        this.getElement = function(elem) {
            element = elem;
        }

        this.show = function() {
            $(element).modal('show');
        }

        this.hide = function() {
            $(element).modal('hide');
        }

        this.toggle = function() {
            $(element).modal('toggle')
            alert('pepe')
            alert('chau')
        }
    }

    Modal.prototype.dispose = function() {
    };

    return { viewModel: Modal, template: templateMarkup };
});
