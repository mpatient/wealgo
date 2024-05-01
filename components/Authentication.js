// authentication.js

import React, { createContext, useState, useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut as firebaseSignOut} from '@firebase/auth';
import { initializeApp } from '@firebase/app';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDSPnbx_SnZqQ1M-E0RAV46LC9G5XASHus",
    authDomain: "weal-go.firebaseapp.com",
    projectId: "weal-go",
    storageBucket: "weal-go.appspot.com",
    messagingSenderId: "636084120715",
    appId: "1:636084120715:web:5b865b847ebb7df53c788e",
    measurementId: "G-L5SSL6CSFW",
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Create AuthContext
const AuthContext = createContext();

// AuthProvider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const signOut = async () => {
    try {
      await firebaseSignOut(auth); // Use the signOut function from @firebase/auth
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// useAuth Hook
export const useAuth = () => {
  return useContext(AuthContext);
};
