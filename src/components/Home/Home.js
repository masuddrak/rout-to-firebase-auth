import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebasse.init';
const auth = getAuth(app);
const Home = () => {
    const [user]=useAuthState(auth)
    return (
        <div>
            <h2>user ifo</h2>
            <h3>{user?.displayName}</h3>
            <h3>{user?.email}</h3>
        </div>
    );
};

export default Home;