import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState([])
    const [loading, setLoading] = useState([])

    const createUser = (email,pass) => {
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const userSignIn = (email,pass) => {
        setLoading(true)
        return (signInWithEmailAndPassword(auth,email,pass))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log({currentUser})
            setLoading(false)
        })
        return () => {
            return unsubscribe;
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        userSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;