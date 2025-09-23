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
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 mt-8 border border-pink-100">
      <div className="flex flex-col items-center md:items-start">
        <img src={product.images && product.images[0] ? product.images[0] : '/default-product.png'} alt={product.productName} className="w-72 h-72 object-cover rounded-lg border-2 border-pink-200 mb-4" />
        <div className="flex gap-2 mt-2">
          {product.images && product.images.slice(1).map((img, idx) => (
            <img key={idx} src={img} alt="alt" className="w-14 h-14 object-cover rounded border border-pink-100" />
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-pink-700 mb-2">{product.productName}</h2>
        <p className="text-lg text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl text-gray-500 mb-2">Product ID: {product.productId}</p>
        <p className="text-lg text-gray-500 mb-2">Stock: {product.stock}</p>
        <p className="text-2xl font-bold text-fuchsia-600 mb-6">${product.lastPrice} USD</p>
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