/**
 * Problem: We need a simple way to look at a current user's proejects 
 * Solution: Use Node.js to connect to github API to get user's projects info
 */

// Require node.js' express, https, api, and queryString and http
const express = require('Express');
const api = require('./data.json');
const https = require('https');
const querystring = require('querystring');
const http = require('http');

// Use the slice method once project data is retrieved
// query could be any of the 5 projects completed
const query = process.argv.slice(2).join(' ');

// Call weather.get
express.get(query);


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