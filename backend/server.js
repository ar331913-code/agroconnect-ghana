// Import the Express library we installed earlier
const express = require('express');

// Create an Express application - this represents our whole server
const app = express();

// Define the port number our server will run on
const PORT = 3000;

// Define a simple route: when someone visits the homepage ('/'),
// send back this response
app.get('/', (req, res) => {
  res.send('AgroConnect Ghana backend is running!');
});

// Start the server and make it listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});