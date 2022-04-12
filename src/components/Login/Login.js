import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebasse.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle, use] = useSignInWithGoogle(auth);
    return (
        <div>
            <h4>please Login</h4>
            <div >
                <button onClick={()=>signInWithGoogle()}>google sign-in</button>
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