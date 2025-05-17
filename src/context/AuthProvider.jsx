import React, { createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../firebase/firebase.config.js";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // Enhanced error handler
  const handleError = (error, defaultMessage) => {
    const errorMessage = error.message || defaultMessage;
    return errorMessage;
  };

  // Show loading state with configurable title
  const showLoading = (title = 'Processing...') => {
    Swal.fire({
      title,
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });
  };

  // Close any active SweetAlert
  const closeAlerts = () => Swal.close();

  // Initialize auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Email/password login
  const login = async (email, password) => {
    showLoading('Signing in...');
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);

      setUser(result.user);
      closeAlerts();
      Swal.fire({
        icon: 'success',
        title: 'Login Successful!',
        timer: 1500,
        showConfirmButton: false
      });
      return result;
    } catch (error) {
      closeAlerts();
      const message = handleError(error, 'Failed to login. Please try again.');
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: message,
        confirmButtonColor: '#3085d6',
      });
      throw error;
    }
  };

  // User registration
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

    if (password.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Weak Password',
        text: 'Password must be at least 6 characters',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    showLoading('Creating account...');
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const user = result.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photoUrl,
      });


      setUser({ ...user, photoURL: photoUrl });
      closeAlerts();
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        html: `We've sent a verification email to <strong>${email}</strong>. Please check your inbox.`,
        confirmButtonColor: '#3085d6',
      });
      return result;
    } catch (error) {
      closeAlerts();
      const message = handleError(error, 'Failed to create account. Please try again.');
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: message,
        confirmButtonColor: '#3085d6',
      });
      throw error;
    }
  };


  // Password reset
  const sendPasswordReset = async (email) => {
    showLoading('Sending reset email...');
    try {
      await sendPasswordResetEmail(auth, email);
      closeAlerts();
      Swal.fire({
        icon: 'success',
        title: 'Password Reset Sent!',
        text: `Instructions to reset your password have been sent to ${email}`,
        confirmButtonColor: '#3085d6',
      });
      return true;
    } catch (error) {
      closeAlerts();
      const message = handleError(error, 'Failed to send password reset email');
      Swal.fire({
        icon: 'error',
        title: 'Password Reset Failed',
        text: message,
        confirmButtonColor: '#3085d6',
      });
      return false;
    }
  };

  // Google login
  const googleLogin = async () => {
    showLoading('Connecting with Google...');
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      closeAlerts();
      Swal.fire({
        icon: 'success',
        title: 'Google Login Successful!',
        timer: 1500,
        showConfirmButton: false
      });
      return result;
    } catch (error) {
      closeAlerts();
      const message = handleError(error, 'Failed to login with Google. Please try again.');
      Swal.fire({
        icon: 'error',
        title: 'Google Login Failed',
        text: message,
        confirmButtonColor: '#3085d6',
      });
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    showLoading('Logging out...');
    try {
      await signOut(auth);
      setUser(null);
      closeAlerts();
      Swal.fire({
        icon: 'success',
        title: 'Logged Out',
        text: 'You have been logged out successfully',
        timer: 1500,
        showConfirmButton: false
      });
    } catch (error) {
      closeAlerts();
      const message = handleError(error, 'Failed to logout. Please try again.');
      Swal.fire({
        icon: 'error',
        title: 'Logout Failed',
        text: message,
        confirmButtonColor: '#3085d6',
      });
      throw error;
    }
  };

  // Update user profile
  const updateUserProfile = async (updates) => {
    showLoading('Updating profile...');
    try {
      await updateProfile(auth.currentUser, updates);
      setUser({ ...auth.currentUser, ...updates });
      closeAlerts();
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated!',
        timer: 1500,
        showConfirmButton: false
      });
      return true;
    } catch (error) {
      closeAlerts();
      const message = handleError(error, 'Failed to update profile. Please try again.');
      Swal.fire({
        icon: 'error',
        title: 'Update Failed',
        text: message,
        confirmButtonColor: '#3085d6',
      });
      return false;
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
      logout,
      sendPasswordReset,
      updateUserProfile
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;