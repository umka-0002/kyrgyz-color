// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./shared/components/Header";
import HomePage from "./pages/HomePage/HomePage";
import PrivateRoutes from "./features/auth/PrivateRoutes";
import LoginForm from "./features/auth/LoginForm";
import RegisterForm from "./features/auth/RegisterForm";
import Dashboard from "./pages/Dashboard/Dashboard";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./shared/components/Footer";
import ProductPage from "./pages/ProductPage/ProductPage";
import AboutProduct from "./pages/AboutProduct/AboutProduct";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/all-products" element={<ProductPage />} />
        <Route path="/product/:id" element={AboutProduct} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
