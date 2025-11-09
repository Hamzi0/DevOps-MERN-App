const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Required for frontend (3003) to talk to backend (5003)
require('dotenv').config(); // To load environment variables from .env file

const app = express();
const port = process.env.PORT || 5003; // Uses port 5003 from .env, or defaults to 5003

// --- Middleware Setup ---
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Allows the server to accept and parse JSON data in the request body

// --- Database Connection ---
const uri = process.env.MONGODB_URI; // Get the connection string from the .env file
mongoose.connect(uri)
    .then(() => console.log("MongoDB connection established successfully"))
    .catch(err => console.error("MongoDB connection error:", err));

// --- Route Integration ---
// Import the router created in backend/routes/users.js
const usersRouter = require('./routes/users'); 

// Set up the base path for the user routes.
// All requests to http://localhost:5003/users/ will be handled by usersRouter.
app.use('/users', usersRouter); 

// --- Simple Test Route (Root) ---
app.get('/', (req, res) => {
    res.send('User Directory API is running!');
});

// --- Start the Server ---
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});