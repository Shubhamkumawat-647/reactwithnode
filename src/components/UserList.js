import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/users/get')
      .then((response) => {
        setUsers(response.data);  // Use the data received from the API
        setLoading(false);
      })
      .catch((error) => {
          console.log(error)
        setError('No response received from the server. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="user-list">
      <h1>User List</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <div className="user-card" key={user.id}>
            <p className="user-name">{user.firstName} {user.lastName}</p>
            <p className="user-email">{user.email}</p>
          </div>
          ))
        ) : (
          <li>No users found.</li>
        )}
      </ul>
    </div>
  );
};

export default UserList;
