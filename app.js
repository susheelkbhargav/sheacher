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



app.post("/message", function (request, response) {
  console.log(request.body.Body);
  console.log(request.body.From);  
//  response.send("<Response><Message>" + request.body.Body + "</Message></Response>");
});

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

