<<<<<<< Updated upstream
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// Import FormProvider
import { FormProvider } from "./context/FormContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <FormProvider>
      <App />
    </FormProvider>
  </BrowserRouter>
);
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <App />
  </BrowserRouter>
)
>>>>>>> Stashed changes
