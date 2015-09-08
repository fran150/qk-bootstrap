define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections', 'blockUI'], function($, ko, router) {
    ko.components.register('nav-bar', { require: 'components/pages/nav-bar/nav-bar' });
    ko.components.register('home-page', { require: 'components/pages/home-page/home' });

    ko.components.register('quark-component', {
        template: { require: 'text!bower_modules/quark/dist/quark-component.html' }
    });

    // bower:components
    // endbower

    ko.components.register('modal-page', { require: 'components/areas/modal-page/modal-page' });
    ko.components.register('panel-page', { require: 'components/areas/panel-page/panel-page' });

    // [Scaffolded areas will be inserted here. To retain this feature, don't remove this comment.]

    ko.components.register('bt-alert', { require: 'components/bootstrap/alert/alert' });
    ko.components.register('bt-modal', { require: 'components/bootstrap/modal/modal' });
    ko.components.register('bt-panel', { require: 'components/bootstrap/panel/panel' });

    // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

    // Start the application
    ko.applyBindings({ route: router.currentRoute });
});
