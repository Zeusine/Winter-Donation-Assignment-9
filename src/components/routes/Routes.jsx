import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import Donation from '../Donation/Donation';
import Home from '../Layouts/Home';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';
import DonationDetails from '../Donation/DonationDetails';
import Private from '../Auth/Private';
import Dashboard from '../Others/Dashboard';
import ForgotPassword from '../Pages/ForgotPassword';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children:[
            {
                path:"/",
                element: <Home></Home>
            },
            {
                path: "/donationCampaign",
                element: <Donation></Donation>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Registration></Registration>
            },
            {
                path:"/donation/:id",
                element: <Private><DonationDetails></DonationDetails></Private>
            },
            {
                path:"/dashboard",
                element: <Private><Dashboard></Dashboard></Private>
            },
            {
                path:"/passwordReset",
                element: <ForgotPassword></ForgotPassword>
            },


        ]
    },
    {
        path: "*",
        element: <h1>Error</h1>
    }
    
])




export default routes