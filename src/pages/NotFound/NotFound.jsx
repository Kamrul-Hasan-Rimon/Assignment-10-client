import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 via-white to-gray-50">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-4">Oops! The page you are looking for does not exist.</p>
            <Link
                to="/"
                className="mt-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
