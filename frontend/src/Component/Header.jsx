import React from 'react'
import {
  FaHome,
  FaMapMarkedAlt,
  FaSitemap,
  FaUserTie,
  FaClipboardCheck,
  FaUsers,
  FaCog,
  FaBell,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
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
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="px-5 lg:px-10 h-24 flex items-center justify-between">
    
        {/* Left */}
        <div className="flex items-center gap-5">
          <button className="lg:hidden w-12 h-12 rounded-xl bg-[#2142FF] text-white flex items-center justify-center">
            <FaBars />
          </button>
    
          <div>
            <h2 className="text-3xl font-semibold text-[#2142FF] leading-tight">
              Dashboard
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Welcome back, Admin
            </p>
          </div>
        </div>
    
        {/* Center Buttons */}
        <div className="flex items-center gap-3">
          <div className="bg-[#F4F8FF] p-2 rounded-xl">
            <button className="bg-[#2142FF] font-bold rounded-xl text-white px-4 py-2 text-sm hover:opacity-90 transition">
              Action
            </button>
          </div>
    
          <div className="bg-[#F4F8FF] p-2 rounded-xl">
            <button   onClick={() => navigate("/form")}
 className="bg-[#2142FF] font-bold rounded-xl text-white px-4 py-2 text-sm hover:opacity-90 transition">
              Form
            </button>
          </div>
           <div className="bg-[#F4F8FF] p-2 rounded-xl">
            <button className="bg-[#2142FF] font-bold rounded-xl text-white px-4 py-2 text-sm hover:opacity-90 transition">
              Report
            </button>
          </div>
          <div className="bg-[#F4F8FF] p-2 rounded-xl">
            <button onClick={() => navigate("/dashboard")} className="bg-[#2142FF] font-bold rounded-xl text-white px-4 py-2 text-sm hover:opacity-90 transition">
              Dashboard
            </button>
          </div>
          
        </div>

    
        {/* Right */}
        <div className="flex items-center gap-5">
    
          {/* Search */}
          <div className="hidden md:flex items-center bg-[#F4F8FF] rounded-2xl px-4 h-12 w-72">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-3 bg-transparent outline-none w-full text-sm"
            />
          </div>
    
          {/* Notification */}
          <button className="relative w-12 h-12 rounded-2xl bg-[#F4F8FF] flex items-center justify-center hover:bg-blue-50 duration-300">
            <FaBell className="text-[#2142FF]" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>
    
          {/* Profile */}
          <div className="flex items-center gap-3 bg-[#F4F8FF] rounded-2xl px-3 py-2">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#2142FF] to-[#4A6DFF] flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
    
            <div className="hidden sm:block leading-tight">
              <h4 className="font-semibold text-gray-700 text-sm">Admin</h4>
              <p className="text-xs text-gray-500">Super Administrator</p>
            </div>
          </div>
           <button
        onClick={handleLogout}
        className="bg-red-500 px-4 py-2 rounded-xl text-white font-bold hover:bg-red-600"
      >
        Logout
      </button>
        </div>
      </div>
    </header>
  )
}

export default Header