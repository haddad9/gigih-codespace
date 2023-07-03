// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('test');
});

// about page
app.get('/form', function(req, res) {
    res.render('form');
});

app.listen(8080);
console.log('runnin on 8080');