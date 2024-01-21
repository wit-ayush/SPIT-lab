// src/components/Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CreateAccount.css'; // Import CreateAccount CSS for styles
import axios from "axios";
import { BASE_URL } from '../constants';
import { useDispatch } from 'react-redux';
import { setAccountData } from '../redux/actions';

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [formData, setFormData] = useState({
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  async function handleSubmit (e) {
    e.preventDefault();

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${BASE_URL}login/${formData.phone}`,
    };

    axios.request(config)
    .then((response) => {
      if (response.data.length) {
        dispatch(setAccountData(JSON.stringify(response.data[0])));
        navigation('/home')
      } else {
        alert("There is no account of this number")
      }
    })
    .catch((error) => {
      alert("Something went wrong")
    });

  };

  return (
    <div className="create-account-container"> {/* Use CreateAccount CSS class */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="phone"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <h2 style={{ fontSize: 15 }}>
        Don't have an account? <Link style={{ color: '#4186ff'}} to="/create-account">Create one</Link>
      </h2>
    </div>
  );
};

export default Login;
