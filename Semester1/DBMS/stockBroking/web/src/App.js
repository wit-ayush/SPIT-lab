import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import Home from "./components/Home";
import { useSelector } from "react-redux";
import Landing from "./components/Landing";
import Login from "./components/Login";
import EditProfile from "./components/EditProfile";

const App = () => {
  const accountData = JSON.parse(useSelector(state => state.accountData));

  return (
    <Router>
      <div className="App">
        {accountData && (
          <div className="header">
            <h2 className="title">
              {accountData?.name_first} {accountData?.name_middle}{" "}
              {accountData?.name_last}
            </h2>
            <Link to="/edit-profile" className="button">
              Edit Profile
            </Link>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
