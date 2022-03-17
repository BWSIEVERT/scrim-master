import React from 'react';

import classes from '../styles/Menu.module.css';

import { CgClose } from 'react-icons/cg'

const Menu = ({open, setOpen}) => {
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
            
            <button className={classes.auth_button}>
                Sign In
            </button>
        </nav>
    )
}

export default Menu;