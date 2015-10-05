// Configuración de Require.js
var require = {
    baseUrl: ".",
    paths: {
        // bower:modules
        "bootstrap":            "bower_modules/bootstrap/dist/js/bootstrap.min",
        "crossroads":           "bower_modules/crossroads/dist/crossroads.min",
        "hasher":               "bower_modules/hasher/dist/js/hasher.min",
        "jquery":               "bower_modules/jquery/dist/jquery",
        "knockout":             "bower_modules/knockout/dist/knockout",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
        "signals":              "bower_modules/js-signals/dist/signals.min",
        "text":                 "bower_modules/requirejs-text/text",

        "accounting-js":        "bower_modules/accounting.js/accounting",
        "blockui":              "bower_modules/blockui/jquery.blockUI",
        "knockout-mapping":     "bower_modules/knockout-mapping/knockout.mapping",

        "quark":                "bower_modules/quark/dist/quark"
        // endbower
    },
    shim: {
        // bower:shim
        "bootstrap": { deps: ["jquery"] },
        "knockout-mapping": { deps: ["knockout"] },
        "quark": { deps: ["knockout"] }
        // endbower
    }
};
