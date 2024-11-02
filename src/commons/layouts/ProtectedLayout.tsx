import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAppContext } from '../../context';

function ProtectedLayout() {
  console.log('✔ Protected Route loaded')
    const {isLoggedIn,loading} = useAppContext();
    console.log('Protected isLoggedIn::',isLoggedIn)
    if(loading){
        return (
            <div>Loading...</div>
        )
    }
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedLayout