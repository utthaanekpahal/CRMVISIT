import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

const Dashboard = () => {
  const navigate = useNavigate();
    console.log("Dashboard Rendered");
const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      console.log("useEffect Running");

    getDashboard();
  }, []);

  const getDashboard = async () => {
    try {
        console.log("Calling Dashboard API");
      const response = await axios.get(
        "http://localhost:5000/api/auth/dashboard",
        {
          withCredentials: true,
        }
      );

      console.log(response.data);

      setUser(response.data.user);
    } catch (error) {
      console.log(error.response?.data);

      alert("Please Login First");

      // Optional
      // window.location.href = "/";
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Loading...
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-[#F4F8FF] flex">

      {/* ========================= */}
      {/* Main */}
      {/* ========================= */}
      <main className="flex-1">

        {/* ========================= */}
        {/* Content */}
        {/* ========================= */}
        <div className="relative px-5 lg:px-10 py-8">

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
            <h1 className="text-[180px] font-bold text-[#2142FF] tracking-[25px]">
              CRM
            </h1>
          </div>

          {/* ========================= */}
          {/* Statistics Cards */}
          {/* ========================= */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

            <div className="group bg-white rounded-3xl p-6 shadow-lg border border-blue-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <p className="text-gray-500 text-sm">Total States</p>
              <h2 className="text-4xl font-bold mt-4">2</h2>
              <p className="text-green-500 text-sm mt-4">+12% this month</p>
            </div>

            <div className="group bg-white rounded-3xl p-6 shadow-lg border border-blue-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <p className="text-gray-500 text-sm">Total Divisions</p>
              <h2 className="text-4xl font-bold mt-4">12</h2>
              <p className="text-green-500 text-sm mt-4">+5 Added</p>
            </div>

            <div className="group bg-white rounded-3xl p-6 shadow-lg border border-blue-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <p className="text-gray-500 text-sm">Total Visits</p>
              <h2 className="text-4xl font-bold mt-4">1200</h2>
              <p className="text-blue-600 text-sm mt-4">Today: 215</p>
            </div>

            <div className="group bg-white rounded-3xl p-6 shadow-lg border border-blue-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              <p className="text-gray-500 text-sm">Active Agents</p>
              <h2 className="text-4xl font-bold mt-4">12</h2>
              <p className="text-green-500 text-sm mt-4">6 Online</p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;