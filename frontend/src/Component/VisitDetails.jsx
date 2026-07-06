import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../context/FormContext";
import {
  FaCalendarAlt,
  FaClock,
  FaUserTie,
  FaUser,
  FaPhone,
  FaClipboardCheck,
  FaStickyNote,
  FaArrowLeft,
  FaArrowRight,
  FaCamera,
  FaIdCard,
  FaMapMarkerAlt,
  FaFileImage,
} from "react-icons/fa";

export default function VisitDetails() {
  const navigate = useNavigate();
const { updateFormData } = useFormData();
  const visitTypes = [
    "First Visit",
    "Follow-up Visit",
    "Demo Visit",
    "Book Delivery",
  ];

  const persons = [
    "Principal",
    "Vice Principal",
    "Coordinator",
    "Teacher",
    "Counsellor",
    "Management",
    "Office Staff",
    "Other",
  ];

  const statusList = [
    
    "Interested",
    "Need Follow-up",
    "Not Interested",
   
  ];

  const followupModes = [
    "Phone Call",
    "WhatsApp",
    "School Visit",
    "Email",
  ];

  const [formData, setFormData] = useState({
    visitDate: "",
    visitTime: "",

    visitType: "",

    personMet: "",
    personName: "",
    mobileNumber: "",

    status: "",

    discussion: "",

    followUpDate: "",
    followUpTime: "",
    followUpMode: "",

    remarks: "",

    schoolPhoto: null,
    meetingPhoto: null,
    visitingCard: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Save Visit Details
  updateFormData("visit", formData);

  navigate("/summary");
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 flex items-center justify-center p-4">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-8">

        {/* Header */}

        <div className="text-center mb-10">

          <h2 className="text-3xl font-bold text-blue-900 flex justify-center items-center gap-3">
            <FaClipboardCheck />
            Visit Details
          </h2>

          <p className="text-gray-500 mt-2">
            Record complete details of the school visit and meeting outcome.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* ================= Visit Information ================= */}

<div>
  <label className="font-semibold flex items-center gap-2">
    <FaCalendarAlt className="text-blue-600" />
    Visit Date
  </label>

  <input
    type="date"
    name="visitDate"
    value={formData.visitDate}
    onChange={handleChange}
    className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
    required
  />
</div>

<div>
  <label className="font-semibold flex items-center gap-2">
    <FaClock className="text-blue-600" />
    Visit Time
  </label>

  <input
    type="time"
    name="visitTime"
    value={formData.visitTime}
    onChange={handleChange}
    className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
    required
  />
</div>

<div className="md:col-span-2">
  <label className="font-semibold flex items-center gap-2">
    <FaClipboardCheck className="text-blue-600" />
    Visit Type
  </label>

  <select
    name="visitType"
    value={formData.visitType}
    onChange={handleChange}
    className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
    required
  >
    <option value="">Select Visit Type</option>

    {visitTypes.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ))}
  </select>
</div>

{/* ================= Contact Person ================= */}

<div className="md:col-span-2 mt-4">
  <h3 className="text-xl font-bold text-blue-900 border-b pb-2">
    Contact Person
  </h3>
</div>

<div>
  <label className="font-semibold flex items-center gap-2">
    <FaUserTie className="text-blue-600" />
    Person Met
  </label>

  <select
    name="personMet"
    value={formData.personMet}
    onChange={handleChange}
    className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
    required
  >
    <option value="">Select Person</option>

    {persons.map((person) => (
      <option key={person} value={person}>
        {person}
      </option>
    ))}
  </select>
</div>

<div>
  <label className="font-semibold flex items-center gap-2">
    <FaUser className="text-blue-600" />
    Person Name
  </label>

  <input
    type="text"
    name="personName"
    value={formData.personName}
    onChange={handleChange}
    placeholder="Enter Person Name"
    className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
    required
  />
</div>

<div>
  <label className="font-semibold flex items-center gap-2">
    <FaPhone className="text-blue-600" />
    Mobile Number
  </label>

  <input
    type="tel"
    name="mobileNumber"
    value={formData.mobileNumber}
    onChange={handleChange}
    placeholder="9876543210"
    className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
    maxLength={10}
    required
  />
</div>

<div>
  <label className="font-semibold flex items-center gap-2">
    <FaClipboardCheck className="text-blue-600" />
    Visit Outcome
  </label>

  <select
    name="status"
    value={formData.status}
    onChange={handleChange}
    className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
    required
  >
    <option value="">Select Status</option>

    {statusList.map((status) => (
      <option key={status} value={status}>
        {status}
      </option>
    ))}
  </select>
</div>
          {/* Next Follow-up Details */}

         {formData.status === "Need Follow-up" && (
            <>
              <div>
                <label className="font-semibold flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-600" />
                  Next Follow-up Date
                </label>

                <input
                  type="date"
                  name="followUpDate"
                  value={formData.followUpDate}
                  onChange={handleChange}
                  className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="font-semibold flex items-center gap-2">
                  <FaClock className="text-blue-600" />
                  Next Follow-up Time
                </label>

                <input
                  type="time"
                  name="followUpTime"
                  value={formData.followUpTime}
                  onChange={handleChange}
                  className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
            </>
          )}

          {/* Remarks */}

          <div className="md:col-span-2">
            <label className="font-semibold flex items-center gap-2">
              <FaStickyNote className="text-blue-600" />
              Remarks
            </label>

            <textarea
              rows="3"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              placeholder="Any additional remarks..."
              className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Buttons */}

          <div className="md:col-span-2 flex flex-col sm:flex-row justify-between gap-4 mt-6">

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 border border-gray-300 rounded-xl px-6 py-3 hover:bg-gray-100 transition"
            >
              <FaArrowLeft />
              Previous
            </button>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl px-8 py-3 hover:scale-105 transition"
            >
              Next
              <FaArrowRight />
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

       