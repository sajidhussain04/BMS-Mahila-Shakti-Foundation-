import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import products from "../data/allProductsData";

const AllProducts = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  return (
    <section className="py-10 px-5 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-purple-800 mb-6">
        All Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)} // ✅ navigate to detail
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 relative group transform hover:scale-105 cursor-pointer"
          >
            {item.badge && (
              <span
                className={`${item.badgeColor} text-white text-xs font-semibold uppercase px-3 py-1 rounded-br-lg absolute top-0 left-0`}
              >
                {item.badge}
              </span>
            )}

            <div className="relative overflow-hidden">
              <img
                src={item.imgSrc}
                alt={item.name}
                className="w-full h-48 object-contain bg-white p-4 transition-transform duration-300 group-hover:scale-110"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToWishlist(item);
                }}
                aria-label="Add to favorites"
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
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 
                    5.67l-1.06-1.06a5.5 5.5 0 
                    10-7.78 7.78l1.06 1.06L12 
                    21.23l7.78-7.78 1.06-1.06a5.5 
                    5.5 0 000-7.78z"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-gray-700 font-semibold mb-1">{item.name}</h3>
              <p className="text-gray-500 text-sm mb-1">{item.description}</p>
              <p className="text-xs text-purple-700 font-semibold mb-3">
                {item.category}
              </p>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-pink-800 font-bold text-lg">
                    ₹{item.price}
                  </span>
                  {item.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ₹{item.originalPrice}
                    </span>
                  )}
                </div>

                <div className="bg-green-100 text-green-800 text-sm px-2 py-0.5 rounded flex items-center gap-1">
                  <span>{item.rating.toFixed(1)}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                  >
                    <path d="M12 17.27L18.18 21 16.54 13.97 22 
                    9.24l-7.19-.61L12 2 9.19 8.63 2 
                    9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(item);
                }}
                className="w-full bg-purple-800 hover:bg-purple-900 text-white py-3 rounded flex items-center justify-center gap-2 hover:scale-105 transition-all"
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
