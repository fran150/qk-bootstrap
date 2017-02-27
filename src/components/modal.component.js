define([
    'quark',
    'knockout',
    'text!./modal.component.html'
], function($$, ko, template) {

    function ModalComponent(params, $scope, $imports) {
        var self = this;

        // Allowed modal sizes
        var sizes = {
            sm: 'modal-sm',
            md: '',
            lg: 'modal-lg'
        }

        // Modal Styles from AdminLTE 2
        var styles = {
            default: '',
            grey: 'modal-grey',
            primary: 'modal-primary',
            info: 'modal-info',
            success: 'modal-success',
            warning: 'modal-warning',
            danger: 'modal-danger'
        }

        // Modal's DOM element
        var element;

        // Allowed parameters
        $$.parameters({
            size: ko.observable('md'),
            style: ko.observable('default'),
            backdrop: ko.observable(true),
            keyboard: ko.observable(true),
            showCloseButton: ko.observable(true),
            onShow: function(e) {},
            onShown: function(e) {},
            onHide: function(e) {},
            onHidden: function(e) {}
        }, params, this);

        // Calculate the modal class given the size and style
        $scope.modalClass = ko.pureComputed(function() {                        
            var style = self.style();
            
            if (styles[style]) {
                return styles[style];
            } else {
                return styles['default'];
            }
        });
        
        $scope.modalDialogClass = ko.pureComputed(function() {
            var size = self.size();
            
            if (sizes[size]) {
                return sizes[size];
            } else {
                return sizes['md'];
            }            
        })

        // Get the modal's DOM element
        $scope.getElement = function(elem) {
            element = elem;
        }

        // Updates the modal options on the jquery object
        function setOptions() {
            $(element).modal('backdrop', self.backdrop());
            $(element).modal('keyboard', self.keyboard());
        }

        // Capture JQuery events and trigger callbacks
        
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

        // Shows the modal
        this.show = function() {
            $(element).modal('show');
        }

        // Hides the modal
        this.hide = function() {
            $(element).modal('hide');
        }

        // Toggle modal visible / not visible
        this.toggle = function() {
            $(element).modal('toggle')
        }

        // On init set the modal's options
        $scope.initComponent = function() {
            setOptions();
        }

        // Subscribe for keyboard and backdrop changes
        var subscriptions = {
            keyboard: self.keyboard.subscribe(setOptions),
            backdrop: self.backdrop.subscribe(setOptions)
        }

        // On dispose
        this.dispose = function() {
            // When component is disposed hide the modal
            self.hide();

            // Kill all the event listeners
            $(element).off('show.bs.modal');
            $(element).off('shown.bs.modal');
            $(element).off('hide.bs.modal');
            $(element).off('hidden.bs.modal');

            // Component is eliminated before backdrop deletion from body object
            // so it must be removed by code
            $('.modal-backdrop').remove();
            $(element).remove();
            $('body').removeClass('modal-open');

            // Kill the subscriptions
            subscriptions.keyboard.dispose();
            subscriptions.backdrop.dispose();
        }    
    }

    return $$.component(ModalComponent, template);
});
