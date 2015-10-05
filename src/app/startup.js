define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections', 'blockui'], function($, ko, router) {
    ko.components.register('nav-bar', { require: 'components/pages/nav-bar/nav-bar' });
    ko.components.register('home-page', { require: 'components/pages/home-page/home' });

    // bower:components
    // endbower

    ko.components.register('alert-page', { require: 'components/areas/alert-page/alert-page' });
    ko.components.register('modal-page', { require: 'components/areas/modal-page/modal-page' });
    ko.components.register('panel-page', { require: 'components/areas/panel-page/panel-page' });
    ko.components.register('progress-page', { require: 'components/areas/progress-page/progress-page' });

    // [Scaffolded areas will be inserted here. To retain this feature, don't remove this comment.]

    ko.components.register('bt-alert', { require: 'components/bootstrap/alert/alert' });
    ko.components.register('bt-modal', { require: 'components/bootstrap/modal/modal' });
    ko.components.register('bt-panel', { require: 'components/bootstrap/panel/panel' });
    ko.components.register('bt-progress', { require: 'components/bootstrap/progress/progress' });

    // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]

    // Start the application
    ko.applyBindings({ route: router.currentRoute });
});
