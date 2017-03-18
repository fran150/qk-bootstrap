define([
    'module',
    'knockout',
    'jquery',
    'quark',
    'json!./main.json',
    'bootstrap/js',
    'loadCss!bootstrap/css',
    '$AdminLTE/js/app.min',
    'loadCss!$AdminLTE/css/AdminLTE.min'
], function(mod, ko, $, $$, config) {

    return $$.module(mod, config);
});
