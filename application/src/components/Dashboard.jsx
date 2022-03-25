import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation'
import classes from '../styles/Dashboard.module.css'

function Dashboard() {

    const fetchUserData = async () => {
        try {
            // Create environment variable for url in .env.
            const url = 'http://localhost:8080/api/auth/fetchUser';

            const userEmail = localStorage.getItem('ACC_EMAIL');

            // Axios POST request to fetch user data.
            const { data: res } = await axios.post(url, {email: userEmail});
            // Set Activision Id for later use with call-of-duty-api
            localStorage.setItem('ACTIVISION_ID', res.activisionId)
        
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    

    return (
        <>
        <Navigation />
        <div className={classes.dashboard_container}>

        </div>
        </>
    )
}

export default Dashboard;