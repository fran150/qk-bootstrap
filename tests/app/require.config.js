var require;

require = requireConfigure(QuarkRequireConf('bower_modules', true), {
    baseUrl: '..',
    paths: {
        'qk-bootstrap': './src',
        'testing-views': 'tests/views',
        'json': 'bower_modules/requirejs-plugins/src/json',
        'bootstrap/js': 'bower_modules/bootstrap/dist/js/bootstrap.min',
        'bootstrap/css': 'bower_modules/bootstrap/dist/css/bootstrap.min',
        '$bootstrap-switch': 'bower_modules/bootstrap-switch/dist',
        '$bootstrap-datepicker': 'bower_modules/bootstrap-datepicker/dist',
        '$bootstrap-daterangepicker': 'bower_modules/bootstrap-daterangepicker',
        '$AdminLTE': 'bower_modules/AdminLTE/dist',
        'moment': 'bower_modules/AdminLTE/plugins/daterangepicker/moment.min',
        '$select2': 'bower_modules/select2/dist'
    },
    shim: {
        "bootstrap/js": {
            "deps": ['jquery']
        },
        "$AdminLTE/js/app.min": {
            "deps": ['bootstrap/js']
        },
        "$bootstrap-switch/js/bootstrap-switch.min": {
            "deps": ['bootstrap/js']
        },
        "$bootstrap-datepicker/locales/bootstrap-datepicker.es.min": {
            "deps": [
                "$bootstrap-datepicker/js/bootstrap-datepicker"
            ]
        },
        "loadCss!$AdminLTE/css/AdminLTE.min": {
            "deps": ['loadCss!$select2/css/select2.min']
        }
    }
});

// It's not obvious, but this is a way of making Jasmine load and run in an AMD environment
// Credit: http://stackoverflow.com/a/20851265
var jasminePath = 'bower_modules/jasmine-core/lib/jasmine-core/';
require.paths['jasmine'] = jasminePath + 'jasmine';
require.paths['jasmine-html'] = jasminePath + 'jasmine-html';
require.paths['jasmine-boot'] = jasminePath + 'boot';
require.shim['jasmine'] = { exports: 'window.jasmineRequire' };
require.shim['jasmine-html'] = { deps: ['jasmine'], exports: 'window.jasmineRequire' };
require.shim['jasmine-boot'] = { deps: ['jasmine', 'jasmine-html'], exports: 'window.jasmineRequire' };
