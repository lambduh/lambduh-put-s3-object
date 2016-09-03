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

By default this will use the default region the lambda operates in.  If you need to operate on an S3 bucket in another region you can set the region field on the `options` object: `.region`.

It will upload an object at the specified filepath to S3 at the specifed bucket, key and region (if specified).

#Metadata

You can pass addional metadata on your object by specifying a Metadata 
object in your params for example

```javascript
options= {
      dstBucket: testBucketName,
      dstKey: "my-red-lil-key.png",
      uploadFilepath: "/tmp/my-red-lil-key.png",
      Metadata: {
        language :'EN',
        dialect:'us',
        encoding: 'utf8',
        client_class:'premium'
      }
```

Like most things in AWS, Metadata is fraught with subtle nightmares,
  read [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html#object-metadata)
  for all the things you can get wrong.

For the gist, AWS will add **x-amz-meta** as a prefix to all of your 
metadata, and make it all lowercase. It won't accept non ascii metadata
and it may or may not tell you about it. 
See the tests for an example of how to use it.

# Full disclosure

This module's tests don't yet cover the `aws-sdk` implementation - only the validation and other basic things.

I'm hoping to get back to this soon....
