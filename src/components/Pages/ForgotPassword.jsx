import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Bounce, toast, ToastContainer } from 'react-toastify';

const ForgotPassword = () => {
    const { passwordReset } = useContext(AuthContext)

    const handlePasswordReset = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        passwordReset(email)
            .then(() => {
                e.target.email.value = ""
                toast.success('Email Sent On Your Account', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            })
            .catch((err) => {
                console.log(err);
                
            })


    }
    return (
        <div className='py-50 flex items-center justify-center '>
            <ToastContainer></ToastContainer>
            <div className='space-y-3'>
                <h1>Password Reset email will be sent on</h1>
                <form className='space-y-3' onSubmit={handlePasswordReset}>
                    <input type="email" placeholder="Your Email" name='email' className="input" />
                    <button className='btn bg-[#1b6659] text-white w-full'>Update</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;