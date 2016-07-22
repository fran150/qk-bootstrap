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
            "progress": "components/progress/progress",
            "tabs": "components/tabs/tabs"
        }
    });
});
