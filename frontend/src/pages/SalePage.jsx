// src/pages/SalePage.jsx
import React from "react";
import products from "../data/allProductsData";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const SalePage = () => {
  const saleProducts = products.filter((p) => p.badge && p.badge.includes("OFF"));
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  return (
    <section className="bg-pink-50 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[#8a0351] mb-4">
          🎉 Exclusive Sale Offers
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Don’t miss these limited-time discounts on our most-loved products!
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {saleProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="w-full h-52 object-contain bg-white"
                />
                {item.badge && (
                  <span className="absolute top-2 left-2 bg-orange-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                <button
                  onClick={() => addToWishlist(item)}
                  className="absolute top-3 right-3 bg-white p-1 rounded-full shadow hover:bg-pink-50 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={isInWishlist(item.id) ? "red" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className={`w-6 h-6 ${
                      isInWishlist(item.id) ? "text-red-500" : "text-gray-400"
                    } transition`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{item.description}</p>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-[#8a0351] font-bold text-lg">
                      ₹{item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-gray-400 line-through text-sm ml-2">
                        ₹{item.originalPrice}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-[#8a0351] text-white px-4 py-2 rounded-md text-sm hover:bg-[#700240] transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-[#8a0351] text-white p-10 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-3">More Offers Coming Soon!</h2>
          <p className="max-w-xl mx-auto text-sm text-pink-100 mb-5">
            Stay tuned for exclusive new arrivals, bundle deals, and surprise
            gifts every month.
          </p>
          <button className="bg-white text-[#8a0351] px-6 py-3 font-semibold rounded-full hover:bg-pink-50 transition">
            Notify Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default SalePage;
