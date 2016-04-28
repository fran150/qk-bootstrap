define(['module', 'knockout', 'jquery', 'quark'], function(mod, ko, $, $$) {
    return $$.module(mod, {
        prefix: 'bt',
        version: '1.0.0',
        css: [
            "css/styles.css"
        ],
        components: {
            "alert": "components/alert/alert",
            "modal": "components/modal/modal",
            "navbar": "components/navbar/navbar",
            "navbar-alert": "components/navbar/controls/alert",
            "navbar-button": "components/navbar/controls/button",
            "navbar-dropdown": "components/navbar/controls/dropdown",
            "navbar-link": "components/navbar/controls/link",
            "progress": "components/progress/progress",
            "tabs": "components/tabs/tabs"
        }
    });
});

