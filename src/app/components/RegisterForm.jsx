"use client";

import { useState } from "react";
import { registerAction } from "../serverActions/registerActions";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    const userRegistrationDetails = { username, email, password };
    console.log(userRegistrationDetails);
    try {
      const response = await registerAction(userRegistrationDetails);
      if (response.success) {
        alert("User Registered Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={registerHandler} className="formSection">
        <h3>Username</h3>
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <h3>Email</h3>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3>Password</h3>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
