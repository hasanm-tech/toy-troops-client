import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Component/firebase/firebase.config';


export const AuthContext = createContext()

const auth = getAuth(app)
const provider = new GoogleAuthProvider();


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

    const updateUser = (user,name,photo) => {
        updateProfile(user,{
            displayName: name,
            photoURL: photo,
        })
    }

    const userLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth,provider)
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
        userSignIn,
        updateUser,
        userLogOut,
        googleSignIn,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;