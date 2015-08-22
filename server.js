// var express = require('express');
// var app = express();
// // app.get('/', function(req, res){
// //   res.send('testing');
// // });
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });
// app.listen(3000);






// ______________________
"use strict";

var express = require('express');

var app = express();
var path = require('path');


var port = process.env.PORT || '3000';

//========================================================//
//   connecting the client and server                     //
//   allows for CORS (cross origin resource sharing)      //
//========================================================//
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// for more info, see: http://enable-cors.org/server_expressjs.html

//========================================================//
//   statically serves files from the client directory    //
//========================================================//
// app.use(express.static('client'));
// app.use(express.static('audio_files'));

// for more info, see: http://expressjs.com/starter/static-files.html

//========================================================//
//   ROUTES                                               //
//========================================================//
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + '/index.html'));
// });
app.get('/', function(req, res){
  res.send('testing: committed changes but did not redeploy... does the change appear on the deployed heroku site?');
});
//========================================================//
//   Use this to add many mp3s at once to the library     //
//========================================================//
// app.get('/gridtest', function(req, res) {
//   var insert = require('./reqHandler.js').insert;
//   insert();
//   res.send('new copiedDummy.txt file has been created');
// });


//========================================================//
//   Calling the server                                   //
//========================================================//
var server = app.listen(port, function() {
  var host = server.address().address;
  console.log('Example DEPL app listening at http://%s:%s -- %s', host, port);
});