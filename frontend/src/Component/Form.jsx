import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../context/FormContext";
import {
  FaClipboardList,
  FaUniversity,
  FaBuilding,
  FaMapMarkerAlt,
  FaUser,
  FaRedo,
  FaArrowRight,
} from "react-icons/fa";

const locationData = {
  Chhattisgarh: {
    Raipur: {
      areas: [
        "Raipur Local I",
        "Raipur Local II",
        "Abhanpur",
        "Mahasamund",
        "Kurud",
        "Dhamtari Local",
        "Pithora",
        "Saraipali",
        "Gariaband",
        "Kanker",
        "Keshkal",
        "Kondagaon",
        "Jagdalpur",
        "Narayanpur",
        "Dantewada",
        "Bijapur",
        "Sukma",
        "Other",
      ],
      agents: [
        "D.P. Tiwari",
        "B.L. Chaturvedi",
        "Lokesh Deshmukh",
        "Sunil Sahu",
        "Kamlesh Singh",
        "Yogeshwar Kumar",
        "Gopal Prasad Soni",
        "Naresh Nayak",
        "Kishore Surajlal",
        "Rajesh Bhandal",
        "Sitaram Sahu",
        "Naresh K. Sahu",
        "Rohit Sahu",
        "Meghraj Kendre",
        "Bhujlal Baishnav",
        "Nand Lal Sahu",
        "Shivam Gabel",
        "Other",
      ],
    },
    Durg: {
      areas: [
        "Bhilai I",
        "Bhilai II",
        "Durg Local",
        "Durg Rural",
        "Kawardha",
        "Bemetara",
        "Rajnandgaon Local",
        "Dongargarh",
        "Ambagarh Chowki",
        "Balod",
        "Patan",
        "Bhanupratappur",
        "Karwardha",
        "Other",
      ],
      agents: [
        "Rakesh Dhurandhar",
        "Yuvraj Singh",
        "Vinod Sahu",
        "Omprakash Sahu",
        "Kesha Sahu",
        "Kailash Dewangan",
        "Narayan Patil",
        "Dinesh Deshmukh",
        "Ravi Sahu",
        "Surendra Kumar",
        "Ajay Kumar",
        "Rajesh Sahu",
        "Jaidev Suryavanshi",
        "Other",
      ],
    },
    Bilaspur: {
      areas: [
        "Korba Local",
        "Kartala",
        "Katghora",
        "Janjgir Champa",
        "Akaltara",
        "Pendra Road",
        "Pendra",
        "Bilaspur Local I",
        "Bilaspur Local II",
        "Mungeli",
        "Lormi",
        "Shivrinarayan",
        "Baloda Bazar",
        "Tilda",
        "Simga",
        "Other",
      ],
      agents: [
        "Chandrakant Pandey",
        "Atul Kushwaha",
        "Karan Sahu",
        "Dileshwar Sahu",
        "Neeraj Sinha",
        "Virendra Singh Rajput",
        "Mukesh Bhosle",
        "Ashok Dewangan",
        "Anek Das Manikpuri",
        "Hemdas Manikpuri",
        "Tikaram Laser",
        "Kishanlal Kanwar",
        "Karan Rathore",
        "Manharan Sinha",
        "Vinod K. Choubey",
        "Other",
      ],
    },
    Ambikapur: {
      areas: [
        "Manendragarh",
        "Baikunthpur",
        "Surajpur I",
        "Surajpur II",
        "Ambikapur Local",
        "Ambikapur Rural",
        "Pathalgaon",
        "Wadrafnagar",
        "Jashpur",
        "Sarangarh",
        "Kharsiya",
        "Raigarh",
        "Sakti",
        "Other",
      ],
      agents: [
        "Ranjeet Patel",
        "Shashit Agrawal",
        "Ravi Khirsani",
        "Shiv Khirsani",
        "Shyam Kumar Dewangan",
        "Cholaram Sahu",
        "Bhagwat Prahlad",
        "Anil Bambhkar",
        "Kaushik Vishal",
        "Kamal Narayan Sahu",
        "Jitendra Kumar Kashyap",
        "Hemant Kshatri",
        "Other",
      ],
    },
  },
  "Madhya Pradesh": {
    Bhopal: {
      areas: [
        "Bhopal A",
        "Bhopal B",
        "Bhopal C",
        "Sehore A",
        "Sehore B",
        "Vidisha A",
        "Vidisha B",
        "Raisen A",
        "Raisen B",
        "Tikamgarh",
        "Chhatarpur A",
        "Chhatarpur B",
        "Other",
      ],
      agents: [
        "Ankit Jain",
        "Jitendra Sahu",
        "Umesh Jaiswal",
        "Praveen Jaiswal",
        "Vijay K. Bairagi",
        "Rohit Soni",
        "Dheeraj Rahangdale",
        "Narendra Puri Goswami",
        "Sanket Rahangdale",
        "Kamlesh Choudhary",
        "Ashish Chourasiya",
        "Nikhil Singh Sisodiya",
        "Other",
      ],
    },
    Indore: {
      areas: [
        "Indore A",
        "Indore B",
        "Burhanpur",
        "Khandwa",
        "Khargone A",
        "Khargone B",
        "Harda",
        "Betul A",
        "Betul B",
        "Dewas A",
        "Dewas B",
        "Shajapur A",
        "Shajapur B",
        "Indore E",
        "Dhar A",
        "Dhar B",
        "Alirajpur",
        "Rajgarh A",
        "Rajgarh B",
        "Barwani",
        "Jhabua",
        "Other",
      ],
      agents: [
        "Hemant Singh Rajput",
        "Jitendra Sharma",
        "Mukesh Yadav",
        "Anil Dongre",
        "Mrityunjay Singh Yadav",
        "Anil Yadav",
        "Sunil Kakde",
        "Sunil Chandravanshi",
        "Bhanu Pratap Bairi",
        "Deepak Gaur",
        "Jitendra Jat",
        "Heeralal Sable",
        "Mahendra Kawdekar",
        "Rakesh Pandey",
        "Kiran Chouhan",
        "Kundan Patel",
        "Abhishek Singh",
        "Brijmohan Lavvanshi",
        "Satyendra Goswami",
        "Barwani (Vacant)",
        "Mahesh Kumar Parte",
        "Other",
      ],
    },
    IndoreB: {
      areas: [
        "Shajapur A",
        "Shajapur B",
        "Indore E",
        "Indore B",
        "Dhar A",
        "Dhar B (Manawar)",
        "Alirajpur",
        "Rajgarh B",
        "Rajgarh A",
        "Barwani",
        "Jhabua",
        "Other",
      ],
      agents: [
        "Heeralal Sable",
        "Mahendra Kawdekar",
        "Rakesh Pandey",
        "Kamal Choudhary",
        "Kiran Bhopche",
        "Kundan Patel",
        "Abhishek Singh",
        "Satyendra Goswami",
        "Brijmohan Lavvanshi",
        "Barwani (Vacant)",
        "Mahesh Kumar Parte",
        "Other",
      ],
    },
    Jabalpur: {
      areas: [
        "Jabalpur A",
        "Jabalpur B",
        "Jabalpur C",
        "Jabalpur D",
        "Seoni A",
        "Seoni B",
        "Chhindwara A",
        "Chhindwara B",
        "Chhindwara C",
        "Mandla A",
        "Mandla B",
        "Dindori",
        "Balaghat A",
        "Balaghat B",
        "Balaghat C",
        "Other",
      ],
      agents: [
        "Sanjay Gautam",
        "Jabalpur B (Vacant)",
        "Dilip Chakravarty",
        "Pranav Bhargava",
        "Abhishek Puri Goswami",
        "Shailesh Tiwari",
        "Vishnu Dwivedi",
        "Vikas Kumar Mishra",
        "Imran Khan",
        "Suman Singh Rahangdale",
        "Radheshyam Kushwaha",
        "Sandeep Diwakar",
        "Ravindra Rahangdale",
        "Rameshwar Rana",
        "Prahlad Paneriya",
        "Other",
      ],
    },
    Gwalior: {
      areas: ["Gwalior A", "Gwalior B", "Dabra", "Datia","Shivpuri","Guna","Ashok Nagar","Murena A","Murena B","Bhind A","Bhind B","Sheopur","Agra","Other"],
      agents: ["Shravan Kumar Trivedi","Nasir khan","Rajendra Kushwaha","Shubham Titwari","Rajesh Sharma","Satyanarayn Lodhi","Rajkumar kushwaha","Yogesh Patel","Dhanshyam Daas Tiwari","Om Prakash Ade","Prikshit Thisaang", "Other"],
    },
    Rewa: {
      areas: [
        "Rewa A",
        "Rewa B",
        "Rewa C",
        "Satna A",
        "Satna B",
        "Satna C",
        "Panna",
        "Sidhi A",
        "Sidhi B",
        "Umaria",
        "Shahdol A",
        "Shahdol B",
        "Singrauli",
        "Anuppur",
        "Other",
      ],
      agents: [
        "Bansh Bahore",
        "Singham Sahu",
        "Deepak Pathak",
        "Ganesh Tiwari",
        "Satna B (Vacant)",
        "Rahul Pathak",
        "Abhinav Gautam",
        "Rajkumar Rahangdale",
        "Padmamani Kushwaha",
        "Raju Sahu",
        "Prince Agrawal",
        "Ravindra Rajpoot",
        "Hemant Kushwaha",
        "Pradeep Pari",
        "Other",
      ],
    },
    Sagar: {
      areas: [
        "Sagar A",
        "Sagar B",
        "Bina",
        "Hoshangabad (Narmadapuram)",
        "Itarsi",
        "Damoh A",
        "Damoh B",
        "Katni A",
        "Katni B",
        "Narsinghpur A",
        "Narsinghpur B",
        "Other",
      ],
      agents: [
        "Saurabh Khare",
        "Rajesh Tiwari",
        "Aman Soni",
        "Satish Kahar",
        "Budhram Daheriya",
        "Brajesh Kumar Tiwari",
        "Govind Baghriya",
        "Nilesh Tiwari",
        "Dhirendra Mishra",
        "Shashimohan Mishra",
        "Shirish Tiwari",
        "Other",
      ],
    },
    Ujjain: {
      areas: [
        "Ujjain A",
        "Ujjain B",
        "Ujjain C",
        "Ratlam A",
        "Ratlam B",
        "Indore C",
        "Mandsaur A / Kota",
        "Mandsaur B",
        "Neemuch A",
        "Neemuch B",
        "Agar",
        "Other",
      ],
      agents: [
        "Deepak Singh Dangi",
        "Rajesh Tiwari",
        "Rajat Meena",
        "Narendra Dhakad",
        "Arjun Dhangar",
        "Mausam Dubey",
        "Mohit Goswami",
        "Durgeshankar Malviya",
        "Dharmendra Vishwakarma",
        "Neemuch B (Vacant)",
        "Agar (Vacant)",
        "Other",
      ],
    },
  },
};

