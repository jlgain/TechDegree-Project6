/**
 * Problem: We need a simple way to look at a current user's proejects 
 * Solution: Use Node.js to connect to github API to get user's projects info
 */

// Require dependencies node.js' express, https, api, and queryString and http
const express = require('express');
const api = require('data.json');
const https = require('https');
const querystring = require('querystring');
const http = require('http');

// Call Express to create a new web/express application
// This variable (app) is the central part of our application
const app = express();

// Tell express to use static middleware
app.use('/static', express.static('public'));
app.use('/static', express.static('images'));

// Use the set method to set the view engine to the parameter pug
// View engine setup
app.set('view engine', 'pug');

// Import into file to make index.js & about.js accessible
// to let this app.js access routes
const aboutRoute = require('./routes/about');
const indexRoute = require('./routes/index');

// Use routes variable to make middleware
// To render the "Home" page with the locals set to data.projects
// and to render the "About" page
app.use(aboutRoute);
app.use(indexRoute);

// Function to handle any errors
function printError(error)
{
    console.error(error.message);
}

// Function to print/display project info
function getProject()
{
    // Create local variable to hold parms
    

    // Create local variable to hold url for project chosen
    const url = `https://github.com/jlg2263/?${querystring.stringify(parameters)}`;


}