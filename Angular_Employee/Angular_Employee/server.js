var express = require('express');
var app = express();
var open = require('open');

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {

  var port = server.address().port

  open("http://localhost:"+port);

  console.log("Example app listening at http://localhost:%s", port)

})
