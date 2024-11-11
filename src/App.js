// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './components/user/UserList'; // Adjust the path if necessary
import './App.css';
import Login from './components/login/Login';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} /> {/* Default route */}
          <Route path="/users" element={<UserList />} /> {/* Route for UserList component */}
          <Route path="/admin" element={<Admin />} /> {/* Example route for About page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
