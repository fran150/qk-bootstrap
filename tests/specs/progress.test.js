define(['quark', 'knockout', 'quark-testing-helper'], function($$, ko, Helper) {
    var helper = new Helper({});

    describe('bt-progress Tests', function() {
        beforeAll(function(done) {
            helper.load('progress', done);
        })

        afterAll(function() {
            helper.reset();
        });

        it('must contain the correct message', function() {
            var model = helper.models.ProgressComponent;

            expect(model.message).toBe("This is a progress component");
        });
    });
});
