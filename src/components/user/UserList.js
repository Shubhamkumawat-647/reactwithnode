import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css'; // Import the CSS file

const UserList = () => {
  const [user, setuser] = useState({});
  const [home1, setHome] = useState({});

  useEffect(() => {
    loginAPI();
    setHome();
  }, []);

  const loginAPI = () => {
    axios.get('http://localhost:8080/auth/login', {
  withCredentials: true 
})
      .then((response) => {
        setuser(response.data)
      })
      .catch((error) => {
        console.error('Error during API call:', error);
        // Handle error (optional)
      });
  };
    const home=()=>{
      axios.get('http://localhost:8080/auth/home', {
        withCredentials: true 
      }).then((response) => {
        setHome(response)

      })

    }

  return (
    <div className="user-list-container">
      <h1>Welcome to the User Page</h1>
      <p><strong>Username:</strong> <span>{user?.userId}</span></p>
      <p><strong>Role:</strong> <span>user (this role write by front and becouse not sending for BE)</span></p>
      <button onClick={home} className="okta-login-button">
                Home
            </button>

            {home1&&(
              <div>home api call</div>
            )}
    </div>
  );
};

export default UserList;
