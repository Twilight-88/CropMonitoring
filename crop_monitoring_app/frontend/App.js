import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

import HomePage from "./pages/HomePage";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import UploadPage from "./pages/UploadPage";
import ReportsPage from "./pages/ReportsPage";
import AboutPage from "./pages/AboutPage";
import HowItWorkPage from "./pages/HowItWorkPage";
import ContactPage from "./pages/ContactPage";
import ResourcesPage from "./pages/ResourcesPage";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/dashboard" && location.pathname !== "/reset-password" && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-it-works" element={<HowItWorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/resource" element={<ReportsPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      {location.pathname !== "/dashboard" && location.pathname !== "/reset-password" && <Footer />}
    </>
  );
}

export default App;
