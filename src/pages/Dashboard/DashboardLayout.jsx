import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-tr from-[#f3f4f6] to-[#e5e7eb] lg:mt-[87px] mt-20">
            {/* Sidebar */}
            <aside className="w-full md:w-72 bg-white p-6 shadow-2xl rounded-r-2xl border-r border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-amber-400">
                    Dashboard
                </h2>
                <nav className="flex flex-col space-y-3">
                    <Link
                        to="/dashboard"
                        className="text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium text-gray-700 bg-white hover:bg-yellow-100 shadow-sm"
                    >
                        🏠 Overview
                    </Link>
                    <Link
                        to="/dashboard/myapplications"
                        className="text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium text-gray-700 bg-white hover:bg-yellow-100 shadow-sm"
                    >
                        📄 My Applications
                    </Link>
                    <Link
                        to="/dashboard/my-added-visas"
                        className="text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium text-gray-700 bg-white hover:bg-yellow-100 shadow-sm"
                    >
                        🧾 My Added Visas
                    </Link>
                    <Link
                        to="/dashboard/profile"
                        className="text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium text-gray-700 bg-white hover:bg-yellow-100 shadow-sm"
                    >
                        👤 Profile
                    </Link>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 bg-white rounded-l-2xl shadow-inner">
                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
