import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {app} from '../firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const LogIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (name, photo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        });
    }

    const LogOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('Current User: ', currentUser);
            setLoading(false)
            if(currentUser){
                const loggedUser ={
                    email: currentUser.email
                }
                // console.log(loggedUser);
                fetch('http://localhost:5000/jwt',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(res=> res.json())
                .then(data=>{
                    // console.log('JWT response:', data);
                    localStorage.setItem('access-token', data.token);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    

    const authInfo = {
        user,
        loading,
        createUser,
        LogIn,
        googleSignIn,
        updateUserProfile,
        LogOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;