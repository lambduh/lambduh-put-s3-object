# lambduh-s3-put-object
Upload an object to S3.

# Install

```
npm i --save lambduh-put-s3-object
```

# Usage

```javascript
var Q = require('q');
var upload = require('lambduh-put-s3-object');

//your lambda function
exports.handler = function(event, context) {
  var promises = [];
  
  promises.push(function(options) {
    options.dstBucket = "destination-bucket"
    options.dstKey = "path/to/s3/upload/key.txt"
    options.uploadFilepath = "/tmp/path/to/local/file.txt"
    return upload()(options);
  })

  promises.reduce(Q.when, Q({}))
}
```

This module expects three fields on the passed `options` object: `.dstBucket`, `.dstKey`, and `.uploadFilepath`

It will upload an object at the specified filepath to S3 at the specifed bucket and key. 

NOTE: See the [general Lambduh README](https://github.com/lambduh/lambduh#usage---options-object-flow) for info on the `options` object flow. (In short, an `options` object is expected to flow through the full promise chain, and modules are expected to act on it or pass it on, or both).

# Full disclosure

This module's tests don't yet cover the `aws-sdk` implementation - only the validation and other basic things.

I'm hoping to get back to this soon....