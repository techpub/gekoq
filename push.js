var request = require('request');

var gecko_path = 'https://push.geckoboard.com/v1/send/';

module.exports = function push(key, widget) {
  var payload = {
    api_key: key,
    data: widget.data
  }
  request.post(
    {url: gecko_path + widget.id, 
      json: true, 
      form: JSON.stringify(payload)}, 
      function(err, res, body) {
        if(err) {
          throw err;
        }
        console.log(widget.id);
        console.log(body);
      }
  );
}
