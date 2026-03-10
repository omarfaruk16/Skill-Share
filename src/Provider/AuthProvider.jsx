import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.confiq';

const auth = getAuth(app);
const provider = new GoogleAuthProvider()
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    const SignupEmailPass = ( email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
}
    const SignInEmailPass = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const UpdateProfile = ( updateData ) => {
        return updateProfile(auth.currentUser, updateData)
    }

    const PasswordReset =(email)=>{
        return sendPasswordResetEmail( auth, email)
    }
    const SignOut = () =>{
        return signOut(auth)
    }
    const SignInwithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setLoading(false);
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe();
        }
    })

    const authData = {
        SignupEmailPass,
        SignInEmailPass,
        UpdateProfile,
        PasswordReset,
        SignOut,
        SignInwithGoogle,
        user,
        setUser,
        loading
    }

  return (
    <AuthContext value={authData}>{children}</AuthContext>
  )
}

export default AuthProvider