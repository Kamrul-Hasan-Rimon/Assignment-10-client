import React, { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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

    return () => unsubscribe(); // Ensure unsubscribe is called correctly
  }, []);

  // Login function
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        toast.success("Login successful!");
        setUser(result.user);
        return result;
      })
      .catch((error) => {
        console.error("Login Error:", error.message);
        toast.error(error.message);
      });
  };

  // Register function
  const register = (name, email, password, photoUrl) => {
    // Validate email before calling Firebase (simple regex for email format)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format!");
      return;
    }
  
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          updateProfile(user, {
            displayName: name,
            photoURL: photoUrl,
          })
            .then(() => {
              setUser({ ...user, photoURL: photoUrl });
              toast.success("Registration successful!");
            })
            .catch((error) => {
              console.error("Error updating profile:", error.message);
              toast.error(error.message);
            });
        } else {
          toast.error("Registration failed, no user data received.");
        }
  
        return result;
      })
      .catch((error) => {
        console.error("Registration Error:", error.message);
        toast.error(error.message);
      });
  };
  
  // Google Authentication
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google login successful!");
        return result;
      })
      .catch((error) => {
        console.error("Google Login Error:", error.message);
        toast.error(error.message);
      });
  };

  // Logout function
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Logout successful!");
      })
      .catch((error) => {
        console.error("Logout Error:", error.message);
        toast.error(error.message);
      });
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
