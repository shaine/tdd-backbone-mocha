suite('User Model', function() {

    setup(function() {
        this.user = new app.models.User({
            firstName: 'Jimmy',
            lastName: 'Wilson'
        });
    });

    teardown(function() {
        this.user = null;
    });

    test('should exist', function() {
        expect(this.user).to.be.ok; // Tests this.user is truthy
    });

    test('should have a getFullName method()', function() {
        expect(typeof this.user.getFullName).to.equal('function');
    });

    test('calling getFullName should return firstName[space]lastName', function() {
        expect(this.user.getFullName()).to.equal('Jimmy Wilson');
    });

});
