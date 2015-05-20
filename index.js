var request = require('request');

var gecko_path = 'https://push.geckoboard.com/v1/send/';

function Widget (widget_id, payload, type) {
  this.push_url = gecko_path + widget_id;
  this.payload = payload || {};
  this.type = type || '';
}
module.exports.Widget = Widget;

var api_key = '';
module.exports.api_key = function(key) {
  api_key = key;
}

module.exports.squawk = function(widget) {
  var payload = {
    api_key: api_key,
    data: widget.payload
  }
  console.log(payload);
  request.post(
    {url: widget.push_url, 
     json: true, 
     form: JSON.stringify(payload)}, 
    function(err, res, body) {
      if(err) {
        console.log(err);
      }
      console.log(body);
    }
  );
}

