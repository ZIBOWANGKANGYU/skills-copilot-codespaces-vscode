// Create web server
// Create a route to handle comments
// Send back comments in JSON format
// Start the server

// Load the express module
const express = require('express');
const app = express();

// Load the comments module
const comments = require('./comments');

// Create a route to handle comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the server
app.listen(3000, () => {
    console.log('Server started');
});

// Run the server
// Open the browser and go to http://localhost:3000/comments