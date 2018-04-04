var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

// console.log(req.headers['x-forwarded-proto']);
// console.log(req.url);
// console.log(req.hostname);
// console.log('finishing');


app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on PORT' + PORT);
});

