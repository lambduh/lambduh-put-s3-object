var expect = require('chai').expect;

var put = require('../');

describe('putS3Object', function() {
  it('should exist', function() {
    expect(put).to.exist;
  });

  it('should return a function', function() {
    expect(put()).to.be.a('function');
  })

  it('should return a function that returns a promise', function() {
    expect(put()().then).to.exist;
  });
});
