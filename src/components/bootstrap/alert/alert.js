define(['knockout', 'quark', 'text!./alert.html'], function(ko, $$, templateMarkup) {

    function Alert(params) {
        var self = this;

        $$.parameters({
            type: ko.observable('success'),
            visible: ko.observable(true),
        }, params, this);

        this._style = ko.pureComputed(function() {
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
    }

  // Esto corre cuando el componente se destruye. Pon aqui cualquier logica necesaria
  // para limpiar. Por ejemplo cancelar setTimeouts o llamar a dispose de cualquier
  Alert.prototype.dispose = function() { };

  return { viewModel: Alert, template: templateMarkup };

});
