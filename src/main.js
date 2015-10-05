define(['module', 'knockout', 'jquery', 'quark'], function(mod, ko, $, $$) {
    debugger;
    $$.module(mod, {
        prefix: 'bt',
        components: {
            "alert": "components/alert/alert",
            "modal": "components/modal/modal",
            "navbar": "components/navbar/navbar",
            "navbar-alert": "components/navbar/controls/alert",
            "navbar-button": "components/navbar/controls/button",
            "navbar-dropdown": "components/navbar/controls/dropdown",
            "navbar-link": "components/navbar/controls/link",
            "tabs": "components/tabs/tabs"
        }
    }, function(moduleName) {
    });
});

