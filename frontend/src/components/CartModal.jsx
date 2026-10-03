import React from "react";
import { useCart } from "../context/CartContext";

const CartModal = () => {
  const { cartItems, removeFromCart, clearCart, isCartOpen, toggleCart } =
    useCart();

  if (!isCartOpen) return null;

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-md shadow-lg w-full max-w-lg p-6 relative">
        <button
          onClick={toggleCart}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-800 text-lg"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold text-center mb-4 text-[#8a0351]">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200 mb-4 max-h-64 overflow-y-auto">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center py-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.imgSrc}
                      alt={item.name}
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        ₹{item.price} × {item.quantity}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex justify-between items-center font-semibold text-gray-800">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mt-5">
              <button
                onClick={clearCart}
                className="text-sm text-gray-600 hover:text-red-700"
              >
                Clear Cart
              </button>
              <button className="bg-[#8a0351] text-white px-4 py-2 rounded hover:bg-[#700240]">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
