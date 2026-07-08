import React, { useState } from "react";
import axios from "axios";

const CreateSubAdmin = () => {
  const [name, setname] = useState("")
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/admin/create-subadmin",
        {
          name,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      alert(response.data.message);
      setname("");
      setemail("");
      setPassword("");

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-[564px] flex items-center justify-center px-4 py-8 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

  {/* Background Blur */}
  <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-300/30 rounded-full blur-3xl"></div>

  <div className="absolute top-1/2 -right-24 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>

  <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>

  {/* Decorative Grid */}
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage: `
        linear-gradient(#2142FF 1px, transparent 1px),
        linear-gradient(90deg, #2142FF 1px, transparent 1px)
      `,
      backgroundSize: "45px 45px",
    }}
  ></div>

  {/* Decorative Circles */}
  <div className="absolute top-20 right-20 w-5 h-5 rounded-full bg-blue-500/30"></div>
  <div className="absolute bottom-28 left-24 w-4 h-4 rounded-full bg-indigo-500/30"></div>
  <div className="absolute top-1/3 left-12 w-3 h-3 rounded-full bg-cyan-500/40"></div>

  {/* Your Existing Form */}
  <div className="relative z-10 w-full max-w-md ">
    <form
      onSubmit={handleCreate}
      className="bg-white border border-blue-100 lg:h-[520px] rounded-3xl shadow-2xl p-6 sm:p-6 md:p-5 transition-all duration-300"
    >
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-2 rounded-2xl bg-blue-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M18 9v6m3-3h-6M9 7a4 4 0 100-8 4 4 0 000 8zm0 2c-3.314 0-6 2.686-6 6v2h12v-2c0-3.314-2.686-6-6-6z"
            />
          </svg>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700">
          Create Sub Admin
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          Fill in the details below to create a new Sub Admin account.
        </p>
      </div>

      {/* Name */}
      <div className="mb-3">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Name
        </label>

        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      {/* Username */}
      <div className="mb-3">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Username
        </label>

        <input
          type="text"
          placeholder="Enter username"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      {/* Password */}
      <div className="mb-3">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>

      {/* Button */}
      <button
  type="submit"
  disabled={loading}
  className="w-full flex items-center justify-center gap-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold py-3.5 transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed shadow-lg shadow-blue-200"
>
  {loading ? (
    <>
      {/* Spinner */}
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
        />
        <path
          className="opacity-90"
          fill="currentColor"
          d="M12 2a10 10 0 00-10 10h4a6 6 0 016-6V2z"
        />
      </svg>

      <span>Creating Sub Admin...</span>
    </>
  ) : (
    "Create Sub Admin"
  )}
</button>
    </form>
  </div>
</div>
  );
};

export default CreateSubAdmin;