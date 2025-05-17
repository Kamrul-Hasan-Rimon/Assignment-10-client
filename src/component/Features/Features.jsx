// Features.js
import React from "react";
import { FaGlobe, FaLock, FaClock, FaUsers } from "react-icons/fa";

export default function Features() {
    const features = [
        {
            icon: <FaGlobe className="text-4xl text-red-500" />,
            title: "Worldwide Coverage",
            desc: "Visa support for over 100+ countries, with dedicated country-specific help."
        },
        {
            icon: <FaLock className="text-4xl text-purple-500" />,
            title: "Secure & Reliable",
            desc: "Bank-grade encryption and strict data policies to protect your information."
        },
        {
            icon: <FaClock className="text-4xl text-yellow-500" />,
            title: "Faster Processing",
            desc: "Smart routing and real-time updates to speed up visa approvals."
        },
        {
            icon: <FaUsers className="text-4xl text-blue-500" />,
            title: "Expert Support",
            desc: "24/7 human assistance with immigration specialists at your service."
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-6xl mx-auto text-center px-4">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-12">Why Choose Visa Navigator?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition duration-300">
                            <div className="mb-4 flex justify-center">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}