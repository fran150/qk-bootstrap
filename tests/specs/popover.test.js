define(['quark', 'knockout', 'quark-testing-helper'], function($$, ko, Helper) {
    var helper = new Helper({});

    describe('bt-popover Tests', function() {
        beforeAll(function(done) {
            helper.load('popover', done);
        })

        afterAll(function() {
            helper.reset();
        });
    });
});
