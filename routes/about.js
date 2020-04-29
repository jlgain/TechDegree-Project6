/* Dependencies */

// Create express and router instance
// Require data file
const express = require('express');
const router = express.Router();

/* Routes */

// Get About page
router.get('/', (req, res) =>
{
    res.render('about');
});

// Export router to be referenced in app.js file
module.exports = router;