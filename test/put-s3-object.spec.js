var expect = require('chai').expect;
var testBucketName ='lambduh-upload-test-bucket';
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
      });
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
      });
    });

    it('should require Key param', function(done) {
      var options = {
        dstBucket: testBucketName
      };
      put(null, options).then(function() {
        done(new Error('Expected function to throw error'));
      }, function(err) {
        if (err) {
          done();
        } else {
          done(new Error('Expected err object to exist'));
        }
      });
    });

    it('should require uploadFilepath param', function(done) {
      var options = {
        dstBucket: testBucketName,
        dstKey: "my-red-lil-key.png"
      };
      put(null, options).then(function() {
        done(new Error('Expected function to throw error'));
      }, function(err) {
        if (err) {
          done();
        } else {
          done(new Error('Expected err object to exist'));
        }
      });
    });
  });

  //TODO: implement properly - mock AWS.S3 .upload() and .send()
  xit('should resolve the options object when required params are included', function(done) {
    var options = {
      dstBucket: testBucketName,
      dstKey: "my-red-lil-key.png",
      uploadFilepath: "/tmp/my-red-lil-key.png",
      key: 'val'
    };
    put(null, options).then(function(opts) {
      if (opts == options) {
        done();
      } else {
        done(new Error('Expected resolved options to match inputted options'));
      }
    }, function() {
      done(new Error('Expected function to pass'));
    });
  });

  it('should resolve Metadata objects when Metadata is included', function(done) {
    var metadata = {
      language: 'EN',
      dialect: 'us',
      encoding: 'utf8',
      client_class: 'premium'
    };
    var options = {
      dstBucket: testBucketName,
      dstKey: "my-red-lil-key.png",
      uploadFilepath: "/tmp/my-red-lil-key.png",
      Metadata: metadata
    };
    put(null, options).then(function(opts) {
      if (opts.Metadata === metadata) {
        done();
      } else {
        done(new Error('Expected resolved options metadata to match inputted metadata'));
      }
    }, function() {
      done(new Error('Expected function to pass but it did not'));
    });
  });

  //Disabled by default since when you upload it it runs over the previous one and is hard to check
  xit('should not send MetaData if no MetaData was provided', function(done) {
    var options = {
      dstBucket: testBucketName,
      dstKey: "my-red-lil-key.png",
      uploadFilepath: "/tmp/my-red-lil-key.png"
    };
    put(null, options).then(function() {
      done();
    }, function() {
      done(new Error('Expected function to pass'));
    });

  });
});
