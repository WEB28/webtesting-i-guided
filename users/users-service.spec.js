const { validate } = require('./users-service.js');

describe('user-service.js', function() {
    describe('.validate()', function() {
        it.todo('should return false is the user is missing a username or password', function(){
            expect(validate({})).toBe(false);


        });
        it("should return true when the user has a username and password", function() {
            expect(validate({ username: 'sam', password: 'pass'})).toBe(true);
        })
        it.todo('a user should have an `isAdmin` property that should be true or false');
        it.todo('the username should be at least 2 characters long');
    })
})