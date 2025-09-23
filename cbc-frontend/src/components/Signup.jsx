import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../redux/userSlice";


function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup({ firstname, lastname, email, password }));
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border border-pink-100">
        <h2 className="text-2xl font-bold text-pink-700 mb-6 text-center">Sign Up for GlowAura</h2>
        <div className="mb-4 flex gap-4">
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">First Name</label>
            <input
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-gray-700 mb-1">Last Name</label>
            <input
              value={lastname}
              onChange={e => setLastname(e.target.value)}
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold py-2 rounded-full shadow hover:from-pink-600 hover:to-fuchsia-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;