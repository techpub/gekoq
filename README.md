# gekoq
A thin wrapper for pushing to Geckoboard's custom widgets using Node.js

*gekoq comes from the [Malay word for gecko](http://etymonline.com/index.php?term=gecko), said to be imitative of its sound.*

### Install

```
$ npm install gekoq
```

```
const gekoq = require('gekoq');
```

#### Set the API Key

Use the `gekoq.key()` method.

```
gekoq.key('a094dabc561c521f81782627f1c2by73');
```

A good strategy is to store keys as environment variables

```
$ export GECKOBOARD_API_KEY=a094dabc561c521f81782627f1c2by73
```

then

```
gekoq.key(process.env.GECKOBOARD_API_KEY);
```

#### Methods

`gekoq.push()` accepts an object with the required properties `id` and `data`:

```
let widget = {
  id: '147539-72d8b6cf-8766-4ead-bd1e-b671e8a5ab86',
  data: {
    item: [
      {
        value: 100
      }
    ]
  }
}

gekoq.push(widget);
```

#### Use Promises to push an array of widgets

```
let dashboard = [
  {
    id: '119097-1c74815e-8658-48a0-80f3-cdb79a07754c',
    data: { item: [ { value: 100 } ] }
  },
  {
    id: '145647-f084514b-27dc-4552-a267-e6e3cc069baf',
    data: { item: [ { value: 200 } ] }
  }
]

Promise.all(dashboard.map(widget => { 
  gekoq.push(widget); 
}));
```

