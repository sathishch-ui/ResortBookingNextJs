"use client";

import React, { useState } from "react";
import { loginAction } from "../serverActions/loginActions";
import { useRouter } from "next/navigation";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const loginHandler = async (e) => {
    e.preventDefault();
    const userLoginDetails = { email, password };
    console.log(userLoginDetails);
    try {
      const response = await loginAction(userLoginDetails);
      if (response.success) {
        router.push("/");
      } else {
        setError(response.message || "Login Failed");
      }
    } catch (error) {
        console.log(error);
        setError(error.message || "Login Failed");
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={loginHandler} className="formSection">
        {error && <p style={{ color: "red" }}>{error}</p>}
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
