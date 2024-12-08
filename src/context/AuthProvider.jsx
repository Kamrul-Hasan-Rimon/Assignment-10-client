import React, { createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { auth } from "../firebase/firebase.config.js";
import toast from "react-hot-toast";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

    });
    return unsubscribe();
  }, []);

  // Login function
  const login = (email, password) => {
    toast.success("Login successful!");
    return signInWithEmailAndPassword(auth, email, password);


  };

  // Register function
  const register = (name, email, password, photoUrl) => {

    const userCredential = createUserWithEmailAndPassword(auth, name, photoUrl, email, password);
    userCredential.user.updateProfile({ displayName: name, photoUrl });
    toast.success("Registration successful!");

  };

  // Google Authentication
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    toast.success("Google login successful!");
    return signInWithPopup(auth, provider);


  };

  // Logout function
  const logout = () => {
    toast.success("Logout successful!");
    return signOut(auth);

  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
