// frontend/src/App.js

import React from 'react';
// Import necessary modules from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import the components we created for CRUD operations
import UsersList from './components/UsersList';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser'; 

// NOTE: If you haven't yet, make sure you install react-router-dom:
// npm install react-router-dom@6

function App() {
  return (
    // Router wraps the entire application for routing capabilities
    <Router>
      <div className="container">
        {/* Simple Navigation Bar (using Bootstrap classes) */}
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="navbar-brand">User Directory App</Link>
          <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {/* Link to the Users List (Read) */}
            <li className="navbar-item">
              <Link to="/" className="nav-link">Users List</Link>
            </li>
            {/* Link to the Create User page (Create) */}
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create User</Link>
            </li>
          </ul>
          </div>
        </nav>
        <br/>
        
        {/* Routes component defines which component to render based on the URL */}
        <Routes>
          {/* Base path: Shows the list of users */}
          <Route path="/" element={<UsersList />} />
          {/* /create path: Shows the form to add a new user */}
          <Route path="/create" element={<CreateUser />} />
          {/* /edit/:id path: Shows the form to update an existing user (the :id is a dynamic parameter) */}
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;