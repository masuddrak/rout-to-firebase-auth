import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from '../firebasse.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({})

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user)
            })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            setUser(user)
        })
    },[])
    const handelSingOut=()=>{
        signOut(auth).then(() => {
            console.log('sigout')
          })
    }

    
    return { user, signInWithGoogle,handelSingOut }
};

export default useFirebase;