define(['quark', 'jquery', 'jasmine-boot', 'bootstrap/js'], function($$, $, jazmine) {

    // Reference your test modules here
    require(['qk-bootstrap/main', 'json!./tests/app/config/specs.config.json'], function(main, testModules) {

        // After the 'jasmine-boot' module creates the Jasmine environment, load all t
        var modulesCorrectedPaths = testModules.map(function(m) { return 'tests/specs/' + m; });

        require(modulesCorrectedPaths, function() {
            window.onload();
        });

        $$.start();
    });
});
