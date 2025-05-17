import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

const Registration = () => {
    const {signUpUser} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        // const name = form.name.value;
        // const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        
        signUpUser(email, password)
        .then((result) => {
            console.log(result.user);
            
        })
        .catch((err) => {
            console.log(err.message);
            
        })


        

    }

    return (
        <div className='flex flex-col'>
            <div className="hero bg-base-200 ">
                <div className="hero-content flex-col w-3/6">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-10">Sign Up now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input 
                                    name='name'
                                    type="text" className="input" placeholder="Name" />
                                    <label 
                                    className="label">Photo URL</label>
                                    <input 
                                    name='url'
                                    type="text" className="input" placeholder="Photo URL" />
                                    <label className="label">Email</label>
                                    <input 
                                    name='email'
                                    type="email" className="input" placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input
                                    name='password'
                                    type="password" className="input" placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn bg-[#1a675a] border-0 shadow-none text-white hover:bg-[#0c493e]">Sign Up</button>
                                </fieldset>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
            <div className="h-30 bg-base-200 ">

            </div>
        </div>
    );
};

export default Registration;