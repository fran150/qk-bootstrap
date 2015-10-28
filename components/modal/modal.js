define(['knockout', 'quark', 'text!./modal.html'], function(ko, $$, template) {
    return $$.component(function(params, $scope) {
        var self = this;

        var element;

        $scope.getElement = function(elem) {
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
        }

        this.dispose = function() {
            // Al cerrar el componente cierra la pagina.
            self.hide();

            // Como el componente muere antes de sacar el backdrop por la animacion limpio
            // el backdrop y el propio modal.
            $('.modal-backdrop').remove();
            $(element).remove();
        }

    }, template);
});
