import React, { createContext, useState, useEffect } from "react";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";

import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  // Monitor authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

    });
    return  unsubscribe();
  }, []);

  // Login function
  const login =  (email, password) => {

       signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successful!");

  };

  // Register function
  const register =  (name, email, password, photoURL) => {

      const userCredential =  createUserWithEmailAndPassword(auth, email, password);
       userCredential.user.updateProfile({ displayName: name, photoURL });
      toast.success("Registration successful!");
   
  };

  // Google Authentication
  const googleLogin =  () => {
    const provider = new GoogleAuthProvider();

       signInWithPopup(auth, provider);
      toast.success("Google login successful!");

  };

  // Logout function
  const logout =  () => {
       signOut(auth);
      toast.success("Logout successful!");
}

  return (
    <AuthContext.Provider value={{ user, login, register, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
