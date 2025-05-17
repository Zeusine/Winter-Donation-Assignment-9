import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    const {photoURL, displayName, email} = user
    
    return (
        <div className='flex justify-center items-center  h-140'>
            <div className="card card-side bg-base-100 w-3xl shadow-sm flex flex-col justify-center items-center ">
                <figure className='rounded-full w-40'>
                    <img 
                        src={photoURL}
                        alt="Movie" />
                </figure>
                <div className="card-body  items-center">
                    <h2 className="card-title ">Welcome, {displayName}</h2>
                    <p>Name: {displayName}</p>
                    <p>Email: {email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn bg-[#1b6659] text-white">Update Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;