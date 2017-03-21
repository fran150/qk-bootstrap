define([
    'module',
    'knockout',
    'jquery',
    'quark',
    'json!./main.json',
    'bootstrap/js',
    'loadCss!bootstrap/css',
    'adminLTE/js',
    'loadCss!adminLTE/css'
], function(mod, ko, $, $$, config) {

    return $$.module(mod, config);
});
