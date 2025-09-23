import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";


function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.selected);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (!product) return <div className="text-center py-8 text-pink-500 font-bold text-xl">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 mt-8 border border-pink-100">
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-lg border-2 border-pink-200 mx-auto md:mx-0" />
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-2">{product.name}</h2>
        <p className="text-lg text-gray-700 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-fuchsia-600 mb-6">${product.price} USD</p>
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-pink-600 hover:to-fuchsia-600 transition w-full md:w-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;