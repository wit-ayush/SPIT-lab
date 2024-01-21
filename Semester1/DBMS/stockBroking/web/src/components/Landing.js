import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing-container">
      <h2 className="heading">Welcome to FinWizards</h2>
      <div className="options">
        <Link to="/create-account">
          <button className="button">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
