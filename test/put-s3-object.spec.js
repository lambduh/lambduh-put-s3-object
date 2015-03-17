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

  describe('validation', function() {

    it('should throw an error on null options input', function(done) {
      put()().then(function() {
        done(new Error('Expected function to throw error'));
      }, function(err) {
        if (err) {
          done();
        } else {
          done(new Error('Expected err object to exist'));
        }
      })
    });

    it('should require Bucket param', function(done) {
      put()({}).then(function() {
        done(new Error('Expected function to throw error'));
      }, function(err) {
        if (err) {
          done();
        } else {
          done(new Error('Expected err object to exist'));
        }
      })
    });


  });
});
