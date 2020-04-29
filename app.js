/* Dependencies */

// Require dependencies for node.js to run app
const express = require('express');
const bodyParser = require('body-parser');
const api = require('data.json');

// Create new web/express application by calling express
// to make "app" central part of our application
const app = express();

/* Middleware */

// Tell express to use body-parser & static middleware/files
app.use(bodyParser.urlencoded({extended: false}));
app.use('/static', express.static('public'));
app.use('/static', express.static('images'));

// Use set method to set the view engine to the parameter pug
app.set('view engine', 'pug');

/* Routes */

// Import routes to let app.js access routes
const aboutRoute = require('./routes/about');
const indexRoute = require('./routes/index');
const projectRoute = require('./routes/project');

// Use routes variable to make middleware
app.use(aboutRoute);
app.use(indexRoute);
app.use(projectRoute);

// Run middleware with annonymous function with app.use method
// Runs everytime a request comes into the app
app.use((req, res, next) =>
{
    // Create error object to hand off to error handler
    const err = new Error('Page Not Found');
    err.status = 404;
    err.message = '404 Error - Page Not Found';
    console.log(err.message);
    // Pass control forward through the app or end middleware function
    next(err);
});

// Add middleware error handler and pass it into app.use method with 4 parms
app.use((err, req, res, next) =>
{
    // Render a template back to client with error data
    res.locals.error = err;
    res.status(err.status);
    res.render('error', {err});
});

// Set up development server to run on local machine
// Call listen method passing in the port number 3000
// to tell the server which port to serve the application on
app.listen(3000, () =>
{
    console.log('The application is running on localhost:3000');
});