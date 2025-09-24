import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";


function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center border border-pink-100">
      <Link to={`/product/${product._id}`} className="w-full flex flex-col items-center">
        <img src={product.images && product.images[0] ? product.images[0] : '/default-product.png'} alt={product.productName} className="w-32 h-32 object-cover rounded-lg mb-3 border-2 border-pink-200" />
        <h3 className="text-lg font-semibold text-pink-700 mb-1 text-center">{product.productName}</h3>
        <p className="text-md text-gray-700 font-bold mb-1">${product.lastPrice} USD</p>
        <p className="text-sm text-gray-500 mb-1">Stock: {product.stock}</p>
      </Link>
      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-auto bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-4 py-2 rounded-full font-semibold shadow hover:from-pink-600 hover:to-fuchsia-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;