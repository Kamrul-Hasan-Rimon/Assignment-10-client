import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaPassport, FaUserPlus, FaSignInAlt, FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";
import { IoHomeSharp } from "react-icons/io5";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);

  return (
    <div className="navbar bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg px-6 py-4">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-extrabold flex items-center gap-2">
          <FaPassport />
          <span>Visa Navigator</span>
        </Link>
      </div>
      <div className="flex-none">
        {/* Dropdown for Mobile */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 right-2 p-2 shadow bg-white text-gray-800 rounded-box w-52"
          >
            <li>
              <Link to="/" className="hover:text-red-600">
                <IoHomeSharp /> Home
              </Link>
            </li>
            <li>
              <Link to="/allvisas" className="hover:text-red-600">
                <FaClipboardList /> All Visas
              </Link>
            </li>
            <li>
              <Link to="/addvisa" className="hover:text-red-600">
                <FaPassport /> Add Visa
              </Link>
            </li>
            <li>
              <Link to="/my-added-visas" className="hover:text-red-600">
                My Added Visas
              </Link>
            </li>
            <li>
              <Link to="/myapplications" className="hover:text-red-600">
                My Visa Applications
              </Link>
            </li>


            {user && user?.email ? (
              <>
                <li>
                  <div className="flex items-center gap-2">
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
                  </div>
                </li>
                <li>
                  <button
                    onClick={logout}
                    className="hover:text-red-600 flex items-center gap-2"
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="hover:text-red-600">
                    <FaSignInAlt /> Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="hover:text-red-600">
                    <FaUserPlus /> Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Desktop Menu */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex items-center gap-6">
          <li>
            <Link to="/" className="hover:text-red-600">
              <IoHomeSharp /> Home
            </Link>
          </li>
          <li>
            <Link to="/allvisas" className="flex items-center gap-2 hover:text-yellow-400">
              <FaClipboardList /> All Visas
            </Link>
          </li>
          <li>
            <Link
              to="/addvisa"
              className="flex items-center gap-2 hover:text-yellow-400"
            >
              <FaPassport /> Add Visa
            </Link>
          </li>
          <li>
            <Link
              to="/my-added-visas"
              className="flex items-center gap-2 hover:text-yellow-400"
            >
              My Added Visas
            </Link>
          </li>
          <li>
            <Link
              to="/myapplications"
              className="flex items-center gap-2 hover:text-yellow-400"
            >
              My Visa Applications
            </Link>
          </li>

          {user && user?.email ? (
            <>
              <li>
                <div className="flex items-center gap-2">
                  <div
                    className="tooltip tooltip-bottom"
                    data-tip={user.displayName}
                  >
                    <img
                      src={user.photoURL}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  </div>
                </div>
              </li>
              <li>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
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
