var express = require('express');
var app = express();
app.use(express.static('public'));

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true }); // for parsing form data
app.use(urlencodedParser);

app.get('/', function(req, res) {
  var LandingPage = 'grainplayer-test4.html';
  res.sendFile(LandingPage, {root: './public'});
})

app.listen(80, function () {
  console.log('grainplayer-test4.html running on port 80!')
})
