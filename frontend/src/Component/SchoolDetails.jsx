import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../context/FormContext";
import {
  FaSchool,
  FaUserTie,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

export default function SchoolDetails() {
  const navigate = useNavigate();
const { updateFormData } = useFormData();
  const [formData, setFormData] = useState({
    schoolName: "",
    principalName: "",
    contactNumber: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleNext = (e) => {
  e.preventDefault();

  // Context me save karo
  updateFormData("school", formData);

  // Next page
  navigate("/AcedemicDetails");
};

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100">

      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-6 sm:p-8">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 flex items-center justify-center gap-2">
            <FaSchool className="text-blue-700" />
            School Details
          </h2>

          <p className="text-blue-500 mt-2 font-bold">
            Step 2 of 5 – Enter complete school information
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleNext}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          {/* School Name */}
          <div>
            <label className="flex items-center gap-2 text-lg font-bold text-black">
              <FaSchool className="text-blue-600" />
              School Name
            </label>

            <input
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              placeholder="Enter School Name"
              className="w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Principal */}
          <div>
            <label className="flex items-center gap-2 text-lg font-bold text-black">
              <FaUserTie className="text-blue-600" />
              Principal Name
            </label>

            <input
              type="text"
              name="principalName"
              value={formData.principalName}
              onChange={handleChange}
              placeholder="Enter Principal Name"
              className="w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="flex items-center gap-2 text-lg font-bold text-black">
              <FaPhone className="text-blue-600" />
              Contact Number
            </label>

            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="9876543210"
              className="w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-lg font-bold text-black">
              <FaEnvelope className="text-blue-600" />
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="school@email.com"
              className="w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="flex items-center gap-2 text-lg font-bold text-black">
              <FaMapMarkerAlt className="text-blue-600" />
              School Address
            </label>

            <textarea
              rows="4"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter School Address"
              className="w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* BUTTONS */}
          <div className="md:col-span-2 flex flex-col sm:flex-row justify-between gap-3 pt-4">

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 border rounded-xl hover:bg-gray-100 transition"
            >
              <FaArrowLeft /> Previous
            </button>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition"
            >
              Next <FaArrowRight />
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}