import React, { useState } from "react";
import { setAccountData } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./CreateAccount.css"; // Import CSS
import { BASE_URL } from "../constants";
import axios from "axios";

const CreateAccount = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    clientId: 1,
    name_first: "",
    name_last: "",
    name_middle: "",
    contact_info: "",
    kyc: "done",
    balance: 0,
    age: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function getData () {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `${BASE_URL}login/${formData.contact_info}`,
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

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      name_first: formData.name_first,
      name_last: formData.name_last,
      name_middle: formData.name_middle,
      contact_info: formData.contact_info,
      kyc: formData.kyc,
      age: formData.age,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BASE_URL}createclient`,
      headers: { "Content-Type": "application/json" },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        getData()
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  };

  return (
    <div className="create-account-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
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
          <label>Contact Number:</label>
          <input
            type="text"
            name="contact_info"
            value={formData.contact_info}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default CreateAccount;
