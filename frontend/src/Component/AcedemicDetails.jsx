import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPlus,
  FaTrash,
  FaArrowLeft,
  FaArrowRight,
  FaGraduationCap,
  FaBook,
  FaEdit,
} from "react-icons/fa";
import { useFormData } from "../context/FormContext";

export default function AcademicDetails() {
  const navigate = useNavigate();
  const { updateFormData } = useFormData();

  const classes = Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`);

  const streams = ["Maths", "Science", "Commerce", "Arts"];

  const juniorSubjects = [
    "English",
    "Hindi",
    "Mathematics",
    "Science",
    "Social Science",
    "Computer",
    "EVS",
    "General Knowledge",
    "Sanskrit",
    "Other",
  ];

  const mathsSubjects = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "English",
    "Computer Science",
    "Other",
  ];

  const scienceSubjects = [
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology",
    "English",
    "Computer Science",
    "Other",
  ];

  const commerceSubjects = [
    "Accountancy",
    "Business Studies",
    "Economics",
    "Mathematics",
    "English",
    "Other",
  ];

  const artsSubjects = [
    "History",
    "Geography",
    "Political Science",
    "Economics",
    "Sociology",
    "Psychology",
    "English",
    "Other",
  ];

  // Sample Books Dropdown
  const sampleBookList = [
    "Physics Book",
    "Chemistry Book",
    "Maths Book",
    "Biology Book",
    "English Book",
    "Computer Book",
    "History Book",
    "Geography Book",
    "Economics Book",
    "Accountancy Book",
    "Business Studies Book",
    "Other",
  ];

  const [formData, setFormData] = useState({
    className: "",
    stream: "",

    // Student Details
    subjects: [
      {
        subject: "",
        customSubject: "",
        quantity: "",
      },
    ],

    // Sample Books
    sampleBooks: [
      {
        bookName: "",
        customBook: "",
        quantity: "",
      },
    ],
  });

  const handleClassChange = (e) => {
    setFormData({
      ...formData,
      className: e.target.value,
      stream: "",
      subjects: [
        {
          subject: "",
          customSubject: "",
          quantity: "",
        },
      ],
    });
  };

  const handleStreamChange = (e) => {
    setFormData({
      ...formData,
      stream: e.target.value,
      subjects: [
        {
          subject: "",
          customSubject: "",
          quantity: "",
        },
      ],
    });
  };

  const getSubjects = () => {
    const classNo = Number(formData.className.replace("Class ", ""));

    if (classNo <= 10) return juniorSubjects;

    if (formData.stream === "Maths") return mathsSubjects;

    if (formData.stream === "Science") return scienceSubjects;

    if (formData.stream === "Commerce") return commerceSubjects;

    if (formData.stream === "Arts") return artsSubjects;

    return [];
  };

  // SUBJECT FUNCTIONS

  const handleSubjectChange = (index, field, value) => {
    const updated = [...formData.subjects];
    updated[index][field] = value;

    setFormData({
      ...formData,
      subjects: updated,
    });
  };

  const addSubject = () => {
    setFormData({
      ...formData,
      subjects: [
        ...formData.subjects,
        {
          subject: "",
          customSubject: "",
          quantity: "",
        },
      ],
    });
  };

  const removeSubject = (index) => {
    setFormData({
      ...formData,
      subjects: formData.subjects.filter((_, i) => i !== index),
    });
  };

  // SAMPLE BOOK FUNCTIONS

  const handleBookChange = (index, field, value) => {
    const updated = [...formData.sampleBooks];
    updated[index][field] = value;

    setFormData({
      ...formData,
      sampleBooks: updated,
    });
  };

  const addBook = () => {
    setFormData({
      ...formData,
      sampleBooks: [
        ...formData.sampleBooks,
        {
          bookName: "",
          customBook: "",
          quantity: "",
        },
      ],
    });
  };

  const removeBook = (index) => {
    setFormData({
      ...formData,
      sampleBooks: formData.sampleBooks.filter((_, i) => i !== index),
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Save Academic Details in Context
  updateFormData("academic", formData);

  navigate("/visitDetails");
};
  return (

  <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 flex items-center justify-center p-4">

    <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-5xl">

      {/* Header */}
      <div className="text-center mb-8">

        <h2 className="text-3xl font-bold flex justify-center items-center gap-3 text-blue-900">
          <FaGraduationCap />
          Academic Details
        </h2>

        <p className="text-gray-500 mt-2">
          Select class, subjects and sample books provided during the visit.
        </p>

      </div>

      <form onSubmit={handleSubmit}>

        {/* Class & Stream */}

        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="font-semibold">
              Class
            </label>

            <select
              value={formData.className}
              onChange={handleClassChange}
              className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">Select Class</option>

              {classes.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}

            </select>

          </div>

          {(formData.className === "Class 11" ||
            formData.className === "Class 12") && (

            <div>

              <label className="font-semibold">
                Stream
              </label>

              <select
                value={formData.stream}
                onChange={handleStreamChange}
                className="w-full mt-2 border rounded-xl p-3 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              >
                <option value="">Select Stream</option>

                {streams.map((stream) => (
                  <option key={stream} value={stream}>
                    {stream}
                  </option>
                ))}

              </select>

            </div>

          )}

        </div>
        {/* SUBJECT DETAILS */}

<div className="mt-10">

  <div className="flex items-center gap-2 mb-5">
    <FaBook className="text-blue-700 text-xl" />
    <h3 className="text-xl font-bold">
      Subject Details
    </h3>
  </div>

  <p className="text-gray-500 mb-5">
    Select subject and enter the required quantity.
  </p>

  {formData.subjects.map((item, index) => (

    <div
      key={index}
      className="border rounded-2xl p-5 mb-5 bg-gray-50"
    >

      <div
        className={`grid gap-4 ${
          item.subject === "Other"
            ? "md:grid-cols-4"
            : "md:grid-cols-3"
        }`}
      >

        {/* Subject */}

        <div>

          <label className="font-medium">
            Subject
          </label>

          <select
            value={item.subject}
            onChange={(e) =>
              handleSubjectChange(
                index,
                "subject",
                e.target.value
              )
            }
            className="w-full mt-2 border rounded-xl p-3"
            required
          >
            <option value="">
              Select Subject
            </option>

            {getSubjects().map((sub) => (
              <option
                key={sub}
                value={sub}
              >
                {sub}
              </option>
            ))}

          </select>

        </div>

        {/* Other Subject */}

        {item.subject === "Other" && (

          <div>

            <label className="font-medium">
              Subject Name
            </label>

            <input
              type="text"
              placeholder="Enter Subject Name"
              value={item.customSubject}
              onChange={(e) =>
                handleSubjectChange(
                  index,
                  "customSubject",
                  e.target.value
                )
              }
              className="w-full mt-2 border rounded-xl p-3"
              required
            />

          </div>

        )}

        {/* Quantity */}

        <div>

          <label className="font-medium">
            Quantity
          </label>

          <input
            type="number"
            min="1"
            placeholder="Enter Quantity"
            value={item.quantity}
            onChange={(e) =>
              handleSubjectChange(
                index,
                "quantity",
                e.target.value
              )
            }
            className="w-full mt-2 border rounded-xl p-3"
            required
          />

        </div>

        {/* Actions */}

        <div className="flex items-end gap-3">

          <button
            type="button"
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-xl"
            title="Edit"
          >
            <FaEdit />
          </button>

          <button
            type="button"
            onClick={() => removeSubject(index)}
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl"
            title="Delete"
          >
            <FaTrash />
          </button>

        </div>

      </div>

    </div>

  ))}

  <button
    type="button"
    onClick={addSubject}
    className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
  >
    <FaPlus />
    Add Subject
  </button>

</div>
{/* SAMPLE BOOKS */}

<div className="mt-12">

  <div className="flex items-center gap-2 mb-5">
    <FaBook className="text-green-700 text-xl" />
    <h3 className="text-xl font-bold">
      Sample Books Distributed
    </h3>
  </div>

  <p className="text-gray-500 mb-5">
    Enter the sample books provided to the school.
  </p>

  {formData.sampleBooks.map((book, index) => (

    <div
      key={index}
      className="border rounded-2xl p-5 mb-5 bg-green-50"
    >

      <div
        className={`grid gap-4 ${
          book.bookName === "Other"
            ? "md:grid-cols-4"
            : "md:grid-cols-3"
        }`}
      >

        {/* Book Name */}

        <div>

          <label className="font-medium">
            Book Name
          </label>

          <select
            value={book.bookName}
            onChange={(e) =>
              handleBookChange(
                index,
                "bookName",
                e.target.value
              )
            }
            className="w-full mt-2 border rounded-xl p-3"
            required
          >
            <option value="">
              Select Book
            </option>

            {sampleBookList.map((item) => (
              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}

          </select>

        </div>

        {/* Other Book */}

        {book.bookName === "Other" && (

          <div>

            <label className="font-medium">
              Book Name
            </label>

            <input
              type="text"
              placeholder="Enter Book Name"
              value={book.customBook}
              onChange={(e) =>
                handleBookChange(
                  index,
                  "customBook",
                  e.target.value
                )
              }
              className="w-full mt-2 border rounded-xl p-3"
              required
            />

          </div>

        )}

        {/* Quantity */}

        <div>

          <label className="font-medium">
            Quantity
          </label>

          <input
            type="number"
            min="1"
            placeholder="Enter Quantity"
            value={book.quantity}
            onChange={(e) =>
              handleBookChange(
                index,
                "quantity",
                e.target.value
              )
            }
            className="w-full mt-2 border rounded-xl p-3"
            required
          />

        </div>

        {/* Actions */}

        <div className="flex items-end gap-3">

          <button
            type="button"
            className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-xl"
            title="Edit"
          >
            <FaEdit />
          </button>

          <button
            type="button"
            onClick={() => removeBook(index)}
            className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl"
            title="Delete"
          >
            <FaTrash />
          </button>

        </div>

      </div>

    </div>

  ))}

  <button
    type="button"
    onClick={addBook}
    className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl flex items-center gap-2"
  >
    <FaPlus />
    Add Sample Book
  </button>

</div>
{/* BUTTONS */}

<div className="flex flex-col sm:flex-row justify-between gap-4 mt-12">

  <button
    type="button"
    onClick={() => navigate(-1)}
    className="border border-gray-300 px-6 py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-gray-100 transition"
  >
    <FaArrowLeft />
    Previous
  </button>

  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl flex justify-center items-center gap-2 transition"
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
