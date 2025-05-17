import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-700 text-white py-20 shadow-2xl">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between gap-16">
                        <div className="w-full sm:w-1/3 text-center sm:text-left">
                            <h1 className="text-5xl font-extrabold text-white mb-4 tracking-wide">
                                Visa Navigator
                            </h1>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                Visa Navigator offers a seamless visa application process, ensuring that your journey is as smooth as possible. Your visa, your way.
                            </p>
                            <div className="flex justify-center sm:justify-start gap-8 text-2xl">
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-pink-500 transition-colors"
                                    aria-label="Facebook"
                                >
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-pink-500 transition-colors"
                                    aria-label="Twitter"
                                >
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-pink-500 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-pink-500 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/3 text-center sm:text-left">
                            <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
                            <ul className="space-y-4 text-lg text-gray-300">
                                <li>
                                    <a
                                        href="/about"
                                        className="hover:text-pink-500 transition-colors duration-300"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/services"
                                        className="hover:text-pink-500 transition-colors duration-300"
                                    >
                                        Our Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/contact"
                                        className="hover:text-pink-500 transition-colors duration-300"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/privacy-policy"
                                        className="hover:text-pink-500 transition-colors duration-300"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full sm:w-1/3 text-center sm:text-left">
                            <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
                            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                                Sign up for our newsletter to receive the latest visa information and offers straight to your inbox. Stay ahead of your journey.
                            </p>
                            <form className="flex items-center bg-gray-800 rounded-full py-3 px-6 shadow-lg transition-all duration-500 hover:scale-105">
                                <input
                                    type="email"
                                    className="flex-grow bg-gray-800 text-white outline-none pl-6 rounded-full"
                                    placeholder="Your Email Address"
                                />

                            </form>
                            <button className=" bg-gradient-to-r from-pink-500 to-red-600 text-white py-2 px-6 rounded-full mt-5 hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-700 transition-all duration-300">
                                    Subscribe
                                </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-600 mt-12 pt-6 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Visa Navigator. All rights reserved. Designed with 💖 by <span className="text-pink-500">Your Team</span>.</p>
                </div>
            </footer>


        </div>
    )
}
