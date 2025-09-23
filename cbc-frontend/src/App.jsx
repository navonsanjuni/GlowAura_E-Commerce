import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminPage from "./pages/AdminPage";


function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-pink-50 via-fuchsia-50 to-purple-50">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App;