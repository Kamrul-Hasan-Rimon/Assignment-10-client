import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <div className="bg-gradient-to-r from-red-500 to-purple-600 text-white py-16 px-6 text-center rounded-lg shadow-xl">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg mb-8">
                With Visa Navigator, applying for visas has never been easier. Join thousands of users in over 80 countries and make your travel dreams a reality.
            </p>
            <Link
                to="/allvisas"
                className="bg-white text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105"
            >
                Get Started Now
            </Link>
        </div>
    );
};

export default CTA;
