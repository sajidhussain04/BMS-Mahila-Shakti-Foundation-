import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/allProductsData";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-gray-600 mb-4">Product not found</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-purple-700 text-white px-6 py-2 rounded"
        >
          Back to Products
        </button>
      </div>
    );
  }

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  return (
    <div className="max-w-6xl mx-auto p-8">
      <button
        onClick={() => navigate(-1)}
        className="text-purple-700 hover:underline mb-6"
      >
        ← Back
      </button>

      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg p-6 gap-8">
        <img
          src={product.imgSrc}
          alt={product.name}
          className="w-full md:w-1/2 h-96 object-contain rounded"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-[#8a0351] mb-2">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-4 text-lg">{product.description}</p>
          <p className="text-purple-700 font-semibold mb-3">
            Category: {product.category}
          </p>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-pink-800 font-bold text-2xl">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through text-lg">
                ₹{product.originalPrice}
              </span>
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => addToCart(product)}
              className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-lg"
            >
              🛒 Add to Cart
            </button>

            <button
              onClick={() => addToWishlist(product)}
              className={`px-6 py-3 rounded-lg border ${
                isInWishlist(product.id)
                  ? "bg-red-500 text-white border-red-500"
                  : "border-gray-400 text-gray-700 hover:bg-pink-100"
              }`}
            >
              ❤️{" "}
              {isInWishlist(product.id)
                ? "In Wishlist"
                : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4 text-purple-800">
            Related Products
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {related.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer p-4"
              >
                <img
                  src={item.imgSrc}
                  alt={item.name}
                  className="h-40 w-full object-contain mb-3"
                />
                <h4 className="font-semibold text-gray-700 mb-1">
                  {item.name}
                </h4>
                <p className="text-pink-700 font-bold">₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
