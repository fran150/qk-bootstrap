define(['knockout', 'quark', 'text!./modal.html'], function(ko, $$, template) {
    return $$.component(function(params, $scope, $imports) {
        var self = this;

        var sizes = {
            sm: 'modal-sm',
            md: '',
            lg: 'modal-lg'
        }

        var styles = {
            default: '',
            primary: 'modal-header-primary',
            info: 'modal-header-info',
            success: 'modal-header-success',
            warning: 'modal-header-warning',
            danger: 'modal-header-danger'
        }

        var element;

        $$.parameters({
            size: ko.observable('md'),
            style: ko.observable('default'),
            backdrop: ko.observable(true),
            keyboard: ko.observable(true),
            onShow: function(e) {},
            onShown: function(e) {},
            onHide: function(e) {},
            onHidden: function(e) {}
        }, params, this);

        $scope.sizeStyle = ko.pureComputed(function() {
            if (sizes[self.size()]) {
                return sizes[self.size()];
            } else {
                return sizes['md'];
            }
        });

        $scope.headingStyle = ko.pureComputed(function() {
            if (styles[self.style()]) {
                return styles[self.style()];
            } else {
                return styles['default'];
            }
        });

        $scope.getElement = function(elem) {
            element = elem;
        }

        function setOptions() {
            $(element).modal('backdrop', self.backdrop());
            $(element).modal('keyboard', self.keyboard());
        }

        $(element).on('show.bs.modal', function (e) {
            $$.call(self.onShow, e);
        });

        $(element).on('shown.bs.modal', function (e) {
            $$.call(self.onShown, e);
        });

        $(element).on('hide.bs.modal', function (e) {
            $$.call(self.onHide, e);
        });

        $(element).on('hidden.bs.modal', function (e) {
            $$.call(self.onHidden, e);
        });

        this.show = function() {
            $(element).modal('show');
        }

        this.hide = function() {
            $(element).modal('hide');
        }

        this.toggle = function() {
            $(element).modal('toggle')
        }

        $imports.initComponent = function() {
            setOptions();
        }

        var subscriptions = {
            keyboard: self.keyboard.subscribe(setOptions),
            backdrop: self.backdrop.subscribe(setOptions)
        }

        this.dispose = function() {
            // Al cerrar el componente cierra la pagina.
            self.hide();

            $(element).off('show.bs.modal');
            $(element).off('shown.bs.modal');
            $(element).off('hide.bs.modal');
            $(element).off('hidden.bs.modal');

            // Como el componente muere antes de sacar el backdrop por la animacion limpio
            // el backdrop y el propio modal.
            $('.modal-backdrop').remove();
            $(element).remove();
            $('body').removeClass('modal-open');

            subscriptions.keyboard.dispose();
            subscriptions.backdrop.dispose();
        }

    }, template);
});
