import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAccountData } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css"; // Import CreateAccount CSS for styles
import axios from "axios";
import { BASE_URL } from "../constants";

const EditProfile = () => {
  const accountData = JSON.parse(useSelector((state) => state.accountData));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name_first: accountData.name_first,
    name_last: accountData.name_last,
    name_middle: accountData.name_middle,
    contact_info: accountData.contact_info,
    kyc: accountData.kyc,
    age: accountData.age,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = JSON.stringify({
      clientId: accountData.clientId,
      name_first: formData.name_first,
      name_last: formData.name_last,
      name_middle: formData.name_middle,
      contact_info: formData.contact_info,
      kyc: formData.kyc,
      age: formData.age,
    });

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `${BASE_URL}clients/${accountData.clientId}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        dispatch(setAccountData(data));
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  async function handleDelete() {
    let data = "";
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${BASE_URL}clients/${accountData.clientId}`,
      headers: {},
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        navigate("/");
        dispatch(setAccountData(null));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="create-account-container">
      {" "}
      <h2
        style={{
          textAlign: "left",
          marginLeft: 30,
          marginBottom: 0,
          marginTop: 0,
        }}
      >
        Edit Profile
      </h2>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="name_first"
            value={formData.name_first}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="name_last"
            value={formData.name_last}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Middle Name:</label>
          <input
            type="text"
            name="name_middle"
            value={formData.name_middle}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact Info:</label>
          <input
            type="text"
            name="contact_info"
            value={formData.contact_info}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>KYC Status:</label>
          <input
            type="text"
            name="kyc"
            value={formData.kyc}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
      </form>
      <div>
        <button type="submit" onClick={handleDelete}>
          Delete Account
        </button>
        <button type="submit" onClick={handleSubmit}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
