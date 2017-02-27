define(['quark', 'knockout', 'quark-testing-helper'], function($$, ko, Helper) {
    var helper = new Helper({});

    describe('bt-datepicker Tests', function() {
        beforeAll(function(done) {
            helper.load('datepicker', done);
        })

        afterAll(function() {
            helper.reset();
        });
    });
});
