const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizzBuzz` function in fizzBuzzer.js
describe('fizzBuzzer', function() {

  // test the normal case
  it('should replace a number divisible by 3 with fizz', function() {

    [3, 6, 999, 65259].forEach(function(input) {
        fizzBuzzer(input).should.equal('fizz');
    });
  });

  it('should replace a number divisible by 5 with buzz', function() {

    [5, 100, 11510, 85250].forEach(function(input) {
        fizzBuzzer(input).should.equal('buzz');
    });
  });

  it('should replace a number divisible by 15 with fizz-buzz', function() {

    [15, 105, 14505, 66255].forEach(function(input) {
        fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

  it('should return a number if not divisible by 3, 5, 15', function() {

    [13, 107, 12334, 56269].forEach(function(input) {
        fizzBuzzer(input).should.equal(input);
    });
  });

  it('should raise error if args not numbers', function() {
    const badInputs = ['three', false, {a: '3', b: '15'}, null, undefined];
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input)
      }).should.throw(Error);
    });
  });

});
