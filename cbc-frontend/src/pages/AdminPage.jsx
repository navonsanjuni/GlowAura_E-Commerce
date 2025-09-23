import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Routes, Route } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import AdminDashboard from "../components/AdminDashboard";
import AdminProducts from "../components/AdminProducts";
import AdminOrders from "../components/AdminOrders";
import AdminUsers from "../components/AdminUsers";

function AdminPage() {
  const user = useSelector((state) => state.user.user);

  if (!user || user.type !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 p-8 bg-gray-50">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="users" element={<AdminUsers />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminPage;