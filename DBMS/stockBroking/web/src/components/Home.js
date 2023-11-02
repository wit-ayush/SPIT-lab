import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS

const Home = () => {
  const accountData = JSON.parse(useSelector(state => state.accountData));

  return (
    <div className="home-container">
      <div className="data-container">
        <div className="data-container">
          <p><strong>Contact Info:</strong> {accountData?.contact_info}</p>
          <p><strong>KYC Status:</strong> {accountData?.kyc}</p>
          {/* <p><strong>Account Balance:</strong> {accountData?.balance ? accountData?.balance : 0} INR</p> */}
          <p><strong>Age:</strong> {accountData?.age}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
