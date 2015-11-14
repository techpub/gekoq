'use strict';
const https = require('https');

let api_key = '';

function post(key, widget) {
  let payload = { api_key: key, data: widget.data };
  https.request({
    hostname: 'push.geckoboard.com', 
    port: 443, 
    path: '/v1/send/' + widget.id,
    method: 'POST', 
    headers: { 
      'Content-Type': 'application/json', 
      'Content-Length': JSON.stringify(payload).length 
    }
  }, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      console.log(widget.id + ' => ' + chunk);
    });
    res.on('error', (e) => { console.log('Error: ' + e) });
  }).write(JSON.stringify(payload));
}

module.exports.push = function (widget) {
  return post(api_key, widget);
}

module.exports.key = function (key) {
  api_key = key;  
}
