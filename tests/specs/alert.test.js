define(['quark', 'knockout', 'quark-testing-helper'], function($$, ko, Helper) {
    var helper = new Helper({});

    describe('bt-alert Tests', function() {
        beforeAll(function(done) {
            helper.load('alert', done);
        })

        afterAll(function() {
            helper.reset();
        });

    });
});
