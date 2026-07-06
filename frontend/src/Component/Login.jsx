import React, { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";
const Login = () => {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
  try {
    setLoading(true);

    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    console.log(response.data);

    alert(response.data.message);

    navigate("/dashboard",{replace: true });

  } catch (error) {
    console.error(error);

    alert(error.response?.data?.message || "Login Failed");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-3 sm:px-5 py-5 lg:py-8">
      {/* Main Card */}
      <div className="relative w-full max-w-6xl bg-white rounded-[30px] overflow-hidden shadow-xl flex flex-col lg:flex-row min-h-[580px] lg:min-h-[550px]">
        {/* ================= LEFT PANEL ================= */}

<div className="relative w-full lg:w-[42%] min-h-[240px] sm:min-h-[280px] lg:min-h-full overflow-hidden">
          {/* Blue Shape */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-[#163BFF]
              via-[#2142FF]
              to-[#1D2EFF]
            "
           style={{
    borderTopRightRadius: "180px",
    borderBottomRightRadius: "260px",
}}
          />

          {/* White Border Curve */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderTopRightRadius: "230px",
              borderBottomRightRadius: "330px",
              borderRight: "18px solid rgba(255,255,255,.65)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-10 lg:px-14 text-center">

            <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-wider drop-shadow-lg">
              C.R.M
            </h1>

            <h2 className="mt-5 text-lg sm:text-xl lg:text-2xl font-semibold">
              Customer Relationship Management
            </h2>

            <p className="mt-5 max-w-sm text-sm sm:text-base leading-7 text-blue-100">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>

          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}

        <div className="relative flex-1 flex items-center justify-center px-5 sm:px-8 lg:px-14 py-8 lg:py-12">

          {/* Background Watermark */}

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">

            <svg
             width="300"
             height="300"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="100"
                cy="100"
                r="70"
                stroke="#2451ff"
                strokeWidth="10"
              />

              <path
                d="M60 100H140"
                stroke="#2451ff"
                strokeWidth="10"
              />

              <path
                d="M100 60V140"
                stroke="#2451ff"
                strokeWidth="10"
              />

              <circle
                cx="100"
                cy="100"
                r="18"
                stroke="#2451ff"
                strokeWidth="8"
              />
            </svg>

          </div>

          {/* Login Box */}

          <div className="relative z-10 w-full max-w-xl">

            <h2 className="text-center text-3xl sm:text-4xl font-bold lg:text-4xl  text-[#2345ff] mb-8 lg:mb-12">
              Sign In to C.R.M
            </h2>

            {/* Email */}

            <div className="relative mb-8">

              <FaEnvelope
                className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 text-lg"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full
                  
                  rounded-xl
                  bg-[#f7f7f7]
                  h-14 sm:h-16
                  pr-5
                  pl-14
                  text-base
                  outline-none
                  border
                  border-transparent
                  focus:border-blue-500
                  duration-300
                "
              />

            </div>

            {/* Password */}

            <div className="relative mb-5">

              <FaLock
                className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 text-lg"
              />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="
                  w-full
                  h-14 sm:h-16
                  rounded-xl
                  bg-[#f7f7f7]
                  pl-14
                  pr-14
                  text-base
                  outline-none
                  border
                  border-transparent
                  focus:border-blue-500
                  duration-300
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500 text-xl"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
              <div className="flex justify-center items-center mt-[25px] mb-5">
              <span>If you don't have a account then contact your admin </span>
            </div>
            {/* Login Button */}

          <button
  onClick={handleLogin}
  disabled={loading}
  className={`
    block
    mx-auto
    w-full sm:w-72 lg:w-80
    max-w-full
    h-12 sm:h-14
    rounded-full
    text-white
    text-lg
    font-semibold
    bg-gradient-to-r
    from-[#1b3cff]
    to-[#2d39ff]
    shadow-xl
    duration-300
    ${
      loading
        ? "opacity-70 cursor-not-allowed"
        : "hover:scale-105 active:scale-95"
    }
  `}
>
  {loading ? (
    <div className="flex items-center justify-center gap-2">
      <svg
        className="w-5 h-5 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        ></path>
      </svg>
      Logging in...
    </div>
  ) : (
    "LOG IN"
  )}
</button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Login;