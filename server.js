// Setup empty JS object to act as endpoint for all routes
const projectData = {};


// Express to run server and routes
const express= require('express');
// Start up an instance of app
const app = express();



/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require ('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


const http = require("http");
const { request } = require('express');

const hostname = "127.0.0.1";
const port = 3000;
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
