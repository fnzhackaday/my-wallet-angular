var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 8080
var path = require('path');

app.use(express.static(__dirname + '/'));

app.get('/', function(request, response){
  response.sendfile('index.html')
});

server.listen(port, function(){
  console.log("Server listening on port " + port);
});

module.exports = server;