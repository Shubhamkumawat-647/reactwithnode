import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Login.css';
const Login = () => {
    const handleLogin=()=>{
    window.location.href = 'http://localhost:8080';

    }
    return(
        <div className="login-container">
            <h1>Welcome to the application</h1>
            <button onClick={handleLogin} className="okta-login-button">
                Login with Okta SSO
            </button>
        </div>
    )
}
export default Login;
