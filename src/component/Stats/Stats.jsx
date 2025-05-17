import React from "react";
import { FaUserCheck, FaGlobeAsia, FaFileAlt, FaStar } from "react-icons/fa";

const Stats = () => {
    return (
        <div className="bg-gradient-to-r from-purple-100 via-white to-red-100 py-16 px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Global Impact</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="flex flex-col items-center">
                    <FaUserCheck className="text-5xl text-red-500 mb-2" />
                    <p className="text-3xl font-semibold">25K+</p>
                    <p className="text-gray-700">Happy Users</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaGlobeAsia className="text-5xl text-purple-500 mb-2" />
                    <p className="text-3xl font-semibold">80+</p>
                    <p className="text-gray-700">Countries Supported</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaFileAlt className="text-5xl text-yellow-500 mb-2" />
                    <p className="text-3xl font-semibold">50K+</p>
                    <p className="text-gray-700">Applications Processed</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaStar className="text-5xl text-green-500 mb-2" />
                    <p className="text-3xl font-semibold">4.9/5</p>
                    <p className="text-gray-700">User Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
