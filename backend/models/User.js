// backend/models/User.js

const mongoose = require('mongoose');

// Define the schema for a User
const userSchema = new mongoose.Schema({
    // User's full name (required string)
    name: {
        type: String,
        required: true,
        trim: true // Removes whitespace from both ends of a string
    },
    // User's email (required, unique, and lowercase for consistency)
    email: {
        type: String,
        required: true,
        unique: true, // Ensures no two users can have the same email
        trim: true,
        lowercase: true,
        // Basic email format validation (optional but good practice)
        match: [/.+@.+\..+/, "Please enter a valid email address"]
    },
    // The date the user was added to the directory (defaults to current date)
    dateJoined: {
        type: Date,
        default: Date.now
    }
}, {
    // Adds 'createdAt' and 'updatedAt' timestamps automatically
    timestamps: true
});

// Create the Mongoose Model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;