import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/allProductsData";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const formattedName = categoryName.replace("-", " "); // for URL slugs
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  const filteredProducts = products.filter(
    (item) =>
      item.category.toLowerCase() === formattedName.toLowerCase()
  );

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-700">
          No products found for "{formattedName}"
        </h2>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold text-[#8a0351] mb-8 text-center capitalize">
        {formattedName}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative">
              {item.badge && (
                <span
                  className={`${item.badgeColor} text-white text-xs font-semibold px-2 py-1 rounded-br-lg absolute top-0 left-0`}
                >
                  {item.badge}
                </span>
              )}
              <img
                src={item.imgSrc}
                alt={item.name}
                className="w-full h-48 object-contain mb-4"
              />
              <button
                onClick={() => addToWishlist(item)}
                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={isInWishlist(item.id) ? "red" : "none"}
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 10-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  />
                </svg>
              </button>
            </div>

            <h3 className="text-gray-800 font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-500 text-sm mb-1">{item.description}</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-pink-800 font-bold">₹{item.price}</span>
              <button
                onClick={() => addToCart(item)}
                className="bg-[#8a0351] text-white px-3 py-1 text-sm rounded hover:bg-[#700240]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
