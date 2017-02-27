define(['quark', 'knockout', 'quark-testing-helper'], function($$, ko, Helper) {
    var helper = new Helper({});

    describe('bt-box Tests', function() {
        beforeAll(function(done) {
            helper.load('box', done);
        })

        afterAll(function() {
            helper.reset();
        });
    });
});
