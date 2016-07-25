/* jshint undef: true, unused: true */
/* globals require, process, console, __dirname*/
"use strict";
var express = require('express');
var server = express();


server.set('port', (process.env.PORT || 5000));

console.log(__dirname); 
server.use(express.static(__dirname + '/dist'));


server.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/search.html');
});


server.listen(server.get('port'), function() {
  console.log('Node app is running on port', server.get('port'));
});

