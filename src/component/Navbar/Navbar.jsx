import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaPassport,
  FaUserPlus,
  FaSignInAlt,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          <IoHomeSharp /> Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allvisas"
          className={({ isActive }) =>
            isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
          }
        >
          <FaClipboardList /> All Visas
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addvisa"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
              }
            >
              <FaPassport /> Add Visa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-added-visas"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
              }
            >
              My Added Visas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myapplications"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"
              }
            >
              My Visa Applications
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar fixed top-0 left-0 z-50 bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-md px-4 lg:px-8 py-4 min-h-[64px]">
      {/* Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight flex items-center gap-2"
        >
          <FaPassport />
          <span>Visa Navigator</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 items-center">
        <ul className="menu menu-horizontal items-center gap-4">{menuItems}</ul>

        {user?.email ? (
          <div className="flex items-center gap-4">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName || "User"}
            >
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            </div>
            <button
              onClick={logout}
              className="btn btn-outline text-white border-white hover:bg-white hover:text-red-600"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/login" className="btn btn-outline text-white border-white hover:bg-white hover:text-red-600">
              <FaSignInAlt /> Login
            </Link>
            <Link to="/register" className="btn btn-outline text-white border-white hover:bg-white hover:text-red-600">
              <FaUserPlus /> Register
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Dropdown */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost" aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-white text-gray-800 rounded-box w-56"
        >
          {menuItems}
          {user?.email ? (
            <>
              <li>
                <div className="flex items-center gap-2">
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-gray-300"
                  />
                  <span className="text-sm font-medium">{user.displayName}</span>
                </div>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="text-left hover:text-red-500"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="hover:text-red-500">
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-red-500">
                  <FaUserPlus /> Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;








