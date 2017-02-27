define(['quark', 'knockout', 'quark-testing-helper'], function($$, ko, Helper) {
    var helper = new Helper({});

    describe('bt-modal Tests', function() {
        beforeAll(function(done) {
            helper.load('modal', done);
        })

        afterAll(function() {
            helper.reset();
        });
    });
});
