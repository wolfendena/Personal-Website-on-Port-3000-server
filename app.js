const express = require('express');
const app = express();

//adding middleware
app.set("view engine", "ejs"); //setting up templating engine

app.use(express.static('./public'));

app.get('/Personal', function(req, res) {
    res.render('Personal.ejs');
});

app.get('/home', function(req, res) {
    res.render('home.ejs');
});

app.get('/Activities', function(req, res) {
    res.render('Activities.ejs');
});

app.get('/Portfolio', function(req, res) {
    res.render('Portfolio.ejs');
});

app.listen(3000, function(err){
    if (err){
        console.log(err) 
    }
    console.log('server is live on port 3000')
});