var twilio = require('twilio');
var accountSid = 'AC97083564b3cb43a3279dcc48b0a976ed'; 
var authToken = '16aec6db1fed7d66ba29b70d238d7535';   

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Sheacher a new channel for the topic has been created',
    to: '+14083102536',  // phone
    from: '+18312192418' // Twilio number
})
.then((message) => console.log(message.sid));


var http = require('http');
var express = require('express');


var app = express();

app.post('/sms', function(req, res) {
  var twilio = require('twilio');
  var twiml = new twilio.TwimlResponse();
  twiml.message('The Robots are coming! Head for the hills!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, function () {
  console.log("Express server listening on port 1337");
});




