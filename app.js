var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

var port = process.env.PORT || 3000;

var setupWorkController = require('./api/controllers/setupWorksController');
var workController = require('./api/controllers/workController');  
var configDB = require('./config/database.js');

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to our database

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(morgan("dev"));

app.set("view engine", "ejs");

setupWorkController(app);
workController(app);

app.get("/", function(req, res){
    res.render("index");
});

app.listen(port, function(){
    console.log("App listening on port " + port);
})