export default function Form() {
  const navigate = useNavigate();
  const { updateFormData } = useFormData();

  const initialState = {
    state: "",
    division: "",
    area: "",
    agent: "",
  };

  const [formData, setFormData] = useState(initialState);

  const divisions = useMemo(() => {
    if (!formData.state) {
      return [];
    }

    return Object.keys(locationData[formData.state] || {});
  }, [formData.state]);

  const selectedDivisionData = useMemo(() => {
    if (!formData.state || !formData.division) {
      return null;
    }

    return locationData[formData.state]?.[formData.division] || null;
  }, [formData.state, formData.division]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "state") {
      setFormData({ ...initialState, state: value });
      return;
    }

    if (name === "division") {
      setFormData((prev) => ({ ...prev, division: value, area: "", agent: "" }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => setFormData(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData("location", formData);
    navigate("/school-details");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-50 to-purple-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-3xl p-6 sm:p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <FaClipboardList className="text-3xl text-blue-700" />
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">Field Visit Management</h2>
          </div>

          <p className="text-blue-500 font-bold text-lg sm:text-base max-w-lg mx-auto leading-relaxed">
            Set up and manage field visit regions by assigning state, division,
            area, and responsible agents for streamlined operations.
          </p>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-5" onSubmit={handleSubmit}>
          <div className="sm:col-span-2 ">
            <label className="text-lg font-bold text-black flex items-center gap-2">
              <FaUniversity className="text-blue-700" /> State
            </label>

            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full mt-2 px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-400 outline-none "
              required
            >
              <option value="">Select State</option>
              {Object.keys(locationData).map((stateName) => (
                <option key={stateName} value={stateName}>
                  {stateName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-lg font-bold text-black flex items-center gap-2">
              <FaBuilding className="text-blue-700" /> Division
            </label>

            <select
              name="division"
              value={formData.division}
              onChange={handleChange}
              disabled={!formData.state}
              className="w-full mt-2 px-4 py-3 rounded-xl border disabled:bg-gray-100"
              required
            >
              <option value="">Select Division</option>
              {divisions.map((division) => (
                <option key={division} value={division}>
                  {division}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-lg font-bold text-black flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-700" /> Area
            </label>

            <select
              name="area"
              value={formData.area}
              onChange={handleChange}
              disabled={!selectedDivisionData}
              className="w-full mt-2 px-4 py-3 rounded-xl border disabled:bg-gray-100"
              required
            >
              <option value="">Select Area</option>
              {(selectedDivisionData?.areas || []).map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="text-lg font-bold text-black flex items-center gap-2">
              <FaUser className="text-blue-700" /> Agent
            </label>

            <select
              name="agent"
              value={formData.agent}
              onChange={handleChange}
              disabled={!selectedDivisionData}
              className="w-full mt-2 px-4 py-3 rounded-xl border disabled:bg-gray-100"
              required
            >
              <option value="">Select Agent</option>
              {(selectedDivisionData?.agents || []).map((agent) => (
                <option key={agent} value={agent}>
                  {agent}
                </option>
              ))}
            </select>
          </div>

          <div className=" sm:col-span-2 flex items-center justify-center gap-4 mt-4">
            

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 text-black font-bold shadow-lg hover:scale-105 transition"
            >
              Next <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
