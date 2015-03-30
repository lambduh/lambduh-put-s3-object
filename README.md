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

  upload(null, {
    dstBucket: "destination-bucket",
    dstKey: "path/to/s3/upload/key.txt",
    uploadFilepath: "/tmp/path/to/local/file.txt"
  })
  .then(function(result) {
  	context.done()
  }).fail(function(err) {
  	context.done(err);
  });
}
```

This module expects three fields on the passed `options` object: `.dstBucket`, `.dstKey`, and `.uploadFilepath`

It will upload an object at the specified filepath to S3 at the specifed bucket and key.

# Full disclosure

This module's tests don't yet cover the `aws-sdk` implementation - only the validation and other basic things.

I'm hoping to get back to this soon....
