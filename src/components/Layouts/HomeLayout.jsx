import React, { useEffect } from 'react';
import Navbar from '../Others/Navbar';
import Footer from '../Others/Footer';
import { Outlet } from 'react-router';
import Aos from 'aos';
import "aos/dist/aos.css"



const HomeLayout = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        })
    },[])
    return (
        <div className='overflow-x-hidden'>
            <Navbar ></Navbar>
            
            <Outlet></Outlet>
            
            <Footer></Footer>
            
        </div>
    );
};

export default HomeLayout;