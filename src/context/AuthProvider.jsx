import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from "../firebase/firebase.config.js";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const showLoading = () => {
    Swal.fire({
      title: 'Processing...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });
  };

  const login = async (email, password) => {
    showLoading();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        timer: 1500,
        showConfirmButton: false
      });
      return result;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message || 'Failed to login. Please try again.',
        confirmButtonColor: '#3085d6',
      });
      throw error;
    }
  };

  const register = async (name, email, password, photoUrl) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    showLoading();
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;

      if (user) {
        await updateProfile(user, {
          displayName: name,
          photoURL: photoUrl,
        });

        setUser({ ...user, photoURL: photoUrl });
        Swal.fire({
          icon: 'success',
          title: 'Registration Successful!',
          text: 'Your account has been created',
          timer: 2000,
          showConfirmButton: false
        });
      }
      return result;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.message || 'Failed to create account. Please try again.',
        confirmButtonColor: '#3085d6',
      });
      throw error;
    }
  };

  const googleLogin = async () => {
    showLoading();
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      Swal.fire({
        icon: 'success',
        title: 'Google Login Successful!',
        timer: 1500,
        showConfirmButton: false
      });
      return result;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Google Login Failed',
        text: error.message || 'Failed to login with Google. Please try again.',
        confirmButtonColor: '#3085d6',
      });
      throw error;
    }
  };

  const logout = async () => {
    showLoading();
    try {
      await signOut(auth);
      setUser(null);
      Swal.fire({
        icon: 'success',
        title: 'Logged Out',
        text: 'You have been logged out successfully',
        timer: 1500,
        showConfirmButton: false
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Logout Failed',
        text: error.message || 'Failed to logout. Please try again.',
        confirmButtonColor: '#3085d6',
      });
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      setUser,
      loading,
      login,
      register,
      googleLogin,
      logout
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;