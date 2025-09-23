import React from "react";
import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="w-64 bg-gradient-to-b from-pink-500 to-fuchsia-600 text-white p-6 flex flex-col gap-4">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
      <Link to="/admin" className={pathname === "/admin" ? "font-bold" : ""}>Dashboard</Link>
      <Link to="/admin/products" className={pathname === "/admin/products" ? "font-bold" : ""}>Products</Link>
      <Link to="/admin/orders" className={pathname === "/admin/orders" ? "font-bold" : ""}>Orders</Link>
      <Link to="/admin/users" className={pathname === "/admin/users" ? "font-bold" : ""}>Users</Link>
    </aside>
  );
}

export default AdminSidebar;