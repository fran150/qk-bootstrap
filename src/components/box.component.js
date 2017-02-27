define([
    'quark',
    'knockout',
    'jquery',
    'text!./box.component.html'
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
            fontIcon: ko.observable(),
            title: ko.observable('Box'),
            solid: ko.observable(false),
            style: ko.observable('default'),
            expandable: ko.observable(true),
            removable: ko.observable(false)
        }, params, this);
                
        this.isVisible = function() {
            return element.style.display != "none";
        }
        
        this.show = function() {
            $(element).show();
        }
        
        this.hide = function() {
            $(element).hide();
        }
        
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
