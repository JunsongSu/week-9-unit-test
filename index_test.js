var expect = chai.expect

    describe('MyFunctions', function() {
        describe ('#doSomthing', function() {
            it('should concatenate the two parameters', function() {
                var x = doSomthing('Hello', 5);
                expect(x),to,equal('Hello5');
            });

            it('should throw an error if first parameter is not a string', function() {
                expect(function() {
                    doSomthing(5,5);
                }).to.throw(Error);
            });
        });
    });