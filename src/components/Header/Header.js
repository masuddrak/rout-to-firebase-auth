import { getAuth,signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebasse.init';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'
const auth = getAuth(app);
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/order'>Order</Link>
            <Link to='/register'>Register</Link>
            <span>{user?.displayName && user.displayName}</span>
            {
             user?.uid? <Link onClick={()=>signOut(auth)} to='/'>Sing Out</Link>:   
            <Link to='/login'>Login</Link>
            }
        </nav>
    );
};

export default Header;