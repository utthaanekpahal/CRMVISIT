import { createContext, useContext, useState } from "react";

const FormContext = createContext();

const emptyForm = {
  location: {},
  school: {},
  academic: {},
  visit: {},
  documents: {},
};

export const FormProvider = ({ children }) => {
  // Current Form
  const [formData, setFormData] = useState(emptyForm);

  // All Saved Visits
  const [allVisits, setAllVisits] = useState([]);

  // Update any section
  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  // Save current visit
  const saveVisit = () => {
    setAllVisits((prev) => [...prev, formData]);

    // Clear form for next entry
    setFormData(emptyForm);
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        saveVisit,
        allVisits,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => useContext(FormContext);