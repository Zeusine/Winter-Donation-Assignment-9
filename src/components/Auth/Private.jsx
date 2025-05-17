import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const Private = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if (loading){
        return <Loading></Loading>
    }
    
    if (user){
        return children
    }
    return <Navigate to={"/login"} state={location.pathname}></Navigate>
    
    
};

export default Private;