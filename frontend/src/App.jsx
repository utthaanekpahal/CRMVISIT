import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Form from "./Component/Form";
import SchoolDetails from "./Component/SchoolDetails";
import AcedemicDetails from "./Component/AcedemicDetails";
import VisitDetails from "./Component/VisitDetails";
import Summary from "./Component/Summary";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/school-details" element={<SchoolDetails />} />
      <Route path="/AcedemicDetails" element={<AcedemicDetails />} />
      <Route path="/visitDetails" element={<VisitDetails />} />
      <Route path="/Summary" element={<Summary />} />
    </Routes>
  );
};

export default App;