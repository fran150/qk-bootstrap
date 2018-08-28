/**
    @component Shows an <a href="https://almsaeedstudio.com/themes/AdminLTE/pages/widgets.html">AdminLTE box</a>
    around the content.
    @allowContent
*/
define([
    'quark',
    'knockout',
    'jquery',
    'text!./box.component.html',
    'adminLTE/js'
], function($$, ko, $, template) {

    function BoxComponent(params, $scope, $imports) {
        var self = this;

        var element;

        var styles = {
            default: 'box-default',
            primary: 'box-primary',
            success: 'box-success',
            warning: 'box-warning',
            danger: 'box-danger',
            info: 'box-info'
        }

        $$.parameters({
            /**
                @parameter string Font icon class to show on the box title
                @observable @exposed
            */
            fontIcon: ko.observable(),
            /**
                @parameter string Title of the box
                @observable @exposed
            */
            title: ko.observable('Box'),
            /**
                @parameter bool If true all the title bar is shown in the color corresponding
                to the selected style. If false, only a line is shown with the style color.
                @observable @exposed
            */
            solid: ko.observable(false),
            /**
                @parameter string Bootstrap's style of the box.
                @observable @exposed
            */
            style: ko.observable('default'),
            /**
                @parameter bool True if the box is expandable. An expandable box shows an icon
                that allows the user to minimize the box leaving only the title bar visible
                @observable @exposed
            */
            expandable: ko.observable(true),
            /**
                @parameter bool True if the box is removable. A removable box show a cross incon
                that allows the user to remove the box as if it were closing a window.
                @observable @exposed
            */
            removable: ko.observable(false),
            /**
                @parameter bool If true will show the box without the header
                @observable @exposed
            */
            noheader: ko.observable(false)
        }, params, this);

        /**
            @method Returns if the box is visible or hidden.
            @returns bool True if the box is visible, false otherwise
        */
        this.isVisible = function() {
            return element.style.display != "none";
        }
        /**
            @method Show the box if hidden
            @signature show()
        */
        this.show = function() {
            $(element).show();
        }
        /**
            @method Hide the box
            @signature hide()
        */
        this.hide = function() {
            $(element).hide();
        }
        /**
            @method Check if the component is expanded
            @signature isExpanded()
            @returns true if the component is expanded, false if its collapsed
        */
        this.isExpanded = function() {
            return !$(element).hasClass('collapsed-box');
        }

        $scope.boxClass = ko.pureComputed(function() {
            var cls = '';

            var style = self.style();

            if (styles[style]) {
                cls += styles[style];
            } else {
                cls += styles['default'];
            }

            if (self.solid()) {
                if (cls != '') {
                    cls += ' ';
                }

                cls += 'box-solid';
            }

            return cls;
        });

        $scope.getElement = function(elem) {
            element = elem;
        }
    }

    return $$.component(BoxComponent, template);
});
