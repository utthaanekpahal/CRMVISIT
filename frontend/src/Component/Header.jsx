import React from "react";
import {
  FaBell,
  FaSearch,
  FaBars,
  FaSignOutAlt,
  FaUserShield,
} from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        { withCredentials: true }
      );

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-blue-100 shadow-sm">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-20 flex items-center justify-between">

          {/* Left */}
          <div  className="flex items-center gap-4">

            {/* Mobile Menu */}
            <button className="lg:hidden w-11 h-11 rounded-xl bg-[#2142FF] text-white flex items-center justify-center">
              <FaBars />
            </button>

            {/* Logo */}
            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2142FF] to-[#5274ff] flex items-center justify-center shadow-lg shadow-blue-200">
                <MdOutlineSecurity className="text-white text-3xl" />
              </div>

              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#2142FF] leading-none">
                  VisitCRM
                </h2>

                <p className="text-xs text-gray-500">
                  Visitor Management System
                </p>
              </div>

            </div>
          </div>

          {/* Center */}
          <div className="hidden lg:flex items-center gap-8">
             <button
              onClick={() => navigate("/dashboard")}
              className="px-5 py-2.5 rounded-xl bg-[#2142FF] text-white font-semibold hover:bg-blue-700 duration-300"
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/create-subadmin")}
              className="px-5 py-2.5 rounded-xl bg-[#2142FF] text-white font-semibold hover:bg-blue-700 duration-300"
            >
              Create Admin
            </button>

            <button
              onClick={() => navigate("/form")}
              className="px-5 py-2.5 rounded-xl bg-[#2142FF] text-white font-semibold hover:bg-blue-700 duration-300"
            >
              Visitor Form
            </button>

            <button className="px-5 py-2.5 rounded-xl bg-[#2142FF] text-white font-semibold hover:bg-blue-700 duration-300">
              Reports
            </button>

          </div>

          {/* Right */}
          <div className="flex items-center gap-7">

            {/* Notification */}
            <button className="relative w-11 h-11 rounded-xl bg-[#F4F8FF] flex items-center justify-center hover:bg-blue-50">

              <FaBell className="text-[#2142FF]" />

              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

            </button>

            {/* Profile */}
            <div className="hidden sm:flex items-center gap-3 bg-[#F4F8FF] rounded-xl px-3 py-2">

              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2142FF] to-[#4A6DFF] flex items-center justify-center text-white">
                <FaUserShield />
              </div>

              <div>
                <h4 className="font-semibold text-sm">Admin</h4>
                <p className="text-xs text-gray-500">
                  Super Administrator
                </p>
              </div>

            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white rounded-xl px-4 py-2.5 font-semibold transition"
            >
              <FaSignOutAlt />
              <span className="hidden md:block">Logout</span>
            </button>

          </div>

        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden border-t border-gray-100 py-3">

          <div className="grid grid-cols-3 gap-3">

            <button
              onClick={() => navigate("/create-subadmin")}
              className="bg-[#2142FF] text-white rounded-xl py-3 text-sm font-semibold"
            >
              Admin
            </button>

            <button
              onClick={() => navigate("/form")}
              className="bg-[#2142FF] text-white rounded-xl py-3 text-sm font-semibold"
            >
              Form
            </button>

            <button
              className="bg-[#2142FF] text-white rounded-xl py-3 text-sm font-semibold"
            >
              Reports
            </button>

          </div>

        </div>

      </div>
    </header>
  );
};

export default Header;