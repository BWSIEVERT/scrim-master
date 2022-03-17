import React, {useState} from 'react'
import classes from '../styles/Navigation.module.css'
import ToggleTheme from '../components/ToggleTheme'
import {
    FiMenu
} from 'react-icons/fi'
import {
    CgClose
} from 'react-icons/cg'
import Logo from '../images/scrimaster-logo-white.png'
import Burger from '../components/Burger'
import Menu from './Menu'

function Navigation() {

    const [ open, setOpen ] = useState(false);

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
                    <Burger open={open} setOpen={setOpen} />
                    <Menu open={open} setOpen={setOpen} />
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navigation;