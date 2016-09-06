var express = require('express');
var app = express();
//Making public folder static to render the static content on server
app.use(express.static('public'));
//using express route.
app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})