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
        <Link to="/cart" className="text-white hover:text-yellow-200 transition font-semibold">Cart <span className="bg-yellow-300 text-pink-700 rounded-full px-2 py-0.5 ml-1 text-xs">{cart.length}</span></Link>
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-white font-medium">Welcome, {user.name}</span>
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