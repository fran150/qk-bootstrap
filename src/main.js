define([
    'module',
    'knockout',
    'jquery',
    'quark',    
    'json!./main.json',
    'adminLTE/js/app.min',
    'loadCss!adminLTE/css/AdminLTE.min',    
], function(mod, ko, $, $$, config) {

    return $$.module(mod, config);
});
