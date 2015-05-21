# gekoq
A thin wrapper for pushing to Geckoboard's custom widgets using Node.js

*gekoq comes from the [Malay word for gecko](http://etymonline.com/index.php?term=gecko), said to be imitative of its sound.*

See ```widget.js``` in the GitHub repo for a simple example.

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

Properties 'type' and 'payload' are optional paramters, e.g.

```
var widget = new gekoq.Widget('141830-2518ecbe-f81a-4b11-bc77-0bb20bfee019', 'line', {})
```

#### Set the widget's payload

This widget's payload is set by defining ```widget.payload```. Alternatively the widget's payload could be stored in a separate file and set with ```require()``` or ```fs.readFile()```. The ```.squawk()``` method (outlined below) converts the payload to JSON, so you can use vanilla JavaScript here. Here is an example of a Geck-o-Meter.

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

#### Use Promises to push an array of widgets

```
var widgets = [
  new gekoq.Widget('145647-7a225230-1c70-4730-81c3-d12854f76895', 'pie',
    { 
      item: [
        {
          value: 50,
          label: 'one'
        },
        {
          value: 70,
          label: 'two'
        }
      ]
    }
  ),
  new gekoq.Widget('145647-0c0abe9d-3042-4c2e-87d5-2a9ee131165d', 'bar',
    {
      "x_axis": {
        "labels": ["open", "pending", "solved", "closed"]
      },
      "series": [
        {
          "data": [45, 4, 251, 554]
        }
      ]
    }
  ),
  new gekoq.Widget('145647-d9fe7a41-20cb-43c4-b899-1bec988577fd', 'line',
    {
      "x_axis": {
        "labels": ["May", "Jun", "Jul", "Aug", "Sep"]
      },
      "series": [
        {
          "data": [
            10, 2, 24, 18, 35
          ]
        }
      ]
    } 
  )
];

Promise.all(widgets.map(function(widget) { gekoq.squawk(widget); }));
```

