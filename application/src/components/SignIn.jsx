import React, { useState } from "react";

import classes from "../styles/SignIn.module.css";

import Navigation from "../components/Navigation";

import axios from 'axios';

function SignIn() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({
      ...data,
      [input.name]: input.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data)
      localStorage.setItem("ACC_EMAIL", res.email)
      window.location = '/dashboard'
      console.log(res);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <Navigation />
      <div className={classes.page_container}>
        <div className={classes.page_container__form_container}>
          <div className={classes.form_container__title_container}>
            <h2 className={classes.title_container__title}>
              Sign in to Scrimaster
            </h2>
          </div>
          {error && <div className={classes.error_container}>{error}</div>}
          <div className={classes.formContainer}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className={classes.label}>
                <input 
                  type="text" 
                  name="email" 
                  value={data.email}
                  required 
                  autoComplete="off" 
                  onChange={handleChange}
                />
                <span className={classes.placeholder}>Email</span>
              </label>

              <label htmlFor="password" className={classes.label}>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  required
                  autoComplete="off"
                  onChange={handleChange}
                />
                <span className={classes.placeholder}>Password</span>
              </label>

              <div className={classes.signUpButton}>
                <button type="submit">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
