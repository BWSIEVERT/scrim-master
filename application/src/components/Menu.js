import React from "react";

import classes from "../styles/Menu.module.css";

import { CgClose } from "react-icons/cg";

import { Link } from "react-router-dom";

const Menu = ({ open, setOpen }) => {
  const checkToken = localStorage.getItem("token");

  const TeleportToSignIn = () => {
    window.location.href = "/signin";
  };
  const TeleportToSignUp = () => {
    window.location.href = "/signup";
  };

  const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('ACTIVISION_ID')
      window.location.reload();
  }

  return (
    <>
      <nav className={open ? classes.navOpen : classes.navClosed} open={open}>
        <div className={classes.icon_container}>
          <CgClose
            open={open}
            onClick={() => setOpen(!open)}
            id={classes["toggle_close_icon"]}
          />
        </div>
        <div className={classes.links_container}>
          <a className={classes.links_container__links} href="/">
            Home
          </a>
          <a className={classes.links_container__links} href="/">
            Patch Notes
          </a>
          <a className={classes.links_container__links} href="/">
            Resources
          </a>
        </div>

        {checkToken ? (
          <div className={classes.button_container_logout}>
              <button
                onClick={handleLogout}
                className={classes.button_container_logout__button}
                >
                    Logout
                </button>
          </div>
        ) : (
          <>
            <div className={classes.button_container_signin}>
                <button
                  onClick={TeleportToSignIn}
                  className={classes.button_container_signin__button}
                >
                  Sign in
                </button>
            </div>
            <div className={classes.spacer_container}>
              <p className={classes.spacer_container__spacer}>or</p>
            </div>
            <div className={classes.button_container_signup}>
              <button
                onClick={TeleportToSignUp}
                className={classes.button_container_signup__button}
              >
                Sign up
              </button>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Menu;
