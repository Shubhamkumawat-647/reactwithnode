import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.css'; // Import the CSS file

const Admin = () => {
  const [user, setuser] = useState({});
  useEffect(() => {
    loginAPI();
  }, []);

  const loginAPI = () => {
    axios.get('http://localhost:8080/auth/login', {
      withCredentials: true 
    }).then((response) => {
        setuser(response.data)
        console.log(response, "response");
      })
      .catch((error) => {
        console.error('Error during API call:', error);
        // Handle error (optional)
      });
  };

  return (
    <div className="admin-container">
      <h1>Welcome to the Admin Page</h1>
      <p><strong>Username:</strong> <span>{user?.userId}</span></p>
      <p><strong>Role:</strong> <span>Admin (this role write by front and becouse not sending for BE)</span></p>
    </div>
  );
};

export default Admin;
