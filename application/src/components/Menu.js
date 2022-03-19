import React from 'react';

import classes from '../styles/Menu.module.css';

import { CgClose } from 'react-icons/cg'

import { Link } from 'react-router-dom';

const Menu = ({open, setOpen}) => {

    const TeleportToSignIn = () => {
        window.location.href = '/signin';
    };
    const TeleportToSignUp = () => {
        window.location.href = '/signup';
    };

    return (
        <nav className={open ? classes.navOpen : classes.navClosed} open={open}>
            <div className={classes.icon_container}>
                <CgClose open={open} onClick={() => setOpen(!open)} id={classes['toggle_close_icon']} />   
            </div>
            <div className={classes.links_container}>
                <a className={classes.links_container__links} href='/'>Home</a>
                <a className={classes.links_container__links} href='/'>Patch Notes</a>
                <a className={classes.links_container__links} href='/'>Resources</a>
            </div>
            <div className={classes.button_container_signin}>
                <Link to='/signin' style={{textDecoration: 'none'}}>
                <button onClick={TeleportToSignIn} className={classes.button_container_signin__button}>
                    Sign in
                </button>
                </Link>
            </div>
            <div className={classes.spacer_container}>
                <p className={classes.spacer_container__spacer}>
                    or
                </p>
            </div>
            <div className={classes.button_container_signup}>
                <button onClick={TeleportToSignUp} className={classes.button_container_signup__button}>
                    Sign up
                </button>
            </div>
            
        </nav>
    )
}

export default Menu;