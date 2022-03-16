import React from 'react'
import classes from '../styles/Navigation.module.css'
import ToggleTheme from '../components/ToggleTheme'
import {
    FiMenu
} from 'react-icons/fi'
import Logo from '../images/scrimaster-logo-white.png'

function Navigation() {
    return (
        <>
        <nav className={classes.navigation_container}>
            <div className={classes.navigation_container__logo}>
                <img id={classes['global_logo']} src={Logo} alt='scrimaster logo' />
            </div> 
            <div className={classes.navigation_container__buttons}>
                <div className={classes.navigation_container__buttons_theme}>
                    <ToggleTheme  />
                </div>
                <div className={classes.navigation_container__buttons_menu}>
                    <FiMenu id={classes['toggle_menu_icon']}/>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navigation;