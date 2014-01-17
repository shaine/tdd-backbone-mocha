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
        expect(this.user.getFullName).to.be.a('function');
    });

    test('calling getFullName should return full name', function() {
        expect(this.user.getFullName()).to.equal('Jimmy Wilson');
    });

});
