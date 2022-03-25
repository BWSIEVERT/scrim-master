import React, { useState } from "react";

import classes from "../styles/SignUp.module.css";

import Navigation from "../components/Navigation";

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function SignUp() {

    const navigate = useNavigate()

    const [ data, setData ] = useState({
        name: '',
        email: '',
        password: '',
        activisionId: ''
    })

    const [ error, setError ] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({
            ...data,
            [input.name]: input.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:8080/api/users';
            const { data: res } = await axios.post( url, data )
            navigate('/signin')
            console.log(res.message);
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }

  return (
    <>
      <Navigation />
      <div className={classes.page_container}>
        <div className={classes.page_container__form_container}>
          <div className={classes.form_container__title_container}>
            <h2 className={classes.title_container__title}>
              Create Scrimaster Account
            </h2>
          </div>
          {error && <div className={classes.error_container}>{error}</div>}
          <div className={classes.formContainer}>
            <form onSubmit={handleSubmit}>

            <label className={classes.label}>
                <input 
                    type="text" 
                    name="name"
                    value={data.name}
                    required 
                    autoComplete="off" 
                    onChange={handleChange}
                />
                <span className={classes.placeholder}>Name</span>
              </label>
              
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

              <label className={classes.label}>
                <input 
                    type="text" 
                    name="activisionId"
                    value={data.activisionId}
                    required 
                    autoComplete="off"
                    onChange={handleChange}
                />
                <span className={classes.placeholder}>Activision ID</span>
              </label>

              <div className={classes.signUpButton}>
                <button type="submit">Sign Up</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
