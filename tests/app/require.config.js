var require;

require = requireConfigure(QuarkRequireConf('bower_modules', true), {
    baseUrl: '..',
    paths: {
        'testing-views': 'tests/views',
        'json': 'bower_modules/requirejs-plugins/src/json',
        'bootstrap/js': 'bower_modules/bootstrap/dist/js/bootstrap.min',
        'bootstrap/css': 'bower_modules/bootstrap/dist/css/bootstrap.min',
        'bootstrap-switch/js': 'bower_modules/bootstrap-switch/dist/js/bootstrap-switch.min',
        'bootstrap-switch/bt3/css': 'bower_modules/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min',
        'adminLTE': 'bower_modules/AdminLTE/dist',
        'adminLTE-plugins': 'bower_modules/AdminLTE/plugins',
        'moment': 'bower_modules/AdminLTE/plugins/daterangepicker/moment.min',
        'qk-bootstrap': './src'
    },
    shim: {
        "bootstrap/js": {
            "deps": ['jquery']
        },
        "adminLTE": {
            "deps": ['bootstrap/js']
        },
        "bootstrap-switch/js": {
            "deps": ['bootstrap/js']
        },
        "adminLTE-plugins/datepicker/locales/bootstrap-datepicker.es": {
            "deps": [
                'adminLTE-plugins/datepicker/bootstrap-datepicker'
            ]
        },
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
