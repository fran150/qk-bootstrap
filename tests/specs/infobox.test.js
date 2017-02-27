define(['quark', 'knockout', 'quark-testing-helper'], function($$, ko, Helper) {
    var helper = new Helper({});

    describe('bt-infobox Tests', function() {
        beforeAll(function(done) {
            helper.load('infobox', done);
        })

        afterAll(function() {
            helper.reset();
        });
    });
});
