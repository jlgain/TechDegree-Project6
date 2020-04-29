/* Dependencies */

// Create express and router instance
// Require data file
const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

/* Routes */

// Get Home page 
router.get('/', (req, res) =>
{
    res.render('index', { projects });
})

// Export router to be referenced in app.js file
module.exports = router;