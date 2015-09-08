define(['knockout', 'quark', 'text!./alert.html'], function(ko, $$, templateMarkup) {

    function Alert(params) {
        var self = this;

        this.color;
        this.visible;
        this.dismissible;

        $$.parameters({
            color: ko.observable('info'),
            visible: ko.observable(true),
            dismissible: ko.observable(false)
        }, params, this);

        this._css_ = ko.pureComputed(function() {
            return 'alert alert-' + self.color() + (self.dismissible() ? ' alert-dismissible' : '');
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
    }

  // Esto corre cuando el componente se destruye. Pon aqui cualquier logica necesaria
  // para limpiar. Por ejemplo cancelar setTimeouts o llamar a dispose de cualquier
  Alert.prototype.dispose = function() { };

  return { viewModel: Alert, template: templateMarkup };

});
