import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";


function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  if (cart.length === 0)
    return <div className="text-center py-12 text-xl text-gray-500">Your cart is empty.</div>;

  const total = cart.reduce((sum, item) => sum + (item.lastPrice || item.price || 0) * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8 border border-pink-100">
      <h2 className="text-2xl font-bold text-pink-700 mb-6">Your Cart</h2>
      <div className="space-y-4 mb-6">
        {cart.map((item) => (
          <div key={item._id} className="flex items-center justify-between bg-pink-50 rounded-lg p-4 shadow-sm">
            <div className="flex items-center gap-4">
              <img src={item.images && item.images[0] ? item.images[0] : '/default-product.png'} alt={item.productName} className="w-16 h-16 object-cover rounded border border-pink-200" />
              <div>
                <span className="font-semibold text-pink-700 block">{item.productName}</span>
                <span className="text-gray-600 block text-sm">${item.lastPrice || item.price} x {item.quantity}</span>
              </div>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item._id))}
              className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-1 rounded-full font-semibold transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="text-right font-bold text-lg mb-4">Total: ${total.toFixed(2)}</div>
      <button
        onClick={() => dispatch(clearCart())}
        className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-pink-600 hover:to-fuchsia-600 transition w-full"
      >
        Clear Cart
      </button>
    </div>
  );
}

export default Cart;