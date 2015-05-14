var gekoq   = require('./gekoq/');
var api_key = require('./api_key');
gekoq.api_key(api_key);

var widget = new gekoq.Widget('141830-2518ecbe-f81a-4b11-bc77-0bb20bfee019');

widget.payload = {
  "item": 23,
  "min": {
    "value": 10
  },
  "max": {
    "value": 30
  }
} 

gekoq.squawk(widget);
