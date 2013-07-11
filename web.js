var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
var content="Hello World 2!";
fs.readFileSync('./index.html',function(err,data){
  if (err) throw err;
  content=data.toString('utf8', 0, len);
});
response.send(content);
//  response.send('Hello World! 2');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
