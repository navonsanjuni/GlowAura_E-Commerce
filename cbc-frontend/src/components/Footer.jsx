import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-400 via-fuchsia-500 to-purple-500 text-white py-8 mt-16 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-bold tracking-wide mb-1">GlowAura Cosmetics</span>
          <span className="text-sm text-pink-100">&copy; {new Date().getFullYear()} GlowAura. All rights reserved.</span>
        </div>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-200 transition">About</a>
          <a href="#" className="hover:text-yellow-200 transition">Contact</a>
          <a href="#" className="hover:text-yellow-200 transition">Privacy Policy</a>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" aria-label="Instagram" className="hover:text-yellow-200 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 0A5.75 5.75 0 0 0 2 7.75m0 8.5A5.75 5.75 0 0 0 7.75 22m8.5 0A5.75 5.75 0 0 0 22 16.25m0-8.5A5.75 5.75 0 0 0 16.25 2M12 7.5A4.5 4.5 0 1 0 12 16.5A4.5 4.5 0 0 0 12 7.5zm5.25-1.25h.01"/></svg>
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-yellow-200 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
