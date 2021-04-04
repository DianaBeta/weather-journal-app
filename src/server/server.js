// Setup empty JS object to act as endpoint for all routes
const projectData = {};


// Express to run server and routes
const express= require('express');
// Start up an instance of app
const app = express();

app.get('/all', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

/* Dependencies */
const bodyParser = require('body-parser')
var path = require('path')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
// to use url encoded values
app.use(bodyParser.urlencoded({ extended: true})); 
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require ('cors');
app.use(cors());
// Initialize the dist project folder
app.use(express.static('dist'));


const http = require("http");
const { request } = require('express');

const hostname = "127.0.0.1";
const port = 2000;
// Spin up the server
const server = app.listen(port, listening);
// Callback to debug

function listening(){

    console.log('server running');
    console.log(`running on localhost: ${port}.`);

};
// Initialize all route with a callback function


// Callback function to complete GET '/all

//GET route

app.get('/all', function (req, res) {
  res.send(projectData);
});
// Post Route
//const postData = [];

// TODO POST ROUTE
app.post('/add',function(req, res) {
  let data = req.body;
  // console.log(data);
  newEntry = {
      zip: req.body.zip,
      temp: req.body.temp,
      temp_max: req.body.temp_max,
      temp_min: req.body.temp_min,
      feelings: req.body.feelings,
      city: req.body.city
  }
//postData.push(newEntry)
  projectData.newEntry = newEntry;
  //res.send(postData);
  res.send(projectData);
  //console.log(postData)
  console.log(projectData);
});
