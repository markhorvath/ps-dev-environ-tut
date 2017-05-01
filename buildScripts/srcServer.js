var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express(); //create instance of express called app

app.get('/', function(req,res){ //tell express which routes to handle, here it's routes to the route
  res.sendFile(path.join(__dirname, '../src/index.html')); //__dirname is special variable that gets current directory we're running in
  //and joins to ../src/index.html which I will create later
});

app.listen(port, function(err){ //tells express to listen to port defined above (3000)
  if(err) { //error handling
    console.log(err);
  } else {
    open('http://localhost:' + port); //address of website
  }
});
