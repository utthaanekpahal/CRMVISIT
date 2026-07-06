import { useNavigate } from "react-router-dom";
import { useFormData } from "../context/FormContext";

import {
  FaFileExcel,
  FaFilePdf,
  FaMapMarkerAlt,
  FaSchool,
  FaGraduationCap,
  FaClipboardCheck,
  FaFileImage,
  FaArrowLeft,
} from "react-icons/fa";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function Summary() {
  const navigate = useNavigate();

const { formData, allVisits, saveVisit } = useFormData();

  // Extract Data

  const location = formData.location || {};
  const school = formData.school || {};
  const academic = formData.academic || {};
  const visit = formData.visit || {};
  const documents = formData.documents || {};

  // ==========================
  // EXPORT EXCEL
  // ==========================

  const exportExcel = () => {
    const data = [
      {
        State: location.state || "",
        Division: location.division || "",
        Area: location.area || "",
        Agent: location.agent || "",

        School: school.schoolName || "",
        Principal: school.principalName || "",
        Contact: school.contactNumber || "",
        Email: school.email || "",
        Address: school.address || "",

        Class: academic.className || "",
        Stream: academic.stream || "",

        VisitDate: visit.visitDate || "",
        VisitTime: visit.visitTime || "",
        VisitType: visit.visitType || "",

        PersonMet: visit.personMet || "",
        PersonName: visit.personName || "",
        Mobile: visit.mobileNumber || "",

        Status: visit.status || "",

        Remarks: visit.remarks || "",
      },
    ];

    const worksheet = XLSX.utils.json_to_sheet(data);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      "School Visit"
    );

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(file, "School_Visit_Report.xlsx");
  };

  // ==========================
  // EXPORT PDF
  // ==========================

  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);

    doc.text("School Visit Report", 14, 18);

    autoTable(doc, {
      startY: 30,

      head: [["Field", "Value"]],

      body: [
        ["State", location.state || ""],
        ["Division", location.division || ""],
        ["Area", location.area || ""],
        ["Agent", location.agent || ""],

        ["School", school.schoolName || ""],
        ["Principal", school.principalName || ""],
        ["Contact", school.contactNumber || ""],
        ["Email", school.email || ""],
        ["Address", school.address || ""],

        ["Class", academic.className || ""],
        ["Stream", academic.stream || ""],

        ["Visit Date", visit.visitDate || ""],
        ["Visit Time", visit.visitTime || ""],
        ["Visit Type", visit.visitType || ""],

        ["Person Met", visit.personMet || ""],
        ["Person Name", visit.personName || ""],
        ["Mobile", visit.mobileNumber || ""],

        ["Status", visit.status || ""],
        ["Remarks", visit.remarks || ""],
      ],
    });

    doc.save("School_Visit_Report.pdf");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 p-6">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8">

        {/* Header */}

        <div className="text-center mb-10">

          <h1 className="text-3xl font-bold text-blue-900">
            School Visit Summary
          </h1>

          <p className="text-gray-500 mt-2">
            Review all entered information before exporting.
          </p>
          </div>
        {/* ================= LOCATION DETAILS ================= */}

        <div className="border rounded-2xl p-6 mb-8">

          <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2 mb-5">
            <FaMapMarkerAlt />
            Location Details
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <p className="font-semibold">State</p>
              <p className="text-gray-700">{location.state || "-"}</p>
            </div>

            <div>
              <p className="font-semibold">Division</p>
              <p className="text-gray-700">{location.division || "-"}</p>
            </div>

            <div>
              <p className="font-semibold">Area</p>
              <p className="text-gray-700">{location.area || "-"}</p>
            </div>

            <div>
              <p className="font-semibold">Agent</p>
              <p className="text-gray-700">{location.agent || "-"}</p>
            </div>

          </div>

        </div>

        {/* ================= SCHOOL DETAILS ================= */}

        <div className="border rounded-2xl p-6 mb-8">

          <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2 mb-5">
            <FaSchool />
            School Details
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <p className="font-semibold">School Name</p>
              <p className="text-gray-700">{school.schoolName || "-"}</p>
            </div>

            <div>
              <p className="font-semibold">Principal Name</p>
              <p className="text-gray-700">{school.principalName || "-"}</p>
            </div>

            <div>
              <p className="font-semibold">Contact Number</p>
              <p className="text-gray-700">
                {school.contactNumber || "-"}
              </p>
            </div>

            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-700">{school.email || "-"}</p>
            </div>

            <div className="md:col-span-2">
              <p className="font-semibold">Address</p>
              <p className="text-gray-700">{school.address || "-"}</p>
            </div>

          </div>

        </div>
                {/* ================= ACADEMIC DETAILS ================= */}

        <div className="border rounded-2xl p-6 mb-8">

          <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2 mb-5">
            <FaGraduationCap />
            Academic Details
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mb-6">

            <div>
              <p className="font-semibold">Class</p>
              <p>{academic.className || "-"}</p>
            </div>

            <div>
              <p className="font-semibold">Stream</p>
              <p>{academic.stream || "-"}</p>
            </div>

          </div>

          {/* Subjects */}

          <h3 className="text-lg font-bold mb-3">
            Subject Details
          </h3>

          <table className="w-full border mb-6">

            <thead className="bg-blue-100">

              <tr>

                <th className="border p-2">Subject</th>

                <th className="border p-2">Quantity</th>

              </tr>

            </thead>

            <tbody>

              {academic.subjects?.map((item, index) => (

                <tr key={index}>

                  <td className="border p-2">
                    {item.subject === "Other"
                      ? item.customSubject
                      : item.subject}
                  </td>

                  <td className="border p-2">
                    {item.quantity}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          {/* Sample Books */}

          <h3 className="text-lg font-bold mb-3">
            Sample Books
          </h3>

          <table className="w-full border">

            <thead className="bg-green-100">

              <tr>

                <th className="border p-2">Book</th>

                <th className="border p-2">Quantity</th>

              </tr>

            </thead>

            <tbody>

              {academic.sampleBooks?.map((book, index) => (

                <tr key={index}>

                  <td className="border p-2">
                    {book.bookName === "Other"
                      ? book.customBook
                      : book.bookName}
                  </td>

                  <td className="border p-2">
                    {book.quantity}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* ================= VISIT DETAILS ================= */}

        <div className="border rounded-2xl p-6 mb-8">

          <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2 mb-5">
            <FaClipboardCheck />
            Visit Details
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <p className="font-semibold">Visit Date</p>
              <p>{visit.visitDate || "-"}</p>
            </div>

            <div>
              <p className="font-semibold">Visit Time</p>
              <p>{visit.visitTime || "-"}</p>
            </div>

            <div>
              <p className="font-semibold">Visit Type</p>
              <p>{visit.visitType || "-"}</p>
            </div>

            <div>
              <p className="font-semibold">Person Met</p>
              <p>{visit.personMet || "-"}</p>
            </div>

            <div>
              <p className="font-semibold">Person Name</p>
              <p>{visit.personName || "-"}</p>
            </div>

            <div>
              <p className="font-semibold">Mobile Number</p>
              <p>{visit.mobileNumber || "-"}</p>
            </div>

            <div>
              <p className="font-semibold">Status</p>
              <p>{visit.status || "-"}</p>
            </div>

            <div className="md:col-span-2">
              <p className="font-semibold">Remarks</p>
              <p>{visit.remarks || "-"}</p>
            </div>

          </div>

        </div>

        {/* ================= DOCUMENTS ================= */}

        <div className="border rounded-2xl p-6 mb-8">

          <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2 mb-5">
            <FaFileImage />
            Uploaded Documents
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <div>
              <p className="font-semibold">School Photo</p>
              <p>
                {documents.schoolPhoto
                  ? documents.schoolPhoto.name
                  : "Not Uploaded"}
              </p>
            </div>

            <div>
              <p className="font-semibold">Meeting Photo</p>
              <p>
                {documents.meetingPhoto
                  ? documents.meetingPhoto.name
                  : "Not Uploaded"}
              </p>
            </div>

            <div>
              <p className="font-semibold">Visiting Card</p>
              <p>
                {documents.visitingCard
                  ? documents.visitingCard.name
                  : "Not Uploaded"}
              </p>
            </div>

            <div>
              <p className="font-semibold">Appointment Letter</p>
              <p>
                {documents.appointmentLetter
                  ? documents.appointmentLetter.name
                  : "Not Uploaded"}
              </p>
            </div>

          </div>

        </div>
                {/* ================= BUTTONS ================= */}

        <div className="flex flex-wrap justify-center gap-4 mt-10">

          {/* Previous */}

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 transition"
          >
            <FaArrowLeft />
            Previous
          </button>

          {/* Export Excel */}

          <button
            type="button"
            onClick={exportExcel}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
          >
            <FaFileExcel />
            Export Excel
          </button>

          {/* Export PDF */}

          <button
            type="button"
            onClick={exportPDF}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition"
          >
            <FaFilePdf />
            Export PDF
          </button>

        </div>

      </div>

    </div>
  );
}
       