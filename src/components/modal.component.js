/**
    @component Shows a bootstrap modal popup
*/
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
            /**
                @parameter string Modal size. (sm, md, lg)
                @observable @exposed
            */
            size: ko.observable('md'),
            /**
                @parameter string Bootstrap's style to use in the modal.
                @observable @exposed
            */
            style: ko.observable('default'),
            /**
                @parameter bool Show a backdrop along with the modal window.
                @observable @exposed
            */
            backdrop: ko.observable(true),
            /**
                @parameter bool Allow the use of the ESC key to close the modal.
                @observable @exposed
            */
            keyboard: ko.observable(true),
            /**
                @parameter bool Show the close button, allowing the user to manually close the window.
                @observable @exposed
            */
            showCloseButton: ko.observable(true),
            /**
                @parameter callback Called when the modal is being shown (animation running)
                @observable @exposed
            */
            onShow: function(e) {},
            /**
                @parameter callback Called when the modal is finished opening (animation ready)
                @observable @exposed
            */
            onShown: function(e) {},
            /**
                @parameter callback Called when the modal is being hid (animation running)
                @observable @exposed
            */
            onHide: function(e) {},
            /**
                @parameter callback Called when the modal is finished hiding (animation ready)
                @observable @exposed
            */
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

        /**
            @method Shows the modal
        */
        this.show = function() {
            $(element).modal('show');
        }

        /**
            @method Hides the modal
        */
        this.hide = function() {
            $(element).modal('hide');
        }

        /**
            @method Toggle modal visible not visible
        */
        this.toggle = function() {
            $(element).modal('toggle');
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
        $scope.dispose = function() {
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
