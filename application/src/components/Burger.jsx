import React from 'react';

import classes from '../styles/Burger.module.css';

import { FiMenu } from "react-icons/fi";
import { CgClose } from 'react-icons/cg'

const Burger = ({open, setOpen}) => {
    return (
        <div open={open} onClick={() => setOpen(!open)}>
            <FiMenu id={classes['toggle_menu_icon']} />
        </div>
    )
}

export default Burger;