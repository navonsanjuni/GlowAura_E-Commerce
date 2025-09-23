import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/userSlice";


function Navbar() {
  const cart = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 shadow-lg">
      <div className="flex items-center gap-6">
        <Link to="/" className="text-2xl font-bold text-white tracking-wide hover:text-yellow-200 transition">GlowAura</Link>
      </div>
      <div className="flex items-center gap-6 ml-auto">
        <Link to="/cart" className="relative text-white hover:text-yellow-200 transition font-semibold">
          <span className="material-icons align-middle">shopping_cart</span>
          <span className="absolute -top-2 -right-3 bg-yellow-300 text-pink-700 rounded-full px-2 py-0.5 text-xs">{cart.length}</span>
        </Link>
        {user ? (
          <>
            <span className="text-white font-medium">Welcome, {user.firstname || user.name}</span>
            <button onClick={() => dispatch(logout())} className="bg-white text-pink-600 px-3 py-1 rounded hover:bg-yellow-200 font-semibold transition">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-white hover:text-yellow-200 transition font-semibold">Login</Link>
            <Link to="/signup" className="bg-white text-pink-600 px-3 py-1 rounded hover:bg-yellow-200 font-semibold transition">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;