define(['quark', 'knockout', 'quark-testing-helper'], function($$, ko, Helper) {
    var helper = new Helper({});

    describe('bt-select2 Tests', function() {
        beforeAll(function(done) {
            helper.load('select2', done);
        })

        afterAll(function() {
            helper.reset();
        });
    });
});
