import { useSelector } from 'react-redux';
import {Outlet } from 'react-router-dom'
import AuthPage from './../pages/AuthPage';



function RequireAuth (){

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return isLoggedIn ? <Outlet/> : <AuthPage/>
}

export default RequireAuth;

