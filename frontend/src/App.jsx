import React from "react";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Header from "./Component/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./Component/ProtectedRoute";

const App = () => {
  return (
    <Routes>
      {/* Login Page (No Header) */}
      <Route path="/" element={<Login />} />

      {/* Dashboard Page (With Header) */}
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <>
        <Header />
        <Dashboard />
      </>
    </ProtectedRoute>
  }
/>

      {/* Redirect Unknown Routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;