var Q = require('q');

module.exports = function() {
  return function(options) {
    var def = Q.defer();

    if (!options) {
      def.reject(new Error("S3 Upload expected options object."));
    } else {
      def.resolve();
    }



    return def.promise;
  }
}
