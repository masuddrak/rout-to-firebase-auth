import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebasse.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle, use] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handelSignInWithGoogle=()=>{
        signInWithGoogle()
        .then(()=>{
            navigate(from, { replace: true });
        })
    }
    return (
        <div>
            <h4>please Login</h4>
            <div >
                <button onClick={() => handelSignInWithGoogle()}>google sign-in</button>
            </div>
            <form >
                <input type="Email" placeholder='Email' />
                <br></br>
                <input type="password" name="" id="" placeholder='Password' />
                <br></br>
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Login;