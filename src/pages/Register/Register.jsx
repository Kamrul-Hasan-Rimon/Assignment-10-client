import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { register, googleLogin, setUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Validate password
    if (!validatePassword(password)) {
      toast.error(
        "Password must contain at least 6 characters, including uppercase, lowercase, and a number."
      );
      return;
    }

    // Call register method
    register(name, photoUrl, email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        toast.success("Registration successful!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error.message);
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        setUser(result.user)
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
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
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
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
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
            <label
              htmlFor="photoUrl"
              className="block text-gray-700 font-semibold mb-2"
            >
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
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
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
            <Link
              to="/login"
              className="text-blue-500 hover:underline font-semibold"
            >
              Login
            </Link>
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-green-400 text-white py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity font-semibold text-lg"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
              alt="Google"
              className="w-6 h-6 mr-3"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Register;
