import React from 'react';
import Mission from './Mission';
import backgroundab from "../../assets/about-bg.jpeg"
import Contribute from './Contribute';
import HowItWorks from './HowItWorks';

const About = () => {
    return (
        <div  >
            <div  style={{backgroundImage: `url(${backgroundab})`}}><Mission></Mission></div>
            <div>
                <Contribute></Contribute>
            </div>
            <div className='bg-gray-100'>
                <HowItWorks></HowItWorks>
            </div>
        </div>
    );
};

export default About;