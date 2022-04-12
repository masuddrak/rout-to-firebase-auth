import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle}=useFirebase()
    return (
        <div>
            <h4>please Login</h4>
            <div >
                <button onClick={signInWithGoogle}>google sign-in</button>
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