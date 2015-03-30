var expect = require('chai').expect;

var put = require('../');

describe('putS3Object', function() {
  it('should exist', function() {
    expect(put).to.exist;
  });

  it('should return a promise', function() {
    expect(put().then).to.exist;
  });

  describe('validation', function() {
    it('should throw an error on null options input', function(done) {
      put().then(function() {
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
      put(null, {}).then(function() {
        done(new Error('Expected function to throw error'));
      }, function(err) {
        if (err) {
          done();
        } else {
          done(new Error('Expected err object to exist'));
        }
      })
    });

    it('should require Key param', function(done) {
      var options = {
        dstBucket: "my-lil-red-bucket"
      }
      put(null, options).then(function() {
        done(new Error('Expected function to throw error'));
      }, function(err) {
        if (err) {
          done();
        } else {
          done(new Error('Expected err object to exist'));
        }
      })
    });

    it('should require uploadFilepath param', function(done) {
      var options = {
        dstBucket: "my-lil-red-bucket",
        dstKey: "my-red-lil-key.png"
      }
      put(null, options).then(function() {
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

  //TODO: implement properly - mock AWS.S3 .upload() and .send()
  xit('should resolve the options object when required params are included', function(done) {
    var options = {
      dstBucket: "my-lil-red-bucket",
      dstKey: "my-red-lil-key.png",
      uploadFilepath: "/tmp/my-red-lil-key.png",
      key: 'val'
    }
    put(null, options).then(function(opts) {
      if (opts == options) {
        done();
      } else {
        done(new Error('Expected resolved options to match inputted options'));
      }
    }, function() {
      done(new Error('Expected function to pass'));
    })
  });

});
