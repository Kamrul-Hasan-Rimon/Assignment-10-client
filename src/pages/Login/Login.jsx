
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();



    const handleLogin = (e) => {
        e.preventDefault();
        const password = e.target.password.value
        const email = e.target.email.value
        if (email === "test@example.com" && password === "password123") {
            toast.success("Logged in successfully!");
            navigate("/home");
        } else {
            toast.error("Login failed!");
        }
    };

    const handleGoogleLogin = () => {
        // Mock Google login functionality
        toast.success("Logged in with Google!");
        navigate("/home"); // Redirect after Google login
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200">
            <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
                    Login
                </h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 font-semibold mb-2"
                        >
                            Email
                        </label>
                        <input
                            name="email"
                            required
                            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-500"
                            placeholder="Enter your email"
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
                            name="password"
                            required
                            className="w-full px-4 py-3 border rounded-lg shadow-sm focus:ring focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <Link
                            to={'/resetpassword'}
                            className="text-blue-500 hover:underline font-semibold"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                  
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity font-semibold text-lg mb-4"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mb-4">
                    <p className="text-gray-600">
                        Don't have an account?{" "}
                        <Link
                            to={"/register"}
                            className="text-blue-500 hover:underline font-semibold"
                        >
                            Register
                        </Link>
                    </p>
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center gap-2 justify-center bg-gradient-to-r from-blue-500 to-green-400 text-white py-3 rounded-lg shadow-lg hover:opacity-90 transition-opacity font-semibold text-lg"
                    >
                        <FcGoogle />
                        <p>Continue with Google</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
