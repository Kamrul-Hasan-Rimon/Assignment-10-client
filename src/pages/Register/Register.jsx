import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { register, googleLogin, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }
    try {
      const result = await register(name, email, password, photoUrl);
      console.log("User registered:", result);
      navigate("/");
    } catch (error) {
      // Handle error
      console.error("Error during registration:", error);
      toast.error("Registration failed!");
    }
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        toast.success("Google login successful!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error.message);
        toast.error(error.message);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="photoUrl" className="block text-gray-700 font-semibold mb-2">
              Photo URL
            </label>
            <input
              type="url"
              name="photoUrl"
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-500"
              placeholder="Enter your photo URL"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity font-semibold text-lg mb-4"
          >
            Register
          </button>
        </form>
        <div className="text-center mb-4">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline font-semibold">
              Login
            </Link>
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-400 text-white py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity font-semibold text-lg"
          >
            <FaGoogle className="mr-2" />
            Continue with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
