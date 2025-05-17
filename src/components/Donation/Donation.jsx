import React, { useContext } from 'react';
import Navbar from '../Others/Navbar';
import { AuthContext } from '../Auth/AuthProvider';
import DonationCard from './DonationCard';

const Donation = () => {
    const {data} = useContext(AuthContext)
    return (
        <div>
            
            <div>
                <h1 className='text-center text-4xl font-bold mt-10'>Donation</h1>
                <div>
                    {
                        data.map((oneData,idx) => <DonationCard key={idx} dat = {oneData}></DonationCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Donation;