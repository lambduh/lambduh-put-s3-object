var Q = require('q');

module.exports = function() {
  return function() {
    var def = Q.defer();

    return def.promise;
  }
}
