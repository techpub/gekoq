# gekoq
A thin wrapper for pushing to Geckoboard's custom widgets using Node.js

*gekoq comes from the [Malay word for gecko](etymonline.com/index.php?term=gecko), said to be imitative of its sound.*

### Usage & Methods

```
var gekoq = require('gekoq');
```

#### Set the API Key
```
var api_key = require('./api_key'); // API Key stored in e.g. api_key.json 
gekoq.api_key(api_key); // Set the API Key
```

#### Create a new widget

Create a new widget with the widget's ID (as found in the widget's set up when set to Push mode)

```
var widget = new gekoq.Widget('141830-2518ecbe-f81a-4b11-bc77-0bb20bfee019');
```

#### Set the widget's payload

This widget's payload is set by defining ```widget.payload```. Alternatively the widget's payload could be stored in a separate file and set with ```require()``` or ```fs.readFile()```. Here is an example of a Geck-o-Meter.

```
widget.payload = {
  "item": 23,
  "min": {
    "value": 10
  },
  "max": {
    "value": 30
  }
} 
```

#### Push the widget to Geckoboard

Use the ```squawk``` method to push the widget's data to Geckoboard.

```
gekoq.squawk(widget);
```

