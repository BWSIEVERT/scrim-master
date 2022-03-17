import React from 'react';
import classes from '../styles/ToggleTheme.module.css'
import {
    BsFillLightningChargeFill
} from 'react-icons/bs'

const ToggleTheme = () => {
    let clickedClass = 'clicked';
    const body = document.body;
    const lightTheme = 'light';
    const darkTheme = 'dark';
    let theme;

    if (localStorage) {
        theme = localStorage.getItem('theme');
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme);
    } else {
        body.classList.add(lightTheme)
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem('theme', 'light')
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem('theme', 'dark');
            theme = darkTheme;
        }
    }

    return (
        <BsFillLightningChargeFill
            className={theme === 'dark' ? clickedClass: ''}
            id={classes['toggle_theme_icon']}
            onClick={(e) => {
                switchTheme(e)
            }}
        />
    )

}

export default ToggleTheme;