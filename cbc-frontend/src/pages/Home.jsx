import React from "react";
import ProductList from "../components/ProductList";


function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-fuchsia-100 to-purple-100">
      <section className="flex flex-col items-center justify-center py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 mb-4 drop-shadow-lg">GlowAura Cosmetics</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl text-center">Discover your beauty with our premium cosmetic products. Shop the latest trends and enjoy exclusive offers!</p>
        <a href="#products" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition text-lg">Shop Now</a>
      </section>
      <section id="products" className="max-w-6xl mx-auto px-4 py-8">
        <ProductList />
      </section>
    </div>
  );
}

export default Home;