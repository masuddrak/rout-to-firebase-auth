import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'
const Header = () => {
    const {user,handelSingOut}=useFirebase()
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/order'>Order</Link>
            <Link to='/register'>Register</Link>
            <span>{user?.displayName && user.displayName}</span>
            {
             user?.uid? <Link onClick={handelSingOut} to='/'>Sing Out</Link>:   
            <Link to='/login'>Login</Link>
            }
        </nav>
    );
};

export default Header;