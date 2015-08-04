var api_key = '';
var push  = require('./push.js');

module.exports.key = function (key) {
  api_key = key;  
}

module.exports.push = function (widget) {
  return push(api_key, widget);
}
