define(['quark', 'knockout', 'quark-testing-helper'], function($$, ko, Helper) {
    var helper = new Helper({});

    describe('bt-infobox-progress Tests', function() {
        beforeAll(function(done) {
            helper.load('infobox-progress', done);
        })

        afterAll(function() {
            helper.reset();
        });
    });
});
