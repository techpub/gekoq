var request = require('request');

var gecko_path = 'https://push.geckoboard.com/v1/send/';

var api_key = require('./api_key.json');

module.exports = function push(widget) {
  var payload = {
    api_key: api_key,
    data: widget.data
  }
  request.post(
    {url: gecko_path + widget.id, 
     json: true, 
     form: JSON.stringify(payload)}, 
    function(err, res, body) {
      if(err) {
        throw new Error(err);
      }
      console.log(widget.id);
      console.log(body);
    }
  );
}
