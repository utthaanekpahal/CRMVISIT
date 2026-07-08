import { Routes, Route, Navigate ,Outlet } from "react-router-dom";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Form from "./Component/Form";
import SchoolDetails from "./Component/SchoolDetails";
import AcedemicDetails from "./Component/AcedemicDetails";
import VisitDetails from "./Component/VisitDetails";
import Summary from "./Component/Summary";
import ProtectedRoute from "./Component/ProtectedRoute";
import DashboardLayout from "./Component/Layout";
import CreateSubAdmin from "./Component/CreateSubAdmin";
function App() {
  return (
     <Routes>
      <Route path="/" element={<Login />} />


      {/* Superadmin Layout (Header ke saath) */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["superadmin"]}>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-subadmin" element={<CreateSubAdmin />} />

        {/* Superadmin ka Form */}
        <Route path="/form" element={<Form />} />

        <Route path="/school-details" element={<SchoolDetails />} />
        <Route path="/AcedemicDetails" element={<AcedemicDetails />} />
        <Route path="/visitDetails" element={<VisitDetails />} />
        <Route path="/Summary" element={<Summary />} />
      </Route>


      {/* Subadmin Layout (Without Header) */}
      <Route
        element={
          <ProtectedRoute allowedRoles={["subadmin"]}>
            <Outlet />
          </ProtectedRoute>
        }
      >
        {/* Subadmin ka Form */}
        <Route path="/form-subadmin" element={<Form />} />
      </Route>


      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;