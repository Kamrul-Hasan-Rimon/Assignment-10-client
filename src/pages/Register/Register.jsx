import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setError("Password must contain at least 6 characters, including an uppercase letter, a lowercase letter, and a number.");
      return;
    }

    // Mock register logic (replace with real logic)
    if (email === "test@example.com") {
      toast.error("Email already exists.");
    } else {
      toast.success("Registered successfully!");
      navigate("/home"); // Redirect to Home or desired route
    }
  };

  const handleGoogleLogin = () => {
    // Mock Google login functionality
    toast.success("Logged in with Google!");
    navigate("/home"); // Redirect after Google login
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              id="photoUrl"
              value={photoUrl}
              onChange={(e) => setPhotoUrl(e.target.value)}
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
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
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
            <button
              onClick={() => navigate("/login")}
              className="text-blue-500 hover:underline font-semibold"
            >
              Login
            </button>
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
