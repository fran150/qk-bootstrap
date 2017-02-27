define(['quark', 'knockout', 'quark-testing-helper'], function($$, ko, Helper) {
    var helper = new Helper({});

    describe('bt-daterangepicker Tests', function() {
        beforeAll(function(done) {
            helper.load('daterangepicker', done);
        })

        afterAll(function() {
            helper.reset();
        });
    });
});
