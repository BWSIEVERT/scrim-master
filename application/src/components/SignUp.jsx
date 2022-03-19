import React from "react";

import classes from "../styles/SignUp.module.css";

import Navigation from "../components/Navigation";

function SignUp() {
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
          <div className={classes.formContainer}>
            <form>
              <label htmlFor="email" className={classes.label}>
                <input type="text" name="email" required autoComplete="off" />
                <span className={classes.placeholder}>Email</span>
              </label>
              <label htmlFor="password" className={classes.label}>
                <input
                  autoComplete="off"
                  type="password"
                  name="password"
                  required
                />
                <span className={classes.placeholder}>Password</span>
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
